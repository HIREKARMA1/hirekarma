"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  Upload,
  Briefcase,
  GraduationCap,
  BarChart3,
  BookOpen,
  LineChart,
  UserCheck,
} from "lucide-react";

const JourneySection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const journeySteps = [
    {
      step: 1,
      title: "Upload Resume",
      description:
        "AI instantly extracts your skills, education, and experience from your resume.",
      icon: Upload,
      colorLight: "text-blue-600",
      colorDark: "text-blue-400",
      bgLight: "bg-blue-100/80",
      bgDark: "bg-blue-900/20",
    },
    {
      step: 2,
      title: "View Job Suggestions",
      description:
        "Discover personalized job roles that match your skills and career goals.",
      icon: Briefcase,
      colorLight: "text-emerald-600",
      colorDark: "text-emerald-400",
      bgLight: "bg-emerald-100/80",
      bgDark: "bg-emerald-900/20",
    },
    {
      step: 3,
      title: "Enter Simulation",
      description:
        "Experience realistic AI-powered aptitude and technical interview rounds.",
      icon: GraduationCap,
      colorLight: "text-purple-600",
      colorDark: "text-purple-400",
      bgLight: "bg-purple-100/80",
      bgDark: "bg-purple-900/20",
    },
    {
      step: 4,
      title: "Instant Insights",
      description:
        "Receive detailed readiness reports and scores across all categories.",
      icon: BarChart3,
      colorLight: "text-yellow-600",
      colorDark: "text-yellow-400",
      bgLight: "bg-yellow-100/80",
      bgDark: "bg-yellow-900/20",
    },
    {
      step: 5,
      title: "Learning Playlist",
      description:
        "Get curated tutorials and resources to improve your skill gaps.",
      icon: BookOpen,
      colorLight: "text-red-600",
      colorDark: "text-red-400",
      bgLight: "bg-red-100/80",
      bgDark: "bg-red-900/20",
    },
    {
      step: 6,
      title: "Track Progress",
      description:
        "Monitor your improvement after multiple simulated attempts.",
      icon: LineChart,
      colorLight: "text-indigo-600",
      colorDark: "text-indigo-400",
      bgLight: "bg-indigo-100/80",
      bgDark: "bg-indigo-900/20",
    },
    {
      step: 7,
      title: "Auto Applications",
      description:
        "AI applies to relevant job openings once your readiness reaches ≥50%.",
      icon: UserCheck,
      colorLight: "text-cyan-600",
      colorDark: "text-cyan-400",
      bgLight: "bg-cyan-100/80",
      bgDark: "bg-cyan-900/20",
    },
  ];

  // Duplicate list for smooth infinite scrolling
  const duplicatedSteps = [...journeySteps, ...journeySteps];

  return (
    <section
      className={`relative content-container py-20 md:py-24 overflow-hidden `}
    >

{/* Header */}
<div className="relative text-left mb-16 px-4 sm:px-6 max-w-5xl">
  <h2
    className={`text-3xl md:text-5xl font-bold tracking-tight ${
      mounted && resolvedTheme === "dark"
        ? "text-gray-100"
        : "text-gray-900"
    }`}
  >
    Your AI-Driven
    <span
      className={`block mt-2 text-2xl md:text-4xl font-semibold ${
        mounted && resolvedTheme === "dark" ? "text-red-400" : "text-red-600"
      }`}
    >
      Path to Success
    </span>
  </h2>
  <p
    className={`mt-4 text-lg md:text-xl max-w-full sm:max-w-2xl md:max-w-3xl ${
      mounted && resolvedTheme === "dark" ? "text-gray-300" : "text-gray-600"
    }`}
  >
    Follow this seamless 7-step journey - from uploading your resume to automated job applications.
  </p>
</div>


      {/* Auto-scroll Container */}
      <div className="relative overflow-hidden">
        <div className="flex animate-scroll gap-8 px-8 w-max">
          {duplicatedSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className={`flex-shrink-0 w-[280px] sm:w-[300px] md:w-[320px] rounded-3xl border p-6 sm:p-8 text-center backdrop-blur-md transition-all duration-300 hover:scale-105 ${
                  mounted && resolvedTheme === "dark"
                    ? "bg-gray-800/80 border-gray-700/40 hover:bg-gray-800"
                    : "bg-white/80 border-gray-200 hover:bg-white shadow-lg"
                }`}
              >
                {/* Step Number */}
                <div
                  className={`w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center font-bold text-xl ${
                    mounted && resolvedTheme === "dark"
                      ? "bg-gradient-to-br from-gray-700 to-gray-600 text-white border border-blue-400/40"
                      : "bg-white text-gray-900 border border-gray-200 shadow"
                  }`}
                >
                  {step.step}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-5 rounded-2xl flex items-center justify-center ${
                    mounted && resolvedTheme === "dark"
                      ? step.bgDark
                      : step.bgLight
                  }`}
                >
                  <Icon
                    className={`w-8 h-8 ${
                      mounted && resolvedTheme === "dark"
                        ? step.colorDark
                        : step.colorLight
                    }`}
                  />
                </div>

                {/* Title */}
                <h3
                  className={`text-lg font-bold mb-2 ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-100"
                      : "text-gray-900"
                  }`}
                >
                  {step.title}
                </h3>

                {/* Description */}
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

      {/* Tailwind CSS for auto-scroll */}
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
