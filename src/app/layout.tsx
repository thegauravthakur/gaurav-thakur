import type { Metadata } from "next";
import { ReactNode } from "react";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex min-h-dvh flex-col bg-white font-sans dark:bg-gray-950">
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
  twitter: {
    card: "summary_large_image",
    creator: "@gauravcodes",
    site: "@gauravcodes",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
  },
};
