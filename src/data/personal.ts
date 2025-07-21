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
    title: "Mastère 2 en Ingénierie du Web",
    company: "École ESGI Lyon",
    location: "Lyon, France",
    startDate: "2023-09",
    endDate: "2025-06",
    current: true,
    description: [
      "Formation en alternance spécialisée en développement web Full-Stack",
      "Projets pratiques, hackathons et challenges techniques",
      "Formation dispensée par des experts du milieu professionnel"
    ],
    technologies: ["React", "Vue.js", "Node.js", "TypeScript", "Docker", "Kubernetes", "CI/CD", "DevOps", "Agile/Scrum", "Big Data", "IA", "Cybersécurité"],
    logo: "/esgi-logo.png"
  },
  {
    id: "esgi-bachelor",
    title: "Bachelor Ingénierie du Web",
    company: "École ESGI Lyon",
    location: "Lyon, France",
    startDate: "2022-09",
    endDate: "2023-06",
    current: false,
    description: [
      "Début de reprise d'études après 10 ans d'expérience professionnelle.",
      "Formation en alternance en développement web et technologies modernes",
      "Projets pratiques et mise en œuvre de solutions informatiques",
      "Administration d'environnements système et réseaux",
      "Développement d'applications web et mobiles"
    ],
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "Git", "Linux", "Réseaux", "Sécurité"],
    logo: "/esgi-logo.png"
  },
  {
    id: "edf-past",
    title: "Technicien puis Chargé d'affaire Tranche en Marche",
    company: "EDF - Centrale Nucléaire du Bugey",
    location: "Saint-Vulbas, France",
    startDate: "2009-09",
    endDate: "2019-09",
    current: false,
    description: [
      "Technicien essayeur et chargé de travaux dans le domaine des Essais périodiques.",
      "Chargé d'affaire tranche en marche dans le même domaine.",
    ],
    logo: "/edf-logo.png"
  },

];

export const projects: Project[] = [
  {
    id: "portfolio",
    title: "Portfolio Personnel",
    description: "Portfolio moderne développé avec Next.js et Tailwind CSS, présentant mes compétences et projets avec un design futuriste.",
    image: "/projects/portfolio-image.png",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/operdrix/portfolio",
    liveUrl: "https://labodolivier.com",
    featured: true,
    category: "web"
  },
  {
    id: "axigni-app",
    title: "CRM Axignis",
    description: "Projet de fin d'études pour la société Axignis. Application complète de gestion des ERP.",
    image: "/projects/axignis-image.png",
    technologies: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Docker", "JWT"],
    githubUrl: "https://github.com/Projet-annuel-Axignis",
    featured: true,
    category: "web"
  },
  {
    id: "Skyjo-app",
    title: "Skyjo en ligne",
    description: "Un Skyjo en ligne pour jouer en simultané jusqu'à 4 joueurs",
    image: "/projects/skyjo-image-2.png",
    technologies: ["React", "Node.js", "Fastify", "MariaDB", "Docker", "CI/CD"],
    githubUrl: "https://github.com/operdrix/skyjo-react",
    liveUrl: "https://skyjo.labodolivier.com/",
    featured: true,
    category: "web"
  },
  {
    id: "Sevices.ceo",
    title: "Services.ceo",
    description: "Une plateforme de mise en relation entre entreprises et particuliers pour des services de proximité. Boostée par l'IA",
    image: "/projects/services-image.png",
    technologies: ["React", "Nest.JS", "Tailwind CSS", "MUI", "n8n"],
    githubUrl: "https://github.com/Hackathon-Grp-1",
    liveUrl: "https://services.loan-cb.fr/",
    featured: false,
    category: "web"
  },
  {
    id: "octopus",
    title: "Octopus PSP",
    description: "Logiciel de gestion des compétitions de PSP. Logiciel officiel de la fédération française FFESSM de PSP. Ce logiciel permet la gestion complète des épreuves et compétiteurs, de l'inscription à l'édition des résultats.",
    image: "/projects/octopus-image.png",
    technologies: ["Excel", "VBA"],
    featured: false,
    category: "other"
  },
  {
    id: "github",
    title: "Autres projets",
    description: "Autres projets sur mon GitHub",
    image: "/projects/github-image.svg",
    technologies: ["Repositories", "Actions", "Projects"],
    githubUrl: "https://github.com/operdrix",
    featured: false,
    category: "other"
  }

];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: `https://github.com/${personalInfo.github}`,
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: `https://www.linkedin.com/in/${personalInfo.linkedin}`,
    icon: "linkedin"
  },
  {
    name: "Email",
    url: `mailto:${personalInfo.email}`,
    icon: "mail"
  }
]; 