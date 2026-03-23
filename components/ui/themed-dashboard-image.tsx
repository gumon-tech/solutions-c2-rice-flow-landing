"use client";

import Image from "next/image";
import { useTheme } from "@/components/theme-provider";

export function ThemedDashboardImage({ alt, priority }: { alt: string; priority?: boolean }) {
  const { resolvedTheme } = useTheme();
  const src =
    resolvedTheme === "dark"
      ? "/images/rice-flow-dashboard-placeholder-dark.svg"
      : "/images/rice-flow-dashboard-placeholder.svg";

  return (
    <Image
      src={src}
      alt={alt}
      width={960}
      height={720}
      className="h-auto w-full object-cover"
      priority={priority}
    />
  );
}
