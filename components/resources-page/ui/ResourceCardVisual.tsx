import Image from "next/image";

import { theme } from "@/config/theme";
import type { ResourceCardVariant } from "@/types/resources-page";
import { cn } from "@/lib/utils/cn";

interface ResourceCardVisualProps {
  tag: string;
  image?: string;
  variant?: ResourceCardVariant;
  className?: string;
}

export function ResourceCardVisual({
  tag,
  image,
  variant = "default",
  className,
}: ResourceCardVisualProps) {
  const gradient =
    theme.resourceCards[variant] ?? theme.resourceCards.default;

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
            className="object-cover"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent"
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
      <span className="relative z-10 rounded-md bg-white/20 px-2.5 py-1 text-[0.72rem] font-bold tracking-wider text-white uppercase backdrop-blur-sm">
        {tag}
      </span>
    </div>
  );
}
