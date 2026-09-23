"use client";

import { Icons } from "@/components/icons";
import { toggleTheme } from "./use-theme";

/**
 * Cambia entre papel y noche. El icono es el destino, no el estado actual: en
 * oscuro se ve el sol porque eso es lo que da al pulsar.
 *
 * Los dos iconos se pintan siempre y el CSS esconde el que sobra. Leer el tema
 * en el render para elegir uno provocaría un desajuste de hidratación, porque
 * el script del `<head>` ya cambió el `<html>` antes de que React arranque.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Cambiar entre modo claro y oscuro"
      title="Cambiar entre modo claro y oscuro"
      className={`flex items-center justify-center w-11 h-11 rounded-full shrink-0 cursor-pointer text-ink-1 hover:text-ink-0 transition-colors duration-200 ${className}`}
      style={{
        background: "var(--glass-bg)",
        border: "1px solid var(--color-glass-border)",
      }}
    >
      <span className="on-dark-only inline-flex">
        <Icons.Sun />
      </span>
      <span className="on-light-only inline-flex">
        <Icons.Moon />
      </span>
    </button>
  );
}
