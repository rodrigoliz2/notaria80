# BRIEF — Sitio web de la Notaría Pública 80 de Guadalajara

Fuente única de verdad para el proyecto. Si algo no está aquí, no lo inventes: anótalo en `PENDIENTES.md`.

## 1. Contexto

- **Cliente:** Notaría Pública número 80 de Guadalajara, Jalisco. Titular: Mtra. María Enriqueta Ortiz Guerrero.
- **Sitio actual (a reemplazar):** https://notaria80gdl.mx/ — el cliente quedó insatisfecho con el acomodo, el frontend y las funciones.
- **Referencia de calidad:** https://www.garantejuridico.com (repo `rodrigoliz2/garantelegal`). El cliente contrató por ese sitio. Se busca el mismo nivel de oficio (tipografía, ritmo, animación, detalle), **no** copiar su identidad: Garante es monocromo; Notaría 80 es verde, mármol, madera y latón.
- **Objetivo único del sitio:** que el visitante escriba por WhatsApp o llame. Todo lo demás está al servicio de eso.

## 2. Qué falló en el sitio anterior (no repetir)

1. Pantalla de carga (splash con logotipo). **Prohibida.** El contenido se ve de inmediato.
2. Fotos de stock (Pexels) presentadas como "nuestras instalaciones". **Prohibido** usar stock para representar la notaría.
3. Verde chillón y paleta sin relación con la identidad real.
4. Versión móvil en una ruta aparte (`/mobile/`). Aquí hay un solo sitio responsivo.
5. Exceso de texto: currículum completo de la titular desde la primaria, misión/visión/valores en bloques largos.
6. Formulario de contacto sin destino real y mapa con un identificador de lugar falso.
7. Pie de página duplicado y metadatos apuntando a otro dominio (`notaria80.com`).

## 3. Identidad visual

### Logotipo
Recuperado del portafolio, con transparencia, en `assets/logo/`:
- `logo-n80-verde.png` — sobre fondos claros
- `logo-n80-blanco.png` — sobre fondos oscuros o fotografía
- `logo-n80-tinta.png` — monocromo oscuro

Son PNG de 1382 × 606. Vectorízalos a SVG (trazado fiel, sin redibujar ni "mejorar" la caligrafía) y usa el SVG en el sitio; conserva los PNG como respaldo. Genera favicon e íconos a partir de la "N" caligráfica con el "80".

### Paleta (muestreada del portafolio y de las instalaciones reales)

| Token | Hex | Uso |
|---|---|---|
| `verde-bosque` | `#12451D` | Color de marca (es el verde del logotipo). Titulares, botones primarios, enlaces |
| `verde-salvia` | `#415942` | Verde de los paneles del portafolio. Superficies y bloques secundarios |
| `verde-noche` | `#0F2416` | Fondos oscuros de sección, pie de página |
| `marfil` | `#F6F4EE` | Fondo principal (evoca el mármol blanco del piso) |
| `piedra` | `#E4E1D8` | Bordes, divisores, superficies sutiles |
| `laton` | `#CAB990` | Acento escaso: filetes, numerales, detalles (es el latón del letrero del muro) |
| `nogal` | `#3B2A22` | Acento ocasional (la madera de los libreros) |
| `tinta` | `#141C16` | Texto |

Reglas: el verde manda, el latón es condimento (nunca fondos ni botones grandes). Verifica contraste AA en todas las combinaciones. El verde de WhatsApp (`#25D366`) se usa **solo** en el ícono de WhatsApp, no como color de interfaz.

### Tipografía
- Titulares: una serif de alto contraste con carácter editorial que dialogue con la caligrafía del logotipo (por ejemplo Cormorant Garamond, Fraunces o Newsreader). Elige una y justifícalo en `DECISIONES.md`.
- Texto e interfaz: una sans sobria y muy legible (por ejemplo Inter Tight, Geist o Manrope).
- Numerales grandes (el "80", cifras, pasos del proceso) como recurso gráfico.

### Dirección de arte
Institucional, sereno, premium. Mucho aire, fotografía grande, texto corto. Los cortes diagonales verdes del portafolio pueden reinterpretarse con sutileza (máscaras o recortes en imágenes), sin abusar. Nada de balanzas, mazos, columnas griegas ni íconos genéricos de "abogados".

## 4. Fotografía

Fotos **reales** de las instalaciones, extraídas del portafolio, en `assets/fotos/`:

| Archivo | Qué muestra | Uso sugerido |
|---|---|---|
| `01-atrio-doble-altura.jpg` (1473×2248) | Atrio de doble altura con candelabro de latón | Hero (vertical) o sección Instalaciones |
| `02-letrero-logotipo-muro.jpg` (1069×1062) | Logotipo en latón sobre muro de lamas negras | Hero / Nosotros. La imagen más emblemática |
| `03-recepcion-sala-de-espera.jpg` (807×605) | Recepción y sala de espera | Instalaciones |
| `04-recepcion-vista-superior.jpg` (1210×908) | Recepción vista desde el mezzanine | Instalaciones / Contacto |
| `05-recepcion-mostrador.jpg` (807×605) | Mostrador de recepción | Instalaciones |
| `06-sala-de-firmas.jpg` (681×908) | Sala de firmas | Proceso / Instalaciones |
| `07-biblioteca-protocolo.jpg` (681×908) | Biblioteca del protocolo | Nosotros |
| `08-biblioteca-ventanal.jpg` (681×908) | Biblioteca con ventanal | Instalaciones |
| `09-libros-protocolo-detalle.jpg` (831×1108) | Detalle de los libros del protocolo | Fondo de sección / textura |
| `10-area-juridica-mezzanine.jpg` (964×1286) | Área jurídica y mezzanine | Instalaciones |
| `11-area-juridica-estaciones.jpg` (1070×803) | Estaciones de trabajo | Instalaciones |
| `12-area-digitalizacion.jpg` (964×1286) | Equipo de impresión y digitalización | Infraestructura (uso menor) |

Notas:
- La resolución es limitada (vienen de un PDF). No las amplíes más allá de su tamaño nativo en pantallas grandes: compón con recortes, retículas y marcos en vez de fondos a sangre de 1920 px. Aplica una gradación de color uniforme (ligeramente cálida, verdes profundos) para que se vean como una serie. Sirve AVIF/WebP con `next/image`.
- Cuando lleguen las originales en alta resolución, se sustituyen con el mismo nombre de archivo.
- **No hay foto de la titular ni de la fachada.** No uses una persona de stock ni generes un retrato. La sección de la titular se resuelve tipográficamente (nombre, credenciales, cifras) con una foto de las instalaciones, y queda lista para recibir el retrato.
- Si hace falta apoyo visual fuera de las instalaciones, usa recursos abstractos propios: texturas de mármol, papel, latón, detalles tipográficos, el logotipo como marca de agua. Todo lo provisional se registra en `PENDIENTES.md`.

## 5. Contacto (datos y reglas)

- **WhatsApp (único número de WhatsApp en todo el sitio):** +52 33 1170 4104 → `https://wa.me/523311704104`
- **Teléfonos (solo llamada, `tel:`):** 33 1983 3354 · 33 1983 3355 · 33 3630 6433
- **Correo:** notaria80gdl@hotmail.com *(ver discrepancia en §10)*
- **Dirección:** C. Pablo Villaseñor 125, Col. Ladrón de Guevara, C.P. 44600, Guadalajara, Jalisco
- **Mapa:** https://maps.app.goo.gl/twQxYo9FdYSYLmEw9
- **Horario:** lunes a viernes, 9:00 a 17:00 h

### WhatsApp siempre presente
1. **Botón flotante** de WhatsApp fijo en todas las páginas y en todo momento (esquina inferior derecha; respeta `safe-area` en iOS; no tapa contenido ni el pie).
2. **"Agendar cita"** en el encabezado, siempre visible (también en móvil, fuera del menú hamburguesa). Abre WhatsApp directamente.
3. En móvil, además, barra inferior fija con dos acciones: **WhatsApp** y **Llamar**.
4. Cada servicio tiene su propio botón con mensaje prellenado.

Mensajes prellenados (codificados en URL):
- Agendar cita: `Hola, me gustaría agendar una cita en la Notaría 80.`
- General: `Hola, quisiera información sobre un trámite en la Notaría 80.`
- Por servicio: `Hola, quisiera información sobre {servicio} en la Notaría 80.`

Centraliza número, teléfonos, mensajes y datos en `src/site.config.ts`, como en Garante Jurídico.

### Asistente de cita (sin backend)
En lugar de un formulario que envía correos: un selector breve de 2 pasos (¿qué trámite necesitas? → nombre y, opcional, día preferido) que **compone el mensaje y abre WhatsApp**. No guarda datos, no necesita servidor.

## 6. Arquitectura del sitio

Landing de una sola página con anclas, más páginas legales. Sin backend, sin base de datos, sin panel de administración.

1. **Encabezado fijo** — logotipo, anclas (Servicios · Proceso · Instalaciones · Nosotros · Contacto), teléfono visible en escritorio, botón **Agendar cita**.
2. **Hero** — foto real (letrero de latón o atrio), titular corto, una línea de apoyo, CTA primario WhatsApp y secundario "Llamar". Dato de confianza breve: "En funciones desde 2013".
3. **Franja de confianza** — 3 o 4 cifras: desde 2013 · 6 salas de firmas *(ver §10)* · atención en español e inglés · instalaciones accesibles.
4. **Servicios** — seis tarjetas, una línea cada una, etiquetas con los actos y botón de WhatsApp por servicio.
5. **Proceso** — "De la primera consulta a tu escritura", en 5 pasos.
6. **Instalaciones** — galería editorial con las fotos reales.
7. **Por qué Notaría 80** — diferenciadores, en corto.
8. **Instituciones** — "Nuestros clientes": marquesina de instituciones.
9. **La titular** — perfil ejecutivo breve, cifras y credenciales; currículum completo plegado.
10. **Testimonios** — reseñas reales, recortadas.
11. **Contacto** — asistente de cita, mapa, dirección, horario, teléfonos, cómo llegar.
12. **Pie** — logotipo, datos, enlaces legales.

Páginas adicionales: `/aviso-de-privacidad` (borrador marcado para revisión del cliente) y 404 con salida a WhatsApp.

## 7. Contenido

Regla de redacción: **menos texto, más invitación al contacto.** Titulares de máximo 8 palabras, párrafos de máximo 2 líneas. Trato de "usted" o neutro, tono cálido e institucional. Los textos siguientes son base; puedes pulirlos sin añadir afirmaciones nuevas.

### Hero
- Titular (opciones): "Seguridad jurídica para lo que más importa." / "Su patrimonio, en firme."
- Apoyo: "Notaría Pública 80 de Guadalajara. Atención personalizada, tiempos claros y certeza legal en cada firma."

### Servicios

| Servicio | Una línea | Actos |
|---|---|---|
| Traslativos de dominio | Escrituración de inmuebles con certeza y transparencia. | Compraventa · Donación · Fideicomisos · Dación en pago · Adjudicaciones |
| Sucesiones | Proteja a su familia y ordene su patrimonio. | Testamentos · Sucesión testamentaria · Sucesión intestamentaria |
| Corporativo | Su empresa, formalizada desde el primer día. | Constitución de sociedades mercantiles y civiles · Actas de asamblea · Protocolizaciones · Fusión · Escisión · Liquidación |
| Poderes notariales | Representación legal con plena validez. | Poderes generales · Poderes especiales · Revocaciones |
| Certificaciones | Documentos y firmas con valor legal. | Certificación de firmas · Certificación de copias · Certificaciones de hechos |
| Asesoría legal | Orientación antes de firmar. | Consultoría notarial · Derecho civil · Mercantil · Corporativo |

Mención aparte (franja o tarjeta destacada): **créditos hipotecarios e instituciones** — la notaría opera con Infonavit, Fovissste, bancos y desarrolladores, incluso en operaciones de alto volumen.

### Proceso (condensado del flujo de 10 pasos del portafolio)
1. **Revisión** — Recibimos y revisamos su expediente.
2. **Presupuesto** — Le entregamos un presupuesto claro.
3. **Proyecto de escritura** — Preparamos el documento.
4. **Firma** — Firma en una de nuestras salas.
5. **Entrega** — Pagamos impuestos, inscribimos en el Registro Público y le entregamos su testimonio.

El flujo completo de 10 pasos puede mostrarse en un desplegable "Ver el proceso completo":
recepción y revisión de expediente · elaboración del presupuesto · proyecto de escritura · firma · cierre de escritura · avisos al Archivo de Instrumentos Públicos · cálculo y pago de impuestos · aviso y pago del impuesto de transmisión patrimonial · expedición de testimonio y envío al Registro Público de la Propiedad · contacto y entrega del testimonio.

### Diferenciadores
- Capacidad para operaciones hipotecarias de volumen
- Procesos definidos y control interno para prevenir errores
- Instalaciones inclusivas: personas con discapacidad, adultos mayores y movilidad reducida
- Seguimiento presencial o virtual
- Experiencia institucional y gubernamental de la titular
- Infraestructura tecnológica notarial, con respaldo de información fuera de sitio
- Atención en español e inglés; intérprete para otros idiomas

### Instalaciones
Recepción y orientación · áreas administrativas · áreas jurídicas · salas de firmas · espacios adaptados para atención digna a personas con discapacidad, adultos mayores y movilidad reducida.

### Instituciones ("Nuestros clientes")
Organismos públicos: INFONAVIT · FOVISSSTE · IPEJAL · ISSFAM · INSUS · BANJERCITO
Banca y financieras: BBVA (Bancomer) · Santander · Scotiabank · BanBajío · Actinver · INVEX · BIM (Banco Inmobiliario Mexicano) · ION · DAE Hipotecaria · Inclusión Hipotecaria · Tertius · Caja Popular San Pablo
Vivienda y desarrollo: Casas Javer · Casas ARA · Tierra y Armonía · TuHabi · Promotora de Hogares de México · Promotora SE · Óptimo Futuro · MG Comercializadora de Viviendas · Casa Administración
Educación: UVM · UNITEC · UNIVA

Tratamiento: el sitio anterior muestra insignias en su sección "Nuestros Clientes". Recupera de ahí las que sirvan (revisa el HTML y la carpeta `/public/` de https://notaria80gdl.mx/). Preséntalas en **un solo tono** (monocromo verde o tinta) dentro de una marquesina continua y pausable; para las instituciones sin insignia utilizable, usa su nombre en tipografía con el mismo tratamiento, de modo que el conjunto se vea uniforme. Encabezado: "Instituciones que confían en nosotros".

### La titular
**Mtra. María Enriqueta Ortiz Guerrero** — Notaria Pública Titular número 80 de Guadalajara.
- Nombramiento: 12 de septiembre de 2012. En funciones desde el 1 de marzo de 2013.
- Más de 30 años de trayectoria jurídica.
- Licenciada en Derecho y Maestra en Derecho (Constitucional y Amparo) por la Universidad de Guadalajara.
- Especialidades en Derecho Contractual y en Derecho Corporativo y Económico por la Universidad Panamericana.
- Diplomado en Derecho Notarial, Colegio de Notarios del Estado de Jalisco.
- Reconocimiento "Mariano Otero" a la excelencia académica (UdeG, 1991 y 1993).
- Trayectoria previa: Directora General Jurídica de la Secretaría de Administración del Gobierno de Jalisco (2007–2013); Asesora Jurídica Federal en el Instituto Federal de Defensoría Pública (1999–2007); Ayuntamiento de Guadalajara (1993–1998).

Mostrar solo esto, en formato de línea de tiempo o cifras. El currículum detallado está en https://notaria80gdl.mx/nosotros.html; inclúyelo plegado ("Ver trayectoria completa") **omitiendo** primaria, secundaria, preparatoria, cursos menores y cargos partidistas. No publiques los números de cédula hasta que el cliente lo confirme.

### Testimonios (del sitio anterior; recortar a 1–2 frases)
- Ana Bertha Jiménez — "El personal es muy profesional y está muy capacitado… todo el trámite fue muy fácil de entender."
- Adrián B. — "Me sorprendió lo rápido que me atendieron… todo se siente muy profesional."
- Ana Tamez — "Asesoría clara y precisa… atención rápida, eficiente y transparente."
- Moisés Alonso — "De las notarías más comprometidas con los clientes… servicios ágiles y eficientes."

## 8. Experiencia y movimiento

- Sin pantalla de carga. Primer render con contenido; LCP < 2.5 s en móvil.
- Animación con intención y contención, al nivel de Garante Jurídico: entradas escalonadas del hero, revelados al hacer scroll, máscaras en imágenes, parallax leve en fotos, marquesina de instituciones, microinteracciones en botones y tarjetas, encabezado que se compacta al bajar.
- Curvas y duraciones consistentes; nada rebota ni distrae. Respeta `prefers-reduced-motion`.
- Mobile-first: la mayoría llegará desde el teléfono. Objetivos táctiles ≥ 44 px.
- Accesibilidad AA: foco visible, navegación por teclado, `alt` descriptivo en español, HTML semántico.

## 9. Técnica

- Next.js (App Router) + TypeScript + Tailwind CSS, mismas convenciones que `garantelegal`. Exportable como sitio estático; despliegue en Vercel.
- Sin base de datos, sin autenticación, sin formularios con servidor.
- SEO local: metadatos y Open Graph con el dominio correcto (`notaria80gdl.mx`), `sitemap.xml`, `robots.txt`, datos estructurados JSON-LD (`Notary` / `LegalService`: nombre, dirección, teléfonos, horario, geolocalización, área de servicio). Imagen OG propia con el logotipo.
- Mapa: enlace al lugar en Google Maps y un embed por dirección cargado de forma diferida (o mapa estático con botón "Cómo llegar").
- Analítica opcional y apagada por defecto; si se activa, registrar clics en WhatsApp y llamada.
- Lighthouse móvil objetivo: rendimiento ≥ 90, accesibilidad ≥ 95, SEO ≥ 95.
- Entregables de documentación en el repo: `README.md`, `DECISIONES.md`, `PENDIENTES.md`, `CREDITOS.md`.

## 10. Pendientes por confirmar con el cliente

Usa el valor indicado mientras tanto y regístralo en `PENDIENTES.md`.

| Tema | Situación | Valor provisional |
|---|---|---|
| Correo | El portafolio muestra `notaria80gdl@hotmail.com` en portada y `notaria80gdl@gmail.com` en contacto; el sitio anterior usa hotmail | hotmail |
| Salas de firmas | El portafolio dice "seis" en una página y "cinco" en otra | No mostrar número hasta confirmar; usar "salas de firmas privadas" |
| Teléfonos | El portafolio solo lista 33 1983 3355 como fijo; el sitio anterior lista tres | Los tres del sitio anterior |
| Fotos en alta resolución | Las actuales salen del PDF | Usar las del kit |
| Retrato de la titular y fachada | No existen en el material | Sección sin retrato |
| Estacionamiento | El sitio anterior lo afirma; el portafolio no | No mencionarlo |
| Testimonios | Tomados del sitio anterior | Publicar recortados; confirmar autorización |
| Cédulas profesionales | Aparecen en el sitio anterior | No publicar |
| Aviso de privacidad | No existe | Borrador marcado "en revisión" |
| Uso de logotipos de instituciones | Depende de la autorización de cada una | Monocromo; nombre en texto si no hay insignia |
| Redes sociales | No hay en el material | No mostrar íconos |
