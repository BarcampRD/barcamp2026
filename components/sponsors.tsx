import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { currentFeatures } from "@/config/event-stages";
import {
  SPONSORS,
  SPONSOR_TIERS,
  type SponsorLogo,
  type SponsorTier,
} from "@/config/sponsors";

const COLLABORATORS = [
  { label: "PUCMM", src: "/pucmm-logo.png" },
  { label: "Comité de Ingeniería en Ciencias de la Computación", src: "/cicc-logo.png" },
];

/** Tamaño de tarjeta por paquete: el paquete mayor ocupa más muro. */
const TIER_CARD: Record<SponsorTier, string> = {
  "geek-gold": "basis-[280px] max-w-[440px] min-h-[184px] max-[600px]:min-h-[150px]",
  "geek-silver": "basis-[220px] max-w-[340px] min-h-[152px] max-[600px]:min-h-[136px]",
  geek: "basis-[148px] max-w-[260px] min-h-[124px]",
};

/** Los paquetes en su orden, cada uno con sus marcas; un paquete vacío no se pinta. */
const SPONSOR_GROUPS = (Object.keys(SPONSOR_TIERS) as SponsorTier[])
  .map((tier) => ({ tier, sponsors: SPONSORS.filter((s) => s.tier === tier) }))
  .filter((group) => group.sponsors.length > 0);

/**
 * Título de un paquete, centrado entre dos líneas que se desvanecen hacia
 * fuera en el color del paquete, como el encabezado de los posts.
 */
function TierTitle({ tier }: { tier: SponsorTier }) {
  const { prefix, name }: { prefix?: string; name: string } = SPONSOR_TIERS[tier];
  const color = `var(--tier-${tier})`;
  const rule = (direction: "left" | "right") => (
    <span
      aria-hidden
      className="flex-1 h-px opacity-70"
      style={{ background: `linear-gradient(to ${direction}, ${color}, transparent)` }}
    />
  );

  return (
    <div className="flex items-center gap-3.5 mb-5">
      {rule("left")}
      <h3
        className="text-ink-0 whitespace-nowrap"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.75rem, 2.4vw, 2.25rem)",
          fontWeight: 700,
          letterSpacing: "-0.03em",
          lineHeight: 1,
        }}
      >
        {prefix && <>{prefix} </>}
        <span style={{ color }}>{name}</span>
      </h3>
      {rule("right")}
    </div>
  );
}

/** Altura de render responsiva: la de config a 1400px, y nunca menos del 72%. */
function logoHeight(px: number) {
  return `clamp(${Math.round(px * 0.72)}px, ${((px / 1400) * 100).toFixed(2)}vw, ${px}px)`;
}

/**
 * Un logo del muro. Cuando la marca tiene dos variantes se pintan las dos y el
 * CSS esconde la que no toca, igual que con la marca propia: elegir una en el
 * render rompería la hidratación, porque el tema lo fija un script del `<head>`.
 */
function SponsorMark({
  logo,
  alt,
  displayHeight,
  className = "",
}: {
  logo: SponsorLogo;
  alt: string;
  displayHeight: number;
  className?: string;
}) {
  return (
    <Image
      src={logo.src}
      alt={alt}
      width={logo.width}
      height={logo.height}
      className={`object-contain w-auto max-w-full ${className}`}
      style={{ height: logoHeight(displayHeight) }}
    />
  );
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

        {/* Colaboradores: por encima de los patrocinadores.
            Sin patrocinadores este bloque cierra la sección: el margen sobra. */}
        <Reveal className={hasSponsors ? "mb-12" : ""}>
          <div>
            <p
              className="font-mono text-ink-2 uppercase mb-5"
              style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
            >
              Colaboradores
            </p>

            <div className="grid grid-cols-2 max-[600px]:grid-cols-1 gap-4">
              {COLLABORATORS.map(({ label, src }) => (
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
            <div className="flex flex-col gap-10">
              {SPONSOR_GROUPS.map(({ tier, sponsors }) => {
                const { logoScale } = SPONSOR_TIERS[tier];
                return (
                  <div key={tier}>
                    <TierTitle tier={tier} />

                    {/* Flex en vez de grid: la última fila de cada paquete queda
                        centrada a cualquier ancho, sin celdas vacías. */}
                    <div className="flex flex-wrap gap-4 justify-center">
                      {sponsors.map((s) => (
                        <a
                          key={s.name}
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.name}
                          className={`glass rounded-[var(--radius-md)] flex items-center justify-center
                            grow px-6 py-6 ${TIER_CARD[tier]}
                            transition-[border-color,background] duration-200
                            hover:bg-[var(--glass-bg-strong)] hover:border-glass-border-strong`}
                        >
                          <SponsorMark
                            logo={s.logo}
                            alt={s.name}
                            displayHeight={s.displayHeight * logoScale}
                            className={s.logoOnLight ? "on-dark-only" : ""}
                          />
                          {s.logoOnLight && (
                            <SponsorMark
                              logo={s.logoOnLight}
                              alt={s.name}
                              displayHeight={s.displayHeight * logoScale}
                              className="on-light-only"
                            />
                          )}
                        </a>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>
        )}

      </div>
    </section>
  );
}
