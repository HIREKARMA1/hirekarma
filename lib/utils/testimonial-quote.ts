/** Visual line limit for testimonial cards (matches card layout). */
export const TESTIMONIAL_MAX_LINES = 6;

/**
 * Approx. characters that fit in {@link TESTIMONIAL_MAX_LINES} at card text sizes.
 * Calibrated to the Nrusingh Samanata reference quote (~195 chars).
 */
export const TESTIMONIAL_MAX_CHARS = 240;

const ELLIPSIS = "...";

export interface FormattedTestimonialQuote {
  display: string;
  full: string;
  isTruncated: boolean;
}

function truncateAtWord(text: string, maxChars: number): string {
  if (text.length <= maxChars) return text;

  const slice = text.slice(0, maxChars);
  const lastSpace = slice.lastIndexOf(" ");

  if (lastSpace > 0) return slice.slice(0, lastSpace);

  return slice;
}

/**
 * Formats a testimonial quote for display.
 * JSON should keep quotes within {@link TESTIMONIAL_MAX_LINES} lines; longer
 * content is trimmed and ends with "...".
 */
export function formatTestimonialQuote(
  quote: string,
  options?: { maxLines?: number; maxChars?: number }
): FormattedTestimonialQuote {
  const maxLines = options?.maxLines ?? TESTIMONIAL_MAX_LINES;
  const maxChars = options?.maxChars ?? TESTIMONIAL_MAX_CHARS;
  const full = quote.trim();

  if (!full) {
    return { display: "", full: "", isTruncated: false };
  }

  const lines = full
    .split(/\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length > maxLines) {
    return {
      display: `${lines.slice(0, maxLines).join(" ")}${ELLIPSIS}`,
      full,
      isTruncated: true,
    };
  }

  const text = lines.join(" ");

  if (text.length <= maxChars) {
    return { display: text, full, isTruncated: false };
  }

  return {
    display: `${truncateAtWord(text, maxChars)}${ELLIPSIS}`,
    full,
    isTruncated: true,
  };
}
