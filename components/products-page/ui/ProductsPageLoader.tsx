import { theme } from "@/config/theme";

/** Full-viewport loader — covers entire page including navbar area */
export function ProductsPageLoader() {
  return (
    <div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center gap-3"
      style={{ backgroundColor: theme.colors.heroBg }}
      role="status"
      aria-label="Loading page"
    >
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-white/15 border-t-[#00a2e5]"
        aria-hidden
      />
      <p className="text-sm font-medium text-white/50">Loading...</p>
    </div>
  );
}
