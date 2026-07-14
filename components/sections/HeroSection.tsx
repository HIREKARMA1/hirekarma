"use client";

import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import { HomeLocaleProvider } from "@/contexts/HomeLocaleContext";
import HeroBanner from "../home/HeroBanner";

const ImpactSection = dynamic(() => import("../home/ImpactSection"), {
  loading: () => <div className="min-h-[120px]" />,
  ssr: true,
});

const DivisionsSection = dynamic(() => import("../home/DivisionsSection"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: true,
});

const JourneySection = dynamic(() => import("../home/JourneySection"), {
  loading: () => <div className="min-h-[100px]" />,
  ssr: true,
});

const Testimonials = dynamic(() => import("../home/Testimonials"), {
  loading: () => <div className="min-h-[300px]" />,
  ssr: true,
});

const HiringCtaSection = dynamic(() => import("../home/HiringCtaSection"), {
  loading: () => <div className="min-h-[160px]" />,
  ssr: true,
});

const Partners = dynamic(() => import("../home/Partners"), {
  loading: () => <div className="min-h-[320px]" />,
  ssr: true,
});

const CertificationsSection = dynamic(
  () => import("../home/CertificationsSection"),
  {
    loading: () => <div className="min-h-[280px]" />,
    ssr: true,
  }
);

export default function HeroSection() {
  return (
    <HomeLocaleProvider>
      <div className="relative min-h-screen">
        <HeroBanner />

        <Suspense fallback={<div className="min-h-[120px]" />}>
          <ImpactSection />
        </Suspense>

        <Suspense fallback={<div className="min-h-[400px]" />}>
          <DivisionsSection />
        </Suspense>

        <Suspense fallback={<div className="min-h-[100px]" />}>
          <JourneySection />
        </Suspense>

        <Suspense fallback={<div className="min-h-[300px]" />}>
          <Testimonials />
        </Suspense>

        <Suspense fallback={<div className="min-h-[160px]" />}>
          <HiringCtaSection />
        </Suspense>

        <Suspense fallback={<div className="min-h-[320px]" />}>
          <Partners />
        </Suspense>

        <Suspense fallback={<div className="min-h-[280px]" />}>
          <CertificationsSection />
        </Suspense>
      </div>
    </HomeLocaleProvider>
  );
}
