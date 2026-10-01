import type { Metadata } from "next";

import { DetailMissing, JobPublicDetail } from "@/components/events-page/PublicDetail";
import { fetchPublicJob, jobApplyHref } from "@/services/disha-detail";

export const revalidate = 30;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string; jobSlug: string }>;
}): Promise<Metadata> {
  const { company, jobSlug } = await params;
  const found = await fetchPublicJob(company, jobSlug);
  const title = typeof found?.data.title === "string" ? found.data.title : "Campus drive";
  return { title: `${title} | HireKarma` };
}

export default async function CampusDriveJobRoute({
  params,
}: {
  params: Promise<{ company: string; jobSlug: string }>;
}) {
  const { company, jobSlug } = await params;
  const found = await fetchPublicJob(company, jobSlug);
  if (!found) {
    return <DetailMissing backHref="/events/campus-drives" backLabel="Back to campus drives" />;
  }
  return (
    <JobPublicDetail
      record={found.data}
      applyHref={jobApplyHref(found.site, company, jobSlug)}
    />
  );
}
