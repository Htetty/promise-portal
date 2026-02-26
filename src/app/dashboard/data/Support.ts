export type SupportLevel = "High" | "Medium" | "Low" | "Pathways High" | "Pathways Medium" | "Pathways Low";

export interface SupportItem {
  src: string;
  alt: string;
  counselor: number;
  peo: number;
}

export const SUPPORT_DATA: Record<SupportLevel, SupportItem> = {
  High: {
    src: "/Support/High.jpg",
    alt: "High Support",
    counselor: 3,
    peo: 2,
  },
  Medium: {
    src: "/Support/Medium.jpg",
    alt: "Medium Support",
    counselor: 2,
    peo: 2,
  },
  Low: {
    src: "/Support/Low.jpg",
    alt: "Low Support",
    counselor: 2,
    peo: 0,
  },
  "Pathways High": {
    src: "/Support/Pathways - High.jpg",
    alt: "Pathways High Support",
    counselor: 3,
    peo: 1,
  },
  "Pathways Medium": {
    src: "/Support/Pathways - Medium.jpg",
    alt: "Pathways Medium Support",
    counselor: 2,
    peo: 1,
  },
  "Pathways Low": {
    src: "/Support/Pathways - Low.jpg",
    alt: "Pathways Low Support",
    counselor: 2,
    peo: 0,
  },
};
