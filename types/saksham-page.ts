export type Locale = "en" | "hi" | "od";

export interface SakshamMeta {
  title: string;
  description: string;
}

export interface SakshamHero {
  title: string;
  titleHighlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface SakshamProblemItem {
  id: string;
  icon: "book-open" | "brain" | "briefcase";
  title: string;
  description: string;
}

export interface SakshamProblem {
  title: string;
  titleHighlight: string;
  items: SakshamProblemItem[];
}

export interface SakshamSolutionItem {
  id: string;
  icon:
    | "upload"
    | "briefcase"
    | "graduation-cap"
    | "bar-chart"
    | "book-open"
    | "user-check";
  title: string;
  description: string;
}

export interface SakshamSolution {
  title: string;
  titleHighlight: string;
  description: string;
  cta: string;
  items: SakshamSolutionItem[];
}

export interface SakshamJourneyStep {
  id: string;
  step: number;
  icon:
    | "upload"
    | "briefcase"
    | "graduation-cap"
    | "bar-chart"
    | "book-open"
    | "line-chart"
    | "user-check";
  title: string;
  description: string;
}

export interface SakshamJourney {
  title: string;
  titleHighlight: string;
  description: string;
  steps: SakshamJourneyStep[];
}

export interface SakshamAdvantageItem {
  id: string;
  icon: "brain" | "line-chart" | "zap";
  title: string;
  description: string;
}

export interface SakshamAdvantages {
  titleBefore: string;
  titleHighlight: string;
  titleAfter: string;
  description: string;
  items: SakshamAdvantageItem[];
}

export interface SakshamAnalyticsSkill {
  skill: string;
  score: number;
}

export interface SakshamAnalyticsWeek {
  week: string;
  readiness: number;
}

export interface SakshamAnalytics {
  headingBefore: string;
  headingHighlight: string;
  headingAfter: string;
  description: string;
  readinessLabel: string;
  readinessSuffix: string;
  readinessImprovedBefore: string;
  readinessImprovedAfter: string;
  skillsTitle: string;
  timelineTitle: string;
  microcopyTopSkill: string;
  microcopyNeedsFocus: string;
  readiness: number;
  improvement: number;
  skills: SakshamAnalyticsSkill[];
  progressTimeline: SakshamAnalyticsWeek[];
  topSkill: string;
  needsFocus: string;
}

export interface SakshamCta {
  titleBefore: string;
  titleHighlight: string;
  description: string;
  primaryCta: string;
  secondaryCta: string;
}

export interface SakshamPageContent {
  meta: SakshamMeta;
  hero: SakshamHero;
  problem: SakshamProblem;
  solution: SakshamSolution;
  journey: SakshamJourney;
  advantages: SakshamAdvantages;
  analytics: SakshamAnalytics;
  cta: SakshamCta;
}
