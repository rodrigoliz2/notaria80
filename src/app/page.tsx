import type { Metadata } from "next";
import { siteConfig } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Frame } from "@/components/site/frame";
import { CallLink, TextLink, WhatsAppButton } from "@/components/site/actions";
import { ServiceIndex } from "@/components/site/service-index";
import { Institutions } from "@/components/site/institutions";
import { Testimonials } from "@/components/site/testimonials";
import { Logo } from "@/components/site/logo";

export const metadata: Metadata = { alternates: { canonical: "/" } };

const trust = [
  { big: "2013", text: "En funciones desde el 1 de marzo de 2013." },
  { big: "30+", text: "Años de trayectoria jurídica de la titular." },
  { big: "ES · EN", text: "Atención en español e inglés; intérprete para otros idiomas." },
  { big: <em>Inclusiva</em>, text: "Espacios para personas con discapacidad, adultos mayores y movilidad reducida." },
];

export default function Home() {
  return (
    <Page hero="dark">
      {/* 1. Hero: el muro de lamas. Titular sobre el emblema de latón. */}
      <section className="s-noche lamas seq relative overflow-hidden">
        <div className="hero-layout wrap grid lg:grid-cols-12 lg:gap-x-6">
          {/* Par desfasado: el atrio flota en el vacío superior; solo con pantalla alta. */}
          <div className="hero-atrio">
            <Frame file="01-atrio-doble-altura" reveal="load" delay={420} parallax={false} sizes="18vw" className="aspect-[3/4]" brass caption={{ n: "01", text: "Atrio de doble altura" }} />
          </div>
          <div className="hero-photo relative -mx-[var(--gutter)] lg:col-start-8 lg:col-end-13 lg:mx-0 lg:self-stretch">
            <Frame
              file="02-letrero-logotipo-muro"
              reveal="load"
              delay={120}
              priority
              parallax={false}
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="hero-emblem aspect-[16/11] w-full sm:aspect-[16/10] lg:aspect-auto"
              position="50% var(--hero-photo-y, 46%)"
              alt="Logotipo de la Notaría 80 en latón sobre el muro de lamas negras de la recepción"
            />
          </div>
          <div className="relative z-10 lg:col-start-1 lg:col-end-10 lg:row-start-1 lg:self-end">
            <p className="seq-fade t-label text-laton" style={{ "--d": "60ms" } as React.CSSProperties}>
              Notaría Pública 80 · Guadalajara
            </p>
            <Lines as="h1" reveal="load" className="t-display mt-5 lg:mt-7" lines={["Su patrimonio,", { text: "en firme.", em: true }]} />
          </div>
          <div className="hero-copy relative z-10 grid lg:col-start-1 lg:col-end-7 lg:row-start-2 lg:mt-2">
            <p className="seq-fade t-lead max-w-[40ch] text-[var(--muted)]" style={{ "--d": "620ms" } as React.CSSProperties}>
              Escrituras, testamentos, sociedades y poderes. Atención personalizada y certeza legal en cada firma.
            </p>
            <div className="hero-actions seq-fade flex flex-wrap items-center gap-x-8 gap-y-3" style={{ "--d": "760ms" } as React.CSSProperties}>
              <WhatsAppButton size="lg" origin="hero">Escribir por WhatsApp</WhatsAppButton>
              <CallLink label="Llamar" className="hidden md:inline-flex" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Franja de confianza */}
      <section className="s-marfil" aria-label="La Notaría 80 en cifras">
        <div className="wrap">
          <ul className="grid border-b border-[var(--rule)] sm:grid-cols-2 lg:grid-cols-4">
            {trust.map((t, i) => (
              <li key={i} className="trust-item" data-rv style={{ "--d": `${i * 80}ms` } as React.CSSProperties}>
                <span className="t-h2 block whitespace-nowrap">{t.big}</span>
                <span className="mt-3 block max-w-[28ch] text-[0.9375rem] text-[var(--muted)]">{t.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 3. Servicios */}
      <section className="s-marfil section" aria-labelledby="servicios-titulo">
        <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-[calc(var(--header-h)+40px)]">
              <span className="marker" aria-hidden="true">01</span>
              <Lines id="servicios-titulo" className="t-h2 mt-6" lines={["Lo que", { text: "hacemos.", em: true }]} />
              <p className="mt-6 max-w-[34ch] text-[var(--muted)]" data-rv>
                Para su familia, su patrimonio o su empresa.
              </p>
              <div className="mt-8 grid justify-items-start gap-2" data-rv style={{ "--d": "120ms" } as React.CSSProperties}>
                <WhatsAppButton variant="line" origin="inicio-servicios">Consultar un trámite</WhatsAppButton>
                <TextLink href="/proceso" forward>Cómo es el proceso</TextLink>
              </div>
            </div>
          </div>
          <div className="lg:col-span-8">
            <ServiceIndex size="compact" />
          </div>
        </div>
      </section>

      {/* 4. Instalaciones: par desfasado sobre el muro */}
      <section className="s-noche lamas section relative overflow-hidden" aria-labelledby="recinto-titulo">
        <div className="wrap">
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="marker" aria-hidden="true">02</span>
              <Lines id="recinto-titulo" className="t-h1 mt-6" lines={["Un recinto para", { text: "firmar en calma.", em: true }]} />
            </div>
          </div>
          <div className="mt-14 grid gap-12 md:grid-cols-12 md:gap-x-6 lg:mt-20">
            <div className="md:col-span-5">
              <Frame file="01-atrio-doble-altura" sizes="(min-width: 768px) 38vw, 100vw" className="aspect-[4/5]" caption={{ n: "01", text: "Atrio de doble altura" }} />
            </div>
            <div className="md:col-span-6 md:col-start-7 md:pt-[22%]">
              <Frame file="03-recepcion-sala-de-espera" sizes="(min-width: 768px) 45vw, 100vw" className="aspect-[4/3]" delay={120} brass caption={{ n: "02", text: "Recepción y sala de espera" }} />
              <p className="mt-10 max-w-[36ch] text-[var(--muted)]" data-rv>
                Salas de firmas privadas y espacios accesibles, en la colonia Ladrón de Guevara.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3" data-rv style={{ "--d": "100ms" } as React.CSSProperties}>
                <TextLink href="/instalaciones" forward>Recorrer las instalaciones</TextLink>
                <TextLink href={siteConfig.mapsUrl}>Cómo llegar</TextLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Instituciones */}
      <section className="s-marfil section" aria-labelledby="instituciones-titulo">
        <div className="wrap grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="marker" aria-hidden="true">03</span>
            <Lines id="instituciones-titulo" className="t-h2 mt-6" lines={["Instituciones que", { text: "confían en nosotros.", em: true }]} />
          </div>
          <div className="lg:col-span-4 lg:col-start-9" data-rv>
            <p className="text-[var(--muted)]">Infonavit, Fovissste, banca y desarrolladores, incluso en operaciones de alto volumen.</p>
            <TextLink href="/servicios/creditos-hipotecarios" className="mt-4" forward>
              Créditos hipotecarios
            </TextLink>
          </div>
        </div>
        <div className="mt-14 lg:mt-20">
          <Institutions />
        </div>
      </section>

      {/* 6. Testimonio */}
      <section className="s-piedra section" aria-labelledby="testimonios-titulo">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-3">
            <span className="marker" aria-hidden="true">04</span>
            <h2 id="testimonios-titulo" className="t-h3 mt-6 max-w-[12ch]">
              En palabras de nuestros clientes
            </h2>
          </div>
          <div className="lg:col-span-8 lg:col-start-5">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* 7. Cierre */}
      <section className="s-bosque relative overflow-hidden" aria-labelledby="cierre-titulo">
        <Logo label={null} className="watermark -right-[18vw] top-1/2 w-[120vw] -translate-y-1/2 md:-right-[8vw] md:w-[72vw]" />
        <div className="wrap section relative">
          <Lines id="cierre-titulo" className="t-display max-w-[11ch]" lines={["El primer paso", { text: "es conversar.", em: true }]} />
          <div className="mt-12 grid gap-8 md:grid-cols-12 md:items-end">
            <p className="t-lead max-w-[34ch] text-[var(--muted)] md:col-span-5" data-rv>
              Cuéntenos qué trámite necesita y le orientamos por WhatsApp.
            </p>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 md:col-span-7 md:justify-end" data-rv style={{ "--d": "120ms" } as React.CSSProperties}>
              <WhatsAppButton size="lg" message={siteConfig.messages.appointment} origin="inicio-cierre">
                Agendar cita
              </WhatsAppButton>
              <CallLink />
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
