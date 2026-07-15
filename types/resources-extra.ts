import type { Locale } from "@/types/products-page";

export type { Locale };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  faqs: FaqItem[];
}

export interface FaqHelpCard {
  title: string;
  description: string;
  cta: string;
}

export interface FaqContent {
  badge: string;
  title: string;
  titleHighlight?: string;
  description: string;
  searchPlaceholder: string;
  emptyTitle: string;
  emptyHint: string;
  categories: FaqCategory[];
  stillNeedHelp: {
    title: string;
    titleHighlight?: string;
    cards: FaqHelpCard[];
  };
  cta: {
    title: string;
    titleHighlight?: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  type: string;
  attendees: string;
  image: string;
  description: string;
  featured: boolean;
  categoryId: string;
}

export interface EventsContent {
  title: string;
  description: string;
  searchPlaceholder: string;
  featuredTitle: string;
  allTitle: string;
  register: string;
  categories: { id: string; label: string }[];
  events: EventItem[];
  subscribe: {
    title: string;
    description: string;
    emailPlaceholder: string;
    cta: string;
  };
}

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyItem {
  id: string;
  title: string;
  client: string;
  industry: string;
  filterId: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial: string;
  author: string;
  position: string;
  image: string;
  stats: {
    metric1: CaseStudyMetric;
    metric2: CaseStudyMetric;
    metric3: CaseStudyMetric;
  };
  featured: boolean;
}

export interface CaseStudiesContent {
  badge: string;
  title: string;
  description: string;
  searchPlaceholder: string;
  featuredTitle: string;
  allTitle: string;
  readCaseStudy: string;
  readFullStory: string;
  filters: { id: string; label: string }[];
  studies: CaseStudyItem[];
  cta: {
    title: string;
    description: string;
    primary: string;
    secondary: string;
  };
}

export interface KnowledgeHubArticle {
  id: string;
  title: string;
  excerpt: string;
  categoryId: string;
  image: string;
  readTime: string;
  date: string;
  featured: boolean;
}

export interface KnowledgeHubContent {
  title: string;
  descriptionBefore: string;
  descriptionStrong: string;
  descriptionAfter: string;
  searchPlaceholder: string;
  featuredTitle: string;
  allTitle: string;
  readMore: string;
  empty: string;
  categories: { id: string; label: string }[];
  articles: KnowledgeHubArticle[];
  subscribe: {
    title: string;
    description: string;
    emailPlaceholder: string;
    cta: string;
  };
}

export interface ResourcesExtraContent {
  faq: FaqContent;
  events: EventsContent;
  caseStudies: CaseStudiesContent;
  knowledgeHub: KnowledgeHubContent;
}
