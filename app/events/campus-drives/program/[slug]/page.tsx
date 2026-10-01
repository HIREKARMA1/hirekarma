import type { Metadata } from "next";

import { DetailMissing, ProgramPublicDetail } from "@/components/events-page/PublicDetail";
import { fetchPublicCampusProgram, programApplyHref } from "@/services/disha-detail";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const found = await fetchPublicCampusProgram(slug);
  const title = typeof found?.data.title === "string" ? found.data.title : "Campus drive";
  return { title: `${title} | HireKarma` };
}

export default async function CampusProgramRoute({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const found = await fetchPublicCampusProgram(slug);
  if (!found) {
    return <DetailMissing backHref="/events/campus-drives" backLabel="Back to campus drives" />;
  }
  return (
    <ProgramPublicDetail
      record={found.data}
      applyHref={programApplyHref(found.site, slug)}
    />
  );
}
