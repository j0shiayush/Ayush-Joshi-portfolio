export interface NavItem {
    label: string;
    href: string;
  }
  
  export interface SocialLink {
    name: string;
    url: string;
    icon: string;
  }
  
  export interface SkillCategory {
    title: string;
    skills: string[];
  }
  
  export interface ExperienceItem {
    id: string;
    company: string;
    role: string;
    location: string;
    period: string;
    highlights: {
      text: string;
      metric?: string;
    }[];
    technologies: string[];
  }
  
  export interface ProjectItem {
    id: string;
    title: string;
    description: string;
    metricsHighlight: string;
    image: string;
    liveUrl: string;
    githubUrl: string;
    technologies: string[];
  }
  
  export interface EducationItem {
    institution: string;
    degree: string;
    score: string;
    period: string;
    location: string;
  }