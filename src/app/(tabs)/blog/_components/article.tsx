import Link from "next/link";
import { cn } from "@/app/utilities/tailwind";
import { format } from "date-fns";

interface ArticleProps {
  title: string;
  description: string;
  createdAt: string;
  slug: string;
  readingTime: number;
}

export function Article({
  title,
  description,
  createdAt,
  slug,
  readingTime,
}: ArticleProps) {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        "group inline-block h-full rounded-lg border outline-red-600 transition-transform",
        "duration-150 active:scale-95",
      )}
    >
      <article className={cn("flex h-full flex-col gap-y-4 p-5")} key={title}>
        <header>
          <h3 className="font-semibold group-hover:text-red-600 group-hover:underline">
            {title}
          </h3>
        </header>
        <p className="flex-1 text-sm leading-7">{description}</p>
        <footer className="flex items-center justify-between text-sm">
          <p>{format(createdAt, "MMMM d, yyyy")}</p>
          <p>{readingTime} minutes read</p>
        </footer>
      </article>
    </Link>
  );
}
