import type { Metadata } from "next";
import { WorkExperienceSection } from "@/app/_components/home/work-experience-section";
import { RecentWritingsSection } from "@/app/_components/home/recent-writings-section";
import { Header } from "@/app/_components/home/header";
import { Intro } from "@/app/_components/home/intro";

export default function Page() {
  return (
    <main>
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <section className="mb-12">
          <Header />
        </section>
        <section className="mb-10">
          <Intro />
        </section>
        <hr className="mb-10 border-gray-100 dark:border-gray-700" />
        <section className="mb-10">
          <WorkExperienceSection />
        </section>
        <hr className="mb-10 border-gray-100 dark:border-gray-700" />
        <section>
          <RecentWritingsSection />
        </section>
      </div>
    </main>
  );
}

export const metadata: Metadata = {
  alternates: { canonical: "https://gauravthakur.com" },
};
