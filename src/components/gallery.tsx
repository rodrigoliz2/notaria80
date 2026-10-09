"use client";
import { useState } from "react";
import { IconPlus, IconMinus } from "@tabler/icons-react";
import { photos } from "@/site.config";
import { Photo } from "./photo";
export function Gallery() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="gallery-grid">
        {photos.slice(0, 4).map((p, i) => (
          <figure className={`gallery-item gallery-${i}`} key={p.file}>
            <div className="image-frame image-reveal" data-reveal>
              <Photo
                {...p}
                sizes={
                  i === 0
                    ? "(max-width:767px) 90vw, 55vw"
                    : "(max-width:767px) 90vw, 30vw"
                }
              />
            </div>
            <figcaption>{p.caption}</figcaption>
          </figure>
        ))}
      </div>
      {expanded && (
        <div id="more-photos" className="more-photos">
          {photos.slice(4).map((p) => (
            <figure key={p.file}>
              <Photo {...p} sizes="(max-width:767px) 90vw, 30vw" />
              <figcaption>{p.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
      <button
        type="button"
        className="button outline"
        aria-expanded={expanded}
        aria-controls="more-photos"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Ver menos fotografías" : "Conocer más espacios"}
        {expanded ? (
          <IconMinus size={18} aria-hidden="true" />
        ) : (
          <IconPlus size={18} aria-hidden="true" />
        )}
      </button>
    </>
  );
}
