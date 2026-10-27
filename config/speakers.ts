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
 * hombros y se bajó a 600 px. La de Juan Thomas Ángel Montilla llegó por chat
 * (1080 px, de pie frente a la ciudad) y se recortó a 600 px de cabeza y hombros.
 * Emmanuel de la Rosa y Giancarlo Gerdo entregaron fotos de cuerpo entero: se
 * recortaron a cabeza y hombros sin agrandar (230 px la de Emmanuel). Las de
 * 800 px se bajaron a 600 px. Las de Giancarlo Gerdo, Jean Carlos Taveras,
 * Wilson Toribio, Cristian de la Hoz, Freddy Peña y Rafael Almonte se
 * recentraron en la cara y se pasaron a 600 px.
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
    photo: { src: "/speakers/juan-thomas-montilla.webp", width: 600, height: 600 },
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
  {
    name: "Inés Montero",
    talk: "Secure by Design: Piensa como un Hacker, Programa como un Ingeniero",
    photo: { src: "/speakers/ines-montero.webp", width: 300, height: 300 },
  },
  {
    name: "Luis Sosa",
    talk: "De la demo a producción: cómo construir IA que realmente funciona en turismo",
    photo: { src: "/speakers/luis-sosa.webp", width: 268, height: 268 },
  },
  {
    name: "Emmanuel de la Rosa",
    talk: "Principios del data storytelling: El siguiente paso al dashboard",
    photo: { src: "/speakers/emmanuel-de-la-rosa.webp", width: 230, height: 230 },
  },
  {
    name: "Giancarlo Gerdo",
    talk: "Ciberinteligencia en el CI/CD: Detectando fugas y amenazas antes del deploy",
    photo: { src: "/speakers/giancarlo-gerdo.webp", width: 600, height: 600 },
  },
  {
    name: "Jean Carlos Taveras",
    talk: "The Model Is Not the Agent: How LLMs, Agents, and Harnesses Turn Intelligence into Action",
    photo: { src: "/speakers/jean-carlos-taveras.webp", width: 600, height: 600 },
  },
  {
    name: "Wilson Toribio",
    talk: "System Design en el mundo de la IA para productos efectivos",
    photo: { src: "/speakers/wilson-toribio.webp", width: 600, height: 600 },
  },
  {
    name: "Cristian de la Hoz",
    talk: "La magia detrás de los agentes de IA: construye tu propio harness",
    photo: { src: "/speakers/cristian-de-la-hoz.webp", width: 600, height: 600 },
  },
  {
    name: "Freddy Peña",
    talk: "Destilando el dominio: Cuando el código deja de ser el protagonista",
    photo: { src: "/speakers/freddy-pena.webp", width: 600, height: 600 },
  },
  {
    name: "Rafael Almonte",
    talk: "Let AI Query Your Graph: Building Safe NLP-Driven Data Access with Java and Neo4j",
    photo: { src: "/speakers/rafael-almonte.webp", width: 600, height: 600 },
  },
];
