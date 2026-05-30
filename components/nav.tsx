import Image from "next/image";
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
      <div
        className="glass flex items-center justify-between py-[10px] pl-[22px] pr-3 rounded-full"
        style={{
          background: "rgba(15, 10, 10, 0.55)",
          backdropFilter: "blur(32px) saturate(180%)",
          WebkitBackdropFilter: "blur(32px) saturate(180%)",
        }}
      >
        <Link href="#top" className="inline-flex items-center no-underline">
          <Image
            src="/barcamp-logo-nav.svg"
            alt="Barcamp 2026"
            width={152}
            height={32}
            priority
            unoptimized
          />
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
