import type { Metadata } from "next";
import { notFound } from "next/navigation";

import PastEventGalleryPage from "@/components/events/PastEventGalleryPage";
import {
  getPastEventById,
  getPastEventIds,
} from "@/lib/events/past-events";

type PageProps = {
  params: Promise<{ id: string }>;
};

export async function generateStaticParams() {
  return getPastEventIds().map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { id } = await params;
  const event = getPastEventById(id);
  if (!event) {
    return { title: "Event Gallery | HireKarma" };
  }
  return {
    title: `${event.title} | Past Events | HireKarma`,
    description: event.description,
  };
}

export default async function PastEventDetailRoute({ params }: PageProps) {
  const { id } = await params;
  const event = getPastEventById(id);
  if (!event) notFound();
  return <PastEventGalleryPage event={event} />;
}
