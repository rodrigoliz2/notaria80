import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { WhatsAppButton } from "@/components/site/actions";

export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description: "Borrador de aviso de privacidad de la Notaría 80, sujeto a revisión.",
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
            <strong className="font-medium text-[var(--fg)]">Borrador en revisión.</strong> Este documento requiere validación de la notaría antes de su publicación definitiva.
          </p>
          <div className="prose seq-fade mt-6" style={{ "--d": "520ms" } as React.CSSProperties}>
            <h2>Responsable y contacto</h2>
            <p>
              {siteConfig.name}, con domicilio en {siteConfig.address}, {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}, {siteConfig.city}. Contacto: <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
            </p>
            <h2>Uso de este sitio</h2>
            <p>El asistente de cita utiliza el trámite seleccionado, su nombre y el día preferido para preparar un mensaje. No guarda esos datos en el sitio ni los envía a un servidor de la notaría. Usted decide si abre WhatsApp y envía el mensaje.</p>
            <h2>Servicios de terceros</h2>
            <p>Al abrir WhatsApp o Google Maps intervienen servicios externos con sus propias políticas de privacidad. El mapa de Google solo se carga cuando usted solicita mostrarlo. El sitio no utiliza analítica por defecto.</p>
            <h2>Atención de consultas</h2>
            <p>La información que usted envíe por WhatsApp, correo o entregue presencialmente se utilizará para atender su consulta o coordinar su cita. Antes de recibir documentación para un trámite, la notaría debe poner a su disposición el aviso definitivo correspondiente.</p>
            <h2>Información por completar</h2>
            <p>La notaría debe validar las categorías de datos, finalidades, transferencias, plazos de conservación, mecanismos para ejercer derechos de acceso, rectificación, cancelación y oposición, y medios para comunicar cambios. Este borrador no sustituye el aviso integral definitivo.</p>
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
