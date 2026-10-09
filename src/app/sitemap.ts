import type { MetadataRoute } from "next";
import { services, siteConfig } from "@/site.config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "servicios", "proceso", "instalaciones", "notaria", "contacto"];
  return [
    ...pages.map((p) => ({ url: `${siteConfig.url}/${p ? p + "/" : ""}`, changeFrequency: "monthly" as const, priority: p ? 0.8 : 1 })),
    ...services.map((s) => ({ url: `${siteConfig.url}/servicios/${s.slug}/`, changeFrequency: "monthly" as const, priority: 0.7 })),
  ];
}
