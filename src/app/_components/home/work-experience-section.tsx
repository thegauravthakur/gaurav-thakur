import { Link } from "@/app/_components/ui/link";

export function WorkExperienceSection() {
  return (
    <section>
      <h2 className="mb-6 text-xl font-semibold">Work Experience</h2>
      {workExperience.map((job, index) => (
        <div key={job.company} className={index < 2 ? "mb-8" : ""}>
          <div className="mb-1 flex items-start justify-between">
            <h3 className="text-base font-semibold">{job.company}</h3>
            <p className="text-xs text-gray-600">{job.period}</p>
          </div>
          <p className="text-sm text-gray-700">{job.description}</p>
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
