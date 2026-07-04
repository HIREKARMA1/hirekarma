"use client";

import { motion } from "framer-motion";

import { useProductsLocale } from "@/contexts/ProductsLocaleContext";
import { getTrustConfig, getTrustLogos } from "@/services/trust";
import { LogoMarquee } from "../ui/LogoMarquee";

/** Trust logos row — rendered inside the hero, not as a separate section. */
export function HeroTrustBand() {
  const { content } = useProductsLocale();
  const logos = getTrustLogos();
  const { settings } = getTrustConfig();

  return (
    <motion.div
      className="border-t border-white/10 pt-5 sm:pt-6 lg:pt-5"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="flex min-w-0 flex-col gap-4 sm:gap-5 lg:flex-row lg:items-center lg:gap-8">
        <p className="w-full shrink-0 text-left text-sm font-medium leading-relaxed text-white/90 sm:text-base lg:max-w-[220px]">
          {content.partners.text}
        </p>

        <div className="min-w-0 flex-1">
          <LogoMarquee
            logos={logos}
            direction="left"
            speedSeconds={settings.marqueeSpeedSeconds}
            variant={settings.variant}
          />
        </div>
      </div>
    </motion.div>
  );
}
