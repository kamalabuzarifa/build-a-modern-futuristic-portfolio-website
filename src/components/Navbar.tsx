import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import type { Language, Theme } from "../types";
import { smoothScrollToId } from "../utils/scroll";

interface NavbarProps {
  brandName: string;
  labels: string[];
  language: Language;
  theme: Theme;
  onToggleTheme: () => void;
  onToggleLanguage: () => void;
}

const ids = ["hero", "about", "skills", "projects", "experience", "education", "contact"];

export function Navbar({ brandName, labels, language, theme, onToggleTheme, onToggleLanguage }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const themeToggleLabel = language === "ar" ? "تبديل النمط" : "Toggle theme";
  const menuToggleLabel = language === "ar" ? "فتح القائمة" : "Open menu";

  const goTo = (id: string) => {
    smoothScrollToId(id);
    setOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-300/70 bg-white/70 backdrop-blur-md dark:border-white/10 dark:bg-base-900/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <button onClick={() => goTo("hero")} className="flex items-center gap-2 text-left text-lg font-semibold text-slate-900 dark:text-white">
          <img
            src="/images/logo.png"
            alt="Logo"
            className="h-9 w-9 rounded-full object-cover ring-1 ring-slate-300/70 dark:ring-white/15"
          />
          <span>{brandName}</span>
        </button>

        <nav className="hidden items-center gap-6 md:flex">
          {labels.map((label, i) => (
            <button
              key={label}
              onClick={() => goTo(ids[i])}
              className="text-sm text-slate-700 transition hover:text-neon-cyan dark:text-slate-300"
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={onToggleLanguage}
            className="rounded-full border border-slate-300/80 bg-white/70 px-3 py-1.5 text-xs text-slate-900 transition hover:border-neon-cyan/80 dark:border-white/15 dark:bg-white/5 dark:text-slate-100"
          >
            {language === "en" ? "AR" : "EN"}
          </button>
          <button
            onClick={onToggleTheme}
            aria-label={themeToggleLabel}
            className="rounded-full border border-slate-300/80 bg-white/70 p-2 text-slate-900 transition hover:border-neon-cyan/80 dark:border-white/15 dark:bg-white/5 dark:text-slate-100"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-slate-300/80 bg-white/70 p-2 text-slate-900 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 md:hidden"
            aria-label={menuToggleLabel}
          >
            {open ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-slate-300/70 bg-white/90 px-5 py-3 dark:border-white/10 dark:bg-base-900/95 md:hidden">
          <div className="flex flex-col gap-2">
            {labels.map((label, i) => (
              <button
                key={label}
                onClick={() => goTo(ids[i])}
                className="rounded-lg border border-slate-300/80 bg-white/70 px-3 py-2 text-left text-sm text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
