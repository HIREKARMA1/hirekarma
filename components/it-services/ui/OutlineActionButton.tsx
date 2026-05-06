"use client";

import Link from "next/link";
import React from "react";
import { ArrowUpRight } from "lucide-react";
import { useTheme } from "next-themes";

interface OutlineActionButtonProps {
  label: string;
  href: string;
}

const OutlineActionButton: React.FC<OutlineActionButtonProps> = ({ label, href }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2 border px-5 py-3 text-sm sm:text-base font-semibold transition-all duration-300 ${
        isDark
          ? "border-gray-600 bg-transparent text-gray-100 hover:border-cyan-500/60 hover:text-cyan-300"
          : "border-gray-300 bg-transparent text-gray-900 hover:border-cyan-500 hover:text-cyan-700"
      }`}
    >
      <span>{label}</span>
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
};

export default OutlineActionButton;
