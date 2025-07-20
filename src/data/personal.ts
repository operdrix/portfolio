import { Experience, PersonalInfo, Project, Skill, SocialLink } from '@/types';

export const personalInfo: PersonalInfo = {
  name: "Olivier PERDRIX",
  title: "Développeur Web Full-Stack",
  email: "olivierperdrix@live.fr", // À remplacer par ton vrai email
  location: "Lyon, France",
  github: "operdrix",
  linkedin: "olivier-perdrix", // À remplacer par ton LinkedIn
  about: "Développeur web passionné, spécialisé dans les technologies modernes React, Next.js et Node.js. Actuellement en poste chez EDF à la centrale nucléaire du Bugey, je combine expertise technique et rigueur industrielle. Diplômé Master 2 en 2025 en Ingénierie du Web de l'école EDSGI Lyon, je m'efforce de créer des applications robustes et performantes.",
  avatar: "/avatar.jpg", // À ajouter plus tard
  birthDate: "1988-06-22"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", icon: "react", level: 90, category: "frontend" },
  { name: "Next.js", icon: "nextjs", level: 90, category: "frontend" },
  { name: "TypeScript", icon: "typescript", level: 85, category: "frontend" },
  { name: "Tailwind CSS", icon: "tailwind", level: 90, category: "frontend" },
  { name: "HTML/CSS", icon: "html", level: 95, category: "frontend" },

  // Backend
  { name: "Node.js", icon: "nodejs", level: 80, category: "backend" },
  { name: "NestJS", icon: "nestjs", level: 75, category: "backend" },
  { name: "Express.js", icon: "express", level: 85, category: "backend" },
  { name: "Strapi", icon: "strapi", level: 80, category: "backend" },

  // Database
  { name: "PostgreSQL", icon: "postgresql", level: 70, category: "database" },
  { name: "MariaDB", icon: "mariadb", level: 80, category: "database" },
  { name: "MongoDB", icon: "mongodb", level: 50, category: "database" },

  // DevOps
  { name: "Docker", icon: "docker", level: 80, category: "devops" },
  { name: "GitHub Actions", icon: "github", level: 75, category: "devops" },
  { name: "Kubernetes", icon: "kubernetes", level: 40, category: "devops" },

  // Autres
  { name: "Git", icon: "git", level: 90, category: "other" },
  { name: "REST APIs", icon: "api", level: 85, category: "other" },
  { name: "Agile/Scrum", icon: "agile", level: 80, category: "other" }
];

export const experiences: Experience[] = [
  {
    id: "edf-bugey",
    title: "Ingénieur en SI",
    company: "EDF - Centrale Nucléaire du Bugey",
    location: "Saint-Vulbas, France",
    startDate: "2019-09",
    current: true,
    description: [
      "Suivi de projets web avec nos développeurs",
      "Référent collaboratif et animateur du réseau Citizen Dev'",
      "Développement d'applications web pour la gestion des opérations nucléaires",
      "Maintenance et amélioration des systèmes existants",
    ],
    technologies: ["React", "Next.js", "TypeScript", "PostgreSQL", "Jira", "Confluence", "Git"],
    logo: "/edf-logo.png"
  },
  {
    id: "esgi-master",
    title: "Master 2 Ingénierie du Web",
    company: "École ESGI Lyon",
    location: "Lyon, France",
    startDate: "2023-09",
    endDate: "2025-06",
    current: true,
    description: [
      "Formation spécialisée en développement web moderne",
      "Projets pratiques avec technologies actuelles",
      "Mémoire sur l'optimisation des performances web"
    ],
    technologies: ["React", "Vue.js", "Node.js", "TypeScript", "Docker", "Kubernetes", "CI/CD", "SEO", "UX/UI"],
    logo: "/esgi-logo.png"
  }
];

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Personnel",
    description: "Portfolio moderne développé avec Next.js et Tailwind CSS, présentant mes compétences et projets avec un design futuriste.",
    image: "/projects/portfolio.jpg",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/operdrix/portfolio",
    liveUrl: "https://olivier-perdrix.vercel.app",
    featured: true,
    category: "web"
  },
  {
    id: "ecommerce-api",
    title: "API E-commerce",
    description: "API REST complète pour une plateforme e-commerce avec authentification, gestion des produits et paiements.",
    image: "/projects/ecommerce-api.jpg",
    technologies: ["NestJS", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    githubUrl: "https://github.com/operdrix/ecommerce-api",
    featured: true,
    category: "api"
  },
  {
    id: "task-manager",
    title: "Gestionnaire de Tâches",
    description: "Application web de gestion de tâches avec interface moderne et fonctionnalités avancées.",
    image: "/projects/task-manager.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Express.js"],
    githubUrl: "https://github.com/operdrix/task-manager",
    featured: false,
    category: "web"
  }
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/operdrix",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/olivier-perdrix",
    icon: "linkedin"
  },
  {
    name: "Email",
    url: "mailto:olivier.perdrix@example.com",
    icon: "mail"
  }
]; 