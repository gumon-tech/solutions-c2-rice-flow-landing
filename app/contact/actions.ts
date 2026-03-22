"use server";

import { defaultLocale, isLocale } from "@/lib/i18n";
import { getDictionary } from "@/lib/site-copy";

export interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"fullName" | "workEmail" | "company" | "interestArea" | "goals", string>>;
}

const initialState: ContactFormState = {
  status: "idle",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const localeInput = String(formData.get("locale") ?? defaultLocale);
  const locale = isLocale(localeInput) ? localeInput : defaultLocale;
  const dictionary = getDictionary(locale);
  const fullName = String(formData.get("fullName") ?? "").trim();
  const workEmail = String(formData.get("workEmail") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();
  const interestArea = String(formData.get("interestArea") ?? "").trim();
  const goals = String(formData.get("goals") ?? "").trim();

  const errors: ContactFormState["errors"] = {};

  if (fullName.length < 2) {
    errors.fullName = dictionary.messages.validation.fullName;
  }

  if (!isValidEmail(workEmail)) {
    errors.workEmail = dictionary.messages.validation.workEmail;
  }

  if (company.length < 2) {
    errors.company = dictionary.messages.validation.company;
  }

  if (!interestArea) {
    errors.interestArea = dictionary.messages.validation.interestArea;
  }

  if (goals.length < 20) {
    errors.goals = dictionary.messages.validation.goals;
  }

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: dictionary.messages.contactErrorSummary,
      errors,
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 400));

  return {
    status: "success",
    message: dictionary.messages.contactSuccess,
  };
}

export { initialState as contactFormInitialState };
