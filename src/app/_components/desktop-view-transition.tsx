import { ReactNode, ViewTransition, ViewTransitionProps } from "react";
import { DesktopMobile } from "@/app/_components/desktop-mobile";

interface DesktopViewTransitionProps extends ViewTransitionProps {
  children: ReactNode;
}

export function DesktopViewTransition({
  children,
  ...viewTransitionProps
}: DesktopViewTransitionProps) {
  return (
    <>
      <DesktopMobile
        desktop={
          <ViewTransition {...viewTransitionProps}>{children}</ViewTransition>
        }
        mobile={children}
      />
    </>
  );
}
