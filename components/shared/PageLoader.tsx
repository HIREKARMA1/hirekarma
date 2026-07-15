"use client";

interface PageLoaderProps {
  /** Full-viewport overlay (route loading) vs inline */
  fullScreen?: boolean;
  label?: string;
  className?: string;
}

/** Simple site-wide spinner — used by route loading and navigation overlay. */
export function PageLoader({
  fullScreen = true,
  label = "Loading",
  className = "",
}: PageLoaderProps) {
  const body = (
    <div
      className={`flex items-center justify-center ${className}`}
      role="status"
      aria-live="polite"
      aria-label={label}
    >
      <span
        className="h-9 w-9 animate-spin rounded-full border-[3px] border-[#e6e8ec] border-t-[#00a2e5]"
        aria-hidden
      />
      <span className="sr-only">{label}…</span>
    </div>
  );

  if (!fullScreen) return body;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/85 backdrop-blur-[1px]">
      {body}
    </div>
  );
}
