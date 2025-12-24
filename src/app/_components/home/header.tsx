import Link from "next/link";
import { ViewTransition } from "react";

const navLinks = [
  { href: "/blog", label: "Blog" },
  { href: "https://github.com/thegauravthakur", label: "Github" },
  { href: "https://www.linkedin.com/in/gauravcodes/", label: "LinkedIn" },
  { href: "https://x.com/gauravcodes", label: "Twitter" },
];

export function Header() {
  return (
    <section>
      <h1 className="mb-2 text-4xl font-bold">
        <ViewTransition name="brand-name">
          <span>Gaurav Thakur</span>
        </ViewTransition>
      </h1>
      <p className="mb-6 text-lg text-gray-700">All Things Web @ Zepto</p>

      <nav>
        <ul className="flex gap-6 text-base">
          {navLinks.map((link) => {
            const isExternal = link.href.startsWith("http");
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  target={isExternal ? "_blank" : undefined}
                  className="text-gray-900 underline transition-colors hover:text-gray-600"
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </section>
  );
}
