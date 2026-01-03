"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { PageViewContext } from "@/app/(tabs)/blog/_components/page-view/page-view-provider";

export function PageView() {
  const { slug } = useParams<{ slug: string }>() ?? {};
  const { counts = {} } = useContext(PageViewContext) || {};

  const count = counts[slug];

  if (!count) return null;

  return <span>{count} views</span>;
}
