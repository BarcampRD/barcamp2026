/**
 * Mercancía oficial de la edición XIV, en el orden del carrusel de Instagram.
 * Las fotos salen del post "Mercancía" del archivo de Figma del CICC; los
 * textos, del carrusel y de la story de la gorra exclusiva.
 */

export type MerchPhoto = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type MerchItem = {
  /** Nombre corto: chip de la barra y palabra gigante del panel. */
  name: string;
  title: string;
  description: string;
  /** Una o dos fotos; con dos se pintan en par, inclinadas en sentidos opuestos. */
  photos: [MerchPhoto] | [MerchPhoto, MerchPhoto];
  /** Ancho relativo de la pieza en su panel: el llavero es alto y angosto. */
  size?: "narrow";
  /** Cupo que se anuncia en grande en lugar del nombre del panel. */
  quota?: { value: number; label: string };
};

export const MERCH: MerchItem[] = [
  {
    name: "Pines",
    title: "Pines",
    description: "Metal, en blanco o en negro.",
    photos: [
      { src: "/merch/pin-blanco.webp", alt: "Pin blanco con el isotipo de Barcamp", width: 900, height: 900 },
      { src: "/merch/pin-negro.webp", alt: "Pin negro con el isotipo de Barcamp", width: 900, height: 900 },
    ],
  },
  {
    name: "Stickers",
    title: "Stickers",
    description: "Para la laptop, la botella y tu teléfono.",
    photos: [
      { src: "/merch/sticker-negro.webp", alt: "Sticker negro de Barcamp 2026", width: 816, height: 900 },
      { src: "/merch/sticker-blanco.webp", alt: "Sticker blanco de Barcamp 2026", width: 816, height: 900 },
    ],
  },
  {
    name: "Poloches",
    title: "Poloches",
    description: "Estampado completo, frente y espalda.",
    photos: [
      { src: "/merch/poloche-espalda.webp", alt: "Espalda del poloche: código, conexión, comunidad", width: 760, height: 898 },
      { src: "/merch/poloche-frente.webp", alt: "Frente del poloche con el logo Barcamp 2026", width: 760, height: 898 },
    ],
  },
  {
    name: "Gorras",
    title: "Gorra exclusiva",
    description: "Para las primeras 100 personas que compren su boleta.",
    photos: [
      { src: "/merch/gorra.webp", alt: "Gorra negra con el isotipo bordado al frente", width: 900, height: 828 },
    ],
    quota: { value: 100, label: "Las primeras boletas" },
  },
  {
    name: "Llaveros",
    title: "Llaveros",
    description: "Metal pulido, con el isotipo al frente.",
    photos: [
      { src: "/merch/llavero.webp", alt: "Llavero de metal con el isotipo de Barcamp", width: 420, height: 900 },
    ],
    size: "narrow",
  },
];
