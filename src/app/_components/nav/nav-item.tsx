"use client";

import { cn } from "@/app/utilities/tailwind";
import Link from "next/link";
import { usePathname } from "next/dist/client/components/navigation";
import { NavigationMenu } from "@base-ui/react/navigation-menu";
import { useFocusRestore } from "./use-focus-restore";

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
  const { linkRef, handleFocus } = useFocusRestore(href);

  const isActive = checkIfIsActiveLink(href, pathname);

  return (
    <NavigationMenu.Item>
      <NavigationMenu.Link
        render={
          <Link
            ref={linkRef}
            href={href}
            rel={isExternal ? "noopener noreferrer" : undefined}
            target={isExternal ? "_blank" : undefined}
            onFocus={handleFocus}
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
