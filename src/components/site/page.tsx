import { ViewTransition } from "react";

// Envoltura de cada página. Next 16 ejecuta cada navegación como transición, y
// <ViewTransition> le asigna la clase «pagina» a la salida y a la entrada (ver
// globals.css). Va en cada page.tsx, no en el layout: el layout persiste y ahí
// nunca se dispararían la entrada ni la salida.
export function Page({ children, className = "", hero = "light" }: { children: React.ReactNode; className?: string; hero?: "dark" | "light" }) {
  return (
    <ViewTransition enter="pagina" exit="pagina" default="none">
      <main id="contenido" tabIndex={-1} className={className} data-hero={hero}>
        {children}
      </main>
    </ViewTransition>
  );
}
