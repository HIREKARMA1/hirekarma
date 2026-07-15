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
    /** Lakshya / brand dark surface */
    ink: "#0f1622",
    soft: "#f6f8fb",
    line: "#e6e8ec",
    heroBg: "#0f1622",
    heroBgLight: "#f6f8fb",
    heroGlowPrimary: "rgba(27, 82, 164, 0.25)",
    heroGlowSecondary: "rgba(0, 162, 229, 0.15)",
    heroGlowPrimaryLight: "rgba(27, 82, 164, 0.12)",
    heroGlowSecondaryLight: "rgba(0, 162, 229, 0.1)",
    surfaceDark: "#0f1622",
    surfaceCard: "#111827",
    surfaceLight: "#ffffff",
    borderDark: "rgba(255, 255, 255, 0.1)",
    borderLight: "rgba(15, 23, 42, 0.1)",
    textMuted: "rgba(255, 255, 255, 0.65)",
    textMutedLight: "#6b7280",
    white: "#ffffff",
    black: "#000000",
  },
  fonts: {
    sans: "var(--font-inter), Inter, Helvetica Neue, Arial, sans-serif",
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
  resourceCards: {
    default: "linear-gradient(135deg, rgba(27, 82, 164, 0.92), rgba(0, 162, 229, 0.75))",
    alt: "linear-gradient(135deg, rgba(9, 136, 85, 0.92), rgba(0, 162, 229, 0.65))",
    warm: "linear-gradient(135deg, rgba(245, 128, 32, 0.95), rgba(27, 82, 164, 0.85))",
    sky: "linear-gradient(135deg, rgba(0, 162, 229, 0.92), rgba(27, 82, 164, 0.78))",
    deep: "linear-gradient(135deg, rgba(15, 22, 34, 0.95), rgba(9, 136, 85, 0.75))",
    gold: "linear-gradient(135deg, rgba(254, 196, 13, 0.95), rgba(245, 128, 32, 0.85))",
    overlay:
      "radial-gradient(circle at 80% 20%, rgba(254, 196, 13, 0.35), transparent 45%), radial-gradient(circle at 10% 90%, rgba(245, 128, 32, 0.25), transparent 40%)",
  },
  resourceCardAccents: {
    default: {
      main: "#1b52a4",
      hover: "#00a2e5",
      soft: "rgba(27, 82, 164, 0.08)",
      softDark: "rgba(27, 82, 164, 0.18)",
      border: "rgba(27, 82, 164, 0.28)",
      borderDark: "rgba(0, 162, 229, 0.35)",
    },
    alt: {
      main: "#098855",
      hover: "#00a2e5",
      soft: "rgba(9, 136, 85, 0.08)",
      softDark: "rgba(9, 136, 85, 0.2)",
      border: "rgba(9, 136, 85, 0.28)",
      borderDark: "rgba(9, 136, 85, 0.4)",
    },
    warm: {
      main: "#f58020",
      hover: "#f15a2b",
      soft: "rgba(245, 128, 32, 0.1)",
      softDark: "rgba(245, 128, 32, 0.2)",
      border: "rgba(245, 128, 32, 0.32)",
      borderDark: "rgba(245, 128, 32, 0.45)",
    },
    sky: {
      main: "#00a2e5",
      hover: "#1b52a4",
      soft: "rgba(0, 162, 229, 0.1)",
      softDark: "rgba(0, 162, 229, 0.2)",
      border: "rgba(0, 162, 229, 0.32)",
      borderDark: "rgba(0, 162, 229, 0.45)",
    },
    deep: {
      main: "#d64246",
      hover: "#098855",
      soft: "rgba(214, 66, 70, 0.09)",
      softDark: "rgba(214, 66, 70, 0.2)",
      border: "rgba(214, 66, 70, 0.3)",
      borderDark: "rgba(214, 66, 70, 0.42)",
    },
    gold: {
      main: "#c9960a",
      hover: "#f58020",
      soft: "rgba(254, 196, 13, 0.14)",
      softDark: "rgba(254, 196, 13, 0.18)",
      border: "rgba(254, 196, 13, 0.45)",
      borderDark: "rgba(254, 196, 13, 0.35)",
    },
  },
} as const;

export type ProductAccentKey = keyof typeof theme.productAccents;

export function getProductAccent(key: ProductAccentKey) {
  return theme.productAccents[key];
}
