import type { Locale } from "@/types/products-page";

export type { Locale };

export interface AboutMeta {
  title: string;
  description: string;
}

export interface AboutCta {
  label: string;
  href: string;
}

export interface AboutStoryHero {
  label: string;
  heading: string;
  description: string;
  primaryCta: AboutCta;
  secondaryCta: AboutCta;
  partnersNote: string;
  heroImageAlt: string;
  partnersImageAlt: string;
}

export interface AboutInfoCard {
  label: string;
  value: string;
  detail: string;
}

export interface AboutStoryJourney {
  title: string;
  subtitle: string;
  beforeFounded: string;
  founded: string;
  afterFoundedBeforeFounder1: string;
  founder1: string;
  betweenFounders: string;
  founder2: string;
  afterFounders: string;
  foundedCard: AboutInfoCard;
  focusCard: AboutInfoCard;
  imageAlt: string;
}

export interface AboutStoryChallenge {
  title: string;
  subtitle: string;
  beforeHighlight1: string;
  highlight1: string;
  betweenHighlights: string;
  highlight2: string;
  afterHighlights: string;
  imageAlt: string;
}

export interface AboutStorySolution {
  title: string;
  subtitle: string;
  beforeHighlight1: string;
  highlight1: string;
  betweenHighlights: string;
  highlight2: string;
  afterHighlights: string;
  imageAlt: string;
}

export interface AboutStoryContent {
  hero: AboutStoryHero;
  journey: AboutStoryJourney;
  challenge: AboutStoryChallenge;
  solution: AboutStorySolution;
}

export interface AboutMissionBlock {
  title: string;
  subtitle: string;
  body: string;
  imageAlt: string;
}

export interface AboutMissionContent {
  mission: AboutMissionBlock;
  vision: AboutMissionBlock;
  values: AboutMissionBlock;
}

export interface AboutPeopleTabs {
  advisory: string;
  leadership: string;
  core: string;
}

export interface AboutCultureValue {
  id: "inclusive" | "innovative" | "collaborative";
  title: string;
  description: string;
}

export interface AboutPeopleCulture {
  title: string;
  subtitle: string;
  description: string;
  values: AboutCultureValue[];
  imageAlts: {
    collaboration: string;
    celebration: string;
    festival: string;
    workspace: string;
  };
}

export interface AboutPeopleContent {
  title: string;
  subtitle: string;
  descriptionBefore: string;
  descriptionHighlight: string;
  descriptionAfter: string;
  tabs: AboutPeopleTabs;
  loading: string;
  emptyTitle: string;
  emptyDescription: string;
  closeAria: string;
  viewDetailsAria: string;
  linkedinAria: string;
  instagramAria: string;
  emailAria: string;
  culture: AboutPeopleCulture;
}

export interface AboutCommonContent {
  animationNotSupported: string;
  browserNoImagePlayback: string;
}

export interface AboutPageContent {
  meta: {
    story: AboutMeta;
    mission: AboutMeta;
    people: AboutMeta;
  };
  story: AboutStoryContent;
  mission: AboutMissionContent;
  people: AboutPeopleContent;
  common: AboutCommonContent;
}

export interface LocalizedText {
  en: string;
  hi: string;
  od: string;
}

export type TeamCategory = "leadership" | "core" | "advisory";

export interface TeamMember {
  name: LocalizedText;
  role: LocalizedText;
  category: TeamCategory;
  image: string;
  description: LocalizedText;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}

export interface ResolvedTeamMember {
  name: string;
  role: string;
  category: TeamCategory;
  image: string;
  description: string;
  socialLinks: {
    linkedin?: string;
    instagram?: string;
    email?: string;
  };
}
