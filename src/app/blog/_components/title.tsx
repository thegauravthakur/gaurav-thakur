import { cn } from "@/app/utilities/tailwind";
import { format } from "date-fns";

interface TitleProps {
  title: string;
  createdAt: string;
}

export function Title({ title, createdAt }: TitleProps) {
  return (
    <header className={cn("mb-8 space-y-2")}>
      <h1 className="mb-0">{title}</h1>
      <p className="not-prose mt-4 text-sm md:text-base">
        {format(createdAt, "MMMM d, yyyy")}
      </p>
    </header>
  );
}
