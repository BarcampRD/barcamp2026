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
