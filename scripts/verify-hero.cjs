// Regresión: contacto completo y accionable en la primera pantalla de inicio.
// TARGET_URL=http://localhost:3080 node scripts/verify-hero.cjs
// HERO_REPORT_DIR permite guardar capturas y mediciones fuera del proyecto.
const { chromium } = require("playwright");
const fs = require("node:fs");
const path = require("node:path");

const target = process.env.TARGET_URL || "http://localhost:3080";
const output = process.env.HERO_REPORT_DIR;
const viewports = [
  [1440, 820], [1465, 848], [1440, 900], [1366, 768], [1280, 720],
  [1024, 768], [1024, 600], [1920, 1080], [768, 1024],
  [430, 932], [390, 844], [390, 667], [360, 640], [320, 667], [320, 568],
];

(async () => {
  const browser = await chromium.launch();
  const report = { target, fecha: new Date().toISOString(), casos: [], fallas: [] };
  if (output) fs.mkdirSync(output, { recursive: true });
  try {
    for (const reducedMotion of ["no-preference", "reduce"]) {
      const context = await browser.newContext({ reducedMotion });
      const page = await context.newPage();
      page.on("pageerror", (error) => report.fallas.push(error.message));
      await page.goto(target, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      await page.waitForTimeout(1900);
      for (const [width, height] of viewports) {
        await page.setViewportSize({ width, height });
        await page.evaluate(() => window.scrollTo(0, 0));
        await page.waitForTimeout(150);
        const data = await page.evaluate(() => {
          const rect = (element) => {
            const r = element.getBoundingClientRect();
            return { top: r.top, right: r.right, bottom: r.bottom, left: r.left, width: r.width, height: r.height };
          };
          const bar = document.querySelector(".barra");
          const barRect = rect(bar);
          const bottom = barRect.height ? barRect.top : innerHeight;
          const headerBottom = document.querySelector("header").getBoundingClientRect().bottom;
          const inspect = (element) => {
            const r = rect(element);
            const points = [[r.left + 3, r.top + 3], [r.right - 3, r.top + 3],
              [r.left + 3, r.bottom - 3], [r.right - 3, r.bottom - 3],
              [r.left + r.width / 2, r.top + r.height / 2]];
            const cs = getComputedStyle(element);
            return {
              ...r,
              visible: r.width > 0 && r.height > 0 && cs.visibility === "visible" && cs.opacity === "1",
              completa: r.left >= 0 && r.right <= innerWidth + 1 && r.top >= headerBottom && r.bottom <= bottom + 1,
              libre: points.every(([x, y]) => element.contains(document.elementFromPoint(x, y))),
              href: element.getAttribute("href"),
            };
          };
          const whatsapp = document.querySelector('.hero-actions [data-contact="whatsapp"]');
          const call = document.querySelector('.hero-actions [data-contact="phone"]');
          const phone = call.getBoundingClientRect().width ? call : bar.querySelector('[data-contact="phone"]');
          const wa = inspect(whatsapp);
          const tel = inspect(phone);
          // La barra móvil es una zona de contacto válida bajo el contenido.
          if (phone.closest(".barra")) tel.completa = tel.left >= 0 && tel.right <= innerWidth && tel.bottom <= innerHeight;
          const content = [...document.querySelectorAll(".hero-layout h1, .hero-copy p, .hero-actions .btn-label")];
          return {
            whatsapp: wa, llamar: tel,
            textoCompleto: content.every((el) => el.scrollWidth <= el.clientWidth + 1),
            hero: rect(document.querySelector(".hero-layout")),
          };
        });
        const tag = `${width}x${height} ${reducedMotion}`;
        for (const [name, link] of [["WhatsApp", data.whatsapp], ["Llamar", data.llamar]]) {
          if (!link.visible || !link.completa || !link.libre) report.fallas.push(`${tag}: ${name} oculto, recortado o cubierto`);
        }
        const wa = new URL(data.whatsapp.href);
        if (wa.origin !== "https://wa.me" || wa.pathname !== "/523311704104" || !wa.searchParams.get("text")) report.fallas.push(`${tag}: destino WhatsApp incorrecto`);
        if (data.llamar.href !== "tel:+523319833354") report.fallas.push(`${tag}: teléfono incorrecto`);
        if (!data.textoCompleto) report.fallas.push(`${tag}: texto de portada recortado`);
        report.casos.push({ ancho: width, alto: height, movimiento: reducedMotion, ...data });
        if (output && reducedMotion === "no-preference" && [[1440, 820], [390, 667], [320, 568]].some(([w, h]) => w === width && h === height)) {
          await page.screenshot({ path: path.join(output, `${width}x${height}.png`) });
        }
      }
      // En horizontal bajo, el contenido puede continuar al desplazar la página.
      await page.setViewportSize({ width: 844, height: 390 });
      await page.locator('.hero-actions [data-contact="whatsapp"]').scrollIntoViewIfNeeded();
      await page.waitForTimeout(250);
      const reachable = await page.locator('.hero-actions [data-contact="whatsapp"]').evaluate((el) => {
        const r = el.getBoundingClientRect();
        return r.top >= 64 && r.bottom <= innerHeight && el.contains(document.elementFromPoint(r.left + r.width / 2, r.top + r.height / 2));
      });
      if (!reachable) report.fallas.push(`844x390 ${reducedMotion}: WhatsApp inaccesible al desplazar`);
      await context.close();
    }
  } finally {
    await browser.close();
  }
  if (output) fs.writeFileSync(path.join(output, "verificacion.json"), JSON.stringify(report, null, 2));
  if (report.fallas.length) {
    console.error(report.fallas.join("\n"));
    process.exitCode = 1;
  } else {
    console.log(`✓ ${report.casos.length} comprobaciones de portada y 2 de orientación horizontal sin fallas.`);
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
