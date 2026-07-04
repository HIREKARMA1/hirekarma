"use client";

interface TrustLogoChipProps {
  name: string;
  logo: string;
  variant?: "mono" | "chip";
}

export function TrustLogoChip({ name, logo, variant = "mono" }: TrustLogoChipProps) {
  if (variant === "chip") {
    return (
      <div className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/95 px-4 shadow-sm sm:w-36">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="max-h-8 w-auto max-w-full object-contain sm:max-h-9"
        />
      </div>
    );
  }

  return (
    <div className="flex h-11 w-24 shrink-0 items-center justify-center sm:h-14 sm:w-32 md:h-16 md:w-44">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logo}
        alt={name}
        loading="lazy"
        className="max-h-8 w-auto max-w-full object-contain sm:max-h-11 md:max-h-14"
      />
    </div>
  );
}
