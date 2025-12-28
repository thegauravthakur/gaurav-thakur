import { Fragment, ReactNode, ViewTransition } from "react";
import { Header } from "@/app/_components/header";

interface LayoutProps {
  children: ReactNode;
}

export default function LayoutProps({ children }: LayoutProps) {
  return (
    <Fragment>
      <ViewTransition>
        <Header />
      </ViewTransition>
      <main>{children}</main>
    </Fragment>
  );
}
