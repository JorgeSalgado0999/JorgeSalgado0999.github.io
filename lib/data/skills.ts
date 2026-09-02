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
    period: { en: "Jul 2025 — Present", es: "Jul 2025 — Presente" },
    role: { en: "Tech Lead", es: "Tech Lead" },
    description: {
      en: "Greenfield Data Warehouse architecture, custom AI-agent tooling, multi-environment CI/CD.",
      es: "Arquitectura de un Data Warehouse desde cero, herramientas de IA personalizadas, CI/CD multi-entorno.",
    },
    highlights: {
      en: [
        "Led end-to-end architecture of a greenfield Data Warehouse using a monorepo structure.",
        "Accelerated delivery by 25% with custom AI agents and Cursor rules for docs, backend standards, and scaffolding.",
        "Reduced production bugs by 20% with a multi-environment CI/CD pipeline (Dev/QA/Staging/Prod).",
        "Engineered serverless infrastructure on AWS Lambda, S3, SES, Cognito, CloudFront, and CloudWatch.",
      ],
      es: [
        "Lideré la arquitectura de un Data Warehouse desde cero usando una estructura monorepo.",
        "Aceleré la entrega en un 25% con agentes de IA personalizados y reglas de Cursor para documentación, estándares de backend y scaffolding.",
        "Reduje los bugs en producción en un 20% con un pipeline CI/CD multi-entorno (Dev/QA/Staging/Prod).",
        "Diseñé infraestructura serverless en AWS Lambda, S3, SES, Cognito, CloudFront y CloudWatch.",
      ],
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
    highlights: {
      en: [
        "Built backend services and business logic in Java on AWS using Event Sourcing patterns.",
        "Managed high-performance data persistence with AWS DynamoDB.",
        "Automated GitHub-to-Lambda deployment pipelines with infrastructure as code (SAM/Serverless Framework).",
        "Integrated SQS, SNS, S3, and API Gateway into production Java applications.",
      ],
      es: [
        "Construí servicios backend y lógica de negocio en Java sobre AWS usando patrones de Event Sourcing.",
        "Gestioné persistencia de datos de alto rendimiento con AWS DynamoDB.",
        "Automaticé pipelines de despliegue de GitHub a Lambda con infraestructura como código (SAM/Serverless Framework).",
        "Integré SQS, SNS, S3 y API Gateway en aplicaciones Java de producción.",
      ],
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
    highlights: {
      en: [
        "Led full-stack development in React (TypeScript) and Express (TypeScript).",
        "Built the \"Tesseract\" chat interface integrating Gen AI and AWS Tesseract for real-time query resolution.",
        "Guided the team with structured goal-setting and feedback mechanisms that boosted productivity.",
        "Cultivated client relationships that increased satisfaction and retention.",
      ],
      es: [
        "Lideré el desarrollo full-stack en React (TypeScript) y Express (TypeScript).",
        "Construí la interfaz de chat \"Tesseract\" integrando IA generativa y AWS Tesseract para resolución de consultas en tiempo real.",
        "Guié al equipo con metas estructuradas y mecanismos de retroalimentación que aumentaron la productividad.",
        "Cultivé relaciones con clientes que incrementaron la satisfacción y retención.",
      ],
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
    note: {
      en: "University internship — earned through prior experience, overlapping with the iNBest role.",
      es: "Prácticas profesionales universitarias — obtenidas por experiencia previa, en paralelo con el rol en iNBest.",
    },
    highlights: {
      en: [
        "Managed the full-cycle migration from Legacy Access to a SQL database (React frontend, Express backend).",
        "Implemented custom authentication, session management, and Role-Based Access Control (RBAC).",
        "Aligned requirement gathering and architecture planning with enterprise quality standards.",
      ],
      es: [
        "Gestioné la migración completa de Legacy Access a una base de datos SQL (frontend en React, backend en Express).",
        "Implementé autenticación personalizada, gestión de sesiones y control de acceso basado en roles (RBAC).",
        "Alineé el levantamiento de requerimientos y la planeación de arquitectura con estándares empresariales de calidad.",
      ],
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
    highlights: {
      en: [
        "Built a CRM system from scratch using React, Express, Python, and AWS services.",
        "Produced multiple Progressive Web Apps (PWAs) with Vite, React, Ionic, and Angular.",
        "Designed a web app managing Power BI dashboard permissions on Azure.",
        "Improved project delivery times by 25% through reusable standards, templates, and components.",
      ],
      es: [
        "Construí un sistema CRM desde cero usando React, Express, Python y servicios de AWS.",
        "Produje múltiples Progressive Web Apps (PWAs) con Vite, React, Ionic y Angular.",
        "Diseñé una aplicación web para gestionar permisos de dashboards de Power BI en Azure.",
        "Mejoré los tiempos de entrega en un 25% mediante estándares, plantillas y componentes reutilizables.",
      ],
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
    highlights: {
      en: [
        "Redesigned the foundation's WordPress website to better reflect its identity and mission.",
        "Revamped the blog for improved usability and engagement.",
        "Initiated development of an e-commerce platform to expand fundraising opportunities.",
      ],
      es: [
        "Rediseñé el sitio WordPress de la fundación para reflejar mejor su identidad y misión.",
        "Renové el blog para mejorar la usabilidad y el engagement.",
        "Inicié el desarrollo de una plataforma de e-commerce para ampliar oportunidades de recaudación.",
      ],
    },
  },
];
