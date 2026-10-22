import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {
  projects = [
    {
      title: 'HRMS - Human Resource Management System',
      company: 'IoT India Pvt Ltd',
      image: 'assets/images/project-hrms.svg',
      description:
        'HRMS platform for employee onboarding, profiles, attendance, leave approvals, and payroll workflows.',
      highlights: [
        'Role-based dashboards for HR, managers, and employees.',
        'REST APIs built with Node.js and Prisma ORM.',
        'Normalized PostgreSQL model with JWT permissions and Redis rate limiting.',
      ],
      stack: 'Next.js | Node.js | Express.js | PostgreSQL | Prisma ORM | Redis | JWT',
    },
    {
      title: 'Logistics Management System',
      company: 'IoT India Pvt Ltd',
      image: 'assets/images/project-logistics.svg',
      description:
        'Operations application for order management, shipment tracking, dispatch, and delivery performance.',
      highlights: [
        'Shipment lifecycle from booked to in transit to delivered.',
        'Vehicle and driver assignment with responsive operations dashboards.',
        'Wallet balances, credit/debit transactions, and transaction history.',
      ],
      stack: 'Next.js | Node.js | Express.js | PostgreSQL | Prisma ORM | Redis | REST APIs',
    },
    {
      title: 'Current Account - Sole Proprietorship and Individual Journey',
      company: 'Decimal Technologies Pvt Ltd',
      image: 'assets/images/project-current-account.svg',
      description:
        'Digital current account opening platform supporting customer onboarding through initial deposit.',
      highlights: [
        'Multi-step onboarding with Aadhaar OTP verification and vKYC.',
        'Face-match, liveness, and document upload workflows.',
        'Payment collection, retry handling, and clear failure states.',
      ],
      stack: 'Angular | TypeScript | PrimeNG | UIDAI APIs | eKYC | vKYC | Payments | REST APIs',
    },
    {
      title: 'Open Saving Account Platform',
      company: 'Decimal Technologies Pvt Ltd',
      image: 'assets/images/project-savings.svg',
      description:
        'Digital savings account onboarding journey from lead capture through account activation.',
      highlights: [
        'PAN and Aadhaar validation integrations.',
        'Remote video identity verification and digital KYC workflows.',
        'Responsive customer onboarding experience.',
      ],
      stack:
        'Angular | TypeScript | Angular Material | PAN Validation | Aadhaar API | vKYC | REST APIs',
    },
    {
      title: 'Bank Leads Management System',
      company: 'Decimal Technologies Pvt Ltd',
      image: 'assets/images/project-leads.svg',
      description: 'Centralized lead management platform for bank sales teams and administrators.',
      highlights: [
        'Lead capture, assignment, tracking, and closure.',
        'Role-based access for branch managers, sales executives, and administrators.',
        'Pipeline tracking with follow-up scheduling and overdue reminders.',
      ],
      stack: 'Angular | TypeScript | PrimeNG | REST APIs | RBAC',
    },
  ];
}
