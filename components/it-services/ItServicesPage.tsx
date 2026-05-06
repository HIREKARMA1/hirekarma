"use client";

import React from "react";
import pageData from "@/data/it-services.json";
import ItServicesAbout from "./ItServicesAbout";
import ItServicesGrid from "./ItServicesGrid";
import ItServicesHero from "./ItServicesHero";
import ItServicesProjects from "./ItServicesProjects";
import ItServicesQuality from "./ItServicesQuality";
import ItServicesTeam from "./ItServicesTeam";

const ItServicesPage: React.FC = () => {
  return (
    <section className="relative min-h-screen pb-6 pt-16 transition-all duration-500">
      <ItServicesHero data={pageData.hero} />
      <ItServicesAbout data={pageData.about} />
      <ItServicesGrid data={pageData.services} />
      <ItServicesProjects data={pageData.projects} />
      <ItServicesQuality data={pageData.testingQuality} />
      <ItServicesTeam data={pageData.team} />
    </section>
  );
};

export default ItServicesPage;
