import { ContactLink } from "@/components/contact-link";
import Link from "next/link";
export default function NotFound() {
  return (
    <main id="contenido" className="not-found container">
      <p className="error-code">404</p>
      <h1>No encontramos esta página.</h1>
      <p>Podemos orientarle sobre su trámite.</p>
      <div className="hero-actions">
        <ContactLink />
        <Link href="/" className="text-link">
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
