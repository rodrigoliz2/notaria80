# Revisión de diseño y comportamiento

Dos revisiones independientes conforme al flujo Impeccable: evaluación visual A y evaluación técnica B. Capturas en 390, 768 y 1440 px. Una ronda de correcciones y una de confirmación, sin rediseño abierto.

| Hallazgo | Corrección | Propósito |
|---|---|---|
| Acción del asistente podía quedar bajo el contacto fijo al enfocarse | Scroll padding/margin inferior de 110 px; 145 px más safe area en móvil; flotante circular en gutter de escritorio | Mantener el CTA visible y operable |
| Objetivos del pie menores de 44 px en tableta/móvil | Mínimo uniforme de 44 px | Accesibilidad táctil |
| Párrafos principales demasiado pequeños en móvil | Párrafos de 16 px y etiquetas de actos de 12 px | Lectura cómoda |
| Botón de pausa con reduced motion no tenía efecto | Oculto con preferencia de movimiento reducido; región manual focusable | Control honesto y teclado |
| LCP inicial no cumplía la meta | WOFF2 variable local (84 KB totales), prioridad de imagen y compresión de entrega | Reducir coste de red |

El diseño conserva bosque/marfil, serif editorial y fotografía real. No se encontraron bloqueos visuales estructurales. Los cortes laterales en las primeras capturas de elementos eran del recorte del contenedor; las capturas finales cubren el ancho completo de la pantalla.

Detector mecánico en `docs/detector.json`: las reglas se interpretan en el contexto de la identidad y contenido fijados por el cliente; no se sustituyen los colores del brief ni los pasos notariales por recomendaciones genéricas. Preguntas omitidas: el PROMPT adoptado autoriza construir y corregir sin rondas de aprobación.
