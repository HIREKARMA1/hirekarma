"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { ArrowRight, BarChart3 } from "lucide-react";

const CTASection: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative overflow-hidden py-24 flex items-center justify-center">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-pink-500 to-purple-600 animate-gradient-move opacity-70" />

      {/* AI Waveform effect */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden">
        <div className="wave" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className={`relative z-10 text-center rounded-2xl p-10 max-w-3xl w-full shadow-2xl ${
          resolvedTheme === "dark"
            ? "bg-zinc-900/70 border border-zinc-800"
            : "bg-white/70 border border-gray-200"
        }`}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Take the First Step Toward Your{" "}
          <span className="text-indigo-500">Career.</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Begin your AI-powered career readiness journey today — real simulations, personalized insights, and instant results.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
<button
  className="px-6 py-3 text-lg font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white"
>
  Begin Free Simulation
  <ArrowRight className="w-4 h-4" />
</button>

          <button
            className="px-6 py-3 text-lg font-semibold flex items-center gap-2 border-indigo-400 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-zinc-800"
          >
            <BarChart3 className="w-4 h-4" />
            View Student Reports
          </button>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes gradient-move {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-move {
          background-size: 200% 200%;
          animation: gradient-move 8s ease infinite;
        }
        .wave {
          position: absolute;
          bottom: 0;
          width: 200%;
          height: 100%;
          background: radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.2) 10%, transparent 70%);
          animation: waveMotion 6s linear infinite;
          opacity: 0.3;
        }
        @keyframes waveMotion {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default CTASection;
