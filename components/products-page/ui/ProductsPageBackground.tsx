import { theme } from "@/config/theme";

import { Vortex } from "./Vortex";

/** Single fixed background for the entire products page — gradient, glows, and vortex. */
export function ProductsPageBackground() {
  return (
    <div
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
      style={{
        background: `linear-gradient(180deg, #070b14 0%, ${theme.colors.heroBg} 60%, ${theme.colors.heroBg} 100%)`,
      }}
    >
      <div
        className="absolute -top-24 -right-32 h-[560px] w-[560px] rounded-full blur-[140px]"
        style={{ backgroundColor: theme.colors.heroGlowPrimary }}
      />
      <div
        className="absolute -bottom-32 left-0 h-[300px] w-[300px] rounded-full blur-[120px]"
        style={{ backgroundColor: "rgba(27, 82, 164, 0.10)" }}
      />

      <div className="absolute inset-0 max-lg:opacity-35 lg:opacity-100">
        <Vortex
          transparentBackground
          particleCount={theme.vortex.particleCount}
          rangeY={theme.vortex.rangeY}
          baseHue={theme.vortex.baseHue}
          containerClassName="h-full w-full"
        />
      </div>
    </div>
  );
}
