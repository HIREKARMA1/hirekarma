"use client";

interface TrustLogoChipProps {
  name: string;
  logo: string;
  variant?: "mono" | "chip";
  colorIndex?: number;
}

const monoLogoGlows = [
  "rgba(27, 82, 164, 0.28)",
  "rgba(0, 162, 229, 0.26)",
  "rgba(254, 196, 13, 0.22)",
  "rgba(9, 136, 85, 0.24)",
  "rgba(245, 128, 32, 0.24)",
] as const;

export function TrustLogoChip({
  name,
  logo,
  variant = "mono",
  colorIndex = 0,
}: TrustLogoChipProps) {
  const glowColor = monoLogoGlows[colorIndex % monoLogoGlows.length];
  const sharedGlow = (
    <div
      className="absolute left-1/2 top-1/2 h-10 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl sm:h-12 sm:w-28 md:h-14 md:w-36"
      aria-hidden
      style={{ backgroundColor: glowColor }}
    />
  );

  if (variant === "chip") {
    return (
      <div className="relative flex h-18 w-40 shrink-0 items-center justify-center px-4 sm:h-24 sm:w-48">
        {sharedGlow}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="relative z-10 max-h-12 w-auto max-w-full object-contain sm:max-h-14"
        />
      </div>
    );
  }

  return (
    <div className="relative flex h-18 w-40 shrink-0 items-center justify-center px-4 sm:h-24 sm:w-48 md:h-28 md:w-64">
      {sharedGlow}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="relative z-10 max-h-12 w-auto max-w-full object-contain sm:max-h-14 md:max-h-16"
      />
    </div>
  );
}
