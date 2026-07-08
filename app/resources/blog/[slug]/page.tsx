import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ResourceArticlePageContent } from "@/components/resources-page/ResourceArticlePageContent";
import {
  getAllResourceArticleSlugs,
  getResourceArticleSync,
  isResourceArticleSlug,
} from "@/services/resources-article";

interface ResourceArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllResourceArticleSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ResourceArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isResourceArticleSlug(slug)) {
    return { title: "Article | HireKarma Resources" };
  }

  const article = getResourceArticleSync(slug, "en");

  if (!article) {
    return { title: "Article | HireKarma Resources" };
  }

  return {
    title: `${article.meta.title} | HireKarma Resources`,
    description: article.meta.description,
  };
}

export default async function ResourceArticlePage({
  params,
}: ResourceArticlePageProps) {
  const { slug } = await params;

  if (!isResourceArticleSlug(slug)) {
    notFound();
  }

  const article = getResourceArticleSync(slug, "en");

  if (!article) {
    notFound();
  }

  return <ResourceArticlePageContent slug={slug} />;
}
