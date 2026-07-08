import type { Metadata } from "next";

import { ResourcesPageContent } from "@/components/resources-page/ResourcesPageContent";
import { getResourcesHubContentSync } from "@/services/resources-hub";

export function generateMetadata(): Metadata {
  const content = getResourcesHubContentSync("en");

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function ResourcesPage() {
  return <ResourcesPageContent />;
}
