import { Reveal } from "@/components/ui/reveal";
import { CountUp } from "@/components/ui/count-up";

const STATS = [
  { n: 260, suffix: "+", label: "Personas" },
  { n: 13,  suffix: "",  label: "Ediciones" },
  { n: 25,  suffix: "+", label: "Desconferencias" },
  { n: 10,  suffix: "+", label: "Años de comunidad" },
];

export function Stats() {
  return (
    <section className="stats">
      <div className="container">
        <Reveal className="stats-grid glass">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <span className="num">
                <CountUp to={s.n} suffix={s.suffix} />
              </span>
              <span className="lbl">{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
