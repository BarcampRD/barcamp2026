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

- figma: https://www.figma.com/design/oZiBakYBtZexw9QPRPwVM3 (exdj0002; CICC-Desing-Lab-2, page 2026-2027: Feed de Instagram 1027:4115, Cibao (paquete por definir) 1171:6496, Feed final (the only feed version, 11 Nov 2026) 1292:63428, Descuento grupal (D3 elegida) 1175:11332, Agenda (por elegir) 1181:15102, Archivo 1171:5848, Horario publicaciones 1224:25832, Keynote 1232:28219, Patrocinadores nueva ronda 1148:4816 (Community Partners post 1291:63087), BARCAMP 2025 Referencia 795:581, Fotos y referencias 795:578). The file lives in the Drafts of the committee's Figma account (Comité De Estudiantes de Ingeniería en Ciencias de la Computación), a free plan, not in a team: its MCP quota is 20 calls a month and was used up on 8 Nov 2026, yet MCP reads and edits from exdj0002 worked again on 11 Nov 2026. Only the committee account can move it ("You can't move files that are in another person's Drafts", seen from exdj0002 on 9 Nov 2026), and it can move it only to a team that account belongs to
- feed: the Instagram feed has one plan, the Feed final section; older feed mocks were deleted on Elias's word (11 Nov 2026: "puedes borrar las anteriores"). Its top row is three pinned posts, and new posts are counted so rows stay whole
- figma: https://www.figma.com/design/r1hpzpxPyl0sro2nHeKI7q (exdj0002, Education team, 200 MCP calls a day; "Barcamp 2026, piezas 9 nov": story cuenta regresiva 2:2, post Community Partners 3:1030, componente Trama monumentos 2:3). Temporary: its frames get pasted into CICC-Desing-Lab-2 (Community Partners was rebuilt there on 11 Nov 2026)
- figma pieces: every Barcamp piece is made in the Barcamp board of CICC-Desing-Lab-2, never in a separate file; when that file cannot be edited, stop and ask (Elias, 8 Nov 2026: "no lo hiciste en el board de barcamp correcto")
- charlas: BarCamp 2026 has 21 talks counting the keynote (20 from the Call for Speakers in 5 blocks of 4, plus Carlos Camacho's keynote) and 21 speakers; posts say 21 (Elias, 11 Nov 2026: "son 21 charlas contando el keynote")
- community partners: JetBrains y Java Dominicano, los dos en el bloque Community partners y no en un paquete (Elias, 4 Nov 2026: "ambos son comunity partners")
