import { skillGroupsByLanguage } from "../content";
import type { Language } from "../types";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";

interface SkillsSectionProps {
  title: string;
  language: Language;
}

export function SkillsSection({ title, language }: SkillsSectionProps) {
  const skillGroups = skillGroupsByLanguage[language];

  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle title={title} />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map((group) => (
          <GlassCard key={group.title}>
            <h3 className="mb-4 text-xl font-semibold text-slate-900 dark:text-white">{group.title}</h3>
            <ul className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-neon-cyan/40 bg-neon-cyan/10 px-3 py-1 text-xs text-neon-cyan"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
