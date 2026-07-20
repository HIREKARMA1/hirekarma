import type { MetadataRoute } from "next";

import { getServicesPageContentSync } from "@/services/services-page";

const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hirekarma.in"
).replace(/\/$/, "");

/** Core marketing routes. Service routes are appended dynamically below. */
const STATIC_ROUTES: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/products", priority: 0.9, changeFrequency: "weekly" },
  { path: "/services", priority: 0.9, changeFrequency: "weekly" },
  { path: "/shortlisted", priority: 0.7, changeFrequency: "monthly" },
  { path: "/impact", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.6, changeFrequency: "weekly" },
  { path: "/resources/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about-us/our-story", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about-us/mission-value", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about-us/people", priority: 0.5, changeFrequency: "yearly" },
  { path: "/about-us/locations", priority: 0.5, changeFrequency: "yearly" },
  { path: "/partners", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const { divisions } = getServicesPageContentSync("en");
  const serviceEntries: MetadataRoute.Sitemap = Object.keys(divisions).map(
    (slug) => ({
      url: `${SITE_URL}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    })
  );

  return [...staticEntries, ...serviceEntries];
}
