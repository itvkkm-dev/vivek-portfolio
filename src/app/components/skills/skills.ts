import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.html',
  styleUrl: './skills.scss',
})
export class Skills {
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
