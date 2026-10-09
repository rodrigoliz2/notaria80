import Link from "next/link";
import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { ContactLink } from "@/components/contact-link";
export const metadata: Metadata = {
  title: "Aviso de privacidad",
  description:
    "Borrador de aviso de privacidad de Notaría 80, sujeto a revisión.",
  alternates: { canonical: "/aviso-de-privacidad/" },
  robots: { index: false, follow: true },
};
export default function Privacy() {
  return (
    <main id="contenido" className="legal-page container">
      <Link className="text-link" href="/">
        Volver al inicio
      </Link>
      <h1>Aviso de privacidad.</h1>
      <p className="draft-notice">
        <strong>Borrador en revisión.</strong> Este documento requiere
        validación de la notaría antes de su publicación definitiva.
      </p>
      <div className="legal-prose">
        <h2>Responsable y contacto</h2>
        <p>
          {siteConfig.name}, con domicilio en {siteConfig.address},{" "}
          {siteConfig.neighborhood}, C.P. {siteConfig.postalCode},{" "}
          {siteConfig.city}. Contacto:{" "}
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        </p>
        <h2>Uso de este sitio</h2>
        <p>
          El asistente de cita utiliza el trámite seleccionado, su nombre y el
          día preferido para preparar un mensaje. No guarda esos datos en el
          sitio ni los envía a un servidor de la notaría. Usted decide si abre
          WhatsApp y envía el mensaje.
        </p>
        <h2>Servicios de terceros</h2>
        <p>
          Al abrir WhatsApp o Google Maps intervienen servicios externos con sus
          propias políticas de privacidad. El mapa de Google solo se carga
          cuando usted solicita mostrarlo. El sitio no utiliza analítica por
          defecto.
        </p>
        <h2>Atención de consultas</h2>
        <p>
          La información que usted envíe por WhatsApp, correo o entregue
          presencialmente se utilizará para atender su consulta o coordinar su
          cita. Antes de recibir documentación para un trámite, la notaría debe
          poner a su disposición el aviso definitivo correspondiente.
        </p>
        <h2>Información por completar</h2>
        <p>
          La notaría debe validar las categorías de datos, finalidades,
          transferencias, plazos de conservación, mecanismos para ejercer
          derechos de acceso, rectificación, cancelación y oposición, y medios
          para comunicar cambios. Este borrador no sustituye el aviso integral
          definitivo.
        </p>
      </div>
      <ContactLink>Consultar sobre privacidad</ContactLink>
    </main>
  );
}
