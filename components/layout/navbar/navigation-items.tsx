import {
  BookOpen,
  Heart,
  UsersRound,
  Users,
  TrendingUp,
  Compass,
  Zap,
  TargetIcon,
  Briefcase,
} from "lucide-react";
import type { NavigationItem } from "./types";

export const NAVIGATION_ITEMS: NavigationItem[] = [
  {
    label: "About Us",
    href: "/about-us",
    icon: Users,
    hasDropdown: true,
    dropdownItems: [
      { label: "Our Story", href: "/about-us/our-story", icon: BookOpen },
      {
        label: "Mission & Value",
        href: "/about-us/mission-value",
        icon: Heart,
      },
      { label: "People", href: "/about-us/people", icon: UsersRound },
    ],
  },
  {
    label: "Products",
    href: "/products",
    icon: Zap,
    hasDropdown: true,
    dropdownItems: [
      { label: "Disha", href: "https://disha.hirekarma.in/", icon: Compass },
      {
        label: "SolviqAI",
        href: "https://www.solviqai.in/",
        icon: TrendingUp,
      },
      { label: "Shortlisted", href: "/shortlisted", icon: TargetIcon },
    ],
  },
  {
    label: "Services",
    href: "/solutions/students",
    icon: Briefcase,
    hasDropdown: true,
    dropdownItems: [
      {
        label: "For Students",
        href: "/solutions/students",
        icon: Users,
      },
      {
        label: "For Corporate",
        href: "/solutions/corporate",
        icon: Briefcase,
      },
      {
        label: "For University",
        href: "/solutions/university",
        icon: UsersRound,
      },
      {
        label: "For Skill Development",
        href: "/solutions/skill-development",
        icon: Zap,
      },
    ],
  },
];
