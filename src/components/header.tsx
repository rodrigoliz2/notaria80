"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  IconMenu2,
  IconX,
  IconArrowUpRight,
  IconPhone,
} from "@tabler/icons-react";
import { navigation, siteConfig, whatsappHref } from "@/site.config";
export function Header() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const mark = document.getElementById("header-marker");
    if (!mark) return;
    const observer = new IntersectionObserver(([entry]) =>
      ref.current?.classList.toggle("compact", !entry.isIntersecting),
    );
    observer.observe(mark);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!open) return;
    function key(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [open]);
  return (
    <>
      <div id="header-marker" aria-hidden="true" />
      <header ref={ref} className="site-header">
        <div className="header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="Notaría 80, inicio"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/assets/logo/logo-n80-verde.svg"
              width={1382}
              height={606}
              alt="Notaría 80 Guadalajara"
              unoptimized
            />
          </Link>
          <nav className="desktop-nav" aria-label="Navegación principal">
            {navigation.map(([label, id]) => (
              <Link key={id} href={`/#${id}`}>
                {label}
              </Link>
            ))}
          </nav>
          <a href={siteConfig.phones[0].href} className="header-phone">
            <IconPhone size={17} aria-hidden="true" />
            {siteConfig.phones[0].display}
          </a>
          <a
            className="button primary header-appointment"
            href={whatsappHref(siteConfig.messages.appointment)}
            target="_blank"
            rel="noopener noreferrer"
            data-contact="whatsapp"
          >
            Agendar cita
            <IconArrowUpRight size={18} aria-hidden="true" />
          </a>
          <button
            ref={toggle}
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="menu-toggle"
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <IconX aria-hidden="true" />
            ) : (
              <IconMenu2 aria-hidden="true" />
            )}
          </button>
        </div>
        <nav
          id="mobile-menu"
          className="mobile-menu"
          aria-label="Navegación móvil"
          hidden={!open}
        >
          {navigation.map(([label, id]) => (
            <Link key={id} href={`/#${id}`} onClick={() => setOpen(false)}>
              {label}
              <IconArrowUpRight aria-hidden="true" size={20} />
            </Link>
          ))}
          <a href={siteConfig.phones[0].href}>
            Llamar: {siteConfig.phones[0].display}
          </a>
        </nav>
      </header>
    </>
  );
}
