"use client";

import { cn } from "@/app/utilities/tailwind";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

function checkIfIsActiveLink(href: string, currentPathname: string) {
  if (href === currentPathname) return true;
  if (href === "/blog") {
    return currentPathname.startsWith("/blog");
  }
  return false;
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const isExternal = href.startsWith("http");

  if (pathname === "/" && href === "/") return null;

  const isActive = checkIfIsActiveLink(href, pathname);

  return (
    <Link
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "relative block rounded-full px-3 py-1.5",
        "transition-transform duration-150 ease-out",
        "hover:text-red-500 active:scale-97 active:bg-black/5",
        isActive && "text-red-500",
      )}
    >
      {label}
    </Link>
  );
}
