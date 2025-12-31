import { Fragment, ReactNode } from "react";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return <Fragment>{children}</Fragment>;
}

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Side projects and open source work by Gaurav Thakur. Including Ensite for OG image generation and Vicks, a lightweight fetch wrapper.",
  alternates: {
    canonical: "https://gauravthakur.com/projects",
  },
  openGraph: {
    title: "Projects - Gaurav Thakur",
    description:
      "Side projects and open source work by Gaurav Thakur. Including Ensite for OG image generation and Vicks, a lightweight fetch wrapper.",
  },
};
