import { cn } from "@/app/utilities/tailwind";
import { ReactNode } from "react";

type HighlightVariant = "marker" | "subtle" | "underline" | "glow";

interface HighlightProps {
  children: ReactNode;
  variant?: HighlightVariant;
  className?: string;
}

const variantStyles: Record<HighlightVariant, string> = {
  // Classic highlighter pen effect - works with multi-line
  marker: cn(
    "bg-rose-100 box-decoration-clone",
    "px-1 py-0.5",
    "rounded-sm",
    "transition-colors duration-200",
    "hover:bg-rose-200",
    "dark:bg-rose-950 dark:hover:bg-rose-950/60",
  ),

  // Softer background
  subtle: cn(
    "bg-rose-100/60 box-decoration-clone",
    "px-1 py-0.5 -mx-1",
    "rounded-sm",
    "transition-colors duration-200",
    "hover:bg-rose-100/80",
  ),

  // Wavy underline style
  underline: cn(
    "underline decoration-rose-300 decoration-2 underline-offset-2",
    "decoration-wavy",
    "transition-all duration-200",
    "hover:decoration-rose-500",
  ),

  // Subtle glow effect for emphasis
  glow: cn(
    "text-rose-700 font-medium",
    "transition-all duration-300",
    "hover:text-rose-600",
    "[text-shadow:0_0_0_transparent] hover:[text-shadow:0_0_20px_rgba(225,29,72,0.3)]",
  ),
};

export function Highlight({
  children,
  variant = "marker",
  className,
}: HighlightProps) {
  return (
    <mark
      className={cn(
        "bg-transparent text-inherit",
        variantStyles[variant],
        className,
      )}
    >
      {children}
    </mark>
  );
}
