import { NavItem } from "@/app/_components/nav/nav-item";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Menu } from "@base-ui/react/menu";
import Link from "next/link";
import { ViewTransition } from "react";
import { IoSearchOutline, IoSunnyOutline } from "react-icons/io5";

export function Nav() {
  return (
    <nav className="flex max-w-min rounded-full bg-white/90 px-1.5 py-1 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition-transform duration-150 ease-out select-none">
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

export function MobileNav() {
  return (
    <Menu.Root>
      <ViewTransition name="nav">
        <Menu.Trigger className="group flex cursor-pointer items-center gap-1 rounded-full bg-white/90 py-2 pr-3 pl-6 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition-transform duration-150 ease-out select-none active:scale-97 active:shadow-md">
          <span
            className="flex items-center gap-1"
            style={{ viewTransitionName: "nav-mobile-text" }}
          >
            Menu
            <ChevronDownIcon className="size-4 transition-transform duration-150 group-data-popup-open:rotate-180" />
          </span>
        </Menu.Trigger>
      </ViewTransition>
      <Menu.Portal>
        <Menu.Positioner side="bottom" align="end" sideOffset={8}>
          <Menu.Popup className="mobile-menu-popup min-w-44 rounded-2xl bg-white/90 p-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Menu.Item
                closeOnClick
                key={link.href + link.label}
                render={<Link href={link.href} />}
                className="block rounded-lg px-3 py-2 active:bg-zinc-900/10"
              >
                {link.label}
              </Menu.Item>
            ))}

            <Menu.Separator className="my-2 h-px bg-zinc-200" />

            <div className="flex gap-1">
              <Menu.Item className="rounded-full p-2 active:bg-zinc-900/10">
                <IoSearchOutline fontSize={20} />
              </Menu.Item>
              <Menu.Item className="rounded-full p-2 active:bg-zinc-900/10">
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
  { href: "/about", label: "About" },
  { href: "/blog", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];
