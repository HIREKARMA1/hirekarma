"use client";

import { useEffect, useState } from "react";

import { theme } from "@/config/theme";
import { cn } from "@/lib/utils/cn";
import type { HeadingParts } from "@/types/products-page";
import { TextBlurReveal } from "./TextBlurReveal";

interface AnimatedHeroHeadingProps {
  heading: HeadingParts;
  className?: string;
  active?: boolean;
  onComplete?: () => void;
}

export function AnimatedHeroHeading({
  heading,
  className,
  active = false,
  onComplete,
}: AnimatedHeroHeadingProps) {
  const [lineIndex, setLineIndex] = useState(0);

  const lines = [
    { text: heading.part1 },
    { text: heading.gradient, style: { color: theme.colors.secondary } },
    ...(heading.part2 ? [{ text: heading.part2 }] : []),
  ];

  useEffect(() => {
    if (active) {
      setLineIndex(1);
      return;
    }
    setLineIndex(0);
  }, [active]);

  const handleLineComplete = (index: number) => {
    if (lineIndex !== index + 1) return;

    if (index < lines.length - 1) {
      setLineIndex(index + 2);
      return;
    }

    onComplete?.();
  };

  return (
    <h1
      className={cn(
        "text-left text-[2.125rem] font-extrabold leading-[1.18] tracking-tight text-white",
        "sm:text-[2.5rem] lg:text-[3.25rem] xl:text-[3.5rem]",
        className
      )}
    >
      {lines.map((line, index) => (
        <span key={line.text} className="block min-h-[1.2em]">
          <TextBlurReveal
            text={line.text}
            style={line.style}
            active={lineIndex >= index + 1}
            onComplete={() => handleLineComplete(index)}
          />
        </span>
      ))}
    </h1>
  );
}
