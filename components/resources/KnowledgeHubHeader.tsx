"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "next-themes";

import { useResourcesExtraLocale } from "@/contexts/ResourcesExtraLocaleContext";

const KnowledgeHubHeader: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();
  const { content } = useResourcesExtraLocale();
  const { title, descriptionBefore, descriptionStrong, descriptionAfter } =
    content.knowledgeHub;

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="relative content-container pt-20 pb-8">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-2 lg:space-y-1">
          <div className="space-y-4">
            <h1
              className={`text-2xl sm:text-4xl lg:text-4xl xl:text-6xl font-bold leading-tight tracking-tight ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-100"
                  : "text-gray-900"
              }`}
            >
              {title}
            </h1>
          </div>

          <div className="space-y-3">
            <p
              className={`text-lg sm:text-xl leading-relaxed max-w-2xl ${
                mounted && resolvedTheme === "dark"
                  ? "text-gray-300"
                  : "text-gray-600"
              }`}
            >
              {descriptionBefore}
              <strong
                className={`${
                  mounted && resolvedTheme === "dark"
                    ? "text-gray-200"
                    : "text-gray-700"
                }`}
              >
                {descriptionStrong}
              </strong>
              {descriptionAfter}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeHubHeader;
