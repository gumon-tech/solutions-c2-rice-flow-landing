"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import {
  contactFormInitialState,
  submitContactForm,
  type ContactFormState,
} from "@/app/contact/actions";
import type { Locale } from "@/lib/i18n";
import type { SiteDictionary } from "@/lib/site-copy";
import { cn } from "@/lib/utils";

function SubmitButton({
  idleLabel,
  pendingLabel,
}: {
  idleLabel: string;
  pendingLabel: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-12 w-full items-center justify-center rounded-full border border-accent bg-accent px-5 py-3 text-sm font-semibold tracking-wide text-slate-950 transition hover:-translate-y-0.5 hover:bg-[#67e4d3] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 sm:w-auto"
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
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
    "rounded-2xl border bg-white/[0.04] px-4 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-accent/60",
    error ? "border-rose-400/60" : "border-white/10",
  );

  return (
    <label className="grid gap-2 text-sm text-slate-300">
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
          <option value="" className="bg-slate-950">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} className="bg-slate-950">
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

export function ContactForm({
  locale,
  copy,
}: {
  locale: Locale;
  copy: SiteDictionary["form"];
}) {
  const [state, formAction] = useActionState(submitContactForm, contactFormInitialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") {
      formRef.current?.reset();
    }
  }, [state.status]);

  return (
    <form ref={formRef} action={formAction} className="grid gap-5">
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

      <SubmitButton idleLabel={copy.submitIdle} pendingLabel={copy.submitPending} />
    </form>
  );
}
