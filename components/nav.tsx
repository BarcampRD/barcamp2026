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
    <nav className="nav">
      <div className="nav-inner glass">
        <Link href="#top" className="nav-logo">
          <span className="mark">BC</span>
          <span>
            Barcamp <span style={{ color: "var(--red-0)" }}>26</span>
          </span>
        </Link>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
        </div>

        <Link
          href="#registro"
          className="btn btn-primary"
          style={{ padding: "10px 18px", fontSize: "0.85rem" }}
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
