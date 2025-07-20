// Types pour les données du portfolio

export interface Skill {
  name: string;
  icon: string;
  level: number; // 1-100
  category: 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  description: string[];
  technologies?: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  category: 'web' | 'mobile' | 'api' | 'other';
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  location: string;
  github: string;
  linkedin?: string;
  about: string;
  avatar?: string;
  birthDate: string;
}

export interface Section {
  id: string;
  title: string;
  component: React.ComponentType;
}

// Types pour les animations
export interface AnimationProps {
  delay?: number;
  duration?: number;
  once?: boolean;
}

// Types pour les thèmes
export type Theme = 'dark' | 'light';

// Types pour les composants
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  href?: string;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
}

export interface SectionProps {
  id: string;
  children: React.ReactNode;
  className?: string;
} 