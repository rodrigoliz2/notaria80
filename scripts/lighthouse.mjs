// Lighthouse móvil (configuración por defecto: Moto G con red y CPU simuladas)
// sobre las páginas principales del sitio exportado.
import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";

const target = process.env.TARGET_URL || "http://localhost:3080";
const routes = (process.env.ROUTES || "/,/servicios/,/servicios/sucesiones/,/proceso/,/instalaciones/,/notaria/,/contacto/").split(",");
const chrome = await launch({ chromePath: chromium.executablePath(), chromeFlags: ["--headless", "--no-sandbox"] });
const summary = [];
try {
  await mkdir("docs/audits", { recursive: true });
  for (const route of routes) {
    const result = await lighthouse(target + route, {
      port: chrome.port,
      output: ["html", "json"],
      logLevel: "error",
      onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    });
    const name = route === "/" ? "inicio" : route.replace(/^\/|\/$/g, "").replace(/\//g, "-");
    await writeFile(`docs/audits/lighthouse-mobile-${name}.html`, result.report[0]);
    const scores = Object.fromEntries(Object.entries(result.lhr.categories).map(([k, v]) => [k, Math.round(v.score * 100)]));
    const row = {
      ruta: route,
      ...scores,
      LCP: result.lhr.audits["largest-contentful-paint"].displayValue,
      CLS: result.lhr.audits["cumulative-layout-shift"].displayValue,
      TBT: result.lhr.audits["total-blocking-time"].displayValue,
      pendientes: Object.values(result.lhr.audits)
        .filter((a) => a.score !== null && a.score < 0.9 && a.scoreDisplayMode !== "informative" && a.scoreDisplayMode !== "manual")
        .map((a) => `${a.id}${a.displayValue ? ` (${a.displayValue})` : ""}`),
    };
    summary.push(row);
    console.log(JSON.stringify(row));
  }
  await writeFile("docs/audits/lighthouse-mobile.json", JSON.stringify(summary, null, 2));
} finally {
  await chrome.kill();
}
