"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, Users } from "lucide-react";

import { useAboutLocale } from "@/contexts/AboutLocaleContext";
import { theme } from "@/config/theme";

/** Pin + callout positions tuned to the neon Odisha map */
const PIN_LAYOUT: Record<
  string,
  {
    left: string;
    top: string;
    label: { left?: string; right?: string; top?: string; bottom?: string };
    line: { width: number; from: "left" | "right" };
  }
> = {
  barbil: {
    left: "40%",
    top: "20%",
    label: { left: "54%", top: "8%" },
    line: { width: 48, from: "left" },
  },
  cuttack: {
    left: "70%",
    top: "44%",
    label: { left: "78%", top: "36%" },
    line: { width: 36, from: "left" },
  },
  bhubaneswar: {
    left: "58%",
    top: "60%",
    label: { right: "48%", top: "68%" },
    line: { width: 44, from: "right" },
  },
};

function LocationPinMarker({
  accent,
  delay,
}: {
  accent: string;
  delay: number;
}) {
  return (
    <div className="relative flex h-10 w-10 items-center justify-center">
      <span
        className="hk-loc-pulse absolute h-9 w-9 rounded-full"
        style={{
          backgroundColor: accent,
          animationDelay: `${delay}s`,
        }}
        aria-hidden
      />
      <span
        className="relative z-10 flex h-8 w-8 items-center justify-center drop-shadow-[0_0_12px_rgba(0,162,229,0.85)]"
        style={{ color: accent }}
      >
        <MapPin className="h-8 w-8 fill-current" strokeWidth={1.5} />
        <span className="absolute top-[7px] h-2 w-2 rounded-full bg-white" />
      </span>
    </div>
  );
}

function OdishaMapVisual() {
  const { content } = useAboutLocale();
  const { map } = content.locations;
  const accent = theme.colors.secondary;

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[380px] xl:max-w-[400px]"
      role="img"
      aria-label={map.ariaLabel}
    >
      <style>{`
        @keyframes hk-loc-pulse {
          0%, 100% { transform: scale(1); opacity: 0.45; }
          50% { transform: scale(1.85); opacity: 0; }
        }
        @keyframes hk-loc-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.95; }
        }
        .hk-loc-pulse { animation: hk-loc-pulse 2.8s ease-out infinite; }
        .hk-loc-glow { animation: hk-loc-glow 3.4s ease-in-out infinite; }
      `}</style>

      {/* Soft grid well */}
      <div
        className="absolute inset-0 rounded-[1.75rem]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 55% 45%, rgba(0,162,229,0.14), transparent 58%), linear-gradient(rgba(0,162,229,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,229,0.06) 1px, transparent 1px)",
          backgroundSize: "auto, 28px 28px, 28px 28px",
        }}
        aria-hidden
      />

      <div
        className="hk-loc-glow pointer-events-none absolute inset-[10%] rounded-full blur-3xl"
        style={{ backgroundColor: "rgba(0,162,229,0.2)" }}
        aria-hidden
      />

      <Image
        src="/about/locations/odisha-map-neon.png"
        alt=""
        fill
        sizes="(max-width: 768px) 90vw, 500px"
        className="object-contain p-2 drop-shadow-[0_0_36px_rgba(0,162,229,0.4)]"
        priority
      />

      <p
        className="pointer-events-none absolute left-1/2 top-[46%] z-10 -translate-x-1/2 text-[11px] font-semibold uppercase tracking-[0.55em] text-white/70 sm:text-xs"
        aria-hidden
      >
        Odisha
      </p>

      {map.pins.map((pin, index) => {
        const layout = PIN_LAYOUT[pin.id];
        if (!layout) return null;

        const isHead = pin.id === "bhubaneswar";

        return (
          <div key={pin.id} className="absolute inset-0 z-20">
            {/* Pin */}
            <div
              className="absolute -translate-x-1/2 -translate-y-full"
              style={{ left: layout.left, top: layout.top }}
            >
              <LocationPinMarker accent={accent} delay={index * 0.4} />
            </div>

            {/* Leader line */}
            <div
              className="pointer-events-none absolute h-px"
              style={{
                left: layout.left,
                top: layout.top,
                width: layout.line.width,
                background: `linear-gradient(${
                  layout.line.from === "left" ? "to right" : "to left"
                }, ${accent}, rgba(255,255,255,0.15))`,
                transform:
                  layout.line.from === "left"
                    ? "translateY(-1px)"
                    : `translate(-100%, -1px)`,
                opacity: 0.75,
              }}
              aria-hidden
            />

            {/* Callout */}
            <div
              className={`absolute z-30 min-w-[118px] rounded-xl border border-white/15 bg-[#0a101c]/90 px-3 py-2 shadow-[0_14px_40px_rgba(0,0,0,0.5)] backdrop-blur-md ${
                isHead ? "min-w-[132px] px-3.5 py-2.5" : ""
              }`}
              style={layout.label}
            >
              <p
                className={`font-bold leading-none text-white ${
                  isHead ? "text-[13px]" : "text-[12px]"
                }`}
              >
                {pin.city}
              </p>
              <p className="mt-1 text-[10px] font-medium text-white/50">
                {pin.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function LocationsHeroSection() {
  const { content } = useAboutLocale();
  const { hero } = content.locations;
  const ink = theme.colors.ink;
  const accent = theme.colors.secondary;

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: ink }}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,162,229,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,162,229,0.05) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div
          className="absolute -left-24 top-0 h-[28rem] w-[28rem] rounded-full blur-[120px]"
          style={{ backgroundColor: "rgba(27,82,164,0.35)" }}
        />
        <div
          className="absolute -right-16 top-1/4 h-[26rem] w-[26rem] rounded-full blur-[110px]"
          style={{ backgroundColor: "rgba(0,162,229,0.2)" }}
        />
      </div>

      <div className="relative content-container pb-8 pt-16 lg:pb-10 lg:pt-20">
        <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-5 xl:gap-6">
          {/* Copy — wide enough to cut wrap + fill the mid gap */}
          <div className="min-w-0 flex-1 space-y-4 lg:max-w-none">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: accent }}
            >
              {hero.label}
            </p>

            <h1 className="text-[1.85rem] font-bold leading-[1.18] tracking-tight text-white sm:text-[2.15rem] lg:text-[2.35rem] xl:whitespace-nowrap">
              <span>
                {hero.headingLine1}
                <span style={{ color: accent }}>
                  {hero.headingLine1Highlight}
                </span>
              </span>{" "}
              <span>
                {hero.headingLine2}
                <span style={{ color: accent }}>
                  {hero.headingLine2Highlight}
                </span>
              </span>
            </h1>

            <p className="max-w-3xl whitespace-pre-line text-sm leading-snug text-white/70 sm:text-[15px]">
              {hero.description}
            </p>

            <div className="flex flex-col gap-2.5 pt-0.5 sm:flex-row sm:items-center">
              <Link
                href={hero.primaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition hover:brightness-110"
                style={{ backgroundColor: accent }}
              >
                {hero.primaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={hero.secondaryCta.href}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/30 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/55 hover:bg-white/5"
              >
                {hero.secondaryCta.label}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="flex items-center gap-2.5 text-sm text-white/60">
              <span
                className="flex h-8 w-8 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(0,162,229,0.15)" }}
              >
                <Users className="h-4 w-4" style={{ color: accent }} />
              </span>
              {hero.tagline}
            </div>
          </div>

          {/* Map — sits tight beside copy */}
          <div className="w-full shrink-0 sm:mx-auto sm:max-w-[380px] lg:mx-0 lg:w-[min(100%,380px)] xl:w-[400px]">
            <OdishaMapVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
