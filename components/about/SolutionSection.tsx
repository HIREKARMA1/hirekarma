"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { HighlightMark } from "@/components/shared/HighlightMark";

const SolutionSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const [imageLoaded, setImageLoaded] = useState(false);
  const { content } = useAboutLocale();
  const solution = content.story.solution;
  const common = content.common;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container pt-8 pb-32 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
        <div className="space-y-8 lg:space-y-10 text-center lg:text-left order-1 lg:order-1">
          <div className="space-y-6">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-900"
              }`}
            >
              {solution.title}
              <span
                className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                  mounted && resolvedTheme === "dark"
                    ? "text-emerald-400"
                    : "text-[#098855]"
                }`}
              >
                {solution.subtitle}
              </span>
            </h2>
          </div>

          <div className="space-y-4">
            <p
              className={`text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {solution.beforeHighlight1}{" "}
              <HighlightMark nowrap={false}>{solution.highlight1}</HighlightMark>{" "}
              {solution.betweenHighlights}{" "}
              <HighlightMark nowrap={false}>{solution.highlight2}</HighlightMark>
              {solution.afterHighlights}
            </p>
          </div>
        </div>

        <div className="relative order-2 lg:order-2 px-0 sm:px-5 md:px-5 mt-6 lg:mt-0">
          <div className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden rounded-2xl">
            <Image
              src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/transforming_solution.gif"
              alt={solution.imageAlt}
              fill
              priority
              quality={85}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className={`object-contain object-center transition-opacity duration-300 ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              onLoad={() => setImageLoaded(true)}
            />

            {!imageLoaded && (
              <div
                className={`absolute inset-0 rounded-2xl animate-pulse ${
                  mounted && resolvedTheme === "dark"
                    ? "bg-gray-800"
                    : "bg-gray-200"
                }`}
              />
            )}

            <div
              className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${
                mounted && resolvedTheme === "dark"
                  ? "bg-gray-900/50 backdrop-blur-sm"
                  : "bg-white/50 backdrop-blur-sm"
              }`}
            >
              <div className="text-center space-y-4">
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full flex items-center justify-center ${
                    mounted && resolvedTheme === "dark"
                      ? "bg-gray-700/80"
                      : "bg-gray-200/80"
                  }`}
                >
                  <svg
                    className={`w-8 h-8 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-500"
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <p
                  className={`font-medium text-sm sm:text-base ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-200"
                      : "text-gray-600"
                  }`}
                >
                  {common.animationNotSupported}
                </p>
                <p
                  className={`text-xs sm:text-sm ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  {common.browserNoImagePlayback}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolutionSection;
