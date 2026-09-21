import { Reveal } from "@/components/ui/reveal";

export function Keynote() {
  return (
    <section id="keynote" className="section-y">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <Reveal className="section-head">
          <div className="flex flex-col gap-3">
            <span className="eyebrow">
              <span className="dot" />
              Keynote · 09:30 AM
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
              El keynote{" "}<br />del año.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div
            className="glass grid grid-cols-[280px_1fr] items-center gap-12 rounded-[var(--radius-xl)] p-12 max-[800px]:grid-cols-1 max-[800px]:gap-8 max-[800px]:p-8"
            style={{
              background: "linear-gradient(135deg, var(--keynote-from), var(--keynote-to))",
              borderColor: "var(--keynote-border)",
            }}
          >
            {/* Portrait placeholder */}
            <div
              className="rounded-[var(--radius-lg)] flex items-center justify-center text-center font-mono text-ink-2 p-5"
              style={{
                aspectRatio: "1",
                background:
                  "linear-gradient(135deg, var(--portrait-bg-from), var(--portrait-bg-to)), repeating-linear-gradient(45deg, transparent 0 12px, var(--portrait-stripe) 12px 13px)",
                border: "1px solid var(--portrait-border)",
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
                El único keynote del evento · 60 min
              </div>

              <p className="text-ink-2 text-[1rem] leading-[1.55] mt-2 max-w-[60ch]">
                Estamos preparando una sesión magistral con una figura referente en tecnología y desarrollo de software. Pronto revelaremos todos los detalles de la charla y quién nos acompañará en el escenario principal.
              </p>

              <div className="flex gap-3 mt-3">
                <a
                  href="https://barcamp.org.do/#keynote"
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
