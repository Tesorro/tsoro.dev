export type Skill = {
  name: string;
  level?: 'basic' | 'mid' | 'pro';
  years?: number;
};
export type Project = {
  title: string;
  description: string;
  tech: string[];
  repo?: string;
  demo?: string;
  image?: string;
  role?: string;
  highlights?: string[];
};
export type Job = {
  company: string;
  role: string;
  period: { from: string; to?: string };
  stack: string[];
  achievements: string[];
};
