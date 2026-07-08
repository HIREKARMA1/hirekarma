"use client";

import { ResourcesLocaleProvider } from "@/contexts/ResourcesLocaleContext";

import { ResourcesBrowseSection } from "./sections/ResourcesBrowseSection";
import { ResourcesHeroSection } from "./sections/ResourcesHeroSection";

function ResourcesHubInner() {
  return (
    <main className="resources-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
      <ResourcesHeroSection />
      <ResourcesBrowseSection />
    </main>
  );
}

export function ResourcesPageContent() {
  return (
    <ResourcesLocaleProvider>
      <ResourcesHubInner />
    </ResourcesLocaleProvider>
  );
}
