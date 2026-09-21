import type { StyleSpecification } from "maplibre-gl";
import type { Theme } from "./theme";

/**
 * Estilo del mapa de la sede, en los dos temas del sitio.
 *
 * Los tiles vienen de OpenFreeMap (esquema OpenMapTiles, datos de
 * OpenStreetMap): vectoriales, sin API key y sin marca de agua. El estilo es
 * nuestro para que el mapa use los neutros de la marca en vez del gris genérico
 * de un basemap de terceros, y para que el campus de la PUCMM quede teñido con
 * el rojo del evento.
 *
 * El mapa es la única superficie que no puede leer los tokens CSS: su paleta es
 * un objeto de JavaScript que MapLibre compila una vez. De ahí que los colores
 * se repitan aquí, alineados a mano con `styles/tokens.css`.
 *
 * La atribución no se escribe aquí: MapLibre la lee del TileJSON de la fuente y
 * el AttributionControl la muestra.
 */

interface MapPalette {
  bg: string;
  water: string;
  landGreen: string;
  campus: string;
  building: string;
  roadMinor: string;
  roadMain: string;
  label: string;
  labelHalo: string;
}

const PALETTES: Record<Theme, MapPalette> = {
  dark: {
    bg: "#0b0808",
    water: "#0d1419",
    landGreen: "#101312",
    campus: "rgba(237, 41, 23, 0.10)",
    building: "#1b1414",
    roadMinor: "#221a1a",
    roadMain: "#332424",
    label: "#8d8580",
    labelHalo: "#0b0808",
  },
  // Papel: el suelo baja un paso desde el fondo del sitio para que las calles
  // puedan ser lo más claro del mapa sin llegar al blanco.
  light: {
    bg: "#efe9e6",
    water: "#d8e4ea",
    landGreen: "#e3e8df",
    campus: "rgba(182, 6, 4, 0.12)",
    building: "#e3dbd7",
    roadMinor: "#faf6f4",
    roadMain: "#fffdfc",
    label: "#6f635e",
    labelHalo: "#efe9e6",
  },
};

export function mapStyle(theme: Theme): StyleSpecification {
  const { bg: BG, water: WATER, landGreen: LAND_GREEN, campus: CAMPUS,
    building: BUILDING, roadMinor: ROAD_MINOR, roadMain: ROAD_MAIN,
    label: LABEL, labelHalo: LABEL_HALO } = PALETTES[theme];

  return {
    version: 8,
    glyphs: "https://tiles.openfreemap.org/fonts/{fontstack}/{range}.pbf",
    sources: {
      openmaptiles: {
        type: "vector",
        url: "https://tiles.openfreemap.org/planet",
      },
    },
    layers: [
      {
        id: "background",
        type: "background",
        paint: { "background-color": BG },
      },
      {
        id: "landcover",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landcover",
        filter: ["in", ["get", "class"], ["literal", ["wood", "grass", "scrub", "farmland"]]],
        paint: { "fill-color": LAND_GREEN },
      },
      {
        id: "park",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "park",
        paint: { "fill-color": LAND_GREEN },
      },
      // El campus de la PUCMM es un polígono `university`: teñirlo es lo que hace
      // que el mapa señale la sede sin depender solo del pin.
      {
        id: "campus",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "landuse",
        filter: ["in", ["get", "class"], ["literal", ["university", "school"]]],
        paint: { "fill-color": CAMPUS },
      },
      {
        id: "water",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "water",
        filter: ["!=", ["get", "brunnel"], "tunnel"],
        paint: { "fill-color": WATER },
      },
      {
        id: "building",
        type: "fill",
        source: "openmaptiles",
        "source-layer": "building",
        minzoom: 13,
        paint: {
          "fill-color": BUILDING,
          "fill-opacity": ["interpolate", ["linear"], ["zoom"], 13, 0, 15, 1],
        },
      },
      {
        id: "road-minor",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["minor", "service", "track", "path", "pedestrian"]],
        ],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": ROAD_MINOR,
          "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 16, 3, 19, 10],
        },
      },
      {
        id: "road-main",
        type: "line",
        source: "openmaptiles",
        "source-layer": "transportation",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["motorway", "trunk", "primary", "secondary", "tertiary"]],
        ],
        layout: { "line-cap": "round", "line-join": "round" },
        paint: {
          "line-color": ROAD_MAIN,
          "line-width": ["interpolate", ["linear"], ["zoom"], 10, 0.8, 14, 3.5, 18, 14],
        },
      },
      {
        id: "road-label",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "transportation_name",
        minzoom: 14,
        layout: {
          "symbol-placement": "line",
          "text-field": ["get", "name"],
          "text-font": ["Noto Sans Regular"],
          "text-size": 10,
          "text-letter-spacing": 0.05,
        },
        paint: {
          "text-color": LABEL,
          "text-halo-color": LABEL_HALO,
          "text-halo-width": 1.2,
        },
      },
      {
        id: "place-label",
        type: "symbol",
        source: "openmaptiles",
        "source-layer": "place",
        filter: [
          "in",
          ["get", "class"],
          ["literal", ["city", "town", "village", "suburb", "neighbourhood"]],
        ],
        layout: {
          "text-field": ["get", "name"],
          "text-font": ["Noto Sans Regular"],
          "text-size": ["interpolate", ["linear"], ["zoom"], 10, 11, 16, 13],
          "text-letter-spacing": 0.08,
          "text-transform": "uppercase",
        },
        paint: {
          "text-color": LABEL,
          "text-halo-color": LABEL_HALO,
          "text-halo-width": 1.4,
        },
      },
    ],
  };
}
