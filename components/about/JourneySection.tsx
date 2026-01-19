"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Calendar, MapPin } from "lucide-react";

const JourneySection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container py-16 sm:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[80vh]">
        
        {/* Left Content - Text */}
        <div className="order-1 lg:order-1 space-y-8 text-center lg:text-left">
          <div className="space-y-6">
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-900"
              }`}
            >
              The Journey Begins
              <span
                className={`block mt-2 text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-medium ${
                  mounted && resolvedTheme === "dark"
                    ? "text-blue-400"
                    : "text-blue-600"
                }`}
              >
                Our Founding Story
              </span>
            </h2>
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
            </strong>{" "}
            by{" "}
            <strong
              className={`${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              Sohan Kumar Dey
            </strong>{" "}
            and{" "}
            <strong
              className={`${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-200"
                  : "text-gray-700"
              }`}
            >
              Rohit Samantaray
            </strong>
            , HireKarma arose from a passion to bridge the gap between academia
            and industry, particularly for students in tier-2 and tier-3
            colleges across India.
          </p>

          {/* Key Info Cards */}
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto lg:mx-0">
            {/* Founded Card */}
            <div
              className={`p-5 rounded-2xl border shadow-sm ${
                mounted && resolvedTheme === "dark"
                  ? "bg-gradient-to-br from-blue-900/20 to-blue-800/10 border-blue-700/40"
                  : "bg-gradient-to-br from-blue-50 to-blue-100/40 border-blue-200"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <Calendar
                    className={`w-5 h-5 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-blue-400"
                        : "text-blue-600"
                    }`}
                  />
                  <h3
                    className={`text-sm font-semibold ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    Founded
                  </h3>
                </div>
                <div
                  className={`text-3xl font-bold ${
                    mounted && resolvedTheme === "dark"
                      ? "text-blue-400"
                      : "text-blue-600"
                  }`}
                >
                  2020
                </div>
                <div
                  className={`text-sm ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Bhubaneswar, India
                </div>
              </div>
            </div>

            {/* Focus Card */}
            <div
              className={`p-5 rounded-2xl border shadow-sm ${
                mounted && resolvedTheme === "dark"
                  ? "bg-gradient-to-br from-purple-900/20 to-purple-800/10 border-purple-700/40"
                  : "bg-gradient-to-br from-purple-50 to-pink-50/40 border-purple-200"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-center lg:justify-start space-x-2 mb-2">
                  <MapPin
                    className={`w-5 h-5 ${
                      mounted && resolvedTheme === "dark"
                        ? "text-purple-400"
                        : "text-purple-600"
                    }`}
                  />
                  <h3
                    className={`text-sm font-semibold ${
                      mounted && resolvedTheme === "dark"
                        ? "text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    Focus
                  </h3>
                </div>
                <div
                  className={`text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${
                    mounted && resolvedTheme === "dark"
                      ? "from-purple-400 to-pink-400"
                      : "from-purple-600 to-pink-600"
                  }`}
                >
                  Tier-2 & 3
                </div>
                <div
                  className={`text-sm ${
                    mounted && resolvedTheme === "dark"
                      ? "text-gray-400"
                      : "text-gray-600"
                  }`}
                >
                  Colleges across India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero GIF */}
        <div className="order-2 lg:order-2 flex justify-center mt-8 lg:mt-0">
          <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[95%] xl:w-[100%] h-[250px] sm:h-[320px] md:h-[420px] lg:h-[520px] xl:h-[600px]">
            <img
              src="https://hirekarma.s3.us-east-1.amazonaws.com/hirekarma_ui/about-us/founding-story.gif"
              alt="Journey animation"
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
              <div className="text-center space-y-4">
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

export default JourneySection;
