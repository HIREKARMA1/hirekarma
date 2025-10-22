"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import {
  BarChart,
  Bar,
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

const ResultsAnalyticsSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // --- Mock JSON data (future-ready, can be fetched from backend) ---
  const analyticsData = {
    readiness: 76, // %
    improvement: 26, // %
    skills: [
      { skill: "Logical Reasoning", score: 90 },
      { skill: "Technical Aptitude", score: 75 },
      { skill: "Communication", score: 60 },
      { skill: "Problem Solving", score: 85 },
      { skill: "Quantitative", score: 70 },
    ],
    progressTimeline: [
      { week: "Week 1", readiness: 40 },
      { week: "Week 2", readiness: 52 },
      { week: "Week 3", readiness: 64 },
      { week: "Week 4", readiness: 76 },
    ],
  };

  return (
<div className="relative content-container py-20">
  <section>
    {/* Header */}
    <div className="mb-14 px-4 sm:px-6 lg:px-0 max-w-5xl">
      <h2
        className={`text-3xl md:text-4xl font-bold tracking-tight mb-4 ${
          mounted && resolvedTheme === "dark"
            ? "text-gray-100"
            : "text-gray-900"
        }`}
      >
        Measure. <span className="text-indigo-500">Improve.</span> Excel.
      </h2>
      <p
        className={`text-lg md:text-xl leading-relaxed ${
          mounted && resolvedTheme === "dark"
            ? "text-gray-300"
            : "text-gray-600"
        }`}
      >
        Track your progress with AI-driven insights. From readiness evaluation to skill assessment and improvement, get a clear picture of your journey and excel in your career.
      </p>
    </div>

    <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
      {/* --- Left: Two stacked cards --- */}
      <div className="flex-1 flex flex-col gap-8">
        {/* Readiness Meter */}
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
            Current Readiness: {analyticsData.readiness}%
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            Your readiness has improved by{" "}
            <span className="text-teal-500 font-semibold">
              {analyticsData.improvement}%
            </span>{" "}
            since last simulation.
          </p>
        </motion.div>

        {/* Skill Competencies */}
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
          <h3 className="text-lg font-semibold mb-4">Skill Competencies</h3>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={analyticsData.skills}>
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

      {/* --- Right: Improvement Timeline matching height --- */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className={`flex-1 rounded-2xl p-6 shadow-lg border flex flex-col justify-center ${
          resolvedTheme === "dark"
            ? "bg-zinc-900/60 border-zinc-800"
            : "bg-white/70 border-gray-200"
        }`}
        style={{ minHeight: "calc(2 * 180px + 2 * 32px)" }} // matches stacked height + gap
      >
        <div className="flex items-center gap-2 mb-2">
          <TrendingUp className="w-5 h-5 text-pink-500" />
          <h3 className="text-lg font-semibold">Improvement Timeline</h3>
        </div>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={analyticsData.progressTimeline}>
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

    {/* Microcopy */}
    <div className="mt-10 text-gray-700 dark:text-gray-300 text-sm text-center">
      <p>
        Top skill: <strong>Logical Reasoning</strong> | Needs focus:{" "}
        <strong>Communication</strong>
      </p>
    </div>
  </section>
</div>

  );
};

export default ResultsAnalyticsSection;
