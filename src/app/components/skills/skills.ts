import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
  private readonly skillIcons: Record<string, { className: string; label: string; color: string }> = {
    Angular: { className: 'fa-brands fa-angular', label: 'A', color: '#dd0031' },
    'JavaScript ES6+': { className: 'fa-brands fa-js', label: 'JS', color: '#f0db4f' },
    HTML5: { className: 'fa-brands fa-html5', label: '5', color: '#e34f26' },
    CSS3: { className: 'fa-brands fa-css3-alt', label: '3', color: '#1572b6' },
    'React.js': { className: 'fa-brands fa-react', label: 'R', color: '#61dafb' },
    'Node.js': { className: 'fa-brands fa-node-js', label: 'N', color: '#68a063' },
    Git: { className: 'fa-brands fa-git-alt', label: 'G', color: '#f05032' },
    GitHub: { className: 'fa-brands fa-github', label: 'GH', color: '#f4f7f0' },
    Figma: { className: 'fa-brands fa-figma', label: 'F', color: '#f24e1e' },
    'Responsive Web Design': { className: 'fa-solid fa-display', label: 'UI', color: '#c7f344' },
    PostgreSQL: { className: 'fa-solid fa-database', label: 'PG', color: '#336791' },
    Redis: { className: 'fa-solid fa-database', label: 'R', color: '#dc382d' },
    'REST API Design': { className: 'fa-solid fa-code', label: 'API', color: '#c7f344' },
    'REST APIs': { className: 'fa-solid fa-code', label: 'API', color: '#c7f344' },
    'JWT Authentication': { className: 'fa-solid fa-shield-halved', label: 'JWT', color: '#c7f344' },
    'Prisma ORM': { className: 'fa-solid fa-database', label: 'P', color: '#5a67d8' },
    'Angular Material': { className: 'fa-solid fa-layer-group', label: 'AM', color: '#dd0031' },
    PrimeNG: { className: 'fa-solid fa-cube', label: 'P', color: '#c7f344' },
    'Next.js': { className: '', label: 'N', color: '#f4f7f0' },
    TypeScript: { className: '', label: 'TS', color: '#3178c6' },
  };

  getSkillIcon(skill: string): { className: string; label: string; color: string } {
    return (
      this.skillIcons[skill] ?? {
        className: '',
        label: skill
          .split(/[\s/.-]+/)
          .filter(Boolean)
          .slice(0, 2)
          .map((word) => word[0])
          .join('')
          .toUpperCase(),
        color: '#c7f344',
      }
    );
  }

  categories = [
    {
      title: 'Frontend',
      skills: [
        'HTML5',
        'CSS3',
        'JavaScript ES6+',
        'TypeScript',
        'Angular',
        'Angular Material',
        'PrimeNG',
        'React.js',
        'Next.js',
        'Responsive Web Design',
      ],
    },
    {
      title: 'Backend',
      skills: [
        'Node.js',
        'Express.js',
        'REST API Design',
        'JWT Authentication',
        'Role-Based Access Control',
        'Rate Limiting',
      ],
    },
    {
      title: 'Database and ORM',
      skills: [
        'PostgreSQL',
        'Prisma ORM',
        'Redis',
        'pgAdmin',
        'Schema Design',
        'Queries and Migrations',
      ],
    },
    {
      title: 'API Integrations',
      skills: [
        'UIDAI/Aadhaar APIs',
        'eKYC',
        'vKYC',
        'PAN Validation',
        'Payment Gateways',
        'REST APIs',
      ],
    },
    {
      title: 'Tools and Collaboration',
      skills: ['Git', 'GitHub', 'Bitbucket', 'Jira', 'Confluence', 'Slack'],
    },
    {
      title: 'AI-Assisted Development',
      skills: ['GitHub Copilot', 'OpenAI Codex', 'Claude AI', 'ChatGPT', 'Cursor'],
    },
    {
      title: 'Core Competencies',
      skills: [
        'Full Stack Development',
        'Scalable UI Architecture',
        'Responsive Applications',
        'Banking and Fintech',
        'HRMS',
        'Logistics',
        'Agile/Scrum',
      ],
    },
  ];
}
