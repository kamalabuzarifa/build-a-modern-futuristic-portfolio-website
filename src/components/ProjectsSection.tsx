import { projectsByLanguage } from "../content";
import type { Language } from "../types";
import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";

interface ProjectsSectionProps {
  title: string;
  language: Language;
}

export function ProjectsSection({ title, language }: ProjectsSectionProps) {
  const projects = projectsByLanguage[language];

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle title={title} />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <GlassCard key={project.title} className="h-full">
            <div className="mb-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
              {project.subtitle && <p className="text-sm text-neon-cyan">{project.subtitle}</p>}
            </div>
            <p className="mb-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{project.description}</p>
            <ul className="mb-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              {project.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-slate-300/80 bg-white/70 px-3 py-1 text-xs text-slate-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}
