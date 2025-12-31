import type { Metadata } from "next";
import { AnimateInView } from "@/components/animate-in-view";
import { WorkExperienceSection } from "@/app/_components/home/work-experience-section";
import { RecentWritingsSection } from "@/app/_components/home/recent-writings-section";
import { Header } from "@/app/_components/home/header";
import { DesktopMobile } from "@/app/_components/desktop-mobile";
import { Intro } from "@/app/_components/home/intro";

export default function Page() {
  return (
    <main className="bg-white text-black antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <section className="mb-12">
          <DesktopMobile
            desktop={<Header isMobile={false} />}
            mobile={<Header isMobile />}
          />
        </section>
        <AnimateInView className="mb-10">
          <Intro />
        </AnimateInView>
        <hr className="mb-10 border-gray-100" />
        <AnimateInView className="mb-10" delay={0.1}>
          <WorkExperienceSection />
        </AnimateInView>
        <hr className="mb-10 border-gray-100" />
        <AnimateInView delay={0.2}>
          <RecentWritingsSection />
        </AnimateInView>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "https://gauravthakur.com" },
};
