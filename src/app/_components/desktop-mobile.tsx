import { ReactNode } from "react";

interface DesktopMobileProps {
  desktop: ReactNode;
  mobile: ReactNode;
}

export function DesktopMobile({ desktop, mobile }: DesktopMobileProps) {
  return (
    <>
      <span className="hidden md:block">{desktop}</span>
      <span className="block md:hidden">{mobile}</span>
    </>
  );
}
