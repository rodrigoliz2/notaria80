"use client";

import { useState } from "react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { institutions } from "@/site.config";

// Marquesina continua. Insignias en un solo tono (máscara del logotipo real) que
// muestran su color al pasar el cursor; las instituciones sin insignia utilizable
// van con su nombre en la misma altura. Se pausa con el cursor, el foco o el botón.
export function Institutions() {
  const [paused, setPaused] = useState(false);
  const set = (copy: number) => (
    <ul className="flex shrink-0 items-center" aria-hidden={copy === 1 ? true : undefined}>
      {institutions.map((item) => (
        <li key={item.name} className="flex shrink-0 items-center px-8 md:px-11">
          {"logo" in item ? (
            <span className="insignia" style={{ "--src": `url(/assets/instituciones/${item.logo})` } as React.CSSProperties}>
              <span className="insignia-tono" />
              <span className="insignia-color" />
              {copy === 0 && <span className="sr-only">{item.name}</span>}
            </span>
          ) : (
            <span className="insignia-nombre">{item.name}</span>
          )}
        </li>
      ))}
    </ul>
  );
  return (
    <div>
      <div className="marquee py-2" data-paused={paused} role="region" aria-label="Instituciones que confían en la Notaría 80" tabIndex={0}>
        <div className="marquee-track">
          {set(0)}
          {set(1)}
        </div>
      </div>
      <div className="wrap mt-8 flex justify-end">
        <button type="button" className="link tap text-[0.875rem]" aria-pressed={paused} onClick={() => setPaused((v) => !v)}>
          {paused ? <IconPlayerPlay size={16} stroke={1.5} aria-hidden="true" /> : <IconPlayerPause size={16} stroke={1.5} aria-hidden="true" />}
          <span className="link-text">{paused ? "Reanudar movimiento" : "Pausar movimiento"}</span>
        </button>
      </div>
    </div>
  );
}
