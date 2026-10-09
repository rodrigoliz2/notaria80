import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Instrument_Sans } from "next/font/google";
import { Header } from "@/components/site/header";
import { Footer } from "@/components/site/footer";
import { ContactFloat } from "@/components/site/contact-float";
import { RevealObserver } from "@/components/site/reveal-observer";
import { siteConfig } from "@/site.config";
import "./globals.css";

// Bodoni Moda: contraste de trazo y remates de bola que repiten el «80» del
// logotipo; su eje óptico afina los titulares grandes. Instrument Sans: texto e interfaz.
const serif = Bodoni_Moda({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  variable: "--font-bodoni",
  display: "swap",
});
const sans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
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
    description: "Atención personalizada y certeza legal en cada firma. Guadalajara, Jalisco.",
    images: [{ url: "/og-notaria80.png", width: 1200, height: 630, alt: "Notaría 80 de Guadalajara" }],
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
  viewportFit: "cover",
  themeColor: "#0F2416",
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

// Antes del primer pintado: activa el movimiento solo si el sistema no pide
// reducirlo. Si el JavaScript del sitio no llega en 3 s, lo retira y todo queda visible.
const motionScript = `(function(){try{var d=document.documentElement;if(!matchMedia('(prefers-reduced-motion: reduce)').matches){d.classList.add('mo');setTimeout(function(){if(!window.__rv)d.classList.remove('mo')},3000)}}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-MX" className={`${serif.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: motionScript }} />
      </head>
      <body>
        <a href="#contenido" className="skip-link">
          Saltar al contenido
        </a>
        <Header />
        {children}
        <Footer />
        <ContactFloat />
        <RevealObserver />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
