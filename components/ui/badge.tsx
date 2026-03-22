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
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-white/75",
        className,
      )}
    >
      {children}
    </span>
  );
}
