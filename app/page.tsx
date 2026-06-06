import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero/hero";
import { Stats } from "@/components/stats";
import { Pillars } from "@/components/pillars";
import { About } from "@/components/about";
import { Keynote } from "@/components/keynote";
import { Schedule } from "@/components/schedule";
import { Speakers } from "@/components/speakers";
import { Sponsors } from "@/components/sponsors";
import { Location } from "@/components/location";
import { Conduct } from "@/components/conduct";
import { Register } from "@/components/register";
import { Footer } from "@/components/footer";
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
      <Keynote />
      <Schedule />
      <Speakers />
      <Sponsors />
      <Location />
      <Conduct />
      <Register />
      <Footer />
    </>
  );
}
