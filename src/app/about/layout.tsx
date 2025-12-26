import { Fragment, ReactNode, ViewTransition } from "react";
import { Header } from "@/app/_components/header";
import { BlogContentWrapper } from "@/app/blog/[slug]/components/blog-content-wrapper";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return (
    <Fragment>
      <ViewTransition>
        <Header />
      </ViewTransition>
      <BlogContentWrapper>{children}</BlogContentWrapper>
    </Fragment>
  );
}
