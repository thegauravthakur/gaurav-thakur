import { TOCActiveLinks } from "./toc-active-links";
import type { Heading } from "@/app/utilities/extract-headings";

interface TableOfContentsProps {
  headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  if (headings.length === 0) return null;

  return (
    <div className="border-l border-gray-200 pl-4 dark:border-gray-700">
      <h2 className="mb-4 text-base font-semibold tracking-wider text-gray-950 uppercase dark:text-white">
        On this page
      </h2>
      <TOCActiveLinks headings={headings} />
    </div>
  );
}
