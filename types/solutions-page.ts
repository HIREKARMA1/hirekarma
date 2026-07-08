import type { Locale } from "@/types/products-page";

export type { Locale };

export interface SolutionsListItem {
  title: string;
  description: string;
}

export interface SolutionsHeroContent {
  badge: string;
  heading: string;
  headingAccent: string;
  /** Supports **bold** markers for emphasized phrases. */
  description: string;
  cta: string;
  imageAlt: string;
}

export interface SolutionsProblemContent {
  heading: string;
  headingAccent: string;
  items: SolutionsListItem[];
  imageAlts: [string, string, string, string];
}

export interface SolutionsSolutionContent {
  heading: string;
  items: SolutionsListItem[];
  imageAlt: string;
}

export interface SolutionsPersonaContent {
  hero: SolutionsHeroContent;
  problem: SolutionsProblemContent;
  solution: SolutionsSolutionContent;
}

export interface SolutionsPageContent {
  students: SolutionsPersonaContent;
  university: SolutionsPersonaContent;
  corporate: SolutionsPersonaContent;
  skillDevelopment: SolutionsPersonaContent;
}
