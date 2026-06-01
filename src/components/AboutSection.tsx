import { GlassCard } from "./GlassCard";
import { SectionTitle } from "./SectionTitle";

interface AboutSectionProps {
  title: string;
  text: string;
}

export function AboutSection({ title, text }: AboutSectionProps) {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-14">
      <SectionTitle title={title} />
      <GlassCard>
        <p className="text-base leading-8 text-slate-700 dark:text-slate-200">{text}</p>
      </GlassCard>
    </section>
  );
}
