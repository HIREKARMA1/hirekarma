"use client";

import { useEffect, useRef, useState, type TouchEvent } from "react";
import Link from "next/link";
import { CalendarDays, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import type { EventsPageItem } from "@/types/events-page";

function eventDate(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
}

export function UpcomingEventsCarousel({ events }: { events: EventsPageItem[] }) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => setIndex(0), [events.length]);
  useEffect(() => {
    if (events.length < 2) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % events.length), 6000);
    return () => window.clearInterval(timer);
  }, [events.length]);

  if (!events.length) return null;
  const event = events[index % events.length];
  const closed = event.status === "closed";
  const previous = () => setIndex((current) => (current - 1 + events.length) % events.length);
  const next = () => setIndex((current) => (current + 1) % events.length);
  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.changedTouches[0]?.clientX ?? null;
  };
  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null || events.length < 2) return;
    const endX = event.changedTouches[0]?.clientX;
    if (endX === undefined) return;
    const distance = endX - touchStartX.current;
    if (Math.abs(distance) > 48) {
      if (distance < 0) next();
      else previous();
    }
    touchStartX.current = null;
  };

  return (
    <section aria-label="Featured events" className="relative mx-auto w-full max-w-[1120px] pb-8">
      <div
        className="relative isolate aspect-[1.4/1] min-h-[255px] overflow-hidden rounded-[18px] bg-[#12213a] shadow-[0_18px_46px_rgba(27,58,112,.17)] [touch-action:pan-y] sm:aspect-[2.08/1] sm:min-h-[350px] sm:rounded-[20px]"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {event.banner_url ? (
          // Event banners come from Disha and may be remote URLs.
          // eslint-disable-next-line @next/next/no-img-element
          <img key={event.id} src={event.banner_url} alt="" className="absolute inset-0 z-0 h-full w-full object-cover object-center" />
        ) : null}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#050d1e]/90 via-[#071327]/25 to-[#071327]/10" />

        <div className="absolute left-3.5 top-3.5 z-20 sm:left-6 sm:top-6">
          <span className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold text-white shadow-sm ${closed ? "bg-slate-600/90" : "bg-[#1b52a4]/95"}`}>
            {closed ? "Event closed" : event.status === "live" ? "Happening now" : "Upcoming event"}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 z-20 px-4 pb-5 pt-20 text-white sm:px-7 sm:pb-8 sm:pt-32">
          <div className="mb-2 inline-flex items-center gap-1.5 rounded-full border border-white/50 bg-black/20 px-2.5 py-1 text-[10px] font-medium text-white/95 backdrop-blur-sm sm:text-[11px]">
            <CalendarDays className="h-3 w-3" />{eventDate(event.event_start_date)}
          </div>
          <h2 className="line-clamp-2 max-w-[680px] text-lg font-bold leading-tight tracking-tight sm:text-2xl lg:text-[28px]">{event.title}</h2>
          {event.venue ? (
            <p className="mt-2 flex max-w-[540px] items-center gap-1.5 text-[11px] text-white/85 sm:text-xs">
              <MapPin className="h-3.5 w-3.5 shrink-0 text-[#8db8ff]" /><span className="line-clamp-1">{event.venue}</span>
            </p>
          ) : null}
          <Link href={`/events/${event.slug}`} className="mt-3 inline-flex min-h-9 items-center rounded-full border border-white/50 bg-white/10 px-3.5 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#16438a] sm:mt-4 sm:text-xs">
            {closed ? "View event" : "Register now"}
          </Link>
        </div>
      </div>

      {events.length > 1 ? (
        <div aria-hidden="true" className="absolute bottom-8 left-1/2 z-20 h-10 w-[132px] -translate-x-1/2 rounded-t-[34px] bg-white sm:h-12 sm:w-[148px] sm:rounded-t-[38px]" />
      ) : null}
      {events.length > 1 ? (
        <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2.5 bg-transparent px-2 py-1">
          <button type="button" onClick={previous} aria-label="Previous event" className="grid h-10 w-10 place-items-center rounded-full border border-[#e7ebf2] bg-white text-[#0f1622] transition hover:border-[#1b52a4] hover:text-[#1b52a4] sm:h-9 sm:w-9">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button type="button" onClick={next} aria-label="Next event" className="grid h-10 w-10 place-items-center rounded-full border border-[#e7ebf2] bg-white text-[#0f1622] transition hover:border-[#1b52a4] hover:text-[#1b52a4] sm:h-9 sm:w-9">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      ) : null}
    </section>
  );
}
