import { ViewTransition } from "react";
import { Nav } from "@/app/_components/nav/nav";
import { CloudinaryImage } from "@/app/(tabs)/blog/_mdx-components/cloudinary-image";
import { DesktopMobile } from "@/app/_components/desktop-mobile";
import { ThemeSwitchButton } from "@/app/_components/theme-switch-button";

export function Header() {
  return (
    <section>
      <ThemeSwitchButton />
      <div className="mb-6 flex items-center gap-4">
        <ViewTransition name="profile-image">
          <CloudinaryImage
            src="/media/profile.png"
            alt="Gaurav Thakur"
            width={160}
            height={160}
            className="size-20 rounded-full object-cover md:size-22"
          />
        </ViewTransition>

        <div>
          <h1 className="text-3xl font-bold text-gray-950 md:text-4xl dark:text-white">
            <ViewTransition name="brand-name">
              <span>Gaurav Thakur</span>
            </ViewTransition>
          </h1>
          <p className="text-base text-gray-600 md:text-lg dark:text-gray-300">
            All Things Web @ Zepto
          </p>
        </div>
      </div>
      <DesktopMobile
        desktop={
          <ViewTransition name="nav-desktop">
            <Nav />
          </ViewTransition>
        }
        mobile={
          <ViewTransition name="nav-mobile">
            <Nav />
          </ViewTransition>
        }
      />
    </section>
  );
}
