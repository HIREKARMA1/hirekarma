import type { LucideIcon } from "lucide-react";

export type NavbarDropdownItem = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type NavigationItem = {
  label: string;
  href: string;
  icon: LucideIcon;
  hasDropdown: boolean;
  dropdownItems: NavbarDropdownItem[];
};

export type NavbarProps = {
  className?: string;
};
