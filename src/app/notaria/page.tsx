import type { Metadata } from "next";
import { differentiators, education, siteConfig, trajectory } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Frame } from "@/components/site/frame";
import { TextLink, WhatsAppButton } from "@/components/site/actions";
import { Institutions } from "@/components/site/institutions";

export const metadata: Metadata = {
  title: "La Notaría y su titular",
  description: "Mtra. María Enriqueta Ortiz Guerrero, Notaria Pública Titular número 80 de Guadalajara desde 2013. Trayectoria, credenciales y forma de trabajo.",
  alternates: { canonical: "/notaria/" },
};

const facts = [
  { big: "80", text: "Notaría Pública número 80 de Guadalajara" },
  { big: "2013", text: "En funciones desde el 1 de marzo" },
  { big: "30+", text: "Años de trayectoria jurídica" },
];

export default function Notaria() {
  return (
    <Page hero="dark">
      {/* Retrato tipográfico: no hay fotografía de la titular, y no se inventa. */}
      <section className="s-noche lamas seq relative overflow-hidden">
        <div className="wrap grid min-h-[92svh] content-end gap-14 pb-16 pt-[calc(var(--header-h)+64px)] lg:grid-cols-12 lg:gap-x-6 lg:pb-24">
          <div className="lg:col-span-8">
            <p className="seq-fade t-label text-laton" style={{ "--d": "0ms" } as React.CSSProperties}>
              Notaria Pública Titular
            </p>
            <Lines as="h1" reveal="load" className="t-h1 mt-6" lines={["Mtra. María Enriqueta", { text: "Ortiz Guerrero", em: true }]} />
            <p className="seq-fade t-lead mt-8 max-w-[40ch] text-[var(--muted)]" style={{ "--d": "520ms" } as React.CSSProperties}>
              Más de treinta años de trayectoria jurídica. Al frente de la Notaría 80 desde 2013.
            </p>
          </div>
          <ul className="seq-fade grid grid-cols-3 gap-6 border-t border-[var(--rule)] pt-8 lg:col-span-12" style={{ "--d": "680ms" } as React.CSSProperties}>
            {facts.map((f) => (
              <li key={f.big}>
                <span className="block font-serif text-[clamp(2.75rem,1.5rem+5vw,6.5rem)] leading-[0.9] tracking-[-0.03em] text-laton">{f.big}</span>
                <span className="mt-3 block max-w-[22ch] text-[0.875rem] text-[var(--muted)] md:text-[0.9375rem]">{f.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Perfil y credenciales */}
      <section className="s-marfil section" aria-labelledby="perfil">
        <div className="wrap grid gap-14 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-5">
            <Frame file="07-biblioteca-protocolo" sizes="(min-width: 1024px) 38vw, 100vw" className="aspect-[3/4]" brass caption={{ n: "07", text: "Biblioteca del protocolo" }} />
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <span className="marker" aria-hidden="true">01</span>
            <Lines id="perfil" className="t-h2 mt-6" lines={["Formación", { text: "y credenciales.", em: true }]} />
            <ul className="mt-10 border-b border-[var(--rule)]">
              {education.map((e, i) => (
                <li key={e} className="border-t border-[var(--rule)] py-4 text-[var(--fg)]" data-rv style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
                  {e}
                </li>
              ))}
            </ul>
            <dl className="mt-12 grid gap-6 sm:grid-cols-3" data-rv>
              <div>
                <dt className="t-small text-[var(--muted)]">Cédula profesional federal</dt>
                <dd className="m-0 mt-2 font-serif text-[1.75rem] text-bosque">{siteConfig.licenses.federal}</dd>
              </div>
              <div>
                <dt className="t-small text-[var(--muted)]">Cédula profesional estatal</dt>
                <dd className="m-0 mt-2 font-serif text-[1.75rem] text-bosque">{siteConfig.licenses.estatal}</dd>
              </div>
              <div>
                <dt className="t-small text-[var(--muted)]">Publicación</dt>
                <dd className="m-0 mt-2 text-[0.9375rem] text-[var(--fg)]">Datos publicados con autorización de la titular.</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* Línea de tiempo */}
      <section className="s-piedra section" aria-labelledby="trayectoria">
        <div className="wrap">
          <span className="marker" aria-hidden="true">02</span>
          <Lines id="trayectoria" className="t-h2 mt-6" lines={["Una trayectoria", { text: "de servicio público.", em: true }]} />
          <div className="tl mt-14 lg:mt-20">
            <span className="tl-line" aria-hidden="true" />
            <ol>
            {trajectory.map((t, i) => (
              <li key={t.year + t.title} className="relative grid gap-2 pb-12 pl-8 md:grid-cols-[240px_1fr] md:gap-10 md:pl-0 lg:grid-cols-[240px_minmax(0,1fr)_minmax(0,1fr)]" data-rv style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <span className="absolute left-[-4px] top-[0.55em] h-[9px] w-[9px] rotate-45 border border-laton bg-piedra md:left-[236px]" aria-hidden="true" />
                <span className="whitespace-nowrap font-serif text-[clamp(1.75rem,1.3rem+1.6vw,2.75rem)] leading-none text-bosque">
                  {t.year}
                  {"end" in t && <span className="text-[0.6em] text-[var(--muted)]"> - {t.end}</span>}
                </span>
                <h3 className="font-serif text-[clamp(1.25rem,1.05rem+0.7vw,1.625rem)] leading-tight text-bosque md:pl-10">{t.title}</h3>
                <p className="text-[var(--muted)] md:col-start-2 md:pl-10 lg:col-start-3 lg:pl-0">{t.text}</p>
              </li>
            ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Diferenciadores */}
      <section className="s-noche lamas section" aria-labelledby="forma">
        <div className="wrap">
          <div className="grid gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="pb-12 sm:col-span-2 lg:pr-[20%]">
              <span className="marker" aria-hidden="true">03</span>
              <Lines id="forma" className="t-h2 mt-6 max-w-[18ch]" lines={["Cómo trabaja", { text: "la Notaría 80.", em: true }]} />
            </div>
            {differentiators.map((d, i) => (
              <div key={d.title} className="border-t border-[var(--rule)] pb-10 pt-6" data-rv style={{ "--d": `${(i % 3) * 70}ms` } as React.CSSProperties}>
                <span className="font-serif text-[0.9375rem] text-laton">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 font-serif text-[1.5rem] leading-tight">{d.title}</h3>
                <p className="mt-3 max-w-[32ch] text-[var(--muted)]">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="s-marfil section" aria-labelledby="instituciones-titulo">
        <div className="wrap flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <Lines id="instituciones-titulo" className="t-h2" lines={["Instituciones que", { text: "confían en nosotros.", em: true }]} />
          <TextLink href="/servicios/creditos-hipotecarios" forward>Créditos hipotecarios</TextLink>
        </div>
        <div className="mt-14">
          <Institutions />
        </div>
      </section>

      <section className="s-bosque" aria-labelledby="conversar">
        <div className="wrap section grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Lines id="conversar" className="t-h2" lines={["Conversemos", { text: "su trámite.", em: true }]} />
            <p className="mt-6 max-w-[36ch] text-[var(--muted)]" data-rv>
              Le atendemos en español o en inglés, presencial o a distancia.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end" data-rv>
            <WhatsAppButton size="lg" message={siteConfig.messages.appointment} origin="notaria">
              Agendar cita
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Page>
  );
}
