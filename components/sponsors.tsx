import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/icons";

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
  return (
    <section id="patrocinadores" className="py-[100px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        <Reveal className="mb-16">
          <div className="flex items-end justify-between gap-8 max-[800px]:flex-col max-[800px]:items-start">
            <div className="flex flex-col gap-4">
              <span className="eyebrow">
                <span className="dot" />
                Patrocinadores
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
                Quienes hacen<br />
                posible el evento.
              </h2>
            </div>

            <a href="mailto:barcamp@pucmm.edu.do" className="btn btn-primary shrink-0">
              Quiero patrocinar
              <span className="btn-arrow"><Icons.Arrow /></span>
            </a>
          </div>
        </Reveal>

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

      </div>
    </section>
  );
}
