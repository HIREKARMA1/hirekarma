import type { HeadingParts } from "@/types/products-page";
import { GradientHeading } from "./GradientHeading";
import { SectionLabel } from "./SectionLabel";
import { cn } from "@/lib/utils/cn";

interface ProductsSectionHeaderProps {
  label: string;
  heading: HeadingParts;
  accentColor?: string;
  className?: string;
}

/** Shared section header — label + single-line gradient heading only. */
export function ProductsSectionHeader({
  label,
  heading,
  accentColor,
  className,
}: ProductsSectionHeaderProps) {
  return (
    <div className={cn("mb-12 max-w-3xl space-y-5 sm:mb-16 sm:space-y-6", className)}>
      <SectionLabel>{label}</SectionLabel>
      <GradientHeading
        heading={heading}
        as="h2"
        size="section"
        layout="inline"
        accentColor={accentColor}
      />
    </div>
  );
}