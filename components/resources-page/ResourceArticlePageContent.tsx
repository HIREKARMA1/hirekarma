"use client";

import { useMemo } from "react";

import { ResourcesLocaleProvider, useResourcesLocale } from "@/contexts/ResourcesLocaleContext";
import { getResourceArticleSync } from "@/services/resources-article";
import type { ResourceArticleSlug } from "@/types/resources-page";

import { ResourcesPageBackground } from "./ui/ResourcesPageBackground";
import { ArticleArticleView } from "./sections/ArticleArticleView";
import { ResourcesLanguageSwitcher } from "./ui/ResourcesLanguageSwitcher";

interface ResourceArticleInnerProps {
  slug: ResourceArticleSlug;
}

function ResourceArticleInner({ slug }: ResourceArticleInnerProps) {
  const { locale, setLocale } = useResourcesLocale();
  const article = useMemo(
    () => getResourceArticleSync(slug, locale),
    [slug, locale]
  );

  if (!article) return null;

  return (
    <>
      <ResourcesPageBackground />
      <main className="resources-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
        <div className="absolute top-24 right-4 z-20 sm:right-8 lg:right-[calc(5%+1rem)]">
          <ResourcesLanguageSwitcher locale={locale} onChange={setLocale} />
        </div>
        <ArticleArticleView article={article} />
      </main>
    </>
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
