import { ReactNode } from "react";

function WorkCard({
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
    <div className="not-prose mb-6 rounded-lg border border-gray-200 p-5">
      <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-gray-900">{company}</h3>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-600">{period}</p>
          <p className="text-sm text-gray-500">{location}</p>
        </div>
      </div>
      <span className="block text-sm leading-relaxed text-gray-700">
        {children}
      </span>
    </div>
  );
}

export const AboutPageMDXComponents = {
  WorkCard,
};
