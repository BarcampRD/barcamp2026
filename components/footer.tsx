import { Icons } from "@/components/icons";

const NAV = {
  Evento: [
    { label: "Acerca",        href: "#acerca" },
    { label: "Agenda",        href: "#agenda" },
    { label: "Charlistas",    href: "#charlistas" },
    { label: "Patrocinadores",href: "#patrocinadores" },
    { label: "Ubicación",     href: "#ubicacion" },
  ],
  Comunidad: [
    { label: "Código de conducta", href: "#conducta" },
    { label: "Propón tu charla",   href: "#agenda" },
    { label: "Inscríbete",         href: "#registro" },
  ],
  Contacto: [
    { label: "barcamp@pucmm.edu.do", href: "mailto:barcamp@pucmm.edu.do" },
    { label: "CICC · PUCMM STI",     href: "#" },
  ],
};

const SOCIAL = [
  { icon: Icons.Twitter,   href: "#", label: "Twitter / X" },
  { icon: Icons.Instagram, href: "#", label: "Instagram" },
  { icon: Icons.Linkedin,  href: "#", label: "LinkedIn" },
  { icon: Icons.Github,    href: "#", label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-glass-border">
      <div className="w-full max-w-[1400px] mx-auto px-8 py-16">

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
        <div
          className="flex justify-between items-center gap-4 pt-6 border-t border-glass-border max-[600px]:flex-col max-[600px]:text-center"
        >
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
