"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";

import styles from "./CampusDriveLandingHero.module.css";

const PORTRAITS = [
  { id: "9th", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/9th.png" },
  { id: "8th", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/8th.png" },
  { id: "7th", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/7th.png" },
  { id: "6th", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/6th.png" },
  { id: "5th", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/5th.png" },
  { id: "4th", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/4th.png" },
  { id: "3rd", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/3rd.png" },
  { id: "2nd", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/2nd.png" },
  { id: "1st", imageSrc: "https://disha-ui.s3.ap-south-1.amazonaws.com/campus_drive_logo/1st.png" },
] as const;

const FEATURES = [
  {
    title: "Live Campus Drives",
    copy: "See open hiring visits, roles, and dates in one place so students never miss a campus opportunity.",
  },
  {
    title: "Apply & Register",
    copy: "Register for drives that are open today and continue the application on Disha in a few steps.",
  },
  {
    title: "Track Every Visit",
    copy: "Filter by mode and date to follow live, upcoming, and closed drives without losing the thread.",
  },
];

function PortraitCard({
  imageSrc,
}: {
  imageSrc?: string;
}) {
  return (
    <div className={styles.card}>
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.photo} src={imageSrc} alt="" />
      ) : null}
    </div>
  );
}

function PortraitSet() {
  return (
    <div className={styles.set}>
      {PORTRAITS.map((portrait) => (
        <PortraitCard
          key={portrait.id}
          imageSrc={portrait.imageSrc}
        />
      ))}
    </div>
  );
}

function PortraitGallery() {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const applyFan = () => {
      const bounds = wrap.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const span = Math.max(bounds.width * 0.46, 1);
      const cards = wrap.querySelectorAll<HTMLElement>(`.${styles.card}`);

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const t = (rect.left + rect.width / 2 - centerX) / span;
        const x = Math.max(-1.35, Math.min(1.35, t));
        const abs = Math.abs(x);
        const rotateY = x * 46;
        const rotateZ = x * -5.5;
        const scale = 0.78 + abs * 0.34;
        const lift = (1 - abs) * 28;

        card.style.transform = `translateY(${lift}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;
        card.style.opacity = String(abs > 1.05 ? Math.max(0.35, 1.35 - abs) : 1);
      });
    };

    const tick = () => {
      applyFan();
      frame = window.requestAnimationFrame(tick);
    };

    applyFan();
    if (!reduced) frame = window.requestAnimationFrame(tick);

    window.addEventListener("resize", applyFan);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", applyFan);
    };
  }, []);

  return (
    <div className={styles.galleryWrap} ref={wrapRef}>
      <div className={styles.track} aria-hidden>
        <PortraitSet />
        <PortraitSet />
      </div>
      <div className={`${styles.edgeFade} ${styles.edgeFadeLeft}`} />
      <div className={`${styles.edgeFade} ${styles.edgeFadeRight}`} />
      <svg
        className={styles.curve}
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          d="M0 70C280 18 520 0 720 8C980 18 1220 58 1440 92V160H0V70Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}

export function CampusDriveLandingHero({
  listingHref = "#campus-drive-listing",
}: {
  listingHref?: string;
}) {
  return (
    <section className={styles.hero} aria-labelledby="campus-drive-hero-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <h1 id="campus-drive-hero-title" className={styles.title}>
            Discover Campus Drives,
            <br />
            Supercharge Your Career
          </h1>
          <p className={styles.subtitle}>
            Browse live and upcoming campus hiring — apply faster,
            <br />
            track smarter, and land the role that fits.
          </p>
          <a className={styles.cta} href={listingHref}>
            Browse campus drives
            <ArrowRight className={styles.ctaIcon} aria-hidden />
          </a>
        </div>
      </div>

      <PortraitGallery />

      <div className={styles.features}>
        {FEATURES.map((feature) => (
          <article key={feature.title} className={styles.feature}>
            <h2 className={styles.featureTitle}>{feature.title}</h2>
            <p className={styles.featureCopy}>{feature.copy}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
