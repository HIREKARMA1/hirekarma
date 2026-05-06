"use client";

import React from "react";
import { useTheme } from "next-themes";
import SectionPill from "./ui/SectionPill";
import { IconCloud } from "@/registry/magicui/icon-cloud";

interface ItServicesHeroProps {
  data: {
    label: string;
    title: string;
    highlight: string;
    titleSuffix: string;
    description: string;
  };
}

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

const ItServicesHero: React.FC<ItServicesHeroProps> = ({ data }) => {
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => setMounted(true), []);
  const isDark = mounted && resolvedTheme === "dark";
  const images = slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  return (
    <section className="content-container py-8 sm:py-10">
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionPill label={data.label} />
          <h1
            className={`mt-5 max-w-3xl text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
              isDark ? "text-gray-100" : "text-gray-900"
            }`}
          >
            {data.title}
            <span className={`block ${isDark ? "text-cyan-400" : "text-cyan-600"}`}>{data.highlight}</span>
            {data.titleSuffix}
          </h1>
          <p
            className={`mt-5 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            {data.description}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="relative flex size-full items-center justify-center overflow-hidden">
            <IconCloud images={images} />
          </div>
        </div>
      </div>
      <br />
    </section>
  );
};

export default ItServicesHero;
