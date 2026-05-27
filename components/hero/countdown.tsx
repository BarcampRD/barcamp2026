"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET = new Date("2026-11-14T08:00:00").getTime();

const CELLS = [
  { key: "days", label: "Días" },
  { key: "hours", label: "Horas" },
  { key: "mins", label: "Min" },
  { key: "secs", label: "Seg" },
] as const;

function decompose(diff: number) {
  const d = Math.max(0, diff);
  return {
    days: Math.floor(d / 86400000),
    hours: Math.floor((d % 86400000) / 3600000),
    mins: Math.floor((d % 3600000) / 60000),
    secs: Math.floor((d % 60000) / 1000),
  };
}

export function Countdown() {
  const [values, setValues] = useState(() => decompose(TARGET - Date.now()));

  useEffect(() => {
    const t = setInterval(() => setValues(decompose(TARGET - Date.now())), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="countdown">
      {CELLS.map((c) => (
        <div key={c.key} className="cd-cell glass">
          <span className="n">{String(values[c.key]).padStart(2, "0")}</span>
          <span className="l">{c.label}</span>
        </div>
      ))}
    </div>
  );
}
