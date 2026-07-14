"use client";

import React from "react";

import LeadershipHeroSection from "@/components/about/people/LeadershipHeroSection";
import ValuesBandSection from "@/components/about/people/ValuesBandSection";
import LeadershipProfilesSection from "@/components/about/people/LeadershipProfilesSection";
import OpenRolesSection from "@/components/about/people/OpenRolesSection";
import { AboutLocaleProvider } from "@/contexts/AboutLocaleContext";

function PeoplePageInner() {
  return (
    <div className="relative bg-white">
      <LeadershipHeroSection />
      <ValuesBandSection />
      <LeadershipProfilesSection />
      <OpenRolesSection />
    </div>
  );
}

export default function PeoplePage() {
  return (
    <AboutLocaleProvider>
      <PeoplePageInner />
    </AboutLocaleProvider>
  );
}
