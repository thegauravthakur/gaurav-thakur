import { cn } from "@/app/utilities/tailwind";
import { ReactNode } from "react";

type HighlightVariant = "marker" | "subtle" | "underline" | "glow";

interface HighlightProps {
  children: ReactNode;
  variant?: HighlightVariant;
  className?: string;
}

const variantStyles: Record<HighlightVariant, string> = {
  // Classic highlighter pen effect with gradient
  marker: cn(
    "bg-gradient-to-b from-transparent from-40% via-red-200/70 via-40% to-red-200/70",
    "decoration-clone px-0.5 -mx-0.5",
    "transition-all duration-200",
    "hover:via-red-300/80 hover:to-red-300/80",
  ),

  // Softer, full background highlight
  subtle: cn(
    "bg-red-100/60 rounded-sm px-1 -mx-0.5",
    "transition-colors duration-200",
    "hover:bg-red-100",
  ),

  // Underline style that expands on hover
  underline: cn(
    "underline decoration-red-300 decoration-2 underline-offset-2",
    "transition-all duration-200",
    "hover:decoration-red-500 hover:decoration-[3px]",
  ),

  // Subtle glow effect for emphasis
  glow: cn(
    "text-red-700 font-medium",
    "transition-all duration-300",
    "hover:text-red-600",
    "[text-shadow:0_0_0_transparent] hover:[text-shadow:0_0_20px_rgba(239,68,68,0.3)]",
  ),
};

export function Highlight({
  children,
  variant = "subtle",
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
