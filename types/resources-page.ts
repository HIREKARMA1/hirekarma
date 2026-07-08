import type { Locale } from "@/types/products-page";

export type { Locale };

export type ResourceCardVariant = "default" | "alt" | "warm" | "sky" | "deep";

export type ResourceCategory = "blogs";

export interface ResourceFilter {
  id: string;
  label: string;
}

export interface ResourceHubItem {
  id: string;
  slug: string;
  category: ResourceCategory;
  tag: string;
  visualVariant: ResourceCardVariant;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  dateIso: string;
}

export interface ResourcesHubContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    badge: string;
    heading: string;
    lead: string;
  };
  browse: {
    title: string;
    filters: ResourceFilter[];
    readMore: string;
  };
  items: ResourceHubItem[];
  cta: {
    heading: string;
    description: string;
    button: {
      label: string;
      hrefKey: "products";
    };
  };
}

export type ArticleParagraphVariant =
  | "default"
  | "lead"
  | "emphasis"
  | "pullquote"
  | "italic";

export interface ArticleParagraphBlock {
  type: "paragraph";
  variant: ArticleParagraphVariant;
  text: string;
}

export interface ArticleHeadingBlock {
  type: "heading";
  level: 2 | 3;
  text: string;
}

export interface ArticleListBlock {
  type: "list";
  ordered: boolean;
  listType: "default" | "product";
  items: string[];
}

export type ArticleContentBlock =
  | ArticleParagraphBlock
  | ArticleHeadingBlock
  | ArticleListBlock;

export interface ResourceArticleContent {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
  hero: {
    title: string;
    date: string;
    categoryLabel: string;
    author: string;
    backLink: string;
  };
  blocks: ArticleContentBlock[];
  references?: {
    title: string;
    items: string[];
  };
  authorBox: {
    title: string;
    name: string;
    role: string;
    bio: string;
  };
  sidebar: {
    shareTitle: string;
    shareDescription: string;
    relatedTitle: string;
    relatedProducts: string;
    cta: {
      label: string;
      hrefKey: "products";
    };
  };
}

export const RESOURCE_ARTICLE_SLUGS = [
  "campus-placement-systems-problem",
  "public-grievance-systems-problem",
  "hyperlocal-workforce-systems-problem",
  "solviqai-career-readiness-systems-problem",
  "shortlisted-virtual-placement-systems-problem",
  "ama-gopalpur-constituency-development-systems-problem",
] as const;

export type ResourceArticleSlug = (typeof RESOURCE_ARTICLE_SLUGS)[number];
