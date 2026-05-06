"use client";

import React from "react";
import { useTheme } from "next-themes";
import OutlineActionButton from "./ui/OutlineActionButton";
import SectionPill from "./ui/SectionPill";

interface TeamMember {
  id: string;
  initials: string;
  name: string;
  role: string;
}

interface ItServicesTeamProps {
  data: {
    label: string;
    title: string;
    description: string;
    members: TeamMember[];
    cta: {
      title: string;
      description: string;
      buttonLabel: string;
      buttonHref: string;
    };
  };
}

const ItServicesTeam: React.FC<ItServicesTeamProps> = ({ data }) => {
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

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {data.members.map((member) => (
          <article
            key={member.id}
            className={`rounded-lg border px-5 py-6 text-center backdrop-blur-sm transition-colors duration-300 ${
              isDark
                ? "border-cyan-500/25 bg-[#12233f]/45 hover:border-cyan-400/50"
                : "border-cyan-700/15 bg-white/65 hover:border-cyan-700/35"
            }`}
          >
            <div
              className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full border text-base font-bold ${
                isDark
                  ? "border-cyan-500/35 text-cyan-300"
                  : "border-cyan-600/35 text-cyan-700"
              }`}
            >
              {member.initials}
            </div>
            <p className={`mt-5 text-xl sm:text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>{member.name}</p>
            <p className={`mt-1 text-sm sm:text-base ${isDark ? "text-gray-400" : "text-gray-600"}`}>{member.role}</p>
          </article>
        ))}
      </div>

      <div
        className={`mt-8 flex flex-col items-start justify-between gap-5 rounded-lg border p-6 backdrop-blur-sm transition-colors duration-300 sm:flex-row sm:items-center ${
          isDark
            ? "border-cyan-500/25 bg-[#12233f]/45 hover:border-cyan-400/50"
            : "border-cyan-700/15 bg-white/65 hover:border-cyan-700/35"
        }`}
      >
        <div>
          <h3 className={`text-xl sm:text-2xl font-bold ${isDark ? "text-gray-100" : "text-gray-900"}`}>{data.cta.title}</h3>
          <p className={`mt-1 text-sm sm:text-base ${isDark ? "text-gray-300" : "text-gray-600"}`}>{data.cta.description}</p>
        </div>
        <OutlineActionButton label={data.cta.buttonLabel} href={data.cta.buttonHref} />
      </div>
      <br />
    </section>
  );
};

export default ItServicesTeam;
