"use client";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { getTrustConfig, getTrustLogos } from "@/services/trust";
import { LogoMarquee } from "../ui/LogoMarquee";

/** Trust logos row — rendered inside the hero, not as a separate section. */
export function HeroTrustBand() {
  const { content } = useProductsLocale();
  const logos = getTrustLogos();
  const { settings } = getTrustConfig();

  return (
    <div className="border-t border-white/10 pt-5 sm:pt-6 lg:pt-5">
      <div className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:gap-8">
        <p className="w-full shrink-0 text-left text-sm font-medium leading-relaxed text-white/90 sm:text-base lg:max-w-[220px]">
          {content.partners.text}
        </p>

        <div className="min-w-0 flex-1 overflow-hidden">
          <LogoMarquee
            logos={logos}
            direction="left"
            speedSeconds={settings.marqueeSpeedSeconds}
            variant={settings.variant}
          />
        </div>
      </div>
    </div>
  );
}
