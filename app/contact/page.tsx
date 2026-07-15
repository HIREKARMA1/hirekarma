"use client";

import ContactHeroSection from "@/components/contact/ContactHeroSection";
import ContactMainSection from "@/components/contact/ContactMainSection";
import { ContactLocaleProvider } from "@/contexts/ContactLocaleContext";

function ContactPageInner() {
  return (
    <div className="relative bg-white">
      <ContactHeroSection />
      <ContactMainSection />
    </div>
  );
}

export default function ContactPage() {
  return (
    <ContactLocaleProvider>
      <ContactPageInner />
    </ContactLocaleProvider>
  );
}
