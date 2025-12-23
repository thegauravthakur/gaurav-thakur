import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: { viewTransition: true },
  rewrites: async () => {
    return {
      beforeFiles: [{ source: "/", destination: "https://gaurav.ensite.dev" }],
    };
  },
};

const withMDX = createMDX({ options: { rehypePlugins: ["rehype-slug"] } });

export default withMDX(nextConfig);
