"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { BookOpen, Brain, Briefcase } from "lucide-react";
import saksham from "@/public/sakshan.json";
import studentfacingdiffi from "@/public/studentfacingdiffi.json"
import Lottie from "lottie-react";
import { motion } from "framer-motion";

const ProblemSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container py-12 sm:py-16 md:py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-24 items-center">
        {/* Left Content - Problem Statement */}
        <div className="space-y-6 sm:space-y-8 lg:space-y-10">
          {/* Section Header */}
          <div className="space-y-4 sm:space-y-6">
            <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${mounted && resolvedTheme === 'dark'
              ? 'text-gray-100'
              : 'text-gray-900'
              }`}>
              Addressing Employability Gaps
              <span className={`block mt-1 sm:mt-2 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-medium ${mounted && resolvedTheme === 'dark'
                ? 'text-red-400'
                : 'text-red-600'
                }`}>
                for Students
              </span>
            </h2>
          </div>

          {/* Problems List */}
          <div className="space-y-4 sm:space-y-6">
            {/* Problem 1 */}
            <div className="flex items-start gap-4 p-4 sm:p-6 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                ? 'bg-gray-700/80'
                : 'bg-gray-100/80'
                }`}>
                <BookOpen className={`w-6 h-6 ${mounted && resolvedTheme === 'dark'
                  ? 'text-blue-400'
                  : 'text-blue-600'
                  }`} />
              </div>
              <div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-100'
                  : 'text-gray-900'
                  }`}>
                  Unclear Skill Readiness
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300'
                  : 'text-gray-600'
                  }`}>
                  Students lack visibility into their specific strengths and weaknesses, making it difficult to focus their efforts effectively.
                </p>
              </div>
            </div>

            {/* Problem 2 */}
            <div className="flex items-start gap-4 p-4 sm:p-6 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                ? 'bg-gray-700/80'
                : 'bg-gray-100/80'
                }`}>
                <Brain className={`w-6 h-6 ${mounted && resolvedTheme === 'dark'
                  ? 'text-cyan-400'
                  : 'text-cyan-600'
                  }`} />
              </div>
              <div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-100'
                  : 'text-gray-900'
                  }`}>
                  Fragmented Preparation
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300'
                  : 'text-gray-600'
                  }`}>
                  Learning resources are scattered across platforms without structured guidance, creating an overwhelming experience.
                </p>
              </div>
            </div>

            {/* Problem 3 */}
            <div className="flex items-start gap-4 p-4 sm:p-6 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50">
              <div className={`w-12 h-12 flex-shrink-0 rounded-lg flex items-center justify-center ${mounted && resolvedTheme === 'dark'
                ? 'bg-gray-700/80'
                : 'bg-white-100/80'
                }`}>
                <Briefcase className={`w-6 h-6 ${mounted && resolvedTheme === 'dark'
                  ? 'text-purple-400'
                  : 'text-purple-600'
                  }`} />
              </div>
              <div>
                <h3 className={`text-lg sm:text-xl font-semibold mb-2 ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-100'
                  : 'text-gray-900'
                  }`}>
                  Manual Job Discovery
                </h3>
                <p className={`text-sm sm:text-base leading-relaxed ${mounted && resolvedTheme === 'dark'
                  ? 'text-gray-300'
                  : 'text-gray-600'
                  }`}>
                  Students spend hours searching and applying manually for relevant jobs, often missing opportunities that match their skills.
                </p>
              </div>
            </div>
          </div>
        </div>

          {/* Right Content - Hero Image */}
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