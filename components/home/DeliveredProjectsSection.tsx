"use client";

import React from "react";
import { useTheme } from "next-themes";
import Link from "next/link";

import DeliveredProjectCard from "./DeliveredProjectCard";
import {
  DeliveredProjectsLocaleProvider,
  useDeliveredProjectsLocale,
} from "@/contexts/DeliveredProjectsLocaleContext";

interface DeliveredProjectsSectionProps {
  showViewMore?: boolean;
  viewMoreHref?: string;
}

function DeliveredProjectsSectionContent({
  showViewMore = true,
  viewMoreHref = "/delivered-projects",
}: DeliveredProjectsSectionProps) {
  const { content } = useDeliveredProjectsLocale();
  const [mounted, setMounted] = React.useState(false);
  const { resolvedTheme } = useTheme();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <section className="relative content-container py-12 sm:py-16 md:py-20">
      <div className="mb-10 sm:mb-12 md:mb-14 space-y-6">
        <h2
          className={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight ${
            isDark ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {content.heading}
          <span
            className={`block mt-2 text-lg sm:text-xl lg:text-2xl xl:text-3xl font-medium ${
              isDark ? "text-emerald-400" : "text-[#098855]"
            }`}
          >
            {content.subheading}
          </span>
        </h2>

        <p
          className={`text-lg sm:text-xl leading-relaxed max-w-3xl ${
            isDark ? "text-gray-300" : "text-gray-600"
          }`}
        >
          {content.description}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
        {content.items.map((item) => (
          <DeliveredProjectCard
            key={item.id}
            image={item.image}
            title={item.title}
            clientType={item.clientType}
            subtitle={item.subtitle}
            description={item.description}
            href={item.href}
            viewProjectLabel={content.viewProject}
          />
        ))}
      </div>

      {showViewMore && (
        <div className="pt-10 flex justify-center">
          <Link
            href={viewMoreHref}
            className={`group relative inline-flex items-center overflow-hidden px-6 py-3 font-semibold rounded-lg transition-all duration-500 border-2 hover:brightness-110 ${
              isDark
                ? "border-emerald-600 text-emerald-400 hover:bg-emerald-600 hover:text-white"
                : "border-emerald-600 text-[#098855] hover:bg-emerald-600 hover:text-white"
            }`}
          >
            <span className="relative z-10">{content.viewMore}</span>
            <svg
              className="relative z-10 ml-2 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span
              className="pointer-events-none absolute inset-0 rounded-lg bg-gradient-to-br from-emerald-500/5 to-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              aria-hidden
            />
          </Link>
        </div>
      )}
    </section>
  );
}

const DeliveredProjectsSection: React.FC<DeliveredProjectsSectionProps> = (
  props
) => (
  <DeliveredProjectsLocaleProvider>
    <DeliveredProjectsSectionContent {...props} />
  </DeliveredProjectsLocaleProvider>
);

export default DeliveredProjectsSection;
