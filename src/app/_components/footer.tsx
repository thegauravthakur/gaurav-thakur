import { cn } from "@/app/utilities/tailwind";
import { iconStyles, linkStyles } from "@/app/_styles/common";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { ShareButton } from "@/app/_components/share-button";

interface FooterProps {
  className?: string;
  shareTitle: string;
  shareText: string;
  shareUrl: string;
}

export function Footer({
  className,
  shareTitle,
  shareText,
  shareUrl,
}: FooterProps) {
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
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin fontSize={22} />
        </Link>
        <ShareButton title={shareTitle} text={shareText} url={shareUrl} />
      </div>
      <Link href="/" className={cn(linkStyles, "font-semibold")}>
        Gaurav Thakur
      </Link>
    </footer>
  );
}
