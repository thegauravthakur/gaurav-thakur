import { ReactNode } from "react";

export function WorkCard({
  company,
  role,
  period,
  location,
  children,
}: {
  company: string;
  role: string;
  period: string;
  location: string;
  children: ReactNode;
}) {
  return (
    <div className="not-prose mb-6 rounded-lg border border-gray-200 p-5 dark:border-gray-700">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900 dark:text-white">
            {company}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{role}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600 dark:text-gray-500">{period}</p>
          <p className="text-sm text-gray-600 dark:text-gray-500">{location}</p>
        </div>
      </div>
      <span className="block text-sm leading-relaxed text-gray-700 dark:text-gray-300">
        {children}
      </span>
    </div>
  );
}
