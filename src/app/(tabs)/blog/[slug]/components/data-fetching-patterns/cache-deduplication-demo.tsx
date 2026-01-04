"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/app/utilities/tailwind";
import { InteractiveDemo } from "./interactive-demo";

interface ComponentNodeProps {
  name: string;
  depth: number;
  showsRequest: boolean;
  isCached: boolean;
  usesCache: boolean;
}

function ComponentNode({
  name,
  depth,
  showsRequest,
  isCached,
  usesCache,
}: ComponentNodeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: depth * 0.1 }}
      className="flex items-center gap-3 py-2"
      style={{ paddingLeft: `${depth * 24}px` }}
    >
      <div className="flex items-center gap-2 rounded-lg bg-zinc-100 px-3 py-2 font-mono text-sm dark:bg-zinc-800">
        <span className="text-zinc-600 dark:text-zinc-400">{"<"}</span>
        <span className="text-rose-600 dark:text-rose-400">{name}</span>
        <span className="text-zinc-600 dark:text-zinc-400">{" />"}</span>
      </div>

      {showsRequest && (
        <AnimatePresence mode="wait">
          {!usesCache || !isCached ? (
            <motion.div
              key="fetching"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1.5"
            >
              <motion.div
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className={cn(
                  "h-2.5 w-2.5 rounded-full",
                  usesCache ? "bg-emerald-500" : "bg-red-500",
                )}
              />
              <span className="text-xs text-zinc-500 dark:text-zinc-400">
                {usesCache ? "fetch (1×)" : "fetch"}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="cached"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              className="flex items-center gap-1.5"
            >
              <div className="h-2.5 w-2.5 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <span className="text-xs font-medium text-emerald-600 dark:text-emerald-400">
                cached ✓
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}

function CacheDemoContent() {
  const [usesCache, setUsesCache] = useState(false);

  const components = [
    { name: "Page", depth: 0, showsRequest: false },
    { name: "Layout", depth: 1, showsRequest: false },
    { name: "ProductCard", depth: 2, showsRequest: true, isCached: false },
    { name: "ProductCard", depth: 2, showsRequest: true, isCached: true },
    { name: "Footer", depth: 2, showsRequest: false },
    { name: "ProductCard", depth: 3, showsRequest: true, isCached: true },
    { name: "ProductCard", depth: 3, showsRequest: true, isCached: true },
  ];

  const requestCount = usesCache
    ? 1
    : components.filter((c) => c.showsRequest).length;

  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-50 px-4 py-3 dark:border-zinc-700 dark:bg-zinc-800/50">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
            getUserPreferences()
          </span>
          <motion.span
            key={requestCount}
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            className={cn(
              "rounded-full px-2 py-0.5 font-mono text-xs",
              usesCache
                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
                : "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
            )}
          >
            {requestCount} request{requestCount > 1 ? "s" : ""}
          </motion.span>
        </div>

        {/* Toggle */}
        <button
          onClick={() => setUsesCache(!usesCache)}
          className={cn(
            "relative rounded-lg px-3 py-1.5 text-sm font-medium transition-colors",
            usesCache
              ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400"
              : "bg-zinc-200 text-zinc-600 dark:bg-zinc-700 dark:text-zinc-400",
          )}
        >
          {usesCache ? "cache() enabled" : "No cache()"}
        </button>
      </div>

      {/* Component Tree */}
      <div className="bg-white p-4 dark:bg-zinc-900">
        {components.map((comp, i) => (
          <ComponentNode
            key={i}
            name={comp.name}
            depth={comp.depth}
            showsRequest={comp.showsRequest}
            isCached={comp.isCached ?? false}
            usesCache={usesCache}
          />
        ))}
      </div>

      {/* Footer hint */}
      <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-2 dark:border-zinc-700 dark:bg-zinc-800/50">
        <p className="text-xs text-zinc-500 dark:text-zinc-400">
          {usesCache
            ? "With cache(), identical calls reuse the same result within a render cycle."
            : "Without cache(), each component triggers a separate network request."}
        </p>
      </div>
    </>
  );
}

export function CacheDeduplicationDemo() {
  return (
    <InteractiveDemo title="See how cache() deduplicates requests">
      <CacheDemoContent />
    </InteractiveDemo>
  );
}

