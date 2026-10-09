import Image from "next/image";
import { photo, type PhotoFile } from "@/site.config";

type Props = {
  file: PhotoFile;
  /** Clases del marco: proporción (aspect-*) y ancho. */
  className?: string;
  sizes: string;
  /** «load»: se abre con la carga de la página (hero). «scroll»: al entrar en pantalla. */
  reveal?: "load" | "scroll" | "none";
  delay?: number;
  parallax?: boolean;
  priority?: boolean;
  brass?: boolean;
  caption?: string | { n: string; text: string };
  alt?: string;
  position?: string;
  frameStyle?: React.CSSProperties;
};

// Fotografía real en marco editorial. Capas, de fuera hacia dentro:
// marco fijo que recorta → cortina que sube → contracortina que la compensa (la
// imagen queda quieta mientras la máscara se abre) → asentamiento de escala →
// paralaje ligado al scroll → imagen. Todo es transform.
export function Frame({ file, className = "", sizes, reveal = "scroll", delay = 0, parallax = true, priority = false, brass = false, caption, alt, position, frameStyle }: Props) {
  const p = photo(file);
  const frameProps = reveal === "scroll" ? { "data-rv-curtain": "" } : {};
  const curtainClass = reveal === "load" ? "curtain seq-curtain" : "curtain";
  const image = (
    <div className={`frame ${className}`} style={{ ...frameStyle, "--d": `${delay}ms` } as React.CSSProperties} {...frameProps}>
      <div className={curtainClass}>
        <div className="frame-in">
          <div className="frame-settle">
            <div className={parallax ? "plx" : "absolute inset-0"}>
              <Image
                src={`/assets/fotos/${p.file}.jpg`}
                alt={alt ?? p.alt}
                fill
                sizes={sizes}
                quality={85}
                preload={priority}
                fetchPriority={priority ? "high" : undefined}
                loading={priority || reveal === "load" ? "eager" : "lazy"}
                style={position ? { objectPosition: position } : undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  return (
    <figure className="m-0">
      {brass ? <div className="brass-frame isolate">{image}</div> : image}
      {caption && (
        <figcaption className="caption">
          {typeof caption === "string" ? caption : (
            <>
              <b>{caption.n}</b>
              <span>{caption.text}</span>
            </>
          )}
        </figcaption>
      )}
    </figure>
  );
}
