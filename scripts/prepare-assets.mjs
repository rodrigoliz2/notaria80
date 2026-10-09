import sharp from "sharp";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

// Gradación única para las doce fotos reales: las originales mezclan luz fría y
// cálida. Se baja la saturación, se suaviza el contraste de las altas, se calienta
// apenas el blanco del mármol y las sombras tiran a verde profundo. Los JPG
// originales no se tocan; solo se generan las variantes WebP que sirve el sitio.
const dir = "public/assets/fotos";
const files = (await readdir(dir)).filter((x) => /^\d\d-[a-z-]+\.jpg$/.test(x));
async function grade(file) {
  const { data, info } = await sharp(path.join(dir, file))
    .rotate()
    .modulate({ saturation: 0.8, brightness: 0.99 })
    .linear(1.04, -4)
    .recomb([
      [1.03, 0.0, 0.0],
      [0.0, 1.0, 0.02],
      [0.0, 0.02, 0.93],
    ])
    .gamma(1.06)
    .raw()
    .toBuffer({ resolveWithObject: true });
  return { data, info };
}
await Promise.all(
  files.map(async (file) => {
    const { data, info } = await grade(file);
    for (const width of [384, 640, 960, 1280]) {
      await sharp(data, { raw: info })
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 5 })
        .toFile(path.join(dir, file.replace(".jpg", `-${width}.webp`)));
    }
  }),
);

// Logotipo: el trazado original toca los bordes de su caja (x=0, y=1) y a tamaño
// de encabezado se veía recortado. Se conserva el trazado intacto y se le da aire
// en el viewBox. Este archivo se usa como máscara CSS (el color lo pone el sitio).
const logoSvg = await readFile("public/assets/logo/logo-n80-verde.svg", "utf8");
const paths = logoSvg.replace(/^[\s\S]*?<path /, "<path ").replace(/<\/svg>\s*$/, "");
const pad = 18;
await writeFile(
  "public/assets/logo/logo-n80.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${-pad} ${-pad} ${1382 + pad * 2} ${606 + pad * 2}">${paths.replace(/fill="#12451D"/g, 'fill="#000"')}</svg>\n`,
);

const monogram = await readFile("public/assets/logo/monograma-n80.png");
for (const [size, file] of [
  [32, "favicon-32.png"],
  [180, "apple-touch-icon.png"],
  [192, "icon-192.png"],
  [512, "icon-512.png"],
]) {
  const ink = await sharp(monogram)
    .resize({
      width: Math.round(size * 0.88),
      height: Math.round(size * 0.88),
      fit: "contain",
      background: "#F6F4EE00",
    })
    .png()
    .toBuffer();
  await sharp({
    create: { width: size, height: size, channels: 4, background: "#F6F4EE" },
  })
    .composite([{ input: ink, gravity: "centre" }])
    .png()
    .toFile(`public/${file}`);
}
const greenPaths = logoSvg.replace(/^[\s\S]*?<path /, "<path ").replace(/<\/svg>\s*$/, "");
await writeFile(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1382 1382"><rect width="1382" height="1382" rx="140" fill="#F6F4EE"/><g transform="translate(0 388)">${greenPaths}</g></svg>`,
);

// Imagen para compartir: verde noche con lamas, logotipo en marfil y filete de latón.
const white = await sharp("public/assets/logo/logo-n80-blanco.png").resize({ width: 560 }).png().toBuffer();
const slats = Array.from({ length: 86 }, (_, i) => `<rect x="${i * 14}" width="1" height="630" fill="#F6F4EE" fill-opacity="0.05"/>`).join("");
const card = Buffer.from(
  `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#0F2416"/>${slats}<path d="M80 470H1120" stroke="#CAB990"/><text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="26" letter-spacing="3" fill="#F6F4EE">NOTARÍA PÚBLICA 80 · GUADALAJARA</text><text x="1120" y="540" text-anchor="end" font-family="Georgia, serif" font-style="italic" font-size="30" fill="#CAB990">Su patrimonio, en firme.</text></svg>`,
);
await sharp(card)
  .composite([{ input: white, left: 80, top: 110 }])
  .png()
  .toFile("public/og-notaria80.png");

await mkdir("docs/screenshots", { recursive: true });
console.log(`Assets listos: ${files.length} fotos con gradación, logotipo con aire, favicons y Open Graph.`);
