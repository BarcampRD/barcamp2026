import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero/hero";
import { CursorGlow } from "@/components/ui/cursor-glow";

export default function Home() {
  return (
    <>
      <div className="ambient" />
      <div className="grain" />
      <CursorGlow />
      <Nav />
      <Hero />
    </>
  );
}
