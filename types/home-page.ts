import type { Locale } from "@/types/products-page";

export type { Locale };

export interface HomeCta {
  label: string;
  href: string;
}

export interface HomeStatItem {
  id: string;
  value: string;
  label: string;
}

export interface HomeHeroBanner {
  heading: string;
  /** Phrase inside/after heading wrapped with the yellow highlighter. */
  headingHighlight?: string;
  description: string;
  primaryCta: HomeCta;
  secondaryCta: HomeCta;
  partnersNote: string;
}

export interface HomeStatsBar {
  items: HomeStatItem[];
}

export type HomeOfferingKind = "product" | "activity";

export interface HomeDivisionItem {
  id: string;
  number: string;
  title: string;
  description: string;
  kind: HomeOfferingKind;
  accent: string;
  image: string;
  href: string;
}

export interface HomeDivisionsSection {
  label: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  cta: HomeCta;
  items: HomeDivisionItem[];
}

export interface HomeJourneyStep {
  id: string;
  label: string;
  description: string;
}

export interface HomeJourneySection {
  label: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  steps: HomeJourneyStep[];
}

export interface HomeTechProduct {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  cta: HomeCta;
  image: string;
  tone: "light" | "dark";
  accent: string;
}

export interface HomeTechShowcase {
  label: string;
  heading: string;
  products: HomeTechProduct[];
}

export interface HomeTestimonialItem {
  name: string;
  designation: string;
  institution: string;
  feedback: string;
  image: string;
}

export interface HomeTestimonialsSection {
  heading: string;
  subheading: string;
  /** Phrase in subheading wrapped with the yellow highlighter. */
  subheadingHighlight?: string;
  description: string;
  items: HomeTestimonialItem[];
}

export interface HomeHiringCta {
  heading: string;
  headingHighlight?: string;
  description: string;
  primaryCta: HomeCta;
  secondaryCta: HomeCta;
}

export interface HomeDpiPartner {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export interface HomeDpiSection {
  label: string;
  heading: string;
  description: string;
  cta: HomeCta;
  partners: HomeDpiPartner[];
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export interface HomeFaqSection {
  heading: string;
  subheading: string;
  description: string;
  items: HomeFaqItem[];
}

export interface HomeCertificationItem {
  name: string;
  description: string;
  category: string;
}

export interface HomeCertificationsSection {
  heading: string;
  headingHighlight?: string;
  subheading: string;
  description: string;
  items: HomeCertificationItem[];
}

export interface HomePartnersNetworkSection {
  heading: string;
  headingHighlight?: string;
  subheading: string;
  description: string;
  universityPartnersLabel: string;
  corporatePartnersLabel: string;
}

export interface HomePageContent {
  heroBanner: HomeHeroBanner;
  statsBar: HomeStatsBar;
  divisions: HomeDivisionsSection;
  journey: HomeJourneySection;
  techShowcase: HomeTechShowcase;
  testimonials: HomeTestimonialsSection;
  hiringCta: HomeHiringCta;
  dpi: HomeDpiSection;
  faq: HomeFaqSection;
  partners: HomePartnersNetworkSection;
  certificationsSection: HomeCertificationsSection;
}
