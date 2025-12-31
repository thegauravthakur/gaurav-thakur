"use client";

import { useRef, type ReactNode } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/app/utilities/tailwind";

interface AnimateInViewProps {
  children: ReactNode;
  className?: string;
  /** Animation delay in seconds */
  delay?: number;
}

export function AnimateInView({
  children,
  className,
  delay = 0,
}: AnimateInViewProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div
      ref={ref}
      className={cn("h-full w-full", className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0px)" : "translateY(20px)",
        transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
