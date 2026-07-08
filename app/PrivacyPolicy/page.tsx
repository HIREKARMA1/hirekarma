"use client";

import { LegalDocumentContent } from "@/components/legal/LegalDocumentContent";
import {
  LegalLocaleProvider,
  useLegalLocale,
} from "@/contexts/LegalLocaleContext";

function PrivacyPolicyContent() {
  const { content } = useLegalLocale();
  return <LegalDocumentContent document={content.privacy} />;
}

export default function PrivacyPolicy() {
  return (
    <LegalLocaleProvider>
      <PrivacyPolicyContent />
    </LegalLocaleProvider>
  );
}
