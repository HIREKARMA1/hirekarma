"use client";

import Image from "next/image";

import { theme } from "@/config/theme";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { withHighlightMark } from "@/components/shared/HighlightMark";

const certificationMeta = [
  { logo: "/DPIIT.png", accent: theme.colors.primary },
  { logo: "/iso.png", accent: theme.colors.green },
  { logo: "/MSME.png", accent: theme.colors.secondary },
  { logo: "/StartupOdisha.png", accent: theme.colors.orange },
  { logo: "/nasscome.png", accent: theme.colors.red },
];

export default function CertificationsSection() {
  const { content } = useHomeLocale();
  const { certificationsSection } = content;

  return (
    <section className="border-t border-[#e6e8ec] bg-white py-8 sm:py-9">
      <div className="content-container">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
          <div className="shrink-0 lg:max-w-[240px]">
            <p
              className="text-[12px] font-semibold uppercase tracking-[0.18em]"
              style={{ color: theme.colors.secondary }}
            >
              {certificationsSection.subheading}
            </p>
            <h2 className="mt-1.5 text-xl font-bold tracking-tight text-[#0f1622] sm:text-[1.35rem]">
              {withHighlightMark(
                certificationsSection.heading,
                certificationsSection.headingHighlight
              )}
            </h2>
          </div>

          <div className="min-w-0 flex-1">
            <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-5">
              {certificationsSection.items.map((item, index) => {
                const meta = certificationMeta[index] ?? certificationMeta[0];
                return (
                  <div
                    key={item.name}
                    className="flex items-center gap-2.5 rounded-xl border border-[#e6e8ec] bg-[#f6f8fb] px-3 py-2.5 transition hover:border-[#00a2e5]/35 hover:bg-white"
                    title={item.description}
                  >
                    <span
                      className="h-8 w-0.5 shrink-0 rounded-full"
                      style={{ backgroundColor: meta.accent }}
                      aria-hidden
                    />
                    <div className="relative h-9 w-9 shrink-0">
                      <Image
                        src={meta.logo}
                        alt={item.name}
                        fill
                        className="object-contain"
                        sizes="36px"
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-[13px] font-bold leading-tight text-[#0f1622]">
                        {item.name}
                      </p>
                      <p className="mt-0.5 truncate text-[11px] font-medium uppercase tracking-wide text-[#475569]">
                        {item.category}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
