import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { photo, processSteps, serviceMessage, serviceName, services } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Frame } from "@/components/site/frame";
import { TextLink, WhatsAppButton } from "@/components/site/actions";
import { Institutions } from "@/components/site/institutions";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  if (!s) return {};
  return {
    title: s.title,
    description: `${s.description} ${s.acts.join(", ")}. Notaría Pública 80 de Guadalajara.`,
    alternates: { canonical: `/servicios/${s.slug}/` },
  };
}

const num = (i: number) => String(i + 1).padStart(2, "0");

export default async function Servicio({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const index = services.findIndex((x) => x.slug === slug);
  if (index < 0) notFound();
  const s = services[index];
  const prev = services[(index - 1 + services.length) % services.length];
  const next = services[(index + 1) % services.length];
  const name = serviceName(s);
  const [first, ...rest] = s.title.split(" ");
  const message = serviceMessage(name.toLocaleLowerCase("es-MX"));

  return (
    <Page>
      {/* Hero claro: numeral de área, título y fotografía alta con máscara */}
      <section className="s-marfil seq relative overflow-hidden pb-16 pt-[calc(var(--header-h)+48px)] md:pb-24 md:pt-[calc(var(--header-h)+96px)]">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="flex flex-col lg:col-span-7">
            <nav aria-label="Ruta" className="seq-fade t-small text-[var(--muted)]" style={{ "--d": "0ms" } as React.CSSProperties}>
              <Link href="/servicios" className="uline">Servicios</Link>
              <span aria-hidden="true" className="mx-2">/</span>
              <span aria-current="page">{name}</span>
            </nav>
            <p className="seq-fade t-num mt-10 !text-salvia md:mt-14" style={{ "--d": "60ms" } as React.CSSProperties} aria-hidden="true">
              {num(index)}
            </p>
            <Lines as="h1" reveal="load" className="t-h1 mt-6 max-w-[12ch]" lines={rest.length ? [first, { text: rest.join(" "), em: true }] : [{ text: first, em: true }]} />
            <p className="seq-fade t-lead mt-8 max-w-[34ch] text-[var(--muted)]" style={{ "--d": "520ms" } as React.CSSProperties}>
              {s.description}
            </p>
            <div className="seq-fade mt-10 flex flex-wrap items-center gap-x-8 gap-y-3" style={{ "--d": "640ms" } as React.CSSProperties}>
              <WhatsAppButton size="lg" message={message} origin={`servicio-${s.slug}`}>
                Consultar por WhatsApp
              </WhatsAppButton>
            </div>
          </div>
          <div className="lg:col-span-4 lg:col-start-9 lg:self-end">
            <Frame file={s.photo} reveal="load" delay={160} priority sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[4/5]" brass caption={{ n: num(index), text: photo(s.photo).caption }} />
          </div>
        </div>
      </section>

      {/* Qué es */}
      <section className="s-marfil pb-[var(--section)]" aria-labelledby="que-es">
        <div className="wrap grid gap-6 border-t border-[var(--rule)] pt-12 md:grid-cols-12 md:gap-x-6 md:pt-16">
          <h2 id="que-es" className="t-h3 md:col-span-4">Qué es</h2>
          <p className="t-h3 max-w-[30ch] !text-[var(--fg)] md:col-span-7 md:col-start-6" data-rv>
            {s.intro}
          </p>
        </div>
      </section>

      {/* Actos que incluye */}
      <section className="s-noche lamas section" aria-labelledby="actos">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <span className="marker" aria-hidden="true">{String(s.acts.length).padStart(2, "0")}</span>
            <Lines id="actos" className="t-h2 mt-6" lines={["Actos que", { text: "incluye.", em: true }]} />
          </div>
          <ol className="border-b border-[var(--rule)] lg:col-span-7 lg:col-start-6">
            {s.acts.map((act, i) => (
              <li key={act} className="flex items-baseline gap-6 border-t border-[var(--rule)] py-6 md:py-7" data-rv style={{ "--d": `${i * 60}ms` } as React.CSSProperties}>
                <span className="font-serif text-[0.9375rem] text-laton">{num(i)}</span>
                <span className="font-serif text-[clamp(1.375rem,1.1rem+1vw,2rem)] leading-tight tracking-[-0.01em]">{act}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {s.slug === "creditos-hipotecarios" && (
        <section className="s-marfil pt-[var(--section)]" aria-label="Instituciones con las que operamos">
          <Institutions />
        </section>
      )}

      {/* Cómo es el proceso */}
      <section className="s-marfil section" aria-labelledby="proceso">
        <div className="wrap">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <Lines id="proceso" className="t-h2" lines={["Cómo es", { text: "el proceso.", em: true }]} />
            <TextLink href="/proceso" forward>Ver el recorrido completo</TextLink>
          </div>
          <ol className="mt-12 grid gap-px bg-[var(--rule)] sm:grid-cols-2 lg:mt-16 lg:grid-cols-5">
            {processSteps.map((step, i) => (
              <li key={step.title} className="bg-[var(--bg)] pb-8 pt-6 sm:pr-6 lg:pb-0" data-rv style={{ "--d": `${i * 70}ms` } as React.CSSProperties}>
                <span className="font-serif text-[2.5rem] leading-none text-bosque">{num(i)}</span>
                <h3 className="mt-5 font-serif text-[1.375rem] leading-tight text-bosque">{step.title}</h3>
                <p className="mt-2 max-w-[28ch] text-[0.9375rem] text-[var(--muted)]">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Cierre con WhatsApp prellenado y navegación entre áreas */}
      <section className="s-bosque" aria-labelledby="cierre">
        <div className="wrap section grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Lines id="cierre" className="t-h2" lines={["Hablemos de", { text: name.toLocaleLowerCase("es-MX") + ".", em: true }]} />
            <p className="mt-6 max-w-[36ch] text-[var(--muted)]" data-rv>
              El mensaje ya lleva el nombre del trámite. Usted solo lo envía.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end" data-rv>
            <WhatsAppButton size="lg" message={message} origin={`servicio-${s.slug}-cierre`}>
              Escribir por WhatsApp
            </WhatsAppButton>
          </div>
        </div>
        <nav aria-label="Otras áreas" className="border-t border-[var(--rule)]">
          <div className="wrap grid grid-cols-2">
            <Link href={`/servicios/${prev.slug}`} className="svc-nav group border-r border-[var(--rule)] pr-4">
              <span className="t-small flex items-center gap-2 text-[var(--muted)]">
                <IconArrowLeft size={16} stroke={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:-translate-x-1" />
                Anterior
              </span>
              <span className="mt-2 block font-serif text-[clamp(1.125rem,0.9rem+1vw,1.75rem)] leading-tight">{serviceName(prev)}</span>
            </Link>
            <Link href={`/servicios/${next.slug}`} className="svc-nav group pl-4 text-right">
              <span className="t-small flex items-center justify-end gap-2 text-[var(--muted)]">
                Siguiente
                <IconArrowRight size={16} stroke={1.5} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1" />
              </span>
              <span className="mt-2 block font-serif text-[clamp(1.125rem,0.9rem+1vw,1.75rem)] leading-tight">{serviceName(next)}</span>
            </Link>
          </div>
        </nav>
      </section>
    </Page>
  );
}
