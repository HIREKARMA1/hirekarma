"use client";

import { useEffect } from "react";

const PRESS_TARGET =
  'button, [type="button"], [type="submit"], [role="button"], a[href], [data-hk-press]';

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/**
 * Smooth press feedback + ripple on interactive clicks.
 */
export function ClickMotion() {
  useEffect(() => {
    if (typeof window === "undefined" || prefersReducedMotion()) return;

    const onPointerDown = (event: PointerEvent) => {
      if (event.button !== 0) return;
      const target = (event.target as HTMLElement | null)?.closest(
        PRESS_TARGET
      ) as HTMLElement | null;
      if (!target) return;
      if (target.hasAttribute("disabled") || target.getAttribute("aria-disabled") === "true") {
        return;
      }

      target.classList.add("hk-pressed");

      // Ripple (skip tiny icon-only controls that are hard to place)
      const rect = target.getBoundingClientRect();
      if (rect.width >= 36 && rect.height >= 28) {
        const style = getComputedStyle(target);
        if (style.position === "static") {
          target.dataset.hkPosRestore = "1";
          target.style.position = "relative";
        }
        if (style.overflow === "visible") {
          target.dataset.hkOverflowRestore = "1";
          target.style.overflow = "hidden";
        }

        const ripple = document.createElement("span");
        ripple.className = "hk-ripple";
        const size = Math.max(rect.width, rect.height) * 1.15;
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        ripple.style.width = `${size}px`;
        ripple.style.height = `${size}px`;
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        target.appendChild(ripple);
        ripple.addEventListener("animationend", () => ripple.remove(), {
          once: true,
        });
      }
    };

    const onPointerUp = (event: PointerEvent) => {
      const target = (event.target as HTMLElement | null)?.closest(
        PRESS_TARGET
      ) as HTMLElement | null;
      target?.classList.remove("hk-pressed");
    };

    const onPointerCancel = () => {
      document.querySelectorAll(".hk-pressed").forEach((el) => {
        el.classList.remove("hk-pressed");
      });
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    document.addEventListener("pointerup", onPointerUp, true);
    document.addEventListener("pointercancel", onPointerCancel, true);
    document.addEventListener("pointerleave", onPointerCancel, true);

    return () => {
      document.removeEventListener("pointerdown", onPointerDown, true);
      document.removeEventListener("pointerup", onPointerUp, true);
      document.removeEventListener("pointercancel", onPointerCancel, true);
      document.removeEventListener("pointerleave", onPointerCancel, true);
    };
  }, []);

  return null;
}
