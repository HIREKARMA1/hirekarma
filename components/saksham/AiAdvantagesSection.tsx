"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import readyforcareer from "@/public/ReadyforCareer.json";
import { Brain, LineChart, Zap } from "lucide-react";

const AIAdvantageSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const features = [
    {
      icon: <Brain className="w-10 h-10 text-indigo-500" />,
      title: "Real-Time AI Evaluation",
      desc: "Each simulation is scored via domain-trained neural models for accurate and real-time performance insights.",
    },
    {
      icon: <LineChart className="w-10 h-10 text-pink-500" />,
      title: "Personalized Learning Recommendations",
      desc: "Weak areas are automatically identified, and dynamic playlists are curated from trusted public repositories.",
    },
    {
      icon: <Zap className="w-10 h-10 text-teal-500" />,
      title: "Automated Career Progression",
      desc: "When you're ready, AI matches and applies to suitable roles instantly—saving you time and effort.",
    },
  ];

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background gradient for depth */}
      <div
        className={`absolute inset-0 -z-10 ${
          resolvedTheme === "dark"
            ? "bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-800"
            : "bg-gradient-to-br from-white via-blue-50 to-cyan-50"
        }`}
      />

      {/* Header */}
      <div className="text-center mb-14 px-4">
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight mb-3 ${
            resolvedTheme === "dark" ? "text-gray-100" : "text-gray-900"
          }`}
        >
          Why Choose <span className="text-indigo-500">Saksham?</span>
        </h2>
        <p
          className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
            resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
          }`}
        >
          Discover how AI-driven insights and personalized recommendations
          prepare you for real interviews and accelerate your career success.
        </p>
      </div>

      {/* Content Grid */}
      <div className="container mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Feature Cards */}
        <div className="flex-1 grid grid-cols-1 gap-8 w-full">
          {features.map((item, index) => (
            <motion.div
              key={index}
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
                {item.icon}
                <h3
                  className={`text-xl font-semibold ${
                    resolvedTheme === "dark" ? "text-gray-100" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
              </div>
              <p
                className={`text-base leading-relaxed ${
                  resolvedTheme === "dark" ? "text-gray-400" : "text-gray-600"
                }`}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Right: Lottie Animation */}
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
