import type { Metadata } from "next";
import { Page } from "@/components/site/page";
import { Logo } from "@/components/site/logo";
import { ButtonLink, CallLink, TextLink, WhatsAppButton } from "@/components/site/actions";
import { Frame } from "@/components/site/frame";

export const metadata: Metadata = { title: "Guía de estilo", robots: { index: false, follow: false } };

const palette = [
  { name: "Verde bosque", hex: "#12451D", token: "bosque", use: "Marca, titulares, botón principal", cls: "bg-bosque text-marfil" },
  { name: "Verde salvia", hex: "#415942", token: "salvia", use: "Texto secundario sobre claro (7:1)", cls: "bg-salvia text-marfil" },
  { name: "Verde noche", hex: "#0F2416", token: "noche", use: "Muro de lamas, secciones oscuras, pie", cls: "bg-noche text-marfil" },
  { name: "Marfil", hex: "#F6F4EE", token: "marfil", use: "Mármol, superficie de lectura", cls: "bg-marfil text-tinta border border-[var(--rule)]" },
  { name: "Piedra", hex: "#E4E1D8", token: "piedra", use: "Pausa, testimonio, accesibilidad", cls: "bg-piedra text-tinta" },
  { name: "Latón", hex: "#CAB990", token: "laton", use: "Filetes, numerales sobre oscuro. Nunca texto sobre claro", cls: "bg-laton text-noche" },
  { name: "Tinta", hex: "#141C16", token: "tinta", use: "Texto de lectura", cls: "bg-tinta text-marfil" },
  { name: "Niebla", hex: "#A7ADA5", token: "niebla", use: "Texto secundario sobre noche (7.1:1)", cls: "bg-niebla text-noche" },
];

const type = [
  { label: ".t-display · Bodoni Moda · 48 a 120 px", node: <p className="t-display">Su patrimonio, <em>en firme.</em></p> },
  { label: ".t-h1 · 42 a 96 px", node: <p className="t-h1">Siete áreas, <em>un mismo cuidado.</em></p> },
  { label: ".t-h2 · 34 a 68 px", node: <p className="t-h2">Instituciones que <em>confían en nosotros.</em></p> },
  { label: ".t-h3 · 23 a 32 px", node: <p className="t-h3">En palabras de nuestros clientes</p> },
  { label: ".t-num · numeral gráfico · 80 a 208 px", node: <p className="t-num">80</p> },
  { label: ".t-quote · cursiva", node: <p className="t-quote">«Asesoría clara y precisa.»</p> },
  { label: ".t-lead · Instrument Sans · 17 a 21 px", node: <p className="t-lead">Atención personalizada y certeza legal en cada firma.</p> },
  { label: "Texto · 16 a 17 px", node: <p>Escrituración de inmuebles con certeza y transparencia. Párrafos de dos líneas como máximo.</p> },
  { label: ".t-label · uso racionado", node: <p className="t-label text-salvia">Notaría Pública 80 · Guadalajara</p> },
];

const motion = [
  ["Carga del hero", "Líneas del titular tras máscara, 980 ms, escalón 95 ms; foto con cortina 1150 ms (ease-in-out); texto y botones al final. CSS, antes de hidratar."],
  ["Revelados al hacer scroll", "Opacidad y 28 px, 760 a 900 ms, una sola vez. Titulares por líneas con escalón de 85 ms."],
  ["Fotografía", "Cortina que se abre y asentamiento de escala 1.16 a 1. Paralaje de ±6 % ligado al scroll (animation-timeline)."],
  ["Encabezado", "Se oculta al bajar y vuelve al subir, 420 ms; toma superficie marfil y el logotipo escala a .84."],
  ["Índice de servicios", "Nombre activo avanza 20 px, el resto baja a 32 %; foto que sigue al puntero con resorte (240 / 30)."],
  ["Botones", "Fondo que sube 320 ms, flecha que sale y vuelve a entrar 380 ms, escala .97 al presionar 160 ms."],
  ["Enlaces", "Subrayado que se recoge y se vuelve a trazar, 300 ms. Activo del menú: subrayado de 1 px."],
  ["Páginas", "ViewTransition: salida 200 ms, entrada 460 ms con 110 ms de espera. El encabezado y el contacto fijo no se mueven."],
  ["Marquesina", "70 s lineal; se pausa con cursor, foco o botón."],
  ["Proceso", "Filete de progreso ligado al scroll y numeral del paso activo."],
  ["Movimiento reducido", "Todo estático; transiciones de página instantáneas; la marquesina se vuelve desplazable."],
];

function Block({ title, children, n }: { title: string; children: React.ReactNode; n: string }) {
  return (
    <section className="grid gap-8 border-t border-[var(--rule)] py-14 lg:grid-cols-12">
      <div className="lg:col-span-3">
        <span className="marker" aria-hidden="true">{n}</span>
        <h2 className="t-h3 mt-4">{title}</h2>
      </div>
      <div className="lg:col-span-9">{children}</div>
    </section>
  );
}

export default function Styleguide() {
  return (
    <Page>
      <div className="s-marfil pb-24 pt-[calc(var(--header-h)+72px)]">
        <div className="wrap">
          <h1 className="t-h1">Guía de estilo</h1>
          <p className="t-lead mt-6 max-w-[56ch] text-[var(--muted)]">Sistema visual de la Notaría 80: el recinto. Fuente de verdad de los tokens: src/app/globals.css.</p>

          <div className="mt-16">
            <Block n="01" title="Logotipo">
              <div className="grid gap-2 sm:grid-cols-3">
                <div className="grid min-h-48 place-items-center border border-[var(--rule)] text-bosque"><Logo className="w-[200px]" /></div>
                <div className="s-noche lamas grid min-h-48 place-items-center"><Logo className="w-[200px] text-marfil" /></div>
                <div className="s-bosque grid min-h-48 place-items-center"><Logo className="w-[200px] text-marfil" /></div>
              </div>
              <p className="t-small mt-4 text-[var(--muted)]">Trazado fiel del original como máscara SVG, con 18 unidades de aire por lado. Toma el color del texto. Encabezado: 104 px en móvil, 136 px en escritorio. Nunca en latón.</p>
            </Block>

            <Block n="02" title="Color">
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-4">
                {palette.map((c) => (
                  <li key={c.hex} className={`flex min-h-40 flex-col justify-end p-4 ${c.cls}`}>
                    <span className="font-medium">{c.name}</span>
                    <span className="t-small opacity-80">{c.hex} · {c.token}</span>
                    <span className="t-small mt-2 opacity-80">{c.use}</span>
                  </li>
                ))}
              </ul>
            </Block>

            <Block n="03" title="Superficies">
              <div className="grid gap-2 md:grid-cols-4">
                {[["s-marfil", "Marfil"], ["s-piedra", "Piedra"], ["s-noche lamas", "Noche con lamas"], ["s-bosque", "Bosque"]].map(([cls, name]) => (
                  <div key={cls} className={`${cls} border border-[var(--rule)] p-6`}>
                    <p className="t-h3">{name}</p>
                    <p className="mt-2 text-[var(--muted)]">Texto secundario</p>
                    <span className="marker mt-6" aria-hidden="true">01</span>
                  </div>
                ))}
              </div>
              <p className="t-small mt-4 text-[var(--muted)]">Cada superficie redefine sus variables (texto, titular, secundario, filete, foco y botón). Nunca dos secciones seguidas del mismo tono con la misma composición.</p>
            </Block>

            <Block n="04" title="Tipografía">
              <div className="grid gap-10">
                {type.map((t) => (
                  <div key={t.label} className="grid gap-3 border-b border-[var(--rule)] pb-8">
                    <span className="t-small text-[var(--muted)]">{t.label}</span>
                    {t.node}
                  </div>
                ))}
              </div>
            </Block>

            <Block n="05" title="Botones y enlaces">
              <div className="flex flex-wrap items-center gap-4">
                <WhatsAppButton>Escribir por WhatsApp</WhatsAppButton>
                <WhatsAppButton variant="line">Consultar un trámite</WhatsAppButton>
                <ButtonLink href="/servicios">Ver servicios</ButtonLink>
              </div>
              <div className="s-noche lamas mt-4 flex flex-wrap items-center gap-6 p-6">
                <WhatsAppButton size="lg">Agendar cita</WhatsAppButton>
                <TextLink href="/proceso" forward>Cómo es el proceso</TextLink>
                <CallLink label="Llamar" />
              </div>
              <div className="mt-6 flex flex-wrap gap-8">
                <TextLink href="/instalaciones" forward>Enlace interno</TextLink>
                <TextLink href="https://maps.app.goo.gl/twQxYo9FdYSYLmEw9">Enlace externo</TextLink>
                <a href="#" className="uline">Subrayado al pasar</a>
              </div>
              <p className="t-small mt-6 text-[var(--muted)]">Esquinas rectas, 52 px (60 en grande). Flecha en celda propia. Estados: fondo que sube al pasar, .97 al presionar, contorno de 2 px al enfocar (bosque sobre claro, latón sobre oscuro).</p>
            </Block>

            <Block n="06" title="Fotografía">
              <div className="grid gap-6 sm:grid-cols-2">
                <Frame file="09-libros-protocolo-detalle" sizes="40vw" className="aspect-[4/5]" brass caption={{ n: "09", text: "Marco de latón desplazado 14 px" }} />
                <Frame file="06-sala-de-firmas" sizes="40vw" className="aspect-[4/5]" caption={{ n: "06", text: "Cortina, asentamiento y paralaje" }} />
              </div>
              <p className="t-small mt-4 text-[var(--muted)]">Gradación única en build (saturación −20 %, curva suave, mármol cálido). Ninguna foto supera su ancho nativo; se compone con recortes y pares desfasados.</p>
            </Block>

            <Block n="07" title="Movimiento">
              <dl className="border-b border-[var(--rule)]">
                {motion.map(([k, v]) => (
                  <div key={k} className="grid gap-2 border-t border-[var(--rule)] py-4 md:grid-cols-[220px_1fr]">
                    <dt className="font-medium">{k}</dt>
                    <dd className="m-0 text-[var(--muted)]">{v}</dd>
                  </div>
                ))}
              </dl>
              <p className="t-small mt-4 text-[var(--muted)]">Curvas: --ease-out cubic-bezier(.23, 1, .32, 1) para entradas; --ease-in-out cubic-bezier(.77, 0, .175, 1) para recorridos. Solo transform y opacity.</p>
            </Block>
          </div>
        </div>
      </div>
    </Page>
  );
}
