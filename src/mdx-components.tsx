import type { MDXComponents } from "mdx/types";
import { Code } from "bright";
import { Heading } from "@/app/blog/_mdx-components/heading";
import { Link } from "@/app/blog/_mdx-components/link";
import { ReactNode } from "react";

Code.lineNumbers = true;
Code.theme = "light-plus";

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

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Code,
    a: Link,
    h1: (props) => <Heading level={1} {...props} />,
    h2: (props) => <Heading level={2} {...props} />,
    h3: (props) => <Heading level={3} {...props} />,
    h4: (props) => <Heading level={4} {...props} />,
    h5: (props) => <Heading level={5} {...props} />,
    h6: (props) => <Heading level={6} {...props} />,
    WorkCard,
  };
}
