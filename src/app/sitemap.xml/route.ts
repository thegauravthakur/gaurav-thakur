import { getAllPosts } from "@/app/utilities/blog";
import { siteConfig } from "@/app/config";

export const dynamic = "force-static";

interface SitemapEntry {
  url: string;
  changefreq: string;
  lastmod?: string;
}

export async function GET() {
  const posts = await getAllPosts();

  const staticPages: SitemapEntry[] = [
    { url: siteConfig.url, changefreq: "monthly" },
    { url: `${siteConfig.url}/about`, changefreq: "monthly" },
    { url: `${siteConfig.url}/blog`, changefreq: "weekly" },
    { url: `${siteConfig.url}/projects`, changefreq: "monthly" },
    { url: `${siteConfig.url}/resume`, changefreq: "monthly" },
  ];

  const blogEntries: SitemapEntry[] = posts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    changefreq: "monthly",
    lastmod: new Date(post.createdAt).toISOString().split("T")[0],
  }));

  const entries = [...staticPages, ...blogEntries];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
  .map(
    (entry) => `  <url>
    <loc>${entry.url}</loc>
    <changefreq>${entry.changefreq}</changefreq>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""}
  </url>`,
  )
  .join("\n")}
</urlset>`;

  return new Response(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
