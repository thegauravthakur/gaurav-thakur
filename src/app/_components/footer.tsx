import { cn } from "@/app/utilities/tailwind";
import { iconStyles, linkStyles } from "@/app/_styles/common";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { MoreShareOptions } from "@/app/_components/more-share-options";

interface FooterProps {
  className?: string;
  shareText: string;
  shareUrl: string;
}

export function Footer({ className, shareText, shareUrl }: FooterProps) {
  return (
    <footer className={cn("border-t py-3 md:space-y-2 md:py-6", className)}>
      <div className="flex items-center">
        <p className="mr-2 font-semibold">Share on</p>
        <Link
          className={cn(iconStyles)}
          aria-label="Twitter"
          href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaXTwitter fontSize={22} />
        </Link>
        <Link
          className={cn(iconStyles)}
          aria-label="Linkedin"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${shareUrl}&text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize={22} />
        </Link>
        <MoreShareOptions link={shareUrl} />
      </div>
      <Link href="/" className={cn(linkStyles, "font-semibold")}>
        Gaurav Thakur
      </Link>
    </footer>
  );
}
