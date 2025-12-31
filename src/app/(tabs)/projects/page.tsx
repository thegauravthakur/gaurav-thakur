import { ReactNode } from "react";
import { FaGithub } from "react-icons/fa6";
import { HiExternalLink } from "react-icons/hi";

export default function Page() {
  return (
    <div className="bg-white text-black antialiased">
      <div className="mx-auto max-w-2xl px-6 py-16 md:py-24">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
          Projects
        </h1>
        {projects.map((project, index) => (
          <div
            className={index < projects.length - 1 ? "mb-8" : ""}
            key={project.name}
          >
            <div className="mb-1 flex items-center gap-3">
              <h2 className="text-base font-semibold">{project.name}</h2>
              <div className="flex items-center gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={`${project.name} on GitHub`}
                    className="text-gray-500 transition-colors hover:text-gray-800"
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
                    className="text-gray-500 transition-colors hover:text-gray-800"
                  >
                    <HiExternalLink size={18} />
                  </a>
                )}
              </div>
            </div>
            <p className="text-sm leading-relaxed text-gray-700">
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
    name: "Ensite",
    website: "https://ensite.io",
    description:
      "A web-based tool for generating beautiful site previews and social cards. Helps developers create stunning OG images for their websites without design skills. Built with a focus on simplicity and speed.",
  },
  {
    name: "Vicks",
    github: "https://github.com/thegauravthakur/vicks",
    description:
      "A lightweight (0.8KB) fetch wrapper with superpowers. Features include request/response interceptors, default configurations, and multiple client support. Written in TypeScript with zero dependencies.",
  },
];
