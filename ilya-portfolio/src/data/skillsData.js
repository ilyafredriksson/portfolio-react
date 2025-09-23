import { Code, Shield, Users } from 'lucide-react';

export const skillsData = [
  {
    category: 'Frontend',
    items: ['HTML', 'CSS', 'JavaScript (ES6+)', 'ReactJS', 'UI/UX Design', 'Responsiv Design'],
    icon: Code
  },
  {
    category: 'Backend',
    items: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'JWT'],
    icon: Shield
  },
  {
    category: 'Säkerhet',
    items: ['XSS Prevention', 'CSRF Protection', 'Säker API-hantering', 'HTTPS', 'Autentisering'],
    icon: Shield
  },
  {
    category: 'Verktyg',
    items: ['Git', 'GitHub', 'Agile/Scrum', 'Jira', 'VS Code'],
    icon: Users
  }
];
