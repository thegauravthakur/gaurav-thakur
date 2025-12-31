import { ViewTransition } from "react";
import { Nav } from "@/app/_components/nav/nav";
import { CloudinaryImage } from "@/app/(tabs)/blog/_mdx-components/cloudinary-image";

interface HeaderProps {
  isMobile: boolean;
}

export function Header({ isMobile }: HeaderProps) {
  const photo = (
    <CloudinaryImage
      src="/media/profile.png"
      alt="Gaurav Thakur"
      width={160}
      height={160}
      className="size-20 rounded-full object-cover md:size-22"
    />
  );

  return (
    <section>
      <div className="mb-6 flex items-center gap-4">
        {isMobile ? (
          <ViewTransition name={"profile-image-mobile"}>{photo}</ViewTransition>
        ) : (
          <ViewTransition name="profile-image-desktop">{photo}</ViewTransition>
        )}
        <div>
          <h1 className="text-3xl font-bold md:text-4xl">
            {isMobile ? (
              <span>Gaurav Thakur</span>
            ) : (
              <ViewTransition name="brand-name">
                <span>Gaurav Thakur</span>
              </ViewTransition>
            )}
          </h1>
          <p className="text-base text-gray-600 md:text-lg">
            All Things Web @ Zepto
          </p>
        </div>
      </div>
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
