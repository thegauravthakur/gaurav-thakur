import type { Metadata } from "next";
import { Fragment } from "react";
import { Footer } from "@/app/_components/footer";
import { Article } from "@/app/(tabs)/blog/_components/article";
import { getAllPosts } from "@/app/utilities/blog";

export const dynamic = "force-static";

export default async function Page() {
  const posts = await getAllPosts();

  return (
    <Fragment>
      <main className="mx-auto mt-8 flex flex-1 px-4 md:max-w-(--breakpoint-xl) md:px-6 lg:mt-16">
        <ul className="grid h-max grid-cols-1 gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <li key={post.slug}>
              <Article {...post} />
            </li>
          ))}
        </ul>
      </main>
      <Footer
        className="mx-auto mt-16 w-full max-w-(--breakpoint-xl) px-4 md:px-6"
        shareTitle="Gaurav's Blog"
        shareText="Articles about web development, React, Next.js, TypeScript, and things I learn along the way."
        shareUrl="https://gauravthakur.com/blog"
      />
    </Fragment>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    alternates: { canonical: "https://gauravthakur.com/blog" },
  };
}
