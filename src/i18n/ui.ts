import type { TranslationKey, UILanguage } from "./types";

type Translations = Record<UILanguage, Record<string, unknown>>;

export const ui: Translations = {
  es: {
    meta: {
      title: "Portafolio JTRALMA 2026",
      description:
        "Portafolio de un Desarrollador Full-Stack & SysAdmin especializado en FastAPI, Flutter, Linux y Angular.",
    },
    nav: {
      home: "Inicio",
      about: "Sobre mí",
      projects: "Proyectos",
      skills: "Stack Tecnológico",
      distros: "Ecosistema Linux",
    },
    hero: {
      badge1: "Full-Stack Developer",
      badge2: "Fanático de Linux",
      title1: "FULL-STACK",
      title2: "DEVELOPER",
      subtitle:
        "Desarrollador apasionado por la eficiencia y el diseño limpio. Con experiencia en arquitecturas backend robustas, interfaces fluidas y administración de sistemas Linux.",
      ctaProjects: "Ver Proyectos",
      ctaAbout: "Conocer Más",
      scroll: "Scroll",
    },
    about: {
      title: "Sobre",
      titleAccent: "Mí",
      bio1: `Soy un ingeniero apasionado por transformar ideas en productos digitales robustos. Con sólida experiencia en <span class="text-text-accent font-medium">desarrollo backend</span> y <span class="text-text-accent font-medium">infraestructura Linux</span>, diseño arquitecturas que escalan y aplicaciones que deleitan.`,
      bio2: "Mi enfoque combina la precisión del código limpio con la eficiencia operativa. Disfruto automatizar procesos, optimizar rendimiento y crear interfaces móviles con experiencia de usuario impecable.",
      stats: {
        projects: "Proyectos",
        years: "Años",
        coffee: "Café",
      },
      terminal: {
        command: "cat about.txt",
        label: {
          name: "Nombre:",
          role: "Rol:",
          location: "Ubicación:",
        },
        value: {
          name: "Javier",
          role: " Full-Stack → Backend Developer",
          location: "Chile 🌎",
        },
        output: {
          line1: "Construyo sistemas escalables, APIs de alto rendimiento",
          line2: "y aplicaciones multiplataforma con herramientas modernas.",
          line3: "Actualmente profundizando en frameworks de desarrollo web",
          line4: "e infraestructura Linux.",
        },
      },
    },
    projects: {
      title: "Experiencia en Proyectos",
      viewProject: "Ver proyecto",
      list: [
        {
          title: "Sistema de comunicaciones",
          description:
            "Comunicación en tiempo real entre microservicios mediante FastAPI, WebSockets y librerías de manejo de audio.",
        },
        {
          title: "CircularIA - Startup de Economía Circular",
          description:
            "Web app para empresas de reciclaje con panel de control, gestión de residuos y análisis de datos en tiempo real.",
        },
        {
          title: "Dashboard de Monitoreo de microservidores",
          description:
            "Dashboard minimalista para monitorear estado de computadores y la conexión entre ellos para la gestión en las comunicaciones.",
        },
        {
          title: "Configuración de microservidores Linux",
          description:
            "Configuración de microservidores Linux para comunicaciones en tiempo real, incluyendo optimización de red y seguridad.",
        },
      ],
    },
    skills: {
      title: "Stack Tecnológico",
    },
    distros: {
      title: "Ecosistema Linux",
      subtitle:
        "Mi viaje a través de las distribuciones. Desde el minimalismo extremo hasta la estabilidad empresarial.",
      scrollHint: "Desliza para explorar",
      experience: {
        daily: "Uso diario",
        medium: "Media",
        advanced: "Avanzada",
        basic: "Básica",
      },
      mainBadge: "Main OS",
      list: [
        {
          description:
            "Mi sistema operativo principal. Máxima personalización desde cero gestionado con pacman, yay, servicios daemon y entornos de escritorio diferentes.",
        },
        {
          description:
            "Utilizado como entorno de desarrollo secundario y para compilar proyectos con las ventajas que ofrece su amplia compatibilidad de paquetes y soporte comunitario.",
        },
        {
          description:
            "Plataforma de elección para experimentar con los últimos avances en dependencias de desarrollo, contenedores y herramientas de administración de sistemas Linux.",
        },
        {
          description:
            "Utilizado como entorno de trabajo y tareas diarias con interfaz simplificada.",
        },
        {
          description: "Experiencia en entornos de levantamiento de servicios y desarrollo.",
        },
      ],
    },
    footer: {
      madeWith: "Hecho con",
      using: "usando",
      copyright: "© 2026 JTRALMA.DEV — Todos los derechos reservados.",
    },
  },
  en: {
    meta: {
      title: "JTRALMA Portfolio 2026",
      description:
        "Portfolio of a Full-Stack Developer & SysAdmin specialized in FastAPI, Flutter, Linux and Angular.",
    },
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Tech Stack",
      distros: "Linux Ecosystem",
    },
    hero: {
      badge1: "Full-Stack Developer",
      badge2: "Linux Enthusiast",
      title1: "FULL-STACK",
      title2: "DEVELOPER",
      subtitle:
        "Passionate developer driven by efficiency and clean design. Experienced in robust backend architectures, smooth interfaces and Linux systems administration.",
      ctaProjects: "View Projects",
      ctaAbout: "Learn More",
      scroll: "Scroll",
    },
    about: {
      title: "About",
      titleAccent: "Me",
      bio1: `I'm an engineer passionate about turning ideas into robust digital products. With solid experience in <span class="text-text-accent font-medium">backend development</span> and <span class="text-text-accent font-medium">Linux infrastructure</span>, I design scalable architectures and delightful applications.`,
      bio2: "My approach combines clean code precision with operational efficiency. I enjoy automating processes, optimizing performance and creating mobile interfaces with impeccable user experience.",
      stats: {
        projects: "Projects",
        years: "Years",
        coffee: "Coffee",
      },
      terminal: {
        command: "cat about.txt",
        label: {
          name: "Name:",
          role: "Role:",
          location: "Location:",
        },
        value: {
          name: "Javier",
          role: " Full-Stack → Backend Developer",
          location: "Chile 🌎",
        },
        output: {
          line1: "I build scalable systems, high-performance APIs",
          line2: "and cross-platform apps with modern tools.",
          line3: "Currently deepening in web development frameworks",
          line4: "and Linux infrastructure.",
        },
      },
    },
    projects: {
      title: "Project Experience",
      viewProject: "View project",
      list: [
        {
          title: "Communication System",
          description:
            "Real-time communication between microservices using FastAPI, WebSockets and audio processing libraries.",
        },
        {
          title: "CircularIA - Circular Economy Startup",
          description:
            "Web app for recycling companies with control panel, waste management and real-time data analysis.",
        },
        {
          title: "Microserver Monitoring Dashboard",
          description:
            "Minimalist dashboard to monitor computer status and connection between them for communication management.",
        },
        {
          title: "Linux Microserver Configuration",
          description:
            "Configuration of Linux microservers for real-time communications, including network optimization and security.",
        },
      ],
    },
    skills: {
      title: "Tech Stack",
    },
    distros: {
      title: "Linux Ecosystem",
      subtitle:
        "My journey through distributions. From extreme minimalism to enterprise stability.",
      scrollHint: "Swipe to explore",
      experience: {
        daily: "Daily use",
        medium: "Medium",
        advanced: "Advanced",
        basic: "Basic",
      },
      mainBadge: "Main OS",
      list: [
        {
          description:
            "My main operating system. Maximum customization from scratch managed with pacman, yay, daemon services and different desktop environments.",
        },
        {
          description:
            "Used as secondary development environment and for compiling projects with the advantages of its wide package compatibility and community support.",
        },
        {
          description:
            "Platform of choice for experimenting with the latest advances in development dependencies, containers and Linux systems administration tools.",
        },
        {
          description:
            "Used as work environment and daily tasks with simplified interface.",
        },
        {
          description: "Experience in service deployment and development environments.",
        },
      ],
    },
    footer: {
      madeWith: "Made with",
      using: "using",
      copyright: "© 2026 JTRALMA.DEV — All rights reserved.",
    },
  },
};

// Runtime-safe helper to get nested values from the ui object using dot notation
export function getTranslation(
  lang: UILanguage,
  key: TranslationKey
): string {
  const keys = key.split(".");
  let value: unknown = ui[lang];

  for (const k of keys) {
    if (value === null || typeof value !== "object") {
      return key;
    }
    // Handle array access for numeric keys
    if (Array.isArray(value) && !Number.isNaN(Number(k))) {
      value = value[Number(k)];
    } else {
      value = (value as Record<string, unknown>)[k];
    }
  }

  if (typeof value === "string") {
    return value;
  }

  // Fallback: return the key itself if translation missing
  return key;
}

// Typed helpers for array-like translation data
export function getProjects(lang: UILanguage): { title: string; description: string }[] {
  const projects = ui[lang].projects as { list: { title: string; description: string }[] };
  return projects.list;
}

export function getDistroDescriptions(lang: UILanguage): { description: string }[] {
  const distros = ui[lang].distros as { list: { description: string }[] };
  return distros.list;
}

export function getDistroMeta(lang: UILanguage): {
  title: string;
  subtitle: string;
  scrollHint: string;
  mainBadge: string;
  experience: Record<string, string>;
} {
  return ui[lang].distros as {
    title: string;
    subtitle: string;
    scrollHint: string;
    mainBadge: string;
    experience: Record<string, string>;
  };
}
