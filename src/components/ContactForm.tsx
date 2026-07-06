"use client";

import { useState, FormEvent, ChangeEvent } from "react";
import { FormFieldConfig, CAREERS_FORM_MESSAGES } from "@/lib/constants";

export interface ContactFormProps {
  fields: FormFieldConfig[];
  subject: string;
  messages?: Partial<typeof CAREERS_FORM_MESSAGES>;
  className?: string;
}

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function ContactForm({
  fields,
  subject,
  messages = {},
  className = "",
}: ContactFormProps) {
  const msg = { ...CAREERS_FORM_MESSAGES, ...messages };
  const apiKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [botcheck, setBotcheck] = useState(false);

  // Graceful degradation when key is missing
  if (!apiKey || apiKey.trim() === "" || apiKey === "YOUR_KEY_HERE") {
    return (
      <div className={`rounded-2xl border border-line bg-cream/80 p-8 shadow-[0_4px_20px_rgba(42,42,40,0.04)] ${className}`}>
        <h3 className="mb-2 text-lg font-bold text-forest">{msg.unavailableTitle}</h3>
        <p className="text-base leading-relaxed text-forest-soft">{msg.unavailableBody}</p>
      </div>
    );
  }

  const validateField = (name: string, value: string, config: FormFieldConfig): string => {
    if (config.required && !value.trim()) {
      return msg.requiredError;
    }
    if (config.type === "email" && value.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value.trim())) {
        return msg.emailError;
      }
    }
    return "";
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, config: FormFieldConfig) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      const error = validateField(name, value, config);
      setFieldErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "submitting") return;

    // Run validation on all fields
    const newErrors: Record<string, string> = {};
    let hasError = false;
    fields.forEach((field) => {
      const val = formData[field.name] || "";
      const err = validateField(field.name, val, field);
      if (err) {
        newErrors[field.name] = err;
        hasError = true;
      }
    });

    if (hasError) {
      setFieldErrors(newErrors);
      return;
    }

    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: apiKey,
          subject,
          botcheck,
          ...formData,
        }),
      });

      const result = await response.json();
      if (response.ok && result.success) {
        setStatus("success");
        setFormData({});
        setFieldErrors({});
      } else {
        setStatus("error");
        setErrorMessage(result.message || msg.errorFallback);
      }
    } catch {
      setStatus("error");
      setErrorMessage(msg.errorFallback);
    }
  };

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-line bg-cream p-8 shadow-[0_8px_30px_rgba(42,42,40,0.06)] ${className}`} role="status">
        <h3 className="mb-2 text-xl font-bold text-forest">{msg.successTitle}</h3>
        <p className="text-base leading-relaxed text-forest-soft">{msg.successBody}</p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs font-bold uppercase tracking-wider text-charcoal hover:text-forest transition-colors underline underline-offset-4"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className={`space-y-6 rounded-2xl border border-line bg-cream/90 p-6 sm:p-8 shadow-[0_8px_30px_rgba(42,42,40,0.05)] ${className}`}>
      {/* Botcheck honeypot field */}
      <input
        type="checkbox"
        name="botcheck"
        checked={botcheck}
        onChange={(e) => setBotcheck(e.target.checked)}
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
      />

      {fields.map((field) => {
        const id = `form-field-${field.name}`;
        const error = fieldErrors[field.name];
        const value = formData[field.name] || "";

        return (
          <div key={field.name} className="space-y-2">
            <label htmlFor={id} className="block text-sm font-bold text-forest">
              {field.label}
              {field.required && <span className="ml-1 text-charcoal/70" aria-hidden="true">*</span>}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={field.name}
                rows={field.rows || 4}
                value={value}
                onChange={(e) => handleChange(e, field)}
                placeholder={field.placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                disabled={status === "submitting"}
                className={`w-full rounded-xl border bg-sand/30 px-4 py-3 text-base text-forest placeholder:text-forest/40 focus:bg-cream focus:outline-none focus:ring-2 transition-all duration-200 disabled:opacity-60 ${
                  error ? "border-red-600/80 focus:ring-red-500/20" : "border-line/80 focus:border-charcoal focus:ring-charcoal/10"
                }`}
              />
            ) : (
              <input
                id={id}
                type={field.type}
                name={field.name}
                value={value}
                onChange={(e) => handleChange(e, field)}
                placeholder={field.placeholder}
                aria-invalid={!!error}
                aria-describedby={error ? `${id}-error` : undefined}
                disabled={status === "submitting"}
                className={`w-full rounded-xl border bg-sand/30 px-4 py-3 text-base text-forest placeholder:text-forest/40 focus:bg-cream focus:outline-none focus:ring-2 transition-all duration-200 disabled:opacity-60 ${
                  error ? "border-red-600/80 focus:ring-red-500/20" : "border-line/80 focus:border-charcoal focus:ring-charcoal/10"
                }`}
              />
            )}

            {error && (
              <p id={`${id}-error`} className="text-xs font-semibold text-red-700" role="alert">
                {error}
              </p>
            )}
          </div>
        );
      })}

      {status === "error" && (
        <div className="rounded-xl border border-red-200 bg-red-50/80 p-4 text-sm text-red-800" role="alert">
          <p className="font-bold">{msg.errorTitle}</p>
          <p className="mt-1">{errorMessage || msg.errorFallback}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full sm:w-auto min-h-[44px] px-8 py-3 rounded-xl bg-charcoal text-cream font-bold text-sm tracking-wide shadow-sm hover:bg-forest transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {status === "submitting" ? (
          <>
            <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-cream border-t-transparent" aria-hidden="true" />
            <span>{msg.submittingButton}</span>
          </>
        ) : (
          <span>{msg.submitButton}</span>
        )}
      </button>
    </form>
  );
}
