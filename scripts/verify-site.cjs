// Verificación del sitio exportado: enlaces de contacto, presencia de WhatsApp y
// «Agendar cita», desbordes, texto recortado, accesibilidad (axe), teclado y
// movimiento reducido, en 390, 768 y 1440 px. Uso:
//   npm run build && npm start   (en otra terminal)
//   npm run test:e2e
const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;
const fs = require("node:fs");
const path = require("node:path");

const target = process.env.TARGET_URL || "http://localhost:3080";
const WA = "https://wa.me/523311704104";
const TELS = ["tel:+523319833354", "tel:+523319833355", "tel:+523336306433"];
const routes = [
  "/",
  "/servicios/",
  "/servicios/traslativos-de-dominio/",
  "/servicios/sucesiones/",
  "/servicios/corporativo/",
  "/servicios/poderes-notariales/",
  "/servicios/certificaciones/",
  "/servicios/asesoria-legal/",
  "/servicios/creditos-hipotecarios/",
  "/proceso/",
  "/instalaciones/",
  "/notaria/",
  "/contacto/",
  "/aviso-de-privacidad/",
  "/pagina-inexistente/",
];

(async () => {
  const browser = await chromium.launch();
  const report = { target, fecha: new Date().toISOString(), paginas: [], fallas: [] };
  const fail = (msg) => report.fallas.push(msg);

  for (const width of [390, 768, 1440]) {
    const context = await browser.newContext({ viewport: { width, height: width === 390 ? 844 : width === 768 ? 1024 : 900 } });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (m) => m.type() === "error" && !page.url().includes("pagina-inexistente") && errors.push(m.text()));

    for (const route of routes) {
      const res = await page.goto(target + route, { waitUntil: "networkidle" });
      await page.evaluate(() => document.fonts.ready);
      // Recorre la página para revelar todo y cargar imágenes diferidas.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 500) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 60));
        }
        window.scrollTo(0, 0);
      });
      await page.waitForTimeout(400);
      const data = await page.evaluate(({ WA }) => {
        const links = [...document.querySelectorAll("a[href]")].map((a) => ({ href: a.getAttribute("href"), target: a.getAttribute("target"), text: (a.textContent || "").trim() }));
        const wa = links.filter((l) => /wa\.me|whatsapp/i.test(l.href));
        const tel = links.filter((l) => l.href.startsWith("tel:"));
        const visible = (sel) => {
          const el = document.querySelector(sel);
          if (!el) return false;
          const r = el.getBoundingClientRect();
          const cs = getComputedStyle(el);
          return r.width > 0 && r.height > 0 && cs.visibility !== "hidden" && cs.display !== "none" && r.bottom > 0 && r.top < innerHeight;
        };
        const clipped = [...document.querySelectorAll("h1, h2, h3, .btn, .link")]
          .filter((el) => el.scrollWidth > el.clientWidth + 2 && getComputedStyle(el).overflow !== "visible")
          .map((el) => (el.textContent || "").trim().slice(0, 40));
        const offscreen = [...document.querySelectorAll("main *")]
          .filter((el) => {
            const r = el.getBoundingClientRect();
            if (!(r.width > 0 && r.right > document.documentElement.clientWidth + 1) || getComputedStyle(el).position === "fixed") return false;
            // Lo recortado por un contenedor (paralaje, marcas de agua, marquesina) no desborda.
            for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
              const o = getComputedStyle(a).overflowX;
              if (o === "hidden" || o === "clip") return false;
            }
            return true;
          })
          .slice(0, 5)
          .map((el) => el.className.toString().slice(0, 60));
        return {
          title: document.title,
          overflow: document.documentElement.scrollWidth > innerWidth,
          wa,
          waBad: wa.filter((l) => !l.href.startsWith(WA) || l.target !== "_blank").map((l) => l.href),
          waSinMensaje: wa.filter((l) => !/\?text=.+/.test(l.href)).map((l) => l.href),
          tel: [...new Set(tel.map((l) => l.href))],
          agendar: [...document.querySelectorAll("header a")].some((a) => /Agendar cita/.test(a.textContent) && a.href.startsWith(WA)),
          agendarVisible: visible(".hdr-cta"),
          flotante: visible(".wa-float"),
          barra: visible(".barra"),
          h1: document.querySelectorAll("h1").length,
          clipped,
          offscreen,
        };
      }, { WA });

      const tag = `${width}px ${route}`;
      if (route !== "/pagina-inexistente/" && res.status() !== 200) fail(`${tag}: estado ${res.status()}`);
      if (data.overflow) fail(`${tag}: desborde horizontal`);
      if (data.offscreen.length) fail(`${tag}: elementos fuera de pantalla ${data.offscreen.join(" | ")}`);
      if (data.waBad.length) fail(`${tag}: WhatsApp con número o destino incorrecto ${data.waBad.join(", ")}`);
      if (data.waSinMensaje.length) fail(`${tag}: WhatsApp sin mensaje prellenado`);
      const badTel = data.tel.filter((t) => !TELS.includes(t));
      if (badTel.length) fail(`${tag}: teléfonos no autorizados ${badTel.join(", ")}`);
      if (!data.agendar || !data.agendarVisible) fail(`${tag}: «Agendar cita» no visible en el encabezado`);
      if (!data.flotante) fail(`${tag}: falta el botón fijo de WhatsApp`);
      if (width === 390 && !data.barra) fail(`${tag}: falta la barra móvil`);
      if (data.h1 !== 1) fail(`${tag}: ${data.h1} elementos h1`);
      if (data.clipped.length) fail(`${tag}: texto recortado ${data.clipped.join(" | ")}`);

      if (width === 1440 || width === 390) {
        const axe = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
        for (const v of axe.violations) fail(`${tag}: axe ${v.id} (${v.nodes.length}) ${v.help}`);
      }
      report.paginas.push({ ancho: width, ruta: route, titulo: data.title, whatsapp: data.wa.length, telefonos: data.tel });
    }
    if (errors.length) fail(`${width}px: errores de consola ${[...new Set(errors)].join(" | ")}`);
    await context.close();
  }

  // Teclado: el primer Tab lleva al salto de contenido y el foco es visible.
  {
    const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
    await page.goto(target + "/", { waitUntil: "networkidle" });
    await page.keyboard.press("Tab");
    const skip = await page.evaluate(() => document.activeElement?.className.includes("skip-link"));
    if (!skip) fail("Teclado: el primer Tab no enfoca «Saltar al contenido»");
    for (let i = 0; i < 4; i++) await page.keyboard.press("Tab");
    const outline = await page.evaluate(() => {
      const el = document.activeElement;
      const cs = getComputedStyle(el);
      return cs.outlineStyle !== "none" && parseFloat(cs.outlineWidth) >= 2;
    });
    if (!outline) fail("Teclado: el foco no es visible en la navegación");
    // El desplegable de Servicios se abre con teclado y se cierra con Escape.
    await page.focus(".hdr-chevron");
    await page.keyboard.press("Enter");
    const open = await page.getAttribute("#menu-servicios", "data-open");
    await page.keyboard.press("Escape");
    const closed = await page.getAttribute("#menu-servicios", "data-open");
    if (open !== "true" || closed !== "false") fail("Teclado: el desplegable de Servicios no abre o no cierra");
    await page.close();
  }

  // Movimiento reducido: todo el contenido revelable visible sin animación.
  for (const route of ["/", "/proceso/", "/instalaciones/"]) {
    const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, reducedMotion: "reduce" });
    const page = await context.newPage();
    await page.goto(target + route, { waitUntil: "networkidle" });
    const hidden = await page.evaluate(() => [...document.querySelectorAll("[data-rv], [data-rv-lines] .ln > span")].filter((el) => getComputedStyle(el).opacity !== "1" || getComputedStyle(el).transform !== "none").length);
    const animated = await page.evaluate(() => document.documentElement.classList.contains("mo"));
    if (hidden || animated) fail(`Movimiento reducido ${route}: ${hidden} elementos ocultos o desplazados`);
    fs.mkdirSync("docs/screenshots/despues", { recursive: true });
    await page.screenshot({ path: `docs/screenshots/despues/1440-${route === "/" ? "inicio" : route.replace(/\//g, "")}-movimiento-reducido.png` });
    await context.close();
  }

  await browser.close();
  fs.writeFileSync("docs/verificacion.json", JSON.stringify(report, null, 2));
  if (report.fallas.length) {
    console.log(`✗ ${report.fallas.length} fallas:\n- ` + report.fallas.join("\n- "));
    process.exitCode = 1;
  } else {
    console.log(`✓ ${report.paginas.length} combinaciones de página y ancho sin fallas.`);
  }
})();
