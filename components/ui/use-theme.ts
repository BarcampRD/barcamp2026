"use client";

import { useEffect, useState } from "react";
import { THEME_STORAGE_KEY, type Theme } from "@/config/theme";

/** El tema activo según el DOM, que es donde lo dejó el script del `<head>`. */
function readTheme(): Theme {
  if (typeof document === "undefined") return "dark";
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

/**
 * Cambia el tema y lo recuerda. A partir de aquí el sitio deja de seguir al
 * sistema operativo: la elección explícita gana.
 */
export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch {
    // Safari en privado no deja escribir: el tema vale para esta visita.
  }
}

export function toggleTheme() {
  applyTheme(readTheme() === "light" ? "dark" : "light");
}

/**
 * Para lo que no puede resolverse con CSS. Casi nada lo necesita: los colores
 * salen de los tokens y los logos se intercambian con `.on-dark-only` y
 * `.on-light-only`. El mapa sí, porque su estilo es un objeto de JavaScript.
 */
export function useTheme(): Theme {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    const root = document.documentElement;
    const sync = () => setTheme(readTheme());

    sync();
    const observer = new MutationObserver(sync);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });

    return () => observer.disconnect();
  }, []);

  return theme;
}
