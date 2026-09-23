/**
 * Patrocinadores del Barcamp 2026.
 *
 * Cada logo vive en `public/sponsors/` sobre fondo transparente, y algunas
 * marcas necesitan dos archivos. El motivo: varias entregaron (o publican) su
 * logo con el logotipo en un color oscuro que sobre el fondo negro del sitio no
 * se lee, así que la variante que vive en `logo` es una recoloración a la tinta
 * clara de la marca Barcamp. Sobre papel esa recoloración desaparece, y ahí
 * entra `logoOnLight`, que es el archivo oficial con los colores de la marca.
 *
 * Los archivos `-on-light` no se recolorean a ojo: salen de la marca. Cecomsa y
 * La Fabril, de sus propios sitios; Unión Médica, de su biblioteca de medios
 * (recortado el margen transparente, nada más); Banco Popular, del original del
 * que salió la variante oscura, que solo le cambió el logotipo de `#11316f` a
 * `#f5f1ec`.
 *
 * Una marca sin `logoOnLight` es una cuyo archivo oficial se lee en los dos
 * temas, y entonces el segundo archivo sobraría.
 *
 * `displayHeight` es la altura de render en px a 1400px de ancho de viewport, y
 * está ajustada por marca, no por archivo: un logo apaisado necesita menos
 * altura que un sello cuadrado para ocupar la misma área óptica en el muro.
 */

export interface SponsorLogo {
  /** Ruta dentro de /public. */
  src: string;
  /** Dimensiones intrínsecas del archivo, para que Next reserve el espacio. */
  width: number;
  height: number;
}

export interface Sponsor {
  name: string;
  /** La variante que se lee sobre el fondo oscuro. */
  logo: SponsorLogo;
  /** El original de marca, para el tema claro. */
  logoOnLight?: SponsorLogo;
  /** Altura de render en px a 1400px de viewport, común a las dos variantes. */
  displayHeight: number;
  href: string;
}

export const SPONSORS: Sponsor[] = [
  {
    name: "Cecomsa",
    logo: { src: "/sponsors/cecomsa.svg", width: 378, height: 187 },
    logoOnLight: { src: "/sponsors/cecomsa-on-light.svg", width: 378, height: 187 },
    displayHeight: 58,
    href: "https://www.cecomsa.com",
  },
  {
    name: "Clínica Unión Médica",
    logo: { src: "/sponsors/union-medica.png", width: 435, height: 301 },
    logoOnLight: { src: "/sponsors/union-medica-on-light.png", width: 511, height: 355 },
    displayHeight: 76,
    href: "https://clinicaunionmedica.com",
  },
  {
    name: "La Fabril",
    logo: { src: "/sponsors/la-fabril.png", width: 237, height: 72 },
    logoOnLight: { src: "/sponsors/la-fabril-on-light.png", width: 250, height: 83 },
    displayHeight: 46,
    href: "https://www.lafabril.com.do",
  },
  {
    name: "Banco Popular",
    logo: { src: "/sponsors/banco-popular.png", width: 289, height: 80 },
    logoOnLight: { src: "/sponsors/banco-popular-on-light.png", width: 300, height: 81 },
    displayHeight: 42,
    href: "https://www.popularenlinea.com",
  },
  {
    name: "Net Tech International",
    logo: { src: "/sponsors/net-tech-international.png", width: 238, height: 44 },
    displayHeight: 34,
    href: "https://www.nettechinternational.com",
  },
];
