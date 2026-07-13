import type { Metadata } from "next";

import { OtherInitiativesPageContent } from "@/components/other-initiatives/OtherInitiativesPageContent";
import { getOtherInitiativesContentSync } from "@/services/other-initiatives-page";

export function generateMetadata(): Metadata {
  const content = getOtherInitiativesContentSync("en");

  return {
    title: content.meta.title,
    description: content.meta.description,
  };
}

export default function OtherInitiativesPage() {
  return <OtherInitiativesPageContent />;
}
