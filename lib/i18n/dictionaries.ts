export type Dictionary = {
  nav: {
    home: string;
    about: string;
    skills: string;
    experience: string;
    projects: string;
    hobbies: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    location: string;
    ctaCv: string;
    ctaContact: string;
    scrollHint: string;
  };
  about: {
    title: string;
    paragraphs: string[];
  };
  skills: {
    title: string;
    categories: Record<
      "languages" | "frontend" | "backend" | "cloud" | "data" | "tools",
      string
    >;
    softTitle: string;
    soft: string[];
    languagesTitle: string;
    languagesSpoken: { lang: string; level: string }[];
    certsTitle: string;
    certs: string[];
  };
  experience: {
    title: string;
  };
  projects: {
    title: string;
    comingSoonBadge: string;
    description: string;
  };
  hobbies: {
    title: string;
    items: { label: string; icon: string }[];
  };
  contact: {
    title: string;
    description: string;
    cta: string;
    email: string;
    linkedin: string;
    github: string;
  };
  footer: {
    rights: string;
    madeWith: string;
  };
};

export const dictionaries: Record<"en" | "es", Dictionary> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      hobbies: "Hobbies",
      contact: "Contact",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Jorge Salgado",
      role: "FullStack Developer | Team Leader",
      location: "Guadalajara, Jalisco, Mexico",
      ctaCv: "Download CV",
      ctaContact: "Contact me",
      scrollHint: "Scroll to explore",
    },
    about: {
      title: "About Me",
      paragraphs: [
        "I'm a Computer Systems Engineer, graduated from Tecnológico de Monterrey, Guadalajara campus. I currently work as Tech Lead at Neostella, leading the architecture of a greenfield Data Warehouse and championing a DevOps culture across the team.",
        "I'm passionate about building web applications that solve real problems, and I'm constantly learning — right now my focus is on AI, data, and serverless architecture on AWS (AWS Cloud Practitioner and AWS Developer certified).",
        "Leadership is something I genuinely enjoy — I've taken courses that helped me grow into someone who supports and elevates the teams I work with.",
        "Outside of code, you'll find me reading, playing video games, watching anime, or at the gym.",
      ],
    },
    skills: {
      title: "Skills",
      categories: {
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud & DevOps",
        data: "Data",
        tools: "Tools",
      },
      softTitle: "Soft Skills",
      soft: [
        "Resilient",
        "Open to dialogue",
        "Strong team player",
        "Great communicator",
        "Leadership",
        "Mentoring",
        "Conflict resolution",
        "Strategic thinking",
      ],
      languagesTitle: "Languages Spoken",
      languagesSpoken: [
        { lang: "Spanish", level: "Native" },
        { lang: "English", level: "B2 · BULATS certified" },
        { lang: "French", level: "2 years in high school" },
        { lang: "Korean", level: "Studying as a hobby" },
      ],
      certsTitle: "Certifications",
      certs: ["AWS Certified Cloud Practitioner", "AWS Certified Developer"],
    },
    experience: {
      title: "Experience",
    },
    projects: {
      title: "Projects",
      comingSoonBadge: "Coming soon",
      description:
        "I'm currently curating a selection of projects and live demos to showcase here. Check back soon.",
    },
    hobbies: {
      title: "Beyond the Code",
      items: [
        { label: "Reading", icon: "BookOpen" },
        { label: "Music & Podcasts", icon: "Headphones" },
        { label: "Side Projects", icon: "Code2" },
        { label: "Video Games", icon: "Gamepad2" },
        { label: "Anime", icon: "Clapperboard" },
        { label: "Gym", icon: "Dumbbell" },
      ],
    },
    contact: {
      title: "Let's Talk",
      description:
        "Whether it's a project, an opportunity, or just to say hi — my inbox is open.",
      cta: "Say hello",
      email: "Email",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "All rights reserved.",
      madeWith: "Built with Next.js.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      skills: "Habilidades",
      experience: "Experiencia",
      projects: "Proyectos",
      hobbies: "Pasatiempos",
      contact: "Contacto",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Jorge Salgado",
      role: "FullStack Developer | Team Leader",
      location: "Guadalajara, Jalisco, México",
      ctaCv: "Descargar CV",
      ctaContact: "Contáctame",
      scrollHint: "Desplázate para explorar",
    },
    about: {
      title: "Sobre mí",
      paragraphs: [
        "Soy Ingeniero en Sistemas Computacionales egresado del Tecnológico de Monterrey, campus Guadalajara. Actualmente soy Tech Lead en Neostella, liderando la arquitectura de un Data Warehouse desde cero y una cultura DevOps en el equipo.",
        "Me apasiona crear aplicaciones web que resuelvan problemas reales, y siempre estoy aprendiendo algo nuevo — hoy mi enfoque está en inteligencia artificial, datos y arquitecturas serverless en AWS (cuento con las certificaciones AWS Cloud Practitioner y AWS Developer).",
        "El liderazgo es algo que disfruto profundamente: he tomado cursos que me han ayudado a mejorar la forma en que acompaño y potencio a los equipos con los que trabajo.",
        "Fuera del código, me encontrarás leyendo, jugando videojuegos, viendo anime o entrenando en el gym.",
      ],
    },
    skills: {
      title: "Habilidades",
      categories: {
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        cloud: "Cloud & DevOps",
        data: "Datos",
        tools: "Herramientas",
      },
      softTitle: "Habilidades Blandas",
      soft: [
        "Resiliente",
        "Abierto al diálogo",
        "Buen desempeño en equipo",
        "Buena comunicación",
        "Liderazgo",
        "Mentoría",
        "Resolución de conflictos",
        "Pensamiento estratégico",
      ],
      languagesTitle: "Idiomas",
      languagesSpoken: [
        { lang: "Español", level: "Nativo" },
        { lang: "Inglés", level: "B2 · Certificado BULATS" },
        { lang: "Francés", level: "2 años en la prepa" },
        { lang: "Coreano", level: "Estudio como pasatiempo" },
      ],
      certsTitle: "Certificaciones",
      certs: ["AWS Cloud Practitioner", "AWS Developer"],
    },
    experience: {
      title: "Experiencia",
    },
    projects: {
      title: "Proyectos",
      comingSoonBadge: "Próximamente",
      description:
        "Actualmente estoy preparando una selección de proyectos y demos en vivo para mostrar aquí. Vuelve pronto.",
    },
    hobbies: {
      title: "Más Allá del Código",
      items: [
        { label: "Lectura", icon: "BookOpen" },
        { label: "Música y Podcasts", icon: "Headphones" },
        { label: "Proyectos Personales", icon: "Code2" },
        { label: "Videojuegos", icon: "Gamepad2" },
        { label: "Anime", icon: "Clapperboard" },
        { label: "Gym", icon: "Dumbbell" },
      ],
    },
    contact: {
      title: "Hablemos",
      description:
        "Ya sea por un proyecto, una oportunidad, o solo para saludar — mi bandeja está abierta.",
      cta: "Saludar",
      email: "Correo",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      madeWith: "Construido con Next.js.",
    },
  },
};

export type Locale = keyof typeof dictionaries;
