"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { cn } from "@/app/utilities/tailwind";

const segments = [
  {
    label: "Server Fetch + Render",
    duration: 2.5,
    color: "bg-blue-500",
    description: "Fetch data, generate HTML on server",
  },
  {
    label: "Stream HTML",
    duration: 1.5,
    color: "bg-emerald-500",
    description: "Full HTML sent to browser",
  },
  {
    label: "Hydration",
    duration: 2,
    color: "bg-amber-500",
    description: "Re-render all components for interactivity",
  },
];

export function SSRWaterfallDemo() {
  const [animationKey, setAnimationKey] = useState(0);
  const totalDuration = segments.reduce((sum, s) => sum + s.duration, 0);

  const replay = () => setAnimationKey((k) => k + 1);

  return (
    <div className="not-prose my-8 overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-700">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/50">
        <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
          Server-Side Rendering Timeline
        </span>
        <button
          type="button"
          onClick={replay}
          className="flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-zinc-500 transition-colors hover:bg-zinc-200 hover:text-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-zinc-200"
        >
          <ArrowPathIcon className="h-3.5 w-3.5" />
          Replay
        </button>
      </div>

      {/* Timeline */}
      <div className="bg-white p-4 dark:bg-zinc-900">
        <div className="space-y-3" key={animationKey}>
          {/* Timeline bar */}
          <div className="flex h-12 gap-0.5 overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
            {segments.map((segment, i) => (
              <motion.div
                key={segment.label}
                initial={{ width: 0 }}
                animate={{ width: `${(segment.duration / totalDuration) * 100}%` }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className={cn(
                  "relative flex items-center justify-center overflow-hidden",
                  segment.color,
                )}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 + i * 0.2 }}
                  className="truncate px-2 text-xs font-medium text-white"
                >
                  {segment.label}
                </motion.span>
              </motion.div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-x-4 gap-y-1">
            {segments.map((segment) => (
              <div key={segment.label} className="flex items-center gap-1.5">
                <div className={cn("h-2.5 w-2.5 rounded-full", segment.color)} />
                <span className="text-xs text-zinc-500 dark:text-zinc-400">
                  {segment.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800/50">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          User sees meaningful content faster, but hydration still requires downloading JS for all components.
        </p>
      </div>
    </div>
  );
}

