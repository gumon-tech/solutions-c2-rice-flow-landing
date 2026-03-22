import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SurfaceCardProps {
  children: ReactNode;
  className?: string;
}

export function SurfaceCard({ children, className }: SurfaceCardProps) {
  return (
    <div
      className={cn(
        "panel hairline rounded-3xl border border-white/10 shadow-panel",
        className,
      )}
    >
      {children}
    </div>
  );
}
