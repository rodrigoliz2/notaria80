import { IconPhone } from "@tabler/icons-react";
import { siteConfig, whatsappHref } from "@/site.config";
import { WhatsAppIcon } from "./contact-link";
export function FixedContact() {
  return (
    <>
      <a
        className="whatsapp-float"
        href={whatsappHref()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactar a Notaría 80 por WhatsApp"
        data-contact="whatsapp"
      >
        <WhatsAppIcon size={28} />
        <span>¿Le orientamos?</span>
      </a>
      <nav className="mobile-contact-bar" aria-label="Contacto directo">
        <a
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          data-contact="whatsapp"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>
        <a href={siteConfig.phones[0].href} data-contact="phone">
          <IconPhone aria-hidden="true" size={21} />
          Llamar
        </a>
      </nav>
    </>
  );
}
