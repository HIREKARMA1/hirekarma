import type { ReactNode } from "react";

import { cn } from "@/lib/utils/cn";

type HighlightMarkProps = {
  children: ReactNode;
  className?: string;
  /** Kept for API compatibility; highlight stroke has been removed. */
  nowrap?: boolean;
};

/**
 * Phrase wrapper used by headings. Renders as plain text (no yellow mark).
 */
export function HighlightMark({
  children,
  className,
}: HighlightMarkProps) {
  return <span className={cn(className)}>{children}</span>;
}

/**
 * Renders `text` with the first occurrence of `mark` wrapped in HighlightMark.
 * If `mark` is empty or not found, returns `text` unchanged.
 */
export function withHighlightMark(
  text: string,
  mark?: string | null,
  options?: { nowrap?: boolean; className?: string }
): ReactNode {
  if (!mark) return text;
  const index = text.indexOf(mark);
  if (index === -1) {
    return (
      <>
        {text}{" "}
        <HighlightMark nowrap={options?.nowrap} className={options?.className}>
          {mark}
        </HighlightMark>
      </>
    );
  }
  const before = text.slice(0, index);
  const after = text.slice(index + mark.length);
  return (
    <>
      {before}
      <HighlightMark nowrap={options?.nowrap} className={options?.className}>
        {mark}
      </HighlightMark>
      {after}
    </>
  );
}

/**
 * Heading + trailing highlight phrase (Mission/People hero pattern).
 */
export function HighlightedHeadingParts({
  heading,
  highlight,
  className,
}: {
  heading: string;
  highlight?: string | null;
  className?: string;
}) {
  if (!highlight) return <>{heading}</>;
  return (
    <>
      {heading}{" "}
      <HighlightMark className={className}>{highlight}</HighlightMark>
    </>
  );
}
