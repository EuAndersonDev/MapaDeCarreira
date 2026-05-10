import { ProfileData } from '@/types';

export const mockProfileData: ProfileData = {
  name: 'seu Nome',
  subtitle: 'Fullstack Developer · React · Node.js · TypeScript',
  email: 'seu.email@gmail.com',
  linkedin: 'linkedin.com/in/seu-perfil',
  github: 'github.com/seu-usuario',
  photo: '/images/profile.jpg',
  about: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  cvUrl: '/cv.pdf',
  careerLevels: [
    {
      id: 'junior',
      title: 'Desenvolvedor Fullstack Júnior',
      status: 'Você está aqui',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fase de aprendizado intensivo e desenvolvimento de projetos pequenos e médios.',
      softSkills: [
        'Comunicação clara com o time',
        'Curiosidade ativa — pesquisar antes de perguntar',
        'Resiliência com bugs e feedback de code review',
        'Organização entre estudos e projetos',
      ],
      roadmap: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Git', 'Docker'],
      icon: '▲',
    },
    {
      id: 'plena',
      title: 'Desenvolvedor Fullstack Plena',
      status: 'Próximo passo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fase de consolidação de conhecimentos e liderança de projetos maiores.',
      softSkills: [
        'Mentoria de desenvolvedores juniores',
        'Visão sistêmica de problemas',
        'Tomada de decisão técnica',
        'Comunicação com stakeholders',
      ],
      roadmap: [
        'Arquitetura de Software',
        'Microserviços',
        'Kubernetes',
        'AWS',
        'Clean Code',
      ],
      icon: '▼',
    },
    {
      id: 'senior',
      title: 'Engenheiro de Software Sênior',
      status: 'Objetivo',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fase de liderança técnica e visão estratégica da arquitetura de sistemas.',
      softSkills: [
        'Pensamento estratégico',
        'Liderança de equipes',
        'Inovação tecnológica',
        'Impacto em decisões arquiteturais',
      ],
      roadmap: [
        'System Design',
        'Tech Leadership',
        'Cloud Architecture',
        'Inovação',
        'Mentoring',
      ],
      icon: '▼',
    },
  ],
  skillCategories: [
    {
      title: 'Conhecimentos',
      skills: [
        { name: 'JavaScript', percentage: 85 },
        { name: 'TypeScript', percentage: 80 },
        { name: 'React', percentage: 75 },
        { name: 'Node.js', percentage: 70 },
        { name: 'CSS/HTML', percentage: 80 },
        { name: 'PostgreSQL', percentage: 65 },
      ],
    },
    {
      title: 'Ferramentas',
      skills: [
        { name: 'Git', percentage: 90 },
        { name: 'Docker', percentage: 60 },
        { name: 'Tailwind CSS', percentage: 85 },
        { name: 'REST APIs', percentage: 75 },
      ],
    },
    {
      title: 'Do GitHub',
      skills: [
        { name: 'JavaScript', percentage: 45 },
        { name: 'TypeScript', percentage: 35 },
        { name: 'CSS', percentage: 20 },
      ],
    },
  ],
  languages: [
    { name: 'Português', level: 'Nativo' },
    { name: 'Inglês', level: 'Técnico' },
    { name: 'Espanhol', level: 'Técnico' },
  ],
};
