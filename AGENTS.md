<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Branch model

This maintained project uses `main` -> `dev` -> task branch. Start task branches
from current `dev`; merge task PRs into `dev`; promote reviewed releases through
a `dev` -> `main` PR. Production images continue to publish from `main`.
The `branch-model` workflow checks pull request direction. Preserve existing
branches and unique work.

## Facts

- figma: https://www.figma.com/design/oZiBakYBtZexw9QPRPwVM3 (exdj0002; CICC-Desing-Lab-2, page 2026-2027: Feed de Instagram 1027:4115, Cibao (paquete por definir) 1171:6496, Feed móvil 1173:7988, Descuento grupal (D3 elegida) 1175:11332, Agenda (por elegir) 1181:15102, Archivo 1171:5848, Horario publicaciones 1224:25832, Keynote (por definir) 1232:28219, TBT 13 ediciones v2 1262:32154 (edit its canvas component 1262:32155; v1 archive 1259:28729), BARCAMP 2025 Referencia 795:581, Fotos y referencias 795:578; templates to clone: Fondo patrocinios claro 986:4320, Logo Barcamp 829:1140, footer pills in the horario posts). The file was in the Drafts of the committee's Figma account (Comité De Estudiantes de Ingeniería en Ciencias de la Computación), a free plan whose MCP quota of 20 calls a month ran out on 8 Nov 2026; only the committee account can move it ("You can't move files that are in another person's Drafts", seen from exdj0002 on 9 Nov 2026). After Elias's change on 9 Nov 2026, use_figma edits it again
- figma: https://www.figma.com/design/r1hpzpxPyl0sro2nHeKI7q (exdj0002, Education team, 200 MCP calls a day; "Barcamp 2026, piezas 9 nov": story cuenta regresiva 2:2, post Community Partners 3:1030, componente Trama monumentos 2:3). Temporary: its frames get pasted into CICC-Desing-Lab-2
- figma pieces: every Barcamp piece is made in the Barcamp board of CICC-Desing-Lab-2, never in a separate file; when that file cannot be edited, stop and ask (Elias, 8 Nov 2026: "no lo hiciste en el board de barcamp correcto")
- community partners: JetBrains y Java Dominicano, los dos en el bloque Community partners y no en un paquete (Elias, 4 Nov 2026: "ambos son comunity partners")
