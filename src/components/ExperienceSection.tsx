import { experienceByLanguage } from "../content";
import type { Language } from "../types";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";

interface ExperienceSectionProps {
  title: string;
  language: Language;
}

export function ExperienceSection({ title, language }: ExperienceSectionProps) {
  const experience = experienceByLanguage[language];

  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle title={title} />
      <div className="grid gap-5 md:grid-cols-3">
        {experience.map((item) => (
          <GlassCard key={item.title}>
            <h3 className="mb-2 text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
            <p className="mb-3 text-xs uppercase tracking-wider text-neon-cyan">{item.period}</p>
            <p className="text-sm leading-7 text-slate-700 dark:text-slate-200">{item.description}</p>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
