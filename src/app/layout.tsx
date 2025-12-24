import type { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import { cn } from "@/app/utilities/tailwind";

import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={cn(
          geistSans.variable,
          geistMono.variable,
          "flex min-h-dvh flex-col",
        )}
      >
        {children}
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: "Gaurav Thakur",
  description:
    "Hey there, My name is Gaurav Thakur. I'm a frontend engineer with a passion for web technologies. I create beautiful, performant and accessible web experiences for all.",
  alternates: {
    canonical: "https://garuavthakur.com",
  },
  openGraph: {
    title: "Gaurav Thakur",
    description:
      "Hey there, My name is Gaurav Thakur. I'm a frontend engineer with a passion for web technologies. I create beautiful, performant and accessible web experiences for all.",
    images: [
      {
        url: "https://res.cloudinary.com/gauravthakur/image/upload/s--RQWMnUhR--/f_auto,q_auto/v1/blog/twtcjh6eodnoveygvscm",
        width: 1200,
        height: 630,
        alt: "Gaurav Thakur",
      },
    ],
  },
};
