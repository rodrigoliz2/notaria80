"use client";

import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { testimonials } from "@/site.config";

const ease = [0.23, 1, 0.32, 1] as const;
const INTERVAL = 7000;

// Una cita grande a la vez. Avanza sola y se pausa con el cursor, el foco o si la
// pestaña no está visible; un filete de latón marca el tiempo. Con movimiento
// reducido no avanza sola.
export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [hold, setHold] = useState(false);
  const [hidden, setHidden] = useState(false);
  const reduce = useReducedMotion();
  const autoplay = !reduce && !hold && !hidden;
  const go = useCallback((step: number) => setIndex((i) => (i + step + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => go(1), INTERVAL);
    return () => window.clearTimeout(t);
  }, [autoplay, index, go]);

  useEffect(() => {
    const onVis = () => setHidden(document.visibilityState !== "visible");
    document.addEventListener("visibilitychange", onVis);
    return () => document.removeEventListener("visibilitychange", onVis);
  }, []);

  const t = testimonials[index];
  return (
    <div role="region" aria-roledescription="carrusel" aria-label="Testimonios de clientes" onPointerEnter={() => setHold(true)} onPointerLeave={() => setHold(false)} onFocusCapture={() => setHold(true)} onBlurCapture={() => setHold(false)}>
      <div className="relative min-h-[15rem] md:min-h-[17rem]" aria-live={autoplay ? "off" : "polite"}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={t.name}
            className="m-0"
            initial={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(16px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(-10px)" }}
            transition={{ duration: 0.42, ease }}
          >
            <blockquote className="m-0">
              <p className="t-quote max-w-[24ch]">«{t.quote}»</p>
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 text-[0.9375rem]">
              <span className="font-medium">{t.name}</span>
              <span className="text-[var(--muted)]">Cliente de la Notaría 80</span>
            </figcaption>
          </motion.figure>
        </AnimatePresence>
      </div>
      <div className="mt-10 flex items-center gap-6">
        <div className="relative h-px flex-1 overflow-hidden bg-[var(--rule)]" aria-hidden="true">
          <motion.div
            key={`${index}-${autoplay}`}
            className="absolute inset-0 origin-left bg-laton"
            initial={{ transform: "scaleX(0)" }}
            animate={{ transform: autoplay ? "scaleX(1)" : "scaleX(0)" }}
            transition={{ duration: autoplay ? INTERVAL / 1000 : 0.2, ease: "linear" }}
          />
        </div>
        <span className="font-serif text-[0.9375rem] tabular-nums text-[var(--muted)]" aria-live="polite">
          {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
        </span>
        <div className="flex">
          <button type="button" className="tap grid h-11 w-11 place-items-center" onClick={() => go(-1)} aria-label="Testimonio anterior">
            <IconArrowLeft size={20} stroke={1.25} aria-hidden="true" />
          </button>
          <button type="button" className="tap grid h-11 w-11 place-items-center" onClick={() => go(1)} aria-label="Testimonio siguiente">
            <IconArrowRight size={20} stroke={1.25} aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  );
}
