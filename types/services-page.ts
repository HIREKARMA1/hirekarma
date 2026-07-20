import type { Locale } from "@/types/products-page";

export interface ServiceMeta {
  title: string;
  description: string;
}

export interface ServiceStat {
  value: string;
  label: string;
  /** Marks a number that still needs real internal data (see spec §9/§11). */
  placeholder?: boolean;
}

export interface ServiceHeroContent {
  eyebrow?: string;
  heading: string;
  headingHighlight?: string;
  description: string;
  /** Optional supporting sub-line under the description. */
  note?: string;
}

export interface ServiceIconCard {
  icon: string;
  title: string;
  description?: string;
}

export interface ServiceProcessStep {
  title: string;
  description: string;
}

export interface ServiceSubCard {
  id: string;
  name: string;
  tagline: string;
  description?: string;
  href: string;
  accent: string;
  external?: boolean;
  cta?: string;
}

export interface ServiceBulletGroup {
  heading: string;
  description?: string;
  items: string[];
}

export interface ServiceCallout {
  heading?: string;
  text: string;
  href?: string;
  linkLabel?: string;
}

export interface ServiceFlowStep {
  title: string;
  description?: string;
}

export interface ServiceTestimonialContent {
  quote: string;
  name: string;
  role: string;
  org?: string;
  image?: string;
}

export interface ServiceCaseStudy {
  name: string;
  role?: string;
  quote: string;
  image?: string;
}

export interface ServiceProjectCard {
  name: string;
  description?: string;
  image: string;
  href?: string;
  /** When false, the project is rendered as "coming soon" without a live link. */
  live?: boolean;
}

export interface ServiceCardSection {
  label?: string;
  heading: string;
  description?: string;
  items: ServiceIconCard[];
  columns?: 2 | 3 | 4;
}

export interface ServiceProcessSection {
  label?: string;
  heading: string;
  description?: string;
  steps: ServiceProcessStep[];
}

export interface ServiceCtaContent {
  heading: string;
  description?: string;
  buttonLabel: string;
  /** Tag forwarded to /contact?service=... so leads route to the right owner. */
  service: string;
}

export interface ServiceCrossLink {
  text: string;
  href: string;
  label: string;
}

export type DivisionSectionKey =
  | "stats"
  | "subCards"
  | "modules"
  | "process"
  | "cardSections"
  | "cardSections2"
  | "partners"
  | "callout"
  | "flow"
  | "bulletGroups"
  | "caseStudies"
  | "projects"
  | "testimonial"
  | "crossLinks";

export interface DivisionPageContent {
  slug: string;
  accent: string;
  /** Order in which body sections render between the hero and the CTA. */
  order: DivisionSectionKey[];
  meta: ServiceMeta;
  hero: ServiceHeroContent;
  stats?: ServiceStat[];
  statsNote?: string;
  subCards?: { heading?: string; description?: string; items: ServiceSubCard[] };
  modules?: ServiceCardSection;
  cardSections?: ServiceCardSection[];
  cardSections2?: ServiceCardSection[];
  partners?: ServiceCardSection;
  process?: ServiceProcessSection;
  bulletGroups?: ServiceBulletGroup[];
  callout?: ServiceCallout;
  flow?: { label?: string; heading: string; description?: string; steps: ServiceFlowStep[] };
  caseStudies?: { heading: string; description?: string; items: ServiceCaseStudy[] };
  projects?: { label?: string; heading: string; description?: string; items: ServiceProjectCard[] };
  testimonial?: ServiceTestimonialContent;
  cta: ServiceCtaContent;
  crossLinks?: ServiceCrossLink[];
}

export interface ServicesLandingCard {
  id: string;
  slug: string;
  icon: string;
  title: string;
  description: string;
  stat: string;
  accent: string;
}

export interface ServicesLandingContentData {
  meta: ServiceMeta;
  hero: ServiceHeroContent;
  supportingLine?: string;
  cards: ServicesLandingCard[];
  footerCta: { heading: string; description?: string; buttonLabel: string };
}

export interface ServicesPageContent {
  landing: ServicesLandingContentData;
  divisions: Record<string, DivisionPageContent>;
}

export type { Locale };
