import { Header } from "@/app/_components/header";
import { Fragment, ReactNode, ViewTransition } from "react";
import { Metadata } from "next";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return (
    <Fragment>
      <ViewTransition>
        <Header />
      </ViewTransition>
      {children}
    </Fragment>
  );
}

export const metadata: Metadata = {
  title: "Gaurav's Blog",
  description:
    "Hi, welcome to the personal blog of Gaurav. I write about things I learn, things I find interesting and things I find useful.",
  openGraph: {
    title: "Gaurav's Blog",
    description:
      "Hi, welcome to the personal blog of Gaurav. I write about things I learn, things I find interesting and things I find useful.",
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
