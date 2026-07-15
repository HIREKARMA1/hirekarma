"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { withHighlightMark } from "@/components/shared/HighlightMark";
import type { HomeTestimonialItem } from "@/types/home-page";

const CARD_W = 320;
const CARD_H = 300;
const GAP = 16;
const DURATION_S = 120;

function initialsFromName(name: string) {
  return name
    .replace(/^(Mr\.|Mrs\.|Ms\.|Dr\.)\s+/i, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

function TestimonialCard({ item }: { item: HomeTestimonialItem }) {
  const initials = initialsFromName(item.name);
  const hasPhoto = Boolean(item.image);

  return (
    <div
      className="shrink-0"
      style={{ width: CARD_W, maxWidth: "100%" }}
    >
      <article
        className="group relative flex flex-col rounded-2xl border border-white/12 p-5 shadow-[0_4px_24px_rgba(0,0,0,0.28)] transition hover:-translate-y-0.5 hover:border-[#00a2e5]/45 hover:shadow-[0_10px_36px_rgba(0,0,0,0.38)]"
        style={{
          height: CARD_H,
          background:
            "linear-gradient(145deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(0,162,229,0.1), rgba(245,128,32,0.07))",
          }}
          aria-hidden
        />

        <div className="relative z-10 flex h-full flex-col">
          <div className="mb-4 flex items-center gap-3.5">
            <div
              className="relative grid h-14 w-14 shrink-0 place-items-center overflow-hidden rounded-full border-2 text-[14px] font-bold text-sky-100"
              style={{
                borderColor: "rgba(0,162,229,0.35)",
                background:
                  "linear-gradient(135deg, rgba(27,82,164,0.5), rgba(0,162,229,0.35))",
              }}
            >
              {hasPhoto ? (
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="56px"
                />
              ) : (
                initials
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-[15px] font-semibold text-white/95">
                {item.name}
              </h3>
          <p className="mt-0.5 truncate text-[13px] text-white/90">
                        {item.designation}
                      </p>
              <p className="mt-0.5 truncate text-[13px] text-white/80">
                {item.institution}
              </p>
            </div>
          </div>

          <div className="min-h-0 flex-1 border-t border-white/10 pt-4">
            <p
              className="text-sm leading-relaxed text-white/85"
              style={{
                display: "-webkit-box",
                WebkitBoxOrient: "vertical",
                WebkitLineClamp: 6,
                overflow: "hidden",
              }}
              title={item.feedback}
            >
              “{item.feedback}”
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default function Testimonials() {
  const { content } = useHomeLocale();
  const { testimonials } = content;
  const items = testimonials.items;
  const ink = theme.colors.ink;
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return (
    <section
      className="relative overflow-x-clip py-12 sm:py-14"
      style={{ backgroundColor: ink }}
      aria-labelledby="hk-testimonials-title"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div
          className="absolute left-1/2 top-0 h-56 w-[70%] -translate-x-1/2 rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(0,162,229,0.14)" }}
        />
      </div>

      <div className="relative content-container">
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.02]">
          <div className="px-6 pb-2 pt-8 text-center sm:px-8 sm:pt-10">
            <h2
              id="hk-testimonials-title"
              className="text-2xl font-bold tracking-tight text-white sm:text-[1.5rem]"
            >
              {testimonials.heading}
              <span className="mt-1.5 block text-lg font-medium tracking-tight text-white sm:text-[1.35rem]">
                {withHighlightMark(
                  testimonials.subheading,
                  testimonials.subheadingHighlight
                )}
              </span>
            </h2>
            <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-white/85">
              {testimonials.description}
            </p>
          </div>

          {reduceMotion ? (
            <div className="flex flex-wrap justify-center gap-4 px-4 pb-8 pt-4">
              {items.map((item) => (
                <TestimonialCard
                  key={`${item.name}-${item.institution}`}
                  item={item}
                />
              ))}
            </div>
          ) : (
            <div
              className="mx-auto w-full max-w-[min(100%,calc(3*320px+2*1rem))] overflow-hidden px-0 pb-6 pt-3 max-[1080px]:max-w-[min(100%,calc(2*320px+1rem))] max-[700px]:max-w-[min(320px,calc(100vw-2rem))]"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              <div
                className="relative overflow-hidden py-2"
                style={{
                  maskImage:
                    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
                  WebkitMaskImage:
                    "linear-gradient(to right, transparent, #000 6%, #000 94%, transparent)",
                }}
              >
                <div
                  className="flex w-max animate-partners-scroll-left"
                  style={{
                    animationDuration: `${DURATION_S}s`,
                    animationPlayState: paused ? "paused" : "running",
                    transform: "translateZ(0)",
                  }}
                  aria-label="Customer testimonials scrolling"
                >
                  {[0, 1].map((copy) => (
                    <div
                      key={copy}
                      className="flex items-stretch"
                      style={{ gap: GAP, paddingRight: GAP }}
                      aria-hidden={copy === 1}
                    >
                      {items.map((item) => (
                        <TestimonialCard
                          key={`${copy}-${item.name}-${item.institution}`}
                          item={item}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
