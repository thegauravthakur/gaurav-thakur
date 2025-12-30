import { Fragment, ReactNode } from "react";
import { Footer } from "@/app/_components/footer";
import { notFound } from "next/navigation";
import path from "node:path";
import fs from "node:fs";
import { BlogContentWrapper } from "@/app/(tabs)/blog/[slug]/components/blog-content-wrapper";

interface LayoutProps {
  children: ReactNode;
  params: Promise<{ slug: string }>;
}

export function getAllPostSlugs() {
  const _path = path.join(process.cwd(), "src/app/(tabs)/blog/content");
  const files = fs.readdirSync(_path);
  return files.map((file) => file.replace(".mdx", ""));
}

export default async function LayoutProps({ children, params }: LayoutProps) {
  const { slug } = await params;
  const isValidSlug = getAllPostSlugs().includes(slug as string);
  if (!isValidSlug) notFound();

  const { metadata } = await import(`../content/${slug}.mdx`);

  if (metadata?.isDraft && process.env.NODE_ENV === "production") notFound();

  return (
    <Fragment>
      <BlogContentWrapper>{children}</BlogContentWrapper>
      <Footer
        className="mx-auto mt-16 w-full max-w-(--breakpoint-xl) px-4 md:px-6"
        shareText={metadata?.title ?? ""}
        shareUrl={`https://gauravthakur.com/blog/${slug}`}
      />
    </Fragment>
  );
}

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}
