import type { IconName } from "@/lib/types";

interface IconProps {
  name: IconName;
  className?: string;
}

export function Icon({ name, className = "h-5 w-5" }: IconProps) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
  };

  switch (name) {
    case "alert":
      return (
        <svg {...commonProps}>
          <path d="M12 3 2.5 20h19L12 3Z" />
          <path d="M12 9v4.5" />
          <path d="M12 17h.01" />
        </svg>
      );
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M4 19h16" />
          <path d="M7 16V9" />
          <path d="M12 16V5" />
          <path d="M17 16v-7" />
        </svg>
      );
    case "audit":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v6c0 4.2 2.6 8 7 9 4.4-1 7-4.8 7-9V6l-7-3Z" />
          <path d="m9.5 12 1.8 1.8L15 10" />
        </svg>
      );
    case "control":
      return (
        <svg {...commonProps}>
          <path d="M4 7h16" />
          <path d="M7 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
          <path d="M4 17h16" />
          <path d="M17 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
        </svg>
      );
    case "dashboard":
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <path d="M3 10h18" />
          <path d="M8 20V10" />
        </svg>
      );
    case "device":
      return (
        <svg {...commonProps}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M10 6h4" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "growth":
      return (
        <svg {...commonProps}>
          <path d="M4 18 10 12l4 4 6-8" />
          <path d="M15 8h5v5" />
        </svg>
      );
    case "maintenance":
      return (
        <svg {...commonProps}>
          <path d="m14 7 3-3 3 3-3 3-3-3Z" />
          <path d="M3 20 12.5 10.5" />
          <path d="m5.5 14.5 4 4" />
        </svg>
      );
    case "mobile":
      return (
        <svg {...commonProps}>
          <rect x="7" y="2.5" width="10" height="19" rx="2.5" />
          <path d="M10.5 6h3" />
          <path d="M12 18h.01" />
        </svg>
      );
    case "offline":
      return (
        <svg {...commonProps}>
          <path d="M4 12a8 8 0 0 1 11.7-7" />
          <path d="M2 2 22 22" />
          <path d="M8.5 16a4 4 0 0 1 5.3-5.3" />
          <path d="M12 20h.01" />
        </svg>
      );
    case "organization":
      return (
        <svg {...commonProps}>
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M17 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
          <path d="M3.5 20a4.5 4.5 0 0 1 9 0" />
          <path d="M13.5 19a3.5 3.5 0 0 1 7 0" />
        </svg>
      );
    case "response":
      return (
        <svg {...commonProps}>
          <path d="M4 12h7" />
          <path d="m8 8 4 4-4 4" />
          <path d="M20 12a8 8 0 1 1-2.3-5.7" />
        </svg>
      );
    case "security":
      return (
        <svg {...commonProps}>
          <path d="M12 3 5 6v6c0 4.2 2.6 8 7 9 4.4-1 7-4.8 7-9V6l-7-3Z" />
          <rect x="9" y="10.5" width="6" height="4.5" rx="1" />
          <path d="M10.5 10.5v-1a1.5 1.5 0 0 1 3 0v1" />
        </svg>
      );
    case "signal":
      return (
        <svg {...commonProps}>
          <path d="M4 15a8 8 0 0 1 16 0" />
          <path d="M7 15a5 5 0 0 1 10 0" />
          <path d="M10 15a2 2 0 0 1 4 0" />
          <path d="M12 19h.01" />
        </svg>
      );
    case "trace":
      return (
        <svg {...commonProps}>
          <path d="M12 6v6l4 2" />
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
