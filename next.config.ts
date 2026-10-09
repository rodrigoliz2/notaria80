import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  turbopack: { root: process.cwd() },
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/lib/image-loader.ts",
    deviceSizes: [384, 640, 960, 1280],
    imageSizes: [384],
    qualities: [85],
  },
  poweredByHeader: false,
};
export default config;
