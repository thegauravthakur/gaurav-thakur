import type { Metadata } from "next";
import { Fragment } from "react";
import { Footer } from "@/app/_components/footer";
import { Article } from "@/app/blog/_components/article";
import calculateReadingTime from "reading-time";
import * as fs from "node:fs";
import { getAllPostSlugs } from "@/app/blog/[slug]/layout";
import { StaggerWrapper } from "@/components/stagger-wrapper";

interface PageMetadata {
  title: string;
  createdAt: string;
  description: string;
}

interface MetadataWithSlug extends PageMetadata {
  slug: string;
  readingTime: number;
}

export const dynamic = "force-static";

async function fetchAllPostMetadata(): Promise<MetadataWithSlug[]> {
  const slugs = getAllPostSlugs();
  const modules = slugs.map((slug) => {
    return { module: import(`./content/${slug}.mdx`), slug };
  });
  const postsWithMetadata = await Promise.all(
    modules.map(async (module) => {
      const { metadata } = await module.module;
      const path = `./src/app/blog/content/${module.slug}.mdx`;
      const content = fs.readFileSync(path, "utf8");
      const readingTime = Math.round(calculateReadingTime(content).minutes);
      return { ...metadata, slug: module.slug, readingTime };
    }),
  );

  return postsWithMetadata.sort((a, b) => {
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });
}

export default async function Page() {
  const metadata = await fetchAllPostMetadata();

  return (
    <Fragment>
      <main className="mx-auto mt-8 flex flex-1 px-4 md:max-w-(--breakpoint-xl) md:px-6 lg:mt-16">
        <ul className="grid h-max grid-cols-1 gap-6 lg:grid-cols-2">
          {metadata.map((metadata, index) => (
            <li key={metadata.slug}>
              <StaggerWrapper delay={index * 0.1} duration={0.25}>
                <Article {...metadata} />
              </StaggerWrapper>
            </li>
          ))}
        </ul>
      </main>
      <Footer
        className="mx-auto mt-16 w-full max-w-(--breakpoint-xl) px-4 md:px-6"
        shareText="Take a look at Gaurav Thakur's blog on creating a better web experience for everyone!"
        shareUrl="https://gauravthakur.in/blog"
      />
    </Fragment>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: { canonical: "https://gauravthakur.com/blog" },
  };
}
