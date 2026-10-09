import Link from "next/link";
import { navigation, services, serviceName, siteConfig } from "@/site.config";
import { Logo } from "./logo";
import { WhatsAppButton } from "./actions";

export function Footer() {
  return (
    <footer className="s-noche lamas relative overflow-hidden">
      <Logo label={null} className="watermark -bottom-[6vw] -right-[12vw] w-[110vw] max-w-[1700px] md:w-[78vw]" />
      <div className="wrap relative pt-20 md:pt-28">
        <div className="grid gap-10 border-b border-[var(--rule)] pb-16 md:pb-20 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Link href="/" className="tap inline-flex" aria-label="Notaría 80 Guadalajara, inicio">
              <Logo label={null} className="w-[176px] text-marfil md:w-[220px]" />
            </Link>
            <p className="mt-8 max-w-[38ch] text-[var(--muted)]">
              Notaría Pública número 80 de Guadalajara, Jalisco. {siteConfig.titular}, notaria titular.
            </p>
          </div>
          <div className="lg:col-span-5 lg:justify-self-end">
            <WhatsAppButton message={siteConfig.messages.appointment} size="lg" origin="pie">
              Agendar cita
            </WhatsAppButton>
          </div>
        </div>

        <div className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="t-small text-[var(--muted)]">Visítenos</p>
            <address className="mt-4 not-italic leading-relaxed">
              {siteConfig.address}
              <br />
              {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}
              <br />
              {siteConfig.city}
            </address>
            <a href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer" className="uline mt-4 inline-block text-laton">
              Cómo llegar
            </a>
            <p className="mt-8 text-[var(--muted)]">{siteConfig.hours}</p>
          </div>
          <div className="lg:col-span-3">
            <p className="t-small text-[var(--muted)]">Llámenos</p>
            <ul className="mt-3">
              {siteConfig.phones.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="flex min-h-11 items-center font-serif text-[1.375rem] tracking-[-0.01em]" data-contact="phone">
                    <span className="uline">{p.display}</span>
                  </a>
                </li>
              ))}
            </ul>
            <a href={`mailto:${siteConfig.email}`} className="uline mt-4 inline-block break-all">
              {siteConfig.email}
            </a>
          </div>
          <nav aria-label="Páginas" className="lg:col-span-2">
            <p className="t-small text-[var(--muted)]">La Notaría</p>
            <ul className="mt-3">
              {[{ label: "Inicio", href: "/" }, ...navigation].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex min-h-10 items-center">
                    <span className="uline">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Servicios" className="lg:col-span-3">
            <p className="t-small text-[var(--muted)]">Servicios</p>
            <ul className="mt-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/servicios/${s.slug}`} className="flex min-h-10 items-center">
                    <span className="uline">{serviceName(s)}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* La esquina inferior derecha queda libre para el botón fijo de WhatsApp. */}
        <div className="grid gap-3 border-t border-[var(--rule)] pb-10 pt-8 text-[0.8125rem] text-[var(--muted)] md:grid-cols-[1fr_auto] md:pb-28 md:pr-24">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Titular: {siteConfig.titular}. Cédula profesional federal {siteConfig.licenses.federal} · estatal {siteConfig.licenses.estatal}.
          </p>
          <Link href="/aviso-de-privacidad" className="uline justify-self-start">
            Aviso de privacidad
          </Link>
        </div>
      </div>
    </footer>
  );
}
