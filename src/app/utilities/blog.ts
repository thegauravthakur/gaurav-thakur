import calculateReadingTime from "reading-time";
import * as fs from "node:fs";
import * as path from "node:path";

export interface Post {
  title: string;
  createdAt: string;
  description: string;
  isDraft?: boolean;
  slug: string;
  readingTime: number;
}

const CONTENT_PATH = "src/app/(tabs)/blog/content";

export function getAllPostSlugs(): string[] {
  const contentPath = path.join(process.cwd(), CONTENT_PATH);
  const files = fs.readdirSync(contentPath);
  return files.map((file) => file.replace(".mdx", ""));
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllPostSlugs();

  const posts = await Promise.all(
    slugs.map(async (slug) => {
      const { metadata } = await import(`@/app/(tabs)/blog/content/${slug}.mdx`);
      const filePath = path.join(process.cwd(), CONTENT_PATH, `${slug}.mdx`);
      const content = fs.readFileSync(filePath, "utf8");
      const readingTime = Math.round(calculateReadingTime(content).minutes);

      return {
        ...metadata,
        slug,
        readingTime,
      } as Post;
    }),
  );

  return posts
    .filter((post) => !post.isDraft || process.env.NODE_ENV === "development")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}

export async function getRecentPosts(count: number = 3): Promise<Post[]> {
  const posts = await getAllPosts();
  return posts.slice(0, count);
}

