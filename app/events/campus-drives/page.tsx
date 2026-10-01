import type { Metadata } from "next";

import { EventsPageView } from "@/components/events-page/EventsPageView";
import { getEventsPageContent } from "@/services/events-page";

export const revalidate = 30;

export const metadata: Metadata = {
  title: "Campus Drive | HireKarma",
  description:
    "Browse live and upcoming campus drives from Disha. Visit opens the drive on Disha.",
};

export default async function CampusDrivesPage() {
  const content = await getEventsPageContent();
  return <EventsPageView content={content} focus="campus" />;
}
