import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypeSlug from "rehype-slug";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  assetPrefix: "/portfolio",
  experimental: { ppr: true, reactCompiler: true },
};

const withMDX = createMDX({ options: { rehypePlugins: [rehypeSlug] } });

export default withMDX(nextConfig);
