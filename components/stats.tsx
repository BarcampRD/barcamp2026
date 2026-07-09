import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const STATS = [
  { n: 780, suffix: "+", label: "Personas" },
  { n: 13, suffix: "", label: "Ediciones" },
  { n: 25, suffix: "+", label: "Desconferencias" },
  { n: 12, suffix: "+", label: "Años de comunidad" },
];

export function Stats() {
  return (
    <section className="py-10 pb-20">
      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10">
        <Reveal className="glass grid grid-cols-4 max-[800px]:grid-cols-2 gap-4 p-5 rounded-[var(--radius-xl)]">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="px-5 py-7 text-left [&:not(:first-child)]:border-l [&:not(:first-child)]:border-glass-border max-[800px]:[&:not(:first-child)]:border-l-0"
            >
              <span className="block font-display text-[clamp(2.5rem,5vw,3.8rem)] font-bold leading-none tracking-[-0.04em] text-ink-0 tabular-nums">
                <CountUp to={s.n} suffix={s.suffix} />
              </span>
              <span className="block font-mono text-[0.72rem] tracking-[0.12em] uppercase text-ink-2 mt-[10px]">
                {s.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
