import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
import { KEYNOTE } from "@/config/keynote";

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
            {/* La foto mide 300 px: en teléfono no pasa de 240 para no agrandarla. */}
            <div
              className="w-full overflow-hidden rounded-[var(--radius-lg)] max-[800px]:max-w-[240px]"
              style={{ aspectRatio: "1", border: "1px solid var(--portrait-border)" }}
            >
              <Image
                src={KEYNOTE.photo.src}
                alt={KEYNOTE.name}
                width={KEYNOTE.photo.width}
                height={KEYNOTE.photo.height}
                sizes="(max-width: 800px) 240px, 280px"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4">
              <span className="eyebrow">
                <span>{KEYNOTE.name}</span>
              </span>

              <h3
                className="text-ink-0 balance-title"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(1.9rem, 3.6vw, 2.8rem)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                }}
              >
                {KEYNOTE.talk}
              </h3>

              <p className="text-red-0 font-medium text-[1rem]">{KEYNOTE.subtitle}</p>

              <p className="text-ink-2 text-[1rem] leading-[1.55] mt-2 max-w-[60ch]">
                {KEYNOTE.thesis}
              </p>

              <div className="flex flex-wrap items-center gap-x-5 gap-y-3 mt-3">
                <a
                  href="#agenda"
                  className="btn btn-glass"
                  style={{ fontSize: "0.82rem", padding: "10px 18px" }}
                >
                  Ver la agenda
                </a>
                <span className="font-mono text-ink-2 text-[0.8rem]">
                  El único keynote del evento, 60&nbsp;min
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
