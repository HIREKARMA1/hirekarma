"use client";

import { OtherInitiativesLocaleProvider } from "@/contexts/OtherInitiativesLocaleContext";
import { InitiativesHeroSection } from "./sections/InitiativesHeroSection";
import { ClientProjectsSection } from "./sections/ClientProjectsSection";
import { ItServicesSection } from "./sections/ItServicesSection";
import { InitiativesImpactSection } from "./sections/InitiativesImpactSection";
import { InitiativesCtaSection } from "./sections/InitiativesCtaSection";

function OtherInitiativesPageInner() {
  return (
    <main className="other-initiatives-page relative z-0 min-h-screen w-full max-w-full overflow-x-clip">
      <InitiativesHeroSection />
      <ClientProjectsSection />
      <ItServicesSection />
      <InitiativesImpactSection />
      <InitiativesCtaSection />
    </main>
  );
}

export function OtherInitiativesPageContent() {
  return (
    <OtherInitiativesLocaleProvider>
      <OtherInitiativesPageInner />
    </OtherInitiativesLocaleProvider>
  );
}
