import type { Metadata } from "next";
import { fullProcess, siteConfig } from "@/site.config";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { Frame } from "@/components/site/frame";
import { ProcessSequence } from "@/components/site/process-sequence";
import { WhatsAppButton } from "@/components/site/actions";

export const metadata: Metadata = {
  title: "Proceso notarial",
  description: "De la primera consulta a la entrega de su testimonio: revisión, presupuesto, proyecto de escritura, firma y entrega en la Notaría 80 de Guadalajara.",
  alternates: { canonical: "/proceso/" },
};

export default function Proceso() {
  return (
    <Page hero="dark">
      <section className="s-noche lamas seq relative overflow-hidden">
        <div className="wrap grid min-h-[88svh] content-end gap-12 pb-16 pt-[calc(var(--header-h)+64px)] lg:grid-cols-12 lg:gap-x-6 lg:pb-24">
          <div className="lg:col-span-7">
            <p className="seq-fade marker" style={{ "--d": "0ms" } as React.CSSProperties} aria-hidden="true">05</p>
            <Lines as="h1" reveal="load" className="t-h1 mt-6" lines={["De la consulta", { text: "a su testimonio.", em: true }]} />
            <p className="seq-fade t-lead mt-8 max-w-[36ch] text-[var(--muted)]" style={{ "--d": "520ms" } as React.CSSProperties}>
              Cinco etapas claras. Usted sabe en todo momento en qué punto está su trámite.
            </p>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <Frame file="08-biblioteca-ventanal" reveal="load" delay={180} priority sizes="(min-width: 1024px) 30vw, 100vw" className="aspect-[4/5]" brass caption={{ n: "08", text: "Biblioteca con luz natural" }} />
          </div>
        </div>
      </section>

      <section className="s-marfil section" aria-label="Las cinco etapas">
        <div className="wrap">
          <ProcessSequence />
        </div>
      </section>

      <section className="s-noche lamas section" aria-labelledby="completo">
        <div className="wrap grid gap-10 lg:grid-cols-12 lg:gap-x-6">
          <div className="lg:col-span-4">
            <span className="marker" aria-hidden="true">10</span>
            <Lines id="completo" className="t-h2 mt-6" lines={["El detalle,", { text: "paso por paso.", em: true }]} />
          </div>
          <details className="lg:col-span-7 lg:col-start-6">
            <summary className="flex min-h-[72px] items-center justify-between gap-6 border-y border-[var(--rule)] text-[1.125rem] font-medium">
              Ver el proceso completo en 10 pasos
              <span className="plus" aria-hidden="true" />
            </summary>
            <ol className="details-body grid gap-x-10 pt-4 md:grid-cols-2">
              {fullProcess.map((step, i) => (
                <li key={step} className="flex gap-5 border-b border-[var(--rule)] py-5">
                  <span className="font-serif text-laton">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-[var(--fg)]">{step}</span>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </section>

      <section className="s-bosque" aria-labelledby="iniciar">
        <div className="wrap section grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <Lines id="iniciar" className="t-h2" lines={["El primer paso", { text: "es la revisión.", em: true }]} />
            <p className="mt-6 max-w-[36ch] text-[var(--muted)]" data-rv>
              Escríbanos qué trámite necesita y le decimos qué documentos traer.
            </p>
          </div>
          <div className="md:col-span-5 md:justify-self-end" data-rv>
            <WhatsAppButton size="lg" message={siteConfig.messages.appointment} origin="proceso">
              Iniciar mi trámite
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </Page>
  );
}
