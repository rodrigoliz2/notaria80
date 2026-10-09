"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { processSteps, type PhotoFile } from "@/site.config";
import { Frame } from "./frame";

const num = (i: number) => String(i + 1).padStart(2, "0");
const stepPhotos: (PhotoFile | null)[] = ["05-recepcion-mostrador", null, "10-area-juridica-mezzanine", "06-sala-de-firmas", "09-libros-protocolo-detalle"];

// Secuencia narrada: columna fija con el numeral del paso activo y un filete de
// latón que avanza con el scroll; a la derecha, un paso por pantalla.
export function ProcessSequence() {
  const list = useRef<HTMLOListElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: list, offset: ["start 60%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  useEffect(() => {
    const items = list.current?.querySelectorAll<HTMLElement>("[data-step]");
    if (!items) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.step));
      },
      { rootMargin: "-45% 0px -45% 0px" },
    );
    items.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="grid gap-x-6 lg:grid-cols-12">
      <div className="hidden lg:col-span-5 lg:block">
        <div className="sticky top-[calc(var(--header-h)+56px)] flex h-[calc(100svh-var(--header-h)-112px)] max-h-[680px] gap-10">
          <div className="relative w-px bg-[var(--rule)]" aria-hidden="true">
            <motion.div className="absolute inset-0 origin-top bg-laton" style={{ scaleY: reduce ? scrollYProgress : progress }} />
          </div>
          <div className="flex flex-col justify-between">
            <div className="relative h-[0.86em] w-[1.25em] overflow-hidden font-serif text-[clamp(8rem,4rem+10vw,15rem)] leading-[0.8] text-bosque" aria-hidden="true">
              {processSteps.map((_, i) => (
                <span key={i} className="absolute inset-0 transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] motion-reduce:transition-none" style={{ transform: `translateY(${(i - active) * 100}%)`, opacity: i === active ? 1 : 0 }}>
                  {num(i)}
                </span>
              ))}
            </div>
            <ol className="grid gap-1" aria-hidden="true">
              {processSteps.map((s, i) => (
                <li key={s.title} className="flex items-center gap-4 text-[0.9375rem] transition-colors duration-300" style={{ color: i === active ? "var(--color-bosque)" : "var(--color-salvia)" }}>
                  <span className="h-px bg-laton transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]" style={{ width: 24, transform: `scaleX(${i === active ? 1 : 0})`, transformOrigin: "left" }} />
                  <span className="font-serif">{num(i)}</span>
                  {s.title}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
      <ol ref={list} className="lg:col-span-6 lg:col-start-7">
        {processSteps.map((s, i) => (
          <li key={s.title} data-step={i} className="grid content-center gap-6 border-t border-[var(--rule)] py-14 lg:min-h-[78svh] lg:border-0 lg:py-20">
            <span className="font-serif text-[3.5rem] leading-none text-salvia lg:hidden" aria-hidden="true">{num(i)}</span>
            <h2 className="t-h2" data-rv>
              <span className="sr-only">Paso {i + 1}: </span>
              {s.title}
            </h2>
            <p className="t-lead max-w-[34ch] text-[var(--muted)]" data-rv style={{ "--d": "80ms" } as React.CSSProperties}>
              {s.text}
            </p>
            {stepPhotos[i] && (
              <div className="mt-4 w-full max-w-[420px]">
                <Frame file={stepPhotos[i]!} sizes="(min-width: 1024px) 30vw, 90vw" className="aspect-[4/3]" />
              </div>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
