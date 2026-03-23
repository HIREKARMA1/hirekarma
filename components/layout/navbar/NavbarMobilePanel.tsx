"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import type { NavigationItem } from "./types";

type NavbarMobilePanelProps = {
  navigationItems: NavigationItem[];
  isDark: boolean;
  isOpen: boolean;
  activeDropdown: string | null;
  onDropdownClick: (label: string, e: React.MouseEvent) => void;
  onCloseDropdowns: () => void;
  onCloseMobileMenu: () => void;
};

export function NavbarMobilePanel({
  navigationItems,
  isDark,
  isOpen,
  activeDropdown,
  onDropdownClick,
  onCloseDropdowns,
  onCloseMobileMenu,
}: NavbarMobilePanelProps) {
  return (
    <div
      className={`lg:hidden transition-all duration-500 overflow-hidden ${
        isOpen ? "max-h-[calc(100vh-6rem)] opacity-100 mt-3" : "max-h-0 opacity-0"
      }`}
    >
      <div
        className={`rounded-2xl border overflow-y-auto max-h-[calc(100vh-6rem)] backdrop-blur-xl ${
          isDark
            ? "border-[rgba(0,229,255,0.25)] bg-[rgba(0,0,0,0.5)]"
            : "border-cyan-500/20 bg-white/90"
        }`}
      >
        <div className="px-4 py-5 pb-8 space-y-1">
          {navigationItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <div key={item.label} className="space-y-1">
                <button
                  type="button"
                  onClick={(e) => onDropdownClick(item.label, e)}
                  className={`flex items-center justify-between w-full text-left font-semibold py-3 px-3 rounded-xl transition-all duration-200 ${
                    isDark
                      ? "text-white hover:bg-white/5"
                      : "text-gray-800 hover:bg-gray-100/80"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <IconComponent
                      className={`w-4 h-4 shrink-0 ${
                        isDark ? "text-[#00E5FF]" : "text-cyan-600"
                      }`}
                    />
                    <span>{item.label}</span>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-300 shrink-0 ${
                      activeDropdown === item.label ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {activeDropdown === item.label && (
                  <div className="ml-2 space-y-1 animate-in slide-in-from-top-2 duration-300 border-l border-white/10 pl-3">
                    {item.dropdownItems.map((dropdownItem) => {
                      const DropdownIcon = dropdownItem.icon;
                      return (
                        <Link
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className={`flex items-center space-x-3 w-full text-left font-medium py-2 px-3 rounded-lg transition-all duration-200 ${
                            isDark
                              ? "text-gray-300 hover:text-[#00E5FF] hover:bg-white/5"
                              : "text-gray-600 hover:text-cyan-600 hover:bg-cyan-50/80"
                          }`}
                          onClick={() => {
                            onCloseMobileMenu();
                            onCloseDropdowns();
                          }}
                        >
                          <DropdownIcon
                            className={`w-3.5 h-3.5 shrink-0 ${
                              isDark ? "text-[#00E5FF]" : "text-cyan-600"
                            }`}
                          />
                          <span className="text-sm">{dropdownItem.label}</span>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          <Link
            href="/contact"
            className="mt-4 flex items-center justify-center w-full rounded-full bg-white py-3 text-sm font-bold uppercase tracking-wide text-black shadow-sm"
            onClick={onCloseMobileMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}
