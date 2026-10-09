"use client";
import { useState } from "react";
import { IconMapPin, IconArrowUpRight } from "@tabler/icons-react";
import { siteConfig } from "@/site.config";
export function LocationMap() {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="map-block">
      {loaded ? (
        <iframe
          title="Ubicación de la Notaría 80 en Guadalajara"
          src={siteConfig.mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-placeholder">
          <IconMapPin size={32} stroke={1.4} aria-hidden="true" />
          <div>
            <strong>Pablo Villaseñor 125</strong>
            <p>Ladrón de Guevara, Guadalajara</p>
          </div>
          <button
            type="button"
            className="text-link"
            onClick={() => setLoaded(true)}
          >
            Mostrar mapa
            <IconArrowUpRight size={18} aria-hidden="true" />
          </button>
          <small>Se cargará un mapa de Google.</small>
        </div>
      )}
      <a
        className="map-directions"
        href={siteConfig.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        Cómo llegar en Google Maps
        <IconArrowUpRight aria-hidden="true" size={20} />
      </a>
    </div>
  );
}
