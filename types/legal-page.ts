export type Locale = "en" | "hi" | "od";

export interface LegalListItem {
  label?: string;
  text: string;
}

export interface LegalSubsection {
  title: string;
  text: string;
}

export interface LegalSection {
  id: string;
  title: string;
  paragraphs?: string[];
  subsections?: LegalSubsection[];
  intro?: string;
  listItems?: LegalListItem[];
  outro?: string;
  contactEmailLabel?: string;
  contactEmail?: string;
  companyName?: string;
  addressLabel?: string;
  address?: string;
}

export interface LegalDocument {
  title: string;
  lastUpdatedLabel: string;
  lastUpdated: string;
  sections: LegalSection[];
}

export interface LegalPageContent {
  privacy: LegalDocument;
  terms: LegalDocument;
}
