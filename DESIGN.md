# DESIGN.md — Barcamp RD 2026

Contrato de identidad del sitio. Documenta la identidad que ya vive en
`styles/tokens.css` y `app/globals.css`; no la inventa. Cualquier archivo de UI
nuevo deriva sus colores, faces y radios de aquí.

Picked: "el hero no se ve muy bien en distintas pantallas, hay cosas que se cortan" (2026-09-21). La dirección visual (póster tipográfico rojo sobre negro, superficies glass) viene de las ediciones anteriores del sitio y se conserva: este trabajo es evolución, no rediseño.

Display face: Bricolage Grotesque, ejes `wdth` y `opsz`, servida por `next/font`
(`app/layout.tsx`), variable `--font-bricolage`. Titulares, numerales y el póster
del hero.

Body face: Geist Sans por `next/font`, variable `--font-geist-sans`. Geist Mono
para eyebrows, datos y etiquetas, variable `--font-geist-mono`.

Brand hue: `#ED2917`, el rojo del logo oficial Barcamp. Los cuatro rojos de marca
(`#ED2917 #D61211 #BA1513 #B60604`) están mapeados a oklch en `--color-red-0..3`.

Neutrals: #0a0707 bg, #110c0c bg-1, #1a1212 bg-2, #f5f1ec ink, #e5dfd8 ink-1, #a8a09a mute, #6b6460 ink-3. Derivados del hue rojo #ED2917, nunca slate ni zinc.

Accent: `--color-red-0` (oklch 56% 0.26 27). Acción y selección: botón primario,
subrayado de la palabra rotativa, punto del eyebrow, pin del mapa. No colorea
fondos de sección ni títulos completos.

Radius: 10 / 16 / 24 / 32 / 44 px (`--radius-sm..2xl`). Acciones y chips van a
pill completo. Las tarjetas grandes del hero usan 44.

Signature: el póster tipográfico del hero — BAR / CAMP / 2026 a sangre, con el
resplandor rojo detrás de CAMP y la palabra que rota en la bajada. Es lo único
que se recuerda del sitio y es lo único que puede gritar.

Borrowed from: la composición del póster viene de los afiches de Vercel Ship; las
superficies glass y el nav flotante, de la barra de macOS Sonoma; el muro de
patrocinadores en grid uniforme, de Next.js Conf.

Rejected default: el `create-next-app` con Geist Sans sobre `slate-950`, tres
tarjetas iguales de features y hero centrado. Ninguna de las tres aparece.

Imagery: sin fotografía de stock. La única imagery es la marca (logos SVG
propios, logos de patrocinadores sobre fondo transparente) y el mapa vectorial de
la sede. El evento todavía no tiene fotos propias de esta edición; cuando las
haya, sustituyen al emblema del hero antes que cualquier stock.

## Reglas que este repo añade

- Fondo oscuro fijo. El sitio no tiene modo claro: los tokens son de un solo
  tema y las secciones nunca se invierten.
- Los logos de terceros (organizadores, patrocinadores) van sobre tile glass
  oscuro, con fondo transparente y en su variante legible sobre oscuro. Nunca
  sobre una placa blanca suelta.
- Todo enlace externo de inscripción o CFP sale de `config/links.ts`. No se
  escribe una URL de inscripción dentro de un componente.
