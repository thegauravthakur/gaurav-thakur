import { Link } from "@/app/_components/ui/link";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { HiExternalLink } from "react-icons/hi";

export function SideQuestsSection() {
  return (
    <section>
      <div className="mb-6 flex items-baseline justify-between">
        <h2 className="text-xl font-semibold text-gray-950 dark:text-white">
          Side Quests
        </h2>
        <Link
          href="/projects"
          className="group inline-flex items-center gap-1.5 text-sm"
        >
          <span>View all</span>
          <ArrowRightIcon className="size-3.5 transition-transform duration-150 group-hover:translate-x-0.5" />
        </Link>
      </div>
      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <div key={project.name}>
            <div className="mb-1 flex items-center gap-2">
              <h3 className="text-base font-semibold text-gray-950 dark:text-white">
                {project.name}
              </h3>
              {project.website && (
                <a
                  href={project.website}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={`Visit ${project.name}`}
                  className="text-gray-400 transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                >
                  <HiExternalLink size={16} />
                </a>
              )}
            </div>
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const projects = [
  {
    name: "SplitMaadi",
    website: "https://splitmaadi.com",
    description:
      "A free group expense-splitting app on web, iOS, and Android. Supports equal, percentage, and exact-amount splits with multi-currency support and optimized debt settlement.",
  },
  {
    name: "PerfKit",
    website: "https://perfkit.dev",
    description:
      "A web performance analysis toolkit combining real-user data from Chrome UX Report with lab diagnostics. Features side-by-side benchmarking and Core Web Vitals analysis.",
  },
  {
    name: "Ensite",
    website: "https://ensite.io",
    description:
      "A tool for generating beautiful site previews and social cards. Create stunning OG images without design skills.",
  },
];
