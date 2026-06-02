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
        {projects.map((project) => {
          const isClickable = Boolean(project.url);
          const hoverLabel = isClickable
            ? language === "ar"
              ? "فتح المشروع"
              : "Visit project"
            : language === "ar"
              ? "تحت التطوير"
              : "Under development";

          const cardContent = (
            <GlassCard className="relative h-full overflow-visible pb-8">
              <div className="mb-4 overflow-hidden rounded-xl border border-slate-200/70 bg-white/60 dark:border-white/10 dark:bg-white/10">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  loading="lazy"
                  className={`h-40 w-full object-cover transition-transform duration-300 ${
                    isClickable ? "group-hover:scale-105" : ""
                  }`}
                />
              </div>
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
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-300 group-hover:opacity-100">
                <span className="inline-flex min-w-40 scale-95 items-center justify-center rounded-full border border-neon-cyan/60 bg-slate-950 px-5 py-3 text-sm font-semibold tracking-wide text-neon-cyan shadow-[0_18px_45px_rgba(34,211,238,0.28)] transition-transform duration-300 group-hover:scale-100">
                  {hoverLabel}
                </span>
              </div>
            </GlassCard>
          );

          if (!isClickable) {
            return (
              <div key={project.title} className="group block h-full cursor-default" aria-label={project.title}>
                {cardContent}
              </div>
            );
          }

          return (
            <a
              key={project.title}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group block h-full"
              aria-label={`Visit ${project.title} project`}
            >
              {cardContent}
            </a>
          );
        })}
      </div>
    </section>
  );
}
