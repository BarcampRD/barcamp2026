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

- figma: https://www.figma.com/design/oZiBakYBtZexw9QPRPwVM3 (exdj0002; CICC-Desing-Lab-2, page 2026-2027: Feed de Instagram 1027:4115, Patrocinadores nueva ronda (Alphnology, Platinum, Avathar; Progressa, Nadserv) 1148:4816, Charlistas 01 a 17 1140:5304, Cibao (paquete por definir) 1171:6496, Feed móvil 1173:7988, Feed móvil con charlistas 13 a 17 (propuesta) 1189:16595, Descuento grupal (D3 elegida) 1175:11332, Agenda (por elegir) 1181:15102, Archivo 1171:5848)
