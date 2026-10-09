import Link from "next/link";
import { IconArrowRight, IconArrowUpRight, IconBrandWhatsapp, IconPhone } from "@tabler/icons-react";
import { siteConfig, whatsappHref } from "@/site.config";

// Flecha doble: la primera sale por la esquina y la segunda entra (ver .btn-icon).
function Arrows({ size = 18, forward = false }: { size?: number; forward?: boolean }) {
  const Icon = forward ? IconArrowRight : IconArrowUpRight;
  return (
    <>
      <Icon size={size} stroke={1.5} aria-hidden="true" />
      <Icon size={size} stroke={1.5} aria-hidden="true" />
    </>
  );
}

type ButtonProps = { children: React.ReactNode; className?: string; size?: "md" | "lg"; variant?: "solid" | "line" };

/** Botón principal que abre WhatsApp con un mensaje prellenado. */
export function WhatsAppButton({ message, children = "Escribir por WhatsApp", className = "", size = "md", variant = "solid", origin }: Omit<ButtonProps, "children"> & { message?: string; children?: React.ReactNode; origin?: string }) {
  return (
    <a
      href={whatsappHref(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn ${size === "lg" ? "btn-lg" : ""} ${variant === "line" ? "btn-line" : ""} ${className}`}
      data-contact="whatsapp"
      data-origin={origin}
    >
      <span className="btn-label">
        <IconBrandWhatsapp size={20} stroke={1.5} aria-hidden="true" />
        {children}
      </span>
      <span className="btn-icon" aria-hidden="true">
        <Arrows />
      </span>
      <span className="sr-only"> (abre WhatsApp)</span>
    </a>
  );
}

/** Botón de navegación interna. */
export function ButtonLink({ href, children, className = "", size = "md", variant = "solid" }: ButtonProps & { href: string }) {
  return (
    <Link href={href} className={`btn btn-fwd ${size === "lg" ? "btn-lg" : ""} ${variant === "line" ? "btn-line" : ""} ${className}`}>
      <span className="btn-label">{children}</span>
      <span className="btn-icon" aria-hidden="true">
        <Arrows forward />
      </span>
    </Link>
  );
}

/** Enlace de texto con subrayado que se recoge al pasar el cursor. */
export function TextLink({ href, children, className = "", external = false, forward = false }: { href: string; children: React.ReactNode; className?: string; external?: boolean; forward?: boolean }) {
  const Icon = forward ? IconArrowRight : IconArrowUpRight;
  const inner = (
    <>
      <span className="link-text">{children}</span>
      <Icon size={18} stroke={1.5} aria-hidden="true" />
    </>
  );
  if (external || href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:")) {
    const isWa = href.includes("wa.me");
    return (
      <a href={href} className={`link ${forward ? "link-forward" : ""} ${className}`} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} data-contact={isWa ? "whatsapp" : href.startsWith("tel:") ? "phone" : undefined}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={`link ${forward ? "link-forward" : ""} ${className}`}>
      {inner}
    </Link>
  );
}

/** Enlace de llamada al primer teléfono (solo tel:). */
export function CallLink({ className = "", index = 0, label }: { className?: string; index?: number; label?: string }) {
  const phone = siteConfig.phones[index];
  return (
    <a href={phone.href} className={`link ${className}`} data-contact="phone">
      <IconPhone size={18} stroke={1.5} aria-hidden="true" />
      <span className="link-text">{label ?? `Llamar al ${phone.display}`}</span>
    </a>
  );
}
