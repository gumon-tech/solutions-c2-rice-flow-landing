"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

function SubmitButton({
  idleLabel,
  pendingLabel,
  pending,
}: {
  idleLabel: string;
  pendingLabel: string;
  pending: boolean;
}) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-[#159763] bg-[linear-gradient(135deg,#1db777_0%,#159763_100%)] px-5 py-3 text-sm font-semibold tracking-wide text-[#f8f7ef] transition hover:-translate-y-0.5 hover:bg-[#12925d] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}

interface ContactFormState {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<"fullName" | "workEmail" | "company" | "interestArea" | "goals", string>>;
}

interface FieldProps {
  label: string;
  name: "fullName" | "workEmail" | "company" | "interestArea" | "goals";
  type?: "text" | "email";
  placeholder?: string;
  as?: "input" | "textarea" | "select";
  rows?: number;
  options?: string[];
  errors?: ContactFormState["errors"];
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  as = "input",
  rows = 6,
  options = [],
  errors,
}: FieldProps) {
  const error = errors?.[name];
  const baseClassName = cn(
    "rounded-2xl border bg-[rgba(255,252,243,0.88)] px-4 py-3 text-[#173b30] outline-none transition placeholder:text-[#93a69d] focus:border-accent/60",
    error ? "border-rose-400/60" : "border-[#d7e6da]",
  );

  return (
    <label className="grid gap-2 text-sm text-[#567267]">
      {label}
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          placeholder={placeholder}
          className={cn(baseClassName, "rounded-3xl")}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : as === "select" ? (
        <select
          name={name}
          defaultValue=""
          className={baseClassName}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        >
          <option value="" className="bg-[#fffdf6]">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-[#fffdf6]">
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className={baseClassName}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      )}
      {error ? (
        <span id={`${name}-error`} className="text-xs text-rose-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

const initialState: ContactFormState = {
  status: "idle",
};

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function ContactForm({
  locale,
  copy,
  messages,
}: {
  locale: Locale;
  copy: SiteDictionary["form"];
  messages: SiteDictionary["messages"];
}) {
  const [state, setState] = useState<ContactFormState>(initialState);
  const [pending, setPending] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("fullName") ?? "").trim();
    const workEmail = String(formData.get("workEmail") ?? "").trim();
    const company = String(formData.get("company") ?? "").trim();
    const interestArea = String(formData.get("interestArea") ?? "").trim();
    const goals = String(formData.get("goals") ?? "").trim();

    const errors: ContactFormState["errors"] = {};

    if (fullName.length < 2) {
      errors.fullName = messages.validation.fullName;
    }

    if (!isValidEmail(workEmail)) {
      errors.workEmail = messages.validation.workEmail;
    }

    if (company.length < 2) {
      errors.company = messages.validation.company;
    }

    if (!interestArea) {
      errors.interestArea = messages.validation.interestArea;
    }

    if (goals.length < 20) {
      errors.goals = messages.validation.goals;
    }

    if (Object.keys(errors).length > 0) {
      setState({
        status: "error",
        message: messages.contactErrorSummary,
        errors,
      });
      return;
    }

    setPending(true);
    setState(initialState);

    await new Promise((resolve) => setTimeout(resolve, 400));

    setState({
      status: "success",
      message: messages.contactSuccess,
    });
    setPending(false);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-5">
      <input type="hidden" name="locale" value={locale} />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={copy.labels.fullName}
          name="fullName"
          placeholder={copy.placeholders.fullName}
          errors={state.errors}
        />
        <Field
          label={copy.labels.workEmail}
          name="workEmail"
          type="email"
          placeholder={copy.placeholders.workEmail}
          errors={state.errors}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label={copy.labels.company}
          name="company"
          placeholder={copy.placeholders.company}
          errors={state.errors}
        />
        <Field
          label={copy.labels.interestArea}
          name="interestArea"
          as="select"
          options={copy.interestOptions}
          placeholder={copy.selectPlaceholder}
          errors={state.errors}
        />
      </div>

      <Field
        label={copy.labels.goals}
        name="goals"
        as="textarea"
        placeholder={copy.placeholders.goals}
        errors={state.errors}
      />

      {state.message ? (
        <p
          className={cn(
            "text-sm",
            state.status === "success" ? "text-emerald-300" : "text-rose-300",
          )}
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton idleLabel={copy.submitIdle} pendingLabel={copy.submitPending} pending={pending} />
    </form>
  );
}
