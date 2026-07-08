"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Target, Users, LineChart, Handshake } from "lucide-react";
import { useSolutionsLocale } from "@/contexts/SolutionsLocaleContext";

const ICONS = [Target, Users, LineChart, Handshake] as const;
const ICON_STYLES = [
  {
    dark: "bg-blue-500/20 text-blue-400",
    light: "bg-blue-100 text-blue-600",
  },
  {
    dark: "bg-green-500/20 text-green-400",
    light: "bg-green-100 text-green-600",
  },
  {
    dark: "bg-yellow-500/20 text-yellow-400",
    light: "bg-yellow-100 text-yellow-600",
  },
  {
    dark: "bg-red-500/20 text-red-400",
    light: "bg-red-100 text-red-600",
  },
] as const;

const SolutionSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useSolutionsLocale();
  const solution = content.university.solution;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1 space-y-10">
            <div>
              <h2
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${
                  mounted && resolvedTheme === "dark"
                    ? "text-gray-100"
                    : "text-gray-900"
                }`}
              >
                {solution.heading}
              </h2>
            </div>

            <div className="space-y-6">
              {solution.items.map((item, index) => {
                const Icon = ICONS[index];
                const style = ICON_STYLES[index];
                return (
                  <div key={item.title} className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl ${
                        mounted && resolvedTheme === "dark"
                          ? style.dark
                          : style.light
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3
                        className={`text-xl font-semibold ${
                          mounted && resolvedTheme === "dark"
                            ? "text-gray-100"
                            : "text-gray-900"
                        }`}
                      >
                        {item.title}
                      </h3>
                      <p
                        className={`text-base ${
                          mounted && resolvedTheme === "dark"
                            ? "text-gray-400"
                            : "text-gray-600"
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/university.jpg"
                alt={solution.imageAlt}
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            <div
              className={`absolute -bottom-6 -left-6 w-32 h-32 rounded-full blur-3xl ${
                mounted && resolvedTheme === "dark"
                  ? "bg-blue-500/30"
                  : "bg-blue-200/50"
              }`}
            ></div>
            <div
              className={`absolute -top-6 -right-6 w-40 h-40 rounded-full blur-3xl ${
                mounted && resolvedTheme === "dark"
                  ? "bg-cyan-500/30"
                  : "bg-cyan-200/50"
              }`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
