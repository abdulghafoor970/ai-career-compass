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
}

export const jobs: Job[] = [
  {
    id: "1",
    title: "Senior Machine Learning Engineer",
    company: "OpenAI",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$180,000 - $280,000",
    experience: "5+ years",
    skills: ["Python", "PyTorch", "TensorFlow", "MLOps", "LLMs"],
    description: "Join our team to build the next generation of AI systems. You'll work on cutting-edge research and deploy models at scale that impact millions of users worldwide.",
    postedDate: "2 days ago",
    logo: "https://logo.clearbit.com/openai.com",
    featured: true,
    category: "Machine Learning"
  },
  {
    id: "2",
    title: "AI Research Scientist",
    company: "DeepMind",
    location: "London, UK",
    type: "Full-time",
    salary: "£120,000 - £200,000",
    experience: "3+ years",
    skills: ["Python", "JAX", "Reinforcement Learning", "Neural Networks", "Research"],
    description: "Conduct groundbreaking research in artificial general intelligence. Collaborate with world-class researchers on publications and real-world applications.",
    postedDate: "1 week ago",
    logo: "https://logo.clearbit.com/deepmind.com",
    featured: true,
    category: "Research"
  },
  {
    id: "3",
    title: "NLP Engineer",
    company: "Anthropic",
    location: "San Francisco, CA",
    type: "Remote",
    salary: "$160,000 - $250,000",
    experience: "4+ years",
    skills: ["Python", "Transformers", "NLP", "BERT", "GPT"],
    description: "Build and improve our conversational AI systems. Focus on safety, alignment, and developing AI that's helpful, harmless, and honest.",
    postedDate: "3 days ago",
    logo: "https://logo.clearbit.com/anthropic.com",
    featured: true,
    category: "NLP"
  },
  {
    id: "4",
    title: "Computer Vision Engineer",
    company: "Tesla",
    location: "Palo Alto, CA",
    type: "Full-time",
    salary: "$150,000 - $220,000",
    experience: "3+ years",
    skills: ["Python", "OpenCV", "YOLO", "CNNs", "Autonomous Driving"],
    description: "Work on Tesla's Autopilot system, developing perception algorithms that enable fully autonomous driving capabilities.",
    postedDate: "5 days ago",
    logo: "https://logo.clearbit.com/tesla.com",
    category: "Computer Vision"
  },
  {
    id: "5",
    title: "MLOps Engineer",
    company: "Netflix",
    location: "Los Gatos, CA",
    type: "Hybrid",
    salary: "$140,000 - $200,000",
    experience: "3+ years",
    skills: ["Kubernetes", "Docker", "MLflow", "AWS", "Python"],
    description: "Build and maintain ML infrastructure that powers Netflix's recommendation systems serving 200+ million subscribers globally.",
    postedDate: "1 day ago",
    logo: "https://logo.clearbit.com/netflix.com",
    category: "MLOps"
  },
  {
    id: "6",
    title: "Data Scientist - AI Products",
    company: "Spotify",
    location: "Stockholm, Sweden",
    type: "Full-time",
    salary: "€90,000 - €140,000",
    experience: "2+ years",
    skills: ["Python", "SQL", "A/B Testing", "Recommendation Systems", "Spark"],
    description: "Use data science and machine learning to improve music discovery and create personalized experiences for millions of listeners.",
    postedDate: "4 days ago",
    logo: "https://logo.clearbit.com/spotify.com",
    category: "Data Science"
  },
  {
    id: "7",
    title: "Robotics AI Engineer",
    company: "Boston Dynamics",
    location: "Waltham, MA",
    type: "Full-time",
    salary: "$130,000 - $190,000",
    experience: "4+ years",
    skills: ["ROS", "C++", "Python", "Motion Planning", "Reinforcement Learning"],
    description: "Develop AI systems for advanced robotics platforms. Work on perception, planning, and control for humanoid and quadruped robots.",
    postedDate: "1 week ago",
    logo: "https://logo.clearbit.com/bostondynamics.com",
    category: "Robotics"
  },
  {
    id: "8",
    title: "AI Product Manager",
    company: "Google",
    location: "Mountain View, CA",
    type: "Full-time",
    salary: "$170,000 - $260,000",
    experience: "5+ years",
    skills: ["Product Strategy", "AI/ML", "Stakeholder Management", "Roadmapping"],
    description: "Lead product strategy for Google's AI initiatives. Partner with research and engineering to bring AI products to billions of users.",
    postedDate: "6 days ago",
    logo: "https://logo.clearbit.com/google.com",
    category: "Product"
  },
  {
    id: "9",
    title: "Generative AI Engineer",
    company: "Midjourney",
    location: "San Francisco, CA",
    type: "Remote",
    salary: "$160,000 - $240,000",
    experience: "3+ years",
    skills: ["Diffusion Models", "GANs", "PyTorch", "Image Generation", "GPU Optimization"],
    description: "Build and optimize generative AI models for image synthesis. Push the boundaries of creative AI tools used by millions of artists.",
    postedDate: "2 days ago",
    logo: "https://logo.clearbit.com/midjourney.com",
    category: "Generative AI"
  },
  {
    id: "10",
    title: "AI Safety Researcher",
    company: "Anthropic",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$180,000 - $300,000",
    experience: "4+ years",
    skills: ["AI Alignment", "Interpretability", "Python", "Research", "Technical Writing"],
    description: "Research and develop techniques to ensure AI systems are safe, beneficial, and aligned with human values. Publish influential research.",
    postedDate: "3 days ago",
    logo: "https://logo.clearbit.com/anthropic.com",
    featured: true,
    category: "Research"
  },
  {
    id: "11",
    title: "Speech Recognition Engineer",
    company: "Amazon",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$150,000 - $220,000",
    experience: "3+ years",
    skills: ["ASR", "Python", "Deep Learning", "Audio Processing", "Alexa"],
    description: "Improve Alexa's speech recognition capabilities. Work on multilingual ASR systems that understand diverse accents and languages.",
    postedDate: "5 days ago",
    logo: "https://logo.clearbit.com/amazon.com",
    category: "NLP"
  },
  {
    id: "12",
    title: "AI Infrastructure Engineer",
    company: "Meta",
    location: "Menlo Park, CA",
    type: "Hybrid",
    salary: "$165,000 - $245,000",
    experience: "4+ years",
    skills: ["PyTorch", "Distributed Systems", "CUDA", "Infrastructure", "Python"],
    description: "Build the infrastructure that powers AI research and products at Meta. Scale training systems for models with trillions of parameters.",
    postedDate: "1 week ago",
    logo: "https://logo.clearbit.com/meta.com",
    category: "MLOps"
  }
];

export const categories = [
  "All",
  "Machine Learning",
  "Research",
  "NLP",
  "Computer Vision",
  "MLOps",
  "Data Science",
  "Robotics",
  "Product",
  "Generative AI"
];

export const locations = [
  "All Locations",
  "San Francisco, CA",
  "New York, NY",
  "Seattle, WA",
  "London, UK",
  "Remote"
];

export const jobTypes = [
  "All Types",
  "Full-time",
  "Part-time",
  "Contract",
  "Remote",
  "Hybrid"
];
