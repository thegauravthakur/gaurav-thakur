import type { Metadata } from "next";
import { StaggerWrapper } from "@/components/stagger-wrapper";
import { WorkExperienceSection } from "@/app/_components/home/work-experience-section";
import { Header } from "@/app/_components/home/header";
import { NonScript } from "@/app/_components/home/non-script";

export default function Page() {
  return (
    <div className="bg-white text-black antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <StaggerWrapper className="mb-12" delay={0}>
          <Header />
        </StaggerWrapper>

        <StaggerWrapper className="mb-12" delay={0.25}>
          <p className="text-base leading-relaxed text-gray-800">
            I&apos;m a software engineer with a passion for web applications. I
            create beautiful, performant, and accessible web experiences for
            all.
          </p>
        </StaggerWrapper>

        <StaggerWrapper className="mb-12" delay={0.5}>
          <WorkExperienceSection />
        </StaggerWrapper>
      </div>
      <NonScript style="[data-animate]{opacity:1!important;transform:none!important}" />
    </div>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "https://gauravthakur.com" },
};
