import Image from "next/image";
import Link from "next/link";
import { siteConfig, navigation } from "@/site.config";
import { ContactLink } from "./contact-link";
export function Footer() {
  return (
    <footer className="site-footer" id="pie">
      <div className="container footer-top">
        <div>
          <Link href="/" aria-label="Notaría 80, inicio">
            <Image
              src="/assets/logo/logo-n80-blanco.svg"
              width={1382}
              height={606}
              alt="Notaría 80 Guadalajara"
              className="footer-logo"
              unoptimized
            />
          </Link>
          <p>Seguridad jurídica en cada firma.</p>
          <ContactLink className="text-link light" />
        </div>
        <div className="footer-location">
          <strong>{siteConfig.name}</strong>
          <p>
            {siteConfig.address}
            <br />
            {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}
            <br />
            {siteConfig.city}
          </p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
          <p>{siteConfig.hours}</p>
        </div>
        <div>
          <nav aria-label="Navegación del pie">
            {navigation.map(([label, id]) => (
              <Link key={id} href={`/#${id}`}>
                {label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Notaría Pública 80 de Guadalajara.</p>
        <Link href="/aviso-de-privacidad/">
          Aviso de privacidad <span>(en revisión)</span>
        </Link>
        <Link href="/#inicio">Volver al inicio</Link>
      </div>
    </footer>
  );
}
