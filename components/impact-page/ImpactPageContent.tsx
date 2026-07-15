"use client";

import { ImpactLocaleProvider } from "@/contexts/ImpactLocaleContext";
import { ImpactHeroSection } from "./sections/ImpactHeroSection";
import { ImpactPartnersBand, ImpactCtaSection } from "./sections/ImpactCtaSection";
import { ImpactBrowseSection } from "./sections/ImpactBrowseSection";

function ImpactPageInner() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip">
      <ImpactHeroSection />
      <ImpactPartnersBand />
      <ImpactBrowseSection />
      <ImpactCtaSection />
    </main>
  );
}

export function ImpactPageContent() {
  return (
    <ImpactLocaleProvider>
      <ImpactPageInner />
    </ImpactLocaleProvider>
  );
}
