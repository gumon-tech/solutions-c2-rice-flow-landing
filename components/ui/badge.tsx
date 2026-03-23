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
        "inline-flex items-center rounded-full border border-[#cfe3d4] bg-[rgba(255,252,243,0.88)] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-[#517065]",
        className,
      )}
    >
      {children}
    </span>
  );
}
