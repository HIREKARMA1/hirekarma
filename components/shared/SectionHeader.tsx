"use client";

import React from "react";

import { theme } from "@/config/theme";
import { withHighlightMark } from "@/components/shared/HighlightMark";

interface SectionHeaderProps {
  title: string;
  /** Phrase in title to wrap with the yellow highlighter. */
  highlight?: string;
  subtitle?: string;
  description?: string;
  alignment?: "left" | "center";
  className?: string;
  accent?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  highlight,
  subtitle,
  description,
  alignment = "center",
  className = "",
  accent = theme.colors.secondary,
}) => {
  const alignmentClasses =
    alignment === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div
      className={`flex flex-col space-y-3 md:space-y-4 ${alignmentClasses} ${className}`}
    >
      {subtitle ? (
        <span
          className="inline-block text-[11px] font-semibold uppercase tracking-[0.18em]"
          style={{ color: accent }}
        >
          {subtitle}
        </span>
      ) : null}

      <h2 className="text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.85rem] lg:text-[2rem]">
        {withHighlightMark(title, highlight)}
      </h2>

      {description ? (
        <p className="max-w-3xl text-sm leading-relaxed text-[#0f1622]/65 sm:text-[15px]">
          {description}
        </p>
      ) : null}
    </div>
  );
};

export default SectionHeader;
