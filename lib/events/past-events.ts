import { pastEventsContent } from "@/data/events/past-events";
import type { PastEvent } from "@/types/past-events";

export function getPastEvents(): PastEvent[] {
  return pastEventsContent.events;
}

export function getPastEventById(id: string): PastEvent | undefined {
  return pastEventsContent.events.find((event) => event.id === id);
}

export function getPastEventIds(): string[] {
  return pastEventsContent.events.map((event) => event.id);
}
