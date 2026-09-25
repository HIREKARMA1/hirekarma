export type EventMode = "online" | "offline" | "hybrid";
export type EventUiStatus = "live" | "open" | "closed";

/** Same field names as Disha public events — Part B can swap this list for the API. */
export interface EventsPageItem {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  short_description: string;
  banner_url: string;
  organizer_name?: string;
  mode: EventMode;
  venue?: string;
  event_start_date: string;
  status: EventUiStatus;
}

export interface CampusDriveItem {
  id: string;
  title: string;
  company_name: string;
  location?: string;
  description: string;
  company_logo: string;
  campus_drive_date?: string;
  visit_href: string;
  salary_min?: string;
  salary_max?: string;
  salary_currency?: string;
  ctc_with_probation?: string;
  ctc_after_probation?: string;
  job_type?: string;
  mode_of_work?: string;
}

export interface EventsPageContent {
  meta: {
    title: string;
    description: string;
  };
  hero: {
    label: string;
    heading: string;
    headingAccent: string;
    description: string;
    searchPlaceholder?: string;
  };
  visitLabel: string;
  campusDrives: {
    label: string;
    heading: string;
    headingAccent: string;
    description: string;
  };
  events: EventsPageItem[];
  liveCampusDrives: CampusDriveItem[];
}
