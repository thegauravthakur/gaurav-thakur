import { ReactNode } from "react";
import { Footer } from "@/app/_components/footer";
import { cn } from "@/app/utilities/tailwind";
import { notFound } from "next/navigation";
import path from "node:path";
import fs from "node:fs";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

const proseStyles = cn(
  "prose prose-pre:border",
  "prose-a:text-red-700 prose-a:outline-red-700 prose-a:no-underline hover:prose-a:underline",
  "prose-img:rounded-lg",
);

export function getAllPostSlugs() {
  const _path = path.join(process.cwd(), "src/app/blog/content");
  const files = fs.readdirSync(_path);
  return files.map((file) => file.replace(".mdx", ""));
}

export default async function LayoutProps({ children, params }: LayoutProps) {
  const { slug } = await params;
  const isValidSlug = getAllPostSlugs().includes(slug as string);
  if (!isValidSlug) notFound();

  const { metadata } = await import(`../content/${slug}.mdx`);

  return (
    <div className="mx-auto max-w-[100vw] md:max-w-3xl">
      <main
        className={cn(
          "mb-10 mt-12 max-w-none px-4 md:mt-20 md:px-6",
          proseStyles,
        )}
      >
        {children}
      </main>
      <Footer
        className="px-4 md:px-6"
        shareText={metadata?.title ?? ""}
        shareUrl={`https://gauravthakur.in/blog/${slug}`}
      />
    </div>
  );
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}
