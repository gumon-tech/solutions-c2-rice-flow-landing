import { Badge } from "@/components/ui/badge";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-[44rem]"}>
      {eyebrow ? <Badge className="mb-5 border-accent/20 bg-accentSoft text-accent">{eyebrow}</Badge> : null}
      <h2 className="text-balance font-display text-[2rem] font-semibold leading-[1.08] tracking-tight text-[color:var(--foreground)] sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-5 max-w-[40rem] text-[1.0625rem] leading-8 text-[color:var(--foreground-soft)] sm:text-lg sm:leading-8">
        {description}
      </p>
    </div>
  );
}
