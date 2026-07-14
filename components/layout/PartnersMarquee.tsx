"use client";

import React, { useState } from "react";

import footerPartners from "@/data/footer-partners.json";
import { theme } from "@/config/theme";

export type FooterPartner = {
  id: string;
  name: string;
  logo: string;
};

type PartnersMarqueeProps = {
  partners?: FooterPartner[];
  edgeColor?: string;
  /** Seconds for one full loop; scales up automatically with more logos. */
  baseSpeedSeconds?: number;
  /** Fixed loop duration (overrides baseSpeedSeconds scaling). */
  durationSeconds?: number;
  /** Match homepage partners: compact white logo chips. */
  uniformChips?: boolean;
};

function PartnerLogo({
  name,
  logo,
  uniformChips,
}: {
  name: string;
  logo: string;
  uniformChips?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const invert = logo.toLowerCase().endsWith(".svg");

  if (failed) return null;

  if (uniformChips) {
    return (
      <div
        className="flex h-[64px] w-[132px] shrink-0 items-center justify-center rounded-lg border border-[#0f1622]/10 bg-white p-1.5 shadow-[0_1px_2px_rgba(15,22,34,0.06)] transition hover:-translate-y-0.5 hover:border-[#00a2e5]/40 hover:shadow-[0_6px_16px_rgba(15,22,34,0.1)] sm:h-[68px] sm:w-[140px]"
        title={name}
      >
        <div className="flex h-[44px] w-[112px] items-center justify-center sm:h-[48px] sm:w-[120px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logo}
            alt={name}
            loading="lazy"
            draggable={false}
            onError={() => setFailed(true)}
            className={`max-h-full max-w-full object-contain object-center ${
              invert ? "invert" : ""
            }`}
          />
        </div>
      </div>
    );
  }

  return (
    <div
      className="flex h-14 w-[9.5rem] shrink-0 items-center justify-center rounded-xl bg-white px-4 shadow-sm sm:h-16 sm:w-[11rem]"
      title={name}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        loading="lazy"
        draggable={false}
        onError={() => setFailed(true)}
        className={`max-h-10 w-auto max-w-full object-contain sm:max-h-11 ${
          invert ? "invert" : ""
        }`}
      />
    </div>
  );
}

/**
 * Horizontal partners marquee — logo only.
 * Add companies in `data/footer-partners.json` (+ logo file under /public/partners).
 */
export default function PartnersMarquee({
  partners = footerPartners as FooterPartner[],
  edgeColor = theme.colors.ink,
  baseSpeedSeconds = 8,
  durationSeconds,
  uniformChips = false,
}: PartnersMarqueeProps) {
  const [paused, setPaused] = useState(false);

  if (!partners.length) return null;

  const speedSeconds =
    durationSeconds ?? Math.max(24, partners.length * baseSpeedSeconds);

  return (
    <div
      className="relative min-w-0 flex-1 overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, #000 8%, #000 92%, transparent)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {!uniformChips ? (
        <>
          <div
            className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 sm:w-14"
            style={{
              background: `linear-gradient(to right, ${edgeColor}, transparent)`,
            }}
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 sm:w-14"
            style={{
              background: `linear-gradient(to left, ${edgeColor}, transparent)`,
            }}
            aria-hidden
          />
        </>
      ) : null}

      <div
        className="flex w-max animate-partners-scroll-left items-center gap-2 sm:gap-2.5"
        style={{
          animationDuration: `${speedSeconds}s`,
          animationPlayState: paused ? "paused" : "running",
          transform: "translateZ(0)",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-2 sm:gap-2.5"
            aria-hidden={copy === 1}
          >
            {partners.map((partner) => (
              <PartnerLogo
                key={`${copy}-${partner.id}`}
                name={partner.name}
                logo={partner.logo}
                uniformChips={uniformChips}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
