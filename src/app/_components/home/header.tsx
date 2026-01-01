import { ViewTransition } from "react";
import { Nav } from "@/app/_components/nav/nav";
import { CloudinaryImage } from "@/app/(tabs)/blog/_mdx-components/cloudinary-image";

export function Header() {
  return (
    <section>
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
          <h1 className="text-3xl font-bold md:text-4xl">
            <ViewTransition name="brand-name">
              <span>Gaurav Thakur</span>
            </ViewTransition>
          </h1>
          <p className="text-base text-gray-600 md:text-lg">
            All Things Web @ Zepto
          </p>
        </div>
      </div>
      <ViewTransition name="nav">
        <Nav />
      </ViewTransition>
    </section>
  );
}
