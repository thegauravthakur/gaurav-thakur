"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utilities/tailwind";
import { InteractiveDemo } from "./interactive-demo";

type Pattern = "csr" | "ssr" | "rsc";

interface TimelineSegment {
  label: string;
  duration: number; // relative units
  color: string;
  description: string;
}

const patterns: Record<
  Pattern,
  { label: string; segments: TimelineSegment[] }
> = {
  csr: {
    label: "Client-Side Rendering",
    segments: [
      {
        label: "HTML Shell",
        duration: 1,
        color: "bg-zinc-400",
        description: "Empty HTML with script tags",
      },
      {
        label: "JS Bundle",
        duration: 2,
        color: "bg-amber-500",
        description: "Download & parse JavaScript",
      },
      {
        label: "Data Fetch",
        duration: 2,
        color: "bg-rose-500",
        description: "useEffect → API call",
      },
      {
        label: "Render",
        duration: 1,
        color: "bg-emerald-500",
        description: "Final UI appears",
      },
    ],
  },
  ssr: {
    label: "SSR (with Streaming)",
    segments: [
      {
        label: "Server Render",
        duration: 2,
        color: "bg-blue-500",
        description: "Fetch data, generate HTML",
      },
      {
        label: "Stream HTML",
        duration: 1.5,
        color: "bg-emerald-500",
        description: "renderToPipeableStream",
      },
      {
        label: "Hydration",
        duration: 2,
        color: "bg-amber-500",
        description: "Full JS bundle for all components",
      },
    ],
  },
  rsc: {
    label: "React Server Components",
    segments: [
      {
        label: "Server Render",
        duration: 2,
        color: "bg-blue-500",
        description: "Fetch + render on server",
      },
      {
        label: "Stream HTML",
        duration: 1.5,
        color: "bg-emerald-500",
        description: "Progressive HTML delivery",
      },
      {
        label: "Selective Hydration",
        duration: 1,
        color: "bg-amber-500/60",
        description: "Only client components",
      },
    ],
  },
};

function Timeline({
  pattern,
  isActive,
}: {
  pattern: Pattern;
  isActive: boolean;
}) {
  const { label, segments } = patterns[pattern];
  const totalDuration = segments.reduce((sum, s) => sum + s.duration, 0);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span
          className={cn(
            "text-sm font-medium transition-colors",
            isActive
              ? "text-zinc-900 dark:text-zinc-100"
              : "text-zinc-500 dark:text-zinc-500",
          )}
        >
          {label}
        </span>
      </div>

      <div className="flex h-10 gap-0.5 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
        {segments.map((segment, i) => (
          <motion.div
            key={segment.label}
            initial={{ width: 0 }}
            animate={{
              width: isActive
                ? `${(segment.duration / totalDuration) * 100}%`
                : 0,
            }}
            transition={{ duration: 0.5, delay: isActive ? i * 0.15 : 0 }}
            className={cn(
              "relative flex items-center justify-center overflow-hidden",
              segment.color,
            )}
          >
            {isActive && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="truncate px-2 text-xs font-medium text-white"
              >
                {segment.label}
              </motion.span>
            )}
          </motion.div>
        ))}
      </div>

      {isActive && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3"
        >
          {segments.map((segment) => (
            <div key={segment.label} className="flex items-center gap-1.5">
              <div className={cn("h-2.5 w-2.5 rounded-full", segment.color)} />
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {segment.description}
              </span>
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function WaterfallContent() {
  const [activePattern, setActivePattern] = useState<Pattern>("csr");

  return (
    <>
      {/* Pattern Selector */}
      <div className="flex gap-1 border-b border-zinc-200 bg-zinc-50 p-2 dark:border-zinc-700 dark:bg-zinc-800/50">
        {(Object.keys(patterns) as Pattern[]).map((pattern) => (
          <button
            key={pattern}
            onClick={() => setActivePattern(pattern)}
            className={cn(
              "rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
              activePattern === pattern
                ? "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400"
                : "text-zinc-600 hover:bg-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700",
            )}
          >
            {pattern.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Timelines */}
      <div className="space-y-6 bg-white p-4 dark:bg-zinc-900">
        {(Object.keys(patterns) as Pattern[]).map((pattern) => (
          <Timeline
            key={pattern}
            pattern={pattern}
            isActive={activePattern === pattern}
          />
        ))}
      </div>

      {/* Time to First Meaningful Paint */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800/50">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {activePattern === "csr" &&
            "CSR has the longest time to meaningful content — user sees loading spinners while JS downloads and data fetches."}
          {activePattern === "ssr" &&
            "SSR can stream HTML with renderToPipeableStream, but hydration still requires downloading JS for all components."}
          {activePattern === "rsc" &&
            "RSC streams HTML and only sends JS for client components — smallest bundle, fastest interactivity."}
        </p>
      </div>
    </>
  );
}

export function RequestWaterfallDemo() {
  return <WaterfallContent />;
}
