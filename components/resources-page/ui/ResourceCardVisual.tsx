import Image from "next/image";

import { theme } from "@/config/theme";
import type { ResourceCardVariant } from "@/types/resources-page";
import { cn } from "@/lib/utils/cn";

interface ResourceCardVisualProps {
  tag: string;
  image?: string;
  variant?: ResourceCardVariant;
  accentColor?: string;
  className?: string;
}

export function ResourceCardVisual({
  tag,
  image,
  variant = "default",
  accentColor,
  className,
}: ResourceCardVisualProps) {
  const gradient =
    theme.resourceCards[variant] ?? theme.resourceCards.default;
  const accent =
    accentColor ??
    theme.resourceCardAccents[variant]?.main ??
    theme.colors.primary;

  return (
    <div
      className={cn(
        "relative flex aspect-video items-end overflow-hidden p-5",
        className
      )}
      style={image ? undefined : { background: gradient }}
    >
      {image ? (
        <>
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            unoptimized
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/60 via-black/15 to-transparent"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-1"
            style={{ backgroundColor: accent }}
            aria-hidden
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: theme.resourceCards.overlay }}
          aria-hidden
        />
      )}
      <span
        className="relative z-10 rounded-md px-2.5 py-1 text-[0.72rem] font-bold tracking-wider text-white uppercase backdrop-blur-sm"
        style={{ backgroundColor: `${accent}cc` }}
      >
        {tag}
      </span>
    </div>
  );
}
