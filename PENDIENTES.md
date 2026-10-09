# Pendientes de Notaría 80

## Confirmación del cliente

- **Correo:** se utiliza **notaria80gdl@hotmail.com**. El portafolio alterna hotmail y gmail.
- **Número de salas:** el portafolio alterna cinco y seis. Se publica «salas de firmas privadas», sin cifra.
- **Teléfonos:** ratificar los tres de llamada del sitio anterior (33 1983 3354, 33 1983 3355 y 33 3630 6433).
- **Fotografías en alta resolución:** sustituirlas cuando estén disponibles, con el mismo nombre de archivo. La gradación se aplica sola en `npm run build`. Con originales de 2000 px o más se podría llevar alguna foto a sangre en escritorio (hoy solo el emblema va a sangre, y solo en móvil).
- **Retrato de la titular y fachada:** no proporcionados. `/notaria` resuelve el perfil con tipografía y una foto de la biblioteca. Si llega un retrato real, su lugar natural es la columna de la foto en «Formación y credenciales».
- **Textos de «qué es» de cada área** (`intro` en `site.config.ts`): descripciones generales de cada figura notarial, redactadas para el rediseño. Conviene que la notaría las lea antes del lanzamiento.
- **Aviso de privacidad:** sigue como **borrador en revisión**. Falta validar responsable, finalidades, transferencias, conservación, derechos y contacto competente.

## Antes del lanzamiento

- **Despliegue:**
  - desplegar en Vercel y configurar el dominio;
  - validar las redirecciones nuevas (`/nosotros.html` → `/notaria/`, `/servicios.html` → `/servicios/`, `/ubicacion.html` → `/contacto/`).
- **Lighthouse en el dominio:** repetirlo sobre el dominio desplegado. Las cifras de `docs/VERIFICACION.md` son de laboratorio local.
- **Revisión en teléfonos reales** (iOS Safari y Android Chrome):
  - barra inferior y `safe-area`;
  - menú a pantalla completa;
  - transiciones de página: en Safari sin soporte completo de View Transitions, la navegación cambia sin animación.
- **Archivo de Figma:** si se usa como referencia, actualizarlo con el sistema de `/styleguide`. El archivo actual corresponde a la primera versión.
- **Dependencias de lint:** `npm audit` informa hallazgos altos en la cadena de desarrollo eslint-config-next → fast-glob → micromatch → braces, sin versión corregida publicada. No llegan a la entrega estática. Actualizar cuando haya corrección.

## Resuelto por autorización expresa

El usuario confirmó la autorización de **testimonios, cédulas (federal 2393029 y estatal 110366) e insignias institucionales**. Están incluidos y no requieren una nueva autorización.

No se publica:

- estacionamiento;
- redes sociales;
- un retrato ficticio de la titular;
- un número no confirmado de salas.

No se usan imágenes de stock ni generadas.
