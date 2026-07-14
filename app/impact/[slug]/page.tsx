import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { ImpactStoryDetailView } from "@/components/impact-page/ImpactStoryDetailView";
import {
  getAllImpactSlugs,
  getImpactPageContentSync,
  getImpactStoryBySlug,
} from "@/services/impact-page";

interface ImpactStoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllImpactSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ImpactStoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getImpactStoryBySlug(slug, "en");
  if (!story) return { title: "Impact | HireKarma" };
  return {
    title: `${story.heading} ${story.headingAccent} | HireKarma Impact`,
    description: story.description,
  };
}

export default async function ImpactStoryPage({ params }: ImpactStoryPageProps) {
  const { slug } = await params;
  const content = getImpactPageContentSync("en");
  const story = getImpactStoryBySlug(slug, "en");
  if (!story) notFound();

  return (
    <ImpactStoryDetailView
      story={story}
      partnersNote={content.partnersNote}
    />
  );
}
