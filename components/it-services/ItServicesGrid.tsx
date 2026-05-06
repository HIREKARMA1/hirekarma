"use client";

import React from "react";
import { useTheme } from "next-themes";
import IconResolver from "./IconResolver";
import InfoChip from "./ui/InfoChip";
import SectionPill from "./ui/SectionPill";

interface ServiceItem {
  id: string;
  icon: string;
  title: string;
  chips: string[];
}

interface ItServicesGridProps {
  data: {
    label: string;
    title: string;
    description: string;
    items: ServiceItem[];
  };
}

const ItServicesGrid: React.FC<ItServicesGridProps> = ({ data }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="content-container py-8 sm:py-10">
      <div className={`h-px w-full ${isDark ? "bg-gray-800" : "bg-gray-200"}`} />
      <div className="pt-8">
      <SectionPill label={data.label} />
      <h2 className={`mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight ${isDark ? "text-gray-100" : "text-gray-900"}`}>{data.title}</h2>
      <p className={`mt-3 text-base sm:text-lg md:text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}>{data.description}</p>

      <div className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
        {data.items.map((item) => (
          <article
            key={item.id}
            className={`rounded-lg border p-6 backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "border-cyan-500/30 bg-[#12233f]/55 hover:border-cyan-400/55"
                : "border-cyan-700/20 bg-white/70 hover:border-cyan-700/40"
            }`}
          >
            <div
              className={`mb-5 inline-flex h-11 w-11 items-center justify-center border ${
                isDark
                  ? "border-cyan-500/35 bg-cyan-500/10 text-cyan-300"
                  : "border-cyan-600/35 bg-cyan-50 text-cyan-700"
              }`}
            >
              <IconResolver icon={item.icon} className="h-5 w-5" />
            </div>
            <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>{item.title}</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.chips.map((chip) => (
                <InfoChip key={`${item.id}-${chip}`} label={chip} />
              ))}
            </div>
          </article>
        ))}
      </div>
      </div>
      <br />
    </section>
  );
};

export default ItServicesGrid;
