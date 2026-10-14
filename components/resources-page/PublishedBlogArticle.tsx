"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { ArticleArticleView } from "@/components/resources-page/sections/ArticleArticleView";
import { fetchPublishedBlog } from "@/services/blogs";
import type { ResourceArticleContent } from "@/types/resources-page";

export function PublishedBlogArticle({ slug }: { slug: string }) {
  const [article, setArticle] = useState<ResourceArticleContent | null | undefined>(undefined);

  useEffect(() => {
    let cancelled = false;
    fetchPublishedBlog(slug)
      .then((next) => {
        if (!cancelled) setArticle(next);
      })
      .catch(() => {
        if (!cancelled) setArticle(null);
      });
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (article === undefined) {
    return <main className="resources-page min-h-screen" />;
  }

  if (!article) {
    return (
      <main className="resources-page relative z-0 min-h-screen px-6 py-16">
        <div className="content-container">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Blog not found</h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-white/80">
            This blog is not published, or it is inactive.
          </p>
          <Link href="/resources" className="mt-4 inline-block text-sm font-semibold text-[#1b52a4]">
            Back to Resources
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="resources-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
      <ArticleArticleView article={article} />
    </main>
  );
}
