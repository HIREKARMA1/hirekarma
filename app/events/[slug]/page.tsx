import type { Metadata } from "next";

import { DetailMissing, EventPublicDetail, ProgramPublicDetail } from "@/components/events-page/PublicDetail";
import { eventApplyHref, fetchPublicCampusProgram, fetchPublicEvent, programApplyHref } from "@/services/disha-detail";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let found = await fetchPublicEvent(slug);
  if (!found) {
    found = await fetchPublicCampusProgram(slug);
  }
  const title = typeof found?.data.title === "string" ? found.data.title : "Event";
  return { title: `${title} | HireKarma` };
}

export default async function EventDetailRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let found = await fetchPublicEvent(slug);
  let isProgram = false;

  if (!found) {
    found = await fetchPublicCampusProgram(slug);
    isProgram = true;
  }

  if (!found) {
    return <DetailMissing backHref="/events" backLabel="Back to events" />;
  }

  const category = String(found.data.category || "").toLowerCase();
  const isCampusDrive = isProgram || category === "campus_drive" || category === "campus drive" || Array.isArray(found.data.jobs);

  if (isCampusDrive) {
    return (
      <ProgramPublicDetail
        record={found.data}
        applyHref={programApplyHref(found.site, slug)}
      />
    );
  }

  return (
    <EventPublicDetail
      record={found.data}
      applyHref={eventApplyHref(found.site, slug)}
    />
  );
}

