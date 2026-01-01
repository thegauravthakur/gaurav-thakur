import { default as NextLink } from "next/link";
import { cn } from "@/app/utilities/tailwind";
import { ComponentProps } from "react";

interface LinkProps extends ComponentProps<typeof NextLink> {}

export function Link({ className, ...props }: LinkProps) {
  const isExternal = (props.href as string)?.startsWith("http");

  return (
    <NextLink
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      {...props}
      className={cn(
        "text-red-600 underline decoration-red-200 underline-offset-2 hover:decoration-red-600 active:opacity-60",
        "hover:decoration-red-400 dark:text-red-400 dark:decoration-red-300",
        "transition-[color,opacity] duration-150 ease-out",
        className,
      )}
    />
  );
}
