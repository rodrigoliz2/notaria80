# Análisis para el rediseño de la Notaría 80

Octubre de 2026. Documento previo a la construcción. Las capturas del estado anterior están en `docs/screenshots/antes/` (390, 768 y 1440 px, vista inicial y página completa).

## 0. Skills y herramientas

- Disponibles y usadas: **design-taste-frontend** (Taste), **emil-design-eng** (Emil Kowalski), **redesign-existing-projects**, **animate**, **high-end-visual-design**.
- No instaladas en esta máquina: **Impeccable**, **Figma** (sin conexión), **Playwright** como skill y **frontend-design**. Playwright se usa como paquete npm (ya era dependencia). El contexto Impeccable se recrea a mano en `.impeccable/` con la estructura de `garantelegal/.impeccable`.
- Choques entre Taste y el encargo, resueltos a favor del encargo: Taste pide un solo tema por página y prohíbe numerar secciones; el encargo pide alternar claro y oscuro y numerar secciones. Se alterna con intención (ritmo de mármol y lamas) y la numeración se limita a un numeral de latón con filete, sin etiqueta en mayúsculas.

## 1. Diagnóstico de la versión anterior, sección por sección

Evidencia: `antes/1440-inicio-completa.png`, `antes/390-inicio-completa.png`, `antes/1440-inicio-vista.png`.

| Sección | Qué la hace ver genérica | Evidencia |
| --- | --- | --- |
| Encabezado | El SVG del logotipo toca los bordes de su caja (el trazo empieza en x=0, y=1). A 130 px de ancho la «N» y «otaría» se ven recortadas y encimadas. Cinco enlaces de 14 px sin jerarquía; el activo y el foco comparten un recuadro grueso. Nada cambia al bajar. | `antes/1440-inicio-vista.png`, `antes/390-inicio-vista.png` |
| Hero | La plantilla más común: texto a la izquierda y foto en caja a la derecha, con una miniatura pegada en la esquina. El titular serif tiene intención; el párrafo, los botones y la nota «En funciones desde 2013» son sans de 14 a 16 px sin peso. Sin profundidad ni movimiento: la página aparece entera de golpe. | `antes/1440-inicio-vista.png` |
| Franja de confianza | Cuatro columnas idénticas con divisores verticales. Las cifras de Cormorant usan numerales de estilo antiguo («2O13» con el 3 descendente) que en cifras grandes se leen como invitación de boda. | `antes/1440-inicio-completa.png`, primer tramo |
| Servicios | Retícula 2×3 de bloques iguales, cada uno con flecha decorativa, etiquetas grises tipo chip y «Consultar por WhatsApp» repetido seis veces. Ninguna foto, ningún orden de lectura. La banda de créditos es un rectángulo piedra plano. | tramo 2 a 1440 |
| Proceso | La única sección oscura. Cinco columnas iguales con numerales de latón: correcta pero estática; el desplegable de 10 pasos queda escondido en una línea de 14 px. | tramo 2 a 1440 |
| Instalaciones | Fotos sin gradación (mezclan luz fría y cálida), puestas como relleno de una retícula. Pies de foto de 12 px sin relación con la imagen. «Conocer más espacios» abre más de lo mismo. | tramo 3 a 1440 |
| Diferenciadores | Cuatro filas con palomita de lista de tareas. Es el ícono genérico que el brief prohíbe en espíritu. | tramo 3 a 1440 |
| Instituciones | Mezcla de insignias en color apagado y nombres en sans gris, sin altura común; la marquesina corta la última palabra («Sc»). Tres enlaces seguidos debajo. | tramo 4 a 1440 |
| La titular | Foto de libros de 500 px de alto junto a un bloque de texto con dos cifras. Se ve como ficha de directorio, no como perfil ejecutivo. | tramo 4 a 1440 |
| Testimonios | Cuatro citas iguales en retícula 2×2 sobre un verde casi blanco. El ojo no sabe dónde empezar. | tramo 5 a 1440 |
| Contacto | Asistente bien resuelto en lógica, pero en caja piedra con `select` nativo; el mapa es otra caja piedra. Todo el pie de la página es una retícula de cajas. | tramo 5 y 6 a 1440 |
| Pie | **El logotipo blanco no se ve**: queda un hueco a la izquierda. Tres columnas de texto de 14 px. | `antes/1440-inicio-completa.png`, último tramo; `antes/390-inicio-completa.png` |
| Móvil | Botón flotante circular verde encima de la barra fija: dos llamadas a WhatsApp apiladas en la esquina. El hero pone la foto debajo del pliegue. | `antes/390-inicio-vista.png` |
| Global | Una sola superficie (marfil) en el 85 % de la página; un solo verde. Sin escala tipográfica: los titulares de sección miden lo mismo que el del hero. Radios de 2 px y botones planos sin estado de presión. Todo vive en una página con anclas. El único movimiento es un desvanecido de 18 px. |  |

Conclusión: la versión anterior no tiene errores de contenido; tiene **ausencia de decisiones**. No hay escala, ni contraste de superficies, ni dirección fotográfica, ni movimiento, ni arquitectura.

## 2. Qué sacó a Garante de lo genérico

Estudiado en el repositorio `rodrigoliz2/garantelegal` (`DECISIONES.md`, `BRAND_GUIDELINES.md`, `.impeccable/config.json`, `src/app/globals.css`, `src/components/site/*`, `/styleguide`) y recorrido en garantejuridico.com a 1440 y 390 px (capturas en `docs/screenshots/referencias/`).

| Decisión de Garante | Por qué funciona | Se traslada |
| --- | --- | --- |
| Escala tipográfica agresiva: `.t-hero` hasta 136 px, peso 300, interletra −0.05 em, interlineado .94 | El titular se vuelve imagen. La diferencia entre titular y texto (8:1) es lo que da el aire institucional caro. | Sí, con serif: hero hasta 132 px, títulos de página hasta 96 px. |
| Hero a sangre con velo neutro y titular abajo a la izquierda | Cinematográfico; la foto manda. | En móvil sí. En escritorio no: nuestras fotos tienen 681 a 1473 px de ancho. Se compone en columnas con máscaras. |
| Esquinas rectas en todo, sin tarjetas; agrupación por filetes de 1 px | Disciplina de despacho, no de aplicación. | Sí. Radio 0. |
| Lista de áreas a escala de titular, con foto que sigue al cursor con resorte (stiffness 260, damping 32) | Convierte un índice en una pieza editorial y da una microinteracción memorable. | Sí, en `/servicios` y en el inicio. |
| Titulares de sección que se revelan por líneas con máscara (transform 108 % → 0, 720 ms, escalón 70 a 80 ms) | Ritmo de lectura; se siente impreso, no animado. | Sí. |
| Carga del hero en CSS, no en JS | No retrasa el LCP; corre antes de hidratar. | Sí. |
| Paralaje de 5 a 8 % | Profundidad sin espectáculo. | Sí, con `animation-timeline: view()` (sin JS). |
| Encabezado que se oculta al bajar y reaparece al subir | Pantalla limpia para leer. | Sí, además se compacta. |
| Transición de página de 240 ms, nunca en la primera carga | Continuidad sin coste. | Sí, con `<ViewTransition>` de React 19.3, que Next 16.4 activa en cada navegación. |
| Botones: escala .97 al presionar; subrayado animado con `scaleX` | Respuesta táctil. | Sí, y se suma la flecha que sale y vuelve a entrar. |
| Curva única `cubic-bezier(0.23, 1, 0.32, 1)` | Coherencia. | Sí, más `--ease-in-out` para recorridos en pantalla. |
| Bloques negros alternados con blancos | Ritmo y jerarquía. | Sí: marfil, verde noche, piedra y bosque. |
| Tratamiento fotográfico único (`process-photos.mjs`) | Las fotos se leen como serie. | Sí, con gradación cálida y verdes profundos en lugar de blanco y negro. |

Lo que **no** se traslada: el monocromo, la grotesca, el rojo de urgencias, las ilustraciones de línea. Notaría 80 tiene identidad propia (caligrafía, verde, latón).

## 3. Lo que hace caras a las referencias

| Referencia | Observación | Uso aquí |
| --- | --- | --- |
| kirkland.com | Panel de imagen con **corte diagonal** contra un plano oscuro liso; serif de transición en blanco, una sola frase; menú escondido; espacio vacío generoso. | El corte diagonal del portafolio se reinterpreta así: una sola arista inclinada en la máscara de la foto emblema y en el cierre. Nada más. |
| bakermckenzie.com | Fotografía a sangre con velo, titular a gran escala, menú de dos niveles con desplegables; franja de color institucional que corta la foto. | Desplegable de Servicios; una franja bosque como superficie de cierre. |
| am-abogados.mx | Serif cálida sobre oscuro, pero con foto de stock (mazo, traje) y botón redondeado gris: muestra lo que hay que evitar. | Contraejemplo: nada de stock ni pastillas. |
| floresencarnacion.com | Fondo oscuro continuo, identidad tipográfica propia y fotografía de arquitectura mexicana a gran tamaño; párrafos justificados densos. | Fotografía de arquitectura como protagonista; párrafos cortos. |
| garantejuridico.com | Ver §2. | Vara de medir. |

Patrón común: **pocas palabras muy grandes, una imagen fuerte por pantalla, superficies oscuras extensas, navegación discreta, transiciones mínimas**.

## 4. Dirección de arte

Lectura: sitio institucional de una notaría para particulares y empresas de Guadalajara, con lenguaje editorial sereno, arquitectónico y de materiales. Diales: variación 7, movimiento 6, densidad 3.

**Concepto: «el recinto».** El sitio se recorre como la notaría: atrio de mármol claro, muro de lamas negras, madera de los libreros, latón del letrero y de los candiles.

- **Superficies.** Cuatro, con función fija:
  - marfil `#F6F4EE`: mármol, lectura;
  - verde noche `#0F2416`: el muro de lamas, con líneas verticales de 1 px al 5 %;
  - piedra `#E4E1D8`: pausa, testimonio;
  - bosque `#12451D`: cierre y botón primario.
  Ninguna página tiene dos secciones seguidas del mismo tono, salvo una sección clara de texto después de otra clara con foto.
- **Tipografía.**
  - **Bodoni Moda** (variable, eje óptico 6 a 96) en titulares, a escala grande y con cursiva solo en la segunda mitad del titular («Su patrimonio, *en firme.*»). Sus remates de bola y su contraste de trazo repiten el «80» del logotipo; sus cifras capitales sirven como recurso gráfico (80, 2013, 01 a 05).
  - **Instrument Sans** para texto e interfaz: sobria, un poco estrecha, legible a 16 px.
  - Cormorant se retira: sus cifras de estilo antiguo no funcionan a escala grande.
  - Comparativa con un titular real: `docs/screenshots/referencias/comparativa-tipografica.png`.
- **Escala fluida** (`clamp`): display 48 a 132 px, h1 42 a 96, h2 34 a 68, h3 23 a 32, lead 17 a 21, texto 16 a 17, micro 12. Numeral gráfico 80 a 208 px.
- **Latón** `#CAB990`: filetes de 1 px, numerales sobre oscuro, el marco desplazado de las fotos y el foco sobre oscuro. Nunca fondo ni texto sobre claro (1.76:1).
- **Fotografía.** Gradación única en build: saturación −18 %, curva suave y leve calidez en altas. Se usa en composiciones:
  - recorte alto con máscara que se abre;
  - pares desfasados (una alta y una ancha, con 12 % de desfase vertical);
  - marco de latón desplazado 14 px;
  - leyenda con número y lugar.
  Ninguna foto pasa de su ancho nativo. La foto del letrero es el emblema del hero.
- **Detalles propios.**
  - El logotipo caligráfico como marca de agua a escala de 1.5 pantallas en el cierre y el pie, al 6 %.
  - Lamas verticales en superficies oscuras.
  - Numeral de sección en latón con filete.
  - Una sola diagonal (la máscara del emblema, 7°).
- **Forma.** Radio 0. Botones de 52 px con flecha en celda propia. Sin sombras, sin degradados de relleno; el único velo es neutro, sobre foto, para contraste.

## 5. Mapa de páginas, composición y movimiento

| Página | Composición | Movimiento |
| --- | --- | --- |
| `/` Inicio | 1. Hero noche con lamas: titular display abajo a la izquierda, emblema en recorte alto con arista diagonal a la derecha, atrio desfasado con marco de latón. 2. Franja de confianza en marfil: 2013 / 30+ / ES·EN / acceso. 3. Servicios: índice de 7 áreas con numerales. 4. Instalaciones en noche: par desfasado y titular. 5. Instituciones: marquesina en un tono. 6. Testimonio en piedra: una cita grande que rota. 7. Cierre bosque con marca de agua y WhatsApp. | Hero: líneas del titular (720 ms, escalón 90 ms), máscara del emblema (1100 ms), atrio (+180 ms), texto y botones al final (≈ 900 ms). Revelados al hacer scroll, paralaje, imagen que sigue al cursor en el índice, marquesina pausable, progreso de la cita. |
| `/servicios` | Título de página en marfil y lista a escala h2 con numerales, descripción y fotografía que acompaña al cursor; en táctil, cada fila lleva miniatura. Franja noche de créditos hipotecarios. | Desplazamiento de 24 px del nombre activo, atenuado del resto al 30 %, foto con resorte. |
| `/servicios/[slug]` (7) | Hero claro: numeral de área en latón, título, línea, WhatsApp prellenado y foto alta con máscara. «Qué es» en dos líneas. «Actos que incluye» en noche, como lista numerada a escala h3. «Cómo es el proceso» en cinco pasos horizontales con enlace a `/proceso`. Navegación anterior y siguiente. | Máscara de foto, revelados escalonados de los actos, flecha de «siguiente». |
| `/proceso` | Hero noche. Secuencia de 5 pasos: columna fija con numeral gigante de latón y barra de progreso; a la derecha cada paso ocupa 70 % de alto. Desplegable de los 10 pasos. | Progreso ligado al scroll (`useScroll`), numeral que cambia con desplazamiento vertical, foto de la sala de firmas con paralaje. |
| `/instalaciones` | Galería editorial: recepción ancha y atrio alto desfasados; trío de verticales a distintas alturas; detalle de libros a gran escala con marco de latón; área jurídica y digitalización. Franja noche de accesibilidad. | Máscaras por imagen, paralaje, escala sutil en hover. |
| `/notaria` | Hero noche tipográfico (no hay retrato): nombre de la titular, cargo, numerales 80 / 2013 / 30+. Perfil breve, línea de tiempo de la trayectoria, credenciales (cédula federal 2393029 y estatal 110366, publicación autorizada), diferenciadores, instituciones. | Línea de tiempo que se dibuja (`scaleY`) con el scroll y años que se revelan. |
| `/contacto` | Asistente de cita en dos pasos con opciones grandes (no `select`), vista previa del mensaje y botón a WhatsApp. Al lado, dirección, horario, teléfonos `tel:` y mapa diferido con «Cómo llegar». | Cambio de paso con desplazamiento lateral de 16 px y opacidad; selección con relleno animado. |
| `/aviso-de-privacidad` | Página de lectura a 68 caracteres; texto integral actualizado el 8 de octubre de 2026. | Solo transición de página. |
| 404 | Noche, numeral, salida a WhatsApp y al inicio. | Solo transición de página. |
| `/styleguide` | Tokens, escala, botones, enlaces, superficies y tabla de movimiento. `noindex`. | Muestras vivas. |

**Encabezado:**

- Logotipo como máscara SVG con aire (color por `currentColor`, transita de marfil a bosque).
- Servicios con desplegable de áreas, Proceso, Instalaciones, La Notaría, Contacto, teléfono y «Agendar cita».
- Activo con subrayado de 1 px; foco con contorno aparte.
- Se compacta y toma superficie marfil al bajar; se oculta al bajar y vuelve al subir.
- En móvil, menú a pantalla completa en noche con entrada escalonada de 40 ms.

**WhatsApp fijo:**

- Pieza rectangular verde noche con filete de latón y el glifo de WhatsApp. Al pasar el cursor despliega «Escríbanos».
- El pie reserva su esquina para que nunca lo tape.
- En móvil, encima de la barra de WhatsApp y Llamar.

**Movimiento** (criterios de Emil Kowalski):

- Solo `transform` y `opacity`.
- `--ease-out: cubic-bezier(.23,1,.32,1)` para entradas; `--ease-in-out: cubic-bezier(.77,0,.175,1)` para recorridos.
- Interfaz de 150 a 250 ms; piezas editoriales de 600 a 1100 ms.
- Hover solo con `(hover: hover) and (pointer: fine)`.
- Transiciones CSS (interrumpibles) para estados; teclado sin animación.
- `prefers-reduced-motion`: todo estático y transiciones de página instantáneas.
