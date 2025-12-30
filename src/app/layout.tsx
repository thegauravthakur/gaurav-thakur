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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gaurav Thakur",
  url: "https://gauravthakur.com",
  image:
    "https://res.cloudinary.com/gauravthakur/image/upload/s--RQWMnUhR--/f_auto,q_auto/v1/blog/twtcjh6eodnoveygvscm",
  jobTitle: "Software Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Zepto",
  },
  sameAs: [
    "https://twitter.com/AskGauravThakur",
    "https://linkedin.com/in/AskGauravThakur",
    "https://github.com/AskGauravThakur",
  ],
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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

const siteConfig = {
  name: "Gaurav Thakur",
  description:
    "Frontend engineer at Zepto. I build things for the web and write about stuff I learn along the way.",
  url: "https://gauravthakur.com",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Gaurav Thakur",
    "Frontend Engineer",
    "Web Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Web Performance",
    "Zepto",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};
