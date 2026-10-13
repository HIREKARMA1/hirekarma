import { env } from "@/lib/config/env";

export type ApprovedPartnerLogo = {
  id: string;
  name: string;
  logo: string;
};

const LIVE_API_BASE = "https://api.disha.hirekarma.in";

/** Approved, active homepage logos from the Disha admin partner-logo queue. */
export async function fetchApprovedPartnerLogos(): Promise<ApprovedPartnerLogo[]> {
  const base = (env.apiBaseUrl || LIVE_API_BASE).replace(/\/$/, "");
  try {
    const response = await fetch(`${base}/api/v1/public/branding-logos?limit=100`, {
      cache: "no-store",
    });
    if (!response.ok) return [];
    const data = (await response.json()) as { logos?: unknown };
    if (!Array.isArray(data.logos)) return [];
    return data.logos.flatMap((item) => {
      if (!item || typeof item !== "object") return [];
      const row = item as { id?: unknown; name?: unknown; logo?: unknown };
      const logo = typeof row.logo === "string" ? row.logo.trim() : "";
      if (!logo) return [];
      const name = typeof row.name === "string" && row.name.trim() ? row.name.trim() : "Partner";
      return [{ id: String(row.id ?? logo), name, logo }];
    });
  } catch {
    return [];
  }
}
