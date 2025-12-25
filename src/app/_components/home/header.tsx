import { ViewTransition } from "react";
import { Nav } from "@/app/_components/nav/nav";

interface HeaderProps {
  isMobile: boolean;
}

export function Header({ isMobile }: HeaderProps) {
  return (
    <section>
      <h1 className="mb-2 text-4xl font-bold">
        {isMobile ? (
          <span>Gaurav Thakur</span>
        ) : (
          <ViewTransition name="brand-name">
            <span>Gaurav Thakur</span>
          </ViewTransition>
        )}
      </h1>
      <p className="mb-6 text-lg text-gray-700">All Things Web @ Zepto</p>
      {isMobile ? (
        <ViewTransition name="nav-mobile">
          <Nav />
        </ViewTransition>
      ) : (
        <ViewTransition name="nav-desktop">
          <Nav />
        </ViewTransition>
      )}
    </section>
  );
}
