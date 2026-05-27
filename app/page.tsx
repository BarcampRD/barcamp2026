import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <>
      <div className="ambient" />
      <div className="grain" />
      <Nav />
      <main className="container" style={{ paddingTop: 120 }}>
        <p className="eyebrow">
          <span className="dot" />
          <span>Barcamp 2026 — en construcción</span>
        </p>
        <h1
          className="display"
          style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 8vw, 7rem)", marginTop: 24 }}
        >
          Barcamp<br />
          <span className="red">2026.</span>
        </h1>
      </main>
    </>
  );
}
