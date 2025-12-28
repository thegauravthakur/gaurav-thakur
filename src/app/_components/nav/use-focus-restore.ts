"use client";

import { useEffect, useRef, useCallback, FocusEvent } from "react";
import { usePathname } from "next/navigation";

const FOCUS_STORAGE_KEY = "nav-focus-href";

/**
 * Hook to restore keyboard focus on nav items after route changes.
 *
 * When navigating between route groups (e.g., from (tabs) to home),
 * the Nav component remounts, losing focus. This hook:
 * 1. Saves the focused nav item's href on keyboard focus
 * 2. Restores focus after navigation when the component remounts
 */
export function useFocusRestore(href: string) {
  const linkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const hasRestoredRef = useRef(false);

  // Restore focus on mount if this item was previously focused
  useEffect(() => {
    // Only run once per mount
    if (hasRestoredRef.current) return;

    const storedHref = sessionStorage.getItem(FOCUS_STORAGE_KEY);
    if (storedHref === href && linkRef.current) {
      // Use requestAnimationFrame to ensure DOM is ready
      requestAnimationFrame(() => {
        linkRef.current?.focus();
        // Clear the stored focus to prevent re-focusing on subsequent renders
        sessionStorage.removeItem(FOCUS_STORAGE_KEY);
      });
      hasRestoredRef.current = true;
    }
  }, [href, pathname]);

  // Save focus state when this item receives keyboard focus
  const handleFocus = useCallback(
    (event: FocusEvent) => {
      // Only save if focus came from keyboard navigation (not mouse click)
      // Check if keyboard triggered the focus event by looking at :focus-visible
      const target = event.target as HTMLElement;
      if (target.matches(":focus-visible")) {
        sessionStorage.setItem(FOCUS_STORAGE_KEY, href);
      }
    },
    [href],
  );

  return { linkRef, handleFocus };
}
