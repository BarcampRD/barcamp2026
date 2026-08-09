"use client";

import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";
import { currentFeatures } from "@/config/event-stages";

const PAST_EDITIONS = [
  { year: "2025", talks: 25, attendees: 260, url: "https://2025.barcamp.org.do" },
  { year: "2024", talks: 32, attendees: 280, url: "https://2024.barcamp.org.do" },
  { year: "2023", talks: 28, attendees: 240, url: "https://2023.barcamp.org.do" },
  { year: "2022", talks: 24, attendees: 200, url: "https://2022.barcamp.org.do" },
  { year: "2021", talks: 20, attendees: 180, url: "https://2021.barcamp.org.do" },
];

// Fill with confirmed speakers as they're announced
const CONFIRMED_SPEAKERS: { name: string; title: string; topic: string; avatar?: string }[] = [];

export function Speakers() {
  const { showConfirmedSpeakers, showSpeakersToAnounce } = currentFeatures;

  return (
    <section id="charlistas" className="section-y">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        <Reveal className="section-head">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">
              <span className="dot" />
              {showConfirmedSpeakers ? "Charlistas · Confirmados" : "Charlistas · Por anunciar"}
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
              Los nombres que{" "}<br />
              mueven el <span className="text-red-0">escenario</span>.
            </h2>
          </div>
        </Reveal>

        {showSpeakersToAnounce && (
          <Reveal className="mb-12">
            <div className="glass rounded-[var(--radius-xl)] p-16 flex flex-col items-center text-center gap-8 max-[700px]:p-10">
              <div className="flex">
                {[0, 1, 2, 3, 4].map((i, _, arr) => (
                  <div
                    key={i}
                    className="flex items-center justify-center rounded-full border-2 border-[var(--color-bg-0)] shrink-0"
                    style={{
                      width: 64,
                      height: 64,
                      // el último no lleva margen negativo: si no, el grupo queda descentrado
                      marginRight: i === arr.length - 1 ? 0 : -16,
                      zIndex: 5 - i,
                      background: `oklch(${18 + i * 5}% 0.1 25)`,
                      boxShadow: "0 0 0 2px var(--color-glass-border)",
                      fontFamily: "var(--font-display)",
                      fontSize: "1.4rem",
                      fontWeight: 700,
                      color: "var(--color-ink-2)",
                    }}
                  >
                    ?
                  </div>
                ))}
              </div>

              <div className="flex flex-col gap-3 max-w-[52ch]">
                <h3
                  className="text-ink-0 balance-title"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    fontWeight: 700,
                    letterSpacing: "-0.03em",
                    lineHeight: 0.95,
                  }}
                >
                  ¿Y si el próximo nombre{" "}<br />
                  aquí es el tuyo?
                </h3>
                <p className="text-ink-2 text-[1rem] leading-[1.6]">
                  La convocatoria está abierta. Todos los slots son de 45 min —
                  charla, taller o demo, tú eliges el formato. Sin filtros, sin
                  jerarquías — solo personas compartiendo lo que saben.
                </p>
              </div>
            </div>
          </Reveal>
        )}

        {showConfirmedSpeakers && CONFIRMED_SPEAKERS.length > 0 && (
          <Reveal className="mb-12">
            <div className="grid grid-cols-3 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 gap-5">
              {CONFIRMED_SPEAKERS.map((speaker, i) => (
                <Reveal key={speaker.name} delay={i * 60}>
                  <div className="glass rounded-[var(--radius-lg)] p-7 flex flex-col gap-5">
                    <div
                      className="rounded-[var(--radius-md)] flex items-center justify-center"
                      style={{
                        width: 72,
                        height: 72,
                        background: "linear-gradient(135deg, oklch(30% 0.15 25 / 0.4), oklch(20% 0.1 25 / 0.4))",
                        border: "1px solid var(--color-glass-border)",
                        fontSize: "1.6rem",
                        fontFamily: "var(--font-display)",
                        fontWeight: 700,
                        color: "var(--color-ink-1)",
                      }}
                    >
                      {speaker.avatar ? (
                        <img
                          src={speaker.avatar}
                          alt={speaker.name}
                          className="w-full h-full rounded-[var(--radius-md)] object-cover"
                        />
                      ) : (
                        speaker.name.charAt(0)
                      )}
                    </div>

                    <div className="flex flex-col gap-1">
                      <span
                        className="text-ink-0 font-semibold"
                        style={{ fontFamily: "var(--font-display)", fontSize: "1.15rem", letterSpacing: "-0.01em" }}
                      >
                        {speaker.name}
                      </span>
                      <span className="text-ink-2 text-[0.85rem]">{speaker.title}</span>
                    </div>

                    <p className="text-ink-2 text-[0.9rem] leading-[1.55] mt-auto">{speaker.topic}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        )}

        {/* Ediciones pasadas */}
        <div>
          <Reveal className="mb-8">
            <p
              className="font-mono text-ink-2 uppercase"
              style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
            >
              Ediciones pasadas
            </p>
          </Reveal>

          {/* En móvil pasa a una sola columna horizontal: con 5 tarjetas, una rejilla
              de 2 columnas deja siempre una huérfana en la última fila. */}
          <div className="grid grid-cols-5 max-[1100px]:grid-cols-3 max-[820px]:grid-cols-2 max-[640px]:grid-cols-1 gap-5 max-[640px]:gap-3">
            {PAST_EDITIONS.map((ed, i) => (
              <Reveal key={ed.year} delay={i * 80}>
                <Link
                  href={ed.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass h-full p-7 rounded-[var(--radius-lg)] flex flex-col gap-6 hover:-translate-y-1 transition-transform duration-300 max-[640px]:flex-row max-[640px]:items-center max-[640px]:justify-between max-[640px]:gap-4 max-[640px]:py-5 max-[640px]:px-6"
                >
                  <span
                    className="text-ink-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(2.4rem, 6vw, 3.2rem)",
                      fontWeight: 800,
                      letterSpacing: "-0.04em",
                      lineHeight: 1,
                      fontVariationSettings: '"wdth" 125',
                    }}
                  >
                    {ed.year}
                  </span>

                  <div className="flex flex-wrap gap-x-6 gap-y-3 mt-auto max-[640px]:mt-0 max-[640px]:justify-end max-[640px]:text-right">
                    <div className="flex flex-col gap-1">
                      <span
                        className="text-ink-0"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {ed.talks}
                      </span>
                      <span
                        className="font-mono text-ink-3 uppercase"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                      >
                        charlas
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span
                        className="text-ink-0"
                        style={{
                          fontFamily: "var(--font-display)",
                          fontSize: "1.5rem",
                          fontWeight: 700,
                          letterSpacing: "-0.03em",
                          lineHeight: 1,
                        }}
                      >
                        {ed.attendees}+
                      </span>
                      <span
                        className="font-mono text-ink-3 uppercase"
                        style={{ fontSize: "0.65rem", letterSpacing: "0.1em" }}
                      >
                        asistentes
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
