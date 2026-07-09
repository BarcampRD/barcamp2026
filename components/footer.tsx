import { Icons } from "@/components/icons";
import { currentFeatures } from "@/config/event-stages";

const SOCIAL = [
  { icon: Icons.Twitter, href: "https://x.com/barcamprd", label: "Twitter / X" },
  { icon: Icons.Instagram, href: "https://www.instagram.com/barcamprd/", label: "Instagram" },
  { icon: Icons.Linkedin, href: "https://www.linkedin.com/company/comit%C3%A9-de-estudiantes-de-ingenier%C3%ADa-en-ciencias-de-la-computaci%C3%B3n/posts/?feedView=all", label: "LinkedIn" },
  { icon: Icons.Users, href: "https://www.facebook.com/barcamprd", label: "Facebook" },
];

export function Footer() {
  const { showCallForSpeakers, showRegister, showThanks } = currentFeatures;

  const NAV = {
    Evento: [
      { label: "Acerca", href: "#acerca" },
      { label: "Agenda", href: "#agenda" },
      { label: "Charlistas", href: "#charlistas" },
      { label: "Patrocinadores", href: "#patrocinadores" },
      { label: "Ubicación", href: "#ubicacion" },
    ],
    Comunidad: [
      { label: "Código de conducta", href: "#conducta", show: true },
      { label: "Propón tu charla", href: "#agenda", show: showCallForSpeakers },
      { label: "Inscríbete", href: "#registro", show: showRegister },
    ].filter((l) => l.show),
    Contacto: [
      { label: "barcamp@pucmm.edu.do", href: "mailto:barcamp@pucmm.edu.do" },
      { label: "CICC · PUCMM STI", href: "https://www.linkedin.com/company/comit%C3%A9-de-estudiantes-de-ingenier%C3%ADa-en-ciencias-de-la-computaci%C3%B3n/posts/?feedView=all" },
    ],
  };

  return (
    <footer className="relative z-10 border-t border-glass-border">
      <div className="w-full max-w-[1400px] mx-auto px-8 py-16">

        {showThanks && (
          <div
            className="mb-16 rounded-[var(--radius-xl)] px-12 py-14 flex flex-col items-center text-center gap-6"
            style={{
              background: "linear-gradient(135deg, oklch(18% 0.08 25 / 0.6), oklch(12% 0.05 25 / 0.6))",
              border: "1px solid var(--color-glass-border)",
            }}
          >
            <span
              className="font-mono text-ink-2 uppercase"
              style={{ fontSize: "0.72rem", letterSpacing: "0.14em" }}
            >
              Barcamp 2026 · 14 de noviembre
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
              Gracias por<br />
              hacer esto <span className="text-red-0">posible</span>.
            </h2>
            <p className="text-ink-1 text-[1.05rem] leading-[1.6] max-w-[52ch]">
              Otro año, otra edición memorable. Gracias a cada charlista, asistente,
              patrocinador y voluntario que hizo posible el Barcamp 2026.
            </p>
            <div className="flex gap-3 flex-wrap justify-center mt-2">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-ink-1 hover:text-ink-0 transition-colors"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--color-glass-border)",
                  }}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Grid principal */}
        <div className="grid grid-cols-4 max-[900px]:grid-cols-2 max-[500px]:grid-cols-1 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <img
              src="/barcamp-logo-extended.svg"
              alt="Barcamp PUCMM 2026"
              style={{ width: 160, height: "auto" }}
            />

            <p className="text-ink-2 text-[0.88rem] leading-[1.6] max-w-[24ch]">
              La desconferencia tech más grande de Santiago. 14 de noviembre, 2026.
            </p>

            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-full flex items-center justify-center text-ink-2 hover:text-ink-0 transition-colors"
                  style={{
                    background: "var(--glass-bg)",
                    border: "1px solid var(--color-glass-border)",
                  }}
                >
                  <s.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(NAV).map(([group, links]) => (
            <div key={group} className="flex flex-col gap-4">
              <p
                className="font-mono text-ink-2 uppercase"
                style={{ fontSize: "0.65rem", letterSpacing: "0.14em" }}
              >
                {group}
              </p>
              <ul className="flex flex-col gap-3">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-ink-2 hover:text-ink-0 transition-colors text-[0.9rem]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center gap-4 pt-6 border-t border-glass-border max-[600px]:flex-col max-[600px]:text-center">
          <p
            className="font-mono text-ink-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
          >
            © 2026 Barcamp PUCMM · Todos los derechos reservados
          </p>
          <p
            className="font-mono text-ink-3"
            style={{ fontSize: "0.72rem", letterSpacing: "0.08em" }}
          >
            Organizado por CICC · PUCMM STI
          </p>
        </div>

      </div>
    </footer>
  );
}
