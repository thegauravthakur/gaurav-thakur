"use client";

import { Toggle } from "@base-ui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { iconStyles } from "@/app/_styles/common";

export function ThemeSwitchButton() {
  function onThemeChange() {
    const isDarkMode = document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", !isDarkMode);
  }

  return (
    <Toggle
      aria-label="Favorite"
      onPressedChange={onThemeChange}
      className={iconStyles}
      render={(props, state) => {
        if (state.pressed) {
          return (
            <button type="button" {...props}>
              <SunIcon className="size-5" />
            </button>
          );
        }

        return (
          <button type="button" {...props}>
            <MoonIcon className="size-5" />
          </button>
        );
      }}
    />
  );
}
