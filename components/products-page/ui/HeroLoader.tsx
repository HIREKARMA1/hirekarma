interface HeroLoaderProps {
  className?: string;
}

export function HeroLoader({ className = "" }: HeroLoaderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      role="status"
      aria-label="Loading hero content"
    >
      <div
        className="h-9 w-9 animate-spin rounded-full border-2 border-white/15 border-t-[#00a2e5]"
        aria-hidden
      />
      <p className="text-sm font-medium text-white/50">Loading...</p>
    </div>
  );
}
