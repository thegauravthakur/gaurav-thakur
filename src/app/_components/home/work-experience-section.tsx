import { Link } from "@/app/_components/ui/link";

export function WorkExperienceSection() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold text-gray-950 dark:text-white">
        Work Experience
      </h2>
      {workExperience.map((job, index) => (
        <div key={job.company} className={index < 2 ? "mb-8" : ""}>
          <div className="mb-1 flex items-start justify-between gap-4">
            <h3 className="text-base font-semibold text-gray-950 dark:text-white">
              {job.company}
            </h3>
            <p className="shrink-0 text-sm text-gray-500 dark:text-gray-500">
              {job.period}
            </p>
          </div>
          <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
            {job.description}
          </p>
        </div>
      ))}
    </section>
  );
}

const workExperience = [
  {
    company: "Zepto",
    period: "Nov 2023 – Present",
    description: (
      <>
        Primarily working on web performance &amp; improving end user experience
        on <Link href="https://zepto.com">zepto.com</Link>
      </>
    ),
  },
  {
    company: "Reliance Retail",
    period: "Aug 2022 – Nov 2023",
    description:
      "Solved complex frontend challenges and contributed to scalable web solutions for retail commerce platforms.",
  },
  {
    company: "MAQ Software",
    period: "Mar 2021 – Aug 2022",
    description:
      "Addressed diverse frontend problems and delivered robust solutions across multiple client projects.",
  },
];
