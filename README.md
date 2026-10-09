# Notaría Pública 80 de Guadalajara

Sitio institucional orientado a WhatsApp y llamadas. Está hecho con Next.js 16 (App Router), TypeScript, Tailwind CSS 4 y `motion`. Se exporta como sitio completamente estático: sin servidor de formularios, sin base de datos y sin autenticación.

## Páginas

| Ruta | Contenido |
| --- | --- |
| `/` | Hero, cifras, índice de servicios, recinto, instituciones, testimonio y cierre |
| `/servicios` | Índice editorial de las siete áreas |
| `/servicios/[slug]` | Una página por área: qué es, actos, proceso y WhatsApp prellenado |
| `/proceso` | Las cinco etapas con progreso ligado al scroll, y el detalle de 10 pasos |
| `/instalaciones` | Galería editorial y accesibilidad |
| `/notaria` | Titular, formación, cédulas, trayectoria, forma de trabajo e instituciones |
| `/contacto` | Asistente de cita, teléfonos, dirección, horario y mapa diferido |
| `/aviso-de-privacidad` | Borrador en revisión |
| `/styleguide` | Sistema de diseño vivo (sin indexar) |

## Desarrollo

Requiere Node.js 20.9 o posterior.

```sh
npm install
npm run dev
```

## Compilación y vista de producción

```sh
npm run lint
npm run typecheck
npm run build   # regenera las fotos con gradación, el logotipo y los íconos, y exporta a out/
npm start       # http://localhost:3080 (otro puerto: PORT=3081 npm start)
```

## Despliegue

Importar el repositorio en Vercel. `vercel.json` define:

- el comando `npm run build`;
- el directorio `out/`;
- las cabeceras;
- las redirecciones permanentes de las rutas del sitio anterior.

Configure el dominio `notaria80gdl.mx`. No hay secretos ni variables obligatorias.

## Contenido y contacto

`src/site.config.ts` centraliza:

- WhatsApp (único: 33 1170 4104), teléfonos (solo `tel:`) y mensajes prellenados;
- las siete áreas, con slug, descripción, actos y foto;
- el proceso;
- las fotos, con su texto alternativo;
- las instituciones y los testimonios;
- la trayectoria de la titular.

## Sistema de diseño

Tokens, escala tipográfica, superficies, botones y movimiento están en `src/app/globals.css` y se ven en `/styleguide`. Las decisiones y su porqué están en `DECISIONES.md`; el análisis previo, en `docs/ANALISIS_REDISENO.md`.

## Assets

Los originales están en `public/assets/fotos/` y `public/assets/logo/`. `npm run assets`, que también corre en el build, se encarga de:

- aplicar la gradación uniforme y generar cuatro tamaños WebP de cada foto;
- generar `logo-n80.svg` (el trazado original con aire, usado como máscara);
- generar los favicons y la imagen Open Graph.

Para sustituir una foto por un original de mayor resolución, conserve el nombre del archivo y actualice sus dimensiones en `site.config.ts`.

## Verificación

```sh
npm start
# en otra terminal:
npm run test:e2e   # contacto, presencia de WhatsApp, desbordes, axe, teclado y movimiento reducido
npm run audit      # Lighthouse móvil por página → docs/audits/
node scripts/capturas.cjs http://localhost:3080 docs/screenshots/despues / /servicios/ …
```

Los resultados están en `docs/VERIFICACION.md` y `docs/verificacion.json`.

## Documentación

- `DECISIONES.md`: dirección de arte, arquitectura, movimiento y su porqué.
- `PENDIENTES.md`: datos por confirmar y preparación del lanzamiento.
- `CREDITOS.md`: fuentes, tipografías y materiales.
- `docs/ANALISIS_REDISENO.md`: diagnóstico, estudio de Garante Jurídico y referencias, mapa de páginas.
- `docs/CRITICA.md`: ronda de crítica y correcciones.
- `docs/screenshots/`: capturas antes, después, referencias y comparativas.
