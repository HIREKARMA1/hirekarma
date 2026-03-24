"use client";

import { Moon, Sun } from "lucide-react";

type NavbarThemeToggleProps = {
  isDark: boolean;
  mounted: boolean;
  resolvedTheme: string | undefined;
  onToggle: () => void;
  variant: "desktop" | "mobile";
};

export function NavbarThemeToggle({
  isDark,
  mounted,
  resolvedTheme,
  onToggle,
  variant,
}: NavbarThemeToggleProps) {
  if (!mounted) return null;

  const desktop =
    "p-2.5 rounded-full transition-all duration-300 " +
    (isDark
      ? "text-white/80 hover:text-[#00E5FF] hover:bg-white/5"
      : "text-gray-700 hover:text-cyan-600 hover:bg-gray-100/80");

  const mobile =
    "p-2.5 rounded-full transition-all duration-200 " +
    (isDark
      ? "text-white/90 hover:text-[#00E5FF]"
      : "text-gray-800 hover:text-cyan-600");

  return (
    <button
      type="button"
      onClick={onToggle}
      className={variant === "desktop" ? desktop : mobile}
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5.5 h-5.5" />
      ) : (
        <Moon className="w-5.5 h-5.5" />
      )}
    </button>
  );
}
