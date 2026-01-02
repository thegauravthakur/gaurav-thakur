import { Link } from "@/app/_components/ui/link";
import NextLink from "next/link";
import { format } from "date-fns";
import { getRecentPosts } from "@/app/utilities/blog";
import { ArrowRightIcon } from "@heroicons/react/16/solid";

export async function RecentWritingsSection() {
  const recentPosts = await getRecentPosts(3);

  return (
    <section>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white">
          Recent Writings
        </h2>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm"
        >
          <span>View all</span>
          <ArrowRightIcon className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="flex flex-col gap-4">
        {recentPosts.map((post) => (
          <NextLink
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="group -mx-3 rounded-lg px-3 py-3 transition-colors duration-150 hover:bg-gray-50 active:bg-gray-100 dark:hover:bg-white/5 dark:active:bg-white/10"
          >
            <article className="flex flex-col gap-1">
              <h3 className="text-base font-semibold text-gray-900 group-hover:text-red-600 group-hover:underline dark:text-white dark:group-hover:text-red-400">
                {post.title}
              </h3>
              <p className="line-clamp-2 text-sm leading-relaxed text-gray-700 dark:text-gray-400">
                {post.description}
              </p>
              <div className="mt-1 flex items-center gap-3 text-sm text-gray-500 dark:text-gray-500">
                <time dateTime={post.createdAt}>
                  {format(new Date(post.createdAt), "MMM d, yyyy")}
                </time>
                <span className="text-gray-300 dark:text-gray-500">·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </article>
          </NextLink>
        ))}
      </div>
    </section>
  );
}
