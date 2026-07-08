/**
 * Centralized environment variable access.
 * All external URLs and credentials must be read from here - never hardcode in components.
 */
const requiredPublic = ["NEXT_PUBLIC_DISHA_URL", "NEXT_PUBLIC_SOLVIQ_URL"] as const;

function getEnv(key: string, fallback = ""): string {
  return process.env[key] ?? fallback;
}

function warnMissing(key: string) {
  if (process.env.NODE_ENV === "development") {
    console.warn(`[env] Missing ${key}. Add it to .env.local`);
  }
}

export const env = {
  dishaUrl: getEnv("NEXT_PUBLIC_DISHA_URL", "https://disha.hirekarma.in/"),
  solviqUrl: getEnv("NEXT_PUBLIC_SOLVIQ_URL", "https://www.solviqai.in/"),
  lakshyaUrl: getEnv("NEXT_PUBLIC_LAKSHYA_URL", "https://lakshya.hirekarma.in/"),
  shortlistedUrl: getEnv(
    "NEXT_PUBLIC_SHORTLISTED_URL",
    "https://shortlisted.hirekarma.in/"
  ),
  janasamadhanUrl: getEnv(
    "NEXT_PUBLIC_JANASAMADHAN_URL",
    "https://eabhijog.amagopalpur.org/"
  ),
  amagopalpurUrl: getEnv("NEXT_PUBLIC_AMAGOPALPUR_URL", "https://amagopalpur.org/"),
  assetsBaseUrl: getEnv("NEXT_PUBLIC_PRODUCTS_ASSETS_BASE_URL", ""),
  apiBaseUrl: getEnv("NEXT_PUBLIC_API_BASE_URL", ""),
} as const;

export type HrefKey =
  | "disha"
  | "solviq"
  | "lakshya"
  | "shortlisted"
  | "janasamadhan"
  | "amagopalpur"
  | "careers"
  | "products"
  | "resources";

const hrefMap: Record<HrefKey, () => string> = {
  disha: () => env.dishaUrl,
  solviq: () => env.solviqUrl,
  lakshya: () => env.lakshyaUrl,
  shortlisted: () => env.shortlistedUrl,
  janasamadhan: () => env.janasamadhanUrl,
  amagopalpur: () => env.amagopalpurUrl,
  careers: () => getEnv("NEXT_PUBLIC_CAREERS_URL", "/contact"),
  products: () => "/products",
  resources: () => "/resources",
};

export function resolveHref(key: HrefKey): string {
  return hrefMap[key]?.() ?? "/";
}

export function resolveAssetPath(path: string): string {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const base = env.assetsBaseUrl.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return base ? `${base}${normalized}` : normalized;
}

export function validatePublicEnv() {
  requiredPublic.forEach((key) => {
    if (!process.env[key]) warnMissing(key);
  });
}
