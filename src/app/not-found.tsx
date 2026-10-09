import type { Metadata } from "next";
import { Page } from "@/components/site/page";
import { Lines } from "@/components/site/lines";
import { TextLink, WhatsAppButton } from "@/components/site/actions";
import { Logo } from "@/components/site/logo";

export const metadata: Metadata = { title: "Página no encontrada", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <Page hero="dark">
      <section className="s-noche lamas seq relative overflow-hidden">
        <Logo label={null} className="watermark -right-[20vw] bottom-[-8vw] w-[110vw] md:w-[70vw]" />
        <div className="wrap relative grid min-h-[100svh] content-center gap-8 pb-16 pt-[calc(var(--header-h)+48px)]">
          <p className="seq-fade t-num text-laton" style={{ "--d": "0ms" } as React.CSSProperties} aria-hidden="true">
            404
          </p>
          <Lines as="h1" reveal="load" className="t-h1 max-w-[14ch]" lines={["Esta página", { text: "no está en el protocolo.", em: true }]} />
          <p className="seq-fade t-lead max-w-[38ch] text-[var(--muted)]" style={{ "--d": "520ms" } as React.CSSProperties}>
            Quizá cambió de dirección. Podemos orientarle sobre su trámite.
          </p>
          <div className="seq-fade flex flex-wrap items-center gap-x-8 gap-y-3" style={{ "--d": "640ms" } as React.CSSProperties}>
            <WhatsAppButton size="lg" origin="404">Escribir por WhatsApp</WhatsAppButton>
            <TextLink href="/" forward>Volver al inicio</TextLink>
          </div>
        </div>
      </section>
    </Page>
  );
}
