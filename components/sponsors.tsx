import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { currentFeatures } from "@/config/event-stages";
import { SPONSORS } from "@/config/sponsors";

const ORGANIZERS = [
  { label: "PUCMM", src: "/pucmm-logo.png" },
  { label: "Comité de Ingeniería en Ciencias de la Computación", src: "/cicc-logo.png" },
];

/** Altura de render responsiva: la de config a 1400px, y nunca menos del 72%. */
function logoHeight(px: number) {
  return `clamp(${Math.round(px * 0.72)}px, ${((px / 1400) * 100).toFixed(2)}vw, ${px}px)`;
}

export function Sponsors() {
  const { showSponsors } = currentFeatures;
  const hasSponsors = showSponsors && SPONSORS.length > 0;

  return (
    <section id="patrocinadores" className="section-y">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        <Reveal className="section-head">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">
              <span className="dot" />
              {hasSponsors ? "Patrocinadores" : "Organización"}
            </span>
            <h2
              className="text-ink-0 balance-title"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.8rem, 5vw, 4.5rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.92,
              }}
            >
              Quienes hacen{" "}<br />
              posible el evento.
            </h2>
          </div>
        </Reveal>

        {/* Organizadores: por encima de los patrocinadores.
            Sin patrocinadores este bloque cierra la sección: el margen sobra. */}
        <Reveal className={hasSponsors ? "mb-12" : ""}>
          <div>
            <p
              className="font-mono text-ink-2 uppercase mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
            >
              Presentado por
            </p>

            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
              {ORGANIZERS.map(({ label, src }) => (
                <div
                  key={label}
                  className="glass rounded-[var(--radius-md)] flex items-center justify-center py-8 px-8 min-h-[168px] max-[600px]:min-h-[140px]"
                >
                  <Image
                    src={src}
                    alt={label}
                    width={240}
                    height={240}
                    className="object-contain h-[112px] max-[900px]:h-[96px] max-[600px]:h-[84px] w-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {hasSponsors && (
          <Reveal>
            <div>
              <p
                className="font-mono text-ink-2 uppercase mb-5"
                style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
              >
                Con el respaldo de
              </p>

              {/* Flex en vez de grid: con cinco marcas la última fila queda
                  centrada a cualquier ancho, sin celdas vacías. */}
              <div className="flex flex-wrap gap-4 justify-center">
                {SPONSORS.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="glass rounded-[var(--radius-md)] flex items-center justify-center
                      grow basis-[148px] max-w-[260px] min-h-[124px] px-6 py-6
                      transition-[border-color,background] duration-200
                      hover:bg-[var(--glass-bg-strong)] hover:border-glass-border-strong"
                  >
                    <Image
                      src={s.logo}
                      alt={s.name}
                      width={s.width}
                      height={s.height}
                      className="object-contain w-auto max-w-full"
                      style={{ height: logoHeight(s.displayHeight) }}
                    />
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
