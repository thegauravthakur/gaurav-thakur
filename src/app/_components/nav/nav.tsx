import { NavItem } from "@/app/_components/nav/nav-item";
import { ViewTransition } from "react";

export function Nav() {
  return (
    <nav className="max-w-min">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
        {navLinks.map((link) => {
          return (
            <li key={link.href + link.label}>
              <NavItem href={link.href} label={link.label} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export function MobileNav() {
  return (
    <nav className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
      <span
        className="block px-3 py-2"
        style={{ viewTransitionName: "nav-mobile-text" }}
      >
        Menu
      </span>
    </nav>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "", label: "About" },
  { href: "/blog", label: "Articles" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Resume" },
];
