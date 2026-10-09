# Verificación del rediseño

Medido el 8 de octubre de 2026 sobre la exportación de producción (`npm run build`), servida en local con `npm start` y compresión Brotli o gzip.

## Compilación

- `npm run lint`: sin errores.
- `npm run typecheck`: sin errores.
- `npm run build`: 19 rutas estáticas, incluidas las siete páginas de área.

## Lighthouse móvil

Configuración por defecto (Moto G, red y CPU simuladas). Detalle por página en `docs/audits/`.

| Página | Rendimiento | Accesibilidad | Buenas prácticas | SEO | LCP | CLS | TBT |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `/` | 97 | 100 | 100 | 100 | 2.5 s | 0 | 10 ms |
| `/servicios/` | 99 | 100 | 100 | 100 | 1.9 s | 0 | 10 ms |
| `/servicios/sucesiones/` | 96 | 100 | 100 | 100 | 2.7 s | 0 | 10 ms |
| `/proceso/` | 99 | 100 | 100 | 100 | 2.2 s | 0 | 10 ms |
| `/instalaciones/` | 97 | 100 | 100 | 100 | 2.5 s | 0 | 0 ms |
| `/notaria/` | 99 | 100 | 100 | 100 | 1.9 s | 0 | 0 ms |
| `/contacto/` | 99 | 100 | 100 | 100 | 2.0 s | 0 | 0 ms |

Objetivos: rendimiento ≥ 90, accesibilidad ≥ 95 y SEO ≥ 95. Se cumplen en todas las páginas medidas. El LCP de las páginas de área (2.7 s en sucesiones) roza la meta de 2.5 s del brief; lo determina la foto del hero, cargada con prioridad alta.

## Pruebas con Playwright (`npm run test:e2e`)

**Resultado:** 15 rutas × 3 anchos (390, 768 y 1440 px) = 45 combinaciones, **sin fallas**. Detalle en `docs/verificacion.json`.

**Comprobaciones en cada combinación:**

- estado 200 (la 404 responde 404);
- sin desborde horizontal ni elementos fuera de pantalla;
- sin texto recortado en titulares, botones y enlaces;
- un solo `h1`;
- cada enlace de WhatsApp va a `https://wa.me/523311704104` con `?text=` y abre en pestaña nueva;
- los `tel:` son solo los tres teléfonos autorizados;
- «Agendar cita» visible en el encabezado, también a 390 px;
- botón fijo de WhatsApp visible;
- barra móvil visible a 390 px;
- sin errores de consola ni de JavaScript.

**Accesibilidad con axe** (WCAG 2.0 y 2.1, niveles A y AA), a 390 y 1440 px en las 15 rutas: cero infracciones.

**Teclado:**

- el primer Tab enfoca «Saltar al contenido»;
- el foco es visible (contorno de 2 px);
- el desplegable de Servicios abre con Enter y cierra con Escape.

**Movimiento reducido** en `/`, `/proceso/` e `/instalaciones/`: ningún elemento queda oculto ni desplazado y no se activa la clase de movimiento. Capturas en `docs/screenshots/despues/*-movimiento-reducido.png`.

## Capturas

`docs/screenshots/despues/` guarda la vista inicial y la página completa de 11 rutas en 390, 768 y 1440 px. Las comparativas con el estado anterior están en `docs/screenshots/comparativa-*.png`.
