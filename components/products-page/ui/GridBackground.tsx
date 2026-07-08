import { cn } from "@/lib/utils/cn";

interface GridBackgroundProps {
  className?: string;
  /** Grid cell size in pixels. Aceternity default: 40 */
  gridSize?: number;
  /** CSS color for grid lines */
  lineColor?: string;
  /** Fade grid toward edges with a radial mask */
  showFade?: boolean;
  /** Solid color used by the radial fade overlay */
  fadeColor?: string;
}

/**
 * Aceternity-style grid background.
 * @see https://ui.aceternity.com/components/grid-and-dot-backgrounds
 */
export function GridBackground({
  className,
  gridSize = 40,
  lineColor = "rgba(255, 255, 255, 0.06)",
  showFade = true,
  fadeColor = "#05070a",
}: GridBackgroundProps) {
  return (
    <>
      <div
        className={cn("absolute inset-0", className)}
        style={{
          backgroundSize: `${gridSize}px ${gridSize}px`,
          backgroundImage: `linear-gradient(to right, ${lineColor} 1px, transparent 1px), linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)`,
        }}
      />
      {showFade ? (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundColor: fadeColor,
            maskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent 20%, black)",
          }}
        />
      ) : null}
    </>
  );
}
