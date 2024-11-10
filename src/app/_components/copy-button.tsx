"use client";

import { ButtonHTMLAttributes } from "react";

interface CopyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export function CopyButton({ text, ...rest }: CopyButtonProps) {
  return (
    <button
      {...rest}
      onClick={async (event) => {
        await navigator.clipboard.writeText(text);
        if (rest.onClick) {
          rest.onClick(event);
        }
      }}
    />
  );
}
