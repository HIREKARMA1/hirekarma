"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Briefcase } from "lucide-react";
import { useSolutionsLocale } from "@/contexts/SolutionsLocaleContext";
import { renderBoldDescription } from "@/components/solutions/renderBoldDescription";

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useSolutionsLocale();
  const hero = content.corporate.hero;

  useEffect(() => {
    setMounted(true);
  }, []);

  const strongClass =
    mounted && resolvedTheme === "dark" ? "text-gray-200" : "text-gray-700";

  return (
    <div className="relative content-container pt-8 pb-20">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center min-h-[85vh]">
        <div className="space-y-8 lg:space-y-10">
          <div
            className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${
              mounted && resolvedTheme === "dark"
                ? "bg-[rgba(27,82,164,0.2)] border border-[rgba(27,82,164,0.45)]"
                : "bg-[rgba(27,82,164,0.08)] border border-[rgba(27,82,164,0.28)]"
            }`}
          >
            <Briefcase
              className={`w-4 h-4 ${
                mounted && resolvedTheme === "dark"
                  ? "text-[#00a2e5]"
                  : "text-[#1b52a4]"
              }`}
            />
            <span
              className={`text-sm font-semibold ${
                mounted && resolvedTheme === "dark"
                  ? "text-[#00a2e5]"
                  : "text-[#1b52a4]"
              }`}
            >
              {hero.badge}
            </span>
          </div>

          <div className="space-y-6">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight transition-colors duration-500 ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-900"
              }`}
            >
              {hero.heading}
              <span
                className={`block mt-2 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-medium transition-colors duration-500 ${
                  mounted && resolvedTheme === "dark"
                    ? "text-[#00a2e5]"
                    : "text-[#00a2e5]"
                }`}
              >
                {hero.headingAccent}
              </span>
            </h1>
          </div>

          <div className="space-y-4">
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl transition-colors duration-500 ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {renderBoldDescription(hero.description, strongClass)}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`px-8 py-4 font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 ${
                mounted && resolvedTheme === "dark"
                  ? "bg-[#1b52a4] text-white hover:bg-[#154a8f]"
                  : "bg-[#1b52a4] text-white hover:bg-[#154a8f]"
              }`}
            >
              {hero.cta}
            </button>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/corporate.jpg"
              alt={hero.imageAlt}
              width={600}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
          <div
            className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${
              mounted && resolvedTheme === "dark"
                ? "bg-[#f6f8fb]0/30"
                : "bg-[rgba(27,82,164,0.2)]"
            }`}
          ></div>
          <div
            className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${
              mounted && resolvedTheme === "dark"
                ? "bg-[rgba(0,162,229,0.3)]"
                : "bg-[rgba(0,162,229,0.2)]"
            }`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
