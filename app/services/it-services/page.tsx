import type { Metadata } from "next";
import React from "react";
import ItServicesPage from "@/components/it-services/ItServicesPage";
import pageData from "@/data/it-services.json";

export const metadata: Metadata = {
  title: pageData.meta.pageTitle,
  description: pageData.meta.pageDescription,
};

const ITServicesRoute: React.FC = () => {
  return <ItServicesPage />;
};

export default ITServicesRoute;
