"use client";

import {
  StoryCtaSection,
  StoryHeroSection,
  StoryNarrativeSection,
  StoryTimelineSection,
} from "@/components/about/story/StorySections";
import { AboutLocaleProvider } from "@/contexts/AboutLocaleContext";

function OurStoryInner() {
  return (
    <div className="relative bg-white">
      <StoryHeroSection />
      <StoryNarrativeSection />
      <StoryTimelineSection />
      <StoryCtaSection />
    </div>
  );
}

export default function OurStoryPage() {
  return (
    <AboutLocaleProvider>
      <OurStoryInner />
    </AboutLocaleProvider>
  );
}
