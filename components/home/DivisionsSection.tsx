"use client";

import Image from "next/image";
import Link from "next/link";

import { useHomeLocale } from "@/contexts/HomeLocaleContext";

export default function DivisionsSection() {
  const { content } = useHomeLocale();
  const { divisions } = content;

  return (
    <section id="what-we-do" className="bg-[#f3f4f6] py-12 sm:py-16">
      <div className="content-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-5 xl:gap-7">
          <div className="flex shrink-0 flex-col justify-center lg:w-[180px] xl:w-[200px]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.75rem] lg:text-[1.85rem] lg:leading-tight">
              {divisions.heading}
            </h2>
            <p className="mt-3 text-[15px] leading-relaxed text-[#334155] lg:text-sm">
              {divisions.description}
            </p>
          </div>

          <div
            data-hk-stagger
            className="hk-offering-row -mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:flex-1 lg:gap-2 lg:overflow-hidden lg:px-0 lg:pb-0 xl:gap-2.5"
          >
            {divisions.items.map((item) => {
              const isExternal = item.href.startsWith("http");
              const kindLabel = item.kind === "product" ? "Product" : "Activity";
              const className =
                "hk-offering-card group relative flex h-[400px] w-[156px] shrink-0 flex-col overflow-hidden rounded-2xl sm:w-[168px] lg:h-[420px] lg:w-auto lg:min-w-0";

              const card = (
                <>
                  <div className="absolute inset-0">
                    <Image
                      key={item.image}
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover will-change-transform group-hover:scale-[1.06]"
                      sizes="(max-width: 1024px) 168px, 18vw"
                    />
                  </div>

                  <div
                    className="absolute inset-0"
                    style={{ background: overlayGradient(item.accent) }}
                  />

                  <div className="absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-black/40 via-black/18 to-transparent" />

                  <div className="hk-offering-text relative z-10 flex h-full flex-col px-3 pb-3 pt-4 text-left text-white">
                    <div className="flex h-6 shrink-0 items-center justify-between gap-2">
                      <span className="hk-offering-num shrink-0 text-[11px] font-semibold leading-none tabular-nums tracking-wide text-white/90">
                        {item.number}
                      </span>
                      <span className="hk-offering-kind inline-flex h-[18px] shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-white/20 px-2 text-[9px] font-semibold uppercase leading-none tracking-[0.08em] text-white backdrop-blur-[2px]">
                        {kindLabel}
                      </span>
                    </div>
                    <h3 className="hk-offering-title mt-3 min-h-[2.6em] text-[14px] font-semibold leading-snug tracking-tight text-left text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.45)] sm:text-[15px] xl:text-[16px]">
                      {item.title}
                    </h3>
                  </div>
                </>
              );

              return isExternal ? (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={className}
                >
                  {card}
                </a>
              ) : (
                <Link key={item.id} href={item.href} className={className}>
                  {card}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function parseHex(hex: string) {
  const cleaned = hex.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const n = parseInt(full, 16);
  return {
    r: (n >> 16) & 255,
    g: (n >> 8) & 255,
    b: n & 255,
  };
}

function mixWithNavy(hex: string, amount: number) {
  const { r, g, b } = parseHex(hex);
  const navy = { r: 12, g: 18, b: 32 };
  return {
    r: Math.round(r + (navy.r - r) * amount),
    g: Math.round(g + (navy.g - g) * amount),
    b: Math.round(b + (navy.b - b) * amount),
  };
}

function overlayGradient(hex: string) {
  const { r, g, b } = parseHex(hex);
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  const isLight = luminance > 0.55;

  const top = mixWithNavy(hex, isLight ? 0.42 : 0.18);
  const mid = mixWithNavy(hex, isLight ? 0.28 : 0.1);

  const topA = isLight ? 0.76 : 0.62;
  const midA = isLight ? 0.42 : 0.32;
  const lowA = isLight ? 0.18 : 0.1;

  return `linear-gradient(180deg, rgba(${top.r},${top.g},${top.b},${topA}) 0%, rgba(${mid.r},${mid.g},${mid.b},${midA}) 34%, rgba(${r},${g},${b},${lowA}) 64%, rgba(${r},${g},${b},0.04) 100%)`;
}
