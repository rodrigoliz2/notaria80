import { IconArrowUpRight, IconBrandWhatsapp } from "@tabler/icons-react";
import { whatsappHref } from "@/site.config";
export function ContactLink({
  children = "Escribir por WhatsApp",
  message,
  className = "button primary",
}: {
  children?: React.ReactNode;
  message?: string;
  className?: string;
}) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      data-contact="whatsapp"
    >
      <span>{children}</span>
      <IconArrowUpRight size={20} aria-hidden="true" />
    </a>
  );
}
export function WhatsAppIcon({ size = 22 }: { size?: number }) {
  return <IconBrandWhatsapp size={size} stroke={1.6} aria-hidden="true" />;
}
