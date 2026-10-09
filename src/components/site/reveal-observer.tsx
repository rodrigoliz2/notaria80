"use client";

import { useEffect } from "react";

const SELECTOR = "[data-rv], [data-rv-lines], [data-rv-curtain]";

// Un solo observador para todo el sitio. Marca «in» cada elemento revelable la
// primera vez que entra en pantalla. Un MutationObserver recoge los elementos de
// cada página nueva tras una navegación. Sin estado de React por cuadro.
export function RevealObserver() {
  useEffect(() => {
    (window as unknown as { __rv?: boolean }).__rv = true;
    const show = (el: Element) => {
      if (el.hasAttribute("data-rv")) el.setAttribute("data-rv", "in");
      if (el.hasAttribute("data-rv-lines")) el.setAttribute("data-rv-lines", "in");
      if (el.hasAttribute("data-rv-curtain")) el.setAttribute("data-rv-curtain", "in");
    };
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          show(entry.target);
          io.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.01 },
    );
    const scan = (root: ParentNode) => {
      root.querySelectorAll(SELECTOR).forEach((el) => {
        const done = el.getAttribute("data-rv") === "in" || el.getAttribute("data-rv-lines") === "in" || el.getAttribute("data-rv-curtain") === "in";
        if (!done) io.observe(el);
      });
    };
    // Las fotos viven detrás de una cortina recortada y la carga diferida nativa no
    // las ve hasta que se abre. Se adelanta su descarga cuando el marco se acerca.
    const near = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.querySelectorAll<HTMLImageElement>('img[loading="lazy"]').forEach((img) => (img.loading = "eager"));
          near.unobserve(entry.target);
        }
      },
      { rootMargin: "1000px 0px" },
    );
    const scanFrames = (root: ParentNode) => root.querySelectorAll(".frame").forEach((f) => near.observe(f));
    scan(document);
    scanFrames(document);
    const mo = new MutationObserver((records) => {
      for (const r of records)
        r.addedNodes.forEach((n) => {
          if (!(n instanceof Element)) return;
          if (n.matches(SELECTOR)) io.observe(n);
          scan(n);
          scanFrames(n);
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      io.disconnect();
      near.disconnect();
      mo.disconnect();
    };
  }, []);
  return null;
}
