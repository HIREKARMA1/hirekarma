"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { EventUiStatus } from "@/types/events-page";

import styles from "./CampusDriveListingCard.module.css";

export function driveDateParts(iso?: string) {
  if (!iso?.trim()) return null;
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return null;
  const day = String(date.getDate()).padStart(2, "0");
  const month = date
    .toLocaleDateString("en-GB", { month: "short" })
    .replace(".", "")
    .toUpperCase();
  const year = String(date.getFullYear());
  return { day, month, year };
}

function posterInitial(title: string) {
  const t = title.trim();
  return t ? t.charAt(0).toUpperCase() : "H";
}

export function CampusDriveListingCard({
  brandName,
  title,
  companyLine,
  description,
  imageSrc,
  imageAlt,
  dateIso,
  locationLabel,
  locationTooltip,
  timeLabel,
  modeLabel,
  status,
  detailHref,
  detailLabel = "View Event Details",
}: {
  brandName?: string;
  title: string;
  companyLine?: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  dateIso?: string;
  locationLabel?: string;
  locationTooltip?: string;
  timeLabel?: string;
  modeLabel?: string;
  status?: EventUiStatus | null;
  detailHref: string;
  applyHref?: string;
  detailLabel?: string;
  applyLabel?: string;
  paired?: boolean;
  showApply?: boolean;
}) {
  const [imgFailed, setImgFailed] = useState(false);
  const showImg = Boolean(imageSrc?.trim()) && !imgFailed;
  const dateParts = driveDateParts(dateIso);
  const dateAria = dateParts
    ? `Drive date ${dateParts.day} ${dateParts.month} ${dateParts.year}`
    : undefined;

  const locationText = locationLabel?.trim() ?? "";
  const modeText = modeLabel?.trim() ?? "";
  const showLocation =
    Boolean(locationText) &&
    locationText.toLowerCase() !== modeText.toLowerCase();
  const copy = description?.trim() || companyLine?.trim() || "";

  const details = (
    <>
      {detailLabel}
      <ArrowRight className={styles.detailsIcon} aria-hidden />
    </>
  );

  return (
    <article className={styles.row}>
      <div className={styles.date} aria-label={dateAria}>
        {dateParts ? (
          <>
            <span className={styles.month}>{dateParts.month}</span>
            <span className={styles.day}>{dateParts.day}</span>
          </>
        ) : (
          <>
            <span className={styles.month}>—</span>
            <span className={styles.day}>—</span>
          </>
        )}
      </div>

      <div className={styles.thumb}>
        {showImg ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={imageSrc}
            alt={imageAlt || `${title} poster`}
            onError={() => setImgFailed(true)}
          />
        ) : (
          <div className={styles.thumbPlaceholder} aria-hidden>
            {posterInitial(brandName || title)}
          </div>
        )}
      </div>

      <div className={styles.body}>
        <h2>{title}</h2>
        {showLocation || timeLabel || modeText ? (
          <p className={styles.meta}>
            {showLocation ? (
              <span title={locationTooltip || locationText}>{locationText}</span>
            ) : modeText ? (
              <span>{modeText}</span>
            ) : null}
            {timeLabel ? <span>{timeLabel}</span> : null}
          </p>
        ) : null}
        {copy ? <p className={styles.copy}>{copy}</p> : null}
        {status === "closed" ? (
          <p className={styles.closedNote}>Registration is closed</p>
        ) : null}
        {detailHref.startsWith("http") ? (
          <a
            href={detailHref}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.details}
          >
            {details}
          </a>
        ) : (
          <Link href={detailHref} className={styles.details}>
            {details}
          </Link>
        )}
      </div>
    </article>
  );
}
