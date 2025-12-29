"use client";

import Link from "next/link";
import { cn } from "@/app/utilities/tailwind";
import { ArrowLeftIcon, HomeIcon } from "@heroicons/react/20/solid";

interface BlogNavProps {
  className?: string;
}

export function BlogNav({ className }: BlogNavProps) {
  return (
    <nav
      className={cn(
        "not-prose mb-8 flex items-center justify-between",
        // Glass morphism pill - matching your main nav
        "rounded-full bg-white/90 px-2 py-1.5 shadow-lg ring-1 shadow-zinc-800/5 ring-zinc-900/5 backdrop-blur-sm",
        // Responsive sizing
        "text-sm font-medium text-zinc-800",
        className,
      )}
    >
      {/* Back to all articles */}
      <Link
        href="/blog"
        className={cn(
          "group flex items-center gap-1.5 rounded-full px-3 py-1.5",
          "transition-colors duration-150 ease-out",
          "hover:text-red-500 active:scale-95 active:bg-black/5",
        )}
      >
        <ArrowLeftIcon
          className={cn(
            "size-4",
            "transition-transform duration-150 ease-out",
            "group-hover:-translate-x-0.5",
          )}
        />
        <span className="hidden sm:inline">All Articles</span>
        <span className="sm:hidden">Back</span>
      </Link>

      {/* Subtle separator */}
      <div className="h-4 w-px bg-zinc-200" />

      {/* Home link */}
      <Link
        href="/"
        className={cn(
          "group flex items-center gap-1.5 rounded-full px-3 py-1.5",
          "transition-colors duration-150 ease-out",
          "hover:text-red-500 active:scale-95 active:bg-black/5",
        )}
      >
        <span className="hidden sm:inline">Home</span>
        <HomeIcon
          className={cn(
            "size-4",
            "transition-transform duration-150 ease-out",
            "group-hover:scale-110",
          )}
        />
      </Link>
    </nav>
  );
}
