import { Title } from "@/app/blog/_components/title";
import { Metadata } from "next";
import { Suspense } from "react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const slug = params.then((p) => p.slug);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <_Page slugPromise={slug} />
    </Suspense>
  );
}

async function _Page({ slugPromise }: { slugPromise: Promise<string> }) {
  const slug = await slugPromise;
  const { default: Content, metadata } = await import(`../content/${slug}.mdx`);

  return (
    <article>
      <Title title={metadata.title} createdAt={metadata.createdAt} />
      <Content />
    </article>
  );
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const { metadata } = await import(`../content/${slug}.mdx`);

  return {
    title: metadata.title,
    description: metadata.metaDescription,
    openGraph: {
      title: metadata.title,
      description: metadata.metaDescription,
    },
    alternates: { canonical: `https://gauravthakur.com/blog/${slug}` },
  };
}
