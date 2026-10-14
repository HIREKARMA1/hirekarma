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
        "relative flex aspect-video items-end overflow-hidden bg-slate-100 p-5 dark:bg-[#0b1220]",
        className
      )}
      style={image ? undefined : { background: gradient }}
    >
      {image ? (
        <>
          <img
            src={image}
            alt=""
            className="absolute inset-0 h-full w-full"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </>
      ) : (
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: theme.resourceCards.overlay }}
          aria-hidden
        />
      )}
      {tag ? (
        <span
          className="relative z-10 rounded-md px-2.5 py-1 text-[0.72rem] font-bold tracking-wider text-white uppercase backdrop-blur-sm"
          style={{ backgroundColor: `${accent}cc` }}
        >
          {tag}
        </span>
      ) : null}
    </div>
  );
}
