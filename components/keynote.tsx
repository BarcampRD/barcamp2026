import { Reveal } from "@/components/ui/reveal";

export function Keynote() {
  return (
    <section id="keynote" className="py-[80px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <Reveal className="mb-12">
          <div className="flex flex-col gap-3">
            <span className="eyebrow">
              <span className="dot" />
              Keynote · 09:30 AM
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
              Charla<br />magistral.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="glass grid items-center gap-12 rounded-[var(--radius-xl)] p-12 max-[800px]:grid-cols-1 max-[800px]:p-8"
            style={{
              gridTemplateColumns: "280px 1fr",
              background: "linear-gradient(135deg, oklch(47% 0.26 25 / 0.10), oklch(35% 0.24 24 / 0.05))",
              borderColor: "oklch(56% 0.26 27 / 0.20)",
            }}
          >
            {/* Portrait placeholder */}
            <div
              className="rounded-[var(--radius-lg)] flex items-center justify-center text-center font-mono text-ink-2 p-5"
              style={{
                aspectRatio: "1",
                background:
                  "linear-gradient(135deg, oklch(40% 0.2 25 / 0.18), oklch(25% 0.15 25 / 0.18)), repeating-linear-gradient(45deg, transparent 0 12px, oklch(50% 0.2 25 / 0.04) 12px 13px)",
                border: "1px solid oklch(60% 0.22 25 / 0.15)",
                fontSize: "0.7rem",
                lineHeight: 1.6,
              }}
            >
              [PHOTO]<br />
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-4">
              <span className="eyebrow">
                <span>Por confirmar</span>
              </span>

              <div
                className="text-ink-0"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem, 4vw, 3rem)",
                  fontWeight: 700,
                  lineHeight: 0.95,
                  letterSpacing: "-0.03em",
                }}
              >
                Anunciamos pronto.
              </div>

              <div className="text-red-0 font-medium text-[1rem]">
                Keynote inaugural · 60 min
              </div>

              <p className="text-ink-2 text-[1rem] leading-[1.55] mt-2 max-w-[60ch]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href="#"
                  className="btn btn-glass"
                  style={{ fontSize: "0.82rem", padding: "10px 18px" }}
                >
                  Ver edición pasada
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
