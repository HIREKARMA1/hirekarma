"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import type { NavbarProps } from "./types";
import { NAVIGATION_ITEMS } from "./navigation-items";
import { getNavbarPillClass } from "./navbar-pill-classes";
import { NavbarLogo } from "./NavbarLogo";
import { NavbarDesktopNav } from "./NavbarDesktopNav";
import { NavbarMobileControls } from "./NavbarMobileControls";
import { NavbarMobilePanel } from "./NavbarMobilePanel";

const Navbar: React.FC<NavbarProps> = ({ className = "" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  const isDark = mounted && resolvedTheme === "dark";

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdownHover = (dropdown: string) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleDropdownClick = (dropdown: string, event: React.MouseEvent) => {
    event.preventDefault();
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeDropdowns = () => {
    setActiveDropdown(null);
  };

  const pillClass = getNavbarPillClass(isDark, isScrolled);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 pt-4 sm:pt-5 md:pt-6 transition-all duration-300 bg-transparent ${className}`}
      >
        <div className="content-container">
          <div
            className={`flex flex-wrap items-center justify-between gap-3 px-4 py-3.5 sm:px-6 sm:py-4 md:px-8 md:py-4.5 ${pillClass}`}
          >
            <NavbarLogo isDark={isDark} />

            <NavbarDesktopNav
              navigationItems={NAVIGATION_ITEMS}
              isDark={isDark}
              mounted={mounted}
              activeDropdown={activeDropdown}
              onDropdownHover={handleDropdownHover}
              onDropdownLeave={handleDropdownLeave}
              onDropdownClick={handleDropdownClick}
              onCloseDropdowns={closeDropdowns}
            />

            <NavbarMobileControls
              isDark={isDark}
              mounted={mounted}
              isMobileMenuOpen={isMobileMenuOpen}
              onToggleMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            />
          </div>

          <NavbarMobilePanel
            navigationItems={NAVIGATION_ITEMS}
            isDark={isDark}
            isOpen={isMobileMenuOpen}
            activeDropdown={activeDropdown}
            onDropdownClick={handleDropdownClick}
            onCloseDropdowns={closeDropdowns}
            onCloseMobileMenu={() => setIsMobileMenuOpen(false)}
          />
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden
        />
      )}

      {activeDropdown && (
        <div
          className="fixed inset-0 z-40 lg:block hidden"
          onClick={closeDropdowns}
          aria-hidden
        />
      )}
    </>
  );
};

export default Navbar;
