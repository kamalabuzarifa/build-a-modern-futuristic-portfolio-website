import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
}

export function SectionTitle({ title }: SectionTitleProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="mb-10 text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl"
    >
      <span className="bg-gradient-to-r from-neon-cyan to-neon-blue bg-clip-text text-transparent">{title}</span>
    </motion.h2>
  );
}
