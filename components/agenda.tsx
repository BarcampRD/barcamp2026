import { Reveal } from "@/components/ui/reveal";
import { AGENDA, AGENDA_ROOMS, type AgendaBlock, type TimeRange } from "@/config/agenda";

/** "14:40" pasa a { clock: "2:40", meridiem: "PM" }, el formato del resto del sitio. */
function to12h(hhmm: string) {
  const [h, m] = hhmm.split(":").map(Number);
  return { clock: `${h % 12 || 12}:${String(m).padStart(2, "0")}`, meridiem: h < 12 ? "AM" : "PM" };
}

/**
 * "11:00 – 11:40 AM", o "11:50 AM – 12:30 PM" cuando el rango cruza el mediodía.
 * Cada hora lleva un espacio duro con su AM o PM: si la columna es estrecha,
 * el rango solo puede partirse en el guion.
 */
function formatRange({ start, end }: TimeRange) {
  const a = to12h(start);
  const b = to12h(end);
  const nbsp = "\u00a0";
  return a.meridiem === b.meridiem
    ? `${a.clock} – ${b.clock}${nbsp}${b.meridiem}`
    : `${a.clock}${nbsp}${a.meridiem} – ${b.clock}${nbsp}${b.meridiem}`;
}

function BlockRow({ block }: { block: AgendaBlock }) {
  return (
    <li className={`ag-block ag-${block.kind}`}>
      <p className="ag-time">
        <time>{formatRange(block.time)}</time>
      </p>

      {block.kind === "talks" ? (
        <ul className="ag-sessions">
          {block.sessions.map((s) => (
            <li key={s.room} className="ag-session">
              {/* En escritorio la sala ya es el encabezado de la columna. */}
              <span className="ag-room min-[900px]:sr-only">
                <span className="sr-only">Sala </span>
                {s.room}
              </span>
              <p className="ag-talk">{s.talk}</p>
              <p className="ag-speaker">{s.speaker}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div className="ag-single">
          {block.kind === "keynote" && <span className="ag-tag">Keynote</span>}
          <p className="ag-title">{block.title}</p>
          {block.detail && <p className="ag-speaker">{block.detail}</p>}
        </div>
      )}
    </li>
  );
}

/**
 * El día completo. Una sola estructura para los dos anchos: en teléfono cada
 * bloque es una tarjeta con sus cuatro salas una debajo de otra, y desde 900px
 * es una rejilla con la hora a la izquierda y las salas en columnas.
 */
export function Agenda() {
  return (
    <div>
      <div className="flex justify-between items-end gap-x-6 gap-y-4 mb-6 px-1 max-[900px]:flex-col max-[900px]:items-start">
        <div>
          <p
            className="font-mono text-ink-2 uppercase mb-2"
            style={{ fontSize: "0.72rem", letterSpacing: "0.12em" }}
          >
            Sábado 14 de noviembre, PUCMM Santiago
          </p>
          <h3
            className="text-ink-0"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.3rem",
              fontWeight: 600,
              letterSpacing: "-0.01em",
            }}
          >
            20 charlas de 40 minutos, en cuatro salas a la vez
          </h3>
        </div>

        <p className="ag-note">
          <span className="ag-note-dot" aria-hidden="true" />
          Propuesta de horario: puede tener ajustes.
        </p>
      </div>

      <Reveal>
        <div className="ag-day min-[900px]:glass min-[900px]:overflow-hidden">
          <div className="ag-rooms" aria-hidden="true">
            <span />
            {AGENDA_ROOMS.map((room) => (
              <span key={room}>{room}</span>
            ))}
          </div>
          <ol className="ag-list">
            {AGENDA.map((block) => (
              <BlockRow key={block.time.start} block={block} />
            ))}
          </ol>
        </div>
      </Reveal>
    </div>
  );
}
