"use client";

import { cn } from "@/app/utilities/tailwind";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";
import { NavigationMenu } from "@base-ui/react/navigation-menu";

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
    <NavigationMenu.Item className="duration-250 active:scale-95 active:bg-zinc-900/10 active:shadow-md">
      <NavigationMenu.Link
        render={
          <Link
            href={href}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
            className={cn(
              "relative block px-3 py-2 hover:text-red-500",
              isActive && "text-red-500",
            )}
          >
            {label}
          </Link>
        }
      />
    </NavigationMenu.Item>
  );
}
