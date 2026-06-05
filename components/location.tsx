import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/icons";

const DETAILS = [
  { k: "Institución", v: "PUCMM" },
  { k: "Dirección",   v: "Autopista Duarte Km 1½" },
  { k: "Ciudad",      v: "Santiago de los Caballeros" },
  { k: "País",        v: "República Dominicana" },
  { k: "Coordenadas", v: "19°27′N 70°40′O" },
];

export function Location() {
  return (
    <section id="ubicacion" className="py-[100px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        <Reveal className="mb-12">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">
              <span className="dot" />
              Ubicación · PUCMM, Santiago
            </span>
            <h2
              className="text-ink-0"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
              }}
            >
              Te esperamos<br />
              en la <span className="text-red-0">PUCMM</span>.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div
            className="glass rounded-[var(--radius-xl)] overflow-hidden grid max-[900px]:grid-cols-1"
            style={{ gridTemplateColumns: "1fr 1fr" }}
          >
            {/* Mapa placeholder */}
            <div
              className="relative flex items-center justify-center"
              style={{
                minHeight: 340,
                background: "linear-gradient(135deg, oklch(14% 0.06 25), oklch(10% 0.03 25))",
              }}
            >
              {/* Grid de puntos */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(oklch(50% 0.15 25 / 0.18) 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
              />
              {/* Glow central */}
              <div
                className="absolute"
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, oklch(47% 0.26 25 / 0.2), transparent 70%)",
                  pointerEvents: "none",
                }}
              />
              <div className="relative z-10 flex flex-col items-center gap-3">
                <Icons.Pin
                  width={52}
                  height={52}
                  className="text-red-0"
                  style={{ filter: "drop-shadow(0 0 20px var(--color-red-0))" }}
                />
                <span
                  className="font-mono text-ink-2 uppercase"
                  style={{ fontSize: "0.7rem", letterSpacing: "0.12em" }}
                >
                  PUCMM · Santiago
                </span>
              </div>
            </div>

            {/* Info */}
            <div className="p-10 flex flex-col gap-8 max-[900px]:p-8">
              <div className="flex flex-col gap-2">
                <h3
                  className="text-ink-0"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.1,
                  }}
                >
                  Pontificia Universidad Católica<br />
                  Madre y Maestra
                </h3>
                <p className="text-ink-2 text-[0.95rem] leading-[1.6] mt-1">
                  Campus principal — Recinto Santiago
                </p>
              </div>

              <div className="grid gap-0">
                {DETAILS.map((row, i) => (
                  <div
                    key={row.k}
                    className={`flex justify-between items-baseline py-[14px] ${
                      i < DETAILS.length - 1 ? "border-b border-glass-border" : ""
                    }`}
                  >
                    <span
                      className="font-mono text-ink-2 uppercase"
                      style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
                    >
                      {row.k}
                    </span>
                    <span
                      className="text-ink-0 text-right font-medium"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "0.95rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://maps.google.com/?q=Pontificia+Universidad+Católica+Madre+y+Maestra+Santiago"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-glass w-fit"
              >
                <Icons.Pin width={16} height={16} />
                Abrir en Google Maps
              </a>
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
