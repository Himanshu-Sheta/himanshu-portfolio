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
  githubUrl?: string;
  liveDemoUrl?: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: { name: string; level: number; tag: string }[];
}

export const PERSONAL_INFO = {
  name: "Himanshu Sheta",
  title: "Software Engineer | Java, Spring Boot & Python",
  subtitle: "Enterprise Backend & Generative AI Systems • Deggendorf, Germany",
  location: "Deggendorf, Germany (Ready to Relocate Germany-wide | Remote & Hybrid)",
  phone: "+49 176 57828590",
  email: "himanshusheta2022@gmail.com",
  github: "https://github.com/Himanshu-Sheta",
  linkedin: "https://linkedin.com/in/himanshu-sheta",
  livePortfolioUrl: "https://himanshusheta-portfolio.onrender.com",
  availability: "Ready to Relocate Anywhere in Germany • Open to Remote, Hybrid & On-Site",
  summary: "Software Engineer with ~3 years of practical experience across enterprise backend systems (Java, Spring Boot, SQL) and modern Generative AI architectures (Python, LLM orchestration, RAG, Anthropic Claude, Azure AI). M.Sc. Applied Computer Science candidate at Technische Hochschule Deggendorf."
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
      "Engineered high-performance backend services and REST APIs in Java (Spring Boot) and Python on PostgreSQL and MongoDB.",
      "Implemented responsive web applications using React, TypeScript, and Next.js (Redux, Material UI, Tailwind CSS).",
      "Integrated Generative AI & LLM APIs into production workflows, refining prompt pipelines and evaluating output reliability.",
      "Collaborated in Agile Scrum teams utilizing Docker, Kubernetes, and automated CI/CD pipelines (GitHub Actions, Azure DevOps).",
      "Conducted automated unit/integration testing and active code reviews using Git, IntelliJ, Jira, and Confluence."
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
      "Developed full-stack web applications for real-world business users using PHP (Laravel), JavaScript (jQuery), HTML, CSS, and MySQL.",
      "Implemented frontend features, backend application logic, and RESTful API integrations.",
      "Developed reusable backend modules using object-oriented programming principles.",
      "Designed and maintained relational database structures and optimized SQL queries.",
      "Collaborated with cross-functional development teams to deliver features and resolve production issues."
    ]
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "proj-foundation-models",
    title: "Enterprise Foundation Models & AI Platform",
    period: "10/2026 – Present",
    category: "Data & AI",
    techStack: ["Anthropic Claude 3.5", "Microsoft Azure AI", "Hybrid Vector RAG", "FastAPI", "Python", "Streamlit", "Docker"],
    description: "Production-ready enterprise multi-model AI platform orchestrating Anthropic Claude 3.5 and Azure OpenAI with automated failover, Azure AI Search hybrid retrieval (RAG), and Azure Content Safety guardrails.",
    bullets: [
      "Architected dual-model gateway with automated zero-downtime failover between Anthropic Claude 3.5 and Azure OpenAI GPT-4o.",
      "Engineered Azure AI Search Hybrid RAG pipeline combining HNSW vector search with BM25 keyword rankings via Reciprocal Rank Fusion.",
      "Developed autonomous multi-step agentic orchestrator with financial modeling and cloud infrastructure telemetry tools.",
      "Integrated Azure AI Content Safety pre-filtering to defend against prompt injection and toxic content.",
      "Implemented real-time FinOps telemetry tracking token counts, latency, and dynamic USD cost attribution with 90% prompt caching savings."
    ],
    metrics: "90% prompt caching cost savings & 99.99% high-availability failover",
    featured: true,
    githubUrl: "https://github.com/Himanshu-Sheta/foundation-models-azure-claude-platform"
  },
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
    featured: true,
    githubUrl: "https://github.com/Himanshu-Sheta/ai-native-etl-automation"
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
    featured: true,
    githubUrl: "https://github.com/Himanshu-Sheta/solar-rooftop-capacity-prediction"
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
    featured: true,
    githubUrl: "https://github.com/Himanshu-Sheta/hotel-waiting-management-system"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Backend & Systems Engineering",
    iconName: "Database",
    skills: [
      { name: "Java", level: 92, tag: "Core Enterprise" },
      { name: "Spring Boot", level: 90, tag: "Microservices & REST" },
      { name: "Python", level: 92, tag: "Backend & Systems" },
      { name: "FastAPI", level: 92, tag: "Async APIs" },
      { name: "RESTful APIs", level: 95, tag: "Design & Specs" },
      { name: "Event-Driven & Async Processing", level: 85, tag: "Architecture" },
      { name: "PHP (Laravel)", level: 80, tag: "Backend" },
      { name: "C / C++", level: 75, tag: "Systems" }
    ]
  },
  {
    title: "Databases & Data Systems",
    iconName: "Database",
    skills: [
      { name: "PostgreSQL", level: 90, tag: "Relational" },
      { name: "MongoDB", level: 85, tag: "NoSQL" },
      { name: "MySQL", level: 90, tag: "Relational" },
      { name: "Oracle DB", level: 75, tag: "Enterprise DB" },
      { name: "SQL Optimization & Indexing", level: 92, tag: "Performance" },
      { name: "ETL Pipelines (Pandas, NumPy)", level: 90, tag: "Data Engineering" }
    ]
  },
  {
    title: "Frontend & Web Engineering",
    iconName: "Code2",
    skills: [
      { name: "React.js", level: 92, tag: "UI Components" },
      { name: "Next.js", level: 90, tag: "Full-Stack Web" },
      { name: "TypeScript", level: 90, tag: "Type Safety" },
      { name: "JavaScript (ES6+)", level: 92, tag: "Core Web" },
      { name: "Tailwind CSS", level: 92, tag: "Modern Styling" },
      { name: "Redux & State Management", level: 88, tag: "State" },
      { name: "React Query (TanStack)", level: 88, tag: "Server State" },
      { name: "Material UI (MUI) & Bootstrap", level: 85, tag: "UI Kits" },
      { name: "Responsive Web Design", level: 95, tag: "Layouts" }
    ]
  },
  {
    title: "Generative AI & LLM Systems",
    iconName: "BrainCircuit",
    skills: [
      { name: "Anthropic Claude 3.5 & Azure OpenAI", level: 92, tag: "Foundation Models" },
      { name: "Hybrid Vector RAG (Azure AI Search)", level: 90, tag: "Retrieval" },
      { name: "Agentic Tool Calling Workflows", level: 88, tag: "Autonomous Agents" },
      { name: "AI Safety Guardrails & Prompt Shield", level: 88, tag: "Governance" },
      { name: "Computer Vision (OpenCV)", level: 84, tag: "Image Processing" },
      { name: "Scikit-learn", level: 82, tag: "Machine Learning" }
    ]
  },
  {
    title: "Cloud, DevOps & Agile Methods",
    iconName: "Workflow",
    skills: [
      { name: "Docker", level: 88, tag: "Containers" },
      { name: "Kubernetes", level: 80, tag: "Orchestration" },
      { name: "CI/CD (GitHub Actions, Azure DevOps)", level: 90, tag: "Pipelines" },
      { name: "AWS Fundamentals & Linux", level: 80, tag: "Cloud & OS" },
      { name: "Git & Version Control", level: 95, tag: "Collaboration" },
      { name: "IntelliJ IDEA, Eclipse, VS Code", level: 95, tag: "IDEs" },
      { name: "Jira, Confluence, Scrum & Kanban", level: 92, tag: "Agile Delivery" }
    ]
  }
];

export const EDUCATION = [
  {
    degree: "M.Sc. Applied Computer Science (Informatik)",
    institution: "Technische Hochschule Deggendorf",
    location: "Deggendorf, Germany",
    period: "10/2023 – Expected 11/2026",
    focus: [
      "Software Engineering & Architecture",
      "Artificial Intelligence & Machine Learning",
      "Data Analytics & Processing Pipelines",
      "Object-Oriented Programming (Java, C++)",
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
