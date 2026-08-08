import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { currentFeatures } from "@/config/event-stages";

const ORGANIZERS = [
  { label: "PUCMM", src: "/pucmm-logo.png" },
  { label: "Comité de Ingeniería en Ciencias de la Computación", src: "/cicc-logo.png" },
];

const TIERS = [
  { name: "Platino", slots: 2 },
  { name: "Oro", slots: 4 },
  { name: "Plata", slots: 6 },
];

const TIER_GRID: Record<string, string> = {
  Platino: "grid-cols-2 max-[600px]:grid-cols-1",
  Oro:     "grid-cols-4 max-[800px]:grid-cols-2",
  Plata:   "grid-cols-6 max-[900px]:grid-cols-3 max-[500px]:grid-cols-2",
};

const TIER_HEIGHT: Record<string, number> = {
  Platino: 120,
  Oro:     80,
  Plata:   60,
};

export function Sponsors() {
  const { showSponsors } = currentFeatures;

  return (
    <section id="patrocinadores" className="section-y">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        <Reveal className="section-head">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">
              <span className="dot" />
              {showSponsors ? "Patrocinadores" : "Organización"}
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

        {/* Organizadores — por encima de los tiers de sponsors.
            Sin tiers visibles este bloque cierra la sección: el margen sobra. */}
        <Reveal className={showSponsors ? "mb-12" : ""}>
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

        {showSponsors && (
          <div className="flex flex-col gap-12">
            {TIERS.map((tier, ti) => (
              <Reveal key={tier.name} delay={ti * 80}>
                <div>
                  <p
                    className="font-mono text-ink-2 uppercase mb-5"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
                  >
                    {tier.name}
                  </p>

                  <div className={`grid gap-4 ${TIER_GRID[tier.name]}`}>
                    {Array.from({ length: tier.slots }).map((_, i) => (
                      <div
                        key={i}
                        className="glass rounded-[var(--radius-md)] flex items-center justify-center"
                        style={{
                          minHeight: TIER_HEIGHT[tier.name],
                          aspectRatio: "16/9",
                          transition: "background 200ms",
                        }}
                      >
                        <span
                          className="font-mono text-ink-3"
                          style={{ fontSize: "0.65rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                        >
                          [logo]
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
