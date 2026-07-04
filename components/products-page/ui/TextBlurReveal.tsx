"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils/cn";

interface TextBlurRevealProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  /** When false, text stays hidden. When true, blur fade-in runs. */
  active?: boolean;
  onComplete?: () => void;
}

const wordVariants = {
  hidden: { opacity: 0, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.45, ease: "easeOut" as const },
  },
};

const STAGGER = 0.08;
const WORD_DURATION = 0.45;

/** Aceternity-style blur fade-in per word — https://ui.aceternity.com/blocks/text-animations */
export function TextBlurReveal({
  text,
  className,
  style,
  delay = 0,
  active = true,
  onComplete,
}: TextBlurRevealProps) {
  const words = text.trim().split(/\s+/);
  const completedRef = useRef(false);

  useEffect(() => {
    if (!active) {
      completedRef.current = false;
      return;
    }
    if (!onComplete || completedRef.current) return;

    const ms = estimateBlurRevealMs(text, delay);
    const timer = window.setTimeout(() => {
      completedRef.current = true;
      onComplete();
    }, ms);

    return () => window.clearTimeout(timer);
  }, [active, delay, onComplete, text]);

  return (
    <motion.span
      className={cn("inline", className)}
      style={style}
      initial="hidden"
      animate={active ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: STAGGER, delayChildren: delay },
        },
      }}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          variants={wordVariants}
          className="inline-block"
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </motion.span>
  );
}

export function estimateBlurRevealMs(text: string, delay = 0): number {
  const wordCount = text.trim().split(/\s+/).length;
  return (delay + wordCount * STAGGER + WORD_DURATION) * 1000;
}
