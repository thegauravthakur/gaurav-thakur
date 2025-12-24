import Link from "next/link";
import { ViewTransition } from "react";

const navLinks = [
  { href: "/blog", label: "About" },
  { href: "/blog", label: "Articles" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Resume" },
];

interface HeaderProps {
  avoidTransition?: boolean;
}

export function Header({ avoidTransition = false }: HeaderProps) {
  return (
    <section>
      <h1 className="mb-2 text-4xl font-bold">
        {avoidTransition ? (
          <span>Gaurav Thakur</span>
        ) : (
          <ViewTransition name="brand-name">
            <span>Gaurav Thakur</span>
          </ViewTransition>
        )}
      </h1>
      <p className="mb-6 text-lg text-gray-700">All Things Web @ Zepto</p>

      {avoidTransition ? (
        <Nav />
      ) : (
        <ViewTransition name="nav">
          <Nav />
        </ViewTransition>
      )}
    </section>
  );
}

export function Nav() {
  return (
    <nav className="max-w-min">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
        {navLinks.map((link) => {
          const isExternal = link.href.startsWith("http");
          return (
            <li key={link.href + link.label}>
              <Link
                href={link.href}
                rel={isExternal ? "noopener noreferrer" : undefined}
                target={isExternal ? "_blank" : undefined}
                className="relative block px-3 py-2 transition hover:text-red-500"
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
