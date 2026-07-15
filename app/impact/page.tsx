import type { Metadata } from "next";

import { ImpactPageContent } from "@/components/impact-page/ImpactPageContent";
import { getImpactPageContentSync } from "@/services/impact-page";

export function generateMetadata(): Metadata {
  const content = getImpactPageContentSync("en");
  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function ImpactPage() {
  return <ImpactPageContent />;
}
