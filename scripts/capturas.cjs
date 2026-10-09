// Capturas de página completa y de primera vista en 390, 768 y 1440 px.
// Uso: node scripts/capturas.cjs <base-url> <carpeta> [ruta1 ruta2 ...]
const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

const [base = "http://localhost:3080", dir = "docs/screenshots/despues", ...routes] = process.argv.slice(2);
const paths = routes.length ? routes : ["/"];
const widths = [390, 768, 1440];

(async () => {
  fs.mkdirSync(dir, { recursive: true });
  const browser = await chromium.launch();
  for (const width of widths) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : width === 768 ? 1024 : 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    for (const route of paths) {
      const name = route === "/" ? "inicio" : route.replace(/^\/|\/$/g, "").replace(/\//g, "--");
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.waitForTimeout(1600);
      await page.screenshot({ path: path.join(dir, `${width}-${name}-vista.png`) });
      // Recorre la página para disparar los revelados y la carga diferida.
      await page.evaluate(async () => {
        const step = window.innerHeight * 0.6;
        for (let y = 0; y < document.body.scrollHeight; y += step) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 120));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(900);
      await page.screenshot({ path: path.join(dir, `${width}-${name}-completa.png`), fullPage: true });
      console.log(width, route);
    }
    await context.close();
  }
  await browser.close();
})();
