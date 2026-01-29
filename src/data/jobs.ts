export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote' | 'Hybrid';
  salary: string;
  experience: string;
  skills: string[];
  description: string;
  postedDate: string;
  logo: string;
  featured?: boolean;
  category: string;
  applyUrl: string;
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "AI Engineer",
    company: "Apex Surveillance",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "Competitive",
    experience: "Mid-Senior",
    skills: ["Python", "OpenAI", "Claude", "FastAPI", "PostgreSQL", "React", "AWS", "Docker", "RAG", "LLMs"],
    description: "We're looking for a hands-on AI Engineer to join our Islamabad office and build production-grade AI systems. This role focuses on developing AI bots, automation platforms, and intelligent workflows that directly impact real businesses across sales, customer support, real estate, healthcare, and enterprise operations. You'll work closely with product, engineering, and leadership teams to turn ideas into scalable, revenue-generating AI solutions.",
    postedDate: "Recently",
    logo: "https://ui-avatars.com/api/?name=Apex+Surveillance&background=6366f1&color=fff&size=80",
    featured: true,
    category: "AI Engineering",
    applyUrl: "https://pk.linkedin.com/jobs/view/ai-engineer-at-apex-surveillance-4366548187"
  },
  {
    id: "2",
    title: "AI Engineer (2+ years)",
    company: "RocketDevs",
    location: "Remote",
    type: "Remote",
    salary: "Competitive",
    experience: "2+ years",
    skills: ["Python", "FastAPI", "LangChain", "OpenAI", "PostgreSQL", "Vector Databases", "Docker", "RAG", "AI Agents"],
    description: "RocketDevs empowers software engineers by bridging talent with global tech opportunities. We are seeking an AI Engineer with a strong focus on AI systems and agent development. This is a full-time, remote position focused on building intelligent, scalable backend systems and AI-powered agents for global clients.",
    postedDate: "Recently",
    logo: "https://ui-avatars.com/api/?name=RocketDevs&background=10b981&color=fff&size=80",
    featured: true,
    category: "AI Engineering",
    applyUrl: "https://pk.linkedin.com/jobs/view/ai-engineer-2+-years-of-experience-at-rocketdevs-4356331029"
  },
  {
    id: "3",
    title: "Product Manager Automation",
    company: "Easypaisa Digital Bank",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "Competitive",
    experience: "3-7 years",
    skills: ["RPA", "AI/ML", "Product Development", "Analytics", "IVR", "BRD/PRD", "Dashboard Management"],
    description: "The role is responsible for driving automation initiatives (RPA and basic AI/ML–enabled workflows) across the bank, while also supporting IVR-related projects through data, insights, and light coordination work. The primary focus is to streamline operational processes through automation and provide analytical support for IVR journey improvements.",
    postedDate: "Recently",
    logo: "https://logo.clearbit.com/easypaisa.com.pk",
    category: "Product",
    applyUrl: "https://pk.linkedin.com/jobs/view/product-manager-automation-at-easypaisa-digital-bank-4355964871"
  },
  {
    id: "4",
    title: "Sr. AWS AI Engineer",
    company: "Cloudelligent",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "Competitive",
    experience: "5+ years",
    skills: ["AWS Bedrock", "Amazon SageMaker", "Python", "TensorFlow", "PyTorch", "RAG", "LangChain", "CrewAI", "PostgreSQL"],
    description: "As a Sr. AWS AI Engineer at Cloudelligent, you will drive the development of innovative artificial intelligence solutions. This role emphasizes the implementation, optimization, and deployment of AI models while collaborating with cross-functional teams to enhance our products and services.",
    postedDate: "Recently",
    logo: "https://logo.clearbit.com/cloudelligent.com",
    featured: true,
    category: "AI Engineering",
    applyUrl: "https://pk.linkedin.com/jobs/view/sr-aws-ai-engineer-at-cloudelligent-4355984987"
  },
  {
    id: "5",
    title: "Senior AI Engineer (L2)",
    company: "Dataspecc",
    location: "Remote / Hybrid",
    type: "Hybrid",
    salary: "USD-pegged",
    experience: "2-3 years",
    skills: ["Python", "LangChain", "LangGraph", "FastAPI", "OpenAI", "Gemini", "Claude", "Supabase", "GCP", "Docker"],
    description: "Dataspecc builds intelligent, production-grade software solutions that help businesses operate smarter at scale. As a Senior AI Engineer, you will design and ship production-ready AI systems, working hands-on with multi-agent orchestration, LLM pipelines, computer vision, and real-time AI interactions.",
    postedDate: "Recently",
    logo: "https://ui-avatars.com/api/?name=Dataspecc&background=8b5cf6&color=fff&size=80",
    category: "AI Engineering",
    applyUrl: "https://pk.linkedin.com/jobs/view/senior-ai-engineer-l2-at-dataspecc-4355679915"
  },
  {
    id: "6",
    title: "Technical Recruiter",
    company: "Vyro (ImagineArt)",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "Competitive",
    experience: "2+ years",
    skills: ["Technical Recruiting", "ATS", "LinkedIn Sourcing", "GitHub", "Discord", "Stakeholder Management"],
    description: "Be part of ImagineArt - one of the fastest-growing GenAI companies in the world with $35M ARR and 100M+ social impressions. We're looking for a Technical Recruiter who goes beyond traditional hiring to source top AI/ML talent and designers.",
    postedDate: "Recently",
    logo: "https://ui-avatars.com/api/?name=Vyro&background=f43f5e&color=fff&size=80",
    category: "Recruiting",
    applyUrl: "https://pk.linkedin.com/jobs/view/technical-recruiter-at-vyro-4366222185"
  },
  {
    id: "7",
    title: "Machine Learning Engineer / Data Scientist",
    company: "Fusemachines",
    location: "Islamabad, Pakistan",
    type: "Remote",
    salary: "Competitive",
    experience: "3-8 years",
    skills: ["Python", "SQL", "TensorFlow", "PyTorch", "XGBoost", "Databricks", "AWS", "Time Series", "Deep Learning"],
    description: "Fusemachines is a global provider of enterprise AI products and services. We're hiring a mid-to-senior Machine Learning Engineer / Data Scientist to build and deploy machine learning solutions that drive measurable business impact across the ML lifecycle.",
    postedDate: "Recently",
    logo: "https://logo.clearbit.com/fusemachines.com",
    featured: true,
    category: "Machine Learning",
    applyUrl: "https://pk.linkedin.com/jobs/view/machine-learning-engineer-data-scientist-at-fusemachines-4366208582"
  },
  {
    id: "8",
    title: "Expert Product Analytics",
    company: "JazzCash",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "Competitive",
    experience: "2-4 years",
    skills: ["Python", "R", "SQL", "Spark", "Hadoop", "Power BI", "Tableau", "Machine Learning", "Credit Scoring"],
    description: "As an Expert Product Analytics at JazzCash, you will work closely with the product management team to drive data-led decision-making for wealth management products. Build and deploy AI and machine learning models for credit scoring, customer segmentation, churn prediction, and product recommendation.",
    postedDate: "Recently",
    logo: "https://logo.clearbit.com/jazzcash.com.pk",
    category: "Data Science",
    applyUrl: "https://pk.linkedin.com/jobs/view/expert-product-analytics-at-jazzcash-4362319820"
  },
  {
    id: "9",
    title: "AI Architect",
    company: "Datamatics Technologies",
    location: "Islamabad, Pakistan",
    type: "Full-time",
    salary: "Competitive",
    experience: "8+ years",
    skills: ["Distributed Systems", "Real-time Processing", "AI/ML Platforms", "Data Architecture", "MLOps", "Cloud Architecture"],
    description: "We are seeking a high-level AI Architect to serve as a Senior Solution Architect for our real-time automation and intelligence ecosystem. This role is both strategic and hands-on at the architectural level, acting as a technical mentor and trusted advisor to engineering teams.",
    postedDate: "Recently",
    logo: "https://logo.clearbit.com/datamatics.com",
    category: "Architecture",
    applyUrl: "https://pk.linkedin.com/jobs/view/ai-architect-at-datamatics-technologies-4352969512"
  }
];

export const categories = [
  "All",
  "AI Engineering",
  "Machine Learning",
  "Data Science",
  "Product",
  "Architecture",
  "Recruiting"
];

export const locations = [
  "All Locations",
  "Islamabad, Pakistan",
  "Remote",
  "Hybrid"
];

export const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
  "Hybrid"
];
