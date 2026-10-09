"use client";
import { useEffect } from "react";
export function MotionEnhancements() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let observer: IntersectionObserver | undefined;
    const animations: Animation[] = [];
    function start() {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      if (media.matches) return;
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            const isPhoto = el.classList.contains("image-reveal");
            animations.push(
              el.animate(
                isPhoto
                  ? [
                      {
                        clipPath: "inset(0 0 8% 0)",
                        transform: "translateY(10px)",
                      },
                      { clipPath: "inset(0)", transform: "translateY(0)" },
                    ]
                  : [
                      { opacity: 0.65, transform: "translateY(18px)" },
                      { opacity: 1, transform: "translateY(0)" },
                    ],
                {
                  duration: isPhoto ? 700 : 600,
                  easing: "cubic-bezier(0.23,1,0.32,1)",
                },
              ),
            );
            observer?.unobserve(el);
          }
        },
        { threshold: 0.12 },
      );
      document
        .querySelectorAll("[data-reveal]")
        .forEach((el) => observer?.observe(el));
    }
    start();
    media.addEventListener("change", start);
    return () => {
      observer?.disconnect();
      animations.forEach((a) => a.cancel());
      media.removeEventListener("change", start);
    };
  }, []);
  return null;
}
