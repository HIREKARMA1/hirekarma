"use client";

import React, { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';

interface WavyBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  intensity?: 'light' | 'medium' | 'strong';
  density?: 'sparse' | 'normal' | 'dense';
  className?: string;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ 
  variant = 'primary', 
  intensity = 'medium',
  density = 'normal',
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false);
  const [svgHeight, setSvgHeight] = useState<number>(1600);
  const [svgWidth, setSvgWidth] = useState<number>(1440);
  const lastHeightRef = useRef<number>(1600);
  const lastWidthRef = useRef<number>(1440);
  const rafIdRef = useRef<number | null>(null);
  const pathname = usePathname();
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const scheduleUpdate = () => {
      if (rafIdRef.current !== null) return; // throttle to one RAF
      rafIdRef.current = window.requestAnimationFrame(() => {
        rafIdRef.current = null;
        const docHeight = Math.max(
          document.documentElement.scrollHeight,
          document.documentElement.offsetHeight,
          document.documentElement.clientHeight,
          window.innerHeight
        );
        const docWidth = Math.max(
          document.documentElement.clientWidth,
          window.innerWidth
        );
        const nextHeight = Math.max(docHeight, window.innerHeight) + 800; // generous buffer
        const nextWidth = docWidth; // avoid feedback loop from extra width
        const heightChanged = Math.abs(nextHeight - lastHeightRef.current) > 64; // ignore small changes
        const widthChanged = Math.abs(nextWidth - lastWidthRef.current) > 32;
        if (heightChanged) {
          lastHeightRef.current = nextHeight;
          setSvgHeight(nextHeight);
        }
        if (widthChanged) {
          lastWidthRef.current = nextWidth;
          setSvgWidth(nextWidth);
        }
      });
    };
    // initial
    scheduleUpdate();
    // listeners
    window.addEventListener('resize', scheduleUpdate, { passive: true });
    window.addEventListener('load', scheduleUpdate);
    return () => {
      window.removeEventListener('resize', scheduleUpdate as EventListener);
      window.removeEventListener('load', scheduleUpdate as EventListener);
      if (rafIdRef.current !== null) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  // Recalculate on route change as well
  useEffect(() => {
    if (!mounted) return;
    const id = window.requestAnimationFrame(() => {
      const docHeight = Math.max(
        document.documentElement.scrollHeight,
        document.documentElement.offsetHeight,
        document.documentElement.clientHeight,
        window.innerHeight
      );
      const docWidth = Math.max(
        document.documentElement.clientWidth,
        window.innerWidth
      );
      const nextHeight = Math.max(docHeight, window.innerHeight) + 800;
      const nextWidth = docWidth;
      if (Math.abs(nextHeight - lastHeightRef.current) > 64) {
        lastHeightRef.current = nextHeight;
        setSvgHeight(nextHeight);
      }
      if (Math.abs(nextWidth - lastWidthRef.current) > 32) {
        lastWidthRef.current = nextWidth;
        setSvgWidth(nextWidth);
      }
    });
    return () => window.cancelAnimationFrame(id);
  }, [pathname, mounted]);

  const isDark = mounted && resolvedTheme === 'dark';

  // Enhanced colors for better visibility and engagement
  const waveColors = {
    primary: {
      light: [
        'rgba(59, 130, 246, 0.12)', 'rgba(14, 165, 233, 0.10)', 'rgba(6, 182, 212, 0.08)', 
        'rgba(8, 145, 178, 0.10)', 'rgba(37, 99, 235, 0.06)', 'rgba(29, 78, 216, 0.08)',
        'rgba(30, 64, 175, 0.10)', 'rgba(30, 58, 138, 0.06)', 'rgba(30, 58, 138, 0.08)',
        'rgba(30, 41, 59, 0.05)', 'rgba(51, 65, 85, 0.06)', 'rgba(71, 85, 105, 0.05)'
      ],
      dark: [
        'rgba(59, 130, 246, 0.18)', 'rgba(14, 165, 233, 0.15)', 'rgba(6, 182, 212, 0.12)', 
        'rgba(8, 145, 178, 0.15)', 'rgba(37, 99, 235, 0.10)', 'rgba(29, 78, 216, 0.12)',
        'rgba(30, 64, 175, 0.15)', 'rgba(30, 58, 138, 0.10)', 'rgba(30, 58, 138, 0.12)',
        'rgba(30, 41, 59, 0.08)', 'rgba(51, 65, 85, 0.10)', 'rgba(71, 85, 105, 0.08)'
      ],
    },
    secondary: {
      light: [
        'rgba(168, 85, 247, 0.25)', 'rgba(236, 72, 153, 0.22)', 'rgba(139, 92, 246, 0.20)', 
        'rgba(147, 51, 234, 0.22)', 'rgba(124, 58, 237, 0.18)', 'rgba(109, 40, 217, 0.20)',
        'rgba(91, 33, 182, 0.22)', 'rgba(76, 29, 149, 0.18)', 'rgba(76, 29, 149, 0.20)',
        'rgba(59, 7, 100, 0.15)', 'rgba(88, 28, 135, 0.18)', 'rgba(107, 33, 168, 0.16)'
      ],
      dark: [
        'rgba(168, 85, 247, 0.35)', 'rgba(236, 72, 153, 0.32)', 'rgba(139, 92, 246, 0.30)', 
        'rgba(147, 51, 234, 0.32)', 'rgba(124, 58, 237, 0.28)', 'rgba(109, 40, 217, 0.30)',
        'rgba(91, 33, 182, 0.32)', 'rgba(76, 29, 149, 0.28)', 'rgba(76, 29, 149, 0.30)',
        'rgba(59, 7, 100, 0.25)', 'rgba(88, 28, 135, 0.28)', 'rgba(107, 33, 168, 0.26)'
      ],
    },
    accent: {
      light: [
        'rgba(16, 185, 129, 0.25)', 'rgba(20, 184, 166, 0.22)', 'rgba(34, 197, 94, 0.20)', 
        'rgba(5, 150, 105, 0.22)', 'rgba(21, 128, 61, 0.18)', 'rgba(22, 101, 52, 0.20)',
        'rgba(20, 83, 45, 0.22)', 'rgba(21, 94, 117, 0.18)', 'rgba(21, 94, 117, 0.20)',
        'rgba(15, 118, 110, 0.15)', 'rgba(17, 94, 89, 0.18)', 'rgba(19, 78, 74, 0.16)'
      ],
      dark: [
        'rgba(16, 185, 129, 0.35)', 'rgba(20, 184, 166, 0.32)', 'rgba(34, 197, 94, 0.30)', 
        'rgba(5, 150, 105, 0.32)', 'rgba(21, 128, 61, 0.28)', 'rgba(22, 101, 52, 0.30)',
        'rgba(20, 83, 45, 0.32)', 'rgba(21, 94, 117, 0.28)', 'rgba(21, 94, 117, 0.30)',
        'rgba(15, 118, 110, 0.25)', 'rgba(17, 94, 89, 0.28)', 'rgba(19, 78, 74, 0.26)'
      ],
    },
    neutral: {
      light: [
        'rgba(148, 163, 184, 0.18)', 'rgba(156, 163, 175, 0.16)', 'rgba(107, 114, 128, 0.18)', 
        'rgba(75, 85, 99, 0.16)', 'rgba(55, 65, 81, 0.14)', 'rgba(31, 41, 55, 0.16)',
        'rgba(17, 24, 39, 0.18)', 'rgba(15, 23, 42, 0.14)', 'rgba(15, 23, 42, 0.16)',
        'rgba(2, 6, 23, 0.12)', 'rgba(30, 41, 59, 0.14)', 'rgba(51, 65, 85, 0.12)'
      ],
      dark: [
        'rgba(148, 163, 184, 0.25)', 'rgba(156, 163, 175, 0.22)', 'rgba(107, 114, 128, 0.25)', 
        'rgba(75, 85, 99, 0.22)', 'rgba(55, 65, 81, 0.20)', 'rgba(31, 41, 55, 0.22)',
        'rgba(17, 24, 39, 0.25)', 'rgba(15, 23, 42, 0.20)', 'rgba(15, 23, 42, 0.22)',
        'rgba(2, 6, 23, 0.18)', 'rgba(30, 41, 59, 0.20)', 'rgba(51, 65, 85, 0.18)'
      ],
    }
  };

  const currentColors = isDark ? waveColors[variant].dark : waveColors[variant].light;

  // Adjust intensity
  const intensityMultiplier = intensity === 'light' ? 0.5 : intensity === 'strong' ? 2 : 1;
  // Slight boost to ensure visibility across themes and long scrolls
  const visibilityBoost = isDark ? 1.25 : 1.15;
  const isSparse = density === 'sparse';
  const isDense = density === 'dense';
  const baseLayer1Count = isSparse ? 12 : isDense ? 70 : 50;
  const layer1Spacing = isSparse ? 80 : isDense ? 22 : 30;
  const layer1Stroke = isSparse ? 3 : isDense ? 1.8 : 1.5;
  const layer1MinOpacity = isSparse ? 0.35 : 0.15;
  const layer1Count = Math.max(baseLayer1Count, Math.ceil(svgHeight / layer1Spacing) + 5);
  const layer2Count = isSparse ? 0 : (isDense ? 30 : 25);
  const layer3Count = isSparse ? 6 : (isDense ? 20 : 15);
  const layer4Count = isSparse ? 0 : (isDense ? 26 : 20);
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Enhanced Wavy Background with Multiple Layers */}
      <svg
        className="absolute inset-0 w-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        preserveAspectRatio="none"
        style={{ '--scroll-distance': `${svgWidth}px`, '--scroll-duration': (density === 'sparse' ? '80s' : density === 'dense' ? '40s' : '60s') } as React.CSSProperties}
      >
        {/* Layer 1: Horizontal Wavy Lines */}
        {Array.from({ length: layer1Count }, (_, i) => {
          const y = 30 + (i * layer1Spacing);
          const colorIndex = i % currentColors.length;
          const animationClass = i % 4 === 0 ? 'animate-wave-flow' : 
                                i % 4 === 1 ? 'animate-wave-flow-delayed' : 
                                i % 4 === 2 ? 'animate-wave-flow-reverse' : 'animate-wave-flow-slow';
          const opacity = intensityMultiplier * (isSparse ? 0.45 : (0.8 - (i * 0.01)));
          const amplitude = isSparse ? 8 + (i % 2) * 3 : 15 + (i % 3) * 5;
          
          return (
            <g key={`layer1-${i}`} className={`animate-wave-scroll-left`}>
              <path
                stroke={currentColors[colorIndex]}
                strokeWidth={layer1Stroke}
                fill="none"
                strokeOpacity={Math.min(1, Math.max(opacity * visibilityBoost, layer1MinOpacity))}
                d={`M0,${y} Q${svgWidth/4},${y-amplitude} ${svgWidth/2},${y} Q${(3*svgWidth)/4},${y+amplitude} ${svgWidth},${y}`}
              />
              <path
                stroke={currentColors[colorIndex]}
                strokeWidth={layer1Stroke}
                fill="none"
                strokeOpacity={Math.min(1, Math.max(opacity * visibilityBoost, layer1MinOpacity))}
                d={`M${svgWidth},${y} Q${(5*svgWidth)/4},${y-amplitude} ${svgWidth + svgWidth/2},${y} Q${(7*svgWidth)/4},${y+amplitude} ${2*svgWidth},${y}`}
              />
            </g>
          );
        })}

        {/* Layer 2: Diagonal Flowing Lines */}
        {Array.from({ length: layer2Count }, (_, i) => {
          const startX = -100 + (i * 60);
          const startY = 100 + (i * 50);
          const colorIndex = (i + 10) % currentColors.length;
          const animationClass = i % 3 === 0 ? 'animate-wave-flow' : 
                                i % 3 === 1 ? 'animate-wave-flow-delayed' : 'animate-wave-flow-reverse';
          const opacity = intensityMultiplier * (isSparse ? 0.22 : (0.4 - (i * 0.008)));
          
          return (
            <path
              key={`layer2-${i}`}
              stroke={currentColors[colorIndex]}
              strokeWidth={1}
              fill="none"
              strokeOpacity={Math.min(1, Math.max(opacity * visibilityBoost, 0.12))}
              d={`M${startX},${startY} Q${startX + 200},${startY - 30} ${startX + 400},${startY + 20} Q${startX + 600},${startY - 10} ${startX + 800},${startY + 30} Q${startX + 1000},${startY + 10} ${startX + 1200},${startY - 20} Q${startX + 1400},${startY + 15} ${svgWidth + 160},${startY}`}
              className={animationClass}
            />
          );
        })}

        {/* Layer 3: Vertical Accent Lines (full height) */}
        {Array.from({ length: layer3Count }, (_, i) => {
          const x = 100 + (i * 80);
          const colorIndex = (i + 20) % currentColors.length;
          const animationClass = i % 2 === 0 ? 'animate-wave-flow-delayed' : 'animate-wave-flow-slow';
          const opacity = intensityMultiplier * (isSparse ? 0.28 : (0.4 - (i * 0.012)));
          
          return (
            <path
              key={`layer3-${i}`}
              stroke={currentColors[colorIndex]}
              strokeWidth={isSparse ? 2 : 1}
              fill="none"
              strokeOpacity={Math.min(1, Math.max(opacity * visibilityBoost, isSparse ? 0.25 : 0.12))}
              d={`M${x},0 L${x},${svgHeight}`}
              className={animationClass}
            />
          );
        })}

        {/* Layer 4: Curved Accent Patterns */}
        {Array.from({ length: layer4Count }, (_, i) => {
          const centerX = 200 + (i * 60);
          const centerY = 300 + (i * 70);
          const radius = 80 + (i % 3) * 20;
          const colorIndex = (i + 30) % currentColors.length;
          const animationClass = i % 4 === 0 ? 'animate-wave-flow' : 
                                i % 4 === 1 ? 'animate-wave-flow-delayed' : 
                                i % 4 === 2 ? 'animate-wave-flow-reverse' : 'animate-wave-flow-slow';
          const opacity = intensityMultiplier * (0.25 - (i * 0.005));
          
          return (
            <path
              key={`layer4-${i}`}
              stroke={currentColors[colorIndex]}
              strokeWidth={0.6}
              fill="none"
              strokeOpacity={Math.min(1, Math.max(opacity * visibilityBoost, 0.08))}
              d={`M${centerX},${centerY} A${radius},${radius} 0 0,1 ${centerX + radius},${centerY + radius/2} A${radius*0.7},${radius*0.7} 0 0,0 ${centerX},${centerY + radius} A${radius*0.5},${radius*0.5} 0 0,1 ${centerX - radius/2},${centerY}`}
              className={animationClass}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default WavyBackground;

