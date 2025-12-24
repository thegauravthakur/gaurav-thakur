"use client";

import { useAnimate } from "framer-motion/mini";
import { useEffect, type ReactNode } from "react";

interface StaggerWrapperProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  initialOpacity?: number;
}

export function StaggerWrapper({
  children,
  className,
  duration = 0.6,
  delay = 0,
  initialOpacity = 0,
}: StaggerWrapperProps) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    animate(
      scope.current,
      { opacity: 1, transform: "translateY(0px)" },
      { duration, delay },
    );
  }, [animate, scope, duration, delay]);

  return (
    <div
      ref={scope}
      className={className}
      data-animate
      style={{ opacity: initialOpacity, transform: "translateY(20px)" }}
    >
      {children}
    </div>
  );
}
