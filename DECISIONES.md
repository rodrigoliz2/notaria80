# Decisiones

## Fuente y autorizaciones

El usuario adoptó expresamente PROMPT_CODEX y confirmó la autorización de testimonios, cédulas e insignias. Esto prevalece sobre los pendientes contradictorios del BRIEF. El rediseño premium (octubre de 2026) se rige además por el encargo de rediseño, que sustituye la sección 6 del brief: el sitio deja de ser una sola página. El análisis previo está en `docs/ANALISIS_REDISENO.md`.

## Rediseño premium (rama `rediseno-premium`)

### Por qué se rehízo

La primera versión no tenía errores de contenido, sino falta de decisiones:

- una sola superficie y un solo verde;
- escala tipográfica plana;
- fotos sin tratamiento;
- retícula de tarjetas;
- ningún movimiento;
- una página larga con anclas.

Además, el SVG del logotipo tocaba los bordes de su caja y se veía recortado en el encabezado, y el logotipo del pie no se mostraba. Diagnóstico completo y evidencia en `docs/ANALISIS_REDISENO.md` y `docs/screenshots/antes/`.

### Concepto: el recinto

El sitio se recorre como la notaría: mármol (marfil), muro de lamas negras (verde noche con líneas verticales de 1 px al 5 %), madera, latón.

- **Ritmo de superficies:** cuatro superficies con función fija (marfil, noche, piedra, bosque) se alternan para dar ritmo y jerarquía. Ninguna página se queda en una sola.
- **Latón:** se reserva a filetes, numerales y foco sobre oscuro. Sobre marfil su contraste es de 1.76:1, así que ahí nunca es texto; los numerales sobre claro van en salvia (7:1).

### Tipografía

- **Bodoni Moda** en titulares, con eje óptico automático. Su contraste de trazo y sus remates de bola repiten el «80» del logotipo, y sus cifras capitales funcionan como recurso gráfico (80, 2013, 01 a 07). Se comparó con Cormorant Garamond y Newsreader con un titular real (`docs/screenshots/referencias/comparativa-tipografica.png`). Cormorant se descartó porque sus cifras de estilo antiguo se leen como invitación a escala grande.
- **Instrument Sans** en texto e interfaz: sobria y un poco estrecha.
- Las dos se sirven con `next/font/google`, que las descarga en build y las aloja en el propio sitio; el navegador no llama a Google.
- **Cursiva:** solo en la segunda mitad de cada titular, como en «Su patrimonio, *en firme.*».
- **Escala fluida** con `clamp()` en `globals.css`: display 48 a 120 px, h1 42 a 96, h2 34 a 68, h3 23 a 32, lead 17 a 21, texto 16 a 17.

### Forma y componentes

- **Radio:** 0 en todo.
- **Botón:** 52 px de alto (60 en grande), con la flecha en una celda propia separada por un filete. Al pasar el cursor, el fondo sube desde abajo y la flecha sale por la esquina y vuelve a entrar; al presionar, escala .97.
- **Enlaces:** subrayado que se recoge y se vuelve a trazar.
- **Activo del menú:** subrayado de 1 px. El foco es un contorno aparte (bosque sobre claro, latón sobre oscuro); activo y foco ya no comparten el recuadro grueso de antes.
- **Logotipo:** máscara CSS del SVG trazado con 18 unidades de aire por lado (`public/assets/logo/logo-n80.svg`, generado en build). Toma el color del texto, así que transita de marfil a bosque con el encabezado. El trazado no se tocó.
- **Numeración de secciones:** un numeral de latón con filete y sin etiqueta. Cumple lo que pide el encargo sin el patrón de etiqueta en mayúsculas sobre cada título.
- **Corte diagonal:** una sola arista inclinada en la foto emblema del hero de inicio, a partir de 1024 px (inspirada en el portafolio y en Kirkland). No se repite.
- **Marca de agua:** el logotipo caligráfico, al 6 %, en el cierre del inicio, el pie y la 404.

### Fotografía

- **Gradación única en build** (`scripts/prepare-assets.mjs`): saturación −20 %, curva suave, mármol apenas cálido y sombras profundas. Los JPG originales no se tocan; solo cambian las variantes WebP que sirve el sitio.
- **Composición:** recortes altos, pares desfasados, un marco de latón desplazado 14 px y leyendas numeradas con el número de archivo.
- **Resolución:** ninguna foto se estira más allá de su ancho nativo en escritorio. Solo en móvil el emblema va a sangre (390 px de ancho para un original de 1069).
- **Carga diferida:** las fotos viven detrás de una cortina recortada que la carga diferida nativa no ve. `RevealObserver` adelanta su descarga cuando el marco está a 1000 px de distancia.

### Arquitectura

- **Rutas:**
  - `/`
  - `/servicios`
  - `/servicios/[slug]`: siete páginas estáticas con `generateStaticParams`
  - `/proceso`
  - `/instalaciones`
  - `/notaria`
  - `/contacto`
  - `/aviso-de-privacidad`
  - 404
  - `/styleguide` (con `noindex`)
- **Redirecciones permanentes** en `vercel.json`: las rutas antiguas `nosotros.html`, `servicios.html` y `ubicacion.html` van a `/notaria/`, `/servicios/` y `/contacto/`.
- **Datos:** todo sigue en `src/site.config.ts`. Se añadieron slug, descripción breve («qué es»), actos y foto por área, diferenciadores, trayectoria y formación. El texto de «qué es» describe en general cada figura notarial, sin cifras ni afirmaciones nuevas sobre la notaría.
- **Créditos hipotecarios e instituciones** se trata como séptima área, con página propia y la marquesina de instituciones.
- **Componentes** en `src/components/site/`. Son islas de cliente solo donde hay interacción:
  - encabezado
  - índice de servicios
  - marquesina
  - testimonios
  - secuencia del proceso
  - asistente
  - mapa
  - observador de revelados

### Movimiento (criterios de Emil Kowalski)

- **Propiedades y curvas:** solo `transform` y `opacity`. `--ease-out: cubic-bezier(.23,1,.32,1)` para entradas; `--ease-in-out: cubic-bezier(.77,0,.175,1)` para recorridos (cortinas).
- **Hero:** coreografía en CSS para que corra antes de hidratar y no retrase el LCP:
  - titular por líneas tras máscara (980 ms, escalón de 95 ms);
  - emblema con cortina (1150 ms);
  - atrio 300 ms después;
  - texto y botones al final.
- **Revelados al hacer scroll:** un solo `IntersectionObserver` para todo el sitio, más un `MutationObserver` para las páginas nuevas. Los elementos quedan ocultos desde el primer pintado (clase `.mo` puesta en `<head>`), así que no parpadean al hidratar. Si el JavaScript no llega en 3 s, el script retira `.mo` y todo se ve.
- **Paralaje:** ±6 % con `animation-timeline: view()`, sin JavaScript; donde no hay soporte, no hay paralaje.
- **Encabezado:** se oculta al bajar y vuelve al subir; toma superficie y compacta el logotipo (.84). Usa `useScroll` de `motion`, sin escuchar el scroll de `window`.
- **Transiciones de página:** `<ViewTransition>` de React 19.3, que Next 16.4 activa en cada navegación. Salida de 200 ms y entrada de 460 ms con 110 ms de espera. El encabezado, el botón fijo y la barra móvil tienen nombre propio y no se mueven.
- **Índice de servicios:** el nombre activo avanza 20 px, el resto baja al 32 % y la foto sigue al puntero con resorte (240 / 30).
- **Proceso:** filete de latón ligado al scroll y numeral del paso activo que cambia con desplazamiento vertical.
- **Marquesina:** 70 s, se pausa con cursor, foco o botón.
- **Testimonios:** rotan cada 7 s con un filete de tiempo y se pausan con cursor, foco o pestaña oculta.
- **Hover:** solo con `(hover: hover) and (pointer: fine)`.
- **Movimiento reducido:** todo queda estático, las transiciones de página son instantáneas y la marquesina se vuelve desplazable. Lo comprueba `npm run test:e2e`.
- **Sin scroll suave artificial:** el desplazamiento nativo no se secuestra en ningún dispositivo. No aportaba frente al riesgo en móvil.

### Contacto

- **WhatsApp único** `https://wa.me/523311704104`, siempre con mensaje prellenado. Cada área tiene el suyo: «Hola, quisiera información sobre {área} en la Notaría 80.».
- **Botón fijo:** pieza rectangular verde noche con filete de latón y glifo de WhatsApp; en escritorio despliega «Escríbanos por WhatsApp». El pie le reserva su esquina inferior derecha.
- **Móvil:** el botón fijo convive con la barra inferior de WhatsApp y Llamar, como pide el brief («además»). Va encima de la barra, a 52 px.
- **«Agendar cita»** siempre visible en el encabezado, también en móvil, con el mensaje de cita.
- **Teléfonos:** solo `tel:`.
- **Asistente de cita:** opciones grandes en lugar de `select`, días como botones, vista previa del mensaje y botón a WhatsApp. No guarda datos.

### Rendimiento

- **`/servicios`:** el índice es el LCP. Al principio se revelaba al hacer scroll y el LCP llegaba a 5.4 s; ahora se pinta de inmediato y queda en 1.9 s.
- **Regla general:** nada sobre el pliegue espera a JavaScript para mostrarse. El hero usa CSS; los titulares de carga solo se desplazan, sin opacidad.

### Choques con las skills, resueltos a favor del encargo

- **Alternar claro y oscuro:** Taste pide un solo tema por página; el encargo pide alternar.
- **Numeración de secciones:** Taste prohíbe numerar secciones; el encargo la pide. Se limitó a un numeral sin etiqueta.
- **Serif:** Taste desaconseja la serif por defecto. Aquí está justificada por la marca (caligrafía y documento notarial) y la fuente elegida no es de las prohibidas.

### Herramientas

- **Skills disponibles y usadas:** design-taste-frontend, emil-design-eng, redesign-existing-projects, animate y high-end-visual-design.
- **No disponibles en esta sesión:** Impeccable, Figma, la skill de Playwright y frontend-design.
  - Playwright se usó como paquete.
  - El contexto Impeccable se recreó a mano en `.impeccable/`.
  - Sin conexión a Figma, los tokens y las composiciones se fijaron en `/styleguide` y en el análisis.
  - El archivo de Figma de la primera versión (abajo) ya no refleja el diseño.

## Primera versión (Codex), conservado como antecedente

- **Arquitectura:** App Router con contenido renderizado en servidor; datos en `src/site.config.ts`.
- **Imágenes:** `next/image` con loader propio y variantes WebP generadas en build, compatible con `output: export`.
- **Logotipo:** SVG trazados del canal alfa, sin redibujar.
- **SEO:**
  - dominio único notaria80gdl.mx;
  - JSON-LD `LegalService` con dirección, horarios y coordenadas (20.6785506, -103.3801279);
  - mapa solo tras activación explícita;
  - analítica desactivada;
  - aviso de privacidad sustituido por el texto integral del 8 de octubre de 2026, conforme al encargo de cierre jurídico.
- **Figma de esa versión:** https://www.figma.com/design/MLJAANbQijGqeoR7aFa6nc
