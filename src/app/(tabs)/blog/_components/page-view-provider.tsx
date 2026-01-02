"use client";

import { createContext, ReactNode, useEffect, useState } from "react";

interface PageViewResponse {
  counts: Record<string, number>;
  lastUpdated: string;
  totalPageviews: number;
}

async function fetchBlogPageView(signal: AbortSignal) {
  const isPROD = process.env.NODE_ENV === "production";
  const response = await fetch(
    isPROD
      ? "https://bucket.gauravthakur.com/pageviews.json"
      : "/pageviews.json",
    { signal },
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch page view data: ${response.status}`);
  }

  const data: PageViewResponse = await response.json();
  return data;
}

export const PageViewContext = createContext<PageViewResponse | null>(null);

interface PageViewContextProps {
  children: ReactNode;
}

export function PageViewProvider({ children }: PageViewContextProps) {
  const [pageViewData, setPageViewData] = useState<PageViewResponse | null>(
    null,
  );

  useEffect(() => {
    const abortController = new AbortController();

    const timeout = setTimeout(() => {
      const signal = abortController.signal;

      fetchBlogPageView(signal).then(setPageViewData);
    }, 0);

    return () => {
      abortController.abort();
      clearTimeout(timeout);
    };
  }, []);

  return (
    <PageViewContext.Provider value={pageViewData}>
      {children}
    </PageViewContext.Provider>
  );
}
