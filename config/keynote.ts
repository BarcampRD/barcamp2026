/**
 * El keynote del Barcamp 2026, tal como lo envió el comité el 11 de noviembre:
 * el título, el subtítulo y la tesis central de la charla. El comité lo mandó
 * en una sola línea con una raya entre título y subtítulo; aquí van separados
 * y la sección los pinta en dos líneas.
 *
 * La foto es la de su perfil de LinkedIn (500 px, cuadrada), que Elias eligió
 * el 11 de noviembre en lugar de la de JakartaOne. Si el comité entrega otra,
 * se reemplaza el archivo y sus dimensiones.
 *
 * Igual que en `config/speakers.ts`, no lleva cargo ni empresa.
 */

import type { SpeakerPhoto } from "@/config/speakers";

export interface Keynote {
  name: string;
  talk: string;
  subtitle: string;
  /** La tesis central, en palabras del comité. */
  thesis: string;
  photo: SpeakerPhoto;
}

export const KEYNOTE: Keynote = {
  name: "Carlos Camacho",
  talk: "La máquina escribe el código. ¿Y ahora qué escribes tú?",
  subtitle: "Código, Conexión y Criterio en la era de la IA",
  thesis:
    "La IA no elimina la ingeniería, elimina la transcripción. Lo que queda es exactamente lo que la carrera enseña y lo que casi nadie sabe hacer: entender el dominio, diseñar sistemas, juzgar si algo está bien, y responder cuando se cae.",
  photo: { src: "/speakers/carlos-camacho-linkedin.webp", width: 500, height: 500 },
};
