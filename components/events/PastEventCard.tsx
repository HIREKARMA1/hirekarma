"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Camera, Images, MapPin, Video } from "lucide-react";

import type { PastEvent, PastEventBadgeTone } from "@/types/past-events";
import { theme } from "@/config/theme";

const BADGE_STYLES: Record<
  PastEventBadgeTone,
  { bg: string; icon: "camera" | "video" }
> = {
  purple: { bg: "#7c3aed", icon: "camera" },
  teal: { bg: "#0d9488", icon: "video" },
  blue: { bg: theme.colors.primary, icon: "camera" },
  orange: { bg: theme.colors.orange, icon: "camera" },
};

type PastEventCardProps = {
  event: PastEvent;
  viewGalleryLabel: string;
  photoCountLabel: string;
};

export default function PastEventCard({
  event,
  viewGalleryLabel,
  photoCountLabel,
}: PastEventCardProps) {
  const badge = BADGE_STYLES[event.badgeTone];
  const BadgeIcon = badge.icon === "video" ? Video : Camera;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#e6e8ec]/80 bg-white shadow-[0_6px_24px_rgba(15,22,34,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(15,22,34,0.1)]">
      <div className="relative h-[150px] w-full overflow-hidden sm:h-[160px]">
        <Image
          src={event.heroImage.src}
          alt={event.heroImage.alt}
          fill
          className="object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
          style={{ objectFit: "cover", objectPosition: "center center" }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        <span
          className="absolute left-2.5 top-2.5 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm"
          style={{ backgroundColor: badge.bg }}
        >
          <BadgeIcon className="h-3 w-3" aria-hidden />
          {event.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-3 sm:px-4 sm:pb-4">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[12px] text-[#64748b]">
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5 shrink-0 text-[#94a3b8]" />
            {event.date}
          </span>
          <span className="inline-flex items-center gap-1">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#94a3b8]" />
            {event.location}
          </span>
        </div>

        <h3 className="mt-2 line-clamp-2 text-[15px] font-bold leading-snug tracking-tight text-[#0f1622] sm:text-base">
          {event.title}
        </h3>

        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-[#64748b]">
          {event.description}
        </p>

        <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#eef1f5] pt-3 mt-3">
          <p className="inline-flex items-center gap-1 text-[12px] font-medium text-[#64748b]">
            <Images className="h-3.5 w-3.5 text-[#94a3b8]" aria-hidden />
            {event.photoCount} {photoCountLabel}
          </p>

          <Link
            href={`/events/past-gallery/${event.id}`}
            className="inline-flex items-center gap-1 rounded-full border border-[#00a2e5] bg-white px-3 py-1.5 text-[12px] font-semibold text-[#00a2e5] transition duration-300 hover:bg-[#00a2e5] hover:text-white"
          >
            {viewGalleryLabel}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}
