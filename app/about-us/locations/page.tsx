"use client";

import LocationsHeroSection from "@/components/about/locations/LocationsHeroSection";
import LocationsOfficesSection from "@/components/about/locations/LocationsOfficesSection";
import LocationsCtaSection from "@/components/about/locations/LocationsCtaSection";
import { AboutLocaleProvider } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";

function LocationsPageInner() {
  return (
    <div className="relative" style={{ backgroundColor: theme.colors.ink }}>
      <LocationsHeroSection />
      <LocationsOfficesSection />
      <LocationsCtaSection />
    </div>
  );
}

export default function LocationsPage() {
  return (
    <AboutLocaleProvider>
      <LocationsPageInner />
    </AboutLocaleProvider>
  );
}
