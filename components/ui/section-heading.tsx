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
      <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.8rem] lg:leading-[1.08]">
        {title}
      </h2>
      <p className="mt-5 max-w-[40rem] text-base leading-8 text-slate-300 sm:text-lg">
        {description}
      </p>
    </div>
  );
}
