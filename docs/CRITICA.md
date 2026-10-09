# Ronda de crítica: «¿esto parece plantilla?»

Revisión de cada página en 390, 768 y 1440 px con los criterios de Taste (patrones de IA, composición, jerarquía, copy) y de Emil Kowalski (movimiento y estados). Cada hallazgo se corrigió y se volvió a capturar.

## Hallazgos y correcciones

| Página | Hallazgo | Corrección |
| --- | --- | --- |
| Global | El CSS del sistema iba sin capa y le ganaba a las utilidades de Tailwind: la hamburguesa aparecía en escritorio | Base y componentes en `@layer base` y `@layer components` |
| Global | Las fotos reveladas al hacer scroll salían en blanco: el observador vigilaba la cortina, recortada por su marco, y la carga diferida no la veía | Se observa el marco y la descarga se adelanta cuando el marco está a 1000 px |
| Global | La segunda flecha del botón se asomaba en su celda | Desplazamiento en píxeles fuera de la celda; variante horizontal para navegación interna |
| Inicio, 1440 | El hero no dejaba ver los botones: el atrio apilado encima del titular empujaba todo | El atrio sale del flujo y flota en el vacío superior, solo con pantallas de 820 px de alto o más; display de 132 a 120 px |
| Inicio, 390 | El botón fijo rozaba el CTA del hero; el hero no descontaba la barra inferior | Alto `100svh − barra`, emblema 16:11, «Llamar» oculto en el hero móvil (la barra ya lo trae) |
| Inicio | Franja marfil bajo el pie, detrás de la barra móvil | Fondo del documento en verde noche |
| Pie | Repetía «Su patrimonio, en firme.» del hero | Sustituido por la identificación de la notaría y la titular |
| Área | «Hablemos de su créditos hipotecarios»: concordancia rota | «Hablemos de {área}.» |
| Área | Numeral de latón sobre marfil: 1.75:1, contra la regla del propio sistema | Numeral en salvia (7:1) |
| Proceso | El numeral fijo salía recortado (contenedor sin ancho) | Contenedor de 1.25 em |
| Proceso | La sala de firmas se repetía en el hero y en el paso 4 | Hero con la biblioteca de ventanal |
| Proceso | Pasos inactivos al 55 % de opacidad: 2.5:1 | Color salvia sin opacidad y filete de latón para el activo |
| Proceso | Títulos de paso en h3 directamente bajo el h1 | h2 |
| Notaría | Rangos de años partidos en dos líneas | Columna de 240 px y `nowrap` |
| Notaría | Siete diferenciadores en tres columnas dejaban uno huérfano | El título ocupa las dos primeras celdas: 2 + 7 = 9 en tres filas |
| Contacto | El mapa diferido era un rectángulo oscuro de 690 px de alto | 3:1 en escritorio |
| Contacto | Titular en tres líneas con «paso» suelto | Escala ajustada a la columna |
| Servicios | LCP de 5.4 s: el primer nombre del índice esperaba a hidratar para revelarse | Sobre el pliegue se pinta de inmediato; LCP 1.9 s |

## Respuesta final por página

| Página | ¿Parece plantilla? | Por qué no |
| --- | --- | --- |
| Inicio | No | Hero sobre el muro de lamas con titular display, emblema de latón con arista diagonal y atrio desfasado con marco de latón. Ritmo de cinco superficies. Índice tipográfico en lugar de tarjetas. |
| Servicios | No | Lista a escala h1 con numerales y la foto del área que acompaña al cursor. |
| Área (7) | No | Numeral gigante, titular partido en cursiva, actos como lista numerada sobre noche, navegación entre áreas. |
| Proceso | No | Secuencia narrada con columna fija, numeral que cambia y progreso de latón. |
| Instalaciones | No | Composición de revista: par desfasado, trío de verticales a distintas alturas, detalle del protocolo sobre noche. |
| La Notaría | No | Retrato tipográfico (no hay foto de la titular y no se inventa), cifras de latón, línea de tiempo trazada con el scroll. |
| Contacto | No | Asistente de opciones grandes con relleno animado, cifras en serif, placa de dirección sobre lamas. |
| 404 y aviso | No | Mismo sistema, sin piezas genéricas. |

## Comparación honesta con garantejuridico.com

**Al mismo nivel o por encima:**

- escala tipográfica;
- coreografía del hero;
- revelados por líneas;
- índice con foto que sigue al cursor;
- encabezado inteligente;
- transición de página;
- disciplina de estados;
- rendimiento.

Notaría 80 añade una identidad material propia (lamas, latón, marca de agua caligráfica) y cuatro superficies de color frente al monocromo de Garante.

**Por debajo:** la fotografía. Garante usa fotos de 2000 px a sangre; aquí las doce fotos reales salen de un PDF (varias de 681 × 908), así que en escritorio se compone en columnas en lugar de llenar la pantalla. La técnica no lo compensa. Cuando lleguen los originales en alta resolución, el hero y la sección del recinto deberían pasar a sangre en escritorio (ver `PENDIENTES.md`).
