"use client";

import { pastEventsContent } from "@/data/events/past-events";
import { theme } from "@/config/theme";
import PastEventCard from "@/components/events/PastEventCard";

export default function PastEventsGallery() {
  const content = pastEventsContent;

  return (
    <main className="min-h-screen bg-white">
      <section className="hk-no-reveal relative bg-white pt-14 pb-4 sm:pt-16 sm:pb-6">
        <div className="content-container">
          <h1 className="text-center text-3xl font-bold tracking-tight text-[#0f1622] sm:text-4xl">
            Past{" "}
            <span style={{ color: theme.colors.secondary }}>Events</span>
          </h1>
        </div>
      </section>

      <section className="hk-no-reveal relative bg-white pb-14 pt-8 sm:pb-16 sm:pt-10 lg:pb-20">
        <div className="content-container">
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
            {content.events.map((event) => (
              <PastEventCard
                key={event.id}
                event={event}
                viewGalleryLabel={content.viewGalleryLabel}
                photoCountLabel={content.photoCountLabel}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
