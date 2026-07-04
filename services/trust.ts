import trustConfig from "@/data/products-page/trust.json";
import trustLogosData from "@/data/products-page/trust-logos.json";
import type {
  TrustConfig,
  TrustLogo,
  TrustLogosData,
} from "@/types/products-page";

const config = trustConfig as TrustConfig;
const logosData = trustLogosData as TrustLogosData;

/**
 * Trust logos live in data/products-page/trust-logos.json (a combined dataset
 * built from corporate.json + company.json). Swap this to an API fetch when the
 * Python backend is ready.
 */
export function getTrustConfig(): TrustConfig {
  return config;
}

export function getTrustLogos(): TrustLogo[] {
  return logosData.logos;
}

export async function fetchTrustLogos(): Promise<TrustLogo[]> {
  return getTrustLogos();
}
