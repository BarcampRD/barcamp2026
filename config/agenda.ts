/**
 * Agenda del sábado 14 de noviembre de 2026, tal como la envió el comité en
 * "Propuesta de horario" (hoja Horario). Es una propuesta: puede tener ajustes.
 *
 * Cada charla se escribe con el nombre del charlista tal como está en
 * `config/speakers.ts`, y de ahí salen el nombre y el título que se muestran.
 * Un nombre que no existe, o un charlista que queda sin sesión, rompe el
 * módulo al cargar: la agenda no puede decir algo distinto del muro de
 * charlistas.
 *
 * La sala PA-28 es solo para el staff y no aparece. Las horas van en 24 h y
 * `components/agenda.tsx` las pinta en el formato del sitio.
 */

import { KEYNOTE } from "@/config/keynote";
import { SPEAKERS } from "@/config/speakers";

export const AGENDA_ROOMS = ["PA-21", "PA-22", "PA-23", "PA-25"] as const;
export type AgendaRoom = (typeof AGENDA_ROOMS)[number];

export interface TimeRange {
  /** "HH:MM" en 24 h. */
  start: string;
  end: string;
}

export interface AgendaSession {
  room: AgendaRoom;
  speaker: string;
  talk: string;
}

export type AgendaBlock =
  | { kind: "talks"; time: TimeRange; sessions: AgendaSession[] }
  | {
      kind: "registration" | "welcome" | "keynote" | "break" | "lunch" | "social";
      time: TimeRange;
      title: string;
      /** Línea bajo el título: quién o qué. Si falta, la fila solo lleva el título. */
      detail?: string;
    };

const speakerByName = new Map(SPEAKERS.map((s) => [s.name, s]));
const scheduled = new Set<string>();

/** Bloque de charlas: un charlista por sala, en el orden de `AGENDA_ROOMS`. */
function talks(start: string, end: string, bySpeaker: Record<AgendaRoom, string>): AgendaBlock {
  const sessions = AGENDA_ROOMS.map((room) => {
    const name = bySpeaker[room];
    const speaker = speakerByName.get(name);
    if (!speaker) throw new Error(`Agenda: "${name}" no está en config/speakers.ts`);
    if (scheduled.has(name)) throw new Error(`Agenda: "${name}" aparece dos veces`);
    scheduled.add(name);
    return { room, speaker: speaker.name, talk: speaker.talk };
  });
  return { kind: "talks", time: { start, end }, sessions };
}

export const AGENDA: readonly AgendaBlock[] = [
  { kind: "registration", time: { start: "08:00", end: "09:00" }, title: "Registro" },
  { kind: "welcome", time: { start: "09:00", end: "09:30" }, title: "Bienvenida" },
  {
    kind: "keynote",
    time: { start: "09:30", end: "10:30" },
    title: KEYNOTE.talk,
    detail: KEYNOTE.name,
  },
  { kind: "break", time: { start: "10:30", end: "11:00" }, title: "Break" },
  talks("11:00", "11:40", {
    "PA-21": "Karla Yafraciel Aquino Meran",
    "PA-22": "Yaury Ortega",
    "PA-23": "Luis Sosa",
    "PA-25": "José Saint Hillaire",
  }),
  { kind: "break", time: { start: "11:40", end: "11:50" }, title: "Break" },
  talks("11:50", "12:30", {
    "PA-21": "Rafael Batista",
    "PA-22": "Rafael Dorville",
    "PA-23": "Wilson Toribio",
    "PA-25": "Cristian de la Hoz",
  }),
  { kind: "lunch", time: { start: "12:30", end: "14:00" }, title: "Almuerzo" },
  talks("14:00", "14:40", {
    "PA-21": "Fulvio Moya",
    "PA-22": "Roselin Sosa",
    "PA-23": "Pedro de la Cruz",
    "PA-25": "Rafael Almonte",
  }),
  { kind: "break", time: { start: "14:40", end: "15:00" }, title: "Break" },
  talks("15:00", "15:40", {
    "PA-21": "Freddy Peña",
    "PA-22": "Jonathan Morales Baez",
    "PA-23": "Jean Carlos Taveras",
    "PA-25": "Inés Montero",
  }),
  { kind: "break", time: { start: "15:40", end: "16:00" }, title: "Break" },
  talks("16:00", "16:40", {
    "PA-21": "Helen Lisbeth Rodriguez Evans",
    "PA-22": "Juan Thomas Ángel Montilla",
    "PA-23": "Giancarlo Gerdo",
    "PA-25": "Shailyn Ortiz",
  }),
  { kind: "break", time: { start: "16:40", end: "17:00" }, title: "Break" },
  {
    kind: "social",
    time: { start: "17:00", end: "18:00" },
    title: "Merienda y música en vivo",
    detail: "El Patio Band",
  },
];

const unscheduled = SPEAKERS.filter((s) => !scheduled.has(s.name));
if (unscheduled.length > 0) {
  throw new Error(`Agenda: sin sesión: ${unscheduled.map((s) => s.name).join(", ")}`);
}
