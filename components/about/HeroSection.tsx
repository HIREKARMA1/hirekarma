"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";

const HeroSection: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { content } = useAboutLocale();
  const hero = content.story.hero;

  return (
    <section className="relative w-full overflow-hidden bg-[#0f1622]">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute top-1/4 left-0 h-[420px] w-[420px] rounded-full bg-[#1b52a4]/20 blur-[120px]" />
        <div className="absolute right-0 top-1/3 h-[360px] w-[360px] rounded-full bg-[#00a2e5]/15 blur-[100px]" />
        <div className="absolute bottom-0 left-1/3 h-[280px] w-[280px] rounded-full bg-[#00a2e5]/15 blur-[90px]" />
      </div>

      <div className="relative content-container pb-10 pt-8 sm:pt-10 lg:pb-14 lg:pt-12">
        <div className="grid min-h-[calc(75vh-7rem)] grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <div className="order-1 space-y-6 text-center lg:order-1 lg:text-left xl:space-y-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#00a2e5] sm:text-sm">
              {hero.label}
            </p>

            <h1 className="text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-5xl xl:text-[3.25rem]">
              {hero.heading}
            </h1>

            <p className="mx-auto max-w-xl text-base leading-relaxed text-white/90 sm:text-lg lg:mx-0">
              {hero.description}
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-2 sm:flex-row sm:justify-center lg:justify-start">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#1b52a4] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#5B46F5] hover:shadow-[0_8px_30px_rgba(77,56,240,0.35)] sm:w-auto"
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/35 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/5 sm:w-auto"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl lg:max-w-none lg:aspect-auto lg:h-[420px] xl:h-[480px]">
              <Image
                src="/about-us/hero-tablet.png"
                alt={hero.heroImageAlt}
                fill
                priority
                quality={90}
                sizes="(max-width: 1024px) 90vw, 50vw"
                className={`object-contain object-center transition-opacity duration-500 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => setImageLoaded(true)}
              />
              {!imageLoaded && (
                <div className="absolute inset-0 animate-pulse rounded-2xl bg-white/5" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-8 lg:mt-14">
          <p className="mb-5 text-center text-sm text-white/85 lg:text-left">
            {hero.partnersNote}
          </p>

          <div className="relative overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#0B0028] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 flex w-12 items-center justify-end bg-gradient-to-l from-[#0B0028] to-transparent">
              <ChevronRight className="h-5 w-5 text-white/85" aria-hidden />
            </div>

            <div className="flex w-max animate-partners-scroll-left items-center gap-16 opacity-90">
              {[0, 1].map((copy) => (
                <Image
                  key={copy}
                  src="/about-us/partner-logos.png"
                  alt={hero.partnersImageAlt}
                  width={1024}
                  height={67}
                  className="h-10 w-auto shrink-0 object-contain sm:h-12 md:h-14"
                  draggable={false}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
