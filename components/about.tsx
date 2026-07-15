import { Reveal } from "@/components/ui/reveal";

const ROWS = [
  { k: "Fecha", v: "14 Nov 2026" },
  { k: "Hora", v: "8:00 AM — 6:00 PM" },
  { k: "Sede", v: "PUCMM · Santiago" },
  { k: "Formato", v: "Presencial" },
  { k: "Organiza", v: "CICC · PUCMM STI" },
];

const price = "1,750";
const previusPrice = "2,000";

export function About() {
  return (
    <section id="acerca" className="py-[100px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <Reveal className="mb-12">
          <span className="eyebrow">
            <span className="dot" />
            Acerca del evento
          </span>
        </Reveal>

        <div className="grid grid-cols-2 max-[900px]:grid-cols-1 gap-[60px] items-start">
          {/* Texto */}
          <Reveal className="flex flex-col">
            <h2
              className="text-ink-0 mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                lineHeight: 0.95,
              }}
            >
              Una <span className="text-red-0">desconferencia</span> hecha por
              la comunidad, para la comunidad.
            </h2>
            <p className="text-[1.05rem] leading-[1.6] text-ink-1 mb-4">
              Barcamp PUCMM es una <strong>desconferencia</strong> sin agenda
              fija ni jerarquías. La comunidad propone, vota y construye el
              programa al vivo: cualquiera puede ser ponente, cualquiera puede
              facilitar, todos aprendemos.
            </p>
            <p className="text-[1.05rem] leading-[1.6] text-ink-1">
              Llegamos a la décimo tercera edición — un día entero de charlas
              relámpago, talleres prácticos, keynotes y conversaciones
              espontáneas alrededor del código, la conexión humana y los
              proyectos que mueven la industria tech dominicana hacia adelante.
            </p>
          </Reveal>

          {/* Card de detalles */}
          <Reveal delay={120}>
            <div className="glass p-8 rounded-[var(--radius-lg)] grid gap-6">
              {/* Precio early bird */}
              <div className="price-feature">
                <div className="flex justify-between items-baseline mb-1 relative">
                  <span
                    className="font-mono text-ink-2"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
                  >
                    Boleto general
                  </span>
                  <span
                    className="font-mono text-ink-3 line-through"
                    style={{ fontSize: "0.78rem" }}
                  >
                    RD$ {previusPrice}
                  </span>
                </div>

                <div
                  className="flex items-start gap-2 relative"
                  style={{
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    letterSpacing: "-0.04em",
                    lineHeight: 0.95,
                  }}
                >
                  <span className="text-ink-2 pt-[0.6em]" style={{ fontSize: "1.4rem" }}>
                    RD$
                  </span>
                  <span
                    className="text-ink-0"
                    style={{
                      fontSize: "clamp(3.5rem, 6vw, 4.8rem)",
                      fontVariantNumeric: "tabular-nums",
                      textShadow: "0 4px 24px var(--btn-shadow)",
                    }}
                  >
                    {price}
                  </span>
                </div>

                <div className="mt-2 relative">
                  <span
                    className="font-mono text-red-0"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase" }}
                  >
                    Early bird · cupos limitados
                  </span>
                </div>
              </div>

              {/* Filas de info */}
              {ROWS.map((row, i) => (
                <div
                  key={row.k}
                  className={`flex justify-between items-baseline ${i < ROWS.length - 1
                    ? "pb-[18px] border-b border-glass-border"
                    : ""
                    }`}
                >
                  <span
                    className="font-mono text-ink-2 uppercase"
                    style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
                  >
                    {row.k}
                  </span>
                  <span
                    className="text-ink-0 text-right font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "1.1rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {row.v}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
