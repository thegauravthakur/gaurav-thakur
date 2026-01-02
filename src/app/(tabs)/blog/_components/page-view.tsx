"use client";

import { useContext } from "react";
import { useParams } from "next/navigation";
import { PageViewContext } from "@/app/(tabs)/blog/_components/page-view-provider";

export function PageView() {
  const { slug } = useParams<{ slug: string }>() ?? {};
  const { counts = {} } = useContext(PageViewContext) || {};

  const count = counts[slug] || 0;

  return <span>{count + 1500} views</span>;
}
