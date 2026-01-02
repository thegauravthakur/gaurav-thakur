import { Fragment, ReactNode } from "react";
import { Metadata } from "next";
import { PageViewProvider } from "@/app/(tabs)/blog/_components/page-view-provider";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return (
    <Fragment>
      <PageViewProvider>{children}</PageViewProvider>
    </Fragment>
  );
}

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about web development, React, Next.js, TypeScript, and things I learn along the way.",
  alternates: {
    canonical: "https://gauravthakur.com/blog",
  },
  openGraph: {
    title: "Gaurav's Blog",
    description:
      "Articles about web development, React, Next.js, TypeScript, and things I learn along the way.",
    images: [
      {
        url: "https://res.cloudinary.com/gauravthakur/image/upload/s--Px_L7Ow3--/f_auto,q_auto/v1/blog/jye1cxp2bkyxtcufmq7k",
        width: 1200,
        height: 630,
        alt: "Gaurav Thakur",
      },
    ],
  },
};
