export type Locale = "en" | "hi" | "od";

export interface DeliveredProjectItem {
  id: string;
  image: string;
  title: string;
  clientType: string;
  subtitle: string;
  description: string;
  href: string;
}

export interface DeliveredProjectsContent {
  heading: string;
  subheading: string;
  description: string;
  viewMore: string;
  viewProject: string;
  items: DeliveredProjectItem[];
}
