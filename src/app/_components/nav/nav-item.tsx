"use client";

import { cn } from "@/app/utilities/tailwind";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";

interface NavItemProps {
  href: string;
  label: string;
}

export function NavItem({ href, label }: NavItemProps) {
  const pathname = usePathname();
  const isExternal = href.startsWith("http");

  if (href === "/" && href === pathname) return null;

  const isActive = pathname === href;

  return (
    <Link
      href={href}
      rel={isExternal ? "noopener noreferrer" : undefined}
      target={isExternal ? "_blank" : undefined}
      className={cn(
        "relative block px-3 py-2 transition hover:text-red-500",
        isActive && "text-red-500",
      )}
    >
      {label}
    </Link>
  );
}
