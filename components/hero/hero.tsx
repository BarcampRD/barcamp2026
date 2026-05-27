import Image from "next/image";
import Link from "next/link";
import { Icons } from "@/components/icons";
import { Countdown } from "./countdown";

export function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        {/* Poster tipográfico */}
        <div className="poster">
          <div className="eyebrow" style={{ marginBottom: 24 }}>
            <span className="dot" />
            <span>PUCMM · STI · República Dominicana</span>
          </div>

          <div className="line bar">BAR</div>
          <div className="line camp">CAMP</div>

          <div className="year-row">
            <div className="line year">2026</div>
            <div className="loc">
              PUCMM,<br />R.D.
            </div>
          </div>

          <div className="tagline">
            Código,<br />Conexión<br />y Comunidad
          </div>

          <div className="hero-meta">
            <div className="date-pill glass">
              <span className="icon">
                <Icons.Calendar />
              </span>
              <span className="meta">
                <span className="day">14 de Noviembre</span>
                <span className="year-sm">2026 · Sábado</span>
              </span>
            </div>
            <Link href="#registro" className="btn btn-primary">
              Inscríbete pronto
              <span className="btn-arrow">
                <Icons.Arrow />
              </span>
            </Link>
          </div>

          <Countdown />
        </div>

        {/* Emblema */}
        <div className="emblem-stack">
          <div className="emblem-card bg glass" />
          <div className="emblem-card fg">
            <div className="emblem-inner">
              <Image
                src="/barcamp-logo-white.svg"
                alt="Barcamp 2026"
                fill
                style={{ objectFit: "contain", padding: "10%" }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                top: 20,
                left: 24,
                right: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <div className="mono" style={{ color: "var(--ink-2)" }}>
                EDICIÓN · XIII
              </div>
              <div
                className="mono"
                style={{ color: "var(--red-0)", textAlign: "right" }}
              >
                Conecta ideas<br />Construye <b>impacto</b>
              </div>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 20,
                left: 24,
                right: 24,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-end",
              }}
            >
              <div>
                <div className="mono" style={{ color: "var(--ink-2)", marginBottom: 4 }}>
                  Coords
                </div>
                <div className="mono" style={{ color: "var(--ink-1)", fontSize: "0.7rem" }}>
                  19.4515°N · 70.6970°W
                </div>
              </div>
              <div className="mono" style={{ color: "var(--ink-2)", textAlign: "right" }}>
                MMXXVI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
