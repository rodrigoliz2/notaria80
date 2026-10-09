import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { WhatsAppButton } from "@/components/site/actions";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Aviso de privacidad integral de la Notaría 80 de Guadalajara: tratamiento de datos personales, finalidades, transferencias y ejercicio de derechos ARCO.",
  alternates: { canonical: "/aviso-de-privacidad/" },
  robots: { index: false, follow: true },
};

export default function Privacy() {
  return (
    <Page>
      <section className="s-marfil seq pb-24 pt-[calc(var(--header-h)+72px)] md:pt-[calc(var(--header-h)+120px)]">
        <div className="wrap-text">
          <Lines as="h1" reveal="load" className="t-h1" lines={["Aviso de", { text: "privacidad.", em: true }]} />
          <p className="seq-fade mt-10 border-l border-laton pl-5 text-[var(--muted)]" style={{ "--d": "400ms" } as React.CSSProperties}>
            <strong className="font-medium text-[var(--fg)]">Aviso de privacidad integral.</strong> Última actualización: 8 de octubre de 2026.
          </p>
          <div className="prose seq-fade mt-6" style={{ "--d": "520ms" } as React.CSSProperties}>
            <h2>1. Responsable y alcance</h2>
            <p>
              {siteConfig.titular}, titular de la {siteConfig.name}, es responsable del tratamiento de sus datos personales, con domicilio en {siteConfig.address}, {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}, {siteConfig.city}, México. Para asuntos de privacidad y derechos sobre sus datos, dirija su solicitud a la titular en <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a> o preséntela por escrito en ese domicilio, en horario de {siteConfig.hours.toLocaleLowerCase("es-MX")}.
            </p>
            <p>Este aviso comprende la atención de consultas y citas y los servicios notariales, por medios presenciales, telefónicos y electrónicos. También explica el uso del sitio {siteConfig.domain}. El tratamiento se realiza conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares y a las obligaciones propias de la función notarial.</p>

            <h2>2. Datos personales que tratamos</h2>
            <p>Para consultas y citas: nombre, teléfono, correo electrónico, trámite de interés, disponibilidad y la información que incluya en su comunicación.</p>
            <p>Para integrar un expediente, según el acto solicitado: datos de identificación y contacto; lugar y fecha de nacimiento, nacionalidad, ocupación, estado civil y régimen matrimonial; CURP, RFC e identificaciones oficiales; fotografía y firma contenidas en los documentos; datos de parentesco, representación y beneficiarios; antecedentes de propiedad, información catastral y registral; datos patrimoniales, financieros, fiscales, bancarios y de pago; e información sobre origen de recursos y beneficiario controlador cuando la legislación lo exige. Las huellas digitales se recaban cuando sean necesarias para el otorgamiento del instrumento conforme a la legislación aplicable.</p>
            <p>Podemos recibir datos de otorgantes, representantes, apoderados, testigos, herederos, legatarios, beneficiarios y otras personas vinculadas con el acto, directamente de ellas, de sus representantes, de documentos exhibidos o de autoridades y registros habilitados por la ley. Si aporta datos de otra persona, deberá contar con legitimación para hacerlo y facilitarle este aviso cuando corresponda. Los datos de niñas, niños y adolescentes se tratan con la intervención de quienes legalmente los representan, en los casos permitidos por la ley.</p>
            <p><strong>Datos sensibles.</strong> No se solicitan para una consulta general ni para agendar. Si un acto requiere información sensible, como datos de salud necesarios para su instrumentación, se limitará a lo indispensable y se recabará consentimiento expreso y por escrito, salvo una excepción legal aplicable. No envíe documentación sensible mediante el asistente de citas.</p>

            <h2>3. Finalidades necesarias</h2>
            <p>Utilizamos sus datos para responder consultas, coordinar y confirmar citas; identificar a quienes intervienen y comprobar su representación; revisar documentos y la procedencia jurídica del acto; brindar asesoría notarial imparcial; preparar presupuestos, proyectos, escrituras, actas, certificaciones y testimonios; dar seguimiento al expediente; gestionar pagos y facturación; realizar las inscripciones y avisos que procedan; cumplir obligaciones notariales, registrales, fiscales y de prevención de operaciones con recursos de procedencia ilícita; conservar el protocolo y sus documentos; y atender requerimientos de autoridad y solicitudes relativas a sus datos.</p>
            <p>Solo se solicita información pertinente para la finalidad y el acto concretos. La falta de datos exigidos legalmente puede impedir la formalización o continuación del trámite.</p>

            <h2>4. Finalidades adicionales y consentimiento</h2>
            <p>Los datos de consultas y expedientes no se utilizan para campañas publicitarias, listas comerciales ni venta de bases de datos. La publicación de un testimonio identificable requiere autorización específica; puede solicitar el retiro de sus datos de esa publicación mediante el contacto de privacidad, sin que ello afecte la atención de su trámite.</p>
            <p>Cuando el tratamiento requiera consentimiento, se obtendrá en la forma legalmente exigida. Para datos financieros o patrimoniales se recabará consentimiento expreso y, para datos sensibles, expreso y por escrito, salvo las excepciones previstas en los artículos 9 y 36 de la ley federal. La consulta de este sitio no constituye una autorización general para tratar datos sensibles ni para realizar transferencias que requieran consentimiento.</p>

            <h2>5. Transferencias y encargados</h2>
            <p>Según el trámite y exclusivamente para cumplir su finalidad, los datos necesarios podrán comunicarse al Registro Público de la Propiedad y de Comercio; al Archivo de Instrumentos Públicos; a la Procuraduría Social en materia de avisos testamentarios; a autoridades fiscales y de prevención de operaciones con recursos de procedencia ilícita; y a autoridades judiciales o administrativas competentes, cuando exista obligación legal o requerimiento procedente. También podrán comunicarse a otros notarios para avisos y verificaciones previstos por la ley.</p>
            <p>En operaciones de crédito, vivienda o fideicomiso, podrán comunicarse los datos indispensables a Infonavit, Fovissste, instituciones financieras, fiduciarias y demás participantes del acto, cuando resulte necesario para el contrato celebrado en su interés o para la relación jurídica correspondiente.</p>
            <p>Las comunicaciones anteriores se realizan sin consentimiento adicional únicamente cuando encuadren en las excepciones del artículo 36 de la ley federal, en particular sus fracciones I, IV, V, VI y VII. Si una transferencia distinta requiere consentimiento, se le informarán previamente destinatario y finalidad y se recabará su aceptación o negativa; su silencio no se utilizará para sustituir el consentimiento expreso exigible.</p>
            <p>Los prestadores que traten información por cuenta de la responsable, por ejemplo para alojamiento, comunicaciones o soporte, deberán hacerlo conforme a instrucciones, obligaciones de confidencialidad y medidas de seguridad aplicables. Su acceso como encargados se distingue de una transferencia a terceros que deciden sus propias finalidades.</p>

            <h2>6. Conservación y seguridad</h2>
            <p>Los datos de consultas se conservan durante su atención y, posteriormente, por los plazos necesarios para cumplir obligaciones o atender responsabilidades legales. Cumplidas esas finalidades y los plazos aplicables, procede el bloqueo y la supresión que correspondan.</p>
            <p>El protocolo, los libros y sus documentos están sujetos al régimen especial de conservación y depósito de la Ley del Notariado del Estado de Jalisco. El plazo de cinco años previsto en su artículo 122 permite su concentración en el Archivo de Instrumentos Públicos; no autoriza su destrucción. La documentación de actividades vulnerables se conserva por al menos diez años, conforme al artículo 18, fracción IV, de la ley federal en esa materia, y por el periodo mayor que resulte legalmente exigible.</p>
            <p>La información está sujeta al secreto profesional notarial y a medidas administrativas, técnicas y físicas para prevenir accesos, alteraciones, pérdidas o usos no autorizados. Si ocurre una vulneración que afecte significativamente sus derechos patrimoniales o morales, se le informará de inmediato en los términos legales. La conservación obligatoria de un instrumento limita su cancelación, pero no elimina los demás derechos que legalmente procedan.</p>

            <h2>7. Derechos ARCO</h2>
            <p>Puede solicitar acceso a sus datos y a las condiciones de su tratamiento; rectificar información inexacta o incompleta; pedir su cancelación cuando proceda; u oponerse por causa legítima al tratamiento, con las limitaciones establecidas por la ley.</p>
            <p>Envíe su solicitud a <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>, preferentemente con el asunto «Datos personales — derechos ARCO», o entréguela por escrito en el domicilio señalado. Indique su nombre y un medio para recibir respuesta; acredite su identidad y, en su caso, la identidad y representación de quien actúe por usted; precise el derecho y lo que solicita; e incluya los datos o referencias que permitan localizar la información, salvo que se trate de una solicitud de acceso. Para rectificación, señale la modificación y aporte su sustento documental.</p>
            <p>La determinación se comunicará en un máximo de veinte días hábiles desde la recepción de la solicitud. Si procede, se hará efectiva dentro de los quince días hábiles siguientes a la comunicación de la respuesta. Cada plazo puede ampliarse una sola vez por un periodo igual cuando las circunstancias lo justifiquen, informándole las razones. Si es necesario aclarar o completar la solicitud, se le comunicará conforme al procedimiento legal aplicable.</p>
            <p>El acceso se facilitará mediante consulta, copias simples o documentos electrónicos, previa acreditación de identidad y protegiendo los derechos de terceros. El ejercicio es gratuito; solo podrán cobrarse costos de reproducción o envío y los demás supuestos expresamente permitidos por el artículo 34 de la ley federal. Toda negativa total o parcial se comunicará con su motivo y fundamento. La rectificación de datos no sustituye las formalidades necesarias para corregir un instrumento público.</p>

            <h2>8. Revocación y limitación de uso</h2>
            <p>Puede revocar su consentimiento o solicitar que se limite el uso o divulgación de sus datos mediante el mismo correo o domicilio, acreditando su identidad e indicando el tratamiento o comunicación que desea detener. Estas solicitudes serán atendidas con los plazos de respuesta y ejecución descritos en el apartado anterior, en lo que resulten aplicables.</p>
            <p>La revocación no tiene efectos retroactivos. No impide conservar datos, realizar avisos ni cumplir obligaciones que deriven de una disposición jurídica o de la relación notarial cuando no dependan de su consentimiento. Se le explicarán las consecuencias concretas para el trámite y las razones de cualquier limitación legal.</p>

            <h2>9. Asistente de citas y navegación</h2>
            <p>El asistente utiliza su nombre, el trámite seleccionado y el día preferido para componer un mensaje en su navegador. No crea un expediente, no guarda esos campos en una base de datos del sitio ni los envía a un servidor de la notaría. Al pulsar «Abrir WhatsApp», el texto preparado se incorpora al enlace que recibe ese servicio, aunque todavía no envíe el mensaje. Usted decide si lo envía; la cita se confirma posteriormente con la notaría.</p>
            <p>El sitio no incorpora herramientas de analítica, publicidad, píxeles de seguimiento ni cookies propias para esos fines. La entrega y seguridad de la página pueden requerir el tratamiento técnico de la dirección IP, la fecha de acceso, la ruta solicitada y datos del navegador por el proveedor de alojamiento. Ese tratamiento es distinto de los campos del asistente.</p>

            <h2>10. WhatsApp, correo y Google Maps</h2>
            <p>Si abre WhatsApp, utiliza su proveedor de correo o solicita «Mostrar mapa» o «Cómo llegar», intervienen servicios externos que tratan información conforme a sus propias políticas y que pueden operar fuera de México. El mapa integrado de Google solo se carga cuando pulsa «Mostrar mapa»; a partir de ese momento, Google puede recibir datos de conexión y utilizar cookies o tecnologías propias. Puede consultar la dirección escrita sin cargar el mapa.</p>
            <p>Consulte las políticas de <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">WhatsApp</a>, <a href="https://privacy.microsoft.com/es-mx/privacystatement" target="_blank" rel="noopener noreferrer">Microsoft</a> y <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener noreferrer">Google</a>. La notaría sigue siendo responsable de la información que recibe y trata para sus servicios. Si prefiere otro canal, puede llamar o acudir al domicilio indicado.</p>

            <h2>11. Protección de sus derechos</h2>
            <p>Si considera vulnerado su derecho a la protección de datos personales, puede acudir a la Secretaría Anticorrupción y Buen Gobierno, autoridad competente conforme a la ley federal. El procedimiento de protección de derechos procede en los supuestos y plazos de su artículo 40, incluidos la inconformidad con la respuesta de la responsable y la falta de respuesta una vez vencido el plazo legal.</p>

            <h2>12. Cambios a este aviso</h2>
            <p>La versión vigente y su fecha de actualización estarán disponibles en <a href="/aviso-de-privacidad/">{siteConfig.domain}/aviso-de-privacidad/</a> y podrán solicitarse en la notaría. Los cambios se comunicarán mediante su publicación en esa dirección; cuando la ley exija una comunicación directa o un nuevo consentimiento, se realizará antes del tratamiento correspondiente. Una actualización no autoriza por sí misma finalidades incompatibles con las informadas.</p>

            <h2>13. Fundamento jurídico</h2>
            <p>Este aviso se sustenta en los artículos 6, apartado A, fracción II, y 16, segundo párrafo, de la <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/CPEUM.pdf" target="_blank" rel="noopener noreferrer">Constitución Política de los Estados Unidos Mexicanos</a>; y en los artículos 5 a 20, 21 a 34, 35, 36 y 40 de la <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf" target="_blank" rel="noopener noreferrer">Ley Federal de Protección de Datos Personales en Posesión de los Particulares</a>, expedida el 20 de marzo de 2025.</p>
            <p>Para la función notarial, son aplicables los artículos 43, 84, 90, 114, 115, 122 y 123 de la <a href="https://congresoweb.congresojal.gob.mx/BibliotecaVirtual/legislacion/Leyes/Documentos_PDF-Leyes/Ley%20del%20Notariado%20del%20Estado%20de%20Jalisco-120826.pdf" target="_blank" rel="noopener noreferrer">Ley del Notariado del Estado de Jalisco</a>, relativos al secreto profesional, instrumentación, documentos, avisos y conservación. En actividades vulnerables resultan aplicables los artículos 17, fracción XII, apartado A, y 18 de la <a href="https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPIORPI.pdf" target="_blank" rel="noopener noreferrer">Ley Federal para la Prevención e Identificación de Operaciones con Recursos de Procedencia Ilícita</a>, en los supuestos que correspondan al acto concreto.</p>
          </div>
          <div className="mt-14">
            <WhatsAppButton message="Hola, tengo una pregunta sobre el aviso de privacidad de la Notaría 80." origin="privacidad">
              Consultar sobre privacidad
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Page>
  );
}
