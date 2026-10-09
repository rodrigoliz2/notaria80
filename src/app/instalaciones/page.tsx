import type { Metadata } from "next";
import { photo, siteConfig, type PhotoFile } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Frame } from "@/components/site/frame";
import { TextLink, WhatsAppButton } from "@/components/site/actions";

export const metadata: Metadata = {
  title: "Instalaciones",
  description: "Recepción, salas de firmas privadas, biblioteca del protocolo y áreas jurídicas de la Notaría 80, en Pablo Villaseñor 125, Guadalajara. Espacios accesibles.",
  alternates: { canonical: "/instalaciones/" },
};

const n = (file: PhotoFile) => file.slice(0, 2);
const cap = (file: PhotoFile) => ({ n: n(file), text: photo(file).caption });

const spaces = ["Recepción y orientación", "Áreas administrativas", "Áreas jurídicas", "Salas de firmas privadas", "Espacios adaptados"];

export default function Instalaciones() {
  return (
    <Page>
      <section className="s-marfil seq pb-16 pt-[calc(var(--header-h)+56px)] md:pt-[calc(var(--header-h)+104px)]">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-x-6">
          <div className="lg:col-span-5">
            <p className="seq-fade marker" style={{ "--d": "0ms" } as React.CSSProperties} aria-hidden="true">12</p>
            <Lines as="h1" reveal="load" className="t-h1 mt-6" lines={["Un lugar", { text: "a la altura", em: true }, { text: "de su firma.", em: true }]} />
            <p className="seq-fade t-lead mt-8 max-w-[32ch] text-[var(--muted)]" style={{ "--d": "560ms" } as React.CSSProperties}>
              Mármol, madera y luz natural en {siteConfig.address}, colonia Ladrón de Guevara.
            </p>
          </div>
          <div className="lg:col-span-7">
            <Frame file="04-recepcion-vista-superior" reveal="load" delay={160} priority sizes="(min-width: 1024px) 56vw, 100vw" className="aspect-[4/3]" caption={cap("04-recepcion-vista-superior")} />
          </div>
        </div>
      </section>

      {/* Par desfasado */}
      <section className="s-marfil pb-[var(--section)]" aria-label="Recepción y atrio">
        <div className="wrap grid gap-12 md:grid-cols-12 md:gap-x-6">
          <div className="md:col-span-7">
            <Frame file="03-recepcion-sala-de-espera" sizes="(min-width: 768px) 56vw, 100vw" className="aspect-[4/3]" caption={cap("03-recepcion-sala-de-espera")} />
          </div>
          <div className="md:col-span-4 md:col-start-9 md:pt-[30%]">
            <Frame file="01-atrio-doble-altura" sizes="(min-width: 768px) 32vw, 100vw" className="aspect-[3/4]" brass delay={120} caption={cap("01-atrio-doble-altura")} />
          </div>
        </div>
      </section>

      {/* Trío de verticales a distintas alturas */}
      <section className="s-piedra section" aria-labelledby="firmas-titulo">
        <div className="wrap">
          <Lines id="firmas-titulo" className="t-h2 max-w-[16ch]" lines={["Salas de firmas", { text: "y biblioteca.", em: true }]} />
          <div className="mt-14 grid gap-12 sm:grid-cols-3 sm:gap-x-6 lg:mt-20">
            <Frame file="06-sala-de-firmas" sizes="(min-width: 640px) 31vw, 100vw" className="aspect-[3/4]" caption={cap("06-sala-de-firmas")} />
            <div className="sm:pt-[38%]">
              <Frame file="07-biblioteca-protocolo" sizes="(min-width: 640px) 31vw, 100vw" className="aspect-[3/4]" delay={100} caption={cap("07-biblioteca-protocolo")} />
            </div>
            <div className="sm:pt-[14%]">
              <Frame file="08-biblioteca-ventanal" sizes="(min-width: 640px) 31vw, 100vw" className="aspect-[3/4]" delay={200} caption={cap("08-biblioteca-ventanal")} />
            </div>
          </div>
        </div>
      </section>

      {/* El protocolo */}
      <section className="s-noche lamas section" aria-labelledby="protocolo-titulo">
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center md:gap-x-6">
          <div className="md:col-span-6 md:col-start-2">
            <Frame file="09-libros-protocolo-detalle" sizes="(min-width: 768px) 46vw, 100vw" className="aspect-[4/5]" brass caption={cap("09-libros-protocolo-detalle")} />
          </div>
          <div className="md:col-span-4 md:col-start-9">
            <Lines id="protocolo-titulo" className="t-h2" lines={["El protocolo,", { text: "bajo resguardo.", em: true }]} />
            <p className="mt-6 max-w-[32ch] text-[var(--muted)]" data-rv>
              Cada escritura se conserva en los libros del protocolo, con respaldo de información fuera de sitio.
            </p>
          </div>
        </div>
      </section>

      {/* Áreas de trabajo */}
      <section className="s-marfil section" aria-labelledby="areas-titulo">
        <div className="wrap">
          <Lines id="areas-titulo" className="t-h2 max-w-[14ch]" lines={["Donde se prepara", { text: "su escritura.", em: true }]} />
          <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-x-6 lg:mt-20">
            <div className="md:col-span-5">
              <Frame file="10-area-juridica-mezzanine" sizes="(min-width: 768px) 40vw, 100vw" className="aspect-[3/4]" caption={cap("10-area-juridica-mezzanine")} />
            </div>
            <div className="grid content-start gap-12 md:col-span-6 md:col-start-7">
              <Frame file="11-area-juridica-estaciones" sizes="(min-width: 768px) 48vw, 100vw" className="aspect-[4/3]" delay={100} caption={cap("11-area-juridica-estaciones")} />
              <div className="w-2/3 justify-self-end">
                <Frame file="12-area-digitalizacion" sizes="(min-width: 768px) 32vw, 66vw" className="aspect-[3/4]" delay={160} caption={cap("12-area-digitalizacion")} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Accesibilidad */}
      <section className="s-piedra section" aria-labelledby="acceso-titulo">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <Lines id="acceso-titulo" className="t-h2" lines={["Espacios", { text: "para todos.", em: true }]} />
            <p className="mt-6 max-w-[34ch] text-[var(--muted)]" data-rv>
              Atención digna para personas con discapacidad, adultos mayores y movilidad reducida.
            </p>
          </div>
          <ul className="border-b border-[var(--rule)] lg:col-span-6 lg:col-start-7">
            {spaces.map((s, i) => (
              <li key={s} className="flex items-baseline gap-6 border-t border-[var(--rule)] py-5" data-rv style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <span className="font-serif text-[0.9375rem] text-[var(--muted)]">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-serif text-[clamp(1.375rem,1.1rem+0.8vw,1.875rem)] leading-tight text-bosque">{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="s-bosque" aria-labelledby="visita">
        <div className="wrap section grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Lines id="visita" className="t-h2" lines={["Visítenos", { text: "con cita.", em: true }]} />
            <p className="mt-6 max-w-[36ch] text-[var(--muted)]" data-rv>
              {siteConfig.address}, {siteConfig.neighborhood}. {siteConfig.hours}.
            </p>
            <div className="mt-6" data-rv>
              <TextLink href={siteConfig.mapsUrl}>Cómo llegar en Google Maps</TextLink>
            </div>
          </div>
          <div className="md:col-span-5 md:justify-self-end" data-rv>
            <WhatsAppButton size="lg" message={siteConfig.messages.appointment} origin="instalaciones">
              Agendar cita
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Page>
  );
}
