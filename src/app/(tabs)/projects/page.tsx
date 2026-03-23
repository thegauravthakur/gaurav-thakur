import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

export default function Page() {
  return (
    <div className="text-gray-950 dark:text-gray-300">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl dark:text-white">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            className={index < projects.length - 1 ? "mb-8" : ""}
            key={project.name}
          >
            <div className="mb-1 flex items-center gap-3">
              <h2 className="text-base font-semibold dark:text-gray-200">
                {project.name}
              </h2>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${project.name} on GitHub`}
                    className="text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-gray-400"
                  >
                    <FaGithub size={18} />
                  </a>
                )}
                {project.website && (
                  <a
                    href={project.website}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`Visit ${project.name}`}
                    className="text-gray-500 transition-colors hover:text-gray-800 dark:hover:text-gray-400"
                  >
                    <HiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

interface Project {
  name: string;
  github?: string;
  website?: string;
  description: ReactNode;
}

const projects: Project[] = [
  {
    name: "SplitMaadi",
    website: "https://splitmaadi.com",
    description:
      "A free group expense-splitting app available on web, iOS, and Android. Supports equal, percentage, and exact-amount splits with multi-currency support, receipt attachments, and optimized debt settlement — all without ads or paywalls.",
  },
  {
    name: "PerfKit",
    website: "https://perfkit.dev",
    description:
      "A web performance analysis toolkit that combines real-user data from Chrome UX Report with lab diagnostics. Features side-by-side benchmarking of up to 5 URLs, Core Web Vitals analysis, and origin-level performance comparisons.",
  },
  {
    name: "Ensite",
    website: "https://ensite.io",
    description:
      "A web-based tool for generating beautiful site previews and social cards. Helps developers create stunning OG images for their websites without design skills. Built with a focus on simplicity and speed.",
  },
];
