"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { useSakshamLocale } from "@/contexts/SakshamLocaleContext";
import {
  journeyIconMap,
  journeyStyleMap,
} from "@/components/saksham/icon-maps";

const JourneySection: React.FC = () => {
  const { content } = useSakshamLocale();
  const { journey } = content;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const duplicatedSteps = [...journey.steps, ...journey.steps];

  return (
    <section className="relative content-container py-20 md:py-24 overflow-hidden">
      <div className="relative text-left mb-16 px-4 sm:px-6 max-w-5xl">
        <h2
          className={`text-3xl md:text-5xl font-bold tracking-tight ${
            mounted && resolvedTheme === "dark"
              ? "text-gray-100"
              : "text-gray-900"
          }`}
        >
          {journey.title}
          <span
            className={`block mt-2 text-2xl md:text-4xl font-semibold ${
              mounted && resolvedTheme === "dark"
                ? "text-red-400"
                : "text-red-600"
            }`}
          >
            {journey.titleHighlight}
          </span>
        </h2>
        <p
          className={`mt-4 text-lg md:text-xl max-w-full sm:max-w-2xl md:max-w-3xl ${
            mounted && resolvedTheme === "dark"
              ? "text-gray-300"
              : "text-gray-600"
          }`}
        >
          {journey.description}
        </p>
      </div>

      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-8 px-8 w-max">
          {duplicatedSteps.map((step, index) => {
            const Icon = journeyIconMap[step.icon];
            const style =
              journeyStyleMap[(step.step - 1) % journeyStyleMap.length];
            return (
              <div
                key={`${step.id}-${index}`}
                className={`flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] rounded-3xl border p-6 sm:p-8 text-center backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  mounted && resolvedTheme === "dark"
                    ? "bg-gray-800/80 border-gray-700/40 hover:bg-gray-800"
                    : "bg-white/80 border-gray-200 hover:bg-white shadow-lg"
                }`}
              >
                <div
                  className={`w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center font-bold text-xl ${
                    mounted && resolvedTheme === "dark"
                      ? "bg-gradient-to-br from-gray-700 to-gray-600 text-white border border-blue-400/40"
                      : "bg-white text-gray-900 border border-gray-200 shadow"
                  }`}
                >
                  {step.step}
                </div>

                <div
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center ${
                    mounted && resolvedTheme === "dark"
                      ? style.bgDark
                      : style.bgLight
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      mounted && resolvedTheme === "dark"
                        ? style.colorDark
                        : style.colorLight
                    }`}
                  />
                </div>

                <h3
                  className={`text-lg font-bold mb-2 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>

                <p
                  className={`text-sm leading-relaxed ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-300"
                      : "text-gray-600"
                  }`}
                >
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default JourneySection;
