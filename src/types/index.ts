export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Web App' | 'Desktop App' | 'Foundation / Non-Profit';
  description: string;
  fullCaseStudy: {
    overview: string;
    architecture: string;
    challenges: string[];
    solutions: string[];
    metrics: string[];
  };
  techStack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  featured: boolean;
}

export interface SkillNode {
  id: string;
  name: string;
  category: 'Frontend' | 'Backend' | 'Database' | 'Languages' | 'Tools';
  level: number; // 0-100
  x: number; // 0-100 relative percentage on web network
  y: number; // 0-100 relative percentage on web network
  iconName: string;
  connections: string[]; // skill IDs connected
}

export interface TimelineItem {
  id: string;
  type: 'experience' | 'education';
  title: string;
  organization: string;
  location: string;
  period: string;
  description: string[];
  details?: {
    cgpa?: string;
    subjects?: string[];
    highlights?: string[];
  };
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  badge: string;
  description: string;
  certificateUrl?: string;
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  image: string;
  verifyUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export type SpiderSuitTheme = 'classic' | 'iron-spider' | 'stealth' | 'future-2099';
