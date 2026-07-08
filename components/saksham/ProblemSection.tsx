"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import studentfacingdiffi from "@/public/studentfacingdiffi.json";
import Lottie from "lottie-react";
import { motion } from "framer-motion";

import { useSakshamLocale } from "@/contexts/SakshamLocaleContext";
import { problemIconMap } from "@/components/saksham/icon-maps";

const ProblemSection: React.FC = () => {
  const { content } = useSakshamLocale();
  const { problem } = content;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          <div className="space-y-4 sm:space-y-6">
            <h2
              className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-900"
              }`}
            >
              {problem.title}
              <span
                className={`block mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium ${
                  mounted && resolvedTheme === "dark"
                    ? "text-red-400"
                    : "text-red-600"
                }`}
              >
                {problem.titleHighlight}
              </span>
            </h2>
          </div>

          <div className="space-y-4 sm:space-y-6">
            {problem.items.map((item) => {
              const Icon = problemIconMap[item.icon];
              return (
                <div
                  key={item.id}
                  className="flex items-start gap-4 p-4 sm:p-6 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50"
                >
                  <div
                    className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ${
                      mounted && resolvedTheme === "dark"
                        ? "bg-gray-700/80"
                        : "bg-gray-100/80"
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        mounted && resolvedTheme === "dark"
                          ? item.icon === "brain"
                            ? "text-cyan-400"
                            : item.icon === "briefcase"
                              ? "text-purple-400"
                              : "text-blue-400"
                          : item.icon === "brain"
                            ? "text-cyan-600"
                            : item.icon === "briefcase"
                              ? "text-purple-600"
                              : "text-blue-600"
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-lg sm:text-xl font-semibold mb-2 ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-100"
                          : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>
                    <p
                      className={`text-sm sm:text-base leading-relaxed ${
                        mounted && resolvedTheme === "dark"
                          ? "text-gray-300"
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

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex items-center justify-center"
        >
          <div className="w-full flex justify-center items-center">
            <Lottie
              animationData={studentfacingdiffi}
              loop
              autoplay
              className="w-full h-auto max-w-[600px]"
              style={{ background: "transparent", minHeight: 400 }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProblemSection;
