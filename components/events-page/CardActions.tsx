"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import styles from "./CardActions.module.css";

export function CardActions({
  detailHref,
  applyHref,
  detailLabel = "View details",
  applyLabel = "Apply",
  paired = false,
  showApply = true,
  registerDisabled = false,
  appearance = "default",
}: {
  detailHref: string;
  applyHref: string;
  detailLabel?: string;
  applyLabel?: string;
  paired?: boolean;
  showApply?: boolean;
  registerDisabled?: boolean;
  appearance?: "default" | "campusDrive" | "driveTicket";
}) {
  if (appearance === "driveTicket") {
    const showRegister = showApply;
    return (
      <div
        className={`${styles.dtActions}${showRegister ? "" : ` ${styles.dtActionsSingle}`}`}
      >
        {detailHref.startsWith("http") ? (
          <a
            href={detailHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dtView}
          >
            {detailLabel}
          </a>
        ) : (
          <Link href={detailHref} className={styles.dtView}>
            {detailLabel}
          </Link>
        )}
        {showRegister ? (
          registerDisabled ? (
            <button type="button" className={styles.dtRegister} disabled>
              {applyLabel}
            </button>
          ) : (
            <a
              href={applyHref}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.dtRegister}
            >
              {applyLabel}
            </a>
          )
        ) : null}
      </div>
    );
  }

  if (appearance === "campusDrive") {
    return (
      <div
        className={`${styles.dcActions}${showApply ? "" : ` ${styles.dcActionsSingle}`}`}
      >
        {detailHref.startsWith("http") ? (
          <a
            href={detailHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dcView}
          >
            {detailLabel}
          </a>
        ) : (
          <Link href={detailHref} className={styles.dcView}>
            {detailLabel}
          </Link>
        )}
        {showApply ? (
          <a
            href={applyHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.dcRegister}
          >
            {applyLabel}
          </a>
        ) : null}
      </div>
    );
  }

  const buttonClass = paired
    ? "inline-flex flex-1 items-center justify-center rounded-lg px-3 py-2 text-[13px] font-semibold"
    : "inline-flex items-center rounded-md px-3 py-1.5 text-[12px] font-semibold";

  return (
    <div className={`mt-auto flex gap-2 pt-3 ${paired ? "" : "flex-wrap"}`}>
      {detailHref.startsWith("http") ? (
        <a
          href={detailHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} border border-[#1b52a4] text-[#1b52a4] transition hover:bg-[#1b52a4]/5`}
        >
          {detailLabel}
        </a>
      ) : (
        <Link
          href={detailHref}
          className={`${buttonClass} border border-[#1b52a4] text-[#1b52a4] transition hover:bg-[#1b52a4]/5`}
        >
          {detailLabel}
        </Link>
      )}
      {showApply ? (
        <a
          href={applyHref}
          target="_blank"
          rel="noopener noreferrer"
          className={`${buttonClass} gap-1 bg-[#1b52a4] text-white transition hover:brightness-110`}
        >
          {applyLabel}
          {paired ? null : <ArrowUpRight className="h-3.5 w-3.5" />}
        </a>
      ) : null}
    </div>
  );
}
