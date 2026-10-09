import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { brotliCompressSync, gzipSync } from "node:zlib";
import path from "node:path";
const root = path.resolve("out");
const port = Number(process.env.PORT || 3080);
const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".xml": "application/xml",
  ".txt": "text/plain",
  ".webmanifest": "application/manifest+json",
};
createServer(async (req, res) => {
  try {
    const url = new URL(req.url, "http://localhost");
    const file = path.resolve(root, "." + decodeURIComponent(url.pathname));
    if (file !== root && !file.startsWith(root + path.sep)) {
      res.writeHead(403);
      res.end();
      return;
    }
    let target = file;
    try {
      if ((await stat(target)).isDirectory())
        target = path.join(target, "index.html");
      await stat(target);
    } catch {
      target = path.join(root, "404.html");
      res.statusCode = 404;
    }
    let content = await readFile(target);
    const ext = path.extname(target);
    res.setHeader("Content-Type", types[ext] || "application/octet-stream");
    res.setHeader(
      "Cache-Control",
      target.includes("_next") || target.endsWith(".webp")
        ? "public, max-age=31536000, immutable"
        : "no-cache",
    );
    res.setHeader("Vary", "Accept-Encoding");
    if (
      [
        ".html",
        ".js",
        ".css",
        ".json",
        ".svg",
        ".xml",
        ".txt",
        ".webmanifest",
      ].includes(ext)
    ) {
      const accept = req.headers["accept-encoding"] || "";
      if (accept.includes("br")) {
        content = brotliCompressSync(content);
        res.setHeader("Content-Encoding", "br");
      } else if (accept.includes("gzip")) {
        content = gzipSync(content);
        res.setHeader("Content-Encoding", "gzip");
      }
    }
    res.end(content);
  } catch {
    res.writeHead(500);
    res.end("Error al servir el archivo.");
  }
}).listen(port, "127.0.0.1", () =>
  console.log(`Notaría 80: http://localhost:${port}`),
);
