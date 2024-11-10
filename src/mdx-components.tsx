import type { MDXComponents } from "mdx/types";
import { Code } from "bright";
import { Heading } from "@/app/blog/_mdx-components/heading";
import { Link } from "@/app/blog/_mdx-components/link";

Code.lineNumbers = true;
Code.theme = "light-plus";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    pre: Code,
    h1: (props) => <Heading level={1} {...props} />,
    h2: (props) => <Heading level={2} {...props} />,
    h3: (props) => <Heading level={3} {...props} />,
    h4: (props) => <Heading level={4} {...props} />,
    h5: (props) => <Heading level={5} {...props} />,
    h6: (props) => <Heading level={6} {...props} />,
    a: Link,
  };
}
