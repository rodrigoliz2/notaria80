# Notaría Pública 80 de Guadalajara

Sitio institucional responsivo orientado a WhatsApp y llamadas. Next.js App Router + TypeScript + Tailwind CSS, exportación completamente estática. Sin servidor de formularios, base de datos ni autenticación.

## Desarrollo

Requiere Node.js 20.9 o posterior.

```sh
npm install
npm run dev
```

Abra http://localhost:3000. Si el puerto está ocupado, Next indicará el alternativo.

## Compilación y vista de producción

```sh
npm run lint
npm run typecheck
npm run build
npm start
```

La exportación queda en `out/`. Vista de producción: http://localhost:3080. Se puede elegir otro puerto con `PORT=3081 npm start`. El servidor local aplica compresión Brotli/gzip para reproducir la entrega estática de un CDN.

## Despliegue

Importar este repositorio en Vercel. `vercel.json` define `npm run build`, directorio `out/`, cabeceras y redirecciones permanentes de las rutas anteriores hacia las secciones correspondientes. Configure el dominio `notaria80gdl.mx` en Vercel. No hay secretos o variables obligatorias. Este trabajo no cambia DNS ni publica el sitio automáticamente.

## Contenido y contacto

`src/site.config.ts` centraliza WhatsApp, teléfonos, mensajes, servicios, proceso, instituciones y galería. WhatsApp único: 33 1170 4104. Los tres números de teléfono solo reciben enlaces de llamada. Las coordenadas provienen del enlace de Google Maps proporcionado.

El asistente selecciona trámite y pide nombre/día opcional. Muestra el mensaje para revisión y abre WhatsApp; no guarda datos, no confirma citas ni envía mensajes automáticamente. Google Maps solo se carga al pulsar Mostrar mapa. El aviso de privacidad es un borrador visible y excluido de indexación.

## Assets

Los originales están en `public/assets/fotos/` y `public/assets/logo/`. `npm run assets` regenera cuatro tamaños WebP, íconos y Open Graph. Se conservan los PNG y JPG de respaldo; los SVG son trazados reales del canal alfa, no PNG incrustados ni una reinterpretación del logo. Al sustituir fotos por originales de mayor resolución, mantenga los nombres y actualice dimensiones en `site.config.ts` si cambian las proporciones.

Fuentes WOFF2 locales y licencias en `src/fonts/`. No se cargan tipografías de Google en el navegador.

## Verificación

```sh
npx playwright install chromium
npm start
# En otra terminal:
npm run test:e2e
npm run audit
```

Las pruebas usan Chromium visible y el sitio estático local. `TARGET_URL` permite otra URL. Las aperturas de WhatsApp se interceptan para comprobar el destino sin enviar mensajes. Se verifican las tres páginas en 390, 768 y 1440 px, seis CTAs de servicio, asistente, errores, navegación, galería, mapa diferido y movimiento reducido. Capturas en `docs/screenshots/`, resultados en `docs/verificacion.json` y Lighthouse en `docs/audits/`.

## Documentación

- `DECISIONES.md`: dirección de arte, arquitectura y Figma.
- `PENDIENTES.md`: datos por confirmar y preparación de lanzamiento.
- `CREDITOS.md`: fuentes y materiales.
- `docs/CRITICA.md`: revisión independiente y correcciones.
