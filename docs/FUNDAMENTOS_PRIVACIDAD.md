# Fundamentos del contenido jurídico

Fecha de consulta y de cierre editorial: 8 de octubre de 2026.

El aviso integral está en `src/app/aviso-de-privacidad/page.tsx`. Esta nota documenta su fundamento y el alcance de las precisiones de servicios. El encargo actual sustituye las indicaciones de los documentos fuente sobre un aviso provisional. No se introducen nuevos servicios, trámites de consentimiento en pantalla ni mecanismos de recepción de documentos.

## Fuentes oficiales consultadas

1. [Constitución Política de los Estados Unidos Mexicanos](https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf), artículos 6, apartado A, fracción II, y 16, segundo párrafo: privacidad, datos personales y derechos de su titular.
2. [Ley Federal de Protección de Datos Personales en Posesión de los Particulares](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), expedida el 20 de marzo de 2025, texto consultado con última reforma DOF 14 de noviembre de 2025. Se utiliza la numeración de esta ley; la de 2010 fue abrogada.
3. [Ley del Notariado del Estado de Jalisco](https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/legislacion/Leyes/Documentos_PDF-Leyes/Ley%20del%20Notariado%20del%20Estado%20de%20Jalisco-120826.pdf), texto enlazado por la Biblioteca Virtual del Congreso de Jalisco; incluye el decreto 30208/LXIV/26, publicado el 28 de julio de 2026. [Índice oficial de legislación](https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/busquedasleyes/ListadoNvo.cfm).
4. [Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf), texto con última reforma DOF 16 de julio de 2025: artículos 17, fracción XII, apartado A, y 18.

## Correspondencia de cláusulas

| Apartado del aviso | Fundamento | Criterio aplicado |
| --- | --- | --- |
| Responsable, domicilio y alcance | LFPDPPP, arts. 2, XIV y XVI; 14; 15, I; 29 | Se identifica a María Enriqueta Ortiz Guerrero, titular, como responsable; se utiliza el domicilio y correo publicados. Las solicitudes se dirigen a ella, sin inventar un departamento. |
| Datos y finalidades | LFPDPPP, arts. 5, 6, 10 a 12; 15, II y III. Ley del Notariado, arts. 84, 90 y 96; LFPIORPI, art. 18 | Se distingue consulta de expediente. Las categorías se condicionan al acto; no se afirma que todos los visitantes entreguen datos patrimoniales, sensibles o huellas. |
| Consentimiento | LFPDPPP, arts. 7, 8 y 9 | Datos patrimoniales/financieros: expreso; sensibles: expreso y escrito, salvo excepción legal. Navegar no equivale a consentimiento irrestricto. |
| Publicaciones adicionales | LFPDPPP, arts. 7, 11 y 15, III y IV | Una autorización de testimonial es independiente del trámite; se ofrece el contacto para retirar datos de la publicación. No se incorpora mercadotecnia. |
| Transferencias | LFPDPPP, arts. 35 y 36, I, IV, V, VI y VII; Ley del Notariado, arts. 43, 114 y 115; LFPIORPI, arts. 17, XII, A, y 18 | Se identifican destinatarios y propósito. La excepción exige que el caso concreto encuadre en ella. Una transferencia distinta con consentimiento se informa y acepta por separado. |
| Seguridad y confidencialidad | LFPDPPP, arts. 18 a 20; Ley del Notariado, art. 43 | Se recoge secreto profesional y seguridad, sin afirmar certificaciones, cifrado específico ni garantías absolutas no verificadas. |
| Conservación | LFPDPPP, arts. 10, 12, 24 y 25; Ley del Notariado, arts. 122 y 123; LFPIORPI, art. 18, IV | Cinco años permiten concentración del protocolo en el Archivo, no eliminación. Diez años es el mínimo de documentación de actividades vulnerables; no se aplica como plazo universal a todas las consultas. |
| ARCO | LFPDPPP, arts. 21 a 34 y art. 2, VIII | Requisitos, identidad/representación, rectificación documentada, respuesta de 20 días hábiles y ejecución de 15; prórroga legal por una vez, medios de acceso, costos permitidos y negativa fundada. |
| Revocación y limitación | LFPDPPP, arts. 7; 15, IV; 25; 26 | Mismo canal de contacto. La revocación no es retroactiva ni suprime obligaciones legales. Los plazos de atención anunciados se adoptan como procedimiento del aviso, no como cita de un plazo autónomo del art. 7. |
| Aviso al recabar y cambios | LFPDPPP, arts. 14 a 17 y 11 | El asistente muestra información simplificada y enlace al integral; el aviso identifica dónde consultar cambios. Una finalidad distinta puede exigir nuevo consentimiento. |
| Tutela ante autoridad | LFPDPPP, arts. 2, XV; 38 a 40 | Se identifica a la Secretaría Anticorrupción y Buen Gobierno, evitando remitir al extinto INAI. |

## Comportamiento del sitio verificado en el código

- El asistente utiliza estado de React para nombre, área y día. No hay envío de esos campos a un servidor propio ni almacenamiento persistente. Al abrir el enlace `wa.me`, el texto forma parte de la URL que recibe el servicio; el tratamiento externo comienza antes de pulsar «Enviar» en WhatsApp.
- El mapa crea el `iframe` después de «Mostrar mapa». El enlace «Cómo llegar» abre Google Maps externamente. Se distingue esa carga de la visita inicial.
- No hay integración de analítica, publicidad ni píxeles de seguimiento. Las fuentes se sirven localmente tras la compilación. No se confunde esto con la ausencia de información técnica de conexión en la infraestructura de alojamiento.
- Las políticas de WhatsApp, Microsoft y Google se enlazan como información sobre servicios externos. No constituyen una exención de responsabilidad sobre los datos que recibe la notaría.
- La actualización del asistente afecta únicamente su texto informativo y enlace de privacidad; no cambia estados, validaciones, mensajes, destinos ni eventos.
- El verificador existente distingue ahora los destinos de mensajería (`wa.me`, `api.whatsapp.com/send`, `web.whatsapp.com/send` y `whatsapp://`) del enlace informativo a la política de WhatsApp. Conserva las comprobaciones del número, mensaje y apertura en otra pestaña para los contactos.

## Descripciones de servicios

Se revisaron las siete introducciones que figuraban para cierre editorial. Se mantuvieron títulos, slugs, actos, fotografías y contactos. Los artículos 2 a 4 y 7 de la Ley del Notariado sustentan formalización, asesoría e imparcialidad; el artículo 92 exige la rogación de todos los interesados en sucesiones y remite a la legislación civil y procesal aplicable; los artículos 114 y 119 sustentan los avisos sobre poderes y la certificación de firmas, respectivamente.

La redacción evita afirmar que cualquier sucesión puede tramitarse ante notario, que toda decisión societaria requiere formalización, que una copia certificada prueba sin más la verdad de todo su contenido o que la notaría autoriza créditos. No se convierte el sitio informativo en un dictamen particular ni se agregan requisitos específicos de cada operación sin expediente.

## Aplicación en la atención notarial

El aviso publicado también debe ponerse a disposición en la atención presencial y al recibir datos por otros canales. Los consentimientos expresos o escritos que resulten necesarios se recaban en el expediente correspondiente; el sitio no los sustituye ni simula su captura. El correo y domicilio del aviso son los canales anunciados para atender solicitudes de privacidad. La publicación no acredita por sí misma la ejecución cotidiana de estas obligaciones.

## Verificación técnica del cierre

- `npm run lint`, `npm run typecheck` y `npm run build`: sin errores. Exportación de 19 rutas generada en `out/`.
- Verificador existente sobre la exportación en `http://localhost:3081`: 15 rutas por 3 anchos (390, 768 y 1440 px), 45 combinaciones sin fallas; incluye enlaces, desbordes, axe, teclado y movimiento reducido.
- Comprobación adicional en los tres anchos: selección y validación del asistente, mensaje exacto de WhatsApp, ausencia de solicitud a WhatsApp antes de abrir el enlace, mapa diferido, 13 apartados del aviso y metadatos definitivos. No se enviaron mensajes.
- Comparación del asistente antes/después: lógica y controles idénticos al excluir únicamente el párrafo informativo actualizado. Mapa, encabezado, acciones de contacto, estilos globales y configuración de producción sin cambios.
- Ausencia de las leyendas retiradas en el contenido fuente y en la exportación HTML. Los documentos originales del encargo permanecen como antecedentes, sustituidos en esta materia por la instrucción actual.
- Esta comprobación es local; el despliegue y el DNS se realizan con `GUIA_PRODUCCION.md`.
