import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: { viewTransition: true },
  output: "export",
  // PostHog reverse proxy configuration
  // Note: rewrites only work during `next dev` with static export mode
  // For production static exports, PostHog requests go directly to the host
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/pageviews.json",
        destination: "https://bucket.gauravthakur.com/pageviews.json",
      },
    ];
  },
  // Required to support PostHog trailing slash API requests
  skipTrailingSlashRedirect: true,
};

const withMDX = createMDX({ options: { rehypePlugins: ["rehype-slug"] } });

export default withMDX(nextConfig);
