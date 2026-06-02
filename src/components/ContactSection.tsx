import { FormEvent, useEffect, useState } from "react";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const directEmailFields = ["email", "mail", "userEmail", "clientEmail", "customerEmail"];
const nestedUserFields = ["user", "client", "customer", "profile", "account", "data"];
const directStorageKeys = [
  "email",
  "mail",
  "userEmail",
  "clientEmail",
  "customerEmail",
  "currentUserEmail",
  "authEmail"
];
const objectStorageKeys = [
  "user",
  "client",
  "customer",
  "profile",
  "account",
  "auth",
  "authUser",
  "currentUser",
  "userData",
  "userProfile"
];

function extractEmail(value: unknown): string {
  if (!value) {
    return "";
  }

  if (typeof value === "string") {
    const trimmed = value.trim();
    if (emailPattern.test(trimmed)) {
      return trimmed;
    }

    try {
      return extractEmail(JSON.parse(trimmed));
    } catch {
      return "";
    }
  }

  if (typeof value === "object") {
    const record = value as Record<string, unknown>;

    for (const key of directEmailFields) {
      const candidate = record[key];
      if (typeof candidate === "string" && emailPattern.test(candidate.trim())) {
        return candidate.trim();
      }
    }

    for (const key of nestedUserFields) {
      const nested = extractEmail(record[key]);
      if (nested) {
        return nested;
      }
    }
  }

  return "";
}

function resolveClientEmail(): string {
  if (typeof window === "undefined") {
    return "";
  }

  const storages = [window.localStorage, window.sessionStorage];

  for (const storage of storages) {
    try {
      for (const key of directStorageKeys) {
        const rawValue = storage.getItem(key);
        const email = extractEmail(rawValue);
        if (email) {
          return email;
        }
      }

      for (const key of objectStorageKeys) {
        const rawValue = storage.getItem(key);
        const email = extractEmail(rawValue);
        if (email) {
          return email;
        }
      }

      for (let index = 0; index < storage.length; index += 1) {
        const key = storage.key(index);
        if (!key) {
          continue;
        }

        const rawValue = storage.getItem(key);
        const email = extractEmail(rawValue);
        if (email) {
          return email;
        }
      }
    } catch {
      continue;
    }
  }

  const cookies = document.cookie
    .split(";")
    .map((entry) => entry.trim())
    .filter(Boolean);

  for (const cookieEntry of cookies) {
    const [, ...rawValueParts] = cookieEntry.split("=");
    const cookieValue = decodeURIComponent(rawValueParts.join("="));
    const email = extractEmail(cookieValue);
    if (email) {
      return email;
    }
  }

  return "";
}

interface ContactSectionProps {
  title: string;
  description: string;
  contactInfoLabels: {
    email: string;
    phone: string;
    linkedin: string;
    github: string;
    facebook: string;
    instagram: string;
  };
  contactForm: {
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
    sendButton: string;
    sending: string;
    success: string;
    fetchError: string;
    genericError: string;
    loginRequired: string;
  };
}

export function ContactSection({ title, description, contactInfoLabels, contactForm }: ContactSectionProps) {
  const [clientEmail, setClientEmail] = useState("");
  const [status, setStatus] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const syncClientEmail = () => {
      setClientEmail(resolveClientEmail());
    };

    syncClientEmail();
    window.addEventListener("focus", syncClientEmail);
    window.addEventListener("storage", syncClientEmail);
    document.addEventListener("visibilitychange", syncClientEmail);

    return () => {
      window.removeEventListener("focus", syncClientEmail);
      window.removeEventListener("storage", syncClientEmail);
      document.removeEventListener("visibilitychange", syncClientEmail);
    };
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isSubmitting) {
      return;
    }

    if (!clientEmail) {
      setStatus(contactForm.loginRequired);
      return;
    }

    setIsSubmitting(true);
    setStatus(contactForm.sending);
    const formElement = event.currentTarget;

    const form = new FormData(formElement);
    const payload = {
      name: String(form.get("name") ?? "").trim(),
      email: clientEmail,
      message: String(form.get("message") ?? "").trim()
    };

    try {
      const isLocal = ["localhost", "127.0.0.1"].includes(window.location.hostname);
      const defaultApiBase = isLocal
        ? `${window.location.protocol}//${window.location.hostname}:8000/api`
        : `${window.location.origin}/api`;
      const apiBase = import.meta.env.VITE_API_URL ?? defaultApiBase;
      const response = await fetch(`${apiBase}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json().catch(() => null);

      if (!response.ok) {
        throw new Error(result?.message ?? "Request failed");
      }

      setStatus(result?.message ?? contactForm.success);
      formElement.reset();
    } catch (error) {
      if (error instanceof Error) {
        const message = error.message === "Failed to fetch" ? contactForm.fetchError : contactForm.genericError;
        setStatus(message);
      } else {
        setStatus(contactForm.genericError);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle title={title} />
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard>
          <p className="mb-6 text-slate-700 dark:text-slate-200">{description}</p>
          <div className="space-y-4 text-sm leading-7 text-slate-700 dark:text-slate-300">
            <p>
              {contactInfoLabels.email}: <a className="hover:text-neon-cyan" href="mailto:kamalabuzarifa@gmail.com">kamalabuzarifa@gmail.com</a>
            </p>
            <p>
              {contactInfoLabels.phone}: <a className="hover:text-neon-cyan" href="tel:+97259326412">+972-59326412</a>
            </p>
            <p>
              {contactInfoLabels.linkedin}: <a className="hover:text-neon-cyan" href="https://www.linkedin.com/in/kamal-abuzarifa-777887330/" target="_blank" rel="noreferrer">linkedin.com/in/kamal-abuzarifa-777887330</a>
            </p>
            <p>
              {contactInfoLabels.github}: <a className="hover:text-neon-cyan" href="https://github.com/kamalabuzarifa" target="_blank" rel="noreferrer">github.com/kamalabuzarifa</a>
            </p>
            <p>
              {contactInfoLabels.facebook}: <a className="hover:text-neon-cyan" href="https://www.facebook.com/kamalAbuZarifa2003" target="_blank" rel="noreferrer">facebook.com/kamalAbuZarifa2003</a>
            </p>
            <p>
              {contactInfoLabels.instagram}: <a className="hover:text-neon-cyan" href="https://www.instagram.com/eng_kamal_2003" target="_blank" rel="noreferrer">instagram.com/eng_kamal_2003</a>
            </p>
          </div>
        </GlassCard>

        <GlassCard>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              name="name"
              required
              disabled={isSubmitting}
              placeholder={contactForm.namePlaceholder}
              className="w-full rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400"
            />
            <input
              name="email"
              type="email"
              required
              readOnly
              value={clientEmail}
              aria-readonly="true"
              placeholder={contactForm.emailPlaceholder}
              className="w-full rounded-xl border border-slate-300/80 bg-slate-100/90 px-4 py-3 text-sm text-slate-600 focus:border-neon-cyan focus:outline-none dark:border-white/15 dark:bg-white/10 dark:text-slate-200"
            />
            <textarea
              name="message"
              required
              rows={5}
              disabled={isSubmitting}
              placeholder={contactForm.messagePlaceholder}
              className="w-full rounded-xl border border-slate-300/80 bg-white/70 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-500 focus:border-neon-cyan focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-white dark:placeholder:text-slate-400"
            />
            <button
              type="submit"
              disabled={isSubmitting || !clientEmail}
              className="w-full rounded-xl border border-neon-cyan/70 bg-neon-cyan/10 px-5 py-3 text-sm font-semibold text-neon-cyan hover:shadow-neon disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? contactForm.sending : contactForm.sendButton}
            </button>
          </form>
          {status && (
            <p className="mt-4 text-sm text-slate-700 dark:text-slate-300" aria-live="polite">
              {status}
            </p>
          )}
        </GlassCard>
      </div>
    </section>
  );
}
