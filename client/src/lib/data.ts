/*
 * MIDNIGHT CIRCUIT — content data (real verified content only, per spec).
 * No invented stats, clients, or achievements.
 */

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const MARQUEE_ROW_1 = [
  "Python",
  "FastAPI",
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "MySQL",
];

export const MARQUEE_ROW_2 = [
  "MongoDB",
  "SQLAlchemy",
  "JWT",
  "Google Gemini",
  "Docker",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Framer Motion",
];

export type SkillCategory = {
  index: string;
  title: string;
  items: string[];
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    index: "01",
    title: "Languages",
    items: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    index: "02",
    title: "Frontend",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "JavaFX"],
  },
  {
    index: "03",
    title: "Backend",
    items: [
      "FastAPI",
      "Flask",
      "REST APIs",
      "JWT Authentication",
      "SQLAlchemy",
      "Alembic",
      "Docker",
    ],
  },
  { index: "04", title: "Databases", items: ["MySQL", "MongoDB", "DBMS"] },
  {
    index: "05",
    title: "AI & Tools",
    items: [
      "Google Gemini API",
      "Prompt Engineering",
      "MCP Fundamentals",
      "Git",
      "GitHub",
    ],
  },
  {
    index: "06",
    title: "Core Engineering",
    items: ["OOP", "DSA", "Software Design Patterns"],
  },
  {
    index: "07",
    title: "Soft Skills",
    items: ["Problem Solving", "Teamwork"],
  },
  {
    index: "08",
    title: "Languages",
    items: ["English — Native", "Urdu — Proficient"],
  },
];

export const EXPERIENCE = {
  role: "Front-end AI Engineering Intern",
  company: "FlyRank",
  date: "July 2026 – August 2026",
  location: "Remote",
  description:
    "Building AI-integrated web applications as part of a structured internship program, working with accessible UI components, streaming AI chat interfaces, and agentic tool-based experiences.",
  responsibilities: [
    "Prompt engineering",
    "AI workflow automation",
    "MCP fundamentals",
    "Component development",
    "Testing",
    "Accessibility and performance audits",
    "Production deployment",
  ],
};

export type Project = {
  number: string;
  name: string;
  category: string;
  stack: string[];
  description: string;
  highlights?: string[];
  github?: string;
  live?: string;
  badge?: string;
};

export const PROJECTS: Project[] = [
{
number: "01",
name: "ML Internship Project",
category: "Machine Learning / Internship",
stack: [
"Python",
"Machine Learning",
"Data Analysis",
"Model Evaluation",
],
description:
"Upcoming machine learning case study from my internship, documenting the problem, implementation approach, experimentation, and resulting outcome as the work progresses.",
highlights: [
"Upcoming internship project",
"Machine learning workflow",
"Data preparation and analysis",
"Model development",
"Evaluation and experimentation",
],
badge: "Upcoming Case Study",
},
{
number: "02",
name: "The Last Story",
category: "AI / Full Stack",
stack: [
"React",
"TypeScript",
"Google Gemini AI",
"AI Integration",
"Tailwind CSS",
"Framer Motion",
],
description:
"AI-powered web experience built as a customer-facing application, integrating Google Gemini to provide an interactive AI-assisted experience through a polished React interface.",
highlights: [
"Google Gemini API integration",
"AI-powered user experience",
"React-based frontend",
"Interactive UI",
"Responsive design",
"Production deployment",
],
github: "https://github.com/nimraaijaz/the-last-world",
live: "https://the-last-world.netlify.app/",
badge: "Live Project",
},
{
number: "03",
name: "AI Interview Coach",
category: "AI / Full Stack",
stack: [
"FastAPI",
"Next.js",
"TypeScript",
"MySQL",
"SQLAlchemy",
"JWT",
"Google Gemini AI",
"React Query",
"React Hook Form",
"Tailwind CSS",
"Framer Motion",
"ReportLab",
],
description:
"Full-stack AI mock-interview platform where authenticated users select a role, receive AI-generated interview questions, and receive structured feedback and scoring on their answers.",
highlights: [
"JWT authentication",
"AI-generated interview questions",
"Gemini API integration",
"MySQL relational database",
"SQLAlchemy ORM",
"Alembic migrations",
"REST APIs with FastAPI",
"React/Next.js frontend",
"Automated PDF feedback reports",
],
github: "https://github.com/nimraaijaz/fastapi",
},
{
number: "04",
name: "Developer Portfolio",
category: "Frontend / React",
stack: ["React", "Vite"],
description:
"Rebuilt a previously static HTML/CSS/JavaScript portfolio as a component-based React application using Vite, improving structure, reusability, maintainability, and iteration speed.",
github: "https://github.com/nimraaijaz/reactproject",
},
{
number: "05",
name: "MediTrust Pharma System",
category: "Full Stack / Software Engineering",
stack: ["Python", "HTML", "CSS", "JSON"],
badge: "1st Position — Project Exhibition",
description:
"Pharmacy management system designed to streamline medicine handling and inventory management with an interface focused on efficient data handling.",
github: "https://github.com/nimraaijaz/Pharmacyproject",
},
{
number: "06",
name: "SwiftPOS",
category: "Backend / Database",
stack: ["Python", "Flask", "MongoDB"],
description:
"Point-of-sale system for grocery stores with inventory and billing management, using MongoDB for flexible storage of store data and transactions.",
},
{
number: "07",
name: "RideWave",
category: "Database / Backend Logic",
stack: ["MySQL", "Triggers", "Stored Procedures"],
description:
"Ride-sharing platform enabling users to offer midway ride continuations or join existing rides, powered by MySQL triggers and stored procedures for database-driven logic.",
},
{
number: "08",
name: "Festify",
category: "Algorithms / Event Management",
stack: ["Event Management", "CPU Scheduling Algorithms"],
description:
"Event booking and management system that uses FIFO, SJF, and Round-Robin CPU scheduling algorithms to manage event queues efficiently.",
},
{
number: "09",
name: "CareChain",
category: "Software Architecture",
stack: ["JavaFX", "Software Design Patterns"],
description:
"Donation platform supporting goods and money donations, needy-area tracking, and donor management, implemented using six software design patterns.",
},
{
number: "10",
name: "Bank Management System",
category: "Java / DSA",
stack: ["JavaFX", "DSA", "OOP"],
description:
"JavaFX banking application with account management, transactions, and balance tracking, applying DSA concepts for performance-oriented data handling.",
},
];

export const CERTIFICATIONS = [
  { name: "Database Management", issuer: "NED Academy" },
  { name: "Git & GitHub Bootcamp", issuer: "SSUET" },
  { name: "AI/ML Workshop", issuer: "Folio3 Software" },
  { name: "WordPress", issuer: "Aptech Learning" },
];

export const CONTACT_LINKS = [
  { label: "Email", href: "mailto:nimraaijazhere@gmail.com", value: "nimraaijazhere@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/nimraaijazz", value: "linkedin.com/in/nimraaijazz" },
  { label: "GitHub", href: "https://github.com/nimraaijaz", value: "github.com/nimraaijaz" },
  { label: "Portfolio", href: "https://nimraaijaz.github.io/PORTFOLIO", value: "nimraaijaz.github.io/PORTFOLIO" },
];
