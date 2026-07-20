import type { Metadata } from "next";

import { ServicesLocaleProvider } from "@/contexts/ServicesLocaleContext";
import { DivisionPageView } from "@/components/services-page/DivisionPageView";
import { getDivisionContentSync } from "@/services/services-page";

const SLUG = "open-source-dpi";

export function generateMetadata(): Metadata {
  const division = getDivisionContentSync("en", SLUG);
  return {
    title: division?.meta.title,
    description: division?.meta.description,
  };
}

export default function OpenSourceDpiServicePage() {
  return (
    <ServicesLocaleProvider>
      <DivisionPageView slug={SLUG} />
    </ServicesLocaleProvider>
  );
}
