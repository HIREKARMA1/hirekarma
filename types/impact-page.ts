import type { Locale } from "@/types/products-page";

export type ImpactTemplate = "college" | "student" | "corporate";

export interface ImpactCta {
  label: string;
  href: string;
}

export interface ImpactStat {
  id: string;
  value: string;
  label: string;
}

export interface ImpactDivisionStat {
  id: string;
  label: string;
  count: string;
  icon: "briefcase" | "graduation" | "cpu" | "globe" | "users" | "book";
}

export interface ImpactFilterOption {
  id: string;
  label: string;
}

export interface ImpactStoryCard {
  id: string;
  slug: string;
  template: ImpactTemplate;
  title: string;
  location: string;
  summary: string;
  image?: string;
  imageAlt: string;
  divisionId: string;
  typeId: string;
  divisionLabel: string;
  typeLabel: string;
  readMore: string;
}

export interface ImpactDetailColumn {
  title: string;
  items?: string[];
  paragraphs?: string[];
}

export interface ImpactDetailMetric {
  value: string;
  label: string;
}

export interface ImpactDetailApproach {
  title: string;
  description: string;
}

export interface ImpactStoryDetail {
  slug: string;
  template: ImpactTemplate;
  breadcrumb: string;
  label: string;
  heading: string;
  headingAccent: string;
  description: string;
  tags: string[];
  primaryCta: ImpactCta;
  secondaryCta: ImpactCta;
  heroImage?: string;
  heroImageAlt: string;
  columns: ImpactDetailColumn[];
  metrics?: ImpactDetailMetric[];
  approaches?: ImpactDetailApproach[];
  quote: string;
  quoteName: string;
  quoteRole: string;
  quoteImage?: string;
}

export interface ImpactPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    heading: string;
    headingAccent: string;
    description: string;
    primaryCta: ImpactCta;
    secondaryCta: ImpactCta;
    note: string;
    overviewTitle: string;
    overviewStats: ImpactStat[];
    divisionsTitle: string;
    divisions: ImpactDivisionStat[];
    snapshotTitle: string;
    snapshotStats: ImpactStat[];
  };
  partnersNote: string;
  browse: {
    label: string;
    heading: string;
    divisionFiltersLabel: string;
    typeFiltersLabel: string;
    divisionFilters: ImpactFilterOption[];
    typeFilters: ImpactFilterOption[];
    empty: string;
    stories: ImpactStoryCard[];
  };
  cta: {
    heading: string;
    headingAccent: string;
    description: string;
    primaryCta: ImpactCta;
    secondaryCta: ImpactCta;
  };
  details: ImpactStoryDetail[];
}

export type { Locale };
