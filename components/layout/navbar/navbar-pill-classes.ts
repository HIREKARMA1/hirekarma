export function getNavbarPillClass(isDark: boolean, isScrolled: boolean): string {
  return isDark
    ? `rounded-full border border-[rgba(0,229,255,0.35)] bg-[rgba(0,0,0,0.35)] backdrop-blur-xl shadow-[0_0_40px_rgba(0,229,255,0.08)] ${
        isScrolled ? "ring-1 ring-white/5" : ""
      }`
    : `rounded-full border border-cyan-500/25 bg-white/75 backdrop-blur-xl shadow-lg ${
        isScrolled ? "ring-1 ring-gray-200/80" : ""
      }`;
}
