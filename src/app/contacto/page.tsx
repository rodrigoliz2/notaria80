import type { Metadata } from "next";
import { siteConfig, whatsappHref } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Appointment } from "@/components/site/appointment";
import { LocationMap } from "@/components/site/map";

export const metadata: Metadata = {
  title: "Contacto y citas",
  description: "Agende su cita por WhatsApp con la Notaría 80. Pablo Villaseñor 125, Ladrón de Guevara, Guadalajara. Lunes a viernes de 9:00 a 17:00 h.",
  alternates: { canonical: "/contacto/" },
};

export default function Contacto() {
  return (
    <Page>
      <section className="s-marfil seq pb-[var(--section)] pt-[calc(var(--header-h)+56px)] md:pt-[calc(var(--header-h)+104px)]">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <Lines as="h1" reveal="load" className="t-h1 lg:text-[clamp(3rem,1rem+3.6vw,5rem)]" lines={["El primer paso", { text: "es conversar.", em: true }]} />
            <p className="seq-fade t-lead mt-8 max-w-[32ch] text-[var(--muted)]" style={{ "--d": "460ms" } as React.CSSProperties}>
              Prepare su mensaje en dos pasos y continúe por WhatsApp.
            </p>

            <dl className="seq-fade mt-14 grid gap-9 sm:grid-cols-2" style={{ "--d": "600ms" } as React.CSSProperties}>
              <div className="sm:col-span-2">
                <dt className="t-small text-[var(--muted)]">WhatsApp</dt>
                <dd className="m-0 mt-2">
                  <a href={whatsappHref()} target="_blank" rel="noopener noreferrer" className="font-serif text-[1.75rem] text-bosque" data-contact="whatsapp" data-origin="contacto">
                    <span className="uline">{siteConfig.whatsappDisplay}</span>
                  </a>
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="t-small text-[var(--muted)]">Teléfonos</dt>
                <dd className="m-0 mt-1 flex flex-wrap gap-x-7">
                  {siteConfig.phones.map((p) => (
                    <a key={p.href} href={p.href} className="flex min-h-11 items-center font-serif text-[1.375rem] text-bosque" data-contact="phone">
                      <span className="uline">{p.display}</span>
                    </a>
                  ))}
                </dd>
              </div>
                <div>
                  <dt className="t-small text-[var(--muted)]">Dirección</dt>
                  <dd className="m-0 mt-2 leading-relaxed">
                    {siteConfig.address}
                    <br />
                    {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}
                    <br />
                    {siteConfig.city}
                  </dd>
                </div>
                <div>
                  <dt className="t-small text-[var(--muted)]">Horario</dt>
                  <dd className="m-0 mt-2">{siteConfig.hours}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="t-small text-[var(--muted)]">Correo</dt>
                  <dd className="m-0 mt-2 break-all">
                    <a href={`mailto:${siteConfig.email}`} className="uline">
                      {siteConfig.email}
                    </a>
                  </dd>
                </div>
            </dl>
          </div>
          <div className="seq-fade lg:col-span-6 lg:col-start-7" style={{ "--d": "300ms" } as React.CSSProperties}>
            <Appointment />
          </div>
        </div>
      </section>
      <section className="s-marfil pb-[var(--section)]" aria-label="Ubicación">
        <div className="wrap">
          <LocationMap />
        </div>
      </section>
    </Page>
  );
}
