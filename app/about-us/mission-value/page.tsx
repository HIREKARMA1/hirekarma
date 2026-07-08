"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

import { AboutLocaleProvider, useAboutLocale } from "@/contexts/AboutLocaleContext";

function MissionValueInner() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useAboutLocale();
  const { mission, vision, values } = content.mission;
  const common = content.common;

  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen flex flex-col transition-all duration-500">
      <main className="flex-grow">
        <section className="relative min-h-screen transition-all duration-500">
          <div className="relative content-container py-36">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 lg:space-y-10">
                <div className="space-y-6">
                  <h2
                    className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {mission.title}
                    <span
                      className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
                        mounted && resolvedTheme === "dark"
                          ? "text-cyan-300"
                          : "text-cyan-700"
                      }`}
                    >
                      {mission.subtitle}
                    </span>
                  </h2>
                </div>

                <div className="space-y-4">
                  <p
                    className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-300"
                        : "text-gray-600"
                    }`}
                  >
                    {mission.body}
                  </p>
                </div>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                  <img
                    src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/mission-about.gif"
                    alt={mission.imageAlt}
                    className="w-full h-full object-cover "
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-900/50 backdrop-blur-sm"
                        : "bg-white/50 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-center space-y-4">
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

          <div className="relative content-container py-16">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 max-w-2xl">
                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-900"
                  }`}
                >
                  {vision.title}
                </h2>
                <h3
                  className={`text-xl sm:text-2xl text-purple-700 font-semibold mt-4 mb-2 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-200"
                      : "text-gray-700"
                  }`}
                >
                  {vision.subtitle}
                </h3>
                <p
                  className={`text-lg sm:text-xl leading-relaxed ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {vision.body}
                </p>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                  <img
                    src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/vission-about.gif"
                    alt={vision.imageAlt}
                    className="w-full h-full object-cover "
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-900/50 backdrop-blur-sm"
                        : "bg-white/50 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-center space-y-4">
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

          <div className="relative content-container py-24 pb-36">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-6 max-w-2xl">
                <h2
                  className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-900"
                  }`}
                >
                  {values.title}
                </h2>
                <h3
                  className={`text-xl sm:text-2xl font-semibold mt-4 mb-2 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-emerald-400"
                      : "text-emerald-600"
                  }`}
                >
                  {values.subtitle}
                </h3>
                <p
                  className={`text-lg sm:text-xl leading-relaxed ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {values.body}
                </p>
              </div>

              <div className="order-1 lg:order-2 flex justify-center">
                <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px]">
                  <img
                    src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/value-about.gif"
                    alt={values.imageAlt}
                    className="w-full h-full object-cover "
                  />

                  <div
                    className={`absolute inset-0 flex items-center justify-center rounded-2xl hidden ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-900/50 backdrop-blur-sm"
                        : "bg-white/50 backdrop-blur-sm"
                    }`}
                  >
                    <div className="text-center space-y-4">
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
        </section>
      </main>
    </div>
  );
}

export default function MissionValuePage() {
  return (
    <AboutLocaleProvider>
      <MissionValueInner />
    </AboutLocaleProvider>
  );
}
