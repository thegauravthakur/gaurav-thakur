import { DetailedHTMLProps, ElementType, HTMLAttributes } from "react";
import { cn } from "@/app/utilities/tailwind";
import Link from "next/link";
import { IoIosLink } from "react-icons/io";

interface HeadingProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

export function Heading({ level, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as ElementType;

  return (
    <Tag
      {...props}
      className={cn(props.className, "group flex items-center gap-x-2")}
    >
      {children}
      <Link
        href={`#${props.id}`}
        className="opacity-0 transition-opacity duration-200 focus-within:opacity-100 group-hover:opacity-100"
      >
        <IoIosLink size={20} />
        <span className="sr-only">Link to heading</span>
      </Link>
    </Tag>
  );
}
