import type { StyleSpecification } from "maplibre-gl";

/**
 * Estilo oscuro del mapa de la sede.
 *
 * Los tiles vienen de OpenFreeMap (esquema OpenMapTiles, datos de
 * OpenStreetMap): vectoriales, sin API key y sin marca de agua. El estilo es
 * nuestro para que el mapa use los neutros de la marca en vez del gris genérico
 * de un basemap de terceros, y para que el campus de la PUCMM quede teñido con
 * el rojo del evento.
 *
 * La atribución no se escribe aquí: MapLibre la lee del TileJSON de la fuente y
 * el AttributionControl la muestra.
 */

const BG = "#0b0808";
const WATER = "#0d1419";
const LAND_GREEN = "#101312";
const CAMPUS = "rgba(237, 41, 23, 0.10)";
const BUILDING = "#1b1414";
const ROAD_MINOR = "#221a1a";
const ROAD_MAIN = "#332424";
const LABEL = "#8d8580";
const LABEL_HALO = "#0b0808";

export const MAP_STYLE: StyleSpecification = {
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
