Vas a construir desde cero el nuevo sitio web de la Notaría Pública 80 de Guadalajara. Es una landing page premium cuyo único objetivo es que el visitante escriba por WhatsApp o llame.

ANTES DE ESCRIBIR CÓDIGO
1. Lee completo `docs/BRIEF.md`. Es la fuente única de verdad: contenido, paleta, datos de contacto, estructura y lo que no debes repetir del sitio anterior.
2. Revisa `docs/portafolio-notaria80.pdf` (identidad visual del cliente) y todo lo que hay en `assets/` (logotipo en tres versiones y 12 fotografías reales de las instalaciones).
3. Revisa el sitio que se va a reemplazar, https://notaria80gdl.mx/ (inicio, nosotros.html, servicios.html, ubicacion.html), solo para rescatar contenido y las insignias de la sección "Nuestros Clientes".
4. Estudia la referencia de calidad: https://www.garantejuridico.com y su código en https://github.com/rodrigoliz2/garantelegal. Replica su nivel de oficio (ritmo tipográfico, espaciado, animaciones, microinteracciones, estructura de componentes, `site.config.ts` como fuente única de datos). No copies su identidad: aquel sitio es monocromo; este es verde, marfil y latón.
5. Carga las skills indicadas en la sección SKILLS antes de diseñar.
6. Escribe un plan breve en `DECISIONES.md` (dirección de arte, tipografías elegidas y por qué, estructura de componentes) y después constrúyelo sin esperar aprobación.

SKILLS (las mismas que usamos en Garante Jurídico)
Antes de diseñar, lista las skills que tienes instaladas y lee completo el SKILL.md de cada una de estas. Úsalas de verdad durante el trabajo, no solo al inicio:
- Emil Kowalski (design engineering / animaciones): rige todo el movimiento. Curvas, duraciones, interrupciones, estados de botones, transiciones de entrada y salida y microinteracciones se deciden con sus criterios.
- Taste: dirección de arte, jerarquía, tipografía, espaciado y composición. Úsala para evitar cualquier resultado genérico o con aspecto de plantilla.
- Impeccable: el repo de referencia tiene la carpeta `.impeccable`; sigue ese mismo flujo de pulido y crítica de interfaz, y crea el contexto equivalente para este proyecto.
- Figma: si hay conexión con Figma, monta ahí primero los tokens (color, tipografía, espaciado) y la composición del hero y de dos secciones clave, y construye a partir de eso. Si no hay conexión, sigue sin ella y anótalo en `DECISIONES.md`.
- Playwright: verificación visual obligatoria. Capturas de cada sección en 390, 768 y 1440 px, prueba de que el botón flotante de WhatsApp y "Agendar cita" abren el enlace correcto en todas las páginas, y revisión con movimiento reducido. Guarda las capturas en `docs/screenshots/`.
Flujo: Taste e Impeccable para decidir el diseño → Figma para fijarlo → construir → Emil Kowalski para el movimiento → Playwright para comprobar → una ronda de crítica con Taste e Impeccable sobre las capturas y corrección de lo que encuentres. Si alguna de estas skills no está instalada, dímelo al inicio en una línea y continúa con las demás.

AUTORIZACIONES
La notaría autorizó expresamente publicar en el sitio: los testimonios de clientes, las cédulas profesionales de la titular (Federal 2393029, Estatal 110366) y las insignias de las instituciones de "Nuestros Clientes". Inclúyelos; no los trates como pendientes.

STACK
Next.js (App Router) + TypeScript + Tailwind CSS, con las mismas convenciones del repo de referencia. Sitio estático, sin base de datos, sin autenticación, sin panel y sin formularios con servidor. Listo para desplegar en Vercel.

REGLAS QUE NO SE NEGOCIAN
- Sin pantalla de carga, splash ni preloader. El contenido aparece de inmediato.
- Solo fotografías reales de `assets/fotos/` para representar la notaría. Nada de stock ni imágenes generadas de oficinas o personas. No inventes un retrato de la titular. Si necesitas apoyo visual, usa recursos abstractos propios (texturas de mármol o papel, latón, tipografía, el logotipo como marca de agua) y anótalo en `PENDIENTES.md`.
- Paleta del brief: verde bosque `#12451D` como color de marca, verde salvia `#415942`, verde noche `#0F2416`, marfil `#F6F4EE`, latón `#CAB990` solo como acento. No uses el verde chillón del sitio anterior.
- Logotipo: usa los archivos de `assets/logo/`. Vectorízalos a SVG con trazado fiel, sin redibujar la caligrafía.
- WhatsApp siempre presente: botón flotante fijo en todas las páginas, que abre `https://wa.me/523311704104` con mensaje prellenado. Ese es el único número de WhatsApp del sitio.
- "Agendar cita" en el encabezado, siempre visible también en móvil, que abre WhatsApp directamente con el mensaje de cita.
- En móvil, barra inferior fija con WhatsApp y Llamar.
- Los teléfonos 33 1983 3354, 33 1983 3355 y 33 3630 6433 se conservan como enlaces `tel:`, nunca como WhatsApp.
- Menos texto, más invitación al contacto: titulares de máximo 8 palabras, párrafos de máximo 2 líneas, un CTA de WhatsApp en cada sección.
- Un solo sitio responsivo, mobile-first. Sin ruta `/mobile`.
- No inventes datos, cifras, premios, reseñas ni miembros del equipo. Lo que el brief marca como pendiente se queda con su valor provisional y se registra en `PENDIENTES.md`.

SECCIONES (detalle y textos en el brief)
Encabezado fijo · Hero con foto real · Franja de confianza · Servicios (6 tarjetas con WhatsApp por servicio) · Proceso en 5 pasos · Instalaciones (galería editorial) · Diferenciadores · Instituciones que confían en nosotros (marquesina monocroma) · La titular · Testimonios · Contacto (asistente de cita que compone el mensaje y abre WhatsApp, mapa, horario, teléfonos) · Pie. Más `/aviso-de-privacidad` en borrador y una 404 con salida a WhatsApp.

DISEÑO Y MOVIMIENTO
Institucional, sereno y premium: mucho aire, fotografía grande, serif editorial en titulares y sans sobria en texto. Animaciones con intención: entrada escalonada del hero, revelados al hacer scroll, máscaras y parallax leve en fotos, marquesina pausable, microinteracciones en botones y tarjetas, encabezado que se compacta al bajar. Respeta `prefers-reduced-motion`. Las fotos tienen resolución limitada: no las estires a sangre en pantallas grandes; compón con recortes, retículas y marcos, y dales una gradación de color uniforme. No debe verse genérico ni hecho con plantilla.

CALIDAD
- Accesibilidad AA, foco visible, HTML semántico, `alt` en español.
- SEO local completo: metadatos y Open Graph con el dominio `notaria80gdl.mx`, sitemap, robots y JSON-LD de notaría con dirección, teléfonos y horario.
- Lighthouse móvil: rendimiento ≥ 90, accesibilidad ≥ 95, SEO ≥ 95.
- Revisa el resultado en 390, 768 y 1440 px con capturas; corrige desbordes, texto recortado y cualquier elemento que el botón flotante tape.
- `npm run lint`, `npm run typecheck` y `npm run build` sin errores.

ENTREGA
Repositorio funcionando con `npm install && npm run dev`, más `README.md` (instalación y despliegue), `DECISIONES.md`, `PENDIENTES.md` (todo lo provisional o por confirmar con el cliente) y `CREDITOS.md`. Al terminar, dame un resumen de lo construido, las capturas y la lista de pendientes.
