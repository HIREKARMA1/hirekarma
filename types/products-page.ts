import type { HrefKey } from "@/lib/config/env";
import type { ProductAccentKey } from "@/config/theme";

export type Locale = "en" | "hi" | "od";

export interface LocalizedText {
  en: string;
  hi: string;
  od: string;
}

export interface CtaLink {
  label: string;
  hrefKey: HrefKey;
  variant: "primary" | "outline" | "ghost";
}

export interface HeadingParts {
  part1: string;
  gradient: string;
  part2: string;
}

export interface HeroContent {
  label: string;
  heading: HeadingParts;
  description: string;
  primaryCta: CtaLink;
  secondaryCta: CtaLink;
  footerNote: string;
}

export interface PartnersContent {
  text: string;
}

export interface ProductFeature {
  text: string;
}

export interface ProductItem {
  id: string;
  accentKey: ProductAccentKey;
  icon:
    | "graduation-cap"
    | "cpu"
    | "users"
    | "briefcase"
    | "building"
    | "map-pin"
    | "shield-check";
  title: string;
  subtitle: string;
  description: string;
  features: ProductFeature[];
  cta: CtaLink;
}

export interface ProductsSectionContent {
  label: string;
  heading: HeadingParts;
  description: string;
  items: ProductItem[];
}

export interface ImpactStat {
  id: string;
  icon: "users" | "graduation-cap" | "briefcase" | "building" | "shield-check";
  value: string;
  label: string;
  accentKey: ProductAccentKey | "primary";
}

export interface ImpactContent {
  label: string;
  heading: HeadingParts;
  description: string;
  stats: ImpactStat[];
}

export interface CtaSectionContent {
  heading: HeadingParts;
  description: string;
  buttons: CtaLink[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  designation: string;
  image: string;
}

export interface TestimonialsContent {
  label: string;
  heading: HeadingParts;
  items: TestimonialItem[];
}

export interface ProductsPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: HeroContent;
  partners: PartnersContent;
  productsSection: ProductsSectionContent;
  impact: ImpactContent;
  testimonials: TestimonialsContent;
  cta: CtaSectionContent;
}

export interface SlideImage {
  src: string;
  /** Short product name shown on the hero capture */
  label: LocalizedText;
  alt: LocalizedText;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export type TrustCategory = "college" | "company";

export interface TrustLogo {
  id: string;
  name: string;
  logo: string;
  category: TrustCategory;
}

export interface TrustSettings {
  marqueeSpeedSeconds: number;
  variant: "mono" | "chip";
}

export interface TrustConfig {
  settings: TrustSettings;
}

export interface TrustLogosData {
  logos: TrustLogo[];
}

export interface ProductMedia {
  image: string;
}

export interface ProductsPageMedia {
  hero: {
    tabletSlides: SlideImage[];
  };
  partners: {
    logos: PartnerLogo[];
    bannerImage?: string;
  };
  products: Record<string, ProductMedia>;
}
