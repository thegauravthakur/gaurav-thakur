import { cn } from "@/app/utilities/tailwind";
import { proseStyles } from "@/app/_styles/common";
import { ReactNode } from "react";

interface BlogContentWrapperProps {
  children: ReactNode;
}

export function BlogContentWrapper({ children }: BlogContentWrapperProps) {
  return (
    <div className="mx-auto max-w-[100vw] md:max-w-3xl">
      <main
        className={cn(
          "mt-12 mb-10 max-w-none px-4 md:mt-20 md:px-6",
          proseStyles,
        )}
      >
        {children}
      </main>
    </div>
  );
}
