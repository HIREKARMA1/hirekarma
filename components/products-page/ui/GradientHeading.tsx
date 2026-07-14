import { HighlightMark } from "@/components/shared/HighlightMark";
import { cn } from "@/lib/utils/cn";
import type { HeadingParts } from "@/types/products-page";

interface GradientHeadingProps {
  heading: HeadingParts;
  as?: "h1" | "h2" | "h3";
  className?: string;
  size?: "hero" | "section" | "cta";
  layout?: "inline" | "stacked";
  /** Kept for API compatibility; accent now uses the yellow mark treatment. */
  accentColor?: string;
}

const sizeClasses = {
  hero: "text-[1.875rem] leading-[1.22] sm:text-4xl sm:leading-[1.1] lg:text-[3.25rem] xl:text-[3.5rem]",
  section: "text-2xl sm:text-3xl lg:text-4xl",
  cta: "text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem]",
};

export function GradientHeading({
  heading,
  as: Tag = "h2",
  className,
  size = "section",
  layout = "inline",
}: GradientHeadingProps) {
  const accentSpan = <HighlightMark nowrap={false}>{heading.gradient}</HighlightMark>;

  if (layout === "stacked") {
    return (
      <Tag
        className={cn(
          "font-bold leading-[1.1] tracking-tight text-gray-900 dark:text-white",
          sizeClasses[size],
          className
        )}
      >
        <span className="block">{heading.part1}</span>
        <span className="block">{accentSpan}</span>
        {heading.part2 ? <span className="block">{heading.part2}</span> : null}
      </Tag>
    );
  }

  return (
    <Tag
      className={cn(
        "font-bold leading-[1.15] tracking-tight text-gray-900 dark:text-white",
        sizeClasses[size],
        className
      )}
    >
      {heading.part1} {accentSpan}
      {heading.part2 ? ` ${heading.part2}` : null}
    </Tag>
  );
}
