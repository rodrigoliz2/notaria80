import type { Metadata } from "next";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Frame } from "@/components/site/frame";
import { ServiceIndex } from "@/components/site/service-index";
import { TextLink, WhatsAppButton } from "@/components/site/actions";

export const metadata: Metadata = {
  title: "Servicios notariales",
  description: "Traslativos de dominio, sucesiones, corporativo, poderes, certificaciones, asesoría legal y créditos hipotecarios en la Notaría 80 de Guadalajara.",
  alternates: { canonical: "/servicios/" },
};

export default function Servicios() {
  return (
    <Page>
      <section className="s-marfil seq pb-14 pt-[calc(var(--header-h)+64px)] md:pb-20 md:pt-[calc(var(--header-h)+112px)]">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="seq-fade marker" style={{ "--d": "0ms" } as React.CSSProperties} aria-hidden="true">
              07
            </p>
            <Lines as="h1" reveal="load" className="t-h1 mt-6" lines={["Siete áreas,", { text: "un mismo cuidado.", em: true }]} />
          </div>
          <p className="seq-fade max-w-[36ch] text-[var(--muted)] lg:col-span-4" style={{ "--d": "460ms" } as React.CSSProperties}>
            Elija su trámite para ver qué incluye y cómo es el proceso.
          </p>
        </div>
      </section>

      <section className="s-marfil pb-[var(--section)]" aria-label="Índice de servicios">
        <div className="wrap">
          <ServiceIndex size="full" />
        </div>
      </section>

      <section className="s-noche lamas section" aria-labelledby="orientacion-titulo">
        <div className="wrap grid gap-12 md:grid-cols-12 md:items-center md:gap-x-6">
          <div className="md:col-span-5">
            <Frame file="05-recepcion-mostrador" sizes="(min-width: 768px) 38vw, 100vw" className="aspect-[4/3]" brass caption={{ n: "05", text: "Mostrador de recepción" }} />
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <Lines id="orientacion-titulo" className="t-h2" lines={["¿No sabe qué", { text: "trámite necesita?", em: true }]} />
            <p className="mt-6 max-w-[36ch] text-[var(--muted)]" data-rv>
              Cuéntenos su caso; le decimos el camino, los requisitos y el costo.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3" data-rv style={{ "--d": "100ms" } as React.CSSProperties}>
              <WhatsAppButton size="lg" message="Hola, necesito orientación para saber qué trámite me corresponde en la Notaría 80." origin="servicios">
                Pedir orientación
              </WhatsAppButton>
              <TextLink href="/proceso" forward>Cómo es el proceso</TextLink>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
