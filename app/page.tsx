import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero/hero";
import { Stats } from "@/components/stats";
import { Pillars } from "@/components/pillars";
import { About } from "@/components/about";
import { CursorGlow } from "@/components/ui/cursor-glow";

export default function Home() {
  return (
    <>
      <div className="ambient" />
      <div className="grain" />
      <CursorGlow />
      <Nav />
      <Hero />
      <Stats />
      <Pillars />
      <About />
    </>
  );
}
