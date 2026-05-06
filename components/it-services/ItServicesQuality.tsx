"use client";

import React from "react";
import { useTheme } from "next-themes";
import IconResolver from "./IconResolver";
import SectionPill from "./ui/SectionPill";

interface TestingArea {
  id: string;
  title: string;
  description: string;
}

interface ItServicesQualityProps {
  data: {
    label: string;
    title: string;
    description: string;
    industryFocus: {
      icon: string;
      title: string;
      description: string;
    };
    testingAreas: TestingArea[];
  };
}

const ItServicesQuality: React.FC<ItServicesQualityProps> = ({ data }) => {
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
      </div>

      <article
        className={`mt-7 flex items-start gap-4 rounded-lg border p-6 backdrop-blur-sm transition-colors duration-300 ${
          isDark
            ? "border-cyan-500/35 bg-[#12233f]/55 hover:border-cyan-400/60"
            : "border-cyan-700/20 bg-white/70 hover:border-cyan-700/40"
        }`}
      >
        <div
          className={`inline-flex h-12 w-12 shrink-0 items-center justify-center border ${
            isDark ? "border-cyan-500/40 bg-transparent text-cyan-300" : "border-cyan-600/35 bg-transparent text-cyan-700"
          }`}
        >
          <IconResolver icon={data.industryFocus.icon} className="h-6 w-6" />
        </div>
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>{data.industryFocus.title}</h3>
          <p className={`mt-2 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>{data.industryFocus.description}</p>
        </div>
      </article>

      <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.testingAreas.map((item) => (
          <article
            key={item.id}
            className={`rounded-lg border p-5 backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "border-cyan-500/25 bg-[#12233f]/45 hover:border-cyan-400/50"
                : "border-cyan-700/15 bg-white/65 hover:border-cyan-700/35"
            }`}
          >
            <h4 className={`flex items-center gap-2 text-lg sm:text-xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>
              <span className={`inline-block h-2.5 w-2.5 rounded-full ${isDark ? "bg-cyan-400" : "bg-cyan-600"}`} />
              {item.title}
            </h4>
            <p className={`mt-2 text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>
          </article>
        ))}
      </div>
      <br />
    </section>
  );
};

export default ItServicesQuality;
