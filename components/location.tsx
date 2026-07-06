import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/icons";
import { MapEmbed } from "@/components/ui/map-embed";

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
            {/* Mapa interactivo */}
            <div className="relative overflow-hidden" style={{ minHeight: 340, height: "100%" }}>
              <MapEmbed />
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
                  Campus Santiago
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
