import type { ReactNode } from "react";

import { theme } from "@/config/theme";
import { cn } from "@/lib/utils/cn";

type HighlightMarkProps = {
  children: ReactNode;
  className?: string;
  /** Allow the mark to wrap across lines. Default keeps a single stroke. */
  nowrap?: boolean;
};

/**
 * Brand yellow highlighter stroke behind the lower portion of text
 * (same treatment as Mission / People heroes).
 */
export function HighlightMark({
  children,
  className,
  nowrap = true,
}: HighlightMarkProps) {
  return (
    <span
      className={cn(nowrap && "whitespace-nowrap", className)}
      style={{
        backgroundImage: `linear-gradient(transparent 65%, ${theme.colors.yellow} 65%, ${theme.colors.yellow} 95%, transparent 95%)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        padding: "0 0.05em",
      }}
    >
      {children}
    </span>
  );
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
