"use client";

import Image from "next/image";
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
      <section className="hk-no-reveal hk-revealed relative pt-8 pb-10 sm:pt-10 lg:pt-12">
        <div className="relative z-10 content-container">
          <ArticleBackLink label={article.hero.backLink} />

          <h1 className="mt-6 w-full max-w-none text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">
            {article.hero.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-white/85">
            <div className="flex items-center gap-3">
              {article.authorBox.photo ? (
                <span className="relative size-10 shrink-0 overflow-hidden rounded-full ring-2 ring-white/20">
                  <Image
                    src={article.authorBox.photo}
                    alt={article.hero.author}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    sizes="40px"
                  />
                </span>
              ) : (
                <span
                  className="grid size-10 place-items-center rounded-full text-xs font-bold text-white"
                  style={{ background: theme.gradients.brand }}
                  aria-hidden
                >
                  HK
                </span>
              )}
              <span>{article.hero.author}</span>
            </div>
            <time dateTime={article.hero.date}>{article.hero.date}</time>
            <span>{article.hero.categoryLabel}</span>
          </div>
        </div>
      </section>

      <section className="hk-no-reveal hk-revealed relative py-10 sm:py-12 lg:py-16">
        <div className="relative z-10 content-container">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_280px] xl:gap-10">
            <div>
              <ArticleContentRenderer blocks={article.blocks} />
              {article.references?.items?.length ? (
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
