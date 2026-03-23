"use client";

import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { NavigationItem } from "./types";

type NavbarNavItemDesktopProps = {
  item: NavigationItem;
  isDark: boolean;
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onButtonClick: (e: React.MouseEvent) => void;
  onCloseDropdowns: () => void;
};

export function NavbarNavItemDesktop({
  item,
  isDark,
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onButtonClick,
  onCloseDropdowns,
}: NavbarNavItemDesktopProps) {
  const IconComponent = item.icon;

  return (
    <div
      className="relative group"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <button
        type="button"
        onClick={onButtonClick}
        className={`flex items-center gap-1 font-semibold text-sm xl:text-[15px] transition-colors duration-200 py-2 px-3 xl:px-4 rounded-full ${
          isOpen
            ? isDark
              ? "text-[#00E5FF]"
              : "text-cyan-600"
            : isDark
              ? "text-white hover:text-[#00E5FF]/90"
              : "text-gray-800 hover:text-cyan-600"
        }`}
      >
        <span className="whitespace-nowrap">{item.label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 opacity-60 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-1 w-72 rounded-2xl shadow-2xl border backdrop-blur-xl z-50 animate-in slide-in-from-top-2 duration-300 overflow-hidden ${
            isDark
              ? "bg-gray-900/95 border-gray-800/60"
              : "bg-white/95 border-gray-100/80"
          }`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <div className="p-4">
            <div
              className={`flex items-center space-x-2 mb-3 pb-3 border-b ${
                isDark ? "border-gray-800" : "border-gray-100"
              }`}
            >
              <IconComponent
                className={`w-4 h-4 ${
                  isDark ? "text-[#00E5FF]" : "text-cyan-600"
                }`}
              />
              <h3
                className={`font-semibold text-sm ${
                  isDark ? "text-gray-200" : "text-gray-800"
                }`}
              >
                {item.label}
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-1">
              {item.dropdownItems.map((dropdownItem, index) => {
                const DropdownIcon = dropdownItem.icon;
                return (
                  <Link
                    key={dropdownItem.label}
                    href={dropdownItem.href}
                    className={`flex items-center space-x-3 p-2 rounded-lg transition-all duration-200 group ${
                      isDark
                        ? "hover:bg-gradient-to-r hover:from-cyan-950 hover:to-blue-950"
                        : "hover:bg-gradient-to-r hover:from-cyan-50 hover:to-blue-50"
                    }`}
                    style={{ animationDelay: `${index * 50}ms` }}
                    onClick={onCloseDropdowns}
                  >
                    <div
                      className={`flex-shrink-0 w-7 h-7 rounded-lg bg-gradient-to-br flex items-center justify-center transition-all duration-200 ${
                        isDark
                          ? "from-cyan-900 to-blue-900 group-hover:from-cyan-800 group-hover:to-blue-800"
                          : "from-cyan-100 to-blue-100 group-hover:from-cyan-200 group-hover:to-blue-200"
                      }`}
                    >
                      <DropdownIcon
                        className={`w-3 h-3 transition-all duration-200 ${
                          isDark
                            ? "text-cyan-400 group-hover:text-cyan-300"
                            : "text-cyan-600 group-hover:text-cyan-700"
                        }`}
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span
                        className={`font-medium text-sm transition-colors duration-200 block truncate ${
                          isDark
                            ? "text-gray-300 group-hover:text-[#00E5FF]"
                            : "text-gray-700 group-hover:text-cyan-600"
                        }`}
                      >
                        {dropdownItem.label}
                      </span>
                    </div>
                    <ArrowRight
                      className={`w-3 h-3 transition-all duration-200 transform group-hover:translate-x-0.5 flex-shrink-0 ${
                        isDark
                          ? "text-gray-500 group-hover:text-[#00E5FF]"
                          : "text-gray-400 group-hover:text-cyan-500"
                      }`}
                    />
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
