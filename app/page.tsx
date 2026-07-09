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
import { currentFeatures } from "@/config/event-stages";

export default function Home() {
  const f = currentFeatures;

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
      {f.showKeynote && <Keynote />}
      {(f.showCallForSpeakers || f.showAgenda) && <Schedule />}
      {(f.showConfirmedSpeakers || f.showSpeakersToAnounce) && <Speakers />}
      <Sponsors />
      <Location />
      <Conduct />
      {f.showRegister && <Register />}
      <Footer />
    </>
  );
}
