import { Title } from "@/app/(tabs)/blog/_components/title";
import { Metadata } from "next";
import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "@/app/_components/ui/link";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const { default: Content, metadata } = await import(`../content/${slug}.mdx`);

  return (
    <article>
      <Link
        href="/blog"
        className="group not-prose mb-4 inline-flex items-center gap-1.5 text-sm md:mb-6"
      >
        <ArrowLeftIcon className="size-3.5 transition-transform duration-150 group-hover:-translate-x-0.5" />
        All Articles
      </Link>
      <Title title={metadata.title} createdAt={metadata.createdAt} />
      <div id="introduction" className="h-8" />
      <div className="-mt-4">
        <Content />
      </div>
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
