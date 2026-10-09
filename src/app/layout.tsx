import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { FixedContact } from "@/components/fixed-contact";
import { MotionEnhancements } from "@/components/motion";
import { siteConfig } from "@/site.config";
import "./globals.css";
const serif = localFont({
  src: [
    {
      path: "../fonts/cormorant-normal.woff2",
      weight: "400 500",
      style: "normal",
    },
    { path: "../fonts/cormorant-italic.woff2", weight: "400", style: "italic" },
  ],
  variable: "--font-serif",
  display: "swap",
});
const sans = localFont({
  src: [
    {
      path: "../fonts/manrope-normal.woff2",
      weight: "400 600",
      style: "normal",
    },
  ],
  variable: "--font-sans",
  display: "swap",
});
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Notaría 80 de Guadalajara | Su patrimonio, en firme.",
    template: "%s | Notaría 80 Guadalajara",
  },
  description:
    "Escrituración, testamentos, sociedades, poderes y certificaciones. Atención personalizada en la Notaría Pública 80 de Guadalajara. Agende por WhatsApp.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: siteConfig.name,
    url: "/",
    title: "Notaría 80 | Su patrimonio, en firme.",
    description:
      "Atención personalizada y certeza legal en cada firma. Guadalajara, Jalisco.",
    images: [
      {
        url: "/og-notaria80.png",
        width: 1200,
        height: 630,
        alt: "Notaría 80 de Guadalajara",
      },
    ],
  },
  twitter: { card: "summary_large_image", images: ["/og-notaria80.png"] },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  robots: { index: true, follow: true },
  manifest: "/site.webmanifest",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#12451D",
};
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "@id": `${siteConfig.url}/#notaria`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/og-notaria80.png`,
  logo: `${siteConfig.url}/assets/logo/logo-n80-verde.svg`,
  telephone: ["+52-33-1983-3354", "+52-33-1983-3355", "+52-33-3630-6433"],
  email: siteConfig.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${siteConfig.address}, ${siteConfig.neighborhood}`,
    addressLocality: "Guadalajara",
    addressRegion: "Jalisco",
    postalCode: siteConfig.postalCode,
    addressCountry: "MX",
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "09:00",
    closes: "17:00",
  },
  areaServed: { "@type": "City", name: "Guadalajara" },
  geo: { "@type": "GeoCoordinates", ...siteConfig.geo },
  hasMap: siteConfig.mapsUrl,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-MX" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <FixedContact />
        <MotionEnhancements />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </body>
    </html>
  );
}
