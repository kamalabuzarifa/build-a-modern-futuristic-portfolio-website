import { motion } from "framer-motion";
import { Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import { TypingText } from "./TypingText";
import { smoothScrollToId } from "../utils/scroll";
import { InteractiveTilt } from "./InteractiveTilt";

interface HeroSectionProps {
  name: string;
  greeting: string;
  roles: string[];
  ctaPrimary: string;
  ctaSecondary: string;
}

export function HeroSection({ name, greeting, roles, ctaPrimary, ctaSecondary }: HeroSectionProps) {
  return (
    <section id="hero" className="relative pt-32">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 pb-16 md:grid-cols-2 md:items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4 text-sm uppercase tracking-[0.28em] text-neon-cyan">{greeting}</p>
          <h1 className="mb-4 text-4xl font-black leading-tight text-slate-900 dark:text-white md:text-6xl">
            {name}
          </h1>
          <p className="mb-8 text-xl font-medium text-slate-700 dark:text-slate-200">
            <TypingText items={roles} />
          </p>
          <div className="mb-7 flex flex-wrap gap-3">
            <button
              onClick={() => smoothScrollToId("projects")}
              className="rounded-xl border border-neon-cyan/70 bg-neon-cyan/10 px-5 py-3 text-sm font-semibold text-neon-cyan transition hover:-translate-y-0.5 hover:shadow-neon"
            >
              {ctaPrimary}
            </button>
            <button
              onClick={() => smoothScrollToId("contact")}
              className="rounded-xl border border-slate-300/80 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 dark:border-white/15 dark:bg-white/5 dark:text-white"
            >
              {ctaSecondary}
            </button>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <a className="rounded-full border border-slate-300/80 bg-white/70 p-3 text-slate-700 hover:border-neon-cyan hover:text-neon-cyan dark:border-white/15 dark:bg-white/5 dark:text-slate-200" href="mailto:kamalabuzarifa@gmail.com" aria-label="Email">
              <Mail size={18} />
            </a>
            <a className="rounded-full border border-slate-300/80 bg-white/70 p-3 text-slate-700 hover:border-neon-cyan hover:text-neon-cyan dark:border-white/15 dark:bg-white/5 dark:text-slate-200" href="https://www.linkedin.com/in/kamal-abuzarifa-777887330/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a className="rounded-full border border-slate-300/80 bg-white/70 p-3 text-slate-700 hover:border-neon-cyan hover:text-neon-cyan dark:border-white/15 dark:bg-white/5 dark:text-slate-200" href="https://github.com/kamalabuzarifa" target="_blank" rel="noreferrer" aria-label="GitHub">
              <Github size={18} />
            </a>
            <a className="rounded-full border border-slate-300/80 bg-white/70 p-3 text-slate-700 hover:border-neon-cyan hover:text-neon-cyan dark:border-white/15 dark:bg-white/5 dark:text-slate-200" href="https://www.facebook.com/kamalAbuZarifa2003" target="_blank" rel="noreferrer" aria-label="Facebook">
              <Facebook size={18} />
            </a>
            <a className="rounded-full border border-slate-300/80 bg-white/70 p-3 text-slate-700 hover:border-neon-cyan hover:text-neon-cyan dark:border-white/15 dark:bg-white/5 dark:text-slate-200" href="https://www.instagram.com/eng_kamal_2003" target="_blank" rel="noreferrer" aria-label="Instagram">
              <Instagram size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="animate-float"
        >
          <InteractiveTilt innerClassName="rounded-2xl" maxTilt={12} hoverScale={1.02}>
            <div className="overflow-hidden rounded-2xl border border-slate-300/80 bg-white/70 shadow-neon backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <img
                src="/images/profile.jpeg"
                alt="Kamal Abu Zarifa"
                className="h-[260px] w-full object-cover md:h-[360px]"
              />
            </div>
          </InteractiveTilt>
        </motion.div>
      </div>
    </section>
  );
}
