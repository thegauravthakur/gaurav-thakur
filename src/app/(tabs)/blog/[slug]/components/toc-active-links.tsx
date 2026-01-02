"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { cn } from "@/app/utilities/tailwind";
import type { Heading } from "@/app/utilities/extract-headings";

interface TOCActiveLinksProps {
  headings: Heading[];
}

export function TOCActiveLinks({ headings }: TOCActiveLinksProps) {
  const [activeId, setActiveId] = useState<string>("");
  const observerRef = useRef<IntersectionObserver | null>(null);
  // Track which heading IDs are currently visible (intersecting)
  const visibleIdsRef = useRef<Set<string>>(new Set());

  // Calculate active heading from fresh DOM positions
  const updateActiveHeading = useCallback(() => {
    const visibleIds = visibleIdsRef.current;

    if (visibleIds.size === 0) return;

    // Get fresh positions for all visible headings
    const visibleWithPositions: { id: string; top: number }[] = [];

    visibleIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const rect = element.getBoundingClientRect();
        visibleWithPositions.push({ id, top: rect.top });
      }
    });

    if (visibleWithPositions.length > 0) {
      // Sort by position and get the topmost visible heading
      visibleWithPositions.sort((a, b) => a.top - b.top);
      setActiveId(visibleWithPositions[0].id);
    }
  }, []);

  useEffect(() => {
    // Get all heading elements that match our headings
    const headingElements = headings
      .map((heading) => document.getElementById(heading.id))
      .filter(Boolean) as HTMLElement[];

    if (headingElements.length === 0) return;

    // Set initial active heading
    setActiveId(headings[0]?.id ?? "");

    // Create IntersectionObserver - only tracks visibility, not positions
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Update visible set based on intersection changes
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleIdsRef.current.add(entry.target.id);
          } else {
            visibleIdsRef.current.delete(entry.target.id);
          }
        });

        // Calculate active from fresh positions
        updateActiveHeading();
      },
      {
        // Trigger when heading enters top 90% of viewport
        rootMargin: "0px 0px -10% 0px",
        threshold: 0,
      },
    );

    // Observe all heading elements
    headingElements.forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => {
      observerRef.current?.disconnect();
      visibleIdsRef.current.clear();
    };
  }, [headings, updateActiveHeading]);

  function handleClick(
    e: React.MouseEvent<HTMLAnchorElement>,
    headingId: string,
  ) {
    e.preventDefault();
    const element = document.getElementById(headingId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      // Update URL without triggering scroll
      window.history.pushState(null, "", `#${headingId}`);
    }
  }

  if (headings.length === 0) return null;

  // Check if there's at least one h2 in the list (for contextual h3 indentation)
  const hasH2 = headings.some((h) => h.level === 2);

  return (
    <nav aria-label="Table of contents">
      <ul className="space-y-1.5">
        {headings.map((heading, index) => {
          const isActive = activeId === heading.id;
          const isH3 = heading.level === 3;
          // Only indent h3 if there's a preceding h2 in the list
          const hasPrecedingH2 =
            hasH2 && headings.slice(0, index).some((h) => h.level === 2);
          const shouldIndent = isH3 && hasPrecedingH2;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={(e) => handleClick(e, heading.id)}
                className={cn(
                  "block py-1 transition-all duration-200 ease-out",
                  shouldIndent ? "pl-3" : "",
                  isH3 ? "text-sm" : "text-[15px]",
                  isActive
                    ? "text-red-600 dark:text-red-400"
                    : "text-gray-950 opacity-70 hover:opacity-100 dark:text-gray-300 dark:hover:text-gray-200",
                )}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
