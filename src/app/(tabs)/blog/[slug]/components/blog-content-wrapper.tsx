import { cn } from "@/app/utilities/tailwind";
import { proseStyles } from "@/app/_styles/common";
import { ReactNode } from "react";
import { TableOfContents } from "./table-of-contents";
import type { Heading } from "@/app/utilities/extract-headings";

interface BlogContentWrapperProps {
  children: ReactNode;
  headings?: Heading[];
}

interface ContentWrapperProps {
  children: ReactNode;
  className?: string;
}

export function ContentWrapper({ children, className }: ContentWrapperProps) {
  return (
    <div className="mx-auto max-w-[100vw] md:max-w-3xl">
      <main
        className={cn(
          "mt-12 mb-10 max-w-none px-4 md:mt-20 md:px-6",
          className,
        )}
      >
        {children}
      </main>
    </div>
  );
}

export function BlogContentWrapper({
  children,
  headings = [],
}: BlogContentWrapperProps) {
  const hasTOC = headings.length > 0;

  return (
    <div className="mx-auto max-w-[100vw] xl:max-w-6xl">
      <div
        className={cn(
          "relative",
          hasTOC && "xl:grid xl:grid-cols-[1fr_200px] xl:gap-8",
        )}
      >
        <main
          className={cn(
            "mx-auto mt-12 mb-10 w-full max-w-3xl px-4 md:mt-20 md:px-6",
            proseStyles,
          )}
        >
          {children}
        </main>

        {hasTOC && (
          <div className="hidden xl:block">
            <div className="sticky top-32 mt-60">
              <TableOfContents headings={headings} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
