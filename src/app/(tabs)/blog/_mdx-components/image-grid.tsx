import { CloudinaryImage } from "@/app/(tabs)/blog/_mdx-components/cloudinary-image";

interface ImageGridProps {
  images: { src: string; width: number; height: number; alt: string }[];
}

export function ImageGrid({ images }: ImageGridProps) {
  if (images.length === 1)
    return (
      <CloudinaryImage
        key={images[0].src}
        src={images[0].src}
        width={images[0].width}
        height={images[0].height}
        alt={images[0].alt}
      />
    );

  if (images.length === 2)
    return (
      <div className="grid grid-cols-2 gap-x-2">
        {images.map((image) => (
          <CloudinaryImage
            key={image.src}
            src={image.src}
            width={image.width}
            height={image.height}
            alt={image.alt}
          />
        ))}
      </div>
    );
}
