"use client";
import Image from "next/image";
import { useState } from "react";
import { IconPlayerPause, IconPlayerPlay } from "@tabler/icons-react";
import { institutions } from "@/site.config";
export function Institutions() {
  const [paused, setPaused] = useState(false);
  return (
    <>
      <div
        className="marquee"
        data-paused={paused}
        tabIndex={0}
        role="region"
        aria-label="Instituciones que confían en Notaría 80"
      >
        <div className="marquee-track">
          {[0, 1].map((copy) => (
            <div className="marquee-set" key={copy} aria-hidden={copy === 1}>
              {institutions.map((item) => (
                <div className="institution" key={item.name}>
                  {"logo" in item ? (
                    <Image
                      src={`/assets/instituciones/${item.logo}`}
                      alt={item.name}
                      width={150}
                      height={64}
                      unoptimized
                      loading="lazy"
                    />
                  ) : (
                    <span>{item.name}</span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="institution-controls">
        <p>Organismos públicos, banca, vivienda y educación.</p>
        <button
          className="text-link"
          type="button"
          onClick={() => setPaused(!paused)}
          aria-pressed={paused}
        >
          {paused ? (
            <IconPlayerPlay size={18} aria-hidden="true" />
          ) : (
            <IconPlayerPause size={18} aria-hidden="true" />
          )}
          <span>{paused ? "Reanudar movimiento" : "Pausar movimiento"}</span>
        </button>
      </div>
      <details className="institution-list">
        <summary>Ver todas las instituciones</summary>
        <ul>
          {institutions.map((i) => (
            <li key={i.name}>{i.name}</li>
          ))}
        </ul>
      </details>
    </>
  );
}
