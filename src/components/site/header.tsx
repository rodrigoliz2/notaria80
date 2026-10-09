"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { IconArrowUpRight, IconBrandWhatsapp, IconChevronDown, IconPhone } from "@tabler/icons-react";
import { navigation, services, serviceName, siteConfig, whatsappHref, photo } from "@/site.config";
import { Logo } from "./logo";

// Rutas cuyo primer bloque es oscuro: el encabezado empieza transparente y en marfil.
const DARK_HERO = ["/", "/proceso", "/notaria"];
const clean = (p: string | null) => (p && p !== "/" ? p.replace(/\/$/, "") : "/");
const num = (i: number) => String(i + 1).padStart(2, "0");

export function Header() {
  const pathname = clean(usePathname());
  const [darkHero, setDarkHero] = useState(DARK_HERO.includes(pathname));
  const [atTop, setAtTop] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [preview, setPreview] = useState(0);
  const menuButton = useRef<HTMLButtonElement>(null);
  const firstMenuLink = useRef<HTMLAnchorElement>(null);
  const ddWrap = useRef<HTMLLIElement>(null);
  const ddTimer = useRef<number | undefined>(undefined);
  const { scrollY } = useScroll();

  // La 404 no tiene ruta fija: cada página declara su primer bloque con data-hero.
  useEffect(() => {
    setDarkHero(document.getElementById("contenido")?.dataset.hero === "dark");
    setMenu(false);
    setDropdown(false);
    setHidden(false);
  }, [pathname]);

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setAtTop(y < 24);
    if (y < 160) setHidden(false);
    else if (y > prev + 6) setHidden(true);
    else if (y < prev - 6) setHidden(false);
  });

  const closeMenu = useCallback(() => {
    setMenu(false);
    menuButton.current?.focus();
  }, []);

  useEffect(() => {
    if (!menu) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstMenuLink.current?.focus({ preventScroll: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && closeMenu();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = overflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [menu, closeMenu]);

  useEffect(() => {
    if (!dropdown) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setDropdown(false);
      ddWrap.current?.querySelector<HTMLButtonElement>("button")?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [dropdown]);

  const openDd = () => {
    window.clearTimeout(ddTimer.current);
    setDropdown(true);
  };
  const closeDdSoon = () => {
    window.clearTimeout(ddTimer.current);
    ddTimer.current = window.setTimeout(() => setDropdown(false), 140);
  };

  const overlay = darkHero && atTop && !dropdown;
  const tone = menu || overlay ? "dark" : "light";
  const solid = !menu && !overlay;
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <>
      <header className="hdr" data-tone={tone} data-solid={solid} data-compact={!atTop && !menu} data-hidden={hidden && !menu && !dropdown}>
        <div className="hdr-surface" aria-hidden="true" />
        <div className="wrap flex h-full items-center gap-6">
          <Link href="/" className="hdr-brand tap" aria-label="Notaría 80 Guadalajara, inicio">
            <Logo label={null} className="hdr-logo" />
          </Link>

          <nav aria-label="Navegación principal" className="ml-auto hidden lg:block">
            <ul className="flex items-center gap-7 text-[0.9375rem]">
              {navigation.map((item) =>
                item.href === "/servicios" ? (
                  <li key={item.href} ref={ddWrap} className="flex items-center gap-1" onPointerEnter={(e) => e.pointerType === "mouse" && openDd()} onPointerLeave={(e) => e.pointerType === "mouse" && closeDdSoon()} onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setDropdown(false)}>
                    <Link href={item.href} className="uline hdr-link" aria-current={isActive(item.href) ? "page" : undefined}>
                      {item.label}
                    </Link>
                    <button type="button" className="hdr-chevron" aria-expanded={dropdown} aria-controls="menu-servicios" aria-label="Mostrar las áreas de servicio" onClick={() => setDropdown((v) => !v)}>
                      <IconChevronDown size={16} stroke={1.5} aria-hidden="true" />
                    </button>
                    <div id="menu-servicios" className="dd s-marfil" data-open={dropdown} onPointerEnter={openDd}>
                      <div className="wrap grid gap-10 py-12 lg:grid-cols-12">
                        <div className="lg:col-span-4 flex flex-col">
                          <div className="dd-photo relative aspect-[4/5] w-full max-w-[300px] overflow-hidden">
                            {services.map((s, i) => (
                              <Image key={s.slug} src={`/assets/fotos/${s.photo}.jpg`} alt="" fill sizes="300px" className="object-cover transition-opacity duration-300" style={{ opacity: preview === i ? 1 : 0 }} loading="lazy" />
                            ))}
                          </div>
                          <p className="caption">{photo(services[preview].photo).caption}</p>
                        </div>
                        <ul className="grid content-start gap-x-10 lg:col-span-8 lg:grid-cols-2">
                          {services.map((s, i) => (
                            <li key={s.slug} className="border-t border-[var(--rule)]">
                              <Link href={`/servicios/${s.slug}`} className="dd-item group" onPointerEnter={() => setPreview(i)} onFocus={() => setPreview(i)} tabIndex={dropdown ? 0 : -1}>
                                <span className="dd-num">{num(i)}</span>
                                <span>
                                  <span className="dd-name">{serviceName(s)}</span>
                                  <span className="mt-1 block text-[0.875rem] leading-snug text-[var(--muted)]">{s.description}</span>
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li className="border-t border-[var(--rule)] lg:col-span-2">
                            <Link href="/servicios" className="link mt-3" tabIndex={dropdown ? 0 : -1}>
                              <span className="link-text">Ver el índice de servicios</span>
                              <IconArrowUpRight size={18} stroke={1.5} aria-hidden="true" />
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link href={item.href} className="uline hdr-link" aria-current={isActive(item.href) ? "page" : undefined}>
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <a href={siteConfig.phones[0].href} className="hdr-phone hidden items-center gap-2 text-[0.9375rem] xl:flex" data-contact="phone">
            <IconPhone size={17} stroke={1.5} aria-hidden="true" />
            <span className="uline">{siteConfig.phones[0].display}</span>
          </a>

          <a href={whatsappHref(siteConfig.messages.appointment)} target="_blank" rel="noopener noreferrer" className="btn hdr-cta ml-auto lg:ml-0" data-contact="whatsapp" data-origin="encabezado">
            <span className="btn-label">
              <IconBrandWhatsapp size={18} stroke={1.5} aria-hidden="true" />
              Agendar cita
            </span>
            <span className="sr-only"> (abre WhatsApp)</span>
          </a>

          <button ref={menuButton} type="button" className="hdr-menu tap lg:hidden" aria-expanded={menu} aria-controls="menu-movil" onClick={() => setMenu((v) => !v)}>
            <span className="hdr-burger" data-open={menu} aria-hidden="true">
              <span />
              <span />
            </span>
            <span className="sr-only">{menu ? "Cerrar menú" : "Abrir menú"}</span>
          </button>
        </div>
      </header>

      <div id="menu-movil" className="mm s-noche lamas lg:hidden" data-open={menu} aria-hidden={!menu} inert={!menu} role="dialog" aria-modal="true" aria-label="Menú">
        <div className="wrap flex min-h-full flex-col pb-[calc(var(--bar-h)+32px)] pt-[calc(var(--header-h)+28px)]">
          <nav aria-label="Navegación móvil">
            <ul>
              {navigation.map((item, i) => (
                <li key={item.href} className="mm-item border-b border-[var(--rule)]" style={{ "--i": i } as React.CSSProperties}>
                  <Link ref={i === 0 ? firstMenuLink : undefined} href={item.href} className="flex min-h-[68px] items-baseline gap-4 py-3" aria-current={isActive(item.href) ? "page" : undefined}>
                    <span className="font-serif text-[0.9375rem] text-laton">{num(i)}</span>
                    <span className="font-serif text-[2.25rem] leading-none tracking-[-0.02em]">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ul className="mm-item mt-6 grid grid-cols-2 gap-x-6 gap-y-1 text-[0.9375rem]" style={{ "--i": navigation.length } as React.CSSProperties}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link href={`/servicios/${s.slug}`} className="flex min-h-11 items-center text-[var(--muted)]">
                  {serviceName(s)}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mm-item mt-auto grid gap-3 pt-10" style={{ "--i": navigation.length + 1 } as React.CSSProperties}>
            <p className="t-small text-[var(--muted)]">Llámenos · {siteConfig.hours}</p>
            <div className="flex flex-wrap gap-x-6 gap-y-1">
              {siteConfig.phones.map((p) => (
                <a key={p.href} href={p.href} className="flex min-h-11 items-center text-[1.125rem]" data-contact="phone">
                  {p.display}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
