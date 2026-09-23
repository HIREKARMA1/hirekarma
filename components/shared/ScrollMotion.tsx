"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const REVEAL_SELECTOR =
  "section, article, [data-hk-animate], .hk-reveal";

// Opt-in only. Auto-matching every `section .grid` races App Router streaming:
// layout hydrates → MutationObserver mutates page HTML → child hydration mismatch.
const AUTO_STAGGER_SELECTOR = "[data-hk-stagger]";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Site-wide scroll reveals + auto-stagger for grids.
 *
 * Must not mutate page DOM until after streamed App Router segments hydrate.
 * Layout effects can otherwise run while page HTML is already in the document
 * but not yet hydrated — classic `hk-revealed` / `hk-stagger-child` mismatches.
 */
export function ScrollMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (prefersReducedMotion()) {
      // Hide rules only apply under html.hk-motion-on — no per-node class churn.
      document.documentElement.classList.remove("hk-motion-on");
      return;
    }

    let cancelled = false;
    let raf = 0;
    let mo: MutationObserver | null = null;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const el = entry.target as HTMLElement;
          el.classList.add("hk-revealed");
          observer.unobserve(el);
        }
      },
      { root: null, rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    const seen = new WeakSet<Element>();

    const applyStagger = () => {
      document
        .querySelectorAll<HTMLElement>(AUTO_STAGGER_SELECTOR)
        .forEach((grid) => {
          if (
            grid.closest(".hk-marquee-track") ||
            grid.querySelector(".hk-marquee-track")
          ) {
            return;
          }
          const kids = Array.from(grid.children).filter(
            (c): c is HTMLElement =>
              c instanceof HTMLElement &&
              !c.classList.contains("pointer-events-none") &&
              !c.classList.contains("hk-marquee-track")
          );
          if (kids.length < 2 || kids.length > 16) return;

          kids.forEach((child, i) => {
            if (child.classList.contains("hk-stagger-child")) return;
            child.style.setProperty("--hk-stagger", `${Math.min(i, 12) * 70}ms`);
            child.classList.add("hk-stagger-child");
          });
        });
    };

    const scan = () => {
      applyStagger();
      document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);

        // CSS already excludes .hk-no-reveal from opacity:0 — do not mutate.
        if (el.classList.contains("hk-no-reveal")) {
          return;
        }

        // First fold: reveal immediately (still post-hydration via deferred boot).
        const rect = el.getBoundingClientRect();
        if (rect.top < 96 && rect.bottom > 0) {
          el.classList.add("hk-revealed");
          return;
        }

        observer.observe(el);
      });
    };

    const boot = () => {
      if (cancelled) return;
      document.documentElement.classList.add("hk-motion-on");
      scan();
      mo = new MutationObserver(() => {
        cancelAnimationFrame(raf);
        raf = requestAnimationFrame(scan);
      });
      mo.observe(document.body, { childList: true, subtree: true });
    };

    // Wait until streamed page segments finish hydrating before touching classes.
    const idleId =
      "requestIdleCallback" in window
        ? window.requestIdleCallback(() => boot(), { timeout: 300 })
        : setTimeout(() => boot(), 150);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      observer.disconnect();
      mo?.disconnect();
      if ("requestIdleCallback" in window) {
        window.cancelIdleCallback(idleId as number);
      } else {
        clearTimeout(idleId);
      }
    };
  }, [pathname]);

  return null;
}
