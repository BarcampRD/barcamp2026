/**
 * Tema visual del sitio: oscuro (la identidad de marca) y claro (papel).
 *
 * El tema vive en `<html data-theme>`, y de ahí lo leen tanto el CSS
 * (`styles/tokens.css`) como el mapa, que necesita el valor en JavaScript.
 */

export type Theme = "dark" | "light";

export const THEME_STORAGE_KEY = "barcamp-theme";

/**
 * Corre en el `<head>`, antes del primer pintado, para que nadie vea el tema
 * equivocado durante un fotograma. Primero manda la elección guardada; si no
 * hay ninguna, el sistema operativo; si el navegador no deja leer nada, oscuro.
 *
 * Va como string y no como módulo porque tiene que ejecutarse en línea: un
 * script con `src` llega después del primer pintado y produce el parpadeo que
 * esto existe para evitar.
 */
export const THEME_BOOTSTRAP_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  THEME_STORAGE_KEY
)});var t=s==="light"||s==="dark"?s:(window.matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme="dark"}})()`;
