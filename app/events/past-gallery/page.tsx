import type { Metadata } from "next";

import PastEventsGallery from "@/components/events/PastEventsGallery";

export const metadata: Metadata = {
  title: "Past Events Gallery | HireKarma",
  description:
    "Browse photos and highlights from HireKarma’s past webinars, bootcamps, and hackathons.",
};

export default function PastEventsGalleryPage() {
  return <PastEventsGallery />;
}
