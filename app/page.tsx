import type { Metadata } from "next";

import { HomePageContent } from "@/components/home-page/HomePageContent";
import { getHomePageContentSync } from "@/services/home-page";

const content = getHomePageContentSync("en");

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function LandingPage() {
  return <HomePageContent />;
}
