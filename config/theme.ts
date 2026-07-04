/**
 * Central theme tokens for the products page and reusable UI kit.
 * Update colors here to rebrand across all product-page components.
 */
export const theme = {
  colors: {
    primary: "#1b52a4",
    secondary: "#00a2e5",
    yellow: "#fec40d",
    orange: "#f58020",
    red: "#d64246",
    green: "#098855",
    heroBg: "#05070a",
    heroGlowPrimary: "rgba(27, 82, 164, 0.25)",
    heroGlowSecondary: "rgba(0, 162, 229, 0.15)",
    surfaceDark: "#0c1018",
    surfaceCard: "#111827",
    borderDark: "rgba(255, 255, 255, 0.1)",
    textMuted: "rgba(255, 255, 255, 0.65)",
    textMutedLight: "#6b7280",
    white: "#ffffff",
    black: "#000000",
  },
  fonts: {
    sans: "var(--font-roboto), Roboto, Helvetica Neue, Arial, sans-serif",
  },
  radii: {
    sm: "0.5rem",
    md: "0.75rem",
    lg: "1rem",
    xl: "1.25rem",
    pill: "9999px",
  },
  productAccents: {
    disha: {
      main: "#1b52a4",
      light: "#1b52a4",
      contrastText: "#ffffff",
      bg: "rgba(27, 82, 164, 0.08)",
      border: "rgba(27, 82, 164, 0.2)",
    },
    solviq: {
      main: "#f58020",
      light: "#f58020",
      contrastText: "#ffffff",
      bg: "rgba(245, 128, 32, 0.08)",
      border: "rgba(245, 128, 32, 0.2)",
    },
    lakshya: {
      main: "#00a2e5",
      light: "#00a2e5",
      contrastText: "#ffffff",
      bg: "rgba(0, 162, 229, 0.08)",
      border: "rgba(0, 162, 229, 0.2)",
    },
    shortlisted: {
      main: "#fec40d",
      light: "#fec40d",
      contrastText: "#111827",
      bg: "rgba(254, 196, 13, 0.08)",
      border: "rgba(254, 196, 13, 0.2)",
    },
    janasamadhan: {
      main: "#098855",
      light: "#098855",
      contrastText: "#ffffff",
      bg: "rgba(9, 136, 85, 0.08)",
      border: "rgba(9, 136, 85, 0.2)",
    },
    amagopalpur: {
      main: "#d64246",
      light: "#d64246",
      contrastText: "#ffffff",
      bg: "rgba(214, 66, 70, 0.08)",
      border: "rgba(214, 66, 70, 0.2)",
    },
    credentials: {
      main: "#098855",
      light: "#098855",
      contrastText: "#ffffff",
      bg: "rgba(9, 136, 85, 0.08)",
      border: "rgba(9, 136, 85, 0.2)",
    },
  },
  gradients: {
    brand: "linear-gradient(135deg, #1b52a4 0%, #00a2e5 100%)",
    brandText: "linear-gradient(135deg, #1b52a4 0%, #00a2e5 100%)",
    heroGlow:
      "radial-gradient(ellipse at 20% 30%, rgba(27,82,164,0.2) 0%, transparent 50%), radial-gradient(ellipse at 80% 60%, rgba(0,162,229,0.12) 0%, transparent 50%)",
  },
  /** Aceternity vortex-demo-2 preset — https://ui.aceternity.com/components/vortex */
  vortex: {
    particleCount: 500,
    rangeY: 800,
    baseHue: 120,
  },
} as const;

export type ProductAccentKey = keyof typeof theme.productAccents;

export function getProductAccent(key: ProductAccentKey) {
  return theme.productAccents[key];
}
