"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  XAxis,
  YAxis,
  Tooltip,
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  LineChart,
  Line,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { TrendingUp, Gauge } from "lucide-react";

import { useSakshamLocale } from "@/contexts/SakshamLocaleContext";

const ResultsAnalyticsSection: React.FC = () => {
  const { content } = useSakshamLocale();
  const { analytics } = content;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative content-container py-20">
      <section>
        <div className="mb-14 px-4 sm:px-6 lg:px-0 max-w-5xl">
          <h2
            className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
              mounted && resolvedTheme === "dark"
                ? "text-gray-100"
                : "text-gray-900"
            }`}
          >
            {analytics.headingBefore}
            <span className="text-indigo-500">{analytics.headingHighlight}</span>
            {analytics.headingAfter}
          </h2>
          <p
            className={`text-lg md:text-xl leading-relaxed ${
              mounted && resolvedTheme === "dark"
                ? "text-gray-300"
                : "text-gray-600"
            }`}
          >
            {analytics.description}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
          <div className="flex-1 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={`rounded-2xl p-6 shadow-lg border flex flex-col items-center justify-center ${
                resolvedTheme === "dark"
                  ? "bg-zinc-900/60 border-zinc-800"
                  : "bg-white/70 border-gray-200"
              }`}
            >
              <Gauge className="w-10 h-10 text-teal-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2">
                {analytics.readinessLabel} {analytics.readiness}
                {analytics.readinessSuffix}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {analytics.readinessImprovedBefore}{" "}
                <span className="text-teal-500 font-semibold">
                  {analytics.improvement}%
                </span>{" "}
                {analytics.readinessImprovedAfter}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className={`rounded-2xl p-6 shadow-lg border flex-1 ${
                resolvedTheme === "dark"
                  ? "bg-zinc-900/60 border-zinc-800"
                  : "bg-white/70 border-gray-200"
              }`}
            >
              <h3 className="text-lg font-semibold mb-4">
                {analytics.skillsTitle}
              </h3>
              <ResponsiveContainer width="100%" height={250}>
                <RadarChart data={analytics.skills}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="skill" />
                  <Radar
                    name="Score"
                    dataKey="score"
                    stroke="#6366F1"
                    fill="#6366F1"
                    fillOpacity={0.6}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className={`flex-1 rounded-2xl p-6 shadow-lg border flex flex-col justify-center ${
              resolvedTheme === "dark"
                ? "bg-zinc-900/60 border-zinc-800"
                : "bg-white/70 border-gray-200"
            }`}
            style={{ minHeight: "calc(2 * 180px + 2 * 32px)" }}
          >
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-pink-500" />
              <h3 className="text-lg font-semibold">
                {analytics.timelineTitle}
              </h3>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={analytics.progressTimeline}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="readiness"
                  stroke="#EC4899"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        <div className="mt-10 text-gray-700 dark:text-gray-300 text-sm text-center">
          <p>
            {analytics.microcopyTopSkill}{" "}
            <strong>{analytics.topSkill}</strong> | {analytics.microcopyNeedsFocus}{" "}
            <strong>{analytics.needsFocus}</strong>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResultsAnalyticsSection;
