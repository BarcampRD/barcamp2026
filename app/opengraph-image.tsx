import { ImageResponse } from "next/og";

export const alt = "Barcamp 2026 — Desconferencia tech · PUCMM, Santiago";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BG = "#0a0707";
const INK = "#f5f1ec";
const INK_2 = "#a8a09a";
const RED = "#e8402e";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: BG,
          backgroundImage: `radial-gradient(ellipse 70% 60% at 80% 15%, rgba(232,64,46,0.28), transparent 60%), radial-gradient(ellipse 60% 60% at 0% 100%, rgba(232,64,46,0.16), transparent 60%)`,
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: 999,
              background: RED,
            }}
          />
          <div
            style={{
              color: INK_2,
              fontSize: 26,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            PUCMM · STI · República Dominicana
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 200,
              fontWeight: 800,
              lineHeight: 0.85,
              letterSpacing: -8,
            }}
          >
            <span style={{ color: INK }}>BAR</span>
            <span style={{ color: RED }}>CAMP</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              gap: 28,
              marginTop: 8,
            }}
          >
            <span
              style={{
                color: INK,
                fontSize: 140,
                fontWeight: 800,
                lineHeight: 0.85,
                letterSpacing: -6,
              }}
            >
              2026
            </span>
            <span
              style={{
                color: INK_2,
                fontSize: 34,
                fontWeight: 600,
                paddingBottom: 22,
              }}
            >
              Código, conexión e impacto.
            </span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "18px 28px",
              borderRadius: 999,
              border: "1px solid rgba(245,241,236,0.14)",
              background: "rgba(245,241,236,0.04)",
            }}
          >
            <span style={{ color: INK, fontSize: 32, fontWeight: 700 }}>
              14 de Noviembre 2026
            </span>
            <span style={{ color: RED, fontSize: 32 }}>·</span>
            <span style={{ color: INK_2, fontSize: 32 }}>PUCMM, Santiago</span>
          </div>
          <span style={{ color: INK_2, fontSize: 28, letterSpacing: 2 }}>
            barcamp.org.do
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
