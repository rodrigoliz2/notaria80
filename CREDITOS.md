# Créditos y fuentes

- Identidad y doce fotografías reales: kit aportado por el cliente, extraído del portafolio notarial. Originals conservados en `public/assets/`.
- Brief y contenido: `docs/BRIEF.md`, portafolio `docs/portafolio-notaria80.pdf` y `docs/PROMPT_CODEX.md`. El usuario confirmó que prevalece el PROMPT respecto de autorizaciones.
- Trayectoria, reseñas e insignias: sitio anterior [Notaría 80](https://notaria80gdl.mx/) y [perfil de la titular](https://notaria80gdl.mx/nosotros.html). Insignias recuperadas de `assets/images/` declaradas en su `src/js/main.js`. Se usan en monocromo; para instituciones sin insignia utilizable se muestran sus nombres. Se omiten DBA SYSTEM y HOGARES SM porque no figuran con esos nombres en el brief.
- Calidad de referencia: [Garante Jurídico](https://www.garantejuridico.com) y [repositorio garantelegal](https://github.com/rodrigoliz2/garantelegal). Se estudiaron `src/site.config.ts`, estilos globales y contexto Impeccable; no se copió su identidad ni backend.
- Tipografías: [Bodoni Moda](https://fonts.google.com/specimen/Bodoni+Moda) e [Instrument Sans](https://fonts.google.com/specimen/Instrument+Sans), Google Fonts, licencia SIL Open Font License. Se descargan en build con `next/font` y se sirven desde el propio sitio.
- Movimiento: [motion](https://motion.dev) (MIT) para el encabezado, el índice de servicios, los testimonios y la secuencia del proceso. Transiciones de página con `ViewTransition` de React 19.3.
- Íconos: [Tabler Icons](https://tabler.io/icons), licencia MIT.
- Referencias estudiadas para el rediseño (sin copiar identidad ni material): garantejuridico.com y el repositorio garantelegal, kirkland.com, bakermckenzie.com, am-abogados.mx y floresencarnacion.com. Capturas de referencia en `docs/screenshots/referencias/`.
- SVG del logotipo: trazado del canal alfa mediante Potrace durante preparación; geometría original preservada. En el rediseño solo se le añadió aire al viewBox (`logo-n80.svg`).
- Exportación estática y loader de imágenes: [documentación de Next.js](https://nextjs.org/docs/app/guides/static-exports).
- Aviso de privacidad integral: [LFPDPPP vigente, Cámara de Diputados](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf), expedida el 20 de marzo de 2025 y con última reforma publicada el 14 de noviembre de 2025; Constitución federal; Ley del Notariado del Estado de Jalisco y LFPIORPI. Fuentes, artículos y alcance de cada cláusula en `docs/FUNDAMENTOS_PRIVACIDAD.md`. Consulta: 8 de octubre de 2026.
- Figma: [sistema y composiciones](https://www.figma.com/design/MLJAANbQijGqeoR7aFa6nc).
