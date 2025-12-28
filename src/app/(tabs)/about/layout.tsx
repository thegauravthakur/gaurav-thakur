import { ReactNode } from "react";
import { BlogContentWrapper } from "@/app/(tabs)/blog/[slug]/components/blog-content-wrapper";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return <BlogContentWrapper>{children}</BlogContentWrapper>;
}

export const metadata: Metadata = {
  title: "About",
  description:
    "Frontend engineer at Zepto from Kullu, Himachal Pradesh. Building things for the web with React, Next.js, and TypeScript.",
  alternates: {
    canonical: "https://gauravthakur.com/about",
  },
};
