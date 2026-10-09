const { chromium } = require("playwright");
const AxeBuilder = require("@axe-core/playwright").default;
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");
const target = process.env.TARGET_URL || "http://localhost:3080";
const output = path.resolve("docs/screenshots");
fs.mkdirSync(output, { recursive: true });
(async () => {
  const browser = await chromium.launch({ headless: false });
  const report = { target, viewports: [], checks: [], axe: [], errors: [] };
  try {
    const sections = [
      "inicio",
      "servicios",
      "proceso",
      "instalaciones",
      "nosotros",
      "instituciones",
      "titular",
      "testimonios",
      "contacto",
      "pie",
    ];
    for (const width of [390, 768, 1440]) {
      const context = await browser.newContext({
        viewport: { width, height: width === 390 ? 844 : 1000 },
        reducedMotion: "reduce",
      });
      const page = await context.newPage();
      page.on("pageerror", (e) => report.errors.push(e.message));
      page.on("console", (m) => {
        if (
          m.type() === "error" &&
          !(
            page.url().includes("pagina-inexistente") &&
            m.text().includes("404")
          )
        )
          report.errors.push(m.text());
      });
      await page.goto(target, { waitUntil: "load" });
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: path.join(output, `${width}-vista-inicial.png`),
      });
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
        `Overflow ${width}`,
      );
      for (const id of sections) {
        const locator = page.locator("#" + id);
        await locator.scrollIntoViewIfNeeded();
        const box = await locator.boundingBox();
        const scrollY = await page.evaluate(() => window.scrollY);
        await page.screenshot({
          path: path.join(output, `${width}-${id}.png`),
          fullPage: true,
          style: '.site-header,.whatsapp-float,.mobile-contact-bar,.skip-link{visibility:hidden!important}',
          clip: {
            x: 0,
            y: Math.max(0, Math.round(box.y + scrollY)),
            width,
            height: Math.round(box.height),
          },
        });
      }
      await page.screenshot({
        path: path.join(output, `${width}-pagina-completa.png`),
        fullPage: true,
        style: '.site-header,.whatsapp-float,.mobile-contact-bar,.skip-link{visibility:hidden!important}',
      });
      const violations = (
        await new AxeBuilder({ page })
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze()
      ).violations;
      report.axe.push({
        width,
        violations: violations.map((v) => ({
          id: v.id,
          impact: v.impact,
          nodes: v.nodes.map((n) => ({
            target: n.target,
            summary: n.failureSummary,
          })),
        })),
      });
      for (const route of [
        "/",
        "/aviso-de-privacidad/",
        "/pagina-inexistente/",
      ]) {
        const response = await page.goto(target + route, { waitUntil: "load" });
        assert.equal(
          response.status(),
          route.includes("inexistente") ? 404 : 200,
        );
        for (const selector of [".header-appointment", ".whatsapp-float"]) {
          const a = page.locator(selector);
          assert(await a.isVisible());
          const href = await a.getAttribute("href");
          assert(href.startsWith("https://wa.me/523311704104?text="));
          const decoded = new URL(href).searchParams.get("text");
          assert.equal(
            decoded,
            selector === ".header-appointment"
              ? "Hola, me gustaría agendar una cita en la Notaría 80."
              : "Hola, quisiera información sobre un trámite en la Notaría 80.",
          );
          await context.route("https://wa.me/**", (route) =>
            route.fulfill({
              status: 200,
              contentType: "text/html",
              body: "<title>Destino WhatsApp verificado</title>",
            }),
          );
          const popup = page.waitForEvent("popup");
          await a.click();
          const dest = await popup;
          await dest.waitForLoadState();
          assert.equal(dest.url(), href);
          await dest.close();
        }
        if (width === 390) {
          assert(await page.locator(".mobile-contact-bar").isVisible());
          assert.equal(
            await page
              .locator(".mobile-contact-bar a")
              .nth(1)
              .getAttribute("href"),
            "tel:+523319833354",
          );
        }
        if (route !== "/")
          await page.screenshot({
            path: path.join(
              output,
              `${width}-${route.includes("inexistente") ? "404" : "privacidad"}.png`,
            ),
            fullPage: true,
          });
      }
      await page.goto(target);
      for (const a of await page.locator('a[href^="https://wa.me/"]').all()) {
        assert(
          (await a.getAttribute("href")).startsWith(
            "https://wa.me/523311704104?text=",
          ),
        );
      }
      assert.equal(await page.locator(".service-card a").count(), 6);
      const links = await page
        .locator(".service-card a")
        .evaluateAll((els) => els.map((e) => e.href));
      links.forEach((u) =>
        assert.match(
          new URL(u).searchParams.get("text"),
          /^Hola, quisiera información sobre .+ en la Notaría 80\.$/,
        ),
      );
      if (width !== 1440) {
        await page.getByRole("button", { name: "Abrir menú" }).click();
        assert(await page.locator("#mobile-menu").isVisible());
        await page.keyboard.press("Escape");
        assert.equal(await page.locator("#mobile-menu").isVisible(), false);
      }
      await page.locator("#contacto").scrollIntoViewIfNeeded();
      await page
        .getByRole("button", { name: "Continuar", exact: true })
        .click();
      assert(await page.locator(".form-error").isVisible());
      await page
        .getByLabel("¿Qué trámite necesita?")
        .selectOption("Sucesiones");
      await page
        .getByRole("button", { name: "Continuar", exact: true })
        .click();
      await page.getByRole("button", { name: "Preparar mensaje" }).click();
      assert(await page.locator(".form-error").isVisible());
      await page.getByLabel("Su nombre").fill("María & José");
      await page.getByLabel(/Día preferido/).selectOption("miércoles");
      await page.getByRole("button", { name: "Preparar mensaje" }).click();
      const booking = page.getByRole("link", {
        name: "Abrir WhatsApp",
        exact: true,
      });
      await booking.scrollIntoViewIfNeeded();
      assert(
        await booking.evaluate((el) => {
          const r = el.getBoundingClientRect();
          return el.contains(
            document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2),
          );
        }),
        "Cita cubierta por contacto fijo",
      );
      const message = new URL(
        await booking.getAttribute("href"),
      ).searchParams.get("text");
      assert(message.includes("María & José"));
      assert(message.includes("Sucesiones"));
      assert(message.includes("miércoles"));
      await page
        .locator(".appointment")
        .screenshot({
          path: path.join(output, `${width}-asistente-listo.png`),
        });
      await page.getByRole("button", { name: "Cambiar trámite" }).click();
      assert.equal(
        await page.getByLabel("¿Qué trámite necesita?").inputValue(),
        "Sucesiones",
      );
      await page.getByRole("button", { name: "Conocer más espacios" }).click();
      assert.equal(await page.locator(".more-photos figure").count(), 8);
      await page.getByRole("button", { name: "Ver menos fotografías" }).click();
      assert.equal(
        await page
          .getByRole("button", { name: "Pausar movimiento" })
          .isVisible(),
        false,
      );
      const animated = await page
        .locator(".marquee-track")
        .evaluate((el) => getComputedStyle(el).animationName);
      assert.equal(animated, "none");
      assert.equal(await page.locator("iframe").count(), 0);
      await page.getByRole("button", { name: "Mostrar mapa" }).click();
      assert.equal(await page.locator("iframe").count(), 1);
      const body = await page.locator("body").innerText();
      assert(body.includes("Mtra. María Enriqueta"));
      assert(!body.includes("seis salas"));
      await page.getByText("Ver trayectoria completa", { exact: true }).click();
      assert(
        (await page.locator(".trajectory").innerText()).includes("2393029"),
      );
      report.viewports.push(width);
      report.checks.push(
        `${width}: rutas, enlaces reales abiertos (interceptados), servicios, menú, cita, galería, pausa, mapa diferido, cédulas y reduced motion verificados`,
      );
      await context.close();
    }
    const context = await browser.newContext({
      viewport: { width: 1440, height: 900 },
      reducedMotion: "no-preference",
    });
    const page = await context.newPage();
    await page.goto(target);
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({
      path: path.join(output, "1440-hero-movimiento.png"),
    });
    await page.locator("#instituciones").scrollIntoViewIfNeeded();
    assert.equal(
      await page
        .locator(".marquee-track")
        .evaluate((e) => getComputedStyle(e).animationName),
      "marquee-travel",
    );
    await page.getByRole("button", { name: "Pausar movimiento" }).click();
    assert.equal(
      await page
        .locator(".marquee-track")
        .evaluate((e) => getComputedStyle(e).animationPlayState),
      "paused",
    );
    await context.close();
    fs.writeFileSync("docs/verificacion.json", JSON.stringify(report, null, 2));
    console.log(JSON.stringify(report, null, 2));
    assert.equal(report.errors.length, 0);
    assert(
      report.axe.every((r) => r.violations.length === 0),
      "Hay hallazgos de accesibilidad",
    );
  } finally {
    await browser.close();
  }
})().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});
