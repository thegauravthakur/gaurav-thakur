import NextLink, { LinkProps } from "next/link";
import { AnchorHTMLAttributes, DetailedHTMLProps } from "react";

export function Link(
  props: DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
) {
  const isExternal = props.href?.startsWith("http");
  return (
    <NextLink
      {...(props as LinkProps)}
      target={props.target || isExternal ? "_blank" : undefined}
      rel={props.target || isExternal ? "noopener noreferrer" : undefined}
    />
  );
}
