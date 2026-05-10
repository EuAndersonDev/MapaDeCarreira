export interface Skill {
  name: string;
  description: string;
  icon: string;
  level: 'iniciante' | 'intermediario' | 'avancado' | 'expert';
}

export interface LearningGoal {
  name: string;
  description: string;
  timeline: string;
  prerequisites: string[];
}

export const skills: Skill[] = [
  {
    name: 'JavaScript Moderno',
    description: 'ES6+, async/await, arrow functions, destructuring',
    icon: '⚡',
    level: 'expert',
  },
  {
    name: 'TypeScript',
    description: 'Tipagem forte, interfaces, generics, utility types',
    icon: '📘',
    level: 'expert',
  },
  {
    name: 'React',
    description: 'Hooks, context, custom hooks, performance optimization',
    icon: '⚛️',
    level: 'expert',
  },
  {
    name: 'Next.js',
    description: 'SSR, SSG, ISR, app router, server components',
    icon: '▲',
    level: 'expert',
  },
  {
    name: 'Tailwind CSS',
    description: 'Utility-first CSS, responsive design, dark mode',
    icon: '🎨',
    level: 'expert',
  },
  {
    name: 'Git & GitHub',
    description: 'Branches, rebase, hooks, workflows, PRs',
    icon: '🔀',
    level: 'expert',
  },
  {
    name: 'REST APIs',
    description: 'HTTP methods, status codes, CORS, authentication',
    icon: '🔌',
    level: 'avancado',
  },
  {
    name: 'SQL',
    description: 'Joins, subqueries, indexing, normalization',
    icon: '📊',
    level: 'avancado',
  },
  {
    name: 'NoSQL',
    description: 'MongoDB, DocumentDB, NoSQL patterns',
    icon: '📁',
    level: 'intermediario',
  },
  {
    name: 'CI/CD',
    description: 'GitHub Actions, pipeline automation, deployment',
    icon: '🔧',
    level: 'intermediario',
  },
  {
    name: 'Docker',
    description: 'Containers, Dockerfiles, multi-stage builds',
    icon: '🐳',
    level: 'intermediario',
  },
  {
    name: 'Node.js',
    description: 'Streams, buffers, worker threads, cluster',
    icon: '🟢',
    level: 'avancado',
  },
  {
    name: 'State Management',
    description: 'Redux, Zustand, context API, server state',
    icon: '🧠',
    level: 'avancado',
  },
  {
    name: 'Testing',
    description: 'Jest, Vitest, React Testing Library, E2E',
    icon: '✅',
    level: 'intermediario',
  },
  {
    name: 'Performance',
    description: 'Web Vitals, caching, lazy loading, bundle optimization',
    icon: '🚀',
    level: 'intermediario',
  },
  {
    name: 'Clean Code',
    description: 'SOLID, DRY, KISS, code review best practices',
    icon: '✨',
    level: 'avancado',
  },
];

export const learningGoals: LearningGoal[] = [
  {
    name: 'Fundamentos Sólidos',
    description: 'JavaScript moderno, TypeScript básico, React hooks',
    timeline: '3-6 meses',
    prerequisites: ['HTML5', 'CSS3', 'Git básico'],
  },
  {
    name: 'React Avançado',
    description: 'Context, server components, performance, testing',
    timeline: '6-12 meses',
    prerequisites: ['Fundamentos Sólidos'],
  },
  {
    name: 'Engenharia de Software',
    description: 'SQL, NoSQL, APIs, arquitetura, CI/CD',
    timeline: '12-18 meses',
    prerequisites: ['React Avançado'],
  },
  {
    name: 'DevOps Básico',
    description: 'Docker, cloud providers, pipelines, monitoring',
    timeline: '18-24 meses',
    prerequisites: ['Engenharia de Software'],
  },
  {
    name: 'Especialização',
    description: 'Performance expert, acessibilidade, IA/ML',
    timeline: '24+ meses',
    prerequisites: ['DevOps Básico'],
  },
];

export const careerLevels = [
  {
    level: 'Jr',
    title: 'Estagiário / Júnior',
    years: '0-2 anos',
    salary: 'R$ 2.000 - R$ 4.500',
    responsibilities: [
      'Codificação sob supervisão',
      'Aprendizado contínuo',
      'Participação em code reviews',
      'Manutenção de features simples',
    ],
    skills: ['Fundamentos', 'JavaScript básico', 'React básico'],
  },
  {
    level: 'Pl',
    title: 'Desenvolvedor Pleno',
    years: '2-5 anos',
    salary: 'R$ 4.500 - R$ 8.000',
    responsibilities: [
      'Independência técnica',
      'Mentoria de juniores',
      'Design de features completas',
      'Contribuição para arquitetura',
    ],
    skills: ['React avançado', 'Node.js', 'Banco de dados', 'Git avançado'],
  },
  {
    level: 'Sr',
    title: 'Desenvolvedor Sênior',
    years: '5-8 anos',
    salary: 'R$ 8.000 - R$ 15.000+',
    responsibilities: [
      'Tomada de decisões técnicas',
      'Mentoria de times',
      'Arquitetura de sistemas',
      'Gestão de stakeholders',
    ],
    skills: ['Arquitetura', 'Liderança técnica', 'Performance', 'DevOps'],
  },
  {
    level: 'Lead',
    title: 'Tech Lead / Principal',
    years: '8+ anos',
    salary: 'R$ 15.000 - R$ 30.000+',
    responsibilities: [
      'Estratégia técnica',
      'Alinhamento de times',
      'Gestão de carreira',
      'Inovação e tendências',
    ],
    skills: ['Arquitetura complexa', 'Liderança', 'Business acumen'],
  },
];
