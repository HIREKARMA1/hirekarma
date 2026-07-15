"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";

import { PageLoader } from "@/components/shared/PageLoader";

/**
 * Top progress bar + soft overlay while client-side navigations resolve.
 */
export function NavigationLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const active = useRef(false);

  const clearTimers = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
  };

  const finish = useCallback(() => {
    if (!active.current) return;
    active.current = false;
    clearTimers();
    setProgress(100);
    timers.current.push(
      setTimeout(() => {
        setVisible(false);
        setShowOverlay(false);
        setProgress(0);
      }, 220)
    );
  }, []);

  const start = useCallback(() => {
    if (active.current) return;
    active.current = true;
    clearTimers();
    setVisible(true);
    setShowOverlay(false);
    setProgress(12);

    timers.current.push(setTimeout(() => setProgress(38), 120));
    timers.current.push(setTimeout(() => setProgress(62), 320));
    timers.current.push(setTimeout(() => setProgress(78), 700));
    // Overlay only if navigation is slow — avoid flash on fast clicks
    timers.current.push(setTimeout(() => {
      if (active.current) setShowOverlay(true);
    }, 280));
  }, []);

  // Complete when the URL actually changes
  useEffect(() => {
    finish();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  // Listen for internal link clicks
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = (event.target as HTMLElement | null)?.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) {
        return;
      }
      if (target.getAttribute("target") === "_blank" || target.hasAttribute("download")) {
        return;
      }

      try {
        const url = new URL(href, window.location.href);
        if (url.origin !== window.location.origin) return;
        if (
          url.pathname === window.location.pathname &&
          url.search === window.location.search
        ) {
          return;
        }
        start();
      } catch {
        /* ignore invalid urls */
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [start]);

  useEffect(() => () => clearTimers(), []);

  if (!visible && !showOverlay) return null;

  return (
    <>
      <div
        className="pointer-events-none fixed inset-x-0 top-0 z-[110] h-[3px] overflow-hidden"
        aria-hidden={!visible}
      >
        <div
          className="h-full origin-left rounded-r-full bg-gradient-to-r from-[#1b52a4] via-[#00a2e5] to-[#fec40d] shadow-[0_0_12px_rgba(0,162,229,0.55)] transition-[width,opacity] duration-300 ease-out"
          style={{
            width: `${progress}%`,
            opacity: visible ? 1 : 0,
          }}
        />
      </div>

      {showOverlay ? <PageLoader label="Loading page" /> : null}
    </>
  );
}
