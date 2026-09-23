export type PastEventPhoto = {
  src: string;
  alt: string;
};

export type PastEventBadgeTone = "purple" | "teal" | "blue" | "orange";

export type PastEvent = {
  id: string;
  category: string;
  badgeTone: PastEventBadgeTone;
  title: string;
  date: string;
  location: string;
  /** Short summary shown on the event card */
  description: string;
  /** Full story shown in View Gallery (falls back to description) */
  body?: string;
  photoCount: number;
  heroImage: PastEventPhoto;
  gallery: PastEventPhoto[];
};

export type PastEventsContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  description: string;
  viewGalleryLabel: string;
  photoCountLabel: string;
  events: PastEvent[];
};
