import type {
  ArchitectureLayer,
  ArchitectureNarrative,
  ContentCard,
  NavItem,
  PlatformPillar,
  PositioningPoint,
} from "@/lib/types";
import type { Locale } from "@/lib/i18n";

interface IntroContent {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: {
    label: string;
    href: string;
  };
  secondaryCta?: {
    label: string;
    href: string;
  };
}

interface SectionCopy {
  eyebrow: string;
  title: string;
  description: string;
}

interface ContactFormCopy {
  labels: {
    fullName: string;
    workEmail: string;
    company: string;
    interestArea: string;
    goals: string;
  };
  placeholders: {
    fullName: string;
    workEmail: string;
    company: string;
    goals: string;
  };
  interestOptions: string[];
  selectPlaceholder: string;
  submitIdle: string;
  submitPending: string;
}

export interface SiteDictionary {
  metadata: {
    siteTitle: string;
    siteDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    twitterTitle: string;
    twitterDescription: string;
  };
  brand: {
    name: string;
    platformLabel: string;
  };
  navigation: NavItem[];
  footerLinks: NavItem[];
  header: {
    requestDemoLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
  };
  hero: {
    kicker: string;
    title: string;
    summary: string;
    outcomes: string[];
    primaryCta: string;
    secondaryCta: string;
    secondaryCtaHref: string;
    ctaHint: string;
    keyPoints: ContentCard[];
  };
  productPreview: {
    eyebrow: string;
    title: string;
    badge: string;
    annotations: Array<{ title: string; description: string }>;
    stats: Array<{ label: string; value: string; description: string }>;
    alt: string;
  };
  sections: {
    problem: SectionCopy;
    value: SectionCopy;
    platform: SectionCopy;
    capabilities: SectionCopy;
    principles: SectionCopy;
    why: SectionCopy;
    solutionOverview: SectionCopy;
    architectureLayers: SectionCopy;
    architectureOutcomes: SectionCopy;
    architectureFlow: SectionCopy;
    cta: {
      eyebrow: string;
      title: string;
      description: string;
      primaryCta: string;
      secondaryCta: string;
    };
    contact: {
      eyebrow: string;
      title: string;
      description: string;
      emailLabel: string;
      discussionLabel: string;
      discussionValue: string;
    };
  };
  pages: {
    home: {
      title: string;
      description: string;
    };
    solution: IntroContent & { metadataTitle: string; metadataDescription: string };
    features: IntroContent & { metadataTitle: string; metadataDescription: string };
    architecture: IntroContent & { metadataTitle: string; metadataDescription: string };
    contact: IntroContent & { metadataTitle: string; metadataDescription: string };
  };
  form: ContactFormCopy;
  messages: {
    contactSuccess: string;
    contactErrorSummary: string;
    validation: {
      fullName: string;
      workEmail: string;
      company: string;
      interestArea: string;
      goals: string;
    };
  };
  footer: {
    description: string;
    quickLinksLabel: string;
    contactLabel: string;
    contactEmail: string;
    contactDescription: string;
    copyright: string;
  };
  problemCards: ContentCard[];
  valueCards: ContentCard[];
  platformPillars: PlatformPillar[];
  capabilityCards: ContentCard[];
  principleCards: ContentCard[];
  positioningPoints: PositioningPoint[];
  architectureLayers: ArchitectureLayer[];
  architectureNarratives: ArchitectureNarrative[];
  solutionNarratives: PositioningPoint[];
  architectureFlowSteps: Array<{ title: string; description: string }>;
}

const en: SiteDictionary = {
  metadata: {
    siteTitle: "Rice Flow | Measure Right. Control Smart. Scale with Confidence.",
    siteDescription:
      "Rice Flow is a secure digital operations platform for rice mills, combining IoT signals, alert-driven workflows, traceable operations, and scalable multi-site management.",
    keywords: [
      "Rice Flow",
      "rice mill platform",
      "industrial IoT",
      "moisture monitoring",
      "operations platform",
      "enterprise SaaS",
    ],
    ogTitle: "Rice Flow",
    ogDescription:
      "A modern operations platform for rice mills, from moisture control and incident response to multi-site and multi-organization scale.",
    twitterTitle: "Rice Flow",
    twitterDescription:
      "A secure operational platform for modern rice mill management.",
  },
  brand: {
    name: "Rice Flow",
    platformLabel: "C2 TECH COMPANY LIMITED",
  },
  navigation: [
    { label: "Solution", href: "/solution" },
    { label: "Features", href: "/features" },
    { label: "Architecture", href: "/architecture" },
    { label: "Contact", href: "/contact" },
  ],
  footerLinks: [
    { label: "Home", href: "/" },
    { label: "Solution Overview", href: "/solution" },
    { label: "Core Capabilities", href: "/features" },
    { label: "Architecture", href: "/architecture" },
    { label: "Request Demo", href: "/contact" },
  ],
  header: {
    requestDemoLabel: "Request Demo",
    openMenuLabel: "Open navigation menu",
    closeMenuLabel: "Close navigation menu",
  },
  hero: {
    kicker: "Built for modern rice mill operations",
    title: "Measure moisture with confidence.\nRespond faster across every rice mill site.",
    summary:
      "Rice Flow helps rice mill teams turn field signals into operational clarity, faster response, and stronger cross-site control through one connected system for monitoring, alerts, and oversight.",
    outcomes: [
      "Detect moisture anomalies before they affect drying, storage, or outbound quality.",
      "Cut response time with assigned alerts and clear escalation ownership.",
      "Monitor every site, device, and critical workflow from one supervisory view.",
    ],
    primaryCta: "See Live Demo",
    secondaryCta: "Explore Platform",
    secondaryCtaHref: "/solution",
    ctaHint: "See how Rice Flow turns live field signals into alerts, ownership, and multi-site visibility in one guided walkthrough.",
    keyPoints: [
      {
        icon: "signal",
        title: "Real-time monitoring",
        description: "Track moisture, alerts, and signal health without waiting for manual reports.",
      },
      {
        icon: "response",
        title: "Faster incident response",
        description: "Route abnormal conditions to the right operator before downtime spreads.",
      },
      {
        icon: "organization",
        title: "Multi-site visibility",
        description: "See line-level issues and mill-wide status in one enterprise-ready view.",
      },
    ],
  },
  productPreview: {
    eyebrow: "Operational Preview",
    title: "Rice Flow Control Center",
    badge: "Live Operations",
    annotations: [
      {
        title: "Real-time monitoring",
        description: "See moisture, signal quality, and shift patterns in one operational view.",
      },
      {
        title: "Anomaly detection",
        description: "Surface abnormal dryer and site conditions fast, with clear response ownership.",
      },
      {
        title: "Multi-site visibility",
        description: "Compare sites, alerts, and readiness without switching between tools.",
      },
    ],
    stats: [
      {
        label: "Signal Integrity",
        value: "98.4%",
        description: "Reliable field signal coverage",
      },
      {
        label: "Active Alerts",
        value: "03",
        description: "Escalated with response ownership",
      },
      {
        label: "Organizations",
        value: "12",
        description: "Ready for multi-site scale",
      },
    ],
    alt: "Rice Flow dashboard placeholder visual",
  },
  sections: {
    problem: {
      eyebrow: "Current friction",
      title: "Why many rice mill teams still struggle to act with confidence",
      description:
        "The challenge is not only how moisture is measured. It is how fragmented data, communication, and decision-making reduce control across daily operations.",
    },
    value: {
      eyebrow: "Value proposition",
      title: "A platform that improves visibility, control, and operational readiness",
      description:
        "Rice Flow treats field signals as the starting point for a stronger operating model. Teams gain better visibility, faster response paths, stronger governance, and a foundation built to scale.",
    },
    platform: {
      eyebrow: "Platform overview",
      title: "Three coordinated experiences, one operational system",
      description:
        "Rice Flow combines management control, field execution, and large-screen visibility so different users can work from the same trusted operational context.",
    },
    capabilities: {
      eyebrow: "Core capabilities",
      title: "Built for mission-critical operational workflows",
      description:
        "The platform connects field signals, user actions, device oversight, and management accountability without turning the experience into a bloated control panel.",
    },
    principles: {
      eyebrow: "Design principles",
      title: "Operationally grounded, enterprise-ready by design",
      description:
        "The platform is shaped by field reality, governance needs, resilience, and long-term scalability rather than dashboard aesthetics alone.",
    },
    why: {
      eyebrow: "Why Rice Flow",
      title: "Positioned as an operational platform, not just a monitoring tool",
      description:
        "Rice Flow is built to become trusted digital infrastructure for rice mill operations, with the depth to support field execution, enterprise control, and long-term growth.",
    },
    solutionOverview: {
      eyebrow: "Solution framing",
      title: "Built to improve how rice mills operate, not only what they measure",
      description:
        "Moisture control is where the business impact becomes visible first. But Rice Flow is designed to improve visibility, response, governance, and scale across the wider operating model.",
    },
    architectureLayers: {
      eyebrow: "System architecture",
      title: "A layered architecture built for resilience and scale",
      description:
        "Rice Flow separates field capture, ingestion, platform services, and user experiences so the platform stays dependable in the field and extensible as requirements grow.",
    },
    architectureOutcomes: {
      eyebrow: "Architecture outcomes",
      title: "Designed to support both field reality and management accountability",
      description:
        "The architecture is not only about technical separation. It is designed to preserve data continuity, support controlled action, and keep the platform adaptable as operations mature.",
    },
    architectureFlow: {
      eyebrow: "Data flow concept",
      title: "From field signal to governed operational action",
      description:
        "Rice Flow treats data flow as part of the operating model. Readings should not stop at display; they should support action, escalation, and reliable historical review.",
    },
    cta: {
      eyebrow: "Next step",
      title: "Bring more control to rice mill operations with trusted data.",
      description:
        "Talk with the Rice Flow team about how the platform can support moisture control, field response, device visibility, and enterprise-ready operations across your sites.",
      primaryCta: "Request a Demo",
      secondaryCta: "Email Sales",
    },
    contact: {
      eyebrow: "Contact the team",
      title: "Start a conversation about operational improvement.",
      description:
        "Speak with the team about operational visibility, alert handling, solution fit, and how Rice Flow can support deployment across sites and stakeholders.",
      emailLabel: "Email",
      discussionLabel: "Discussion focus",
      discussionValue:
        "Demo request, solution fit, architecture review, and rollout planning",
    },
  },
  pages: {
    home: {
      title: "Rice Flow",
      description:
        "A modern operations platform for rice mills, from moisture control to incident response and multi-organization scale.",
    },
    solution: {
      metadataTitle: "Rice Flow Solution | Operational Platform for Rice Mills",
      metadataDescription:
        "Explore how Rice Flow extends moisture monitoring into a broader platform for visibility, control, and scalable rice mill operations.",
      eyebrow: "Solution",
      title: "A digital operations layer for rice mills that need clarity, control, and room to grow",
      description:
        "Rice Flow begins with accurate moisture-related decision support, then extends that value by connecting telemetry, alerting, workflows, maintenance, and governance into one scalable platform.",
      primaryCta: { label: "Request Demo", href: "/contact" },
      secondaryCta: { label: "View Architecture", href: "/architecture" },
    },
    features: {
      metadataTitle: "Rice Flow Features | Capabilities for Field and Management Operations",
      metadataDescription:
        "Explore Rice Flow capabilities for moisture monitoring, alerting, incident response, maintenance, reporting, and multi-organization control.",
      eyebrow: "Features",
      title: "Capabilities designed around operational action, not passive dashboards",
      description:
        "The platform is designed to help rice mill teams see what matters, respond with accountability, and manage growth across sites, devices, and organizations.",
      primaryCta: { label: "Talk to Sales", href: "/contact" },
      secondaryCta: { label: "Back to Home", href: "/" },
    },
    architecture: {
      metadataTitle: "Rice Flow Architecture | Secure, Offline-first, Scalable Platform Design",
      metadataDescription:
        "Understand Rice Flow architecture across field devices, secure ingestion, platform services, and web, mobile, and dashboard experiences.",
      eyebrow: "Architecture",
      title: "Layered for field resilience, secure governance, and enterprise expansion",
      description:
        "Rice Flow bridges field operations and centralized oversight. Its architecture is designed for continuity under real site constraints while supporting auditability, policy control, and future commercial models.",
      primaryCta: { label: "Request Architecture Review", href: "/contact" },
      secondaryCta: { label: "Explore Features", href: "/features" },
    },
    contact: {
      metadataTitle: "Contact Rice Flow | Request Demo and Enterprise Consultation",
      metadataDescription:
        "Contact the Rice Flow team to request a demo, discuss solution fit, review architecture, or plan the next rollout step.",
      eyebrow: "Contact",
      title: "Bring your operational challenges into a structured solution discussion",
      description:
        "Start a conversation about your sites, operational pain points, and how a secure digital platform can support measurable improvement.",
      primaryCta: { label: "Back to Home", href: "/" },
      secondaryCta: { label: "View Solution", href: "/solution" },
    },
  },
  form: {
    labels: {
      fullName: "Full name",
      workEmail: "Work email",
      company: "Company",
      interestArea: "Interest area",
      goals: "What are you trying to improve?",
    },
    placeholders: {
      fullName: "Your name",
      workEmail: "name@company.com",
      company: "Organization or site group",
      goals: "Describe current operational pain points, sites, teams, or goals.",
    },
    interestOptions: [
      "Operational visibility",
      "Field response workflow",
      "Architecture and integration",
      "Partner or platform model",
    ],
    selectPlaceholder: "Select one",
    submitIdle: "Request Demo",
    submitPending: "Sending...",
  },
  messages: {
    contactSuccess:
      "Thank you for your interest. Our team will be in touch shortly to arrange the next step.",
    contactErrorSummary: "Please review the highlighted fields and try again.",
    validation: {
      fullName: "Please enter your full name.",
      workEmail: "Please enter a valid work email.",
      company: "Please enter your company or organization.",
      interestArea: "Please choose an area of interest.",
      goals: "Please share a bit more detail about your operational goals.",
    },
  },
  footer: {
    description:
      "A secure, scalable platform for modern rice mill operations, from field signals to response, maintenance, and executive visibility.",
    quickLinksLabel: "Quick links",
    contactLabel: "Contact",
    contactEmail: "hello@riceflow.app",
    contactDescription: "Operated by C2 TECH COMPANY LIMITED",
    copyright: "© 2026 Rice Flow. All rights reserved.",
  },
  problemCards: [
    {
      title: "Manual Measurement Loops",
      description:
        "Moisture checks still depend on manual steps, disconnected instruments, and inconsistent operator routines.",
      icon: "signal",
    },
    {
      title: "Chat-based Coordination",
      description:
        "Critical field updates are often shared through chats and photos, creating ambiguity and slowing down response.",
      icon: "mobile",
    },
    {
      title: "Broken Data Continuity",
      description:
        "Operational data does not flow into a trusted system of record, making trends, thresholds, and exceptions harder to manage.",
      icon: "analytics",
    },
    {
      title: "Limited Traceability",
      description:
        "Historical verification becomes difficult when events, actions, and evidence are scattered across tools and teams.",
      icon: "audit",
    },
    {
      title: "Slow Incident Response",
      description:
        "Without structured alerting and workflows, teams respond late and operational decisions lose precision.",
      icon: "response",
    },
    {
      title: "Revenue at Risk",
      description:
        "Weak moisture control affects product quality, net weight, margin protection, and management confidence.",
      icon: "growth",
    },
  ],
  valueCards: [
    {
      title: "Continuous Visibility",
      description:
        "See current conditions, exceptions, and historical context across sites in one operational view.",
      icon: "dashboard",
    },
    {
      title: "Faster Response",
      description:
        "Move from passive monitoring to alert-driven action with clearer ownership and faster response timing.",
      icon: "alert",
    },
    {
      title: "Better Control",
      description:
        "Combine live telemetry, thresholds, and policy-aware workflows to support more disciplined decisions.",
      icon: "control",
    },
    {
      title: "Auditability & Traceability",
      description:
        "Keep decisions, incidents, and activity history connected for review, verification, and governance.",
      icon: "trace",
    },
    {
      title: "Preventive Maintenance Readiness",
      description:
        "Bring device health, service cycles, and operational evidence together to reduce avoidable downtime.",
      icon: "maintenance",
    },
    {
      title: "Platform-ready Growth",
      description:
        "Prepare for multi-site, multi-organization, subscription, and partner-led growth on the same foundation.",
      icon: "organization",
    },
  ],
  platformPillars: [
    {
      title: "Web Application",
      description:
        "A management workspace for configuration, governance, oversight, reporting, and organization-level control.",
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
        "A field-first experience designed for quick reading, fast action, and resilient use under limited connectivity.",
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
  ],
  capabilityCards: [
    {
      title: "Moisture Monitoring",
      description:
        "Track moisture conditions continuously with context-rich telemetry and operational visibility.",
      icon: "signal",
    },
    {
      title: "Threshold & Alert Engine",
      description:
        "Define thresholds, rules, and escalations that reflect operational policy and site realities.",
      icon: "alert",
    },
    {
      title: "Incident / Response Workflow",
      description:
        "Capture events, assign actions, and move incidents through structured operational handling.",
      icon: "response",
    },
    {
      title: "Device & Sensor Visibility",
      description:
        "Keep a dependable view of assets, sensor status, connectivity, and device identity.",
      icon: "device",
    },
    {
      title: "Maintenance & Service",
      description:
        "Support preventive service planning, technician workflows, and maintenance records.",
      icon: "maintenance",
    },
    {
      title: "Reports & Export",
      description:
        "Generate structured outputs for management review, compliance, and downstream analysis.",
      icon: "analytics",
    },
    {
      title: "Audit Trail",
      description:
        "Record actions, decisions, and changes so the operational story can be reviewed with confidence.",
      icon: "audit",
    },
    {
      title: "Multi-organization Access Control",
      description:
        "Scale across organizations, sites, and teams with hierarchical visibility and role-based access.",
      icon: "organization",
    },
  ],
  principleCards: [
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
      description:
        "Prioritize the speed and usability required for real field execution, not just office screens.",
      icon: "mobile",
    },
    {
      title: "Data-centric Architecture",
      description:
        "Turn field signals into context-rich operational data that can support decisions over time.",
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
      description:
        "Lay the groundwork for platform business models, partner operations, and broader industrial use cases.",
      icon: "organization",
    },
  ],
  positioningPoints: [
    {
      title: "Built from operational pain, not abstract theory",
      description:
        "Rice Flow starts from real operational friction around moisture control, delayed response, fragmented communication, and weak traceability.",
    },
    {
      title: "More than monitoring",
      description:
        "The platform connects telemetry, alerts, actions, users, maintenance, and audit history within one operating model.",
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
  ],
  architectureLayers: [
    {
      title: "Field Device Layer",
      description:
        "Sensors and edge-connected devices capture operational readings and equipment status at the source.",
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
        "Central services manage current state, historical records, rules, incidents, maintenance workflows, and governance.",
      points: [
        "Thresholds, alerting, and escalation logic",
        "Historical storage, audit records, and reporting",
        "Multi-organization, policy-aware operational services",
      ],
    },
    {
      title: "Application Experience Layer",
      description:
        "Web, mobile, and control room experiences expose the same trusted operational context to different roles.",
      points: [
        "Management workflows and configuration on web",
        "Field response and evidence capture on mobile",
        "Cross-site visibility and telemetry clarity on dashboard views",
      ],
    },
  ],
  architectureNarratives: [
    {
      title: "Continuity under constrained connectivity",
      description:
        "The platform is designed for sites where reliable network conditions cannot be assumed, helping teams preserve important operational context between the field and the control layer.",
    },
    {
      title: "Secure boundaries for operational trust",
      description:
        "Security-by-design is applied to identity, access, data handling, and operational actions so the system can serve as dependable enterprise infrastructure.",
    },
    {
      title: "Scalable separation of concerns",
      description:
        "The architecture keeps ingestion, rules, workflows, governance, and user experience layers distinct so the platform can evolve without becoming a fragile custom stack.",
    },
  ],
  solutionNarratives: [
    {
      title: "From sensor reading to operational consequence",
      description:
        "Rice Flow frames moisture as a business-critical signal linked to quality, revenue protection, and execution timing.",
    },
    {
      title: "From fragmented updates to coordinated action",
      description:
        "Instead of relying on photos, messages, and memory, the platform turns important events into structured, visible workflows.",
    },
    {
      title: "From single-site tooling to strategic infrastructure",
      description:
        "The same architecture supports site growth, enterprise governance, partner collaboration, and recurring platform services.",
    },
  ],
  architectureFlowSteps: [
    {
      title: "Capture",
      description:
        "Field devices produce telemetry and machine-adjacent signals tied to real operational context.",
    },
    {
      title: "Ingest",
      description:
        "Signals move through secure ingestion boundaries designed for continuity and operational trust.",
    },
    {
      title: "Evaluate",
      description:
        "Rules, thresholds, and alert logic turn raw readings into actionable operational states.",
    },
    {
      title: "Respond",
      description:
        "Teams review incidents, take action, record evidence, and maintain accountability through workflows.",
    },
    {
      title: "Govern",
      description:
        "Historical records, audit logs, device visibility, and reporting keep management decisions verifiable.",
    },
  ],
};

const th: SiteDictionary = {
  ...en,
  metadata: {
    siteTitle: "Rice Flow | วัดแม่น ควบคุมฉลาด ขยายได้อย่างมั่นใจ",
    siteDescription:
      "Rice Flow คือแพลตฟอร์มดิจิทัลสำหรับบริหารจัดการโรงสีข้าว ที่เชื่อมข้อมูล IoT เข้ากับการมองเห็นสถานะ การแจ้งเตือน การตอบสนอง และการขยายหลายไซต์อย่างเป็นระบบ",
    keywords: [
      "Rice Flow",
      "แพลตฟอร์มโรงสีข้าว",
      "อุตสาหกรรม IoT",
      "ติดตามความชื้น",
      "ระบบปฏิบัติการโรงสี",
      "enterprise SaaS",
    ],
    ogTitle: "Rice Flow",
    ogDescription:
      "แพลตฟอร์มปฏิบัติการสมัยใหม่สำหรับโรงสีข้าว ตั้งแต่การควบคุมความชื้น การตอบสนองเหตุการณ์ ไปจนถึงการขยายหลายไซต์และหลายองค์กร",
    twitterTitle: "Rice Flow",
    twitterDescription:
      "แพลตฟอร์มปฏิบัติการที่ปลอดภัยและพร้อมขยายสำหรับโรงสีข้าวยุคใหม่",
  },
  brand: {
    name: "Rice Flow",
    platformLabel: "C2 TECH COMPANY LIMITED",
  },
  navigation: [
    { label: "โซลูชัน", href: "/solution" },
    { label: "ความสามารถ", href: "/features" },
    { label: "สถาปัตยกรรม", href: "/architecture" },
    { label: "ติดต่อ", href: "/contact" },
  ],
  footerLinks: [
    { label: "หน้าแรก", href: "/" },
    { label: "ภาพรวมโซลูชัน", href: "/solution" },
    { label: "ความสามารถหลัก", href: "/features" },
    { label: "สถาปัตยกรรม", href: "/architecture" },
    { label: "ขอนัด Demo", href: "/contact" },
  ],
  header: {
    requestDemoLabel: "ขอนัด Demo",
    openMenuLabel: "เปิดเมนูนำทาง",
    closeMenuLabel: "ปิดเมนูนำทาง",
  },
  hero: {
    kicker: "ออกแบบมาสำหรับการปฏิบัติการของโรงสีข้าวยุคใหม่",
    title: "วัดความชื้นได้อย่างมั่นใจ\nตอบสนองได้เร็วขึ้นในทุกไซต์ของโรงสีข้าว",
    summary:
      "Rice Flow ช่วยให้ทีมโรงสีข้าวเปลี่ยนข้อมูลจากหน้างานให้กลายเป็นความชัดเจนในการปฏิบัติการ การตอบสนองที่รวดเร็วขึ้น และการควบคุมข้ามหลายไซต์ผ่านระบบเดียวสำหรับการมอนิเตอร์ การแจ้งเตือน และการกำกับดูแล",
    outcomes: [
      "ตรวจจับความผิดปกติของความชื้นก่อนกระทบการอบ การจัดเก็บ และคุณภาพการส่งมอบ",
      "ลดเวลาการตอบสนองด้วยการแจ้งเตือนที่มีผู้รับผิดชอบและลำดับ escalation ชัดเจน",
      "มองเห็นทุกไซต์ ทุกอุปกรณ์ และ workflow สำคัญจากมุมมองกำกับดูแลเดียว",
    ],
    primaryCta: "ดู Demo แบบ Live",
    secondaryCta: "สำรวจแพลตฟอร์ม",
    secondaryCtaHref: "/solution",
    ctaHint: "ดูการทำงานจริงของการแจ้งเตือนแบบสด การมอบหมายผู้รับผิดชอบ และการมองเห็นหลายไซต์ใน walkthrough เดียว",
    keyPoints: [
      {
        icon: "signal",
        title: "ติดตามสถานะแบบเรียลไทม์",
        description: "ติดตามความชื้น การแจ้งเตือน และคุณภาพสัญญาณได้โดยไม่ต้องรอรายงานจากหน้างาน",
      },
      {
        icon: "response",
        title: "ตอบสนองเหตุการณ์ได้เร็วขึ้น",
        description: "ส่งต่อเหตุผิดปกติให้คนที่ใช่ได้ทันที ก่อนลุกลามเป็น downtime ที่กระทบการผลิต",
      },
      {
        icon: "organization",
        title: "มองเห็นหลายไซต์ในภาพเดียว",
        description: "เห็นปัญหาระดับไลน์ผลิตและภาพรวมหลายโรงสีในมุมมองเดียวที่พร้อมใช้จริงระดับองค์กร",
      },
    ],
  },
  productPreview: {
    eyebrow: "ตัวอย่างมุมมองปฏิบัติการ",
    title: "ศูนย์ควบคุม Rice Flow",
    badge: "ข้อมูลสดจากหน้างาน",
    annotations: [
      {
        title: "ติดตามสถานะแบบเรียลไทม์",
        description: "เห็นความชื้น คุณภาพสัญญาณ และแนวโน้มการทำงานจากมุมมองเดียวแบบสด",
      },
      {
        title: "ตรวจจับความผิดปกติ",
        description: "ดันเหตุผิดปกติของ Dryer และแต่ละไซต์ขึ้นมาให้ทีมตอบสนองได้ทันที",
      },
      {
        title: "มองเห็นหลายไซต์ในภาพเดียว",
        description: "เปรียบเทียบสถานะหลายไซต์ การแจ้งเตือน และความพร้อมของระบบได้โดยไม่ต้องสลับเครื่องมือ",
      },
    ],
    stats: [
      {
        label: "ความสมบูรณ์ของสัญญาณ",
        value: "98.4%",
        description: "ความครอบคลุมของข้อมูลจากหน้างาน",
      },
      {
        label: "การแจ้งเตือนที่กำลังดำเนินการ",
        value: "03",
        description: "มีผู้รับผิดชอบและลำดับการตอบสนองชัดเจน",
      },
      {
        label: "องค์กรที่รองรับ",
        value: "12",
        description: "พร้อมสำหรับการขยายหลายไซต์",
      },
    ],
    alt: "ภาพตัวอย่างแดชบอร์ด Rice Flow",
  },
  sections: {
    problem: {
      eyebrow: "ปัญหาปัจจุบัน",
      title: "ทำไมทีมโรงสีข้าวจึงยังตัดสินใจได้ไม่มั่นใจเท่าที่ควร",
      description:
        "ปัญหาไม่ได้อยู่แค่วัดความชื้นอย่างไร แต่คือข้อมูล การสื่อสาร และการตัดสินใจที่ยังแยกส่วน จนทำให้การควบคุมงานประจำวันขาดความต่อเนื่อง",
    },
    value: {
      eyebrow: "คุณค่าที่ได้รับ",
      title: "แพลตฟอร์มที่ยกระดับการมองเห็น การควบคุม และความพร้อมในการเติบโต",
      description:
        "Rice Flow มองข้อมูลจากหน้างานเป็นจุดเริ่มต้นของระบบการทำงานที่แข็งแรงขึ้น ช่วยให้ทีมเห็นภาพชัดขึ้น ตอบสนองเร็วขึ้น ควบคุมได้ดีขึ้น และรองรับการเติบโตในอนาคต",
    },
    platform: {
      eyebrow: "ภาพรวมแพลตฟอร์ม",
      title: "สามประสบการณ์การใช้งานที่เชื่อมกันเป็นระบบเดียว",
      description:
        "Rice Flow ผสานการบริหารจัดการ การทำงานภาคสนาม และมุมมองแบบ Control Room เพื่อให้ผู้ใช้แต่ละบทบาททำงานบนบริบทข้อมูลเดียวกัน",
    },
    capabilities: {
      eyebrow: "ความสามารถหลัก",
      title: "ออกแบบมาสำหรับ workflow ปฏิบัติการที่สำคัญต่อธุรกิจ",
      description:
        "ชุดความสามารถถูกออกแบบให้เชื่อมข้อมูลภาคสนาม การลงมือปฏิบัติ การดูแลอุปกรณ์ และความรับผิดชอบในการบริหารเข้าด้วยกัน โดยไม่ทำให้ประสบการณ์ใช้งานซับซ้อนเกินจำเป็น",
    },
    principles: {
      eyebrow: "หลักการออกแบบ",
      title: "ยึดความจริงของหน้างาน และพร้อมใช้ในระดับองค์กร",
      description:
        "แพลตฟอร์มนี้ถูกออกแบบจากข้อจำกัดจริงของหน้างาน ความต้องการด้าน governance ความทนทานของระบบ และการขยายผลิตภัณฑ์ในระยะยาว",
    },
    why: {
      eyebrow: "Why Rice Flow",
      title: "ถูกวางตำแหน่งเป็นแพลตฟอร์มปฏิบัติการ ไม่ใช่แค่เครื่องมือเฝ้าดูสถานะ",
      description:
        "Rice Flow ถูกออกแบบให้เป็นโครงสร้างพื้นฐานดิจิทัลที่องค์กรเชื่อถือได้ ทั้งในมิติการใช้งานจริง การกำกับดูแล และการเติบโตเชิงธุรกิจ",
    },
    solutionOverview: {
      eyebrow: "กรอบของโซลูชัน",
      title: "ออกแบบมาเพื่อยกระดับการดำเนินงานของโรงสี ไม่ใช่แค่วัดค่าได้มากขึ้น",
      description:
        "เรื่องความชื้นคือจุดเริ่มต้นที่เห็นผลกระทบทางธุรกิจชัดเจน แต่ตัวแพลตฟอร์มถูกออกแบบมาเพื่อยกระดับการมองเห็นสถานะ การตอบสนอง การกำกับดูแล และความสามารถในการเติบโตของทั้งระบบ",
    },
    architectureLayers: {
      eyebrow: "สถาปัตยกรรมระบบ",
      title: "โครงสร้างแบบเป็นชั้นที่บาลานซ์ทั้งความทนทานและการขยายระบบ",
      description:
        "Rice Flow แยกส่วนรับข้อมูลจากหน้างาน การนำข้อมูลเข้าสู่ระบบ บริการแกนกลาง และประสบการณ์ผู้ใช้ออกจากกัน เพื่อให้ระบบทำงานได้จริงในหน้างานและเติบโตได้ในระดับองค์กร",
    },
    architectureOutcomes: {
      eyebrow: "ผลลัพธ์เชิงสถาปัตยกรรม",
      title: "รองรับทั้งความจริงของหน้างานและความต้องการด้านการกำกับดูแล",
      description:
        "สถาปัตยกรรมไม่ได้ถูกออกแบบเพื่อความสวยงามทางเทคนิคเท่านั้น แต่เพื่อคงความต่อเนื่องของข้อมูล การควบคุมที่มีวินัย และการต่อยอดธุรกิจในระยะยาว",
    },
    architectureFlow: {
      eyebrow: "แนวคิดการไหลของข้อมูล",
      title: "จากสัญญาณภาคสนามสู่การตัดสินใจที่ตรวจสอบได้",
      description:
        "Rice Flow มอง data flow เป็นความรับผิดชอบเชิงปฏิบัติการ ไม่ใช่แค่การแสดงผลบนหน้าจอ แต่ต้องต่อยอดไปสู่ action, escalation และการตรวจสอบย้อนหลังได้จริง",
    },
    cta: {
      eyebrow: "ขั้นตอนถัดไป",
      title: "ยกระดับการควบคุมโรงสีข้าวด้วยข้อมูลที่เชื่อถือได้",
      description:
        "พูดคุยกับทีม Rice Flow ว่าแพลตฟอร์มนี้จะช่วยเรื่องการควบคุมความชื้น การตอบสนองหน้างาน การมองเห็นอุปกรณ์ และการขยายระบบระดับองค์กรได้อย่างไร",
      primaryCta: "ขอนัด Demo",
      secondaryCta: "อีเมลถึงทีมขาย",
    },
    contact: {
      eyebrow: "ติดต่อทีมงาน",
      title: "เริ่มต้นบทสนทนาเรื่องการยกระดับการดำเนินงาน",
      description:
        "พูดคุยกับทีมงานเรื่องการมองเห็นสถานะ การจัดการการแจ้งเตือน ความเหมาะสมของโซลูชัน และแนวทางการใช้งานในระดับองค์กร",
      emailLabel: "อีเมล",
      discussionLabel: "หัวข้อที่พูดคุยได้",
      discussionValue:
        "ขอ demo, ประเมินความเหมาะสมของโซลูชัน, ทบทวนสถาปัตยกรรม และวางแผนการใช้งานจริง",
    },
  },
  pages: {
    home: {
      title: "Rice Flow",
      description:
        "แพลตฟอร์มปฏิบัติการสมัยใหม่สำหรับโรงสีข้าว ตั้งแต่การควบคุมความชื้นไปจนถึงการตอบสนองเหตุการณ์และการขยายหลายองค์กร",
    },
    solution: {
      metadataTitle: "Rice Flow Solution | แพลตฟอร์มปฏิบัติการสำหรับโรงสีข้าว",
      metadataDescription:
        "สำรวจว่า Rice Flow เปลี่ยนการติดตามความชื้นให้กลายเป็นแพลตฟอร์มสำหรับการมองเห็นสถานะ การควบคุม และการบริหารจัดการโรงสีที่ขยายได้อย่างไร",
      eyebrow: "โซลูชัน",
      title: "เลเยอร์ดิจิทัลสำหรับโรงสีข้าวที่ต้องการความชัดเจน การควบคุม และการเติบโตอย่างเป็นระบบ",
      description:
        "Rice Flow เริ่มจากการช่วยตัดสินใจเรื่องความชื้นอย่างแม่นยำ แต่คุณค่าที่แท้จริงอยู่ที่การเชื่อมข้อมูลจากหน้างาน การแจ้งเตือน ขั้นตอนการทำงาน งานบำรุงรักษา และการกำกับดูแลไว้ในระบบเดียว",
      primaryCta: { label: "ขอนัด Demo", href: "/contact" },
      secondaryCta: { label: "ดูสถาปัตยกรรม", href: "/architecture" },
    },
    features: {
      metadataTitle: "Rice Flow Features | ความสามารถสำหรับงานภาคสนามและการบริหารจัดการ",
      metadataDescription:
        "ดูความสามารถของ Rice Flow สำหรับการติดตามความชื้น การแจ้งเตือน การตอบสนองต่อเหตุการณ์ งานบำรุงรักษา รายงาน และการกำกับดูแลหลายองค์กร",
      eyebrow: "ความสามารถ",
      title: "ความสามารถที่ออกแบบจาก action จริง ไม่ใช่แดชบอร์ดที่เอาไว้ดูอย่างเดียว",
      description:
        "ชุดความสามารถของแพลตฟอร์มถูกออกแบบเพื่อช่วยให้ทีมงานเห็นสิ่งสำคัญ ตอบสนองอย่างมีความรับผิดชอบ และควบคุมการเติบโตของระบบข้ามไซต์และข้ามองค์กร",
      primaryCta: { label: "คุยกับทีมขาย", href: "/contact" },
      secondaryCta: { label: "กลับหน้าแรก", href: "/" },
    },
    architecture: {
      metadataTitle: "Rice Flow Architecture | ออกแบบให้ปลอดภัย รองรับ Offline-first และขยายได้",
      metadataDescription:
        "ทำความเข้าใจสถาปัตยกรรมของ Rice Flow ตั้งแต่อุปกรณ์ภาคสนาม การรับข้อมูลอย่างปลอดภัย บริการแกนกลาง ไปจนถึง web, mobile และ dashboard",
      eyebrow: "สถาปัตยกรรม",
      title: "ออกแบบเป็นชั้นเพื่อรองรับหน้างานจริง ความปลอดภัย และการเติบโตระดับองค์กร",
      description:
        "Rice Flow เชื่อมโลกของหน้างานกับการบริหารแบบรวมศูนย์ โดยออกแบบให้คงความต่อเนื่องภายใต้ข้อจำกัดจริง พร้อมรองรับ auditability, policy control และการต่อยอดทางธุรกิจในระยะยาว",
      primaryCta: { label: "ขอคุยเรื่อง Architecture", href: "/contact" },
      secondaryCta: { label: "ดูความสามารถ", href: "/features" },
    },
    contact: {
      metadataTitle: "Contact Rice Flow | ขอนัด Demo และปรึกษาโซลูชัน",
      metadataDescription:
        "ติดต่อทีม Rice Flow เพื่อขอ demo พูดคุยความเหมาะสมของโซลูชัน ทบทวนสถาปัตยกรรม หรือปรึกษาแนวทางความร่วมมือ",
      eyebrow: "ติดต่อ",
      title: "ชวนคุยโจทย์การดำเนินงานของคุณอย่างเป็นระบบ",
      description:
        "เริ่มต้นบทสนทนากับทีมงานเกี่ยวกับไซต์งาน ปัญหาปฏิบัติการ และแนวทางที่แพลตฟอร์มดิจิทัลแบบปลอดภัยจะช่วยยกระดับผลลัพธ์ได้จริง",
      primaryCta: { label: "กลับหน้าแรก", href: "/" },
      secondaryCta: { label: "ดูโซลูชัน", href: "/solution" },
    },
  },
  form: {
    labels: {
      fullName: "ชื่อ-นามสกุล",
      workEmail: "อีเมลองค์กร",
      company: "บริษัทหรือองค์กร",
      interestArea: "เรื่องที่สนใจ",
      goals: "ต้องการยกระดับเรื่องใด",
    },
    placeholders: {
      fullName: "ชื่อของคุณ",
      workEmail: "name@company.com",
      company: "ชื่อองค์กรหรือกลุ่มไซต์งาน",
      goals: "เล่าปัญหาปัจจุบัน ไซต์ที่เกี่ยวข้อง ทีมหรือเป้าหมายที่ต้องการยกระดับ",
    },
    interestOptions: [
      "การมองเห็นสถานะการปฏิบัติการ",
      "ขั้นตอนการตอบสนองหน้างาน",
      "สถาปัตยกรรมและการเชื่อมต่อระบบ",
      "โมเดลธุรกิจหรือความร่วมมือ",
    ],
    selectPlaceholder: "เลือกหัวข้อ",
    submitIdle: "ขอนัด Demo",
    submitPending: "กำลังส่ง...",
  },
  messages: {
    contactSuccess: "ขอบคุณสำหรับความสนใจ ทีมงานจะติดต่อกลับเพื่อพูดคุยในขั้นตอนถัดไป",
    contactErrorSummary: "กรุณาตรวจสอบข้อมูลที่กรอกและลองอีกครั้ง",
    validation: {
      fullName: "กรุณากรอกชื่อ-นามสกุล",
      workEmail: "กรุณากรอกอีเมลองค์กรให้ถูกต้อง",
      company: "กรุณากรอกชื่อบริษัทหรือองค์กร",
      interestArea: "กรุณาเลือกหัวข้อที่สนใจ",
      goals: "กรุณาระบุรายละเอียดเพิ่มเติมเกี่ยวกับเป้าหมายหรือปัญหาปัจจุบัน",
    },
  },
  footer: {
    description:
      "แพลตฟอร์มที่ปลอดภัยและขยายได้สำหรับการบริหารจัดการโรงสีข้าวยุคใหม่ ตั้งแต่ข้อมูลภาคสนามไปจนถึงการตอบสนอง งานบำรุงรักษา และมุมมองสำหรับผู้บริหาร",
    quickLinksLabel: "ลิงก์ด่วน",
    contactLabel: "ติดต่อ",
    contactEmail: "hello@riceflow.app",
    contactDescription: "ดำเนินการโดย C2 TECH COMPANY LIMITED",
    copyright: "© 2026 Rice Flow. สงวนลิขสิทธิ์",
  },
  problemCards: [
    {
      title: "กระบวนการวัดแบบ Manual",
      description:
        "การตรวจวัดความชื้นยังพึ่งพาขั้นตอน manual อุปกรณ์ที่แยกส่วน และวิธีทำงานที่ไม่สม่ำเสมอ",
      icon: "signal",
    },
    {
      title: "สื่อสารผ่านแชตและรูปภาพ",
      description:
        "ข้อมูลสำคัญจากหน้างานมักถูกส่งผ่านข้อความหรือรูปภาพ ทำให้ตีความยากและตอบสนองได้ช้าลง",
      icon: "mobile",
    },
    {
      title: "ข้อมูลไม่ต่อเนื่อง",
      description:
        "ข้อมูลปฏิบัติการไม่ได้ไหลเข้าสู่ระบบกลางที่เชื่อถือได้ ทำให้การดูแนวโน้มและการตั้งเกณฑ์ทำได้ยาก",
      icon: "analytics",
    },
    {
      title: "ตรวจสอบย้อนหลังได้ยาก",
      description:
        "เมื่อเหตุการณ์ การตัดสินใจ และหลักฐานกระจายอยู่หลายที่ การตรวจสอบย้อนหลังจึงทำได้ไม่ง่าย",
      icon: "audit",
    },
    {
      title: "ตอบสนองต่อเหตุการณ์ช้า",
      description:
        "หากไม่มีระบบ alert และ workflow ที่ชัดเจน ทีมงานมักตอบสนองช้าและตัดสินใจได้ไม่แม่นยำ",
      icon: "response",
    },
    {
      title: "กระทบรายได้โดยตรง",
      description:
        "การควบคุมความชื้นที่ไม่ดีส่งผลต่อคุณภาพสินค้า น้ำหนักสุทธิ กำไร และความมั่นใจในการบริหาร",
      icon: "growth",
    },
  ],
  valueCards: [
    {
      title: "เห็นภาพต่อเนื่อง",
      description: "มองเห็นสถานะปัจจุบัน ข้อยกเว้น และข้อมูลย้อนหลังของหลายไซต์ได้จากมุมมองเดียว",
      icon: "dashboard",
    },
    {
      title: "ตอบสนองได้เร็วขึ้น",
      description: "เปลี่ยนจากการรอดูสถานะ มาเป็นการลงมือจาก alert ที่มีเจ้าของและลำดับการตอบสนองชัดเจน",
      icon: "alert",
    },
    {
      title: "ควบคุมได้ดียิ่งขึ้น",
      description: "ใช้ telemetry, thresholds และ workflow ที่อิงนโยบายจริงเพื่อช่วยการตัดสินใจหน้างาน",
      icon: "control",
    },
    {
      title: "ตรวจสอบย้อนหลังได้",
      description: "เชื่อมการตัดสินใจ เหตุการณ์ และประวัติกิจกรรมไว้ด้วยกันเพื่อใช้ตรวจสอบและทบทวนได้ง่าย",
      icon: "trace",
    },
    {
      title: "พร้อมสำหรับงานบำรุงรักษาเชิงป้องกัน",
      description: "เชื่อมสุขภาพอุปกรณ์ รอบบริการ และหลักฐานเชิงปฏิบัติการเพื่อลด downtime ที่หลีกเลี่ยงได้",
      icon: "maintenance",
    },
    {
      title: "พร้อมขยายเป็นแพลตฟอร์ม",
      description: "รองรับหลายไซต์ หลายองค์กร โมเดล subscription และการเติบโตร่วมกับพันธมิตรบนฐานเดียวกัน",
      icon: "organization",
    },
  ],
  platformPillars: [
    {
      title: "Web Application",
      description:
        "พื้นที่บริหารจัดการสำหรับการตั้งค่า การกำกับดูแล การติดตามภาพรวม รายงาน และการควบคุมในระดับองค์กร",
      icon: "dashboard",
      supportingPoints: [
        "ภาพรวมผู้บริหารและสถานะการดำเนินงาน",
        "ตั้งค่าเกณฑ์แจ้งเตือน ผู้ใช้ และรายงาน",
        "เห็นภาพด้าน audit, governance และอุปกรณ์",
      ],
    },
    {
      title: "Mobile Application",
      description:
        "ประสบการณ์ใช้งานแบบ field-first ที่ออกแบบมาให้อ่านเร็ว ตัดสินใจเร็ว และใช้งานได้แม้การเชื่อมต่อมีข้อจำกัด",
      icon: "mobile",
      supportingPoints: [
        "ดู alert และ workflow การตอบสนอง",
        "ปฏิบัติงาน เก็บหลักฐาน และดูประวัติได้จากหน้างาน",
        "รองรับ mobile operation ที่ปลอดภัยและพร้อมใช้งานแบบ offline",
      ],
    },
    {
      title: "Dashboard / Control Room",
      description:
        "มุมมองสถานะการดำเนินงานแบบชัดเจนสำหรับหัวหน้างานและผู้บริหาร เพื่อเห็นความพร้อมของทั้งระบบแบบใกล้เคียงเวลาจริง",
      icon: "analytics",
      supportingPoints: [
        "มุมมองจอใหญ่และภาพรวมแนวโน้ม",
        "เปรียบเทียบหลายไซต์และติดตาม incident",
        "เห็น telemetry และสุขภาพระบบแบบ action-oriented",
      ],
    },
  ],
  capabilityCards: [
    {
      title: "Moisture Monitoring",
      description: "ติดตามค่าความชื้นอย่างต่อเนื่องพร้อมบริบทของข้อมูลและสถานะที่เกี่ยวข้อง",
      icon: "signal",
    },
    {
      title: "Threshold & Alert Engine",
      description: "กำหนด threshold, rules และ escalation ให้สอดคล้องกับนโยบายและสภาพการทำงานจริง",
      icon: "alert",
    },
    {
      title: "Incident / Response Workflow",
      description: "บันทึกเหตุการณ์ มอบหมายงาน และติดตามการตอบสนองอย่างเป็นระบบ",
      icon: "response",
    },
    {
      title: "Device & Sensor Visibility",
      description: "เห็นภาพอุปกรณ์ สถานะ sensor การเชื่อมต่อ และตัวตนอุปกรณ์ได้อย่างเชื่อถือได้",
      icon: "device",
    },
    {
      title: "Maintenance & Service",
      description: "รองรับการวางแผนบำรุงรักษา งานช่าง และหลักฐานการให้บริการ",
      icon: "maintenance",
    },
    {
      title: "Reports & Export",
      description: "สร้างรายงานและส่งออกข้อมูลสำหรับการทบทวน การกำกับดูแล และการวิเคราะห์ต่อยอด",
      icon: "analytics",
    },
    {
      title: "Audit Trail",
      description: "บันทึกการเปลี่ยนแปลง การตัดสินใจ และกิจกรรมสำคัญเพื่อการตรวจสอบย้อนหลัง",
      icon: "audit",
    },
    {
      title: "Multi-organization Access Control",
      description: "รองรับหลายองค์กร หลายไซต์ และหลายทีมด้วยสิทธิ์การเข้าถึงตามบทบาทและลำดับชั้น",
      icon: "organization",
    },
  ],
  principleCards: [
    {
      title: "Offline-first",
      description: "ออกแบบให้ทำงานต่อได้แม้การเชื่อมต่อจากหน้างานจะไม่เสถียรหรือขาดช่วง",
      icon: "offline",
    },
    {
      title: "Security-first",
      description: "ปกป้องตัวตนผู้ใช้ สิทธิ์การเข้าถึง การไหลของข้อมูล และความถูกต้องของการปฏิบัติการตั้งแต่ต้น",
      icon: "security",
    },
    {
      title: "Human-in-the-loop Control",
      description: "คงการตัดสินใจสำคัญไว้ภายใต้การกำกับดูแลของคน พร้อมขั้นตอนที่ตรวจสอบได้",
      icon: "control",
    },
    {
      title: "Mobile-first Operation",
      description: "ให้ความสำคัญกับความเร็วและความง่ายในการใช้งานจริงที่หน้างาน ไม่ใช่แค่หน้าจอในสำนักงาน",
      icon: "mobile",
    },
    {
      title: "Data-centric Architecture",
      description: "เปลี่ยนสัญญาณจากหน้างานให้เป็นข้อมูลที่มีบริบทและพร้อมใช้ในการตัดสินใจต่อเนื่อง",
      icon: "analytics",
    },
    {
      title: "Event-driven & Alert-driven",
      description: "จัดโครงสร้างระบบรอบเหตุการณ์สำคัญ เพื่อให้ทีมรู้ว่าต้องสนใจอะไรในเวลาที่เหมาะสม",
      icon: "alert",
    },
    {
      title: "Configurable & Scalable",
      description: "รองรับนโยบาย หน้างาน และรูปแบบการเติบโตที่แตกต่างกันโดยไม่ต้องรื้อแกนระบบ",
      icon: "growth",
    },
    {
      title: "Future-ready",
      description: "วางรากฐานสำหรับ platform business, partner operation และการต่อยอดสู่งานอุตสาหกรรมอื่นในอนาคต",
      icon: "organization",
    },
  ],
  positioningPoints: [
    {
      title: "ออกแบบจากปัญหาหน้างานจริง ไม่ใช่จากทฤษฎีล้วน ๆ",
      description:
        "Rice Flow เริ่มจาก pain point จริงเรื่องการควบคุมความชื้น การตอบสนองที่ล่าช้า การสื่อสารที่กระจัดกระจาย และการตรวจสอบย้อนหลังที่ไม่ต่อเนื่อง",
    },
    {
      title: "มากกว่าการ monitoring",
      description:
        "แพลตฟอร์มเชื่อมข้อมูลจากหน้างาน การแจ้งเตือน การลงมือปฏิบัติ ผู้ใช้งาน งานบำรุงรักษา และประวัติการตรวจสอบไว้ในระบบการทำงานเดียวกัน",
    },
    {
      title: "พร้อมสำหรับการเติบโตหลายไซต์",
      description:
        "รองรับอุปกรณ์ ไซต์ ทีมงาน และหลายองค์กรได้โดยไม่สูญเสียความสามารถในการควบคุม",
    },
    {
      title: "สอดคล้องกับความคาดหวังด้านความปลอดภัยขององค์กร",
      description:
        "สถาปัตยกรรมยึด security-by-design เพื่อให้ระบบทำหน้าที่เป็นโครงสร้างพื้นฐานธุรกิจที่เชื่อถือได้",
    },
  ],
  architectureLayers: [
    {
      title: "Field Device Layer",
      description: "Sensors และอุปกรณ์ที่เชื่อมต่อกับ edge ทำหน้าที่เก็บค่าการทำงานและสถานะอุปกรณ์จากต้นทาง",
      points: [
        "ข้อมูลความชื้นและสัญญาณที่เกี่ยวข้องกับเครื่องจักร",
        "ตัวตนอุปกรณ์และร่องรอยการ onboard เข้าใช้งาน",
        "ออกแบบให้สะท้อนสภาพการทำงานจริงในแต่ละไซต์",
      ],
    },
    {
      title: "Edge, Connectivity & Ingestion",
      description:
        "ระบบถูกออกแบบให้รับมือกับสภาพการเชื่อมต่อที่ไม่แน่นอน พร้อมคงความต่อเนื่องของข้อมูลสำคัญจากหน้างาน",
      points: [
        "รองรับแนวคิด offline-first ในพื้นที่ที่มีข้อจำกัด",
        "มีขอบเขตการ ingest และการส่งข้อมูลที่ปลอดภัย",
        "คงความต่อเนื่องของเหตุการณ์ระหว่าง local context และระบบกลาง",
      ],
    },
    {
      title: "Platform Core",
      description:
        "บริการส่วนกลางดูแลสถานะปัจจุบัน ประวัติข้อมูล กฎการทำงาน เหตุการณ์ งานบำรุงรักษา และการกำกับดูแล",
      points: [
        "ตรรกะ threshold การแจ้งเตือน และการยกระดับเหตุการณ์",
        "การจัดเก็บข้อมูลย้อนหลัง บันทึกการตรวจสอบ และรายงาน",
        "บริการเชิงปฏิบัติการที่รองรับหลายองค์กรและนโยบายต่างกัน",
      ],
    },
    {
      title: "Application Experience Layer",
      description:
        "Web, mobile และ Control Room นำเสนอบริบทการทำงานชุดเดียวกันให้กับผู้ใช้แต่ละบทบาท",
      points: [
        "การตั้งค่าและ workflow ด้านบริหารบน web",
        "การตอบสนองหน้างานและเก็บหลักฐานบน mobile",
        "ภาพรวมหลายไซต์และความชัดเจนของข้อมูลบน dashboard",
      ],
    },
  ],
  architectureNarratives: [
    {
      title: "ความต่อเนื่องแม้การเชื่อมต่อมีข้อจำกัด",
      description:
        "แพลตฟอร์มถูกออกแบบมาสำหรับไซต์งานที่ไม่สามารถคาดหวังการเชื่อมต่อที่เสถียรได้ตลอดเวลา เพื่อไม่ให้บริบทเชิงปฏิบัติการสูญหายระหว่างหน้างานกับระบบกลาง",
    },
    {
      title: "ขอบเขตที่ปลอดภัยเพื่อความเชื่อถือในการปฏิบัติการ",
      description:
        "แนวคิด security-by-design ถูกใช้กับตัวตนผู้ใช้ สิทธิ์ การจัดการข้อมูล และการกระทำสำคัญ เพื่อให้ระบบทำหน้าที่เป็นโครงสร้างพื้นฐานที่องค์กรไว้วางใจได้",
    },
    {
      title: "แยกความรับผิดชอบเพื่อรองรับการเติบโต",
      description:
        "สถาปัตยกรรมแยก ingestion, rules, workflows, governance และ user experience ออกจากกันอย่างชัดเจน เพื่อให้ระบบพัฒนาและขยายได้โดยไม่เปราะบาง",
    },
  ],
  solutionNarratives: [
    {
      title: "จากการอ่านค่าสู่ผลกระทบทางธุรกิจ",
      description:
        "Rice Flow มองค่าความชื้นเป็นสัญญาณที่เชื่อมกับคุณภาพสินค้า การปกป้องรายได้ และจังหวะการดำเนินงาน",
    },
    {
      title: "จากข้อมูลกระจัดกระจายสู่การตอบสนองที่ประสานกัน",
      description:
        "แทนที่จะพึ่งรูปภาพ ข้อความ และความจำ แพลตฟอร์มเปลี่ยนเหตุการณ์สำคัญให้กลายเป็น workflow ที่เห็นภาพและติดตามได้",
    },
    {
      title: "จากเครื่องมือเฉพาะจุดสู่โครงสร้างพื้นฐานเชิงกลยุทธ์",
      description:
        "สถาปัตยกรรมเดียวกันรองรับการเติบโตหลายไซต์ การกำกับดูแลระดับองค์กร ความร่วมมือกับพันธมิตร และบริการระยะยาวได้ในอนาคต",
    },
  ],
  architectureFlowSteps: [
    {
      title: "Capture",
      description: "อุปกรณ์ภาคสนามสร้างข้อมูลและสัญญาณที่เชื่อมกับบริบทการทำงานจริง",
    },
    {
      title: "Ingest",
      description: "ข้อมูลผ่านขอบเขตการรับเข้าอย่างปลอดภัย โดยยังคงความต่อเนื่องของสัญญาณสำคัญ",
    },
    {
      title: "Evaluate",
      description: "ระบบใช้กฎ เกณฑ์ และตรรกะการแจ้งเตือนเพื่อแปลข้อมูลดิบให้กลายเป็นสถานะที่นำไปปฏิบัติการได้",
    },
    {
      title: "Respond",
      description: "ทีมงานตรวจสอบเหตุการณ์ ลงมือปฏิบัติ เก็บหลักฐาน และรักษาความรับผิดชอบผ่านขั้นตอนที่ชัดเจน",
    },
    {
      title: "Govern",
      description: "ข้อมูลย้อนหลัง บันทึกการตรวจสอบ ภาพรวมอุปกรณ์ และรายงาน ช่วยให้การบริหารตรวจสอบย้อนหลังได้อย่างมั่นใจ",
    },
  ],
};

export const dictionaries: Record<Locale, SiteDictionary> = {
  en,
  th,
};

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
