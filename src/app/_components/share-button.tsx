"use client";

import { cn } from "@/app/utilities/tailwind";
import { iconStyles } from "@/app/_styles/common";
import { GoShare } from "react-icons/go";

interface ShareButtonProps {
  title: string;
  text: string;
  url: string;
}

export function ShareButton({ title, text, url }: ShareButtonProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
      } catch (error) {
        // User cancelled or share failed - silently ignore
        if ((error as Error).name !== "AbortError") {
          console.error("Share failed:", error);
        }
      }
    } else {
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(url);
      } catch {
        console.error("Failed to copy to clipboard");
      }
    }
  };

  return (
    <button
      className={cn(iconStyles)}
      type="button"
      aria-label="Share"
      onClick={handleShare}
    >
      <GoShare fontSize={22} />
    </button>
  );
}

