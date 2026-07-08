import type { Locale } from "@/types/products-page";

export type { Locale };

export interface HomeStatItem {
  value: string;
  label: string;
}

export interface HomeFaqItem {
  question: string;
  answer: string;
}

export interface HomeCertificationItem {
  name: string;
  description: string;
  category: string;
}

export interface HomeHeroBanner {
  heading: string;
  subheading: string;
  description: string;
}

export interface HomeProductItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface HomeTestimonialItem {
  name: string;
  designation: string;
  institution: string;
  feedback: string;
  image: string;
}

export interface HomeImpactSection {
  heading: string;
  subheading: string;
  description: string;
  primaryStat: HomeStatItem;
  stats: HomeStatItem[];
  chartComingSoon: string;
}

export interface HomeProductsSection {
  heading: string;
  subheading: string;
  description: string;
  viewMore: string;
  productBadge: string;
  items: HomeProductItem[];
}

export interface HomeTestimonialsSection {
  heading: string;
  subheading: string;
  description: string;
  items: HomeTestimonialItem[];
}

export interface HomeProblemStatement {
  heading: string;
  subheading: string;
  paragraph1: string;
  paragraph2: string;
  domains: string[];
}

export interface HomeFutureReadySection {
  heading: string;
  subheading: string;
  description: string;
  cta: string;
}

export interface HomeFaqSection {
  heading: string;
  subheading: string;
  description: string;
  items: HomeFaqItem[];
}

export interface HomePartnersSection {
  heading: string;
  subheading: string;
  description: string;
  universityPartnersLabel: string;
  corporatePartnersLabel: string;
}

export interface HomeGoogleLocationSection {
  heading: string;
  subheading: string;
  description: string;
}

export interface HomeCertificationsSection {
  heading: string;
  subheading: string;
  description: string;
  items: HomeCertificationItem[];
}

export interface HomePageContent {
  heroBanner: HomeHeroBanner;
  impactSection: HomeImpactSection;
  productsSection: HomeProductsSection;
  problemStatement: HomeProblemStatement;
  futureReadySection: HomeFutureReadySection;
  testimonials: HomeTestimonialsSection;
  faq: HomeFaqSection;
  partners: HomePartnersSection;
  googleLocationSection: HomeGoogleLocationSection;
  certificationsSection: HomeCertificationsSection;
}
