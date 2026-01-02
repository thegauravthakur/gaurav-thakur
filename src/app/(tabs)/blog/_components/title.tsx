import { cn } from "@/app/utilities/tailwind";
import { format } from "date-fns";
import { RelativeTime } from "./relative-time";

interface TitleProps {
  title: string;
  createdAt: string;
}

export function Title({ title, createdAt }: TitleProps) {
  const formattedDate = format(createdAt, "MMMM d, yyyy");

  return (
    <header className={cn("space-y-2")}>
      <h1 className="mb-0">{title}</h1>
      <p className="not-prose mt-4 flex items-center gap-x-2 text-sm text-gray-500 md:gap-x-1 md:font-mono dark:text-gray-400">
        <span className="hidden md:inline-block">By Gaurav Thakur</span>
        <span className="hidden md:inline-block">|</span>
        <span>{formattedDate}</span>
        <RelativeTime date={createdAt} />
      </p>
    </header>
  );
}
