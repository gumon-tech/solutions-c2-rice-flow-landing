import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
  rel,
}: ButtonProps) {
  return (
    <Link
      href={href}
      target={target}
      rel={rel}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-3.5 text-sm font-semibold tracking-wide transition duration-200",
        variant === "primary"
          ? "border-[color:var(--accent)] bg-[linear-gradient(135deg,color-mix(in_srgb,var(--accent)_90%,white_10%)_0%,var(--accent)_100%)] text-[color:var(--accent-foreground)] shadow-[0_16px_38px_var(--theme-shadow-accent)] hover:-translate-y-0.5 hover:brightness-105"
          : "border-[color:var(--theme-border-soft)] bg-[color:var(--theme-surface-1)] text-[color:var(--foreground-soft)] hover:-translate-y-0.5 hover:border-[color:var(--theme-border-strong)] hover:bg-[color:var(--theme-surface-2)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
