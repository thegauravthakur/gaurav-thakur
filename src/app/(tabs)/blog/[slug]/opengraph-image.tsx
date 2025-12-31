import { ImageResponse } from "next/og";
import { getAllPostSlugs } from "@/app/utilities/blog";

export const alt = "Blog post by Gaurav Thakur";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { metadata } = await import(`../content/${slug}.mdx`);

  // Adjust font size based on title length
  const titleLength = metadata.title.length;
  const fontSize = titleLength > 40 ? 48 : titleLength > 25 ? 56 : 64;

  return new ImageResponse(
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background:
          "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f0f23 100%)",
        padding: "56px 64px",
        borderRadius: "24px",
      }}
    >
      {/* Top left - Author name */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <div
          style={{
            width: "12px",
            height: "12px",
            borderRadius: "50%",
            backgroundColor: "#ef4444",
          }}
        />
        <span
          style={{
            fontSize: 24,
            fontWeight: 500,
            color: "#94a3b8",
          }}
        >
          Gaurav Thakur
        </span>
      </div>

      {/* Center - Blog title */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div
          style={{
            fontSize,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "1000px",
          }}
        >
          {metadata.title}
        </div>
      </div>

      {/* Bottom left - URL */}
      <div
        style={{
          display: "flex",
        }}
      >
        <span
          style={{
            fontSize: 20,
            fontWeight: 400,
            color: "#64748b",
            letterSpacing: "0.05em",
          }}
        >
          GAURAVTHAKUR.COM/BLOG
        </span>
      </div>
    </div>,
    {
      ...size,
    },
  );
}
