import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { AboutSection } from "./components/AboutSection";
import { ContactSection } from "./components/ContactSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ParticleBackground } from "./components/ParticleBackground";
import { ProjectsSection } from "./components/ProjectsSection";
import { SkillsSection } from "./components/SkillsSection";
import { content } from "./content";
import type { Language, Theme } from "./types";

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language") as Language | null;
    return savedLanguage ?? "en";
  });
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme ?? "dark";
  });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    localStorage.setItem("language", language);
  }, [language]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMouse({ x, y });
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useEffect(() => {
    const key = "scroll-position";
    const saved = localStorage.getItem(key);

    if (saved && !window.location.hash) {
      const savedY = Number(saved);
      if (!Number.isNaN(savedY)) {
        window.scrollTo(0, savedY);
      }
    }

    let timeoutId: number | undefined;
    const saveScroll = () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }

      timeoutId = window.setTimeout(() => {
        localStorage.setItem(key, String(window.scrollY));
      }, 120);
    };

    window.addEventListener("scroll", saveScroll, { passive: true });
    window.addEventListener("beforeunload", saveScroll);

    return () => {
      window.removeEventListener("scroll", saveScroll);
      window.removeEventListener("beforeunload", saveScroll);
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  const t = useMemo(() => content[language], [language]);

  return (
    <div className={theme}>
      <div className="min-h-screen overflow-x-hidden bg-slate-100 text-slate-900 transition-colors duration-500 dark:bg-base-950 dark:text-slate-100">
        <a href="#hero" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[70] focus:rounded-lg focus:bg-neon-cyan focus:px-3 focus:py-2 focus:text-black">
          {t.skipToContent}
        </a>

        <ParticleBackground />
        <motion.div
          aria-hidden
          className="pointer-events-none fixed -z-10 h-72 w-72 rounded-full bg-neon-cyan/20 blur-3xl"
          animate={{
            x: mouse.x * 35 + 120,
            y: mouse.y * 35 + 220
          }}
          transition={{ type: "spring", stiffness: 60, damping: 18 }}
        />

        <Navbar
          brandName={t.hero.name}
          labels={t.nav}
          language={language}
          theme={theme}
          onToggleTheme={() => setTheme((v) => (v === "dark" ? "light" : "dark"))}
          onToggleLanguage={() => setLanguage((v) => (v === "en" ? "ar" : "en"))}
        />

        <main>
          <HeroSection
            name={t.hero.name}
            greeting={t.hero.greeting}
            roles={t.hero.roles}
            ctaPrimary={t.hero.ctaPrimary}
            ctaSecondary={t.hero.ctaSecondary}
          />
          <AboutSection title={t.about.title} text={t.about.text} />
          <SkillsSection title={t.skillsTitle} language={language} />
          <ProjectsSection title={t.projectsTitle} language={language} />
          <ExperienceSection title={t.experienceTitle} language={language} />
          <EducationSection title={t.educationTitle} details={t.education} />
          <ContactSection
            title={t.contactTitle}
            description={t.contactDescription}
            contactInfoLabels={t.contactInfoLabels}
            contactForm={t.contactForm}
          />
        </main>

        <Footer text={t.footer} />
      </div>
    </div>
  );
}

export default App;
