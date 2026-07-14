"use client";

import React from "react";

import MissionHeroSection from "@/components/about/mission/MissionHeroSection";
import MissionBlocksSection from "@/components/about/mission/MissionBlocksSection";
import MissionCtaSection from "@/components/about/mission/MissionCtaSection";
import { AboutLocaleProvider } from "@/contexts/AboutLocaleContext";

function MissionValueInner() {
  return (
    <div className="relative bg-white">
      <MissionHeroSection />
      <MissionBlocksSection />
      <MissionCtaSection />
    </div>
  );
}

export default function MissionValuePage() {
  return (
    <AboutLocaleProvider>
      <MissionValueInner />
    </AboutLocaleProvider>
  );
}
