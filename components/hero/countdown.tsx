"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-14T08:00:00").getTime();

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

export function Countdown() {
  const [values, setValues] = useState(() => decompose(TARGET - Date.now()));

  useEffect(() => {
    const t = setInterval(() => setValues(decompose(TARGET - Date.now())), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="mt-7 flex gap-[10px]">
      {CELLS.map((c) => (
        <div key={c.key} className="glass flex-1 px-3 py-4 text-center rounded-[var(--radius-md)]">
          <span className="block font-display text-[2rem] font-bold leading-none tracking-[-0.03em] text-ink-0 tabular-nums">
            {String(values[c.key]).padStart(2, "0")}
          </span>
          <span className="block font-mono text-[0.65rem] tracking-[0.12em] uppercase text-ink-2 mt-[6px]">
            {c.label}
          </span>
        </div>
      ))}
    </div>
  );
}
