export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Master Thesis' | 'Working Student' | 'Full-Time';
  highlights: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  period: string;
  category: 'Data & AI' | 'Computer Vision' | 'Full-Stack';
  techStack: string[];
  description: string;
  bullets: string[];
  metrics?: string;
  featured: boolean;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tag: string }[];
}

export const PERSONAL_INFO = {
  name: "Himanshu Sheta",
  title: "Advanced Software Engineer & Data Engineer",
  subtitle: "Full-Stack Developer | TypeScript | React | Python | AI & Data Processing",
  location: "Deggendorf, Germany",
  phone: "+49 176 57828590",
  email: "himanshusheta2022@gmail.com",
  renderAccountEmail: "professorrrr31@gmail.com",
  linkedin: "https://linkedin.com/in/himanshu-sheta",
  github: "https://github.com/himanshusheta",
  livePortfolioUrl: "https://v0-himanshu-sheta.vercel.app",
  summary: "Advanced Software Engineer and M.Sc. Applied Computer Science candidate in Germany with extensive experience building scalable full-stack applications (React, Next.js, TypeScript, Python) and robust data engineering/ETL processing pipelines. Proven track record in computer vision, LLM integration, modular software architecture, and agile software development."
};

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Master’s Thesis – Software Development & Data Engineering",
    company: "Technische Hochschule Deggendorf",
    location: "Deggendorf, Germany",
    period: "04/2026 – Present",
    type: "Master Thesis",
    highlights: [
      "Develop Python-based software applications and reusable modules for processing, validating, and harmonizing large structured datasets.",
      "Design modular data-processing workflows with automated extraction, transformation, validation, and integration (ETL) processes.",
      "Develop structured software components using object-oriented programming (OOP) and software engineering principles.",
      "Integrate processed data with SQL databases and develop reliable backend data-processing workflows.",
      "Implement automated validation and preprocessing workflows to improve software and data quality.",
      "Debug, test, and document software components and data-processing pipelines."
    ]
  },
  {
    id: "exp-2",
    role: "Working Student – Software Developer",
    company: "TI4F GmbH",
    location: "Regensburg, Germany",
    period: "04/2024 – 10/2025",
    type: "Working Student",
    highlights: [
      "Developed full-stack web applications using TypeScript, JavaScript, React.js, Next.js, and Python.",
      "Implemented frontend features and browser-based application components using React.js and TypeScript.",
      "Developed backend services and REST APIs using Python and object-oriented programming principles.",
      "Designed and integrated application functionality across frontend and backend systems.",
      "Worked with SQL and relational databases for application data management and backend development.",
      "Developed reusable software components focusing on maintainability, scalability, and clean software architecture.",
      "Performed software testing, debugging, troubleshooting, and quality assurance in Agile Scrum teams using Jira and Git."
    ]
  },
  {
    id: "exp-3",
    role: "Software Developer",
    company: "Dyrect Digital Pvt. Ltd.",
    location: "Ahmedabad, India",
    period: "02/2020 – 11/2021",
    type: "Full-Time",
    highlights: [
      "Developed full-stack browser-based applications using PHP, JavaScript, HTML, CSS, and MySQL.",
      "Implemented frontend features, backend application logic, and REST/API integrations.",
      "Developed reusable backend modules using object-oriented programming principles.",
      "Designed and maintained relational database structures and optimized SQL queries.",
      "Collaborated with cross-functional development teams to deliver features and resolve production issues."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-1",
    title: "AI Automation & Data Analytics Platform",
    period: "02/2024 – 07/2024",
    category: "Data & AI",
    techStack: ["Python", "Pandas", "Scikit-learn", "LLMs", "Data Processing", "ETL Pipelines"],
    description: "Enterprise software workflow engine for automated data processing, intelligent analytics, and Large Language Model integration.",
    bullets: [
      "Developed Python-based software workflows for automated data processing and analytics.",
      "Built reusable ETL components for data extraction, transformation, validation, and processing.",
      "Integrated Large Language Models (LLMs) into application workflows for intelligent data analysis.",
      "Developed automated processing workflows to improve development efficiency and reduce repetitive tasks.",
      "Applied software engineering principles to structure, test, and maintain data-processing components."
    ],
    metrics: "Automated 80%+ data workflows & accelerated analytics pipelines",
    featured: true
  },
  {
    id: "proj-2",
    title: "Solar Rooftop Capacity Prediction",
    period: "10/2025 – 01/2026",
    category: "Computer Vision",
    techStack: ["Python", "OpenCV", "Scikit-learn", "Computer Vision", "Machine Learning", "Satellite Imagery"],
    description: "End-to-end computer vision and machine learning platform analyzing satellite imagery to predict solar capacity.",
    bullets: [
      "Developed an end-to-end Python application for processing and analysing satellite imagery.",
      "Implemented automated image-processing, segmentation, and feature-extraction workflows.",
      "Built and evaluated machine learning models for solar capacity prediction.",
      "Applied data preprocessing, validation, and model evaluation techniques."
    ],
    metrics: "High precision rooftop surface segmentation & capacity estimation",
    featured: true
  },
  {
    id: "proj-3",
    title: "Hotel Waiting Management System",
    period: "08/2019 – 04/2020",
    category: "Full-Stack",
    techStack: ["PHP", "JavaScript", "HTML5", "CSS3", "MySQL", "REST APIs"],
    description: "Browser-based full-stack real-time waiting queue and table management system for hospitality operations.",
    bullets: [
      "Developed a full-stack browser-based web application using PHP, JavaScript, HTML, CSS, and MySQL.",
      "Implemented frontend functionality, backend application logic, and API integrations.",
      "Designed relational database functionality and integrated application data with backend services.",
      "Tested, debugged, and optimized application performance for high throughput."
    ],
    metrics: "Streamlined peak-hour table allocation & queue management",
    featured: true
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Engineering & Full-Stack",
    iconName: "Code2",
    skills: [
      { name: "TypeScript", level: 92, tag: "Primary" },
      { name: "React.js / Next.js", level: 90, tag: "Primary" },
      { name: "JavaScript (ES6+)", level: 94, tag: "Core" },
      { name: "Python (REST / Microservices)", level: 88, tag: "Backend" },
      { name: "PHP / OOP Architecture", level: 82, tag: "Backend" },
      { name: "HTML5 / CSS3 / Tailwind", level: 95, tag: "Frontend" },
      { name: "Java & C", level: 75, tag: "Languages" }
    ]
  },
  {
    title: "Data Engineering & AI / ML",
    iconName: "BrainCircuit",
    skills: [
      { name: "ETL & Pipeline Automation", level: 90, tag: "Data Eng" },
      { name: "LLMs & Generative AI", level: 86, tag: "AI" },
      { name: "Pandas & Data Processing", level: 88, tag: "Analytics" },
      { name: "OpenCV & Computer Vision", level: 84, tag: "ML/CV" },
      { name: "Scikit-Learn Machine Learning", level: 82, tag: "ML" },
      { name: "Data Harmonization & Extraction", level: 92, tag: "ETL" }
    ]
  },
  {
    title: "Databases & Infrastructure",
    iconName: "Database",
    skills: [
      { name: "SQL & Relational Databases", level: 92, tag: "Database" },
      { name: "PostgreSQL", level: 88, tag: "Database" },
      { name: "MySQL", level: 90, tag: "Database" },
      { name: "Git & GitHub Workflows", level: 95, tag: "DevOps" },
      { name: "Postman API Testing", level: 90, tag: "QA" },
      { name: "Linux OS Environment", level: 85, tag: "OS" }
    ]
  },
  {
    title: "Practices & Methodologies",
    iconName: "Workflow",
    skills: [
      { name: "Software Design & Architecture", level: 90, tag: "Architecture" },
      { name: "Agile Scrum & Jira", level: 92, tag: "Process" },
      { name: "Clean Code & Code Reviews", level: 94, tag: "Quality" },
      { name: "Software Testing & QA", level: 88, tag: "Testing" }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "M.Sc. Applied Computer Science",
    institution: "Technische Hochschule Deggendorf",
    location: "Deggendorf, Germany",
    period: "10/2023 – Present",
    focus: [
      "Software Engineering",
      "Artificial Intelligence & Machine Learning",
      "Data Analytics & Processing Pipelines",
      "Object-Oriented Programming",
      "Computer Vision"
    ]
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Veer Narmad South Gujarat University",
    location: "Surat, India",
    period: "06/2017 – 04/2020",
    focus: [
      "Programming & Algorithms",
      "Data Structures",
      "Database Systems & SQL",
      "Web Application Development"
    ]
  }
];

export const LANGUAGES = [
  { name: "English", level: "Fluent (C1)", icon: "🇬🇧" },
  { name: "German", level: "Intermediate (B1/B2)", icon: "🇩🇪" }
];
