import * as fs from "node:fs";
import * as path from "node:path";

export interface Heading {
  id: string;
  text: string;
  level: 2 | 3;
}

const CONTENT_PATH = "src/app/(tabs)/blog/content";

/**
 * Slugifies text to match rehype-slug (GitHub slugger) behavior
 * Converts to lowercase, replaces each space with hyphen, removes special chars
 * NOTE: Replaces each space individually (not collapsed) to match GitHub slugger
 */
function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters (like &)
    .replace(/\s/g, "-"); // Replace EACH space with a hyphen (not collapsed)
}

/**
 * Extracts h2 and h3 headings from MDX content
 * Returns array of headings with id, text, and level
 */
export function extractHeadings(slug: string): Heading[] {
  const filePath = path.join(process.cwd(), CONTENT_PATH, `${slug}.mdx`);
  const content = fs.readFileSync(filePath, "utf8");

  // Always start with Introduction pointing to the article header
  const headings: Heading[] = [{ id: "introduction", text: "Introduction", level: 2 }];

  // Match markdown headings: ## or ### at start of line
  // Regex captures the hashes and the heading text
  const headingRegex = /^(#{2,3})\s+(.+)$/gm;

  let match;
  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length as 2 | 3;
    const text = match[2].trim();

    // Only include h2 and h3
    if (level === 2 || level === 3) {
      headings.push({
        id: slugify(text),
        text,
        level,
      });
    }
  }

  return headings;
}

