import type { HrefKey } from "@/lib/config/env";
import type { Locale, HeadingParts, CtaLink } from "@/types/products-page";

export type { Locale, HeadingParts, CtaLink };

export interface HomeHeroContent {
  badge: string;
  heading: HeadingParts;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  trustLabel: string;
}

export interface HomeStat {
  id: string;
  icon: "users" | "graduation-cap" | "briefcase" | "building" | "map-pin" | "shield-check";
  value: string;
  label: string;
}

export interface HomeDivision {
  id: string;
  number: string;
  title: string;
  description: string;
  accent: "primary" | "secondary" | "orange" | "yellow" | "green" | "red";
  hrefKey: HrefKey;
}

export interface HomeJourneyStep {
  id: string;
  label: string;
}

export interface HomeFeaturedProduct {
  id: string;
  title: string;
  description: string;
  cta: CtaLink;
  tone: "light" | "dark";
  accent: "primary" | "secondary" | "orange";
  metricLabel?: string;
  metricValue?: string;
}

export interface HomeTestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
  image: string;
  featured?: boolean;
}

export interface HomeHiringContent {
  heading: string;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
}

export interface HomeDpiPartner {
  id: string;
  name: string;
  logo: string;
}

export interface HomeDpiContent {
  label: string;
  heading: HeadingParts;
  description: string;
  cta: CtaLink;
  partners: HomeDpiPartner[];
}

export interface HomePageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: HomeHeroContent;
  stats: HomeStat[];
  divisions: {
    label: string;
    heading: HeadingParts;
    description: string;
    linkLabel: string;
    items: HomeDivision[];
  };
  journey: {
    label: string;
    heading: string;
    steps: HomeJourneyStep[];
  };
  featured: {
    label: string;
    heading: HeadingParts;
    products: HomeFeaturedProduct[];
  };
  testimonials: {
    label: string;
    heading: HeadingParts;
    items: HomeTestimonialItem[];
  };
  hiring: HomeHiringContent;
  dpi: HomeDpiContent;
}
