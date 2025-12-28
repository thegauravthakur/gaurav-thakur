import { Fragment, ReactNode } from "react";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return <Fragment>{children}</Fragment>;
}

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Software Engineer with 4+ years of experience in frontend development. Currently at Zepto working on web performance. Skills: React, Next.js, TypeScript, TailwindCSS.",
  alternates: {
    canonical: "https://gauravthakur.com/resume",
  },
  openGraph: {
    title: "Resume - Gaurav Thakur",
    description:
      "Software Engineer with 4+ years of experience in frontend development. Currently at Zepto working on web performance.",
  },
};
