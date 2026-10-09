import { IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { siteConfig, whatsappHref } from "@/site.config";

// WhatsApp siempre presente: pieza fija en todas las páginas y, en móvil, además
// la barra inferior con WhatsApp y Llamar.
export function ContactFloat() {
  return (
    <>
      <a className="wa-float" href={whatsappHref()} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-origin="flotante">
        <span className="wa-float-label" aria-hidden="true">
          Escríbanos por WhatsApp
        </span>
        <span className="wa-float-btn">
          <IconBrandWhatsapp size={28} stroke={1.5} aria-hidden="true" />
        </span>
        <span className="sr-only">Escribir a la Notaría 80 por WhatsApp (abre WhatsApp)</span>
      </a>
      <nav className="barra" aria-label="Contacto directo">
        <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" data-contact="whatsapp" data-origin="barra">
          <IconBrandWhatsapp size={21} stroke={1.5} aria-hidden="true" />
          WhatsApp
        </a>
        <a href={siteConfig.phones[0].href} data-contact="phone">
          <IconPhone size={20} stroke={1.5} aria-hidden="true" />
          Llamar
        </a>
      </nav>
    </>
  );
}
