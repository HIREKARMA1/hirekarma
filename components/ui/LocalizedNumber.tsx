import { localizeNumerals } from "@/lib/i18n/localizeNumerals";
import type { Locale } from "@/types/products-page";

interface LocalizedNumberProps {
  value: string;
  locale: Locale;
  className?: string;
}

export function LocalizedNumber({
  value,
  locale,
  className,
}: LocalizedNumberProps) {
  return <span className={className}>{localizeNumerals(value, locale)}</span>;
}
