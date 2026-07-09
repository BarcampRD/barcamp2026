import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/icons";
import { currentFeatures } from "@/config/event-stages";

const ROOMS = ["Sala A", "Sala B", "Sala C", "Sala D"];

interface SpanCell {
  kind: "keynote" | "break";
  tag?: string;
  t: string;
  who: string;
  span: 4;
}
interface OpenCell { open: true }
type Cell = SpanCell | OpenCell;

const SLOTS: { time: string; cells: Cell[] }[] = [
  { time: "08:00 AM", cells: [{ kind: "break", t: "Registro y bienvenida", who: "Lobby principal", span: 4 }] },
  { time: "09:00 AM", cells: [{ kind: "keynote", tag: "Apertura", t: "Acto de apertura · Barcamp 2026", who: "Organización", span: 4 }] },
  { time: "09:30 AM", cells: [{ kind: "keynote", tag: "Keynote", t: "Charla magistral inaugural", who: "Por anunciar", span: 4 }] },
  { time: "10:30 AM", cells: [{ open: true }, { open: true }, { open: true }, { open: true }] },
  { time: "11:30 AM", cells: [{ open: true }, { open: true }, { open: true }, { open: true }] },
  { time: "12:30 PM", cells: [{ kind: "break", t: "Almuerzo · Networking", who: "Patio central", span: 4 }] },
  { time: "2:00 PM", cells: [{ open: true }, { open: true }, { open: true }, { open: true }] },
  { time: "3:00 PM", cells: [{ open: true }, { open: true }, { open: true }, { open: true }] },
  { time: "4:00 PM", cells: [{ kind: "break", t: "Coffee break", who: "Lobby", span: 4 }] },
  { time: "4:30 PM", cells: [{ kind: "keynote", tag: "Cierre", t: "Charla de cierre", who: "Equipo Barcamp", span: 4 }] },
  { time: "5:30 PM", cells: [{ kind: "break", t: "After & networking", who: "Patio central", span: 4 }] },
];

const CFS_STATS = [
  { n: "25+", l: "slots disponibles" },
  { n: "5", l: "salas paralelas" },
  { n: "∞", l: "temas posibles" },
];

const MARQUEE_TEXT =
  "Propón tu charla · Propón tu charla · Propón tu charla · Propón tu charla · Propón tu charla · ";

export function Schedule() {
  const { showCallForSpeakers, showAgenda } = currentFeatures;

  return (
    <section id="agenda" className="py-[100px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        {showCallForSpeakers && (
          <>
            {/* Cabecera CFS */}
            <Reveal className="mb-16">
              <div className="flex flex-col gap-4">
                <span className="eyebrow">
                  <span className="dot" />
                  Call for speakers · Convocatoria abierta
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
                  Sé tú quien<br />
                  sube al <span className="text-red-0">escenario</span>.
                </h2>
                <p className="text-ink-1 text-[1.05rem] leading-[1.55] max-w-[55ch] mt-2">
                  Barcamp es una desconferencia: la agenda la construimos con las
                  propuestas de la comunidad. Si tienes algo que compartir — desde
                  un caso real, una idea loca, hasta un taller de 30 minutos — este
                  es el momento.
                </p>
              </div>
            </Reveal>

            {/* CFS Hero */}
            <Reveal className="mb-16">
              <div
                className="glass-red relative overflow-hidden rounded-[var(--radius-xl)]"
                style={{ padding: 0 }}
              >
                <div className="cfs-marquee" aria-hidden="true">
                  <span>{MARQUEE_TEXT}</span>
                  <span>{MARQUEE_TEXT}</span>
                </div>

                <div
                  className="relative z-10 grid items-center gap-12 px-12 py-14 max-[800px]:grid-cols-1 max-[800px]:px-7 max-[800px]:py-10"
                  style={{ gridTemplateColumns: "1.4fr 1fr" }}
                >
                  <div className="flex flex-col">
                    <div
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 w-fit"
                      style={{
                        background: "oklch(20% 0.1 25 / 0.5)",
                        border: "1px solid oklch(60% 0.22 25 / 0.3)",
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
                          boxShadow: "0 0 12px var(--color-red-0)",
                          animation: "pulse 2s ease-in-out infinite",
                        }}
                      />
                      Abierto hasta el 15 de octubre, 2026
                    </div>

                    <h3
                      className="text-ink-0 mb-5"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(3rem, 6.5vw, 5.5rem)",
                        fontWeight: 800,
                        lineHeight: 0.85,
                        letterSpacing: "-0.045em",
                        fontVariationSettings: '"wdth" 125',
                        textShadow: "0 4px 32px oklch(55% 0.23 25 / 0.4)",
                      }}
                    >
                      Propón tu<br />charla.
                    </h3>

                    <p className="text-ink-1 text-[1.05rem] leading-[1.55] max-w-[48ch] mb-7">
                      Charlas de 30 min, lightning talks de 8 min o talleres de 60
                      min. Sin filtros corporativos, sin gate-keeping — solo
                      personas compartiendo.
                    </p>

                    <div className="flex gap-3 flex-wrap">
                      <a href="https://cfp.barcamp.org.do/barcamp-rd-2026/cfp" className="btn btn-primary">
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
                          background: "oklch(20% 0.08 25 / 0.4)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          border: "1px solid oklch(60% 0.22 25 / 0.25)",
                          boxShadow: "inset 0 1px 0 oklch(70% 0.22 25 / 0.25)",
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
              <Reveal className="mb-16">
                <div className="flex flex-col gap-4">
                  <span className="eyebrow">
                    <span className="dot" />
                    Agenda · Barcamp 2026
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
                    Un día lleno de<br />
                    <span className="text-red-0">ideas</span>.
                  </h2>
                </div>
              </Reveal>
            )}

            <div>
              <div className="flex justify-between items-end gap-6 mb-5 px-1 max-[700px]:flex-col max-[700px]:items-start">
                <div>
                  <p
                    className="font-mono text-ink-2 uppercase mb-2"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
                  >
                    Estructura del día
                  </p>
                  <h4
                    className="text-ink-0"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.3rem",
                      fontWeight: 600,
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Así se ve un sábado de Barcamp
                  </h4>
                </div>
              </div>

              <Reveal>
                <div
                  className="glass grid"
                  style={{
                    gridTemplateColumns: "100px 1fr",
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                >
                  <div className="border-r border-glass-border" />
                  <div className="sch-cells" style={{ borderBottom: "none", gridTemplateColumns: "repeat(4, 1fr)" }}>
                    {ROOMS.map((r) => (
                      <div
                        key={r}
                        className="px-4 py-4 font-mono text-ink-2 uppercase"
                        style={{ fontSize: "0.7rem", letterSpacing: "0.08em" }}
                      >
                        {r}
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="glass overflow-hidden"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "100px 1fr",
                    borderTop: "none",
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                  }}
                >
                  {SLOTS.map((slot) => {
                    const first = slot.cells[0];
                    const isSpan = "span" in first;
                    return (
                      <div key={slot.time} style={{ display: "contents" }}>
                        <div className="sch-time">{slot.time}</div>
                        {isSpan ? (
                          <div className="sch-cells" style={{ gridTemplateColumns: "1fr" }}>
                            <div className={`sch-cell sch-${(first as SpanCell).kind}`}>
                              {(first as SpanCell).tag && (
                                <span className="sch-tag">{(first as SpanCell).tag}</span>
                              )}
                              <span className="sch-title">{(first as SpanCell).t}</span>
                              <span className="sch-who">{(first as SpanCell).who}</span>
                            </div>
                          </div>
                        ) : (
                          <div className="sch-cells" style={{ gridTemplateColumns: "repeat(4, 1fr)" }}>
                            {slot.cells.map((_, j) => (
                              <div key={j} className="sch-cell sch-open">
                                <span className="sch-tag">Slot abierto</span>
                                <span className="sch-title">Coming soon</span>
                                <a
                                  href="https://cfp.barcamp.org.do/barcamp-rd-2026/cfp"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="sch-open-cta"
                                >
                                  Postúlate <Icons.Arrow />
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </Reveal>
            </div>
          </>
        )}

      </div>
    </section>
  );
}
