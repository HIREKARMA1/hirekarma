"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { AlertTriangle } from "lucide-react";
import { useSolutionsLocale } from "@/contexts/SolutionsLocaleContext";

const ProblemSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useSolutionsLocale();
  const problem = content.skillDevelopment.problem;

  useEffect(() => {
    setMounted(true);
  }, []);

  const ChallengeListItem: React.FC<{
    title: string;
    description: string;
  }> = ({ title, description }) => (
    <div className="flex items-start gap-4">
      <div
        className={`w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center mt-1 ${
          mounted && resolvedTheme === "dark" ? "bg-red-900/30" : "bg-red-100"
        }`}
      >
        <AlertTriangle
          className={`w-6 h-6 ${
            mounted && resolvedTheme === "dark"
              ? "text-red-400"
              : "text-[#d64246]"
          }`}
        />
      </div>
      <div>
        <h3
          className={`text-lg font-bold ${
            mounted && resolvedTheme === "dark"
              ? "text-gray-100"
              : "text-gray-900"
          }`}
        >
          {title}
        </h3>
        <p
          className={`${
            mounted && resolvedTheme === "dark"
              ? "text-gray-600"
              : "text-gray-600"
          }`}
        >
          {description}
        </p>
      </div>
    </div>
  );

  const imageSrcs = [
    "/university.jpg",
    "/corporate.jpg",
    "/demo.png",
    "/students.jpg",
  ] as const;

  return (
    <div className="relative content-container py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src={imageSrcs[0]}
                  alt={problem.imageAlts[0]}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <Image
                  src={imageSrcs[1]}
                  alt={problem.imageAlts[1]}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src={imageSrcs[2]}
                  alt={problem.imageAlts[2]}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <Image
                  src={imageSrcs[3]}
                  alt={problem.imageAlts[3]}
                  width={300}
                  height={400}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-10">
            <div>
              <h2
                className={`text-3xl lg:text-4xl xl:text-5xl font-bold ${
                  mounted && resolvedTheme === "dark"
                    ? "text-gray-100"
                    : "text-gray-900"
                }`}
              >
                {problem.heading}
                <span
                  className={`block mt-2 text-2xl lg:text-3xl font-medium ${
                    mounted && resolvedTheme === "dark"
                      ? "text-red-400"
                      : "text-[#d64246]"
                  }`}
                >
                  {problem.headingAccent}
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {problem.items.map((item) => (
                <ChallengeListItem
                  key={item.title}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemSection;
