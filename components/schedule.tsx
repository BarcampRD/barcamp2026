import { Agenda } from "@/components/agenda";
import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/icons";
import { currentFeatures } from "@/config/event-stages";
import { CFP_URL } from "@/config/links";

const CFS_STATS = [
  { n: "25+", l: "slots disponibles" },
  { n: "45", l: "min por sesión" },
  { n: "∞", l: "temas posibles" },
];

const MARQUEE_TEXT =
  "Propón tu charla · Propón tu charla · Propón tu charla · Propón tu charla · Propón tu charla · ";

export function Schedule() {
  const { showCallForSpeakers, showAgenda } = currentFeatures;

  return (
    <section id="agenda" className="section-y">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        {showCallForSpeakers && (
          <>
            {/* Cabecera CFS */}
            <Reveal className="section-head">
              <div className="flex flex-col gap-4">
                <span className="eyebrow">
                  <span className="dot" />
                  Call for speakers · Convocatoria abierta
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
                  Sé tú quien{" "}<br />
                  sube al <span className="text-red-0">escenario</span>.
                </h2>
                <p className="text-ink-1 text-[1.05rem] leading-[1.55] max-w-[55ch] mt-2">
                  Barcamp es una desconferencia: la agenda la construimos con las
                  propuestas de la comunidad. Si tienes algo que compartir — desde
                  un caso real, una idea loca, hasta un taller práctico — este
                  es el momento.
                </p>
              </div>
            </Reveal>

            {/* CFS Hero — si no hay agenda debajo, este bloque cierra la sección */}
            <Reveal className={showAgenda ? "mb-12" : ""}>
              <div
                className="glass-red relative overflow-hidden rounded-[var(--radius-xl)]"
                style={{ padding: 0 }}
              >
                <div className="cfs-marquee" aria-hidden="true">
                  <span>{MARQUEE_TEXT}</span>
                  <span>{MARQUEE_TEXT}</span>
                </div>

                <div
                  className="relative z-10 grid grid-cols-[1.4fr_1fr] items-center gap-12 px-12 py-14 max-[800px]:grid-cols-1 max-[800px]:gap-8 max-[800px]:px-7 max-[800px]:py-10"
                >
                  <div className="flex flex-col">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit"
                      style={{
                        background: "var(--cfs-pill-bg)",
                        border: "1px solid var(--cfs-pill-border)",
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--color-ink-1)",
                      }}
                    >
                      <span
                        className="shrink-0 rounded-full"
                        style={{
                          width: 6, height: 6,
                          background: "var(--color-red-0)",
                          boxShadow: "var(--dot-glow)",
                          animation: "pulse 2s ease-in-out infinite",
                        }}
                      />
                      Abierto hasta el 15 de octubre, 2026
                    </div>

                    <h3
                      className="text-ink-0 balance-title mb-5"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                        fontWeight: 800,
                        lineHeight: 0.85,
                        letterSpacing: "-0.045em",
                        fontVariationSettings: '"wdth" 125',
                        textShadow: "0 4px 32px var(--cfs-title-shadow)",
                      }}
                    >
                      Propón tu{" "}<br />charla.
                    </h3>

                    <p className="text-ink-1 text-[1.05rem] leading-[1.55] max-w-[48ch] mb-7">
                      Todas las sesiones son de 45 min: charla, taller o demo, tú
                      eliges el formato. Sin filtros corporativos, sin
                      gate-keeping — solo personas compartiendo.
                    </p>

                    <div className="flex gap-3 flex-wrap">
                      <a href={CFP_URL} className="btn btn-primary">
                        Envía tu propuesta
                        <span className="btn-arrow"><Icons.Arrow /></span>
                      </a>
                    </div>
                  </div>

                  <div className="flex flex-col gap-4">
                    {CFS_STATS.map((s) => (
                      <div
                        key={s.l}
                        className="flex items-baseline justify-between px-6 py-5 rounded-[var(--radius-md)]"
                        style={{
                          background: "var(--cfs-stat-bg)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid var(--cfs-stat-border)",
                          boxShadow: "inset 0 1px 0 var(--cfs-stat-inset)",
                        }}
                      >
                        <span
                          className="text-ink-0"
                          style={{
                            fontFamily: "var(--font-display)",
                            fontSize: "2.2rem",
                            fontWeight: 700,
                            letterSpacing: "-0.03em",
                            lineHeight: 1,
                            fontVariantNumeric: "tabular-nums",
                            fontVariationSettings: '"wdth" 125',
                          }}
                        >
                          {s.n}
                        </span>
                        <span
                          className="font-mono text-ink-2 text-right uppercase"
                          style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
                        >
                          {s.l}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </>
        )}

        {showAgenda && (
          <>
            {!showCallForSpeakers && (
              <Reveal className="section-head">
                <div className="flex flex-col gap-4">
                  <span className="eyebrow">
                    <span className="dot" />
                    Agenda · Barcamp 2026
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
                    Un día lleno de{" "}<br />
                    <span className="text-red-0">ideas</span>.
                  </h2>
                </div>
              </Reveal>
            )}

            <Agenda />
          </>
        )}

      </div>
    </section>
  );
}
