import type { Metadata } from "next";

import { DetailMissing, EventPublicDetail } from "@/components/events-page/PublicDetail";
import { eventApplyHref, fetchPublicEvent } from "@/services/disha-detail";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = await fetchPublicEvent(slug);
  const title = typeof found?.data.title === "string" ? found.data.title : "Event";
  return { title: `${title} | HireKarma` };
}

export default async function EventDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = await fetchPublicEvent(slug);
  if (!found) {
    return <DetailMissing backHref="/events" backLabel="Back to events" />;
  }
  return (
    <EventPublicDetail
      record={found.data}
      applyHref={eventApplyHref(found.site, slug)}
    />
  );
}
