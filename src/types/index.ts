export interface CareerLevel {
  id: string;
  title: string;
  status: string;
  description: string;
  softSkills: string[];
  roadmap: string[];
  icon: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Language {
  name: string;
  level: string;
}

export interface ProfileData {
  name: string;
  subtitle: string;
  email: string;
  linkedin: string;
  github: string;
  photo: string;
  about: string;
  cvUrl: string;
  careerLevels: CareerLevel[];
  skillCategories: SkillCategory[];
  languages: Language[];
}
