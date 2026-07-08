"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { createNoise3D } from "simplex-noise";

import { cn } from "@/lib/utils/cn";

interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
  backgroundColor?: string;
  /** When true, canvas is transparent - particles overlay an existing background. */
  transparentBackground?: boolean;
}

export const Vortex = (props: VortexProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameId = useRef<number | undefined>(undefined);

  const particleCount = props.particleCount || 700;
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const rangeY = props.rangeY || 100;
  const baseTTL = 50;
  const rangeTTL = 150;
  const baseSpeed = props.baseSpeed || 0.0;
  const rangeSpeed = props.rangeSpeed || 1.5;
  const baseRadius = props.baseRadius || 1;
  const rangeRadius = props.rangeRadius || 2;
  const baseHue = props.baseHue || 220;
  const rangeHue = 100;
  const noiseSteps = 3;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  const backgroundColor = props.backgroundColor || "#000000";
  const transparentBackground = props.transparentBackground ?? false;

  const tick = useRef(0);
  const noise3D = useRef(createNoise3D());
  const particleProps = useRef(new Float32Array(particlePropsLength));
  const center = useRef<[number, number]>([0, 0]);

  const TAU = 2 * Math.PI;
  const rand = (n: number): number => n * Math.random();
  const randRange = (n: number): number => n - rand(2 * n);
  const fadeInOut = (t: number, m: number): number => {
    const hm = 0.5 * m;
    return Math.abs(((t + hm) % m) - hm) / hm;
  };
  const lerp = (n1: number, n2: number, speed: number): number =>
    (1 - speed) * n1 + speed * n2;

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const container = containerRef.current;
      const width = container?.clientWidth ?? window.innerWidth;
      const height = container?.clientHeight ?? window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      center.current[0] = 0.5 * canvas.width;
      center.current[1] = 0.5 * canvas.height;
    };

    const initParticle = (i: number) => {
      const x = rand(canvas.width);
      const y = center.current[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);
      particleProps.current.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const initParticles = () => {
      tick.current = 0;
      particleProps.current = new Float32Array(particlePropsLength);
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    const checkBounds = (x: number, y: number) =>
      x > canvas.width || x < 0 || y > canvas.height || y < 0;

    const drawParticle = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number
    ) => {
      ctx.save();
      ctx.lineCap = "round";
      ctx.lineWidth = radius;
      ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.closePath();
      ctx.restore();
    };

    const updateParticle = (i: number) => {
      const props9 = particleProps.current;
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const x = props9[i];
      const y = props9[i2];
      const n = noise3D.current(x * xOff, y * yOff, tick.current * zOff) * noiseSteps * TAU;
      const vx = lerp(props9[i3], Math.cos(n), 0.5);
      const vy = lerp(props9[i4], Math.sin(n), 0.5);
      let life = props9[i5];
      const ttl = props9[i6];
      const speed = props9[i7];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = props9[i8];
      const hue = props9[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      life++;

      props9[i] = x2;
      props9[i2] = y2;
      props9[i3] = vx;
      props9[i4] = vy;
      props9[i5] = life;

      if (checkBounds(x, y) || life > ttl) initParticle(i);
    };

    const renderGlow = () => {
      ctx.save();
      ctx.filter = "blur(8px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();

      ctx.save();
      ctx.filter = "blur(4px) brightness(200%)";
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    };

    const renderToScreen = () => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(canvas, 0, 0);
      ctx.restore();
    };

    const draw = () => {
      tick.current++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (!transparentBackground) {
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
      renderGlow();
      renderToScreen();

      animationFrameId.current = window.requestAnimationFrame(draw);
    };

    resize();
    initParticles();
    draw();

    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (animationFrameId.current) cancelAnimationFrame(animationFrameId.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={cn("relative h-full w-full", props.containerClassName)}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        ref={containerRef}
        className="absolute inset-0 z-0 flex h-full w-full items-center justify-center bg-transparent"
      >
        <canvas ref={canvasRef} className="h-full w-full" />
      </motion.div>

      {props.children ? (
        <div className={cn("relative z-10", props.className)}>{props.children}</div>
      ) : null}
    </div>
  );
};
