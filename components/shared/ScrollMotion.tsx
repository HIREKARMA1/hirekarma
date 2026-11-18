"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR =
  "section, article, [data-hk-animate], .hk-reveal";

const AUTO_STAGGER_SELECTOR =
  "[data-hk-stagger], section .grid, section [class*='grid-cols']";

/** After this long, stop waiting for hydration (e.g. non-React markup). */
const HYDRATION_WAIT_MS = 15000;
const HYDRATION_RETRY_MS = 100;

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** React attaches a `__reactFiber$…` key to every DOM node it owns once hydrated. */
function isReactHydrated(el: Element) {
  for (const key in el) {
    if (key.startsWith("__reactFiber$")) return true;
  }
  return false;
}

/**
 * Site-wide scroll reveals + auto-stagger for grids.
 *
 * Only touches DOM nodes after React has hydrated them, so the class/style
 * changes made here never cause hydration mismatches.
 */
export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = prefersReducedMotion();
    const startedAt = Date.now();
    let retryTimer: ReturnType<typeof setTimeout> | undefined;
    let pending = false;

    const ready = (el: Element) =>
      Date.now() - startedAt > HYDRATION_WAIT_MS || isReactHydrated(el);

    if (reduced) {
      document.documentElement.classList.remove("hk-motion-on");
    } else {
      document.documentElement.classList.add("hk-motion-on");
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("hk-revealed");
          observer.unobserve(el);
        }
      },
      { root: null, rootMargin: "0px 0px -8% 0px", threshold: 0 }
    );

    const seen = new WeakSet<Element>();

    const applyStagger = () => {
      document
        .querySelectorAll<HTMLElement>(AUTO_STAGGER_SELECTOR)
        .forEach((grid) => {
          if (grid.closest(".hk-marquee-track") || grid.querySelector(".hk-marquee-track")) {
            return;
          }
          if (grid.closest(".hk-no-reveal")) {
            return;
          }
          const kids = Array.from(grid.children).filter(
            (c): c is HTMLElement =>
              c instanceof HTMLElement &&
              !c.classList.contains("pointer-events-none") &&
              !c.classList.contains("hk-marquee-track")
          );
          if (kids.length < 2 || kids.length > 16) return;

          if (!ready(grid) || kids.some((k) => !ready(k))) {
            pending = true;
            return;
          }

          kids.forEach((child, i) => {
            if (child.classList.contains("hk-stagger-child")) return;
            child.style.setProperty("--hk-stagger", `${Math.min(i, 12) * 70}ms`);
            child.classList.add("hk-stagger-child");
          });
        });
    };

    const scan = () => {
      pending = false;
      if (!reduced) applyStagger();

      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        if (!ready(el)) {
          pending = true;
          return;
        }
        seen.add(el);

        if (reduced) {
          el.classList.add("hk-revealed");
          return;
        }

        if (el.classList.contains("hk-no-reveal")) {
          return;
        }

        // Only skip animation for the true first fold (flush under nav)
        const rect = el.getBoundingClientRect();
        if (rect.top < 96 && rect.bottom > 0) {
          el.classList.add("hk-revealed");
          return;
        }

        el.classList.remove("hk-revealed");
        observer.observe(el);
      });

      // Some nodes aren't hydrated yet; try again shortly.
      if (pending) {
        clearTimeout(retryTimer);
        retryTimer = setTimeout(scan, HYDRATION_RETRY_MS);
      }
    };

    scan();

    let raf = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(retryTimer);
      observer.disconnect();
      mo.disconnect();
    };
  }, [pathname]);

  return null;
}
