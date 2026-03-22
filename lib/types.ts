export type IconName =
  | "alert"
  | "analytics"
  | "audit"
  | "control"
  | "dashboard"
  | "device"
  | "growth"
  | "maintenance"
  | "mobile"
  | "offline"
  | "organization"
  | "response"
  | "security"
  | "signal"
  | "trace";

export interface NavItem {
  label: string;
  href: string;
}

export interface HighlightBadge {
  label: string;
}

export interface ContentCard {
  title: string;
  description: string;
  icon: IconName;
}

export interface PlatformPillar extends ContentCard {
  supportingPoints: string[];
}

export interface PositioningPoint {
  title: string;
  description: string;
}

export interface ArchitectureLayer {
  title: string;
  description: string;
  points: string[];
}

export interface ArchitectureNarrative {
  title: string;
  description: string;
}
