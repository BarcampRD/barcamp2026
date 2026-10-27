"use client";

import { useSyncExternalStore } from "react";

// Hora de Santo Domingo (UTC-4, sin horario de verano), igual para todo visitante.
const TARGET = new Date("2026-11-14T08:00:00-04:00").getTime();

const CELLS = [
  { key: "days",  label: "Días"  },
  { key: "hours", label: "Horas" },
  { key: "mins",  label: "Min"   },
  { key: "secs",  label: "Seg"   },
] as const;

function decompose(diff: number) {
  const d = Math.max(0, diff);
  return {
    days:  Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    mins:  Math.floor((d % 3600000) / 60000),
    secs:  Math.floor((d % 60000) / 1000),
  };
}

// Reloj por segundo para useSyncExternalStore: el valor solo cambia una vez
// por segundo, así que es estable entre renders del mismo tick.
function subscribe(onTick: () => void) {
  const t = setInterval(onTick, 1000);
  return () => clearInterval(t);
}
const nowSecond = () => Math.floor(Date.now() / 1000);
// El HTML se prerenderiza en el build; sin hora en el servidor no queda un
// conteo congelado de ese momento.
const noSecond = () => null;

export function Countdown() {
  const second = useSyncExternalStore(subscribe, nowSecond, noSecond);
  const values = second === null ? null : decompose(TARGET - second * 1000);

  // La fecha vive aquí y no en una pastilla aparte: eran el mismo dato dos
  // veces, y la pastilla costaba la altura que hacía desbordar el hero.
  return (
    <div className="mt-[clamp(18px,3.2vh,32px)]">
      <p className="font-mono text-[0.68rem] tracking-[0.14em] uppercase text-ink-2 mb-[10px]">
        Sábado 14 de noviembre, 2026
      </p>
      <div className="flex gap-[10px]">
        {CELLS.map((c) => (
          <div
            key={c.key}
            className="glass flex-1 px-3 py-[clamp(8px,1.6vh,16px)] text-center rounded-[var(--radius-md)]"
          >
            <span
              className="block font-display text-[clamp(1.35rem,min(2.4vw,3.2vh),2rem)] font-bold leading-none tracking-[-0.03em] text-ink-0 tabular-nums"
            >
              {values ? String(values[c.key]).padStart(2, "0") : "--"}
            </span>
            <span className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ink-2 mt-[6px]">
              {c.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
