"use client";

import React from "react";
import { useTheme } from "next-themes";

interface InfoChipProps {
  label: string;
}

const InfoChip: React.FC<InfoChipProps> = ({ label }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <span
      className={`inline-flex rounded-full border px-2.5 py-1 text-sm leading-none ${
        isDark
          ? "border-gray-700 bg-gray-900/70 text-gray-400"
          : "border-gray-300 bg-gray-100 text-gray-600"
      }`}
    >
      {label}
    </span>
  );
};

export default InfoChip;
