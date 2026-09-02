export type SkillCategoryKey =
  | "languages"
  | "frontend"
  | "backend"
  | "cloud"
  | "data"
  | "tools";

export const skillCategories: { key: SkillCategoryKey; items: string[] }[] = [
  {
    key: "languages",
    items: ["JavaScript", "TypeScript", "Java", "Python", "C#"],
  },
  {
    key: "frontend",
    items: ["React", "Next.js", "Angular", "React Native", "Electron"],
  },
  {
    key: "backend",
    items: ["Node.js", "Express", "Spring Boot", "Flask", "GraphQL"],
  },
  {
    key: "cloud",
    items: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Serverless"],
  },
  {
    key: "data",
    items: ["MySQL", "MongoDB", "DynamoDB"],
  },
  {
    key: "tools",
    items: ["Git", "Jira", "Jest"],
  },
];

export const experience = [
  {
    company: "Neostella",
    period: { en: "2024 — Present", es: "2024 — Presente" },
    role: { en: "Tech Lead", es: "Tech Lead" },
    description: {
      en: "Greenfield Data Warehouse architecture, custom AI-agent tooling, multi-environment CI/CD.",
      es: "Arquitectura de un Data Warehouse desde cero, herramientas de IA personalizadas, CI/CD multi-entorno.",
    },
  },
  {
    company: "IBM",
    period: { en: "Jul 2024 — Jul 2025", es: "Jul 2024 — Jul 2025" },
    role: { en: "AWS FullStack Developer", es: "Desarrollador FullStack AWS" },
    description: {
      en: "Serverless Java backends with Event Sourcing and DynamoDB.",
      es: "Backends serverless en Java con Event Sourcing y DynamoDB.",
    },
  },
  {
    company: "iNBest",
    period: { en: "Jan 2022 — Jul 2024", es: "Ene 2022 — Jul 2024" },
    role: { en: "Development Team Leader", es: "Líder de Equipo de Desarrollo" },
    description: {
      en: "Led a React/Express team; built a Gen-AI chat interface project.",
      es: "Lideré un equipo de React/Express; proyecto de chat con IA generativa.",
    },
  },
  {
    company: "Bradescard",
    period: { en: "Jul 2022 — Jul 2023", es: "Jul 2022 — Jul 2023" },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    description: {
      en: "Legacy-to-SQL migration, custom authentication and RBAC.",
      es: "Migración de legacy a SQL, autenticación y RBAC personalizados.",
    },
  },
  {
    company: "iNBest",
    period: { en: "Nov 2021 — Jan 2022", es: "Nov 2021 — Ene 2022" },
    role: { en: "Full Stack Developer", es: "Desarrollador Full Stack" },
    description: {
      en: "CRM built from scratch, multiple PWAs, client-facing dashboards.",
      es: "CRM desde cero, múltiples PWAs, dashboards para clientes.",
    },
  },
  {
    company: "Fundación HACE",
    period: { en: "Sep — Dec 2020 · social service", es: "Sep — Dic 2020 · servicio social" },
    role: { en: "WordPress Developer", es: "Desarrollador WordPress" },
    description: {
      en: "Redesigned the foundation's website to better reflect its mission.",
      es: "Rediseño del sitio de la fundación para reflejar mejor su misión.",
    },
  },
];
