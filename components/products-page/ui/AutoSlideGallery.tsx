"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils/cn";

interface AutoSlideGalleryProps {
  images: { src: string; alt: string; label?: string }[];
  intervalMs?: number;
  className?: string;
  imageClassName?: string;
  onFirstImageLoad?: () => void;
}

export function AutoSlideGallery({
  images,
  intervalMs = 4000,
  className,
  imageClassName,
  onFirstImageLoad,
}: AutoSlideGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [firstLoaded, setFirstLoaded] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [images.length, intervalMs]);

  const handleFirstLoad = () => {
    if (firstLoaded) return;
    setFirstLoaded(true);
    onFirstImageLoad?.();
  };

  if (!images.length) return null;

  const activeLabel = images[activeIndex]?.label;

  return (
    <div className={cn("relative h-full w-full overflow-hidden rounded-2xl", className)}>
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className={cn(
            "absolute inset-0 transition-opacity duration-700 ease-in-out",
            index === activeIndex ? "opacity-100" : "opacity-0"
          )}
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className={cn("object-contain object-center", imageClassName)}
            sizes="(max-width: 768px) 90vw, 600px"
            priority={index === 0}
            onLoad={index === 0 ? handleFirstLoad : undefined}
          />
        </div>
      ))}

      {activeLabel ? (
        <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-md bg-[#0f1622]/75 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white backdrop-blur-sm sm:left-3.5 sm:top-3.5 sm:text-xs">
          {activeLabel}
          <span className="ml-1.5 font-medium text-white/85">
            {activeIndex + 1}/{images.length}
          </span>
        </div>
      ) : null}

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-1.5">
          {images.map((image, index) => (
            <button
              key={index}
              type="button"
              aria-label={image.label ?? `Slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-5 bg-white" : "w-1.5 bg-white/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
