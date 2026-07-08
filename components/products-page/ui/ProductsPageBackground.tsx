import { theme } from "@/config/theme";

import { GridBackground } from "./GridBackground";

/** Fixed page backdrop for products and resources - Aceternity grid with brand tones. */
export function ProductsPageBackground() {
  const baseColor = theme.colors.heroBg;

  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
      style={{
        background: `linear-gradient(180deg, #0a0f1a 0%, ${baseColor} 50%, #040608 100%)`,
      }}
    >
      <GridBackground
        lineColor="rgba(255, 255, 255, 0.05)"
        fadeColor={baseColor}
      />

      <div
        className="absolute inset-0"
        style={{ background: theme.gradients.heroGlow }}
      />

      <div
        className="absolute -top-24 -right-32 h-[520px] w-[520px] rounded-full blur-[140px]"
        style={{ backgroundColor: theme.colors.heroGlowPrimary }}
      />
      <div
        className="absolute top-[38%] -left-28 h-[380px] w-[380px] rounded-full blur-[120px]"
        style={{ backgroundColor: theme.colors.heroGlowSecondary }}
      />
    </div>
  );
}
