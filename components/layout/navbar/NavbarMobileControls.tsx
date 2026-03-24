"use client";

import { Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { NavbarThemeToggle } from "./NavbarThemeToggle";

type NavbarMobileControlsProps = {
  isDark: boolean;
  mounted: boolean;
  isMobileMenuOpen: boolean;
  onToggleMenu: () => void;
};

export function NavbarMobileControls({
  isDark,
  mounted,
  isMobileMenuOpen,
  onToggleMenu,
}: NavbarMobileControlsProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="flex lg:hidden items-center gap-2.5 shrink-0">
      <NavbarThemeToggle
        isDark={isDark}
        mounted={mounted}
        resolvedTheme={resolvedTheme}
        onToggle={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        variant="mobile"
      />
      <button
        type="button"
        onClick={onToggleMenu}
        className={`p-2.5 rounded-full transition-all duration-200 ${
          isDark
            ? "text-white hover:text-[#00E5FF]"
            : "text-gray-800 hover:text-cyan-600"
        }`}
        aria-expanded={isMobileMenuOpen}
        aria-label="Toggle menu"
      >
        <div className="relative w-6 h-6">
          <Menu
            className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-0 rotate-90"
                : "opacity-100 rotate-0"
            }`}
          />
          <X
            className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
              isMobileMenuOpen
                ? "opacity-100 rotate-0"
                : "opacity-0 -rotate-90"
            }`}
          />
        </div>
      </button>
    </div>
  );
}
