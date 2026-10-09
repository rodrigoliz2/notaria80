import type { ImageLoaderProps } from "next/image";
export default function imageLoader({ src, width }: ImageLoaderProps) {
  if (!src.endsWith(".jpg")) return src;
  const sizes = [384, 640, 960, 1280];
  const size = sizes.find((s) => s >= width) ?? 1280;
  return src.replace(".jpg", `-${size}.webp`);
}
