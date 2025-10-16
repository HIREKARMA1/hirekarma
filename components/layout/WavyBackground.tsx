"use client";

import React, { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

interface WavyBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  intensity?: 'light' | 'medium' | 'strong';
  className?: string;
}

const WavyBackground: React.FC<WavyBackgroundProps> = ({ 
  variant = 'primary', 
  intensity = 'medium',
  className = '' 
}) => {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

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
  
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Enhanced Wavy Background with Multiple Layers */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 1600"
        preserveAspectRatio="none"
      >
        {/* Layer 1: 50 Horizontal Wavy Lines with Enhanced Visibility */}
        {Array.from({ length: 50 }, (_, i) => {
          const y = 30 + (i * 30); // Closer spacing for more density
          const colorIndex = i % currentColors.length;
          const animationClass = i % 4 === 0 ? 'animate-wave-flow' : 
                                i % 4 === 1 ? 'animate-wave-flow-delayed' : 
                                i % 4 === 2 ? 'animate-wave-flow-reverse' : 'animate-wave-flow-slow';
          const opacity = intensityMultiplier * (0.8 - (i * 0.01)); // Better opacity distribution
          const amplitude = 15 + (i % 3) * 5; // Varying wave amplitudes
          
          return (
            <path
              key={`layer1-${i}`}
              stroke={currentColors[colorIndex]}
              strokeWidth={1.5}
              fill="none"
              strokeOpacity={Math.max(opacity, 0.15)}
              d={`M0,${y} Q360,${y-amplitude} 720,${y} Q1080,${y+amplitude} 1440,${y}`}
              className={animationClass}
            />
          );
        })}

        {/* Layer 2: Diagonal Flowing Lines */}
        {Array.from({ length: 25 }, (_, i) => {
          const startX = -100 + (i * 60);
          const startY = 100 + (i * 50);
          const colorIndex = (i + 10) % currentColors.length;
          const animationClass = i % 3 === 0 ? 'animate-wave-flow' : 
                                i % 3 === 1 ? 'animate-wave-flow-delayed' : 'animate-wave-flow-reverse';
          const opacity = intensityMultiplier * (0.4 - (i * 0.008));
          
          return (
            <path
              key={`layer2-${i}`}
              stroke={currentColors[colorIndex]}
              strokeWidth={1}
              fill="none"
              strokeOpacity={Math.max(opacity, 0.1)}
              d={`M${startX},${startY} Q${startX + 200},${startY - 30} ${startX + 400},${startY + 20} Q${startX + 600},${startY - 10} ${startX + 800},${startY + 30} Q${startX + 1000},${startY + 10} ${startX + 1200},${startY - 20} Q${startX + 1400},${startY + 15} ${startX + 1600},${startY}`}
              className={animationClass}
            />
          );
        })}

        {/* Layer 3: Vertical Accent Lines */}
        {Array.from({ length: 15 }, (_, i) => {
          const x = 100 + (i * 80);
          const colorIndex = (i + 20) % currentColors.length;
          const animationClass = i % 2 === 0 ? 'animate-wave-flow-delayed' : 'animate-wave-flow-slow';
          const opacity = intensityMultiplier * (0.3 - (i * 0.01));
          const height = 200 + (i % 4) * 100;
          
          return (
            <path
              key={`layer3-${i}`}
              stroke={currentColors[colorIndex]}
              strokeWidth={0.8}
              fill="none"
              strokeOpacity={Math.max(opacity, 0.08)}
              d={`M${x},0 Q${x + 20},${height/3} ${x},${height/2} Q${x - 20},${height*2/3} ${x},${height}`}
              className={animationClass}
            />
          );
        })}

        {/* Layer 4: Curved Accent Patterns */}
        {Array.from({ length: 20 }, (_, i) => {
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
              strokeOpacity={Math.max(opacity, 0.06)}
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

