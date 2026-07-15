import type { Locale } from "@/types/products-page";

export type { Locale };

export interface PartnerItem {
  id: string;
  name: string;
  description: string;
}

export interface PartnerBenefit {
  title: string;
  description: string;
}

export interface PartnerStat {
  value: string;
  label: string;
}

export interface PartnersPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    trustLine: string;
  };
  stats: PartnerStat[];
  college: {
    badge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    detail: string;
    benefits: PartnerBenefit[];
    partners: PartnerItem[];
  };
  corporate: {
    badge: string;
    title: string;
    titleHighlight?: string;
    description: string;
    detail: string;
    benefits: PartnerBenefit[];
    partners: PartnerItem[];
  };
  mission: {
    title: string;
    titleHighlight?: string;
    paragraph1: string;
    paragraph2: string;
  };
  cta: {
    title: string;
    titleHighlight?: string;
    description: string;
    primary: string;
    secondary: string;
  };
}
