import { redirect } from "next/navigation";
import { defaultLocale } from "@/lib/i18n";

export default function ArchitectureRedirectPage() {
  redirect(`/${defaultLocale}/architecture`);
}
