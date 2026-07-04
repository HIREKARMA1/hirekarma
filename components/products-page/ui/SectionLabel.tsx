import { theme } from "@/config/theme";
import { cn } from "@/lib/utils/cn";

interface SectionLabelProps {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
}

export function SectionLabel({
  children,
  className,
  variant = "dark",
}: SectionLabelProps) {
  return (
    <p
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.15em] sm:text-sm sm:tracking-[0.2em]",
        variant === "dark" ? "text-secondary-500" : "text-primary-500",
        className
      )}
      style={
        variant === "dark"
          ? { color: theme.colors.secondary }
          : { color: theme.colors.primary }
      }
    >
      {children}
    </p>
  );
}
