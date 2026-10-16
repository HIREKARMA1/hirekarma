export type CampusDriveModeValue = "virtual" | "oncampus" | "walking";

const LABELS: Record<CampusDriveModeValue, string> = {
  virtual: "Virtual",
  oncampus: "Oncampus",
  walking: "Walk-in",
};

export function campusDriveModeValue(mode?: string | null): CampusDriveModeValue | "" {
  const value = (mode || "").trim().toLowerCase();
  if (value === "virtual" || value === "online") return "virtual";
  if (value === "oncampus" || value === "offline") return "oncampus";
  if (value === "walking" || value === "walk-in" || value === "walkin" || value === "walk_in") {
    return "walking";
  }
  return "";
}

export function campusDriveModeLabel(mode?: string | null): string | null {
  const value = campusDriveModeValue(mode);
  if (!value) return null;
  return LABELS[value];
}

export function campusDriveVenueFallback(mode?: string | null): string {
  const value = campusDriveModeValue(mode);
  if (value === "virtual") return "Virtual";
  if (value === "walking") return "Walk-in";
  return "On campus";
}
