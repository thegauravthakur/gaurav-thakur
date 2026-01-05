"use client";

import { DocSearch, useDocSearch } from "@docsearch/core";
import type { DocSearchModal as DocSearchModalType } from "@docsearch/modal/modal";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useTransition } from "react";
import { motion } from "framer-motion";
import { cn } from "@/app/utilities/tailwind";
import { FaSpinner } from "react-icons/fa";
let DocSearchModal: typeof DocSearchModalType | null = null;

async function importDocSearchModalIfNeeded() {
  if (DocSearchModal) {
    return;
  }

  const { DocSearchModal: Modal } = await import("@docsearch/modal/modal");
  DocSearchModal = Modal;
}

const sizeStyles = {
  medium: {
    button: "size-9",
    icon: "size-5",
  },
  large: {
    button: "size-11",
    icon: "size-6",
  },
};

interface SearchProps {
  size?: "medium" | "large";
}

export function Search({ size = "medium" }: SearchProps) {
  const [modalLoaded, setModalLoaded] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  return (
    <DocSearch theme={theme}>
      <DocSearchTrigger
        size={size}
        setModalLoaded={setModalLoaded}
        setTheme={setTheme}
      />
      {modalLoaded && DocSearchModal && (
        <DocSearchModal
          appId="5R700OUTBE"
          indices={["Gaurav Thakur"]}
          apiKey="7c8b83718b056d18927d0b6c223e5ba6"
        />
      )}
    </DocSearch>
  );
}

interface DocSearchTriggerProps {
  setModalLoaded: (value: boolean) => void;
  setTheme: (value: "dark" | "light") => void;
  size: "medium" | "large";
}

function DocSearchTrigger({
  setModalLoaded,
  setTheme,
  size,
}: DocSearchTriggerProps) {
  const [isPending, startTransition] = useTransition();
  const { openModal } = useDocSearch();

  function applyCorrectTheme() {
    const theme = document.documentElement.classList.contains("dark");
    setTheme(theme ? "dark" : "light");
  }

  function applyCorrectStyles() {
    const alreadyExists = document.getElementById("docsearch-css");
    if (alreadyExists) return;

    const link = "https://cdn.jsdelivr.net/npm/@docsearch/css@4";
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    linkElement.href = link;
    linkElement.id = "docsearch-css";
    document.head.appendChild(linkElement);

    return new Promise((resolve) => setTimeout(resolve, 80));
  }

  const loadModal = async () => {
    openModal();
    await applyCorrectStyles();
    applyCorrectTheme();
    await importDocSearchModalIfNeeded();
    setModalLoaded(true);
  };

  return (
    <motion.button
      onClick={() => {
        startTransition(loadModal);
      }}
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-full",
        "size-9 transition-colors duration-200 ease-out",
        "hover:bg-gray-100 hover:text-gray-900",
        "dark:hover:bg-white/10 dark:hover:text-white",
        sizeStyles[size].button,
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {isPending ? (
        <FaSpinner
          className={cn(sizeStyles[size].icon, "animate-spin duration-100")}
        />
      ) : (
        <MagnifyingGlassIcon className={sizeStyles[size].icon} />
      )}
    </motion.button>
  );
}
