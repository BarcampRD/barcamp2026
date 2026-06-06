"use client";

import { useState } from "react";
import { Reveal } from "@/components/ui/reveal";

const ITEMS = [
  {
    n: "01",
    title: "Sobre el evento",
    body: "BarcampRD es un evento de desconferencias tecnológicas cuyo contenido es auto-generado por los participantes, orientado al desarrollo de software y tecnología en general. Trabajamos para un evento inclusivo con sesiones de nivel principiante, intermedio y avanzado. Promovemos el intercambio abierto de ideas, pero esperamos que todos los participantes —incluidos conferencistas, patrocinadores y voluntarios— cumplan con este código de conducta.",
  },
  {
    n: "02",
    title: "Comportamiento inaceptable",
    body: "No toleramos el acoso de ninguna forma, independientemente del género, identidad y expresión de género, edad, orientación sexual, discapacidad, apariencia física, tamaño corporal, raza, origen étnico, religión o preferencias tecnológicas. El lenguaje y las imágenes de carácter sexual no son apropiados en ningún lugar del evento, incluidas charlas, talleres, redes sociales y otros medios en línea.",
  },
  {
    n: "03",
    title: "Comportamiento abusivo",
    body: "El comportamiento abusivo incluye, pero no se limita a: comentarios ofensivos o discriminatorios relacionados con género, orientación sexual, discapacidad, apariencia, edad, raza o religión; uso de imágenes o material sexual en presentaciones; intimidación, acecho o seguimiento deliberado; fotografiar o grabar a personas sin consentimiento; interrupciones continuas de charlas; contacto físico inapropiado; atención sexual no deseada; y alentar cualquiera de los anteriores.",
  },
  {
    n: "04",
    title: "Consecuencias",
    body: "Si un participante incurre en comportamiento abusivo, los organizadores pueden tomar cualquier acción que estimen oportuna, incluyendo advertencias o expulsión del evento sin reembolso.",
  },
  {
    n: "05",
    title: "Cómo denunciar",
    body: "Si estás sufriendo algún abuso, has sido testigo de abusos sobre otra persona, o tienes alguna otra preocupación, contacta con el personal del evento inmediatamente a través de logistica@barcamp.org.do. Esperamos que los participantes sigan estas reglas en todas las conferencias y eventos relacionados.",
  },
];

export function Conduct() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section id="conducta" className="py-[100px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">

        <Reveal className="mb-16">
          <div className="flex flex-col gap-4">
            <span className="eyebrow">
              <span className="dot" />
              Código de conducta
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
              Un espacio seguro<br />
              para <span className="text-red-0">todos</span>.
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex flex-col">
            {ITEMS.map((item) => {
              const isOpen = open === item.n;
              return (
                <div
                  key={item.n}
                  className="border-b border-glass-border"
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : item.n)}
                    className="w-full flex items-center gap-6 py-6 text-left group"
                    style={{ background: "none", border: "none", cursor: "pointer" }}
                  >
                    <span
                      className="font-mono text-red-0 shrink-0"
                      style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
                    >
                      {item.n}
                    </span>

                    <span
                      className="flex-1 text-ink-0 group-hover:text-ink-1 transition-colors"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                        fontWeight: 600,
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.title}
                    </span>

                    <span
                      className="shrink-0 text-ink-2 group-hover:text-ink-0 transition-all"
                      style={{
                        fontSize: "1.4rem",
                        lineHeight: 1,
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                        transition: "transform 300ms cubic-bezier(0.2, 0.7, 0.2, 1)",
                        display: "inline-block",
                      }}
                    >
                      +
                    </span>
                  </button>

                  <div
                    style={{
                      maxHeight: isOpen ? "200px" : "0px",
                      overflow: "hidden",
                      transition: "max-height 400ms cubic-bezier(0.2, 0.7, 0.2, 1)",
                    }}
                  >
                    <p
                      className="text-ink-2 leading-[1.65] pb-6"
                      style={{
                        fontSize: "1rem",
                        paddingLeft: "calc(0.72rem * 2 + 24px)",
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
