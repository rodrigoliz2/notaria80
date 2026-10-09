import lighthouse from "lighthouse";
import { launch } from "chrome-launcher";
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
const target = process.env.TARGET_URL || "http://localhost:3080";
const chrome = await launch({
  chromePath: chromium.executablePath(),
  chromeFlags: ["--headless", "--no-sandbox"],
});
try {
  const result = await lighthouse(target, {
    port: chrome.port,
    output: ["html", "json"],
    logLevel: "error",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
  });
  await mkdir("docs/audits", { recursive: true });
  await writeFile("docs/audits/lighthouse-mobile.html", result.report[0]);
  await writeFile("docs/audits/lighthouse-mobile.json", result.report[1]);
  const categories = Object.fromEntries(
    Object.entries(result.lhr.categories).map(([k, v]) => [
      k,
      Math.round(v.score * 100),
    ]),
  );
  console.log(
    JSON.stringify(
      {
        categories,
        LCP: result.lhr.audits["largest-contentful-paint"].displayValue,
        CLS: result.lhr.audits["cumulative-layout-shift"].displayValue,
        failures: Object.values(result.lhr.audits)
          .filter((a) => a.score !== null && a.score < 1)
          .map((a) => ({
            id: a.id,
            title: a.title,
            score: a.score,
            display: a.displayValue,
            details: a.details,
          })),
      },
      null,
      2,
    ),
  );
} finally {
  await chrome.kill();
}
