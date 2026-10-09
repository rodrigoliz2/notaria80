# Decisiones

## Fuente y autorizaciones
El usuario adoptó expresamente PROMPT_CODEX y confirmó la autorización de testimonios, cédulas e insignias. Esto prevalece sobre los pendientes contradictorios del BRIEF.

## Dirección de arte
Una composición editorial institucional basada en la propia arquitectura: marfil como mármol, bosque como identidad, latón solo en filetes y detalles. Fotografías en marcos limitados a su resolución; hero asimétrico con el letrero real, seguido por una franja de confianza y servicios con tipografía protagonista. Sin iconografía jurídica ornamental.

Cormorant Garamond conversa con la caligrafía del logotipo y la tradición documental; Manrope asegura lectura de textos y controles. Fuentes servidas localmente. Radios de 2 px en controles y fotografías rectas. Escala de espaciado de 8 px, con secciones de 96-128 px. Capas: contenido 0, header 20, navegación móvil 25, WhatsApp 30, barra móvil 35.

## Flujo de diseño
Skills disponibles y aplicadas: design-taste-frontend, impeccable, emil-design-eng, playwright-skill y pdf para inspección. Se creó PRODUCT.md desde el brief preciso ya adoptado. La dirección y el stack estaban fijados por el usuario; se continúa sin rondas de aprobación de conceptos, como indica el PROMPT. La semilla Impeccable se ejecutó (00b2ef6c); las propuestas ajenas al mundo institucional no prevalecen sobre la identidad fijada. Esta sesión construye directamente desde los assets y la composición en Figma, sin imágenes sintéticas.

## Figma
Conexión disponible. Tokens, hero, servicios y proceso creados antes de implementar: https://www.figma.com/design/MLJAANbQijGqeoR7aFa6nc . Las cajas de imagen del boceto identifican los archivos reales y son guías de composición, no fotografías ficticias.

## Arquitectura
App Router con contenido renderizado en servidor. Datos en src/site.config.ts. Islas cliente pequeñas: navegación, asistente de cita, galería, marquesina y observadores de movimiento. Sin backend ni almacenamiento. Next Image con loader local y variantes WebP generadas durante build, compatible con output: export. PNG originales conservados. SVG trazados desde el canal alfa, sin redibujar el logotipo.

## Movimiento
CSS y Web Animations API: primera entrada del hero desde contenido visible, revelado una sola vez, imágenes con desplazamiento mínimo en navegadores compatibles. Feedback de botones de 140-180 ms. Observadores de intersección para encabezado y secciones, sin scroll listeners ni estado React por cuadro. Marquesina única, con botón de pausa, hover/foco y reduced motion. Todo movimiento se elimina con prefers-reduced-motion.

## SEO y privacidad
Dominio único notaria80gdl.mx. JSON-LD LegalService con dirección, horarios y coordenadas verificadas desde el enlace real de Maps (20.6785506, -103.3801279). Mapa por dirección solo tras activación explícita. Analítica desactivada. Borrador de privacidad visible como en revisión; deberá validarse antes del lanzamiento.
