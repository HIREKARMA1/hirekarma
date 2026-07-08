import type {
  Locale,
  ResourceArticleContent,
  ResourceArticleSlug,
} from "@/types/resources-page";
import { RESOURCE_ARTICLE_SLUGS } from "@/types/resources-page";

import campusPlacementEn from "@/data/resources-page/articles/en/campus-placement-systems-problem.json";
import publicGrievanceEn from "@/data/resources-page/articles/en/public-grievance-systems-problem.json";
import hyperlocalWorkforceEn from "@/data/resources-page/articles/en/hyperlocal-workforce-systems-problem.json";
import solviqaiEn from "@/data/resources-page/articles/en/solviqai-career-readiness-systems-problem.json";
import shortlistedEn from "@/data/resources-page/articles/en/shortlisted-virtual-placement-systems-problem.json";
import amaGopalpurEn from "@/data/resources-page/articles/en/ama-gopalpur-constituency-development-systems-problem.json";

import campusPlacementHi from "@/data/resources-page/articles/hi/campus-placement-systems-problem.json";
import publicGrievanceHi from "@/data/resources-page/articles/hi/public-grievance-systems-problem.json";
import hyperlocalWorkforceHi from "@/data/resources-page/articles/hi/hyperlocal-workforce-systems-problem.json";
import solviqaiHi from "@/data/resources-page/articles/hi/solviqai-career-readiness-systems-problem.json";
import shortlistedHi from "@/data/resources-page/articles/hi/shortlisted-virtual-placement-systems-problem.json";
import amaGopalpurHi from "@/data/resources-page/articles/hi/ama-gopalpur-constituency-development-systems-problem.json";

import campusPlacementOd from "@/data/resources-page/articles/od/campus-placement-systems-problem.json";
import publicGrievanceOd from "@/data/resources-page/articles/od/public-grievance-systems-problem.json";
import hyperlocalWorkforceOd from "@/data/resources-page/articles/od/hyperlocal-workforce-systems-problem.json";
import solviqaiOd from "@/data/resources-page/articles/od/solviqai-career-readiness-systems-problem.json";
import shortlistedOd from "@/data/resources-page/articles/od/shortlisted-virtual-placement-systems-problem.json";
import amaGopalpurOd from "@/data/resources-page/articles/od/ama-gopalpur-constituency-development-systems-problem.json";

const articleMapEn: Record<ResourceArticleSlug, ResourceArticleContent> = {
  "campus-placement-systems-problem":
    campusPlacementEn as ResourceArticleContent,
  "public-grievance-systems-problem":
    publicGrievanceEn as ResourceArticleContent,
  "hyperlocal-workforce-systems-problem":
    hyperlocalWorkforceEn as ResourceArticleContent,
  "solviqai-career-readiness-systems-problem":
    solviqaiEn as ResourceArticleContent,
  "shortlisted-virtual-placement-systems-problem":
    shortlistedEn as ResourceArticleContent,
  "ama-gopalpur-constituency-development-systems-problem":
    amaGopalpurEn as ResourceArticleContent,
};

const articleMapHi: Record<ResourceArticleSlug, ResourceArticleContent> = {
  "campus-placement-systems-problem":
    campusPlacementHi as ResourceArticleContent,
  "public-grievance-systems-problem":
    publicGrievanceHi as ResourceArticleContent,
  "hyperlocal-workforce-systems-problem":
    hyperlocalWorkforceHi as ResourceArticleContent,
  "solviqai-career-readiness-systems-problem":
    solviqaiHi as ResourceArticleContent,
  "shortlisted-virtual-placement-systems-problem":
    shortlistedHi as ResourceArticleContent,
  "ama-gopalpur-constituency-development-systems-problem":
    amaGopalpurHi as ResourceArticleContent,
};

const articleMapOd: Record<ResourceArticleSlug, ResourceArticleContent> = {
  "campus-placement-systems-problem":
    campusPlacementOd as ResourceArticleContent,
  "public-grievance-systems-problem":
    publicGrievanceOd as ResourceArticleContent,
  "hyperlocal-workforce-systems-problem":
    hyperlocalWorkforceOd as ResourceArticleContent,
  "solviqai-career-readiness-systems-problem":
    solviqaiOd as ResourceArticleContent,
  "shortlisted-virtual-placement-systems-problem":
    shortlistedOd as ResourceArticleContent,
  "ama-gopalpur-constituency-development-systems-problem":
    amaGopalpurOd as ResourceArticleContent,
};

const localeArticleMaps: Record<
  Locale,
  Record<ResourceArticleSlug, ResourceArticleContent>
> = {
  en: articleMapEn,
  hi: articleMapHi,
  od: articleMapOd,
};

function trimDuplicateTailBlocks(
  article: ResourceArticleContent
): ResourceArticleContent {
  const refIndex = article.blocks.findIndex(
    (block) =>
      block.type === "heading" &&
      block.level === 2 &&
      (block.text === "References" || block.text === "संदर्भ" || block.text === "ସन्दର୍ଭ")
  );

  if (refIndex < 0) return article;

  return {
    ...article,
    blocks: article.blocks.slice(0, refIndex),
  };
}

function normalizeArticle(article: ResourceArticleContent): ResourceArticleContent {
  return trimDuplicateTailBlocks(article);
}

export function isResourceArticleSlug(
  slug: string
): slug is ResourceArticleSlug {
  return (RESOURCE_ARTICLE_SLUGS as readonly string[]).includes(slug);
}

/** Article loader — swap to a Python API later. Falls back to English. */
export async function fetchResourceArticle(
  slug: ResourceArticleSlug,
  locale: Locale
): Promise<ResourceArticleContent | null> {
  return getResourceArticleSync(slug, locale);
}

export function getResourceArticleSync(
  slug: ResourceArticleSlug,
  locale: Locale
): ResourceArticleContent | null {
  const localized = localeArticleMaps[locale]?.[slug];
  const article = localized ?? articleMapEn[slug];
  if (!article) return null;
  return normalizeArticle(article);
}

export function getAllResourceArticleSlugs(): ResourceArticleSlug[] {
  return [...RESOURCE_ARTICLE_SLUGS];
}
