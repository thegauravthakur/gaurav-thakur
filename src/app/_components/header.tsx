import Link from "next/link";
import { cn } from "@/app/utilities/tailwind";
import { linkStyles } from "@/app/_styles/common";
import { ViewTransition } from "react";
import { Nav } from "@/app/_components/nav/nav";
import { ThemeSwitchButton } from "@/app/_components/theme-switch-button";
import { Search } from "@/app/_components/search/search";
import { MobileNav } from "@/app/_components/nav/mobile-nav";

export const links = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/blog/who-is-gaurav-thakur" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-(--breakpoint-xl) items-center justify-between px-6 py-2 md:justify-normal">
      <h1 className="font-semibold dark:text-white">
        <ViewTransition name="brand-name">
          <Link
            href="/"
            className={cn(
              linkStyles,
              "transition-opacity duration-150 active:opacity-60",
            )}
          >
            Gaurav Thakur
          </Link>
        </ViewTransition>
      </h1>
      <div className="hidden flex-1 justify-center md:flex">
        <ViewTransition name="nav-desktop">
          <Nav />
        </ViewTransition>
      </div>
      <ul className="flex items-center gap-x-1 md:gap-x-2">
        <li className="hidden items-center md:flex">
          <Search />
        </li>
        <li className="hidden items-center md:flex">
          <ThemeSwitchButton />
        </li>
        <li className="flex items-center md:hidden">
          <MobileNav />
        </li>
      </ul>
    </header>
  );
}
