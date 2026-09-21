import Image from "next/image";
import { Icons } from "@/components/icons";
import { currentFeatures } from "@/config/event-stages";
import { CFP_URL, REGISTRATION_URL } from "@/config/links";
import { Countdown } from "./countdown";
import { RotatingWord } from "./rotating-word";

/**
 * Póster tipográfico del evento.
 *
 * Todo lo vertical está atado a `vh` además de a `vw`: en un portátil de 1920
 * de ancho y 900 de alto, un tamaño calculado solo con `vw` desbordaba el
 * viewport y cortaba los botones y la cuenta regresiva.
 */
export function Hero() {
  const { showRegister, showCallForSpeakers } = currentFeatures;

  return (
    <section
      id="top"
      className="relative min-h-[100dvh] flex items-center overflow-hidden
        pt-[clamp(104px,14vh,150px)] pb-[clamp(40px,6vh,72px)]"
    >
      <div className="w-full max-w-[1400px] mx-auto px-8 relative z-10 grid grid-cols-[1.1fr_0.9fr] max-[1000px]:grid-cols-1 gap-12 items-center">

        {/* Poster tipográfico */}
        <div className="flex flex-col">

          <div className="eyebrow mb-[clamp(12px,2.4vh,24px)]">
            <span className="dot" />
            <span>PUCMM · STI · República Dominicana</span>
          </div>

          <div className="font-display font-extrabold leading-[0.82] tracking-[-0.045em] text-[clamp(3.6rem,min(12vw,16.5vh),10rem)] text-ink-0 [font-variation-settings:'wdth'_100]">
            BAR
          </div>

          <div className="font-display font-extrabold leading-[0.82] tracking-[-0.045em] text-[clamp(3.6rem,min(12vw,16.5vh),10rem)] text-red-0 [font-variation-settings:'wdth'_100] -mt-[0.08em] relative inline-block w-fit">
            CAMP
            <span className="absolute -left-[10%] -right-[10%] top-[8%] -bottom-[8%] [background:radial-gradient(ellipse,var(--red-1-50),transparent_60%)] -z-10 blur-[40px] pointer-events-none" />
          </div>

          <div className="flex items-end gap-6 mt-[0.05em]">
            <div className="font-display font-extrabold leading-[0.82] tracking-[-0.05em] text-[clamp(2.6rem,min(8.5vw,11.5vh),7rem)] text-ink-0 [font-variation-settings:'wdth'_100]">
              2026
            </div>
            <div className="font-display font-bold text-[clamp(1rem,min(2.2vw,3vh),2rem)] text-red-0 leading-[0.95] tracking-[-0.02em] pb-[0.6em] [font-variation-settings:'wdth'_100]">
              PUCMM,<br />R.D.
            </div>
          </div>

          <div className="mt-[clamp(18px,3.4vh,36px)] font-display font-semibold text-[clamp(1.15rem,min(2.2vw,3.1vh),1.9rem)] leading-[1.05] text-ink-1 max-w-[22ch] tracking-[-0.02em] relative pl-5">
            <span className="absolute left-0 top-[0.15em] bottom-[0.15em] w-[3px] bg-red-0 shadow-[0_0_12px_var(--color-red-0)]" />
            Código,<br />Conexión<br /><RotatingWord />
          </div>

          <div className="mt-[clamp(20px,3.6vh,40px)] flex flex-wrap gap-3 items-center">
            {showRegister && (
              <a
                href={REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Inscríbete
                <span className="btn-arrow">
                  <Icons.Arrow />
                </span>
              </a>
            )}

            {showCallForSpeakers && (
              <a
                href={CFP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={showRegister ? "btn btn-glass" : "btn btn-primary"}
              >
                Propón tu charla
                <span className="btn-arrow">
                  <Icons.Arrow />
                </span>
              </a>
            )}
          </div>

          <Countdown />
        </div>

        {/* Emblema: por debajo de 1000px el póster ya es el único protagonista
            y la tarjeta solo empujaría los botones fuera de la pantalla. */}
        <div className="relative aspect-[3/4] max-h-[min(620px,64vh)] ml-auto w-full max-w-[480px] max-[1000px]:hidden">
          {/* Tarjeta de fondo */}
          <div className="glass absolute rounded-[44px] overflow-hidden rotate-[4deg] opacity-70 inset-[24px_-24px_-8px_24px]" />

          {/* Tarjeta principal */}
          <div className="absolute inset-0 rounded-[44px] overflow-hidden flex items-center justify-center
            [background:radial-gradient(ellipse_80%_80%_at_50%_50%,var(--emblem-bg),transparent_70%),rgba(20,12,12,0.4)]
            [backdrop-filter:blur(30px)_saturate(180%)]
            [-webkit-backdrop-filter:blur(30px)_saturate(180%)]
            border border-[var(--emblem-border)]
            [box-shadow:var(--glass-shadow),inset_0_1px_0_var(--emblem-inset),0_0_80px_var(--emblem-glow)]">

            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src="/barcamp-logo-white.svg"
                alt="Barcamp 2026"
                fill
                priority
                style={{ objectFit: "contain", padding: "10%" }}
              />
            </div>

            <div className="absolute top-5 left-6 right-6 flex justify-between items-start">
              <div className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-ink-2">
                EDICIÓN · XIII
              </div>
              <div className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-red-0 text-right">
                Conecta ideas<br />Construye <b>impacto</b>
              </div>
            </div>

            <div className="absolute bottom-5 left-6 right-6 flex justify-between items-end">
              <div>
                <div className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-ink-2 mb-1">
                  Coords
                </div>
                <div className="font-mono text-[0.7rem] tracking-[0.08em] uppercase text-ink-1">
                  19.4515°N · 70.6970°W
                </div>
              </div>
              <div className="font-mono text-[0.78rem] tracking-[0.08em] uppercase text-ink-2 text-right">
                MMXXVI
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
