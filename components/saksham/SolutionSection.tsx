"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { useSakshamLocale } from "@/contexts/SakshamLocaleContext";
import {
  solutionIconMap,
  solutionStyleMap,
} from "@/components/saksham/icon-maps";

const SolutionSection = () => {
  const { content } = useSakshamLocale();
  const { solution } = content;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container py-16 sm:py-20 md:py-24">
      <div className="relative text-left mb-16 sm:mb-20 md:mb-24 max-w-5xl px-4 sm:px-6">
        <div className="space-y-6 sm:space-y-8">
          <h2
            className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
              mounted && resolvedTheme === "dark"
                ? "text-gray-100"
                : "text-gray-900"
            }`}
          >
            {solution.title}
            <span
              className={`block mt-2 sm:mt-3 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium ${
                mounted && resolvedTheme === "dark"
                  ? "text-red-400"
                  : "text-red-600"
              }`}
            >
              {solution.titleHighlight}
            </span>
          </h2>
          <p
            className={`text-lg sm:text-xl md:text-2xl leading-relaxed max-w-full sm:max-w-2xl md:max-w-3xl ${
              mounted && resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            {solution.description}
          </p>
        </div>
      </div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8">
        {solution.items.map((item, index) => {
          const Icon = solutionIconMap[item.icon];
          const style = solutionStyleMap[index % solutionStyleMap.length];
          return (
            <div
              key={item.id}
              className={`relative p-6 sm:p-8 md:p-10 rounded-3xl border overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group ${
                mounted && resolvedTheme === "dark"
                  ? "bg-gray-800/60 backdrop-blur-md border-gray-700/40 hover:bg-gray-800/80"
                  : "bg-white/60 backdrop-blur-md border-gray-200/40 hover:bg-white/80 shadow-md"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                  mounted && resolvedTheme === "dark"
                    ? style.gradientDark
                    : style.gradientLight
                }`}
              />

              <div className="relative flex items-start gap-5 md:gap-6">
                <div
                  className={`w-14 h-14 md:w-16 md:h-16 flex-shrink-0 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                    mounted && resolvedTheme === "dark"
                      ? style.bgDark
                      : style.bgLight
                  } border border-white/10 shadow-sm`}
                >
                  <Icon
                    className={`w-7 h-7 md:w-8 md:h-8 ${
                      mounted && resolvedTheme === "dark"
                        ? style.colorDark
                        : style.colorLight
                    }`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3
                    className={`text-xl sm:text-2xl font-semibold mb-4 md:mb-5 tracking-tight ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`text-base sm:text-lg leading-relaxed ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative text-center mt-16 sm:mt-20 md:mt-24">
        <a
          href="#get-started"
          className={`inline-block px-8 py-4 md:px-10 md:py-5 rounded-full text-base md:text-lg font-medium transition-all duration-300 ${
            mounted && resolvedTheme === "dark"
              ? "bg-red-500/90 text-white hover:bg-red-400 shadow-lg hover:shadow-xl"
              : "bg-red-600 text-white hover:bg-red-500 shadow-md hover:shadow-lg"
          }`}
        >
          {solution.cta}
        </a>
      </div>
    </div>
  );
};

export default SolutionSection;
