"use client";

import { getTrustLogos } from "@/services/trust";
import { useHomeLocale } from "@/contexts/HomeLocaleContext";
import { GradientHeading } from "@/components/products-page/ui/GradientHeading";
import { ProductButton } from "@/components/products-page/ui/ProductButton";
import { SectionLabel } from "@/components/products-page/ui/SectionLabel";
import { LogoMarquee } from "@/components/products-page/ui/LogoMarquee";
import { theme } from "@/config/theme";

export function HomeHeroSection() {
  const { content } = useHomeLocale();
  const { hero } = content;
  const logos = getTrustLogos();

  return (
    <section className="relative w-full pt-24 pb-10 sm:pt-28 sm:pb-12 lg:pt-32 lg:pb-14">
      <div className="content-container relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <div className="max-w-xl space-y-6">
            <SectionLabel>{hero.badge}</SectionLabel>
            <GradientHeading
              heading={hero.heading}
              as="h1"
              size="hero"
              layout="stacked"
              className="font-extrabold"
            />
            <p className="text-base leading-relaxed text-white/80 sm:text-lg">
              {hero.description}
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <ProductButton cta={hero.primaryCta} />
              <ProductButton cta={hero.secondaryCta} />
            </div>
          </div>

          <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center lg:max-w-none">
            <div
              className="absolute inset-[12%] rounded-full border border-dashed opacity-40"
              style={{ borderColor: theme.colors.secondary }}
              aria-hidden
            />
            <div
              className="absolute inset-[22%] rounded-full border border-white/10"
              aria-hidden
            />
            <div
              className="relative z-10 flex h-28 w-28 items-center justify-center rounded-full text-4xl font-black text-white shadow-[0_0_60px_rgba(27,82,164,0.45)] sm:h-32 sm:w-32"
              style={{
                background: theme.gradients.brand,
              }}
            >
              *
            </div>
            {[
              { label: "Skill", top: "8%", left: "42%", color: theme.colors.primary },
              { label: "DISHA", top: "28%", right: "6%", color: theme.colors.secondary },
              { label: "SOLVIQ", bottom: "26%", right: "10%", color: theme.colors.orange },
              { label: "IT", bottom: "8%", left: "42%", color: theme.colors.green },
              { label: "Staff", bottom: "28%", left: "4%", color: theme.colors.yellow },
              { label: "DPI", top: "28%", left: "4%", color: theme.colors.red },
            ].map((node) => (
              <div
                key={node.label}
                className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[0.65rem] font-bold text-white backdrop-blur-sm sm:h-14 sm:w-14 sm:text-xs"
                style={{
                  top: node.top,
                  left: node.left,
                  right: node.right,
                  bottom: node.bottom,
                  boxShadow: `0 0 24px ${node.color}55`,
                }}
              >
                {node.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 sm:mt-14 sm:pt-8">
          <div className="flex min-w-0 flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <p className="w-full shrink-0 text-sm font-medium text-white/85 lg:max-w-[220px]">
              {hero.trustLabel}
            </p>
            <div className="min-w-0 flex-1 overflow-hidden">
              <LogoMarquee logos={logos} direction="left" speedSeconds={130} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
