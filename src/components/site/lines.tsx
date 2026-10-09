import { createElement } from "react";

type Line = string | { text: string; em?: boolean } | React.ReactNode[];

// Titular que se revela por líneas detrás de una máscara.
// reveal="load": parte de la coreografía de carga (.seq). reveal="scroll": al entrar en pantalla.
// El texto completo se expone a lectores de pantalla en una sola cadena.
export function Lines({ as = "h2", lines, className = "", reveal = "scroll", delay = 0, id }: { as?: "h1" | "h2" | "h3" | "p"; lines: Line[]; className?: string; reveal?: "load" | "scroll" | "none"; delay?: number; id?: string }) {
  const label = lines
    .map((l) => (typeof l === "string" ? l : Array.isArray(l) ? l.filter((x) => typeof x === "string").join("") : (l as { text: string }).text))
    .join(" ");
  return createElement(
    as,
    {
      id,
      className,
      "aria-label": label,
      ...(reveal === "scroll" ? { "data-rv-lines": "" } : {}),
      style: { "--d": `${delay}ms` } as React.CSSProperties,
    },
    lines.map((line, i) => (
      <span className="ln" aria-hidden="true" key={i} style={{ "--i": i } as React.CSSProperties}>
        <span>{typeof line === "string" ? line : Array.isArray(line) ? line : (line as { em?: boolean }).em ? <em>{(line as { text: string }).text}</em> : (line as { text: string }).text}</span>
      </span>
    )),
  );
}
