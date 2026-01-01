"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/utilities/tailwind";

interface ThemeSwitchButtonProps {
  size?: "medium" | "large";
}

const sizeStyles = {
  medium: {
    button: "size-9",
    icon: "size-5",
  },
  large: {
    button: "size-11",
    icon: "size-6",
  },
};

export function ThemeSwitchButton({ size = "medium" }: ThemeSwitchButtonProps) {
  // Always start with null to ensure consistent SSR/hydration
  const [isDark, setIsDark] = useState<boolean | null>(null);

  const styles = sizeStyles[size];

  // Initialize theme on client mount only
  useEffect(() => {
    // Check localStorage first
    const saved = localStorage.getItem("theme");
    if (saved) {
      setIsDark(saved === "dark");
      return;
    }

    // Fall back to system preference
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  // Apply theme to DOM when isDark changes
  useEffect(() => {
    if (isDark === null) return;

    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  }, [isDark]);

  // Listen for system preference changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't set a preference
      if (!localStorage.getItem("theme")) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  function toggleTheme() {
    setIsDark((prev) => !prev);
  }

  // Don't render until we know the theme (prevents flash)
  if (isDark === null) {
    return <div className={styles.button} />; // Placeholder with same size
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative flex cursor-pointer items-center justify-center rounded-full",
        styles.button,
        "text-gray-600 dark:text-gray-400",
        "transition-colors duration-200 ease-out",
        "hover:bg-gray-100 hover:text-gray-900",
        "dark:hover:bg-white/10 dark:hover:text-white",
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className={styles.icon}
            initial={{ scale: 0, rotate: -90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className={styles.icon}
            initial={{ scale: 0, rotate: 90, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            exit={{ scale: 0, rotate: -90, opacity: 0 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </motion.svg>
        )}
      </AnimatePresence>
    </button>
  );
}
