export const siteConfig = {
  name: "Notaría Pública 80 de Guadalajara",
  shortName: "Notaría 80",
  url: "https://notaria80gdl.mx",
  domain: "notaria80gdl.mx",
  titular: "Mtra. María Enriqueta Ortiz Guerrero",
  whatsappBase: "https://wa.me/523311704104",
  whatsappDisplay: "33 1170 4104",
  phones: [
    { display: "33 1983 3354", href: "tel:+523319833354" },
    { display: "33 1983 3355", href: "tel:+523319833355" },
    { display: "33 3630 6433", href: "tel:+523336306433" },
  ],
  email: "notaria80gdl@hotmail.com",
  address: "C. Pablo Villaseñor 125",
  neighborhood: "Col. Ladrón de Guevara",
  city: "Guadalajara, Jalisco",
  postalCode: "44600",
  country: "MX",
  geo: { latitude: 20.6785506, longitude: -103.3801279 },
  mapsUrl: "https://maps.app.goo.gl/twQxYo9FdYSYLmEw9",
  mapsEmbed:
    "https://maps.google.com/maps?q=C.%20Pablo%20Villase%C3%B1or%20125%2C%20Ladr%C3%B3n%20de%20Guevara%2C%2044600%20Guadalajara%2C%20Jalisco&output=embed",
  hours: "Lunes a viernes, 9:00 a 17:00 h",
  licenses: { federal: "2393029", estatal: "110366" },
  analyticsEnabled: false,
  messages: {
    appointment: "Hola, me gustaría agendar una cita en la Notaría 80.",
    general: "Hola, quisiera información sobre un trámite en la Notaría 80.",
  },
} as const;
export function whatsappHref(message: string = siteConfig.messages.general) {
  return `${siteConfig.whatsappBase}?text=${encodeURIComponent(message)}`;
}
export function serviceMessage(service: string) {
  return `Hola, quisiera información sobre ${service} en la Notaría 80.`;
}
export const navigation = [
  { label: "Servicios", href: "/servicios" },
  { label: "Proceso", href: "/proceso" },
  { label: "Instalaciones", href: "/instalaciones" },
  { label: "La Notaría", href: "/notaria" },
  { label: "Contacto", href: "/contacto" },
] as const;
export type PhotoFile =
  | "01-atrio-doble-altura"
  | "02-letrero-logotipo-muro"
  | "03-recepcion-sala-de-espera"
  | "04-recepcion-vista-superior"
  | "05-recepcion-mostrador"
  | "06-sala-de-firmas"
  | "07-biblioteca-protocolo"
  | "08-biblioteca-ventanal"
  | "09-libros-protocolo-detalle"
  | "10-area-juridica-mezzanine"
  | "11-area-juridica-estaciones"
  | "12-area-digitalizacion";
export const services = [
  {
    slug: "traslativos-de-dominio",
    title: "Traslativos de dominio",
    description: "Escrituración de inmuebles con certeza y transparencia.",
    intro:
      "Formalizamos actos que transmiten la propiedad de inmuebles. Revisamos sus antecedentes y los requisitos del caso, preparamos la escritura y gestionamos la inscripción que corresponda.",
    acts: [
      "Compraventa",
      "Donación",
      "Fideicomisos",
      "Dación en pago",
      "Adjudicaciones",
    ],
    photo: "06-sala-de-firmas" as PhotoFile,
  },
  {
    slug: "sucesiones",
    title: "Sucesiones",
    description: "Proteja a su familia y ordene su patrimonio.",
    intro:
      "Le asesoramos para otorgar testamento y tramitar sucesiones con o sin él. La vía notarial requiere la solicitud de todos los interesados, ausencia de controversia y los demás requisitos legales.",
    acts: ["Testamentos", "Sucesión testamentaria", "Sucesión intestamentaria"],
    photo: "09-libros-protocolo-detalle" as PhotoFile,
  },
  {
    slug: "corporativo",
    title: "Corporativo",
    description: "Su empresa, formalizada desde el primer día.",
    intro:
      "Acompañamos la constitución y los cambios de sociedades civiles y mercantiles. Formalizamos acuerdos y actas cuando su naturaleza, la ley o los estatutos requieren intervención notarial.",
    acts: [
      "Constitución de sociedades mercantiles y civiles",
      "Actas de asamblea",
      "Protocolizaciones",
      "Fusión",
      "Escisión",
      "Liquidación",
    ],
    photo: "10-area-juridica-mezzanine" as PhotoFile,
  },
  {
    slug: "poderes-notariales",
    title: "Poderes notariales",
    description: "Representación legal con plena validez.",
    intro:
      "Formalizamos poderes para que otra persona actúe en su nombre. Definimos las facultades y sus límites según su voluntad y la ley; también atendemos revocaciones y los avisos correspondientes.",
    acts: ["Poderes generales", "Poderes especiales", "Revocaciones"],
    photo: "05-recepcion-mostrador" as PhotoFile,
  },
  {
    slug: "certificaciones",
    title: "Certificaciones",
    description: "Documentos y firmas con valor legal.",
    intro:
      "Certificamos firmas, cotejamos copias con los documentos exhibidos y hacemos constar hechos percibidos por la notaria. Cada certificación tiene el alcance que la ley y el acto permiten.",
    acts: [
      "Certificación de firmas",
      "Certificación de copias",
      "Certificaciones de hechos",
    ],
    photo: "07-biblioteca-protocolo" as PhotoFile,
  },
  {
    slug: "asesoria-legal",
    title: "Asesoría legal",
    description: "Orientación antes de firmar.",
    intro:
      "Revisamos su caso con imparcialidad y le explicamos las opciones, sus consecuencias legales, los documentos necesarios y el presupuesto para formalizar el acto.",
    acts: ["Consultoría notarial", "Derecho civil", "Mercantil", "Corporativo"],
    photo: "03-recepcion-sala-de-espera" as PhotoFile,
  },
  {
    slug: "creditos-hipotecarios",
    title: "Créditos hipotecarios e instituciones",
    shortTitle: "Créditos hipotecarios",
    description: "Escrituración con crédito, también en alto volumen.",
    intro:
      "Formalizamos operaciones de vivienda con Infonavit, Fovissste, bancos y desarrolladores, también en alto volumen. La autorización del crédito corresponde a la institución otorgante.",
    acts: [
      "Escrituración con crédito Infonavit",
      "Escrituración con crédito Fovissste",
      "Créditos bancarios",
      "Operaciones con desarrolladores",
      "Operaciones de alto volumen",
    ],
    photo: "11-area-juridica-estaciones" as PhotoFile,
  },
] as const;
export type Service = (typeof services)[number];
export function serviceName(s: Service) {
  return "shortTitle" in s ? s.shortTitle : s.title;
}
export const processSteps = [
  { title: "Revisión", text: "Recibimos y revisamos su expediente." },
  { title: "Presupuesto", text: "Le entregamos un presupuesto claro." },
  { title: "Proyecto de escritura", text: "Preparamos el documento." },
  { title: "Firma", text: "Firma en una de nuestras salas." },
  {
    title: "Entrega",
    text: "Pagamos impuestos, inscribimos en el Registro Público y le entregamos su testimonio.",
  },
] as const;
export const fullProcess = [
  "Recepción y revisión del expediente",
  "Elaboración del presupuesto",
  "Proyecto de escritura",
  "Firma",
  "Cierre de escritura",
  "Avisos al Archivo de Instrumentos Públicos",
  "Cálculo y pago de impuestos",
  "Aviso y pago del impuesto de transmisión patrimonial",
  "Expedición de testimonio y envío al Registro Público de la Propiedad",
  "Contacto y entrega del testimonio",
];
export const photos = [
  {
    file: "03-recepcion-sala-de-espera",
    caption: "Recepción y sala de espera",
    alt: "Recepción de la Notaría 80 con piso de mármol, sillones y letrero de latón",
    width: 807,
    height: 605,
  },
  {
    file: "01-atrio-doble-altura",
    caption: "Atrio de doble altura",
    alt: "Atrio de doble altura de la notaría con luminarias de latón y piso de mármol",
    width: 1473,
    height: 2248,
  },
  {
    file: "06-sala-de-firmas",
    caption: "Salas de firmas privadas",
    alt: "Sala de firmas de la Notaría 80 con mesa y sillas para atención privada",
    width: 681,
    height: 908,
  },
  {
    file: "07-biblioteca-protocolo",
    caption: "Biblioteca del protocolo",
    alt: "Biblioteca del protocolo notarial con libreros de madera",
    width: 681,
    height: 908,
  },
  {
    file: "04-recepcion-vista-superior",
    caption: "La recepción, desde el mezzanine",
    alt: "Vista superior de la recepción y sala de espera de la Notaría 80",
    width: 1210,
    height: 908,
  },
  {
    file: "05-recepcion-mostrador",
    caption: "Mostrador de recepción",
    alt: "Mostrador de recepción junto a la escalera de la Notaría 80",
    width: 807,
    height: 605,
  },
  {
    file: "08-biblioteca-ventanal",
    caption: "Biblioteca con luz natural",
    alt: "Biblioteca de la notaría iluminada por un ventanal",
    width: 681,
    height: 908,
  },
  {
    file: "09-libros-protocolo-detalle",
    caption: "El cuidado de cada documento",
    alt: "Detalle de los libros del protocolo en libreros de nogal",
    width: 831,
    height: 1108,
  },
  {
    file: "10-area-juridica-mezzanine",
    caption: "Área jurídica y mezzanine",
    alt: "Área jurídica de la Notaría 80 junto al mezzanine",
    width: 964,
    height: 1286,
  },
  {
    file: "11-area-juridica-estaciones",
    caption: "Estaciones del área jurídica",
    alt: "Estaciones de trabajo del área jurídica de la notaría",
    width: 1070,
    height: 803,
  },
  {
    file: "12-area-digitalizacion",
    caption: "Área de digitalización",
    alt: "Equipos de impresión y digitalización documental de la notaría",
    width: 964,
    height: 1286,
  },
  {
    file: "02-letrero-logotipo-muro",
    caption: "Nuestra identidad, en latón",
    alt: "Logotipo caligráfico de la Notaría 80 en latón sobre un muro de lamas oscuras",
    width: 1069,
    height: 1062,
  },
] as const;
export const institutions = [
  { name: "INFONAVIT", logo: "0.svg" },
  { name: "FOVISSSTE", logo: "1.svg" },
  { name: "IPEJAL", logo: "2.png" },
  { name: "ISSFAM", logo: "3.png" },
  { name: "INSUS" },
  { name: "BANJERCITO" },
  { name: "BBVA" },
  { name: "Santander" },
  { name: "Scotiabank" },
  { name: "BanBajío" },
  { name: "Actinver" },
  { name: "INVEX" },
  { name: "BIM", logo: "4.png" },
  { name: "ION", logo: "9.png" },
  { name: "DAE Hipotecaria" },
  { name: "Inclusión Hipotecaria" },
  { name: "Tertius" },
  { name: "Caja Popular San Pablo" },
  { name: "Casas Javer" },
  { name: "Casas ARA" },
  { name: "Tierra y Armonía" },
  { name: "TuHabi" },
  { name: "Promotora de Hogares de México" },
  { name: "Promotora SE" },
  { name: "Óptimo Futuro", logo: "6.webp" },
  { name: "MG Comercializadora de Viviendas" },
  { name: "Casa Administración", logo: "8.png" },
  { name: "UVM" },
  { name: "UNITEC" },
  { name: "UNIVA" },
] as const;
export const testimonials = [
  {
    name: "Ana Bertha Jiménez",
    quote:
      "El personal es muy profesional y está muy capacitado. Todo el trámite fue muy fácil de entender.",
  },
  {
    name: "Adrián B.",
    quote:
      "Me sorprendió lo rápido que me atendieron. Todo se siente muy profesional.",
  },
  {
    name: "Ana Tamez",
    quote:
      "Asesoría clara y precisa. Atención rápida, eficiente y transparente.",
  },
  {
    name: "Moisés Alonso",
    quote:
      "De las notarías más comprometidas con los clientes. Servicios ágiles y eficientes.",
  },
] as const;
export function photo(file: PhotoFile) {
  return photos.find((p) => p.file === file)!;
}
export const differentiators = [
  {
    title: "Capacidad institucional",
    text: "Operaciones hipotecarias de volumen con Infonavit, Fovissste, bancos y desarrolladores.",
  },
  {
    title: "Procesos definidos",
    text: "Control interno en cada etapa para prevenir errores.",
  },
  {
    title: "Atención inclusiva",
    text: "Espacios para personas con discapacidad, adultos mayores y movilidad reducida.",
  },
  {
    title: "Seguimiento cercano",
    text: "Presencial o virtual, en cada etapa de su trámite.",
  },
  {
    title: "Experiencia de la titular",
    text: "Trayectoria institucional y gubernamental antes de la notaría.",
  },
  {
    title: "Infraestructura notarial",
    text: "Tecnología notarial y respaldo de información fuera de sitio.",
  },
  {
    title: "Su idioma",
    text: "Atención en español e inglés; intérprete para otros idiomas.",
  },
] as const;
export const trajectory = [
  {
    year: "1993",
    end: "1998",
    title: "Ayuntamiento de Guadalajara",
    text: "Supervisión de jueces calificadores y coordinación de sesiones de Cabildo.",
  },
  {
    year: "1999",
    end: "2007",
    title: "Instituto Federal de Defensoría Pública",
    text: "Asesora Jurídica Federal.",
  },
  {
    year: "2007",
    end: "2013",
    title: "Gobierno del Estado de Jalisco",
    text: "Directora General Jurídica de la Secretaría de Administración.",
  },
  {
    year: "2012",
    title: "Nombramiento",
    text: "Notaria Pública Titular número 80 de Guadalajara, el 12 de septiembre.",
  },
  {
    year: "2013",
    title: "En funciones",
    text: "Inicio de funciones como titular, el 1 de marzo.",
  },
] as const;
export const education = [
  "Licenciatura en Derecho, Universidad de Guadalajara.",
  "Maestría en Derecho Constitucional y Amparo, Universidad de Guadalajara.",
  "Especialidad en Derecho Contractual, Universidad Panamericana.",
  "Especialidad en Derecho Corporativo y Económico, Universidad Panamericana.",
  "Diplomado en Derecho Notarial, Colegio de Notarios del Estado de Jalisco.",
  "Reconocimiento «Mariano Otero» a la excelencia académica, UdeG, 1991 y 1993.",
] as const;
