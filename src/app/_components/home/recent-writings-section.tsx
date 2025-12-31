import { Link } from "@/app/_components/ui/link";
import NextLink from "next/link";
import { format } from "date-fns";
import { getRecentPosts } from "@/app/utilities/blog";

export async function RecentWritingsSection() {
  const recentPosts = await getRecentPosts(3);

  return (
    <section>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold">Recent Writings</h2>
        <Link href="/blog" className="text-sm">
          View all →
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <NextLink
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-gray-50 active:bg-gray-100"
          >
            <article className="flex flex-col gap-1">
              <h3 className="font-medium text-gray-900 group-hover:text-red-600 group-hover:underline">
                {post.title}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-700">
                {post.description}
              </p>
              <div className="mt-1 flex items-center gap-3 text-xs text-gray-600">
                <time dateTime={post.createdAt}>
                  {format(new Date(post.createdAt), "MMM d, yyyy")}
                </time>
                <span className="text-gray-400">·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </article>
          </NextLink>
        ))}
      </div>
    </section>
  );
}
