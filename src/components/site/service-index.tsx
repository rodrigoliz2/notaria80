"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import { services, serviceName } from "@/site.config";

const num = (i: number) => String(i + 1).padStart(2, "0");

// Índice editorial de áreas. Con cursor: el nombre activo avanza 20 px, los demás
// se atenúan y la fotografía del área acompaña al puntero con resorte. En táctil,
// cada fila lleva su miniatura. Solo transform y opacity.
export function ServiceIndex({ size = "full" }: { size?: "full" | "compact" }) {
  const list = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 240, damping: 30, mass: 0.6 });
  const sy = useSpring(y, { stiffness: 240, damping: 30, mass: 0.6 });

  function move(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return;
    const box = list.current?.getBoundingClientRect();
    if (!box) return;
    x.set(e.clientX - box.left);
    y.set(e.clientY - box.top);
  }

  return (
    <div className="svc relative" data-size={size}>
      <ul ref={list} className="border-b border-[var(--rule)]" onPointerMove={move} onPointerLeave={() => setActive(null)}>
        {services.map((s, i) => (
          <li key={s.slug} className="border-t border-[var(--rule)]" data-rv style={{ "--d": `${i * 50}ms` } as React.CSSProperties}>
            <Link href={`/servicios/${s.slug}`} className="svc-row" data-dim={active !== null && active !== i} onPointerEnter={(e) => e.pointerType === "mouse" && setActive(i)} onFocus={() => setActive(i)} onBlur={() => setActive(null)}>
              <span className="svc-num">{num(i)}</span>
              <span className="svc-name">{serviceName(s)}</span>
              <span className="svc-desc">{s.description}</span>
              <span className="svc-thumb" aria-hidden="true">
                <Image src={`/assets/fotos/${s.photo}.jpg`} alt="" fill sizes="96px" className="object-cover" loading="lazy" />
              </span>
              <span className="svc-arrow" aria-hidden="true">
                <IconArrowRight size={22} stroke={1.25} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <motion.div aria-hidden="true" className="svc-follow" style={{ x: reduce ? x : sx, y: reduce ? y : sy }}>
        {services.map((s, i) => (
          <motion.div
            key={s.slug}
            className="absolute inset-0 overflow-hidden"
            initial={false}
            animate={{ opacity: active === i ? 1 : 0, scale: active === i || reduce ? 1 : 0.92 }}
            transition={{ duration: 0.26, ease: [0.23, 1, 0.32, 1] }}
          >
            <Image src={`/assets/fotos/${s.photo}.jpg`} alt="" fill sizes="280px" className="object-cover" loading="lazy" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
