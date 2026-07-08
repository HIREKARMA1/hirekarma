"use client";

import { LegalDocumentContent } from "@/components/legal/LegalDocumentContent";
import {
  LegalLocaleProvider,
  useLegalLocale,
} from "@/contexts/LegalLocaleContext";

function TermsOfServiceContent() {
  const { content } = useLegalLocale();
  return <LegalDocumentContent document={content.terms} />;
}

export default function TermsOfService() {
  return (
    <LegalLocaleProvider>
      <TermsOfServiceContent />
    </LegalLocaleProvider>
  );
}
