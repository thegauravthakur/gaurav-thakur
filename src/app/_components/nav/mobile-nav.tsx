"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Popover } from "@base-ui/react/popover";
import Link from "next/link";
import { ViewTransition } from "react";
import { ThemeSwitchButton } from "@/app/_components/theme-switch-button";
import { Search } from "@/app/_components/search/search";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Articles" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    // Delay close to show :active state
    setTimeout(() => setIsOpen(false), 50);
  };

  return (
    <Popover.Root open={isOpen} onOpenChange={setIsOpen}>
      <ViewTransition name="nav-mobile">
        <Popover.Trigger className="group flex cursor-pointer items-center gap-1 rounded-full bg-white/90 py-2 pr-3 pl-6 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm transition-transform duration-150 ease-out select-none active:scale-97 active:shadow-md dark:bg-white/10 dark:text-white dark:ring-white/10">
          <span
            className="flex items-center gap-1"
            style={{ viewTransitionName: "nav-mobile-text" }}
          >
            Menu
            <ChevronDownIcon className="size-4 transition-transform duration-150 group-data-[popup-open]:rotate-180" />
          </span>
        </Popover.Trigger>
      </ViewTransition>
      <Popover.Portal>
        <Popover.Positioner side="bottom" align="end" sideOffset={8}>
          <Popover.Popup className="min-w-44 rounded-2xl bg-white/90 p-2 text-sm font-medium text-zinc-800 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm dark:bg-gray-900/90 dark:text-white dark:ring-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={handleLinkClick}
                className="block rounded-lg px-3 py-2 hover:bg-zinc-100 active:bg-zinc-200 dark:hover:bg-white/10 dark:active:bg-white/20"
              >
                {link.label}
              </Link>
            ))}

            <div className="my-2 h-px bg-zinc-200 dark:bg-gray-700" />

            <div className="flex items-center gap-1">
              <Search />
              <ThemeSwitchButton />
            </div>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  );
}
