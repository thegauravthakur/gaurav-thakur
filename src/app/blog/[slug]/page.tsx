import { Title } from "@/app/blog/_components/title";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
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
