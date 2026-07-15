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
  headingHighlight?: string;
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
  titleHighlight?: string;
  panelTitle?: string;
  panelTitleHighlight?: string;
  subtitle: string;
  beforeFounded: string;
  founded: string;
  afterFoundedBeforeFounder1: string;
  founder1: string;
  betweenFounders: string;
  founder2: string;
  afterFounders: string;
  closing?: string;
  foundedCard: AboutInfoCard;
  focusCard: AboutInfoCard;
  imageAlt: string;
}

export interface AboutStoryChallenge {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  /** Short self-contained body for compact panel layouts. */
  summary?: string;
  beforeHighlight1: string;
  highlight1: string;
  betweenHighlights: string;
  highlight2: string;
  afterHighlights: string;
  imageAlt: string;
}

export interface AboutStorySolution {
  title: string;
  titleHighlight?: string;
  subtitle: string;
  /** Short self-contained body for compact panel layouts. */
  summary?: string;
  beforeHighlight1: string;
  highlight1: string;
  betweenHighlights: string;
  highlight2: string;
  afterHighlights: string;
  imageAlt: string;
}

export interface AboutStoryStat {
  label: string;
  value: string;
  detail: string;
}

export interface AboutStoryTimelineItem {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface AboutStoryTimeline {
  label: string;
  heading: string;
  headingHighlight?: string;
  description?: string;
  items: AboutStoryTimelineItem[];
}

export interface AboutStoryCta {
  title: string;
  titleHighlight?: string;
  description: string;
  primary: AboutCta;
  secondary?: AboutCta;
}

export interface AboutStoryContent {
  hero: AboutStoryHero;
  journey: AboutStoryJourney;
  challenge: AboutStoryChallenge;
  solution: AboutStorySolution;
  stats?: AboutStoryStat[];
  timeline?: AboutStoryTimeline;
  cta?: AboutStoryCta;
}

export interface AboutMissionBlock {
  title: string;
  subtitle: string;
  body: string;
  imageAlt: string;
}

export interface AboutMissionHero {
  label: string;
  heading: string;
  headingHighlight: string;
  description: string;
  primaryCta: AboutCta;
  secondaryCta: AboutCta;
  tagline: string;
}

export interface AboutMissionCta {
  title: string;
  description: string;
  button: AboutCta;
}

export interface AboutMissionContent {
  hero: AboutMissionHero;
  mission: AboutMissionBlock;
  vision: AboutMissionBlock;
  values: AboutMissionBlock;
  cta: AboutMissionCta;
}

export type LeadershipBadgeTone =
  | "blue"
  | "sky"
  | "orange"
  | "green"
  | "yellow"
  | "red";

export interface AboutPeopleHero {
  label: string;
  heading: string;
  headingHighlight: string;
  description: string;
  primaryCta: AboutCta;
  secondaryCta: AboutCta;
  tagline: string;
}

export interface AboutPhilosophyPillar {
  id: "ownership" | "collaboration" | "impact";
  title: string;
  description: string;
}

export interface AboutPeoplePhilosophy {
  label: string;
  title: string;
  pillars: AboutPhilosophyPillar[];
}

export interface AboutOpenRole {
  id: string;
  title: string;
  description: string;
}

export interface AboutPeopleOpenRoles {
  label: string;
  title: string;
  description: string;
  roles: AboutOpenRole[];
}

export interface AboutPeopleCta {
  title: string;
  description: string;
  button: AboutCta;
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
  hero: AboutPeopleHero;
  partnersNote: string;
  partnersImageAlt: string;
  philosophy: AboutPeoplePhilosophy;
  teamLabel: string;
  tabs: AboutPeopleTabs;
  loading: string;
  emptyTitle: string;
  emptyDescription: string;
  culture: AboutPeopleCulture;
  openRoles: AboutPeopleOpenRoles;
  cta: AboutPeopleCta;
  linkedinAria: string;
  instagramAria: string;
  emailAria: string;
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
    locations: AboutMeta;
  };
  story: AboutStoryContent;
  mission: AboutMissionContent;
  people: AboutPeopleContent;
  locations: AboutLocationsContent;
  common: AboutCommonContent;
}

export interface AboutLocationPin {
  id: string;
  city: string;
  role: string;
  /** Approximate position on Odisha map visual (percent) */
  x: number;
  y: number;
}

export interface AboutLocationPillar {
  id: string;
  title: string;
  description: string;
}

export interface AboutOfficeCard {
  id: string;
  badge: string;
  badgeTone: "primary" | "green" | "secondary";
  city: string;
  role: string;
  description: string;
  address: string;
  whyTitle: string;
  whyBody: string;
  image: string;
  imageAlt: string;
}

export interface AboutLocationsContent {
  hero: {
    label: string;
    headingLine1: string;
    headingLine1Highlight: string;
    headingLine2: string;
    headingLine2Highlight: string;
    description: string;
    primaryCta: AboutCta;
    secondaryCta: AboutCta;
    tagline: string;
  };
  map: {
    ariaLabel: string;
    pins: AboutLocationPin[];
  };
  section: {
    label: string;
    heading: string;
  };
  pillars: AboutLocationPillar[];
  offices: AboutOfficeCard[];
  cta: AboutMissionCta;
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
