import type { ProductAccentKey } from "@/config/theme";
import type { HeadingParts, ImpactStat } from "@/types/products-page";

export type Locale = "en" | "hi" | "od";

export interface InitiativeCta {
  label: string;
  href: string;
  variant: "primary" | "outline" | "ghost";
}

export interface ClientProjectItem {
  id: string;
  accentKey: ProductAccentKey;
  image: string;
  title: string;
  clientType: string;
  subtitle: string;
  description: string;
  href: string;
  cta: InitiativeCta;
}

export interface ItServiceItem {
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
  features: { text: string }[];
}

export interface OtherInitiativesPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    heading: HeadingParts;
    description: string;
    footerNote: string;
  };
  projectsSection: {
    label: string;
    heading: HeadingParts;
    description: string;
    items: ClientProjectItem[];
  };
  servicesSection: {
    label: string;
    heading: HeadingParts;
    description: string;
    items: ItServiceItem[];
  };
  impact: {
    label: string;
    heading: HeadingParts;
    description: string;
    stats: ImpactStat[];
  };
  cta: {
    heading: HeadingParts;
    description: string;
    buttons: InitiativeCta[];
  };
  homeSection: {
    heading: string;
    subheading: string;
    description: string;
    viewMore: string;
    viewProject: string;
  };
}
