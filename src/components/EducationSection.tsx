import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";

type EducationDetails = {
  university: string;
  degree: string;
  project: string;
  grade: string;
};

interface EducationSectionProps {
  title: string;
  details: EducationDetails;
}

export function EducationSection({ title, details }: EducationSectionProps) {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle title={title} />
      <GlassCard className="max-w-3xl">
        <h3 className="mb-2 text-2xl font-semibold text-slate-900 dark:text-white">{details.university}</h3>
        <p className="mb-1 text-slate-700 dark:text-slate-200">{details.degree}</p>
        <p className="mb-1 text-slate-700 dark:text-slate-200">{details.project}</p>
        <p className="text-neon-cyan">{details.grade}</p>
      </GlassCard>
    </section>
  );
}
