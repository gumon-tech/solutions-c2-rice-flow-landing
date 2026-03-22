import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold tracking-wide transition duration-200",
        variant === "primary"
          ? "border-accent bg-accent text-slate-950 hover:-translate-y-0.5 hover:bg-[#67e4d3]"
          : "border-white/12 bg-white/5 text-white hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10",
        className,
      )}
    >
      {children}
    </Link>
  );
}
