"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/icons";
import { MERCH, type MerchItem } from "@/config/merch";

/** Ancho a partir del cual la vitrina se fija y avanza con el scroll vertical. */
const PINNED_QUERY = "(min-width: 768px)";

/**
 * Vitrina de mercancía. En escritorio la sección se fija y el scroll vertical
 * recorre los paneles de lado; en teléfono es un carrusel con swipe. En los dos
 * casos cada panel recibe `--p`, su distancia firmada al centro medida en
 * paneles, y el CSS la convierte en el giro y el desplazamiento de cada pieza.
 * Las variables se escriben directo en el DOM: el estado de React solo guarda
 * el panel activo, que cambia una vez por panel y no en cada frame.
 */
export function Merch() {
  const runwayRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const railRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const runway = runwayRef.current;
    const track = trackRef.current;
    if (!runway || !track) return;

    const panels = Array.from(track.children) as HTMLElement[];
    const pinned = window.matchMedia(PINNED_QUERY);
    let frame = 0;
    let visible = false;

    const paint = (pos: number) => {
      panels.forEach((panel, i) => {
        const d = i - pos;
        panel.style.setProperty("--p", d.toFixed(3));
        panel.style.setProperty("--pa", Math.min(1, Math.abs(d)).toFixed(3));
      });
      setActive(Math.round(pos));
    };

    const update = () => {
      frame = 0;
      if (pinned.matches) {
        const span = runway.offsetHeight - window.innerHeight;
        const progress = Math.min(1, Math.max(0, -runway.getBoundingClientRect().top / span));
        const pos = progress * (panels.length - 1);
        track.style.transform = `translate3d(${-pos * track.clientWidth}px, 0, 0)`;
        runway.style.setProperty("--progress", progress.toFixed(4));
        paint(pos);
      } else {
        track.style.transform = "";
        const step = panels[1].offsetLeft - panels[0].offsetLeft;
        paint(track.scrollLeft / step);
      }
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onWindowScroll = () => {
      if (visible && pinned.matches) schedule();
    };

    // Solo se escucha el scroll mientras la vitrina está cerca de la pantalla.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) schedule();
    }, { rootMargin: "200px 0px" });
    io.observe(runway);

    window.addEventListener("scroll", onWindowScroll, { passive: true });
    window.addEventListener("resize", schedule);
    track.addEventListener("scroll", schedule, { passive: true });
    pinned.addEventListener("change", schedule);
    schedule();

    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onWindowScroll);
      window.removeEventListener("resize", schedule);
      track.removeEventListener("scroll", schedule);
      pinned.removeEventListener("change", schedule);
    };
  }, []);

  // En teléfono la barra de chips puede no caber: el chip activo se mantiene a la vista.
  useEffect(() => {
    const rail = railRef.current;
    const chip = rail?.children[active - 1] as HTMLElement | undefined;
    if (!rail || !chip || window.matchMedia(PINNED_QUERY).matches) return;
    rail.scrollTo({ left: chip.offsetLeft - (rail.clientWidth - chip.offsetWidth) / 2, behavior: "smooth" });
  }, [active]);

  /** Lleva al panel `index`: con scroll vertical en escritorio, con swipe en teléfono. */
  const goTo = (index: number) => {
    const runway = runwayRef.current;
    const track = trackRef.current;
    if (!runway || !track) return;
    const panel = track.children[index] as HTMLElement;

    if (window.matchMedia(PINNED_QUERY).matches) {
      const span = runway.offsetHeight - window.innerHeight;
      const top = runway.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: top + (index / (track.children.length - 1)) * span, behavior: "smooth" });
    } else {
      track.scrollTo({ left: panel.offsetLeft - (track.clientWidth - panel.offsetWidth) / 2, behavior: "smooth" });
    }
  };

  return (
    <section id="mercancia" ref={runwayRef} className="merch-runway" aria-label="Mercancía oficial">
      <div className="merch-stage">
        <div className="merch-progress" aria-hidden />

        <div ref={trackRef} className="merch-track">
          <div className="merch-panel merch-intro">
            <span className="eyebrow">
              <span className="dot" />
              Mercancía oficial
            </span>
            <h2
              className="text-ink-0"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 8vw, 8rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
              }}
            >
              Mercancía
              <br />
              <span style={{ opacity: 0.5 }}>edición XIV.</span>
            </h2>
            <p className="text-ink-1 text-[1.05rem] leading-[1.6] max-w-[40ch]">
              Poloches, gorras, llaveros, pines y stickers. Cantidades contadas.
            </p>
            <span className="merch-hint font-mono text-ink-2 uppercase">
              <span className="merch-hint-scroll">Sigue bajando</span>
              <span className="merch-hint-swipe">
                Desliza <Icons.Arrow />
              </span>
            </span>
          </div>

          {MERCH.map((item, i) => (
            <MerchPanel key={item.name} item={item} index={i} total={MERCH.length} />
          ))}
        </div>

        <nav ref={railRef} className="merch-rail glass" aria-label="Artículos">
          {MERCH.map((item, i) => (
            <button
              key={item.name}
              type="button"
              className="merch-chip"
              aria-pressed={active === i + 1}
              onClick={() => goTo(i + 1)}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </section>
  );
}

/** Un panel de la vitrina: la palabra gigante (o el cupo), la pieza y su texto. */
function MerchPanel({ item, index, total }: { item: MerchItem; index: number; total: number }) {
  const pair = item.photos.length === 2;
  const count = (n: number) => String(n).padStart(2, "0");

  return (
    <article className="merch-panel" aria-label={item.title}>
      {item.quota ? (
        <div className="merch-quota">
          <b>{item.quota.value}</b>
          <span className="font-mono uppercase">{item.quota.label}</span>
        </div>
      ) : (
        <div
          className="merch-ghost"
          aria-hidden
          style={{ "--letters": item.name.length } as React.CSSProperties}
        >
          {item.name}
        </div>
      )}

      <div className={`merch-item${pair ? " merch-item-pair" : ""}${item.size === "narrow" ? " merch-item-narrow" : ""}`}>
        {item.photos.map((photo) => (
          <Image
            key={photo.src}
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            sizes={pair ? "(min-width: 768px) 30vw, 40vw" : "(min-width: 768px) 40vw, 64vw"}
            style={{ "--ratio": photo.width / photo.height } as React.CSSProperties}
          />
        ))}
      </div>

      <div className="merch-caption">
        <span className="font-mono text-ink-2 uppercase" style={{ fontSize: "0.68rem", letterSpacing: "0.12em" }}>
          {count(index + 1)} de {count(total)}
        </span>
        <h3
          className="text-ink-0"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 3.6vw, 3.2rem)",
            fontWeight: 700,
            letterSpacing: "-0.03em",
            lineHeight: 0.95,
          }}
        >
          {item.title}
        </h3>
        <p className="text-ink-1 leading-[1.5]">{item.description}</p>
      </div>
    </article>
  );
}
