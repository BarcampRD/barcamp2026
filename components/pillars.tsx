import { Reveal } from "@/components/ui/reveal";
import { Icons } from "@/components/icons";

const PILLARS = [
  {
    icon: Icons.Users,
    title: "Comunidad",
    description:
      "Una desconferencia construida por y para la comunidad tech dominicana. Aquí todos son ponentes y participantes.",
  },
  {
    icon: Icons.Bulb,
    title: "Ideas",
    description:
      "El formato abierto da vida a conversaciones espontáneas. Las mejores sesiones nacen el mismo día del evento.",
  },
  {
    icon: Icons.Rocket,
    title: "Innovación",
    description:
      "Tecnología, startups, diseño, ciencia de datos — sin agenda fija, sin temas limitados. Todo cabe si la comunidad lo vota.",
  },
  {
    icon: Icons.Target,
    title: "Impacto",
    description:
      "Cada edición deja conexiones reales, proyectos que arrancan y conocimiento que se queda en la isla.",
  },
];

export function Pillars() {
  return (
    <section className="py-20">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        <Reveal className="mb-12">
          <span className="eyebrow">
            <span className="dot" />
            Por qué Barcamp
          </span>
        </Reveal>

        <div className="grid grid-cols-4 max-[1024px]:grid-cols-2 max-[580px]:grid-cols-1 gap-5">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="glass h-full flex flex-col gap-6 p-7 rounded-[var(--radius-lg)] hover:-translate-y-1 transition-transform duration-300">
                <div className="w-11 h-11 rounded-[var(--radius-sm)] flex items-center justify-center bg-[oklch(55%_0.23_25/0.15)] border border-[oklch(60%_0.22_25/0.25)] text-red-0">
                  <p.icon width={22} height={22} />
                </div>

                <div className="flex flex-col gap-2 flex-1">
                  <h3 className="font-display text-xl font-semibold tracking-tight text-ink-0">
                    {p.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-2">
                    {p.description}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
