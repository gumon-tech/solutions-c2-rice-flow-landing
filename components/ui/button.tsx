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
        "inline-flex items-center justify-center rounded-full border px-5 py-3.5 text-sm font-semibold tracking-wide transition duration-200",
        variant === "primary"
          ? "border-[#159763] bg-[linear-gradient(135deg,#1db777_0%,#159763_100%)] text-[#f8f7ef] shadow-[0_16px_38px_rgba(24,165,111,0.18)] hover:-translate-y-0.5 hover:bg-[#12925d]"
          : "border-[#cfe4d5] bg-[rgba(255,252,243,0.86)] text-[#285043] hover:-translate-y-0.5 hover:border-[#abd2ba] hover:bg-[rgba(241,249,243,0.96)]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
