// Single place for your personal details. Edit this file to update the whole site.

export const SITE = {
  name: 'Rajat Pal',
  title: 'Rajat Pal | AI Engineer',
  role: 'AI Engineer',
  tagline: 'I build production GenAI systems: RAG pipelines, AI agents, and the backend that keeps them reliable.',
  description:
    'Rajat Pal is an AI engineer building production RAG pipelines, agentic AI platforms, and scalable backend services with Python and AWS.',
  location: 'Chandigarh, India',
  email: 'palrajat20@gmail.com',
  // Set to true to show the "Available for freelance work" badge on the home page.
  availableForWork: true,
  // Drop a resume PDF (without your phone number) into /public and set this to '/resume.pdf'.
  resumeUrl: null as string | null,
};

export const SOCIALS = [
  { label: 'GitHub', href: 'https://github.com/Raj12351' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rajat-pal-6a4297a1/' },
  { label: 'LeetCode', href: 'https://leetcode.com/u/rajat_2548/' },
];

// Add your freelance profiles here when you have them, e.g.
// { label: 'Upwork', href: 'https://www.upwork.com/freelancers/...' },
export const FREELANCE = [] as { label: string; href: string }[];

export const NAV = [
  { label: 'Work', href: '/projects' },
  { label: 'Services', href: '/services' },
  { label: 'Writing', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const SKILLS = [
  {
    group: 'GenAI & Agents',
    items: ['RAG', 'Agentic AI', 'LLM tool-calling', 'AWS Strands', 'Semantic Kernel', 'GenAI evaluation', 'Infosys Topaz'],
  },
  {
    group: 'ML Infra & Data',
    items: ['AWS SageMaker', 'FAISS / vector search', 'Embeddings', 'S3', 'OpenTelemetry'],
  },
  {
    group: 'Backend',
    items: ['Python', 'FastAPI', 'Java', 'Spring Boot', 'REST microservices', 'MySQL', 'Redis'],
  },
  {
    group: 'Also',
    items: ['React', 'TypeScript', 'Jinja2', 'Data structures & algorithms'],
  },
];

export const EXPERIENCE = [
  {
    company: 'Infosys',
    role: 'Specialist Programmer · Forward Deployed Engineer',
    period: 'Nov 2020 – Present',
    location: 'Chandigarh, India',
    points: [
      'Embedded with Citizens Bank teams in the US, helping business and data science teams adopt GenAI across RAG and non-RAG use cases, owning each from scoping to production.',
      'Architected an enterprise agentic AI platform for data scientists using AWS Strands, RAG, SageMaker, vector search, and LLM tool-calling.',
      'Built core SDK pieces: OpenTelemetry-based multi-agent observability, dynamic import resolution for deployments, and Jinja2 code generation for low-boilerplate agents.',
      'Designed a batch RAG pipeline (S3 ingestion → chunking → embeddings → vector index) and improved retrieval with better chunking and metadata filtering.',
      'Set up evaluation practices for retrieval quality, response quality, and agent behavior.',
      'Earlier: built and enhanced high-scale REST microservices on the Skava e-commerce platform.',
    ],
  },
  {
    company: 'Amazon',
    role: 'Software Development Engineer Intern · Payment Services',
    period: 'Jan 2020 – Jul 2020',
    location: '',
    points: [
      'Developed RESTful web services and API models with Jersey (JAX-RS).',
      'Added frontend pages with React and TypeScript, and shipped feature enhancements to team-owned services.',
    ],
  },
];

export const EDUCATION = {
  school: 'Ajay Kumar Garg Engineering College, Ghaziabad',
  degree: 'B.Tech, Computer Science',
  year: '2020',
};

export const SERVICES = [
  {
    title: 'RAG systems',
    body: 'Chat-with-your-documents and knowledge assistants that give grounded answers. Ingestion, chunking, embeddings, vector search, and retrieval tuning.',
  },
  {
    title: 'AI agents & automation',
    body: 'Agents that call tools and APIs to automate real workflows, with guardrails, observability, and a clear path to production.',
  },
  {
    title: 'LLM evaluation',
    body: 'Test sets and metrics for retrieval quality, answer quality, and agent behavior, so you know whether a change made things better or worse.',
  },
  {
    title: 'Backend & APIs',
    body: 'Python (FastAPI) or Java (Spring Boot) services, databases, caching, and cloud deployment on AWS.',
  },
];
