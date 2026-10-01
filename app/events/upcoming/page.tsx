import type { Metadata } from "next";

import { EventsPageView } from "@/components/events-page/EventsPageView";
import {
  getEventsPageContent,
  getEventsPageFallback,
} from "@/services/events-page";

const fallback = getEventsPageFallback();

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Upcoming Events | HireKarma",
  description: fallback.meta.description,
};

export default async function UpcomingEventsPage() {
  const content = await getEventsPageContent();
  return <EventsPageView content={content} focus="upcoming" />;
}
