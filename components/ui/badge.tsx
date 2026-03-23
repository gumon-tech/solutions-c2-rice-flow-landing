import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[color:var(--foreground-soft)]",
        className,
      )}
    >
      {children}
    </span>
  );
}
