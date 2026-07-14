"use client";

import Image from "next/image";
import Link from "next/link";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { withHighlightMark } from "@/components/shared/HighlightMark";

export default function DivisionsSection() {
  const { content } = useHomeLocale();
  const { divisions } = content;

  return (
    <section id="what-we-do" className="bg-[#f3f4f6] py-12 sm:py-16">
      <div className="content-container">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-stretch lg:gap-5 xl:gap-7">
          <div className="flex shrink-0 flex-col justify-center lg:w-[180px] xl:w-[200px]">
            <h2 className="text-2xl font-bold tracking-tight text-[#0f1622] sm:text-[1.75rem] lg:text-[1.85rem] lg:leading-tight">
              {withHighlightMark(
                divisions.heading,
                divisions.headingHighlight,
                { nowrap: false }
              )}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-[#0f1622]/6 lg:text-[13px]">
              {divisions.description}
            </p>
            <Link
              href={divisions.cta.href}
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold transition hover:gap-2"
              style={{ color: theme.colors.primary }}
            >
              {divisions.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="-mx-4 flex gap-2.5 overflow-x-auto px-4 pb-2 lg:mx-0 lg:grid lg:flex-1 lg:grid-cols-8 lg:gap-2 lg:overflow-visible lg:px-0 lg:pb-0 xl:gap-2.5">
            {divisions.items.map((item) => {
              const isExternal = item.href.startsWith("http");
              const kindLabel = item.kind === "product" ? "Product" : "Activity";
              const className =
                "group relative flex h-[400px] w-[156px] shrink-0 flex-col overflow-hidden rounded-2xl sm:w-[168px] lg:h-[420px] lg:w-auto lg:min-w-0";

              const card = (
                <>
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${item.accent} 0%, ${item.accent} 42%, transparent 72%)`,
                    }}
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[58%]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 1024px) 168px, 11vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(180deg, ${item.accent} 0%, ${hexToRgba(item.accent, 0.55)} 28%, transparent 58%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10 flex h-full flex-col px-2.5 pb-3 pt-3 text-white sm:px-3 lg:px-2.5 xl:px-3">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-semibold tracking-wide text-white/80">
                        {item.number}
                      </span>
                      <span className="rounded-full bg-white/20 px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-wide text-white xl:text-[9px]">
                        {kindLabel}
                      </span>
                    </div>
                    <h3 className="mt-2.5 text-[13px] font-bold leading-snug sm:text-[14px] xl:text-[15px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-4 text-[11px] leading-snug text-white/90 sm:text-[12px]">
                      {item.description}
                    </p>
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

function hexToRgba(hex: string, alpha: number) {
  const cleaned = hex.replace("#", "");
  const full =
    cleaned.length === 3
      ? cleaned
          .split("")
          .map((c) => c + c)
          .join("")
      : cleaned;
  const n = parseInt(full, 16);
  const r = (n >> 16) & 255;
  const g = (n >> 8) & 255;
  const b = n & 255;
  return `rgba(${r},${g},${b},${alpha})`;
}
