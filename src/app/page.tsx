import {
  IconArrowDownRight,
  IconArrowUpRight,
  IconPhone,
  IconCheck,
  IconPlus,
} from "@tabler/icons-react";
import {
  siteConfig,
  services,
  processSteps,
  fullProcess,
  testimonials,
  serviceMessage,
} from "@/site.config";
import { ContactLink } from "@/components/contact-link";
import { Photo } from "@/components/photo";
import { Gallery } from "@/components/gallery";
import { Institutions } from "@/components/institutions";
import { Appointment } from "@/components/appointment";
import { LocationMap } from "@/components/map";
export default function Home() {
  return (
    <main id="contenido">
      <section className="hero container" id="inicio">
        <div className="hero-copy">
          <h1 className="hero-title">
            Su patrimonio,
            <br />
            <em>en firme.</em>
          </h1>
          <p className="hero-description">
            Notaría Pública 80 de Guadalajara.
            <br />
            Atención personalizada y certeza legal en cada firma.
          </p>
          <div className="hero-actions">
            <ContactLink />
            <a href={siteConfig.phones[0].href} className="text-link">
              <IconPhone size={19} aria-hidden="true" />
              Llamar
            </a>
          </div>
          <div className="hero-trust">
            <span className="trust-rule" />
            <p>
              En funciones desde 2013.
              <br />
              <span>A su lado en cada decisión.</span>
            </p>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo">
            <Photo
              file="02-letrero-logotipo-muro"
              alt="Logotipo de la Notaría 80 en latón sobre el muro de lamas oscuras de nuestra recepción"
              width={1069}
              height={1062}
              priority
              sizes="(max-width: 767px) 90vw, 44vw"
            />
          </div>
          <div className="hero-inset">
            <Photo
              file="01-atrio-doble-altura"
              alt="Atrio de doble altura con candelabro de latón en la Notaría 80"
              width={1473}
              height={2248}
              sizes="(max-width:767px) 30vw, 170px"
            />
          </div>
          <p className="hero-caption">
            Un espacio para decisiones importantes.
          </p>
        </div>
      </section>
      <section
        className="confidence container"
        aria-label="Nuestra experiencia y atención"
      >
        <div>
          <span className="confidence-main">Desde 2013</span>
          <span>En funciones en Guadalajara</span>
        </div>
        <div>
          <span className="confidence-main">Español e inglés</span>
          <span>Atención en su idioma</span>
        </div>
        <div>
          <span className="confidence-main">Atención inclusiva</span>
          <span>Espacios accesibles</span>
        </div>
        <div>
          <span className="confidence-main">Firmas privadas</span>
          <span>Salas para su tranquilidad</span>
        </div>
      </section>
      <section className="section container services-section" id="servicios">
        <div className="section-heading" data-reveal>
          <h2>
            Cada firma,
            <br />
            una decisión importante.
          </h2>
          <p>
            Su familia, su patrimonio o su empresa.
            <br />
            Le orientamos para dar el siguiente paso.
          </p>
        </div>
        <div className="service-grid">
          {services.map((s) => (
            <article className="service-card" key={s.title}>
              <div className="service-heading">
                <h3>{s.title}</h3>
                <IconArrowDownRight size={25} stroke={1.2} aria-hidden="true" />
              </div>
              <p>{s.description}</p>
              <ul className="service-acts">
                {s.acts.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <ContactLink
                message={serviceMessage(s.title)}
                className="text-link"
              >
                Consultar por WhatsApp
              </ContactLink>
            </article>
          ))}
        </div>
        <div className="mortgage-band">
          <div>
            <h3>Créditos hipotecarios e instituciones.</h3>
            <p>
              Operaciones con Infonavit, Fovissste, bancos y desarrolladores,
              también de alto volumen.
            </p>
          </div>
          <ContactLink
            message={serviceMessage("créditos hipotecarios")}
            className="text-link"
          >
            Consultar un crédito
          </ContactLink>
        </div>
      </section>
      <section className="process-section section" id="proceso">
        <div className="container">
          <div className="section-heading" data-reveal>
            <h2>
              De la primera consulta
              <br />a su escritura.
            </h2>
            <p>
              Un proceso definido.
              <br />
              Acompañamiento en cada etapa.
            </p>
          </div>
          <ol className="process-grid">
            {processSteps.map((s, i) => (
              <li key={s.title}>
                <span className="step-number" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
          <div className="process-bottom">
            <details>
              <summary>
                Ver el proceso completo
                <IconPlus size={19} aria-hidden="true" />
              </summary>
              <ol>
                {fullProcess.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ol>
            </details>
            <ContactLink className="text-link light">
              Iniciar mi trámite
            </ContactLink>
          </div>
        </div>
      </section>
      <section className="section container gallery-section" id="instalaciones">
        <div className="section-heading" data-reveal>
          <h2>
            La tranquilidad
            <br />
            también tiene un lugar.
          </h2>
          <p>
            Espacios reales, atención cercana.
            <br />
            Conozca nuestras instalaciones.
          </p>
        </div>
        <Gallery />
        <div className="gallery-footer">
          <p>
            Espacios adaptados para personas con discapacidad,
            <br className="desktop-break" /> adultos mayores y movilidad
            reducida.
          </p>
          <ContactLink className="text-link">Visítenos con cita</ContactLink>
        </div>
      </section>
      <section className="section difference-section" id="nosotros">
        <div className="container difference-grid">
          <div className="difference-title" data-reveal>
            <h2>
              Certeza legal.
              <br />
              Atención humana.
            </h2>
            <p>
              El cuidado está en los detalles.
              <br />Y en cómo acompañamos su trámite.
            </p>
            <ContactLink className="text-link">Conversemos</ContactLink>
          </div>
          <div className="difference-list">
            {[
              {
                title: "Capacidad y control",
                text: "Operaciones hipotecarias de volumen, procesos definidos y control interno para prevenir errores.",
              },
              {
                title: "Cerca de usted",
                text: "Seguimiento presencial o virtual. Atención en español e inglés e intérprete para otros idiomas.",
              },
              {
                title: "Un espacio inclusivo",
                text: "Atención digna para personas con discapacidad, adultos mayores y movilidad reducida.",
              },
              {
                title: "Experiencia e infraestructura",
                text: "Trayectoria institucional y gubernamental, tecnología notarial y respaldo de información fuera de sitio.",
              },
            ].map((d) => (
              <div key={d.title}>
                <IconCheck size={19} aria-hidden="true" />
                <div>
                  <h3>{d.title}</h3>
                  <p>{d.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section institutions-section" id="instituciones">
        <div className="container">
          <h2 data-reveal>Instituciones que confían en nosotros.</h2>
        </div>
        <Institutions />
        <div className="container institution-contact">
          <ContactLink
            className="text-link"
            message={serviceMessage("operaciones institucionales")}
          >
            Consultar una operación institucional
          </ContactLink>
        </div>
      </section>
      <section className="section container titular-section" id="titular">
        <div className="titular-photo image-reveal" data-reveal>
          <Photo
            file="09-libros-protocolo-detalle"
            alt="Libros del protocolo notarial, resguardados en la biblioteca de la Notaría 80"
            width={831}
            height={1108}
            sizes="(max-width:767px) 90vw, 35vw"
          />
        </div>
        <div className="titular-content" data-reveal>
          <h2>
            Mtra. María Enriqueta
            <br />
            Ortiz Guerrero.
          </h2>
          <p className="titular-role">
            Notaria Pública Titular número 80 de Guadalajara.
          </p>
          <div className="titular-facts">
            <div>
              <strong>30+</strong>
              <span>Años de trayectoria jurídica</span>
            </div>
            <div>
              <strong>2013</strong>
              <span>Inicio de funciones notariales</span>
            </div>
          </div>
          <p>
            Licenciada y Maestra en Derecho por la Universidad de Guadalajara.
          </p>
          <p>
            Especialidades en Derecho Contractual y en Derecho Corporativo y
            Económico por la Universidad Panamericana.
          </p>
          <details className="trajectory">
            <summary>
              Ver trayectoria completa
              <IconPlus size={20} aria-hidden="true" />
            </summary>
            <div>
              <h3>Formación y reconocimientos</h3>
              <ul>
                <li>
                  Licenciatura en Derecho y Maestría en Derecho (Constitucional
                  y Amparo), Universidad de Guadalajara.
                </li>
                <li>
                  Especialidades en Derecho Contractual y en Derecho Corporativo
                  y Económico, Universidad Panamericana.
                </li>
                <li>
                  Diplomado en Derecho Notarial, Colegio de Notarios del Estado
                  de Jalisco.
                </li>
                <li>
                  Reconocimiento Mariano Otero a la excelencia académica, UdeG,
                  1991 y 1993.
                </li>
              </ul>
              <h3>Experiencia institucional</h3>
              <ul>
                <li>
                  Dirección de Catastro del Estado, 1988: auxiliar
                  administrativo en trámite y registro.
                </li>
                <li>
                  Despacho Jurídico Consultor, 1989-1990, y Consorcio
                  Jurisconsultivo, 1990-1992: experiencia en juicios civiles y
                  mercantiles; en el segundo, también penales.
                </li>
                <li>
                  Ayuntamiento de Guadalajara, 1993-1998: supervisión de jueces
                  calificadores (1993-1995) y coordinación de sesiones de
                  Cabildo (1995-1998).
                </li>
                <li>
                  Asesora Jurídica Federal, Instituto Federal de Defensoría
                  Pública, 1999-2007.
                </li>
                <li>
                  Directora General Jurídica, Secretaría de Administración del
                  Gobierno de Jalisco, 2007-2013. Representación y asesoría,
                  contratos administrativos y civiles, procedimientos de
                  responsabilidad y transparencia.
                </li>
                <li>
                  Presidenta Suplente de la Comisión de Adquisiciones y
                  Enajenaciones del Gobierno del Estado.
                </li>
                <li>
                  Nombramiento como titular: 12 de septiembre de 2012. En
                  funciones desde el 1 de marzo de 2013.
                </li>
              </ul>
              <p>
                Cédula Federal {siteConfig.licenses.federal}.<br />
                Cédula Estatal {siteConfig.licenses.estatal}.
              </p>
            </div>
          </details>
          <ContactLink className="text-link">Solicitar orientación</ContactLink>
        </div>
      </section>
      <section className="section testimonial-section" id="testimonios">
        <div className="container">
          <div className="section-heading" data-reveal>
            <h2>
              La confianza,
              <br />
              en sus propias palabras.
            </h2>
            <p>
              Experiencias de quienes
              <br />
              han realizado sus trámites con nosotros.
            </p>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((t) => (
              <figure key={t.name}>
                <span className="quote-mark" aria-hidden="true">
                  “
                </span>
                <blockquote>{t.quote}</blockquote>
                <figcaption>
                  {t.name}
                  <span>Cliente de Notaría 80</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <ContactLink className="text-link">
            Permítanos acompañarle
          </ContactLink>
        </div>
      </section>
      <section className="section container contact-section" id="contacto">
        <div className="section-heading" data-reveal>
          <h2>
            El primer paso
            <br />
            es conversar.
          </h2>
          <p>
            Cuéntenos qué necesita.
            <br />
            Le ayudamos a encontrar el camino.
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-information">
            <h3>Nos vemos en Guadalajara.</h3>
            <address>
              {siteConfig.address}
              <br />
              {siteConfig.neighborhood}, C.P. {siteConfig.postalCode}
              <br />
              {siteConfig.city}
            </address>
            <dl>
              <div>
                <dt>Horario de atención</dt>
                <dd>{siteConfig.hours}</dd>
              </div>
              <div>
                <dt>Llámenos</dt>
                <dd className="phone-list">
                  {siteConfig.phones.map((p) => (
                    <a href={p.href} key={p.href}>
                      {p.display}
                      <IconArrowUpRight size={16} aria-hidden="true" />
                    </a>
                  ))}
                </dd>
              </div>
              <div>
                <dt>Correo electrónico</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </div>
            </dl>
            <ContactLink className="text-link">
              WhatsApp: {siteConfig.whatsappDisplay}
            </ContactLink>
            <LocationMap />
          </div>
          <Appointment />
        </div>
      </section>
    </main>
  );
}
