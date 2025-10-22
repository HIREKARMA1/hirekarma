"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";
import saksham from "@/public/sakshan.json";
import Lottie from "lottie-react";

const HeroSection = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-[80vh]">
          {/* Left Content - Text */}
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight ${
                resolvedTheme === "dark" ? "text-gray-100" : "text-gray-900"
              }`}
            >
              Get Placement Ready
              <span
                className={`block mt-2 text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium text-transparent bg-clip-text ${
                  resolvedTheme === "dark"
                    ? "bg-gradient-to-r from-blue-400 to-cyan-300"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500"
                }`}
              >
                with AI Intelligence
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={`text-lg md:text-xl max-w-xl leading-relaxed ${
                resolvedTheme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Saksham is your AI companion that simulates real hiring experiences,
              identifies skill gaps, and accelerates your journey to employment.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="#simulation"
                className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                  resolvedTheme === "dark"
                    ? "bg-gradient-to-r from-blue-400 to-cyan-300 text-gray-900 hover:from-blue-500 hover:to-cyan-400"
                    : "bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600"
                }`}
              >
                Start My Simulation
              </Link>
              <Link
                href="#how-it-works"
                className={`px-8 py-3 rounded-xl font-medium border transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg ${
                  resolvedTheme === "dark"
                    ? "bg-gray-800 text-gray-200 border-gray-700 hover:border-blue-500"
                    : "bg-white text-gray-800 border-gray-200 hover:border-blue-300"
                }`}
              >
                See How It Works
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Hero Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
<div className="flex justify-center">
  <Lottie
    animationData={saksham}
    loop
    autoplay
    className="w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[65%] h-auto"
    style={{ background: "transparent", minHeight: 320 }}
  />
</div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
