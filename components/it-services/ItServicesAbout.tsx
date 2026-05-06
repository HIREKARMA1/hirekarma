"use client";

import React from "react";
import { useTheme } from "next-themes";
import SectionPill from "./ui/SectionPill";
import NumberTicker from "./ui/NumberTicker";

interface AboutStat {
  id: string;
  value: string;
  label: string;
}

interface ItServicesAboutProps {
  data: {
    label: string;
    title: string;
    description: string;
    stats: AboutStat[];
    detail: string;
  };
}

const ItServicesAbout: React.FC<ItServicesAboutProps> = ({ data }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="content-container py-8 sm:py-10">
      <div className={`h-px w-full ${isDark ? "bg-gray-800" : "bg-gray-200"}`} />
      <div className="pt-8">
      <SectionPill label={data.label} />
      <h2 className={`mt-4 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight ${isDark ? "text-gray-100" : "text-gray-900"}`}>
        {data.title}
      </h2>
      <p className={`mt-3 text-base sm:text-lg md:text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{data.description}</p>

      <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {data.stats.map((stat) => (
          <article
            key={stat.id}
            className={`rounded-lg border px-5 py-4 backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "border-cyan-500/25 bg-[#12233f]/45 hover:border-cyan-400/50"
                : "border-cyan-700/15 bg-white/65 hover:border-cyan-700/35"
            }`}
          >
            <p className={`text-3xl sm:text-4xl font-bold ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>
              <NumberTicker value={stat.value} />
            </p>
            <p className={`mt-2 text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>{stat.label}</p>
          </article>
        ))}
      </div>

      <div
        className={`mt-6 rounded-lg border p-6 backdrop-blur-sm transition-colors duration-300 ${
          isDark
            ? "border-cyan-500/25 bg-[#12233f]/45 hover:border-cyan-400/50"
            : "border-cyan-700/15 bg-white/65 hover:border-cyan-700/35"
        }`}
      >
        <p className={`text-base sm:text-lg md:text-xl leading-relaxed ${isDark ? "text-gray-300" : "text-gray-600"}`}>{data.detail}</p>
      </div>
      </div>
      <br />
    </section>
  );
};

export default ItServicesAbout;
