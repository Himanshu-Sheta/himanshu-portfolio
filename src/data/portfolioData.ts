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
  linkedin: "https://linkedin.com/in/himanshu-sheta",
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
    title: "Languages",
    iconName: "Code2",
    skills: [
      { name: "C", level: 75, tag: "Language" },
      { name: "C++", level: 72, tag: "Language" },
      { name: "PHP", level: 82, tag: "Backend" },
      { name: "JavaScript", level: 94, tag: "Core" },
      { name: "TypeScript", level: 92, tag: "Primary" },
      { name: "Python", level: 88, tag: "Backend" },
      { name: "R", level: 65, tag: "Analytics" }
    ]
  },
  {
    title: "Frontend & Web",
    iconName: "Code2",
    skills: [
      { name: "React.js", level: 90, tag: "Frontend" },
      { name: "Next.js", level: 90, tag: "Frontend" },
      { name: "Vue.js", level: 70, tag: "Frontend" },
      { name: "Node.js", level: 78, tag: "Backend" },
      { name: "HTML", level: 95, tag: "Core" },
      { name: "CSS", level: 95, tag: "Core" },
      { name: "SCSS", level: 80, tag: "Styling" },
      { name: "Bootstrap", level: 82, tag: "UI" },
      { name: "Tailwind CSS", level: 92, tag: "UI" }
    ]
  },
  {
    title: "Backend & Data",
    iconName: "Database",
    skills: [
      { name: "RESTful APIs", level: 90, tag: "Backend" },
      { name: "WebSockets", level: 78, tag: "Backend" },
      { name: "MySQL", level: 90, tag: "Database" },
      { name: "PostgreSQL", level: 88, tag: "Database" },
      { name: "MongoDB", level: 75, tag: "Database" },
      { name: "Custom ORM", level: 82, tag: "Architecture" },
      { name: "SQL & Relational Databases", level: 92, tag: "Database" }
    ]
  },
  {
    title: "Data & Machine Learning",
    iconName: "BrainCircuit",
    skills: [
      { name: "Pandas", level: 88, tag: "Analytics" },
      { name: "NumPy", level: 82, tag: "Analytics" },
      { name: "Scikit-learn", level: 82, tag: "ML" },
      { name: "TensorFlow", level: 70, tag: "ML" },
      { name: "Plotly", level: 82, tag: "Visualization" },
      { name: "Data Visualization", level: 88, tag: "Analytics" },
      { name: "OpenCV", level: 84, tag: "Computer Vision" },
      { name: "LLMs & Generative AI", level: 86, tag: "AI" }
    ]
  },
  {
    title: "Tools & Ways of Working",
    iconName: "Workflow",
    skills: [
      { name: "Git", level: 95, tag: "Version Control" },
      { name: "GitLab", level: 82, tag: "Collaboration" },
      { name: "VS Code", level: 95, tag: "Tooling" },
      { name: "Agile", level: 92, tag: "Process" },
      { name: "Scrum", level: 92, tag: "Process" },
      { name: "Testing", level: 88, tag: "Quality" },
      { name: "Accessibility", level: 82, tag: "Frontend" },
      { name: "Postman", level: 90, tag: "API Testing" }
    ]
  },
  {
    title: "Strengths",
    iconName: "Users",
    skills: [
      { name: "Problem-solving", level: 95, tag: "Strength" },
      { name: "Communication", level: 90, tag: "Strength" },
      { name: "Teamwork", level: 92, tag: "Strength" },
      { name: "Ownership", level: 92, tag: "Strength" },
      { name: "Time Management", level: 88, tag: "Strength" },
      { name: "Continuous Learning", level: 95, tag: "Strength" }
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
