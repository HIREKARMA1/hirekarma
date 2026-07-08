"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { animate, useInView, useMotionValue } from "framer-motion";

import { localizeNumerals } from "@/lib/i18n/localizeNumerals";
import type { Locale } from "@/types/products-page";

interface ParsedStatValue {
  prefix: string;
  target: number;
  suffix: string;
  usesCommas: boolean;
}

function parseStatValue(value: string): ParsedStatValue {
  const match = value.trim().match(/^([^0-9]*)([0-9][0-9,]*)(.*)$/);
  if (!match) {
    return { prefix: "", target: 0, suffix: value, usesCommas: false };
  }

  const numericPart = match[2];
  return {
    prefix: match[1],
    target: parseInt(numericPart.replace(/,/g, ""), 10),
    suffix: match[3],
    usesCommas: numericPart.includes(","),
  };
}

function formatDisplay(n: number, parsed: ParsedStatValue, locale: Locale) {
  const rounded = Math.round(n);
  const num = parsed.usesCommas
    ? rounded.toLocaleString("en-US")
    : String(rounded);
  return localizeNumerals(`${parsed.prefix}${num}${parsed.suffix}`, locale);
}

interface NumberTickerProps {
  value: string;
  locale?: Locale;
  className?: string;
  style?: React.CSSProperties;
}

export function NumberTicker({
  value,
  locale = "en",
  className,
  style,
}: NumberTickerProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const parsed = useMemo(() => parseStatValue(value), [value]);
  const count = useMotionValue(0);
  const [display, setDisplay] = useState(() => formatDisplay(0, parsed, locale));

  useEffect(() => {
    setDisplay(formatDisplay(0, parsed, locale));
    count.set(0);
  }, [value, parsed, count, locale]);

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, parsed.target, {
      duration: 2.2,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, count, parsed.target]);

  useEffect(() => {
    return count.on("change", (latest) => {
      setDisplay(formatDisplay(latest, parsed, locale));
    });
  }, [count, parsed, locale]);

  const localizedValue = useMemo(
    () => localizeNumerals(value, locale),
    [value, locale]
  );

  return (
    <p ref={ref} className={className} style={style} aria-label={localizedValue}>
      {display}
    </p>
  );
}
