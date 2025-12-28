import { cn } from "@/app/utilities/tailwind";

export const iconStyles = cn(
  "rounded-full p-2 outline-red-600 hover:bg-red-50 transition-colors duration-300 ease-in-out",
);

export const linkStyles = cn(
  "hover:text-red-600 transition-colors duration-200 ease-in-out outline-red-600 hover:underline block active:scale-90 transition-transform duration-250",
);

export const proseStyles = cn(
  "prose-a:font-medium prose-a:text-red-600 prose-a:underline prose-a:decoration-red-200 prose-a:underline-offset-2 prose-a:hover:decoration-red-600",
  "prose prose-pre:border",
  "prose-img:rounded-lg",
);
