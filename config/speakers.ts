/**
 * Charlistas confirmados del Barcamp 2026, en el orden en que se muestran.
 *
 * Cada foto vive en `public/speakers/<slug>.webp`: es la foto original que
 * entregó la persona, con su fondo, recortada en cuadrado y sin agrandar. La
 * tarjeta la pinta en círculo, así que dos ajustes quedan fuera de la vista:
 * Jonathan Morales y Roselin Sosa entregaron su foto ya recortada en círculo
 * (sobre blanco, y la de Roselin con un aro azul), y su cuadrado se cerró un
 * poco hacia el centro para que el círculo de la tarjeta no muestre ese borde.
 * La de José Saint Hillaire llegó grande y apaisada: se recortó a cabeza y
 * hombros y se bajó a 600 px.
 *
 * Quien todavía no tiene foto va sin `photo`, y la tarjeta muestra su inicial.
 *
 * No hay cargo ni empresa: el comité no los tiene, así que la tarjeta no los
 * inventa. `talk` es el título de la charla tal como lo envió cada charlista.
 */

export interface SpeakerPhoto {
  /** Ruta dentro de /public. */
  src: string;
  /** Dimensiones intrínsecas del archivo, para que Next reserve el espacio. */
  width: number;
  height: number;
}

export interface Speaker {
  name: string;
  /** Título de la charla. */
  talk: string;
  photo?: SpeakerPhoto;
}

export const SPEAKERS: Speaker[] = [
  {
    name: "Yaury Ortega",
    talk: "Gobierno de Datos desde cero: lo que nadie te cuenta sobre implementarlo en una organización",
    photo: { src: "/speakers/yaury-ortega.webp", width: 267, height: 267 },
  },
  {
    name: "Karla Yafraciel Aquino Meran",
    talk: "From Code to Cloud: Hack Your Own Stack Before They Do",
    photo: { src: "/speakers/karla-aquino.webp", width: 276, height: 276 },
  },
  {
    name: "José Saint Hillaire",
    talk: "Malware vs. IA: La nueva era del análisis de amenazas",
    photo: { src: "/speakers/jose-saint-hillaire.webp", width: 600, height: 600 },
  },
  {
    name: "Helen Lisbeth Rodriguez Evans",
    talk: "Exfiltrados: Lo que GitHub le cuenta a los atacantes",
    photo: { src: "/speakers/helen-rodriguez.webp", width: 287, height: 287 },
  },
  {
    name: "Roselin Sosa",
    talk: "Tu código compila. ¿Y tú? Debugging the Human Stack en la era de la IA",
    photo: { src: "/speakers/roselin-sosa.webp", width: 245, height: 245 },
  },
  {
    name: "Jonathan Morales Baez",
    talk: "EL MULTIVERSO DE TI: 6 universos que todo líder tecnológico debe aprender a gobernar",
    photo: { src: "/speakers/jonathan-morales.webp", width: 263, height: 263 },
  },
  {
    name: "Juan Thomas Ángel Montilla",
    talk: "Del espagueti de tubos al BIM: Creando un CAD espacial en el navegador con WebXR, Three.js y Quarkus",
  },
  {
    name: "Rafael Batista",
    talk: "Mathematical Optimization in the Age of Large Language Models: Why Generative AI Still Needs Formal Decision Models",
    photo: { src: "/speakers/rafael-batista.webp", width: 296, height: 296 },
  },
  {
    name: "Rafael Dorville",
    talk: "Microsoft Fabric en 45 minutos: de datos crudos a IA generativa",
    photo: { src: "/speakers/rafael-dorville.webp", width: 268, height: 268 },
  },
];
