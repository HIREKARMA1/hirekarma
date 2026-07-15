"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import readyforcareer from "@/public/ReadyforCareer.json";
import { Brain, LineChart, Zap } from "lucide-react";

import { useSakshamLocale } from "@/contexts/SakshamLocaleContext";
import { advantageIconColorMap } from "@/components/saksham/icon-maps";

const advantageIcons = {
  brain: Brain,
  "line-chart": LineChart,
  zap: Zap,
} as const;

const AIAdvantageSection: React.FC = () => {
  const { content } = useSakshamLocale();
  const { advantages } = content;
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div
        className={`absolute inset-0 -z-10 ${
          resolvedTheme === "dark"
            ? "bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800"
            : "bg-gradient-to-br from-white via-blue-50 to-cyan-50"
        }`}
      />

      <div className="text-center mb-14 px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
            resolvedTheme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          {advantages.titleBefore}
          <span className="text-indigo-500">{advantages.titleHighlight}</span>
          {advantages.titleAfter}
        </h2>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          {advantages.description}
        </p>
      </div>

      <div className="container mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 grid grid-cols-1 gap-8 w-full">
          {advantages.items.map((item, index) => {
            const Icon = advantageIcons[item.icon];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`rounded-2xl p-6 sm:p-8 shadow-xl border hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300 ${
                  resolvedTheme === "dark"
                    ? "bg-zinc-900/70 border-zinc-800"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <Icon
                    className={`w-10 h-10 ${advantageIconColorMap[item.icon]}`}
                  />
                  <h3
                    className={`text-xl font-semibold ${
                      resolvedTheme === "dark"
                        ? "text-gray-100"
                        : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <p
                  className={`text-base leading-relaxed ${
                    resolvedTheme === "dark"
                      ? "text-gray-600"
                      : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center"
        >
          <div className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[75%] xl:w-[70%] max-w-[600px]">
            <Lottie
              animationData={readyforcareer}
              loop
              autoplay
              className="h-auto"
              style={{ background: "transparent" }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAdvantageSection;
