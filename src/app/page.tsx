import type { Metadata } from "next";
import { StaggerWrapper } from "@/components/stagger-wrapper";
import { WorkExperienceSection } from "@/app/_components/home/work-experience-section";
import { Header } from "@/app/_components/home/header";
import { NonScript } from "@/app/_components/home/non-script";
import { DesktopMobile } from "@/app/_components/desktop-mobile";
import { Intro } from "@/app/_components/home/intro";

export default function Page() {
  return (
    <div className="bg-white text-black antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <section className="mb-12">
          <DesktopMobile
            desktop={<Header isMobile={false} />}
            mobile={<Header isMobile />}
          />
        </section>
        <StaggerWrapper className="mb-12" delay={0}>
          <Intro />
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
