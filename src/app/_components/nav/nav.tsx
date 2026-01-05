import { NavItem } from "@/app/_components/nav/nav-item";
import { cn } from "@/app/utilities/tailwind";

export function Nav() {
  return (
    <nav
      className={cn(
        "flex max-w-min rounded-full bg-white/90 px-1.5 py-1 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition-transform duration-150 ease-out select-none",
        "dark:bg-white/10 dark:text-white",
      )}
    >
      {navLinks.map((link) => {
        return (
          <NavItem
            href={link.href}
            label={link.label}
            key={link.href + link.label}
          />
        );
      })}
    </nav>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];
