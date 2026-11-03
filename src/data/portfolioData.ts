import type {
    NavItem,
    SocialLink,
    SkillCategory,
    ExperienceItem,
    ProjectItem,
    EducationItem,
  } from '../types/portfolio';
  
  export const PERSONAL_INFO = {
    name: 'Ayush Joshi',
    roles: ['Full-Stack Developer', 'AI/LLM Developer', 'Backend Engineer'],
    tagline: 'Architecting scalable full-stack applications, low-latency backends, and intelligent LLM pipelines from concept to production.',
    email: 'aj326108@gmail.com',
    phone: '+91 6394155238',
    location: 'Bengaluru / Noida, India',
    resumeUrl: 'https://drive.google.com/file/d/1HGPrpstvGzjrYgkTQB-5hC54m5vvhJOb/view?usp=sharing',
    profileImage: 'images/ayush-photo.png',
    statusBadge: 'Available for Full-Time SDE & AI Engg. Roles',
    floatingHeroBadges: ['React.js', 'TypeScript', 'Next.js', 'FastAPI', 'LangChain / RAG'],
    achievementBanner: 'Awarded a 100% Founders Scholarship at SRM University for securing All India Rank 92 in SRMJEEE.',
  };
  
  export const NAV_ITEMS: NavItem[] = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];
  
  export const SOCIAL_LINKS: SocialLink[] = [
    { name: 'GitHub', url: 'https://github.com/j0shiayush', icon: 'Github' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/ayush-joshi-86b06a21b/', icon: 'Linkedin' },
    { name: 'Email', url: 'mailto:aj326108@gmail.com', icon: 'Mail' },
  ];
  
  export const SKILL_CATEGORIES: SkillCategory[] = [
    {
      title: 'Foundations & Languages',
      skills: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'C++', 'Data Structures & Algorithms', 'OOP'],
    },
    {
      title: 'Frontend Engineering',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Lightning Web Components', 'HTML & CSS'],
    },
    {
      title: 'Backend & Databases',
      skills: ['FastAPI', 'Node.js', 'Express.js', 'MongoDB', 'Supabase', 'Socket.io', 'RESTful APIs', 'JWT & OAuth 2.0'],
    },
    {
      title: 'AI / LLMs & DevOps',
      skills: ['RAG Pipelines', 'LangChain', 'LLM APIs', 'LangGraph', 'AWS', 'Docker', 'Git & GitHub', 'Vercel / Render'],
    },
  ];
  
  export const EXPERIENCE_DATA: ExperienceItem[] = [
    {
      id: 'wipro',
      company: 'Wipro',
      role: 'Salesforce Trainee',
      location: 'Remote, India',
      period: 'Jan 2026 - Apr 2026',
      highlights: [
        {
          text: 'Completed intensive 8-hour daily training in Salesforce CRM and Platform Developer 1 fundamentals, achieving ',
          metric: '95% assessment proficiency scores.',
        },
        {
          text: 'Built hands-on Lightning Web Components (LWC) and JavaScript-based custom modules through daily coding labs, completing ',
          metric: '15+ guided Salesforce development exercises.',
        },
      ],
      technologies: ['Salesforce CRM', 'Lightning Web Components', 'JavaScript', 'Platform Developer I', 'Apex Basics'],
    },
    {
      id: 'bhashini',
      company: 'Digital India BHASHINI Division (MeitY)',
      role: 'SDE Intern',
      location: 'Noida, India',
      period: 'Sep 2025 - Dec 2025',
      highlights: [
        {
          text: 'Architected 90% of the SHRUTLEKH real-time transcription system using Python and FastAPI pipelines, improving transcription accuracy and backend processing efficiency by ',
          metric: '35%.',
        },
        {
          text: 'Engineered a scalable Minutes of Meeting (MoM) generation engine integrating Gemma LLM APIs and redesigned versioned REST documentation, reducing inference latency by ',
          metric: '30% overall.',
        },
      ],
      technologies: ['Python', 'FastAPI', 'Gemma LLM API', 'Real-Time Transcription', 'REST APIs', 'System Architecture'],
    },
    {
      id: 'chegg',
      company: 'Chegg India Pvt. Ltd',
      role: 'Subject Matter Expert (Computer Science)',
      location: 'Remote, India',
      period: 'Sep 2022 - Feb 2024',
      highlights: [
        {
          text: 'Solved across core computer science domains while strictly meeting stringent SLA turnaround deadlines: ',
          metric: '200+ advanced technical problems',
        },
        {
          text: 'Delivered precise technical explanations, algorithm optimizations, and debugging guidance to global learners while maintaining ',
          metric: '95%+ accuracy across all sessions.',
        },
      ],
      technologies: ['Computer Science Core', 'Algorithms', 'Python', 'C++', 'SQL', 'Technical Debugging'],
    },
  ];
  
  export const PROJECTS_DATA: ProjectItem[] = [
    {
      id: 'documind-ai',
      title: 'DocuMind AI',
      description:
        'An optimized full-stack Retrieval-Augmented Generation (RAG) platform featuring persistent multi-session chat, vector embeddings, and real-time Server-Sent Events (SSE) token streaming.',
      metricsHighlight: '40% lower query latency • Sub-200ms first-token response',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://documindai-chat.vercel.app/', 
      githubUrl: 'https://github.com/j0shiayush/documind-ai', 
      technologies: ['Next.js', 'TypeScript', 'Supabase pgvector', 'Gemini API', 'Tailwind CSS'],
    },
    {
      id: 'spurnexus-ai-agent',
      title: 'SpurNexus AI Agent',
      description:
        'An intelligent, automated customer support agent utilizing Large Language Models (LLMs) and RAG architecture to autonomously evaluate, route, and resolve inbound support tickets.',
      metricsHighlight: 'Automated ticket resolution • Context-aware RAG pipelines',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://spurnexus-aria.vercel.app/', 
      githubUrl: 'https://github.com/j0shiayush/spurnexus-ai-support-agent', 
      technologies: ['Python', 'FastAPI', 'LangChain', 'LLM APIs', 'Vector DB'],
    },
    {
      id: 'climate-hazard-analyzer',
      title: 'Climate Hazard Analyzer',
      description:
        'A full-stack climate analytics dashboard providing real-time geographical data visualizations, location-based autocomplete mapping, and detailed environmental hazard risk scoring.',
      metricsHighlight: 'Real-time geospatial analytics • Interactive risk mapping',
      image: 'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://climatehazard-trend-analyzer.vercel.app/', 
      githubUrl: 'https://github.com/j0shiayush/climate-hazard-analyzer', 
      technologies: ['FastAPI', 'React.js', 'Leaflet', 'Python', 'Tailwind CSS'],
    },
    {
      id: 'realtime-tracker',
      title: 'Realtime Tracker',
      description:
        'High-concurrency live geolocation tracking system utilizing bi-directional WebSockets via Socket.io, asynchronous MongoDB write decoupling, and Google/GitHub OAuth.',
      metricsHighlight: 'Sub-100ms map updates • 40% faster UI responsiveness',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://realtimelive-tracker.vercel.app/', 
      githubUrl: 'https://github.com/j0shiayush/realtime-tracker', 
      technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.io', 'OAuth'],
    },
    {
      id: 'mern-helpdesk',
      title: 'Helpdesk Ticket Management System',
      description:
        'A scalable customer support platform featuring secure JWT authentication, role-based access control (RBAC), and dedicated administrative and user analytics dashboards.',
      metricsHighlight: 'Secure role-based dashboards • Automated ticket routing',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://helpdesk-ticketsystem.vercel.app/', 
      githubUrl: 'https://github.com/j0shiayush/helpdesk-ticket-system', 
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Vercel'],
    },
    {
      id: 'link-voyager-api',
      title: 'Link Voyager API',
      description:
        'A high-performance RESTful API designed for advanced URL management, link redirection tracking, and robust analytics data aggregation.',
      metricsHighlight: 'High-throughput URL routing • Robust analytics tracking',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://link-voyager-api.onrender.com/', 
      githubUrl: 'https://github.com/j0shiayush/link-voyager-api', 
      technologies: ['Node.js', 'Express.js', 'MongoDB', 'REST API', 'Postman'],
    },
    {
      id: 'online-video-kyc',
      title: 'Online Video KYC System',
      description:
        'Automated real-time digital identity verification platform equipped with interactive SQL analytics dashboards to monitor live verification workflows and system accuracy.',
      metricsHighlight: '50% faster onboarding • 40% higher verification accuracy',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      liveUrl: 'https://github.com/j0shiayush/online-video-kyc', 
      githubUrl: 'https://github.com/j0shiayush/online-video-kyc', 
      technologies: ['Python', 'React.js', 'SQL Analytics', 'JavaScript'],
    },
  ];
  
  export const EDUCATION_DATA: EducationItem[] = [
    {
      institution: 'SRM Institute of Science and Technology, Chennai',
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      score: 'CGPA: 8.1 / 10 (100% Founders Scholar • AIR 92 in SRMJEEE)',
      period: 'Sept 2021 - Aug 2025',
      location: 'Chennai, India',
    },
    {
      institution: 'Kendriya Vidyalaya No.2, FCI, Gorakhpur',
      degree: 'Class X (Secondary) & Class XII (Senior Secondary)',
      score: 'Class X: 79% (2019) • Class XII: 71% (2021)',
      period: '2019 & 2021',
      location: 'Gorakhpur, U.P.',
    },
  ];