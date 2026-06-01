import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { InteractiveTilt } from "./InteractiveTilt";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <InteractiveTilt className="h-full" innerClassName="h-full rounded-2xl" maxTilt={8} hoverScale={1.015}>
      <motion.article
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
        className={`h-full rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-glass backdrop-blur-md dark:border-white/10 dark:bg-white/5 ${className}`}
      >
        {children}
      </motion.article>
    </InteractiveTilt>
  );
}
