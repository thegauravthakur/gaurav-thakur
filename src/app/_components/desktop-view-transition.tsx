import { ReactNode, ViewTransition, ViewTransitionProps } from "react";
import { DesktopMobile } from "@/app/_components/desktop-mobile";

interface DesktopViewTransitionProps extends ViewTransitionProps {
  children: ReactNode;
  mobileName: string;
}

export function DesktopViewTransition({
  children,
  mobileName,
  ...viewTransitionProps
}: DesktopViewTransitionProps) {
  return (
    <>
      <DesktopMobile
        desktop={
          <ViewTransition {...viewTransitionProps}>{children}</ViewTransition>
        }
        mobile={
          <ViewTransition {...viewTransitionProps} name={mobileName}>
            {children}
          </ViewTransition>
        }
      />
    </>
  );
}
