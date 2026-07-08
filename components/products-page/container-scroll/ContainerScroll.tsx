"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

import { cn } from "@/lib/utils/cn";

interface ContainerScrollProps {
  children: React.ReactNode;
  className?: string;
  compact?: boolean;
  /** Controls tablet entrance - wait until text sequence finishes */
  showTablet?: boolean;
}

function StaticTabletFrame({
  children,
  visible,
  compact = false,
}: {
  children: React.ReactNode;
  visible: boolean;
  compact?: boolean;
}) {
  return (
    <motion.div
      className={cn(
        "mx-auto w-full",
        compact ? "max-w-lg lg:max-w-xl" : "max-w-[360px] sm:max-w-md"
      )}
      initial={{ opacity: 0, y: 32, scale: 0.96 }}
      animate={
        visible
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 32, scale: 0.96 }
      }
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "rounded-[22px] border-2 border-[#3d4450] bg-[#1a1f2e] p-1.5 shadow-xl",
          compact && "rounded-[28px] border-[3px] p-2 sm:p-3"
        )}
      >
        <div
          className={cn(
            "overflow-hidden rounded-[18px] bg-[#0d1117]",
            compact && "rounded-[22px] sm:rounded-[26px]"
          )}
        >
          <div
            className={cn(
              "relative w-full overflow-hidden",
              compact ? "aspect-[16/10]" : "aspect-[4/3]"
            )}
          >
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StaticContainerScroll({
  children,
  className = "",
  compact = false,
  showTablet = true,
  isMobile,
}: ContainerScrollProps & { isMobile: boolean }) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden",
        compact ? "max-lg:py-2 lg:py-10" : "py-4 sm:py-5",
        className
      )}
    >
      <StaticTabletFrame visible={showTablet} compact={!isMobile && compact}>
        {children}
      </StaticTabletFrame>
    </div>
  );
}

function AnimatedContainerScroll({
  children,
  className = "",
  showTablet = true,
}: ContainerScrollProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [18, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const translate = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <motion.div
      ref={containerRef}
      className={cn(
        "relative flex h-[50rem] items-center justify-center overflow-hidden py-2 md:h-[65rem] md:py-10",
        className
      )}
      initial={false}
      animate={
        showTablet
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 48, scale: 0.94 }
      }
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: showTablet ? "auto" : "none" }}
    >
      <div className="relative w-full py-2 md:py-10" style={{ perspective: "1200px" }}>
        <ScrollCard rotate={rotate} scale={scale} translate={translate}>
          {children}
        </ScrollCard>
      </div>
    </motion.div>
  );
}

export function ContainerScroll(props: ContainerScrollProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile || props.compact) {
    return <StaticContainerScroll {...props} isMobile={isMobile} />;
  }

  return <AnimatedContainerScroll {...props} />;
}

function ScrollCard({
  rotate,
  scale,
  translate,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        y: translate,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026",
      }}
      className="mx-auto w-full max-w-xl rounded-[28px] border-[3px] border-[#3d4450] bg-[#1a1f2e] p-2 shadow-2xl sm:max-w-2xl sm:rounded-[32px] sm:p-3 lg:max-w-none"
    >
      <div className="overflow-hidden rounded-[22px] bg-[#0d1117] sm:rounded-[26px]">
        <div className="relative aspect-[4/3] w-full overflow-hidden sm:aspect-[16/11] lg:aspect-[16/10]">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
