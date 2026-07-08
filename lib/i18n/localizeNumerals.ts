import type { Locale } from "@/types/products-page";

const DEVANAGARI_DIGITS = ["०", "१", "२", "३", "४", "५", "६", "७", "८", "९"] as const;
const ODIA_DIGITS = ["୦", "୧", "୨", "୩", "୪", "୫", "୬", "୭", "୮", "୯"] as const;

/** Converts Latin digits in a display string to locale-appropriate numerals. */
export function localizeNumerals(value: string, locale: Locale): string {
  if (!value || locale === "en") return value;

  const digits = locale === "hi" ? DEVANAGARI_DIGITS : ODIA_DIGITS;
  return value.replace(/\d/g, (char) => digits[Number(char)] ?? char);
}
