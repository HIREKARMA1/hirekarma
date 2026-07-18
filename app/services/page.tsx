import type { Metadata } from "next";

import { ServicesLocaleProvider } from "@/contexts/ServicesLocaleContext";
import { ServicesLandingView } from "@/components/services-page/ServicesLandingView";
import { getServicesPageContentSync } from "@/services/services-page";

export function generateMetadata(): Metadata {
  const { landing } = getServicesPageContentSync("en");
  return {
    title: landing.meta.title,
    description: landing.meta.description,
  };
}

export default function ServicesPage() {
  return (
    <ServicesLocaleProvider>
      <ServicesLandingView />
    </ServicesLocaleProvider>
  );
}
