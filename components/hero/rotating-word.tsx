"use client";

import { useState } from "react";

const WORDS = ["Comunidad", "Proyectos", "Ideas", "Impacto", "Innovación"];

// Regla gramatical: "y" → "e" antes de palabras que empiezan con "i"
function connector(word: string) {
  return word.toLowerCase().startsWith("i") ? "e" : "y";
}

export function RotatingWord() {
  const [index, setIndex] = useState(0);
  const word = WORDS[index];

  return (
    <>
      {connector(word)}{" "}
      <span className="relative inline-block" style={{ perspective: "400px" }}>
        <span
          key={index}
          onAnimationEnd={() => setIndex((i) => (i + 1) % WORDS.length)}
          style={{
            display: "inline-block",
            position: "relative",
            transformOrigin: "50% 0",
            animation: "wordCycle 2.8s ease forwards",
          }}
        >
          {word}
          <span
            style={{
              position: "absolute",
              bottom: "-3px",
              left: 0,
              height: "2px",
              width: "100%",
              background: "var(--color-red-0)",
              boxShadow: "0 0 8px var(--color-red-0)",
              transformOrigin: "left",
              transform: "scaleX(0)",
              animation: "underlineCycle 2.8s ease forwards",
            }}
          />
        </span>
      </span>
    </>
  );
}
