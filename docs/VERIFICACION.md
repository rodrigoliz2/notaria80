# Verificación

Auditoría de producción local, Chromium y Lighthouse con emulación móvil predeterminada.

performance: 99
accessibility: 100
best-practices: 100
seo: 100

LCP: 2.2 s. CLS: 0.

Resultado completo: audits/lighthouse-mobile.html. La entrega tiene compresión Brotli/gzip, fuentes WOFF2 locales y fotografía prioritaria.

Pruebas de Playwright: verificacion.json. Capturas por sección, páginas legales y 404 en 390, 768 y 1440 px. Aperturas de WhatsApp interceptadas con el destino exacto; no se envían mensajes.

Auditoría de dependencias de producción: cero vulnerabilidades. Los hallazgos exclusivamente de herramientas de lint se describen en PENDIENTES.md.

Resultado final de Playwright: tres tamaños verificados, cero errores de JavaScript y cero infracciones WCAG A/AA detectadas por axe. 46 capturas guardadas. Las capturas de secciones ocultan elementos fijos solo durante la captura para mostrar el contenido; las vistas iniciales conservan encabezado y acciones de contacto.

Comprobaciones terminadas: npm run lint, npm run typecheck y npm run build. npm run dev también respondió con contenido y enlaces correctos.
