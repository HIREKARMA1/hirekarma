"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container pt-25 pb-8 sm:pt-20 sm:pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
        
        {/* Left Content - Text */}
        <div className="space-y-8 text-center lg:text-left order-1 lg:order-1">
          <div className="space-y-6">
            <h1
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-900"
              }`}
            >
              Bridging the Gap Between
              <span
                className={`block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium ${
                  mounted && resolvedTheme === "dark"
                    ? "text-cyan-400"
                    : "text-cyan-600"
                }`}
              >
                Academia & Industry
              </span>
            </h1>
          </div>

          <p
            className={`text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              mounted && resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            Founded in{" "}
            <strong
              className={`${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              Bhubaneswar in 2020
            </strong>
            , HireKarma emerged from a vision to{" "}
            <strong
              className={`${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              transform campus recruitment
            </strong>{" "}
            through AI automation and community-driven engagement.
          </p>
        </div>

        {/* Right Content - Hero GIF */}
        <div className="relative flex order-2 lg:order-2 justify-center mt-8 lg:mt-0">
          <div className="relative w-full sm:w-[80%] md:w-[80%] lg:w-[95%] xl:w-[95%] h-[250px] sm:h-[300px] md:h-[420px] lg:h-[490px] xl:h-[540px]">
            <img
              src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/briding_gap_beetween.gif"
              alt="Hero animation"
              className="w-full h-full object-cover rounded-2xl"
            />
            
            {/* Fallback */}
            <div
              className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${
                mounted && resolvedTheme === "dark"
                  ? "bg-gray-900/50 backdrop-blur-sm"
                  : "bg-white/50 backdrop-blur-sm"
              }`}
            >
              <div className="text-center space-y-3">
                <div
                  className={`w-12 sm:w-16 h-12 sm:h-16 mx-auto rounded-full flex items-center justify-center ${
                    mounted && resolvedTheme === "dark"
                      ? "bg-gray-700/80"
                      : "bg-gray-200/80"
                  }`}
                >
                  <svg
                    className={`w-6 sm:w-8 h-6 sm:h-8 ${
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
                      d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
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
                  Animation not supported
                </p>
                <p
                  className={`text-xs sm:text-sm ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-500"
                  }`}
                >
                  Your browser doesn&apos;t support image playback
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
