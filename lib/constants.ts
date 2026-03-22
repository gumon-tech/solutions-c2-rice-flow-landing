import type {
  ArchitectureLayer,
  ArchitectureNarrative,
  ContentCard,
  HighlightBadge,
  NavItem,
  PlatformPillar,
  PositioningPoint,
} from "@/lib/types";

export const navigationItems: NavItem[] = [
  { label: "Solution", href: "/solution" },
  { label: "Features", href: "/features" },
  { label: "Architecture", href: "/architecture" },
  { label: "Contact", href: "/contact" },
];

export const heroHighlights: HighlightBadge[] = [
  { label: "Offline-first" },
  { label: "Security-first" },
  { label: "Mobile-first" },
];

export const problemCards: ContentCard[] = [
  {
    title: "Manual Measurement Loops",
    description:
      "Moisture checks depend on manual handling, fragmented instruments, and inconsistent operator routines.",
    icon: "signal",
  },
  {
    title: "Chat-based Coordination",
    description:
      "Critical field updates are often shared as messages or photos, creating ambiguity and response delays.",
    icon: "mobile",
  },
  {
    title: "Broken Data Continuity",
    description:
      "Operational data does not flow into a trusted system of record, making trends and thresholds harder to manage.",
    icon: "analytics",
  },
  {
    title: "Limited Traceability",
    description:
      "Historical verification is difficult when events, actions, and evidence are scattered across tools and teams.",
    icon: "audit",
  },
  {
    title: "Slow Incident Response",
    description:
      "Without structured alerting and workflows, teams react late and operational decisions lose precision.",
    icon: "response",
  },
  {
    title: "Revenue at Risk",
    description:
      "Poor moisture control impacts product quality, net weight, margin protection, and management confidence.",
    icon: "growth",
  },
];

export const valueCards: ContentCard[] = [
  {
    title: "Continuous Visibility",
    description:
      "See current conditions, exceptions, and historical context across sites from one operational view.",
    icon: "dashboard",
  },
  {
    title: "Faster Response",
    description:
      "Move from passive monitoring to alert-driven action with clearer ownership and response timing.",
    icon: "alert",
  },
  {
    title: "Better Control",
    description:
      "Combine live telemetry, thresholds, and policy-aware workflows to support safer operational decisions.",
    icon: "control",
  },
  {
    title: "Auditability & Traceability",
    description:
      "Keep decisions, incidents, and activity history connected for verification, review, and governance.",
    icon: "trace",
  },
  {
    title: "Preventive Maintenance Readiness",
    description:
      "Bring device health, service cycles, and operational evidence together to reduce hidden downtime.",
    icon: "maintenance",
  },
  {
    title: "Platform-ready Growth",
    description:
      "Prepare for multi-site, multi-organization, subscription, and partner-led expansion on the same foundation.",
    icon: "organization",
  },
];

export const platformPillars: PlatformPillar[] = [
  {
    title: "Web Application",
    description:
      "A management layer for configuration, governance, oversight, reporting, and organization-level control.",
    icon: "dashboard",
    supportingPoints: [
      "Executive overview and operational status",
      "Rules, alerts, user access, and reporting",
      "Audit, governance, and asset visibility",
    ],
  },
  {
    title: "Mobile Application",
    description:
      "A field-first experience built for fast reading, fast action, and resilient use under limited connectivity.",
    icon: "mobile",
    supportingPoints: [
      "Alert review and response workflows",
      "Task execution, evidence capture, and history",
      "Secure mobile operations with offline readiness",
    ],
  },
  {
    title: "Dashboard / Control Room",
    description:
      "A high-clarity operational display for supervisors and leadership to monitor system-wide readiness in real time.",
    icon: "analytics",
    supportingPoints: [
      "Large-screen visibility and trend views",
      "Cross-site comparison and incident monitoring",
      "Action-oriented telemetry and health signals",
    ],
  },
];

export const capabilityCards: ContentCard[] = [
  {
    title: "Moisture Monitoring",
    description: "Track moisture conditions continuously with context-rich telemetry and status visibility.",
    icon: "signal",
  },
  {
    title: "Threshold & Alert Engine",
    description: "Define thresholds, rules, and escalations that reflect operational policy and site realities.",
    icon: "alert",
  },
  {
    title: "Incident / Response Workflow",
    description: "Capture events, assign actions, and move incidents through structured operational handling.",
    icon: "response",
  },
  {
    title: "Device & Sensor Visibility",
    description: "Keep a dependable view of assets, sensor status, connectivity, and device identity.",
    icon: "device",
  },
  {
    title: "Maintenance & Service",
    description: "Support preventive service planning, technician workflows, and maintenance evidence.",
    icon: "maintenance",
  },
  {
    title: "Reports & Export",
    description: "Generate structured outputs for management review, compliance, and downstream analysis.",
    icon: "analytics",
  },
  {
    title: "Audit Trail",
    description: "Record actions, decisions, and changes so the operational story can be reviewed with confidence.",
    icon: "audit",
  },
  {
    title: "Multi-organization Access Control",
    description: "Scale across organizations, sites, and teams with hierarchical visibility and role-aware access.",
    icon: "organization",
  },
];

export const principleCards: ContentCard[] = [
  {
    title: "Offline-first",
    description: "Designed for continuity even when field connectivity is unstable or intermittent.",
    icon: "offline",
  },
  {
    title: "Security-first",
    description: "Protect identity, access, data flow, and operational integrity from the start.",
    icon: "security",
  },
  {
    title: "Human-in-the-loop Control",
    description: "Keep critical decisions accountable with structured oversight and guided action.",
    icon: "control",
  },
  {
    title: "Mobile-first Operation",
    description: "Prioritize the speed and usability required for real field execution, not just office screens.",
    icon: "mobile",
  },
  {
    title: "Data-centric Architecture",
    description: "Turn field signals into context-rich operational data that can support decisions over time.",
    icon: "analytics",
  },
  {
    title: "Event-driven & Alert-driven",
    description: "Structure the platform around important events so teams know what needs attention now.",
    icon: "alert",
  },
  {
    title: "Configurable & Scalable",
    description: "Support different policies, sites, and growth paths without rebuilding the core product.",
    icon: "growth",
  },
  {
    title: "Future-ready",
    description: "Lay the groundwork for platform business models, partner operations, and broader industrial use cases.",
    icon: "organization",
  },
];

export const positioningPoints: PositioningPoint[] = [
  {
    title: "Built from operational pain, not abstract theory",
    description:
      "Rice Flow starts from real-site friction around moisture control, delayed responses, fragmented communication, and weak traceability.",
  },
  {
    title: "More than monitoring",
    description:
      "The platform connects telemetry, alerts, actions, users, maintenance, and audit history into one operating model.",
  },
  {
    title: "Designed for multi-site growth",
    description:
      "It is structured to support many devices, many sites, many teams, and many organizations without losing control.",
  },
  {
    title: "Security aligned with enterprise expectations",
    description:
      "The architecture is grounded in security-by-design so the system can serve as dependable business infrastructure.",
  },
];

export const footerLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Solution Overview", href: "/solution" },
  { label: "Core Capabilities", href: "/features" },
  { label: "Architecture", href: "/architecture" },
  { label: "Request Demo", href: "/contact" },
];

export const architectureLayers: ArchitectureLayer[] = [
  {
    title: "Field Device Layer",
    description:
      "Sensors and edge-connected devices capture operational readings and equipment state at the source.",
    points: [
      "Moisture telemetry and machine-adjacent signals",
      "Device identity and onboardable asset footprint",
      "Designed to reflect operational reality at site level",
    ],
  },
  {
    title: "Edge, Connectivity & Ingestion",
    description:
      "The platform is shaped to tolerate unstable connectivity while preserving continuity of important signals.",
    points: [
      "Offline-first handling for constrained environments",
      "Secure telemetry ingestion and transport boundaries",
      "Event continuity between local context and central systems",
    ],
  },
  {
    title: "Platform Core",
    description:
      "Central services manage current state, history, rules, incidents, maintenance workflows, and governance.",
    points: [
      "Thresholds, alerting, and escalation logic",
      "Historical storage, audit records, and reporting",
      "Multi-organization, policy-aware operational services",
    ],
  },
  {
    title: "Application Experience Layer",
    description:
      "Web, mobile, and control room experiences expose the same trusted operational context for different roles.",
    points: [
      "Management workflows and configuration on web",
      "Field response and evidence capture on mobile",
      "Cross-site visibility and telemetry clarity on dashboard views",
    ],
  },
];

export const architectureNarratives: ArchitectureNarrative[] = [
  {
    title: "Continuity under constrained connectivity",
    description:
      "The platform is shaped for sites where reliable network conditions cannot be assumed, helping teams preserve important operational context instead of losing it between the field and the control layer.",
  },
  {
    title: "Secure boundaries for operational trust",
    description:
      "Security-by-design is applied to identity, access, data handling, and operational actions so the system can serve as dependable enterprise infrastructure.",
  },
  {
    title: "Scalable separation of concerns",
    description:
      "The architecture keeps ingestion, rules, workflows, governance, and user experience layers distinct so the product can evolve without turning into a fragile custom stack.",
  },
];

export const solutionNarratives: PositioningPoint[] = [
  {
    title: "From sensor reading to operational consequence",
    description:
      "Rice Flow frames moisture as a business-critical signal linked to quality, revenue protection, and execution timing.",
  },
  {
    title: "From fragmented updates to coordinated action",
    description:
      "Instead of relying on photos, messages, and memory, the platform turns important events into visible workflows.",
  },
  {
    title: "From single-site tooling to strategic infrastructure",
    description:
      "The same architecture supports site growth, enterprise governance, partner collaboration, and recurring platform services.",
  },
];
