export type Language = "en" | "ar";
export type Theme = "dark" | "light";

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  subtitle?: string;
  description: string;
  features: string[];
  technologies: string[];
}

export interface ExperienceItem {
  title: string;
  period: string;
  description: string;
}
