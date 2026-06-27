import { 
  Code2, 
  Database, 
  Globe, 
  GitBranch, 
  Server, 
  GraduationCap, 
  BookOpen, 
  Award,
  Github,
  Linkedin,
  Instagram,
  Mail,
  MapPin,
  Phone,
  LucideIcon
} from 'lucide-react';

// ==========================================
// TYPES & SCHEMAS FOR AUTO-COMPLETE AID
// ==========================================

export interface PersonalInfo {
  name: string;
  titles: string[];
  tagline: string;
  bio: string;
  location: string;
  phone: string;
  email: string;
  resumeUrl: string;
  stats: { label: string; value: string }[];
  profilePhoto: string;
}

export interface SocialItem {
  name: string;
  icon: LucideIcon;
  url: string;
  color: string;
  description: string;
}

export interface EducationItem {
  year: string;
  title: string;
  institution: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  grade?: string; // Optional grade / CGPA field
}

export interface SkillItem {
  name: string;
  level: number;
  icon: LucideIcon;
  color: string;
}

export interface SkillCategory {
  name: string;
  skillsList: SkillItem[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo: string;
  gradient: string;
  image: string;
}

export interface CertificationItem {
  name: string;
  issuer: string;
  date: string;
  link: string;
  gradient: string;
}

export interface ActivityItem {
  eventName: string;
  description: string;
  photos: string[];
}

export interface ChatbotConfig {
  greeting: string;
  suggestionChips: string[];
  responses: {
    about: string;
    skills: string;
    projects: string;
    education: string;
    certifications: string;
    activities: string;
    contact: string;
    default: string;
  };
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  socials: SocialItem[];
  education: EducationItem[];
  skills: { categories: SkillCategory[] };
  projects: ProjectItem[];
  certifications: CertificationItem[];
  activities: ActivityItem[];
  chatbot: ChatbotConfig;
}

// ==========================================
// PORTFOLIO CENTRAL DATABASE
// ==========================================

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Pratik Ugile',
    titles: [
      'MCA Student',
      'Full Stack Developer',
      'AI Enthusiast',
      'Problem Solver'
    ],
    tagline: 'Bridging creativity and logic to build intelligent digital solutions.',
    bio: 'I am a dedicated technology enthusiast currently pursuing my Master\'s in Computer Applications (MCA). My journey in tech is driven by an insatiable curiosity and a passion for creating full-stack web applications and AI-powered systems. I focus on writing clean, optimized code, designing robust backend architectures, and keeping up with the bleeding edge of software engineering.',
    location: 'Pune, Maharashtra, India',
    phone: '+91 7499181267', // Standard professional placeholder
    email: 'pr749918@gmail.com', // Professional placeholder email
    resumeUrl: 'https://drive.google.com/file/d/1VaG-EXbKDXJNkP5n371PHa04Do6qQ6Vw/view?usp=sharing', // Placeholder for CV
    stats: [
      { label: 'Technologies', value: '10+' },
      { label: 'Projects Built', value: '4+' },
      { label: 'Current Degree', value: 'MCA' }
    ],
    profilePhoto: './images/PratikPhoto.jpeg'
  },
  
  socials: [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/Ugile-pratik',
      color: '#475569', // Slate Gray
      description: 'Check out my code repositories'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/pratik-ugile/',
      color: '#0077b5', // LinkedIn Blue
      description: 'Connect with me professionally'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:pr749918@gmail.com',
      color: '#3b82f6', // Professional Blue
      description: 'Send me a direct message'
    }
  ],

  education: [
    {
      year: '2025 - Present',
      title: 'Master of Computer Applications (MCA)',
      institution: 'Institute of Management and Computer Studies (IMCC), Pune',
      description: 'Specializing in advanced software engineering, AI/ML concepts, advanced database design, and cloud deployments. Actively participating in tech symposiums.',
      icon: GraduationCap,
      gradient: 'from-[#3b82f6] to-[#6366f1]',
      grade: 'CGPA: 8.91 / 10 (Current)'
    },
    {
      year: '2022 - 2025',
      title: 'Bachelor of Computer Applications (BCA)',
      institution: 'Savitribai Phule Pune University',
      description: 'Graduated with distinction. Built projects around web technologies, core database systems, and Java development frameworks.',
      icon: Award,
      gradient: 'from-[#6366f1] to-[#8b5cf6]',
      grade: 'Grade: Distinction (8.64 CGPA / 78%)'
    },
    {
      year: '2018 - 2020',
      title: '12th Grade (Science Stream)',
      institution: 'Maharashtra State Board',
      description: 'Concentrated in Biology, Physics, and Chemistry.',
      icon: BookOpen,
      gradient: 'from-[#8b5cf6] to-[#a78bfa]',
      grade: 'Score: 71.54%'
    },
    {
      year: '2018',
      title: '10th Grade',
      institution: 'Maharashtra State Board',
      description: 'Completed secondary education with high marks, receiving honors in Science.',
      icon: BookOpen,
      gradient: 'from-[#a78bfa] to-[#c4b5fd]',
      grade: 'Score: 90.60%'
    }
  ],

  skills: {
    categories: [
      {
        name: 'Languages & Core',
        skillsList: [
          { name: 'Python', level: 75, icon: Code2, color: '#3776ab' },
          { name: 'Java', level: 80, icon: Code2, color: '#007396' },
          { name: 'JavaScript', level: 78, icon: Code2, color: '#d97706' }, // Amber
          { name: 'PHP', level: 60, icon: Code2, color: '#777bb4' }
        ]
      },
      {
        name: 'Databases & Architecture',
        skillsList: [
          { name: 'SQL', level: 90, icon: Database, color: '#005c84' },
          { name: 'MongoDB', level: 80, icon: Database, color: '#13aa52' },
          { name: 'Neo4j', level: 75, icon: Database, color: '#008cc1' }
        ]
      },
      {
        name: 'Web & Tools',
        skillsList: [
          { name: 'Web Development', level: 92, icon: Globe, color: '#6366f1' },
          { name: 'Git', level: 85, icon: GitBranch, color: '#f05032' },
          { name: 'GitHub', level: 85, icon: GitBranch, color: '#475569' },
          { name: 'Jira', level: 80, icon: GitBranch, color: '#b732f0' },
        ]
      }
    ]
  },

  projects: [
    {
      title: 'JalSankalp',
      description: 'A smart digital governance suite to automate rural water distribution and eliminate record fraud. Features physical QR-code verification for automated operator attendance tracking and an OTP-authenticated citizen portal for real-time grievance redressal.',
      tech: ['React', 'Node.js', 'Express', 'MySQL', 'React Native'],
      github: 'https://github.com/Ugile-pratik/JalSankalp.git',
      demo: '#',
      gradient: 'from-[#3b82f6] to-[#6366f1]',
      image: 'https://images.unsplash.com/photo-1684493735679-359868df0e18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'Synca',
      description: 'A real-time inventory management engine designed to eliminate double-booking in student accommodations by instantly synchronizing online reservations with offline walk-in entries. Features a centralized property management dashboard with atomic transaction handling to ensure 100% data consistency across digital and physical bookings.',
      tech: ['Python', 'Django', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      github: 'https://github.com/Ugile-pratik/Synca.git',
      demo: '#',
      gradient: 'from-[#dc2626] to-[#f43f5e]',
      image: 'https://images.unsplash.com/photo-1697192156499-d85cfe1452c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      title: 'PromptPal',
      description: 'An AI-powered self-learning chatbot that delivers intelligent responses using a K-Nearest Neighbors (KNN) algorithm and a Vector Space Model for text similarity. Features adaptive learning from user interactions, text-to-speech functionality, and an admin dashboard for managing chat history and the knowledge base, providing an interactive and continuously improving conversational experience.',
      tech: ['Python', 'Flask', 'KNN', 'Vector Space Model', 'HTML', 'CSS', 'JavaScript'],
      github: 'https://github.com/Ugile-pratik/PromptPal-Chatbot.git',
      demo: '#',
      gradient: 'from-[#0d9488] to-[#0284c7]',
      image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080'
    },
    
  ],

  certifications: [
    
    {
      name: 'DSA with JAVA',
      issuer: 'Apna College',
      date: '2025',
      link: 'https://drive.google.com/file/d/1nu9yx0l7Fsz2mNb9c9UOABhAVJACwIu8/view?usp=drive_link',
      gradient: 'from-[#0d9488] to-[#3b82f6]'
    }
  ],

  activities: [
    {
      eventName: 'Jigyasa-2026 at IMCC, Pune',
      description: 'Proud to be a Cultural committee member for Jigyasa, an intercollegiate competition that brings together talented minds to compete, learn, and innovate.',
      photos: [
        './images/jigyasa1.jpeg',
        './images/jigyasa2.jpeg',
        './images/jigyasa3.jpeg'
      ]
    }
  ],

  chatbot: {
    greeting: "Hi there! I am Pratik's AI assistant. Ask me anything about his technical skills, education, certifications, hackathons, or projects!",
    suggestionChips: [
      'About Pratik',
      'Technical Skills',
      'Featured Projects',
      'Certifications',
      'Tech Activities',
      'Contact Details'
    ],
    responses: {
      about: "Pratik Ugile is an MCA student at Savitribai Phule Pune University and a Full Stack Developer. He builds modern, high-performance web applications and is highly passionate about AI, machine learning, and systems architecture.",
      skills: "Pratik is proficient across programming languages (Python, Java, JavaScript, PHP), database architectures (SQL, MongoDB, GraphDB Neo4j), and version control (Git, GitHub).",
      projects: "Some of Pratik's notable projects include Promptpal (AI KNN Chatbot), Blood Bank Donation System, Mini Clinic ERP, and an E-commerce Android app. Click the Projects section to explore them!",
      education: "Pratik is currently pursuing his MCA (2024-Present) at Savitribai Phule Pune University. He previously graduated with distinction in BCA (2021-2024).",
      certifications: "Pratik holds certifications in Python for Data Science and AI (IBM), Java Programming Masterclass (Udemy), and Full Stack Web Development (Infosys Springboard).",
      activities: "Pratik is very active in tech hackathons and meetups! He won the 'Most Innovative Architecture' award at the National Level Web Hackathon 2025 and won first place at the University Tech Fest for his Promptpal presentation.",
      contact: "You can reach Pratik at pratikugile@gmail.com, connect with him on LinkedIn, or fill out the contact form below.",
      default: "I'd love to chat more! You can explore the sections on this website or send Pratik a message directly using the Contact Form."
    }
  }
};
