import { IoSearchOutline, IoSunnyOutline } from "react-icons/io5";

import Link from "next/link";
import { cn } from "@/app/utilities/tailwind";
import { iconStyles, linkStyles } from "@/app/_styles/common";
import { ViewTransition } from "react";
import { MobileMenu } from "@/app/_components/mobile-menu";

export const links = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/blog/who-is-gaurav-thakur" },
];

export function Header() {
  return (
    <header className="mx-auto flex w-full max-w-(--breakpoint-xl) items-center justify-between border-b px-6 py-2 md:justify-normal">
      <h1 className="font-semibold">
        <Link href="/" className={cn(linkStyles)}>
          <ViewTransition name="brand-name">
            <span>Gaurav Thakur</span>
          </ViewTransition>
        </Link>
      </h1>
      <ul className="hidden flex-1 items-center justify-center gap-x-4 text-sm md:flex">
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} className={cn(linkStyles)} prefetch={true}>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="flex items-center gap-x-1 md:gap-x-2">
        <li className="flex items-center">
          <button className={cn(iconStyles)} type="button" aria-label="Search">
            <IoSearchOutline fontSize={20} />
          </button>
        </li>
        <li className="flex items-center">
          <button
            className={cn(iconStyles)}
            type="button"
            aria-label="Dark Mode"
          >
            <IoSunnyOutline fontSize={20} />
          </button>
        </li>
        <li className="flex items-center md:hidden">
          <MobileMenu />
        </li>
      </ul>
    </header>
  );
}
