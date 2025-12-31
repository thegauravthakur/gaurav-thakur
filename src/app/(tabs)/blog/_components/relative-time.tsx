"use client";

import { useEffect, useState } from "react";
import { formatDistanceToNowStrict } from "date-fns";

interface RelativeTimeProps {
  date: string;
}

function toShortForm(distance: string): string {
  return distance
    .replace(/ seconds? ago/, "s ago")
    .replace(/ minutes? ago/, "m ago")
    .replace(/ hours? ago/, "h ago")
    .replace(/ days? ago/, "d ago")
    .replace(/ weeks? ago/, "w ago")
    .replace(/ months? ago/, "mo ago")
    .replace(/ years? ago/, "y ago");
}

export function RelativeTime({ date }: RelativeTimeProps) {
  const [relativeTime, setRelativeTime] = useState<string | null>(null);

  useEffect(() => {
    const distance = formatDistanceToNowStrict(new Date(date), {
      addSuffix: true,
    });
    setRelativeTime(toShortForm(distance));
  }, [date]);

  if (!relativeTime) return null;

  return <span>({relativeTime})</span>;
}
