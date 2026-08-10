// Central content source — edit here to update the whole site.

export const profile = {
  name: "Vasantha Devi Kandasamy",
  roles: ["Forward Deployed Engineer", "AI Engineer", "Full-Stack Developer - AI Applied"],
  location: "Calgary, Alberta",
  phone: "(437) 987-8361",
  email: "vasanthadevikandasamy@gmail.com",
  linkedin: "https://linkedin.com/in/vasantha-devi-kandasamy",
  github: "https://github.com/vasanthadevi",
  resume: import.meta.env.BASE_URL + "Vasantha_Devi_Kandasamy_Resume.pdf",
  summary:
    "Full-stack engineer who designs, builds, and ships production AI systems end to end LLM agents, retrieval-augmented generation (RAG), and tool-using assistants with the safety, evaluation, and deployment rigor real customers require.",
  longSummary:
    "Master of Computer Applications with 3+ years of web development (React/Node) plus recent data-analytics and applied-AI training. I've recently shipped four public, portfolio-grade AI applications: a natural-language-to-SQL analytics copilot, an agentic operations copilot, an AI service advisor for a real Calgary business, and a streaming support assistant. Each containerized, tested with evaluation suites, and deployment-ready. I'm comfortable owning a problem from the first customer conversation to a deployed, observable solution.",
};

export const stats = [
  { value: "4", label: "Production AI apps shipped" },
  { value: "100%", label: "Eval accuracy (Analytics Copilot)" },
  { value: "3+ yrs", label: "Web development (React/Node)" },
  { value: "10/10", label: "Agent safety eval (Nimbus)" },
];

export const skills = [
  {
    group: "AI & LLM Engineering",
    items: [
      "Claude (Anthropic) API",
      "LLM Agents & Tool Use",
      "RAG",
      "Semantic Search (pgvector)",
      "MCP / FastMCP",
      "Prompt Engineering",
      "Evaluation Suites",
      "LLM Observability (Langfuse)",
      "Token Streaming (SSE)",
    ],
  },
  {
    group: "Backend",
    items: [
      "Python (FastAPI)",
      "Node.js (Express)",
      "SQL",
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "REST APIs",
      "JWT / OAuth",
    ],
  },
  {
    group: "Frontend",
    items: [
      "JavaScript",
      "React",
      "Redux",
      "Tailwind CSS",
      "Material UI",
      "HTML / CSS / SASS",
    ],
  },
  {
    group: "Data & Analytics",
    items: [
      "Pandas",
      "NumPy",
      "Data Wrangling",
      "Visualization & Dashboards",
      "Statistical Analysis",
    ],
  },
  {
    group: "DevOps & Cloud",
    items: [
      "Docker",
      "Kubernetes (GKE)",
      "Google Cloud (Cloud Run, Cloud SQL)",
      "CI/CD",
      "Git",
    ],
  },
  {
    group: "Testing & Practices",
    items: [
      "Playwright",
      "Cypress",
      "Jest",
      "Eval-Driven Testing",
      "Agile / Scrum",
      "JIRA",
      "Pivotal Tracker",
    ],
  },
];

export const projects = [
  {
    name: "Analytics Copilot",
    tagline: "Natural-language-to-SQL over a database",
    accent: "teal",
    stack: [
      "Python",
      "FastAPI",
      "Claude API",
      "PostgreSQL + pgvector",
      "React",
      "Docker / GCP",
    ],
    github: "https://github.com/vasanthadevi/analytics-copilot",
    // Paste a demo link (video, live deploy, or GitHub Pages) to show a "Demo" button.
    demo: "",
    highlights: [
      "Answers plain-English business questions: retrieves the relevant tables via semantic search (RAG with pgvector), generates read-only SQL, self-corrects on query errors, and returns a chart, a table, and the exact SQL it ran.",
      "Guaranteed safety with a dedicated read-only database role (SELECT-only, statement timeout) so model-generated SQL can never modify data.",
      "Authored a 40-question execution-accuracy eval suite and improved accuracy from 97.5% to 100% with targeted prompt changes.",
    ],
    metrics: [
      { k: "Exec accuracy", v: "100%" },
      { k: "Eval questions", v: "40" },
    ],
  },
  {
    name: "Nimbus Operations Copilot",
    tagline: "Agentic operations assistant with human-in-the-loop approval",
    accent: "violet",
    stack: [
      "Python",
      "FastMCP (MCP)",
      "Claude API",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Langfuse",
      "Docker / GCP",
    ],
    github: "https://github.com/vasanthadevi/ops-copilot",
    demo: "",
    highlights: [
      "Multi-step agent that plans across tools exposed through a custom Model Context Protocol (MCP) server. It searches docs, querying customer & billing data, issuing refunds, and opening tickets.",
      "Enforced human-in-the-loop approval before any data-changing action: the agent pauses and cannot execute a write until a human approves it, delivered over a live server-sent-events stream.",
      "Instrumented every model and tool call with Langfuse tracing (cost, latency, full decision tree) and wrote a 10-task eval suite. Result: 10/10 correctness with zero writes executed without approval.",
    ],
    metrics: [
      { k: "Eval correctness", v: "10/10" },
      { k: "Unapproved writes", v: "0" },
    ],
  },
  {
    name: "Singh's Auto Lab AI Service Advisor",
    tagline: "Agentic web assistant for a real Calgary business",
    accent: "violet",
    stack: [
      "Python",
      "FastAPI",
      "3× FastMCP servers",
      "Claude API",
      "React",
      "Google Calendar",
      "Twilio",
      "Docker",
    ],
    github: "https://github.com/vasanthadevi/singhs-auto-lab-advisor",
    demo: "",
    highlights: [
      "Triages a customer's problem and returns a grounded estimate from a structured pricing knowledge base, priced by the data and not the model.",
      "Books directly into a real Google Calendar and recognizes returning customers via a phone-keyed CRM, with SMS through Twilio.",
      "Capabilities split into repointable MCP servers, plus vision photo-diagnosis and an owner dashboard.",
    ],
    metrics: [
      { k: "MCP servers", v: "3×" },
      { k: "Live booking", v: "Calendar" },
    ],
  },
  {
    name: "AI Support Assistant",
    tagline: "Streaming, grounded customer-support chat",
    accent: "teal",
    stack: ["Node.js", "Express", "Claude API", "PostgreSQL", "React", "Docker"],
    github: "https://github.com/vasanthadevi/ai-support-assistant",
    demo: "",
    highlights: [
      "Real-time assistant that streams answers token-by-token (SSE) and calls tools to search a knowledge base and look up live order data mid-conversation, citing its sources and refusing to guess.",
      "Implemented an agentic tool-use loop with grounded, non-hallucinated responses and per-message token-cost tracking.",
    ],
    metrics: [
      { k: "Streaming", v: "SSE" },
      { k: "Grounding", v: "Cited" },
    ],
  },
];

export const experience = [
  {
    role: "Full-Stack / AI Engineer",
    org: "CMDSpace",
    location: "Calgary, Alberta",
    period: "Jul 2026 – Present",
    kind: "Volunteer",
    points: [
      "Part of the AI development team for Focus, a task assistant, contributing to a chatbot service (Python, LangChain, RAG over a local LLM) that lets users create, filter, and query tasks in natural language.",
      "Worked on the React 19 and TypeScript front end, a command-bar-first (⌘K) task UI with Zustand and React Query, covered by Vitest and Playwright tests.",
      "Worked on the back-end task API in FastAPI, SQLAlchemy, and PostgreSQL, containerized with Docker for consistent deployment.",
    ],
  },
  {
    role: "Front-End Developer",
    org: "CMDSpace",
    location: "Calgary, Alberta",
    period: "Jan 2024 – Jun 2024",
    kind: "Volunteer",
    points: [
      "Built the CMDSpace marketing website (cmdspace.io) to the provided requirements: a responsive React single-page site presenting the company's AI solutions and services.",
      "Developed the landing experience, service sections (machine learning, neural networks, NLP), a feature-highlights grid, and a schedule-a-demo call to action, with a clean design across desktop and mobile.",
    ],
  },
  {
    role: "Freelance Web Developer",
    org: "Upwork (Haydes Technologies)",
    location: "Remote",
    period: "Jan 2013 – Jun 2015",
    kind: "Freelance",
    points: [
      "Developed, maintained, and supported web applications, ensuring performance and a strong user experience.",
      "Implemented a secure login and authentication component; delivered online training on front-end technologies to associates.",
    ],
  },
  {
    role: "Software Developer",
    org: "Mascot eSoft Technologies",
    location: "India",
    period: "Oct 2006 – Apr 2007",
    kind: "Full-time",
    points: [
      "Built and maintained web applications using SQL Server, VB.NET, HTML/CSS, JavaScript, and jQuery.",
    ],
  },
  {
    role: "Trainee Software Developer",
    org: "ISG Novasoft Technology",
    location: "India",
    period: "Mar 2006 – Sep 2006",
    kind: "Full-time",
    points: [
      "Developed an RFID-based access-control system tracking in/out times and working hours, with secure reporting for managers (SQL Server, ASP.NET).",
    ],
  },
];

export const education = [
  {
    title: "Master of Computer Applications (MCA)",
    org: "Bharathiar University, India",
    year: "2006",
  },
  {
    title: "Bachelor of Computer Applications (BCA)",
    org: "Bharathiar University, India",
    year: "2003",
  },
];

export const certifications = [
  { title: "Junior Data Analyst Program", org: "NPower Canada, Calgary", year: "2024" },
  {
    title: "IBM Data Analyst",
    org: "Professional Certificate, Coursera",
    year: "2024",
  },
  {
    title: "Microsoft Azure AI-900",
    org: "Azure AI Fundamentals",
    year: "2024",
  },
];

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
