# DESIGN.md — Barcamp RD 2026

Contrato de identidad del sitio. Documenta la identidad que ya vive en
`styles/tokens.css` y `app/globals.css`; no la inventa. Cualquier archivo de UI
nuevo deriva sus colores, faces y radios de aquí.

Picked: "el hero no se ve muy bien en distintas pantallas, hay cosas que se cortan" (2026-09-21). La dirección visual (póster tipográfico rojo sobre negro, superficies glass) viene de las ediciones anteriores del sitio y se conserva: este trabajo es evolución, no rediseño.

Picked (modo claro): "crees el modo claro de la web, debe sentirse igual de comodo y profesional, tampoco quiero que se sienta como un flashbang en la cara" (2026-09-21). De ahí la dirección: papel impreso, no pantalla blanca. El fondo es papel cálido teñido con el hue de la marca, el acento baja al extremo profundo de la paleta oficial y ninguna superficie llega al blanco puro.

Display face: Bricolage Grotesque, ejes `wdth` y `opsz`, servida por `next/font`
(`app/layout.tsx`), variable `--font-bricolage`. Titulares, numerales y el póster
del hero.

Body face: Geist Sans por `next/font`, variable `--font-geist-sans`. Geist Mono
para eyebrows, datos y etiquetas, variable `--font-geist-mono`.

Brand hue: `#ED2917`, el rojo del logo oficial Barcamp. Los cuatro rojos de marca
(`#ED2917 #D61211 #BA1513 #B60604`) están mapeados a oklch en `--color-red-0..3`.

Neutrals: #0a0707 bg, #110c0c bg-1, #1a1212 bg-2, #f5f1ec ink, #e5dfd8 ink-1, #a8a09a mute, #6b6460 ink-3. Derivados del hue rojo #ED2917, nunca slate ni zinc.

Neutrals en claro: #f9f2ef bg, #fffbf9 bg-1, #f0e7e5 bg-2, #291b19 ink, #423431 ink-1, #625552 mute, #716664 ink-3. Mismo hue, papel cálido en vez de blanco. Contraste sobre el fondo: 15:1, 10.7:1, 6.5:1 y 5:1.

Accent: `--color-red-0`. En oscuro es oklch 56% 0.26 27 (#ED2917); en claro baja
a oklch 47% 0.25 26, que es la familia de #BA1513 y #B60604 del propio logo y
pasa AA sobre papel (5.8:1). Acción y selección: botón primario, subrayado de la
palabra rotativa, punto del eyebrow, pin del mapa. No colorea fondos de sección
ni títulos completos. El texto encima del acento nunca es `--color-ink-0`, que
cambia de lado con el tema: es `--on-accent`.

Radius: 10 / 16 / 24 / 32 / 44 px (`--radius-sm..2xl`). Acciones y chips van a
pill completo. Las tarjetas grandes del hero usan 44.

Signature: el póster tipográfico del hero — BAR / CAMP / 2026 a sangre, con el
resplandor rojo detrás de CAMP y la palabra que rota en la bajada. Es lo único
que se recuerda del sitio y es lo único que puede gritar.

Borrowed from: la composición del póster viene de los afiches de Vercel Ship; las
superficies glass y el nav flotante, de la barra de macOS Sonoma; el muro de
patrocinadores en grid uniforme, de Next.js Conf.

Rejected default: el `create-next-app` con Geist Sans sobre `slate-950`, tres
tarjetas iguales de features y hero centrado. Ninguna de las tres aparece. En el
modo claro, el default rechazado es el mismo sitio con los colores invertidos:
blanco #fff, gris de Tailwind y el rojo brillante del modo oscuro encima, que
sobre pantalla clara ni se lee ni se aguanta.

Imagery: sin fotografía de stock. La única imagery es la marca (logos SVG
propios, logos de patrocinadores sobre fondo transparente) y el mapa vectorial de
la sede. El evento todavía no tiene fotos propias de esta edición; cuando las
haya, sustituyen al emblema del hero antes que cualquier stock.

## Reglas que este repo añade

- Dos temas, un sistema. Los tokens de `styles/tokens.css` se reescriben enteros
  bajo `:root[data-theme="light"]` y ningún componente escribe un color literal:
  si hace falta uno, falta un token. Dentro de un tema las secciones nunca se
  invierten, con la única excepción de la placa de logos.
- El tema por defecto lo pone el sistema operativo y la elección del visitante
  lo sobrescribe (`localStorage`, interruptor en el nav). Sin JavaScript el
  sitio se queda en oscuro, que es su identidad.
- Los logos de terceros (organizadores, patrocinadores) van sobre placa oscura
  en los dos temas, con fondo transparente y en su variante legible sobre
  oscuro: `union-medica`, `la-fabril` y `cecomsa` son blancos y sobre papel
  desaparecerían. Nunca sobre una placa blanca suelta.
- La marca propia sí cambia de tinta: `barcamp-logo-nav-on-light.svg` y
  `barcamp-logo-extended-on-light.svg` son los mismos archivos oficiales con el
  blanco sustituido por `#291b19`, y el emblema del hero usa
  `barcamp-logo-black.svg`. Se pintan las dos versiones y el CSS esconde la que
  sobra (`.on-dark-only` / `.on-light-only`): así el logo no parpadea al
  hidratar. Si cambia el logo oficial, hay que regenerar las variantes.
- El mapa es la única superficie que no lee los tokens: su paleta vive en
  `config/map-style.ts`, una por tema, y se mantiene a mano alineada con ellos.
- Todo enlace externo de inscripción o CFP sale de `config/links.ts`. No se
  escribe una URL de inscripción dentro de un componente.
