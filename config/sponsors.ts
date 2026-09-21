/**
 * Patrocinadores del Barcamp 2026.
 *
 * Cada logo vive en `public/sponsors/` sobre fondo transparente y en la
 * variante que se lee sobre el fondo oscuro del sitio.
 *
 * `height` es la altura de render en px a 1400px de ancho de viewport, y está
 * ajustada por marca, no por archivo: un logo apaisado necesita menos altura
 * que un sello cuadrado para ocupar la misma área óptica en el muro.
 */
export interface Sponsor {
  name: string;
  /** Ruta dentro de /public. */
  logo: string;
  /** Dimensiones intrínsecas del archivo, para que Next reserve el espacio. */
  width: number;
  height: number;
  /** Altura de render en px a 1400px de viewport. */
  displayHeight: number;
  href: string;
}

export const SPONSORS: Sponsor[] = [
  {
    name: "Cecomsa",
    logo: "/sponsors/cecomsa.svg",
    width: 378,
    height: 187,
    displayHeight: 58,
    href: "https://www.cecomsa.com",
  },
  {
    name: "Clínica Unión Médica",
    logo: "/sponsors/union-medica.png",
    width: 435,
    height: 301,
    displayHeight: 76,
    href: "https://clinicaunionmedica.com",
  },
  {
    name: "La Fabril",
    logo: "/sponsors/la-fabril.png",
    width: 237,
    height: 72,
    displayHeight: 46,
    href: "https://www.lafabril.com.do",
  },
  {
    name: "Banco Popular",
    logo: "/sponsors/banco-popular.png",
    width: 289,
    height: 80,
    displayHeight: 42,
    href: "https://www.popularenlinea.com",
  },
  {
    name: "Net Tech International",
    logo: "/sponsors/net-tech-international.png",
    width: 238,
    height: 44,
    displayHeight: 34,
    href: "https://www.nettechinternational.com",
  },
];
