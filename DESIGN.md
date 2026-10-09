# Diseño · Notaría 80
Concepto: el recinto. Mármol (marfil), muro de lamas (noche), madera y latón.

Paleta:
- bosque #12451D: marca y botón;
- salvia #415942: texto secundario sobre claro;
- noche #0F2416: superficies oscuras;
- marfil #F6F4EE: lectura;
- piedra #E4E1D8: pausa;
- latón #CAB990: filetes y numerales sobre oscuro, nunca texto sobre claro;
- tinta #141C16: texto;
- niebla #A7ADA5: texto secundario sobre oscuro.

Tipografía:
- Bodoni Moda (eje óptico) en titulares, con cursiva solo en la segunda mitad de cada titular.
- Instrument Sans en texto e interfaz.
- Escala fluida con clamp(): display 48 a 120 px, h1 42 a 96, h2 34 a 68, h3 23 a 32, texto 16 a 17.

Forma y espacio:
- Radio 0 en todo.
- Botones de 52 px con flecha en celda propia.
- Secciones de 80 a 160 px.
- Ancho máximo de 1440 px.
- Margen lateral de 20 a 64 px.

Movimiento: solo transform y opacity.
- Curvas: cubic-bezier(.23,1,.32,1) para entradas y cubic-bezier(.77,0,.175,1) para recorridos.
- Hero coreografiado en CSS.
- Revelados una sola vez al hacer scroll.
- Paralaje con animation-timeline.
- ViewTransition entre páginas.
- Movimiento reducido respetado en todo.

Guía viva en /styleguide; porqués en DECISIONES.md.
