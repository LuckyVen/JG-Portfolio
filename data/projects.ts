export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  challenge: string;
  solution: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

export const PROJECTS: Project[] = [
  {
    id: "waweks-crispy-pata",
    number: "01",
    title: "WAWEK'S CRISPY PATA",
    subtitle: "RESTO & ORDER MANAGEMENT SYSTEM",
    category: "Full-Stack Web Application",
    year: "2025",
    description: "A digital ordering, kitchen management, and point-of-sale ecosystem engineered for high-volume restaurant operations.",
    challenge: "Handling concurrent online orders and synchronizing kitchen inventory status in real-time without latency spikes during peak service hours.",
    solution: "Designed a lightweight C# / ASP.NET Core REST API backed by an optimized SQL database, paired with a dynamic React web dashboard for instant state synchronization.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "C#", "ASP.NET Core", "SQL"],
    image: "/images/projects/waweks.jpg",
    githubUrl: "https://github.com/johngabriel/waweks-crispy-pata",
    liveUrl: "https://waweks-crispy-pata.vercel.app"
  },
  {
    id: "wilderness-survival",
    number: "02",
    title: "WILDERNESS SURVIVAL",
    subtitle: "2D ISOMETRIC SURVIVAL GAME",
    category: "Game Development",
    year: "2024",
    description: "An immersive 2D top-down survival exploration game featuring dynamic weather, inventory crafting systems, and procedural tile generation.",
    challenge: "Optimizing 2D light path rendering and dynamic grid pathfinding for enemy AI while preserving 60+ FPS on mid-tier mobile and desktop devices.",
    solution: "Implemented custom node-based tilemap chunking in Godot and optimized game loops with strongly typed C# scripts.",
    technologies: ["Godot Engine", "C#", "Aseprite", "Game Design"],
    image: "/images/projects/wilderness.jpg",
    githubUrl: "https://github.com/johngabriel/wilderness-survival",
    liveUrl: "https://itch.io/wilderness-survival"
  },
  {
    id: "gym-management-system",
    number: "03",
    title: "GYM MANAGEMENT",
    subtitle: "MEMBERSHIP & SUBSCRIBER PLATFORM",
    category: "Enterprise Software",
    year: "2024",
    description: "An administrative membership management system handling recurring subscriptions, trainer scheduling, and access control validation.",
    challenge: "Creating an effortless UX for non-technical staff to quickly process daily check-ins while running complex monthly revenue analytics.",
    solution: "Built a sleek, high-contrast dashboard with instant search indexing and streamlined payment status tracking.",
    technologies: ["React", "Tailwind CSS", "ASP.NET Core", "SQL Server"],
    image: "/images/projects/gym.jpg",
    githubUrl: "https://github.com/johngabriel/gym-management",
    liveUrl: "https://gym-admin-portal.vercel.app"
  }
];

export const SKILL_GROUPS = [
  {
    title: "FRONTEND",
    skills: ["HTML5", "CSS3 / SCSS", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "BACKEND & DATABASE",
    skills: ["C#", "ASP.NET Core", "Node.js", "REST APIs", "SQL / PostgreSQL", "Entity Framework"]
  },
  {
    title: "GAME DEV & OTHER",
    skills: ["Godot Engine", "C# for Games", "Git / GitHub", "VS Code", "Visual Studio", "Figma"]
  },
  {
    title: "EXPLORING & CLOUD",
    skills: ["AWS Basics", "Docker", "Cloud Architecture", "CI/CD Pipelines", "Serverless Functions"]
  }
];

export const TIMELINE_ITEMS = [
  {
    year: "2026 - PRESENT",
    title: "Specializing in Cloud Architecture & Full-Stack Systems",
    role: "IT Student & Software Developer",
    description: "Deepening expertise in distributed systems, modern web frameworks, and cloud application design."
  },
  {
    year: "2025",
    title: "Engineered Restaurant & Administrative Systems",
    role: "Full-Stack Project Lead",
    description: "Built end-to-end full-stack software including Wawek's Crispy Pata ordering system using React, C#, and SQL databases."
  },
  {
    year: "2024",
    title: "Explored Game Mechanics & Systems Programming",
    role: "Indie Game Developer",
    description: "Designed procedural algorithms and inventory mechanics in Godot Engine using C#."
  },
  {
    year: "2022 - 2023",
    title: "Foundational Software Engineering",
    role: "IT Student",
    description: "Began academic journey focused on algorithm complexity, relational database architecture, and object-oriented design."
  }
];