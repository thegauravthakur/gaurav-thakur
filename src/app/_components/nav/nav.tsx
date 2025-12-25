import { NavItem } from "@/app/_components/nav/nav-item";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu } from "@base-ui/react/menu";
import Link from "next/link";
import { IoSearchOutline, IoSunnyOutline } from "react-icons/io5";

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
    <Menu.Root>
      <Menu.Trigger className="group flex cursor-pointer items-center gap-1 rounded-full bg-white/90 py-2 pr-3 pl-6 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
        <span
          className="flex items-center gap-1"
          style={{ viewTransitionName: "nav-mobile-text" }}
        >
          Menu
          <ChevronDownIcon className="size-4 transition-transform duration-200 group-data-popup-open:rotate-180" />
        </span>
      </Menu.Trigger>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8}>
          <Menu.Popup className="mobile-menu-popup min-w-44 rounded-2xl bg-white/90 p-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Menu.Item
                key={link.href + link.label}
                render={<Link href={link.href} />}
                className="block rounded-lg px-3 py-2 transition-colors duration-200 outline-none data-highlighted:bg-red-50 data-highlighted:text-red-600"
              >
                {link.label}
              </Menu.Item>
            ))}

            <Menu.Separator className="my-2 h-px bg-zinc-200" />

            <div className="flex gap-1">
              <Menu.Item className="cursor-pointer rounded-full p-2 transition-colors duration-200 outline-none data-highlighted:bg-red-50 data-highlighted:text-red-600">
                <IoSearchOutline fontSize={20} />
              </Menu.Item>
              <Menu.Item className="cursor-pointer rounded-full p-2 transition-colors duration-200 outline-none data-highlighted:bg-red-50 data-highlighted:text-red-600">
                <IoSunnyOutline fontSize={20} />
              </Menu.Item>
            </div>
          </Menu.Popup>
        </Menu.Positioner>
      </Menu.Portal>
    </Menu.Root>
  );
}

const navLinks = [
  { href: "/", label: "Home" },
  { href: "", label: "About" },
  { href: "/blog", label: "Articles" },
  { href: "#", label: "Projects" },
  { href: "#", label: "Resume" },
];
