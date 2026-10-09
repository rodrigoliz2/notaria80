"use client";

import { useState } from "react";
import { IconArrowUpRight, IconMapPin } from "@tabler/icons-react";
import { siteConfig } from "@/site.config";

// Mapa de Google solo a petición (privacidad y rendimiento). Mientras tanto, una
// placa con la dirección y el enlace para llegar.
export function LocationMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="s-noche lamas relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/9] lg:aspect-[3/1]">
      {loaded ? (
        <iframe title="Ubicación de la Notaría 80 en Guadalajara" src={siteConfig.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen className="absolute inset-0 h-full w-full border-0" />
      ) : (
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-8">
          <IconMapPin size={28} stroke={1.25} aria-hidden="true" className="text-laton" />
          <div>
            <p className="font-serif text-[clamp(1.5rem,1.2rem+1vw,2.25rem)] leading-tight">{siteConfig.address}</p>
            <p className="mt-1 text-[var(--muted)]">
              {siteConfig.neighborhood}, {siteConfig.city}
            </p>
            <div className="mt-6 flex flex-wrap gap-x-8 gap-y-2">
              <button type="button" className="link" onClick={() => setLoaded(true)}>
                <span className="link-text">Mostrar mapa</span>
                <IconArrowUpRight size={18} stroke={1.5} aria-hidden="true" />
              </button>
              <a className="link" href={siteConfig.mapsUrl} target="_blank" rel="noopener noreferrer">
                <span className="link-text">Cómo llegar</span>
                <IconArrowUpRight size={18} stroke={1.5} aria-hidden="true" />
              </a>
            </div>
            <p className="t-small mt-3 text-[var(--muted)]">El mapa se carga desde Google solo si lo solicita.</p>
          </div>
        </div>
      )}
    </div>
  );
}
