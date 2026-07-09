"use client";

import { useState } from "react";
import { Icons } from "@/components/icons";
import { Reveal } from "@/components/ui/reveal";
import { currentFeatures } from "@/config/event-stages";

export function Register() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const { showTicketPurchase } = currentFeatures;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSent(true);
  }

  return (
    <section id="registro" className="py-[100px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <Reveal>
          <div className="glass-red rounded-[var(--radius-xl)] px-12 py-16 flex flex-col items-center text-center gap-8 max-[700px]:px-8 max-[700px]:py-12">
            <div className="flex flex-col gap-4 max-w-[52ch]">
              <span className="eyebrow justify-center">
                <span className="dot" />
                {showTicketPurchase ? "Inscripción · Cupos disponibles" : "Inscripción · Próximamente"}
              </span>

              <h2
                className="text-ink-0"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2.4rem, 5vw, 4rem)",
                  fontWeight: 700,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.92,
                }}
              >
                Reserva tu lugar<br />
                en el <span style={{ color: "var(--color-ink-0)", opacity: 0.5 }}>Barcamp 2026</span>.
              </h2>

              <p className="text-ink-1 text-[1.05rem] leading-[1.6]">
                {showTicketPurchase
                  ? "Los cupos son limitados. Asegura el tuyo antes de que se agoten."
                  : "Los cupos son limitados. Déjanos tu correo y te avisamos en el momento exacto en que abran las inscripciones."}
              </p>
            </div>

            {showTicketPurchase ? (
              <a
                href="https://tickets.barcamp.org.do"
                className="btn btn-primary"
                style={{ fontSize: "1rem", padding: "14px 28px" }}
              >
                Consigue tu entrada
                <span className="btn-arrow"><Icons.Arrow /></span>
              </a>
            ) : sent ? (
              <div className="glass px-8 py-5 rounded-[var(--radius-lg)] flex items-center gap-3">
                <span className="text-red-0 text-[1.1rem]">✓</span>
                <span className="text-ink-0 font-medium">
                  ¡Listo! Te avisamos cuando abran los cupos.
                </span>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex gap-3 w-full max-w-[480px] max-[600px]:flex-col"
              >
                <input
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-5 py-[14px] rounded-full text-ink-0 font-body"
                  style={{
                    background: "oklch(10% 0.05 25 / 0.6)",
                    border: "1px solid var(--color-glass-border-strong)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    fontSize: "0.95rem",
                    outline: "none",
                  }}
                />
                <button type="submit" className="btn btn-primary shrink-0">
                  Notifícame
                  <span className="btn-arrow"><Icons.Arrow /></span>
                </button>
              </form>
            )}

            <p
              className="font-mono text-ink-3 uppercase"
              style={{ fontSize: "0.65rem", letterSpacing: "0.12em" }}
            >
              {showTicketPurchase ? "Entrada gratuita · Cupos limitados" : "Sin spam · Solo el anuncio de cupos"}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
