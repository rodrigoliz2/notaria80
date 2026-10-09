import Image from "next/image";
export function Photo({
  file,
  alt,
  width,
  height,
  priority = false,
  className = "",
  sizes = "(max-width: 767px) 90vw, 45vw",
}: {
  file: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
}) {
  return (
    <Image
      src={`/assets/fotos/${file}.jpg`}
      alt={alt}
      width={width}
      height={height}
      quality={85}
      preload={priority}
      fetchPriority={priority ? "high" : undefined}
      sizes={sizes}
      className={`photo ${className}`}
    />
  );
}
