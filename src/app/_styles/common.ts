import { cn } from "@/app/utilities/tailwind";

export const iconStyles = cn(
  "rounded-full p-2 outline-red-600 hover:bg-red-50 dark:hover:bg-white/10 transition-colors duration-300 ease-in-out dark:text-white",
);

export const linkStyles = cn(
  "hover:text-red-600 transition-colors outline-red-600 hover:underline block dark:hover:text-red-400 dark:outline-red-400",
);

export const proseStyles = cn(
  "transition-opacity duration-150",
  "prose-a:font-medium prose-a:text-red-600 prose-a:underline prose-a:decoration-red-200 prose-a:underline-offset-2 prose-a:hover:decoration-red-600 prose-a:active:opacity-60",
  "dark:prose-a:text-red-400 dark:prose-a:decoration-red-300 dark:prose-a:hover:decoration-red-400",
  "prose prose-pre:border dark:prose-invert",
  "prose-img:rounded-lg",
);
