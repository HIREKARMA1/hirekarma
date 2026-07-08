"use client";

import { theme } from "@/config/theme";
import type { ResourceArticleContent } from "@/types/resources-page";

import {
  ArticleAuthorBox,
  ArticleBackLink,
  ArticleReferences,
  ArticleSidebar,
} from "../ui/ArticleSidebar";
import { ArticleContentRenderer } from "../ui/ArticleContentRenderer";

interface ArticleArticleViewProps {
  article: ResourceArticleContent;
}

export function ArticleArticleView({ article }: ArticleArticleViewProps) {
  return (
    <>
      <section className="relative border-b border-white/10 pt-24 pb-10 sm:pt-28 lg:pt-32">
        <div className="relative z-10 content-container">
          <ArticleBackLink label={article.hero.backLink} />

          <h1 className="mt-6 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.hero.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-white/60">
            <div className="flex items-center gap-3">
              <span
                className="grid size-10 place-items-center rounded-full text-xs font-bold text-white"
                style={{ background: theme.gradients.brand }}
                aria-hidden
              >
                HK
              </span>
              <span>{article.hero.author}</span>
            </div>
            <time dateTime={article.hero.date}>{article.hero.date}</time>
            <span>{article.hero.categoryLabel}</span>
          </div>
        </div>
      </section>

      <section className="relative py-10 sm:py-12 lg:py-16">
        <div className="relative z-10 content-container">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
            <div>
              <ArticleContentRenderer blocks={article.blocks} />
              {article.references ? (
                <ArticleReferences references={article.references} />
              ) : null}
              <ArticleAuthorBox authorBox={article.authorBox} />
            </div>

            <ArticleSidebar sidebar={article.sidebar} />
          </div>
        </div>
      </section>
    </>
  );
}
