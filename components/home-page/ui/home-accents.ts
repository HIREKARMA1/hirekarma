import { theme } from "@/config/theme";
import type { HomeDivision } from "@/types/home-page";

export const homeAccentMap: Record<
  HomeDivision["accent"],
  string
> = {
  primary: theme.colors.primary,
  secondary: theme.colors.secondary,
  orange: theme.colors.orange,
  yellow: theme.colors.yellow,
  green: theme.colors.green,
  red: theme.colors.red,
};
