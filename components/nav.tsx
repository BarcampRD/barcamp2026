import Link from "next/link";
import { Icons } from "./icons";

const NAV_LINKS = [
  { href: "#acerca", label: "Acerca" },
  { href: "#keynote", label: "Keynote" },
  { href: "#agenda", label: "Agenda" },
  { href: "#speakers", label: "Speakers" },
  { href: "#patrocinadores", label: "Patrocinadores" },
  { href: "#ubicacion", label: "Ubicación" },
];

export function Nav() {
  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-40px)] max-w-[1200px]">
      <div className="glass flex items-center justify-between py-[10px] pl-[22px] pr-3 rounded-full">
        <Link
          href="#top"
          className="inline-flex items-center gap-[10px] font-display font-extrabold text-[1.05rem] tracking-[-0.02em] text-ink-0 no-underline"
        >
          <span className="w-7 h-7 rounded-[8px] inline-flex items-center justify-center text-[0.7rem] font-black [background:linear-gradient(180deg,oklch(65%_0.23_25),oklch(45%_0.23_25))] [box-shadow:inset_0_1px_0_oklch(75%_0.2_25/0.6),0_0_20px_oklch(55%_0.23_25/0.5)]">
            BC
          </span>
          <span>
            Barcamp <span className="text-red-0">26</span>
          </span>
        </Link>

        <div className="max-[900px]:hidden flex gap-1 items-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-[14px] py-2 rounded-full text-[0.88rem] text-ink-1 no-underline transition-[background,color] duration-200 hover:bg-white/[0.06] hover:text-ink-0"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#registro"
          className="btn btn-primary !py-[10px] !px-[18px] !text-[0.85rem]"
        >
          Inscríbete
          <span className="btn-arrow">
            <Icons.Arrow />
          </span>
        </Link>
      </div>
    </nav>
  );
}
