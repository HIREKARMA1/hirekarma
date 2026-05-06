"use client";

import React from "react";
import { useTheme } from "next-themes";
import SectionPill from "./ui/SectionPill";

interface ProjectItem {
  id: string;
  index: string;
  title: string;
  description: string;
  tag: string;
}

interface ItServicesProjectsProps {
  data: {
    label: string;
    title: string;
    description: string;
    items: ProjectItem[];
  };
}

const ItServicesProjects: React.FC<ItServicesProjectsProps> = ({ data }) => {
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

      <div className="mt-8 space-y-3">
        {data.items.map((item) => (
          <article
            key={item.id}
            className={`flex flex-col gap-4 rounded-lg border p-5 backdrop-blur-sm transition-colors duration-300 sm:flex-row sm:items-center sm:justify-between ${
              isDark
                ? "border-cyan-500/25 bg-[#12233f]/45 hover:border-cyan-400/50"
                : "border-cyan-700/15 bg-white/65 hover:border-cyan-700/35"
            }`}
          >
            <div className="flex gap-4">
              <p className={`text-4xl sm:text-5xl font-bold leading-none ${isDark ? "text-cyan-700/70" : "text-cyan-500/70"}`}>{item.index}</p>
              <div>
                <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>{item.title}</h3>
                <p className={`mt-1 text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>{item.description}</p>
              </div>
            </div>
            <span
              className={`inline-flex w-fit rounded-full border px-4 py-1.5 text-base font-semibold ${
                isDark
                  ? "border-cyan-500/45 bg-cyan-500/10 text-cyan-300"
                  : "border-cyan-600/35 bg-cyan-50 text-cyan-700"
              }`}
            >
              {item.tag}
            </span>
          </article>
        ))}
      </div>
      <br />
    </section>
  );
};

export default ItServicesProjects;
