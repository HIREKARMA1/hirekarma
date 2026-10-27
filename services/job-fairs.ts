import { env } from "@/lib/config/env";

export type PublicJobFairCard = {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  heroImage?: string;
};

const API_BASE = (env.apiBaseUrl || "https://api.disha.hirekarma.in").replace(/\/$/, "");

function publicImage(value: unknown): string | undefined {
  if (typeof value !== "string") return undefined;
  try {
    const url = new URL(value);
    return url.protocol === "https:" || url.protocol === "http:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

function plainText(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export async function getPublicJobFairs(): Promise<{
  items: PublicJobFairCard[];
  failed: boolean;
}> {
  try {
    const response = await fetch(`${API_BASE}/api/v1/job-fairs/public`, {
      next: { revalidate: 30 },
    });
    if (!response.ok) return { items: [], failed: true };
    const payload = (await response.json()) as { job_fairs?: unknown };
    const rows = Array.isArray(payload.job_fairs) ? payload.job_fairs : [];
    const items = rows.flatMap((row): PublicJobFairCard[] => {
      if (!row || typeof row !== "object") return [];
      const fair = row as Record<string, unknown>;
      if (typeof fair.id !== "string" || typeof fair.slug !== "string" || typeof fair.title !== "string") return [];
      return [{
        id: fair.id,
        slug: fair.slug,
        title: fair.title,
        shortDescription: plainText(fair.short_description),
        heroImage: publicImage(fair.hero_image),
      }];
    });
    return { items, failed: false };
  } catch {
    return { items: [], failed: true };
  }
}
