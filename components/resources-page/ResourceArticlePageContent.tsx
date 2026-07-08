"use client";

import { useMemo } from "react";

import { ResourcesLocaleProvider, useResourcesLocale } from "@/contexts/ResourcesLocaleContext";
import { getResourceArticleSync } from "@/services/resources-article";
import type { ResourceArticleSlug } from "@/types/resources-page";

import { ArticleArticleView } from "./sections/ArticleArticleView";

interface ResourceArticleInnerProps {
  slug: ResourceArticleSlug;
}

function ResourceArticleInner({ slug }: ResourceArticleInnerProps) {
  const { locale } = useResourcesLocale();
  const article = useMemo(
    () => getResourceArticleSync(slug, locale),
    [slug, locale]
  );

  if (!article) return null;

  return (
    <main className="resources-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
      <ArticleArticleView article={article} />
    </main>
  );
}

interface ResourceArticlePageContentProps {
  slug: ResourceArticleSlug;
}

export function ResourceArticlePageContent({
  slug,
}: ResourceArticlePageContentProps) {
  return (
    <ResourcesLocaleProvider>
      <ResourceArticleInner slug={slug} />
    </ResourcesLocaleProvider>
  );
}
