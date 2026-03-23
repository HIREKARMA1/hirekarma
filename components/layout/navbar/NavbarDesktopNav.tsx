"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import type { NavigationItem } from "./types";
import { NavbarNavItemDesktop } from "./NavbarNavItemDesktop";
import { NavbarThemeToggle } from "./NavbarThemeToggle";

type NavbarDesktopNavProps = {
  navigationItems: NavigationItem[];
  isDark: boolean;
  mounted: boolean;
  activeDropdown: string | null;
  onDropdownHover: (label: string) => void;
  onDropdownLeave: () => void;
  onDropdownClick: (label: string, e: React.MouseEvent) => void;
  onCloseDropdowns: () => void;
};

export function NavbarDesktopNav({
  navigationItems,
  isDark,
  mounted,
  activeDropdown,
  onDropdownHover,
  onDropdownLeave,
  onDropdownClick,
  onCloseDropdowns,
}: NavbarDesktopNavProps) {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <div className="hidden lg:flex items-center gap-1 xl:gap-2">
      {navigationItems.map((item) => (
        <NavbarNavItemDesktop
          key={item.label}
          item={item}
          isDark={isDark}
          isOpen={activeDropdown === item.label}
          onMouseEnter={() => onDropdownHover(item.label)}
          onMouseLeave={onDropdownLeave}
          onButtonClick={(e) => onDropdownClick(item.label, e)}
          onCloseDropdowns={onCloseDropdowns}
        />
      ))}

      <NavbarThemeToggle
        isDark={isDark}
        mounted={mounted}
        resolvedTheme={resolvedTheme}
        onToggle={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        variant="desktop"
      />

      <Link
        href="/contact"
        className="ml-1 inline-flex items-center justify-center rounded-full bg-white px-6 py-2.5 text-sm font-bold uppercase tracking-wide text-black shadow-sm transition-transform duration-200 hover:scale-[1.02] hover:bg-white/95 active:scale-[0.98]"
      >
        Contact
      </Link>
    </div>
  );
}
