import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import rehypeSlug from "rehype-slug";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: { ppr: true, reactCompiler: true },
  rewrites: async () => {
    return {
      beforeFiles: [{ source: "/", destination: "https://gaurav.ensite.dev" }],
    };
  },
};

const withMDX = createMDX({ options: { rehypePlugins: [rehypeSlug] } });

export default withMDX(nextConfig);
