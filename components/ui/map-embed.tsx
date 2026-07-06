"use client";

import { useEffect, useRef } from "react";

const LAT = 19.441938309476637;
const LNG = -70.6851007330878;

export function MapEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let map: import("maplibre-gl").Map | null = null;

    async function init() {
      const maplibregl = (await import("maplibre-gl")).default;
      if (!containerRef.current) return;

      map = new maplibregl.Map({
        container: containerRef.current,
        style: {
          version: 8,
          sources: {
            "carto-dark": {
              type: "raster",
              tiles: [
                "https://a.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                "https://b.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
                "https://c.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png",
              ],
              tileSize: 256,
              attribution:
                '© <a href="https://carto.com/attributions">CARTO</a> © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
            },
          },
          layers: [
            {
              id: "carto-dark-layer",
              type: "raster",
              source: "carto-dark",
            },
          ],
        },
        center: [LNG, LAT],
        zoom: 15.5,
        scrollZoom: false,
        attributionControl: false,
      });

      map.addControl(
        new maplibregl.AttributionControl({ compact: true }),
        "bottom-left"
      );

      map.on("load", () => {
        if (!map) return;

        const markerEl = document.createElement("div");
        markerEl.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" width="36" height="44" viewBox="0 0 24 30" fill="none">
            <path d="M12 0C5.372 0 0 5.372 0 12c0 8.485 10.8 17.28 11.28 17.729a1 1 0 0 0 1.44 0C13.2 29.28 24 20.485 24 12 24 5.372 18.628 0 12 0z" fill="oklch(50% 0.26 25)"/>
            <circle cx="12" cy="12" r="4.5" fill="white"/>
          </svg>
        `;
        markerEl.style.cssText =
          "filter: drop-shadow(0 4px 16px oklch(47% 0.26 25 / 0.7)); cursor: default;";

        new maplibregl.Marker({ element: markerEl, anchor: "bottom" })
          .setLngLat([LNG, LAT])
          .addTo(map);
      });
    }

    init();

    return () => {
      map?.remove();
    };
  }, []);

  return <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />;
}
