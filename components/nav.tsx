"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Icons } from "./icons";
import { currentFeatures } from "@/config/event-stages";

export function Nav() {
  const { showKeynote, showAgenda, showCallForSpeakers, showRegister } = currentFeatures;
  const [menuOpen, setMenuOpen] = useState(false);

  const NAV_LINKS = [
    { href: "#acerca", label: "Acerca", show: true },
    { href: "#keynote", label: "Keynote", show: showKeynote },
    { href: "#agenda", label: showCallForSpeakers && !showAgenda ? "Propón tu charla" : "Agenda", show: showAgenda || showCallForSpeakers },
    { href: "#charlistas", label: "Speakers", show: true },
    { href: "#patrocinadores", label: "Patrocinadores", show: true },
    { href: "#ubicacion", label: "Ubicación", show: true },
    { href: "#conducta", label: "Código de conducta", show: true },
  ].filter((l) => l.show);

  // Bloquea el scroll del body mientras el drawer está abierto y cierra con Escape
  useEffect(() => {
    if (!menuOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-40px)] max-w-[1200px]">
        <div
          className="glass flex items-center justify-between gap-3 py-[10px] pl-[22px] pr-3 rounded-full max-[420px]:pl-4"
          style={{
            background: "rgba(15, 10, 10, 0.55)",
            backdropFilter: "blur(32px) saturate(180%)",
            WebkitBackdropFilter: "blur(32px) saturate(180%)",
          }}
        >
          <Link href="#top" className="inline-flex items-center no-underline shrink-0">
            <Image
              src="/barcamp-logo-nav.svg"
              alt="Barcamp 2026"
              width={152}
              height={32}
              priority
              unoptimized
            />
          </Link>

          <div className="max-[900px]:hidden flex gap-1 items-center">
            {NAV_LINKS.filter((l) => l.href !== "#conducta").map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-[14px] py-2 rounded-full text-[0.88rem] text-ink-1 no-underline transition-[background,color] duration-200 hover:bg-white/[0.06] hover:text-ink-0"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {showRegister && (
              <Link
                href="#registro"
                className="btn btn-primary !py-[10px] !px-[18px] !text-[0.85rem] max-[520px]:hidden"
              >
                Inscríbete
                <span className="btn-arrow">
                  <Icons.Arrow />
                </span>
              </Link>
            )}

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menú"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="min-[901px]:hidden flex flex-col items-center justify-center gap-[5px] w-11 h-11 rounded-full shrink-0 cursor-pointer"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-glass-border)",
              }}
            >
              <span className="block w-[18px] h-[1.5px] rounded-full bg-[var(--color-ink-0)]" />
              <span className="block w-[18px] h-[1.5px] rounded-full bg-[var(--color-ink-0)]" />
            </button>
          </div>
        </div>
      </nav>

      {/* Drawer móvil */}
      <div
        id="mobile-menu"
        inert={!menuOpen}
        className="fixed inset-0 z-[200] min-[901px]:hidden"
        style={{
          pointerEvents: menuOpen ? "auto" : "none",
          opacity: menuOpen ? 1 : 0,
          transition: "opacity 260ms cubic-bezier(0.2, 0.7, 0.2, 1)",
        }}
      >
        <button
          type="button"
          tabIndex={-1}
          aria-label="Cerrar menú"
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 w-full h-full border-none cursor-default"
          style={{
            background: "oklch(8% 0.03 25 / 0.7)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        />

        <div
          className="absolute top-0 right-0 h-full w-[88%] max-w-[380px] flex flex-col overflow-y-auto overscroll-contain px-7 pt-6 pb-10"
          style={{
            background: "linear-gradient(180deg, oklch(14% 0.05 25 / 0.98), oklch(9% 0.03 25 / 0.98))",
            borderLeft: "1px solid var(--color-glass-border)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 320ms cubic-bezier(0.2, 0.7, 0.2, 1)",
          }}
        >
          <div className="flex items-center justify-between mb-10">
            <span
              className="font-mono text-ink-2 uppercase"
              style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}
            >
              Navegación
            </span>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Cerrar menú"
              className="flex items-center justify-center w-10 h-10 rounded-full text-ink-1 cursor-pointer"
              style={{
                background: "var(--glass-bg)",
                border: "1px solid var(--color-glass-border)",
                fontSize: "1.3rem",
                lineHeight: 1,
              }}
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col">
            {NAV_LINKS.map((link, i) => (
              <li key={link.href} className="border-b border-glass-border">
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-baseline gap-4 py-[18px] no-underline group"
                >
                  <span
                    className="font-mono text-red-0 shrink-0"
                    style={{ fontSize: "0.68rem", letterSpacing: "0.1em" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className="text-ink-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.5rem",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {link.label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {showRegister ? (
            <Link
              href="#registro"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-8 justify-center"
            >
              Inscríbete
              <span className="btn-arrow">
                <Icons.Arrow />
              </span>
            </Link>
          ) : showCallForSpeakers ? (
            <a
              href="https://cfp.barcamp.org.do/barcamp-rd-2026/cfp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="btn btn-primary mt-8 justify-center"
            >
              Envía tu propuesta
              <span className="btn-arrow">
                <Icons.Arrow />
              </span>
            </a>
          ) : null}

          <a
            href="mailto:cicc-csti@ce.pucmm.edu.do"
            className="font-mono text-ink-3 hover:text-ink-1 transition-colors mt-8"
            style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}
          >
            cicc-csti@ce.pucmm.edu.do
          </a>
        </div>
      </div>
    </>
  );
}
