import sharp from "sharp";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
const dir = "public/assets/fotos";
const files = (await readdir(dir)).filter((x) => x.endsWith(".jpg"));
await Promise.all(
  files.map(async (file) => {
    for (const width of [384, 640, 960, 1280]) {
      await sharp(path.join(dir, file))
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 85, effort: 5 })
        .toFile(path.join(dir, file.replace(".jpg", `-${width}.webp`)));
    }
  }),
);
const source = "public/assets/logo/logo-n80-verde.png";
// SVG tracings are preserved as source assets; raster variants are rebuilt.
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
const logoSvg = await readFile("public/assets/logo/logo-n80-verde.svg", "utf8");
const paths = logoSvg.replace(/^[\s\S]*?<g /, "<g ").replace(/<\/svg>\s*$/, "");
await writeFile(
  "public/favicon.svg",
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1382 1382"><rect width="1382" height="1382" rx="140" fill="#F6F4EE"/><g transform="translate(0 388)">${paths}</g></svg>`,
);
const logo = await sharp(source).resize({ width: 620 }).png().toBuffer();
const type = Buffer.from(
  `<svg width="1200" height="630"><rect width="1200" height="630" fill="#F6F4EE"/><path d="M80 485H1120" stroke="#CAB990"/><text x="80" y="552" font-family="sans-serif" font-size="29" fill="#12451D">NOTARÍA PÚBLICA 80 · GUADALAJARA</text><text x="1120" y="590" text-anchor="end" font-family="sans-serif" font-size="20" fill="#415942">Su patrimonio, en firme.</text></svg>`,
);
await sharp(type)
  .composite([{ input: logo, left: 80, top: 130 }])
  .png()
  .toFile("public/og-notaria80.png");
await mkdir("docs/screenshots", { recursive: true });
console.log(
  `Assets listos: ${files.length} fotos, 3 SVG, favicons y Open Graph.`,
);
