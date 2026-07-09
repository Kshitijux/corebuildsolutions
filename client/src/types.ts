export interface Project {
  id: string;
  title: string;
  client: string;
  category: 'web' | 'mobile' | 'ai' | 'saas' | 'branding';
  description: string;
  longDescription: string;
  image: string;
  gallery: string[];
  tags: string[];
  stats: { label: string; value: string }[];
  testimonial?: {
    name: string;
    role: string;
    text: string;
    avatar?: string;
  };
  beforeImage?: string;
  afterImage?: string;
  featured: boolean;
  url?: string;
  businessProblem?: string;
  solution?: string;
  results?: string;
  features?: string[];
  timeline?: string;
}

export interface Blog {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  image: string;
  date: string;
  author: string;
  readTime: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  image: string;
}

export interface Service {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  icon: string;
  details: string[];
  workflow: {
    step: number;
    title: string;
    desc: string;
  }[];
  pricing: {
    plan: string;
    price: string;
    features: string[];
    description?: string;
    originalPrice?: string;
    popular?: boolean;
    ctaText?: string;
    active?: boolean;
    order?: number;
  }[];
  whatIsIt?: string;
  whoIsItFor?: string;
  processDescription?: string;
  technologiesDescription?: string;
  serviceFaqs?: { q: string; a: string }[];
}

export interface Career {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  description: string;
  requirements: string[];
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  experience?: string;
  skills?: string[];
  order?: number;
  active?: boolean;
  socials: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject?: string;
  message: string;
  service?: string;
  date: string;
  status: 'unread' | 'read' | 'resolved' | 'pending';
  source: string;
  ip?: string;
}

export interface SeoSettings {
  page: string; // 'home' | 'about' | 'services' | 'portfolio' | 'contact'
  title: string;
  description: string;
  keywords: string;
}

export interface SystemSettings {
  agencyName: string;
  contactEmail: string;
  contactPhone: string;
  whatsappNumber: string;
  address: string;
  socialLinks: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
  };
}

export interface FaqItem {
  id: string;
  q: string;
  a: string;
  order: number;
}

export interface HomeSection {
  id: string;
  key: string;
  content: any;
}

export interface DatabaseState {
  projects: Project[];
  blogs: Blog[];
  testimonials: Testimonial[];
  services: Service[];
  careers: Career[];
  team: TeamMember[];
  leads: Lead[];
  seoSettings: SeoSettings[];
  settings: SystemSettings;
  faqs: FaqItem[];
  homeSections: HomeSection[];
}
