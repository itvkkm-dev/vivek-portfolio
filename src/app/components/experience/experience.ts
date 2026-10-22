import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.html',
  styleUrl: './experience.scss',
})
export class Experience {
  roles = [
    {
      title: 'Full Stack Developer',
      company: 'IoT India Pvt Ltd',
      dates: 'July 2026 - October 2026',
      highlights: [
        'Built HRMS workflows for employee records, attendance, leave, and payroll using Next.js, Node.js REST APIs, and PostgreSQL.',
        'Developed logistics tools for order and shipment tracking, vehicle and driver assignment, and delivery dashboards.',
        'Designed PostgreSQL schemas, relationships, and indexes with Prisma ORM and pgAdmin.',
        'Implemented JWT authentication, role-based access for four user roles, and Redis API rate limiting.',
        'Collaborated through Git branching, pull-request reviews, Slack, and AI-assisted development tools.',
      ],
    },
    {
      title: 'Associate Software Engineer',
      company: 'Decimal Technologies Pvt Ltd',
      dates: 'June 2021 - December 2025',
      highlights: [
        'Developed real-time analytics dashboards for 5+ banking clients using Angular and PrimeNG, including charts and sortable tables.',
        'Implemented digital eKYC and vKYC onboarding workflows integrated with UIDAI Aadhaar APIs.',
        'Partnered with backend, QA, and product teams in Agile/Scrum delivery.',
        'Supported sprint planning, task tracking, and release documentation with Jira and Confluence.',
        'Used GitHub Copilot and AI-assisted tools to improve TypeScript quality and debugging efficiency.',
      ],
    },
  ];
}
