"use client";

import React from "react";
import { useTheme } from "next-themes";

interface SectionPillProps {
  label: string;
}

const SectionPill: React.FC<SectionPillProps> = ({ label }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <span
      className={`inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-[0.16em] ${
        isDark
          ? "border-cyan-500/35 bg-cyan-500/10 text-cyan-300"
          : "border-cyan-600/35 bg-cyan-50 text-cyan-700"
      }`}
    >
      {label}
    </span>
  );
};

export default SectionPill;
