import { cn } from "@/app/utilities/tailwind";
import { proseStyles } from "@/app/_styles/common";
import { ReactNode } from "react";

interface BlogContentWrapperProps {
  children: ReactNode;
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

export function BlogContentWrapper({ children }: BlogContentWrapperProps) {
  return <ContentWrapper className={proseStyles}>{children}</ContentWrapper>;
  // return (
  //   <div className="mx-auto max-w-[100vw] md:max-w-3xl">
  //     <main
  //       className={cn(
  //         "mt-12 mb-10 max-w-none px-4 md:mt-20 md:px-6",
  //         proseStyles,
  //       )}
  //     >
  //       {children}
  //     </main>
  //   </div>
  // );
}
