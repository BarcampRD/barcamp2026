"use client";

import { useEffect, useRef, useState } from "react";

const LAT = 19.441938309476637;
const LNG = -70.6851007330878;
const MAPS_URL =
  "https://maps.google.com/?q=Pontificia+Universidad+Católica+Madre+y+Maestra+Santiago";

export function MapEmbed() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [failed, setFailed] = useState(false);

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

    // Sin WebGL (navegadores viejos, GPU bloqueada) MapLibre lanza y rompe la sección
    init().catch(() => setFailed(true));

    return () => {
      map?.remove();
    };
  }, []);

  if (failed) {
    return (
      <a
        href={MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center no-underline"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, oklch(25% 0.08 25 / 0.5), transparent 70%), oklch(12% 0.02 25)",
        }}
      >
        <span
          className="font-mono text-ink-2 uppercase"
          style={{ fontSize: "0.68rem", letterSpacing: "0.12em" }}
        >
          PUCMM · Campus Santiago
        </span>
        <span className="text-ink-0 font-medium text-[0.95rem]">
          Ver ubicación en Google Maps →
        </span>
      </a>
    );
  }

  return <div ref={containerRef} style={{ position: "absolute", inset: 0 }} />;
}
