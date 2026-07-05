import { Project, Blog, Testimonial, Service, Career, TeamMember, SeoSettings, SystemSettings, FaqItem, HomeSection } from './types';

export const fallbackSettings: SystemSettings = {
  agencyName: 'CoreBuild Solutions',
  contactEmail: 'partner@corebuildsolutions.in',
  contactPhone: '+1 (800) 555-0199',
  whatsappNumber: '+18005550199',
  address: 'Level 42, Vercel Tower, 100 Hudson Street, New York, NY 10013',
  socialLinks: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/corebuildsolutions.in/'
  }
};

export const fallbackProjects: Project[] = [
  {
    id: 'proj-1',
    title: 'Apex Premium Real Estate',
    client: 'Apex Group London',
    category: 'web',
    description: 'A next-generation real-estate platform with immersive 3D walkthroughs, custom map rendering, and AI-driven valuation models.',
    longDescription: 'Apex Group required a digital solution that matched the prestige of their ultra-luxury real estate portfolio in Central London. We designed and engineered a custom web platform utilizing WebGL for immersive walkthroughs, integrated Mapbox for custom geospatial analytics, and built a custom AI regression model that offers real-time property valuation predictions based on localized trends. The layout leverages a sophisticated dark grid, luxury typography, and high-performance image optimization to deliver a loading speed under 0.8s.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['React', 'Three.js', 'Vite', 'TailwindCSS', 'Mapbox', 'FastAPI'],
    stats: [
      { label: 'Conversion Rate', value: '+142%' },
      { label: 'Session Duration', value: '4.2m' },
      { label: 'Organic Traffic', value: '+300%' }
    ],
    testimonial: {
      name: 'Sarah Jenkins',
      role: 'VP of Product',
      text: 'CoreBuild Solutions completely transformed our digital presence. The 3D property walkthroughs and sleek search interface have directly contributed to our highest-revenue quarter in history.',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    featured: true,
    url: 'https://apex-luxury-estates.com'
  },
  {
    id: 'proj-2',
    title: 'LuxeDining Concierge',
    client: 'Luxe Group Global',
    category: 'mobile',
    description: 'An elite table booking and culinary concierge iOS/Android app built with React Native and featuring personalized AI suggestions.',
    longDescription: 'LuxeDining is an invitation-only mobile application for high-net-worth individuals to book premium Michelin-star dining tables and private culinary events. We developed a robust microservices architecture backing a cross-platform React Native app. Key features include an offline-first calendar, real-time push notification orchestration via Firebase, secure Apple Pay and crypto payment gateways, and a tailored GPT-powered recommendations engine that suggests tasting menus based on previous preferences.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['React Native', 'TypeScript', 'Node.js', 'Redux', 'Stripe', 'MongoDB'],
    stats: [
      { label: 'Active Users', value: '45K+' },
      { label: 'Booking Success', value: '99.9%' },
      { label: 'Retention Rate', value: '87%' }
    ],
    testimonial: {
      name: 'David Chen',
      role: 'Head of Customer Relations',
      text: 'Their mastery of mobile UX and payment routing saved us months of development. The app feels incredibly fluid, matching our luxury standards perfectly.',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    featured: true,
    url: 'https://luxedining-app.com'
  },
  {
    id: 'proj-3',
    title: 'Quantum Neural FinTech',
    client: 'Quantum Wealth Partners',
    category: 'ai',
    description: 'A deep-learning predictive model dashboard for automated risk modeling and quantitative portfolio balancing.',
    longDescription: 'Quantum Wealth Partners required an enterprise-grade web interface to display complex neural-network forecasting metrics for hedge fund managers. We built a high-frequency trading dashboard using React, Vite, Tailwind CSS, and Chart.js, designed to handle sub-second websocket data streams. The system integrates Python-based machine learning endpoints to forecast market variance and suggest automated asset rebalancing, complete with a glassmorphic dark-mode workspace that optimizes data readability.',
    image: 'https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80'
    ],
    tags: ['React', 'WebSockets', 'Chart.js', 'Python', 'Docker', 'AWS'],
    stats: [
      { label: 'Throughput', value: '10K/s' },
      { label: 'Forecast Accuracy', value: '84.2%' },
      { label: 'Latency', value: '12ms' }
    ],
    testimonial: {
      name: 'Elena Rostova',
      role: 'Chief Risk Officer',
      text: 'The dashboard is a masterpiece of design and performance. Processing thousands of financial data points in real time with zero lag is a triumph.',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80'
    },
    featured: true,
    url: 'https://quantum-trading.net'
  }
];

export const fallbackBlogs: Blog[] = [
  {
    id: 'blog-1',
    title: 'The Future of AI in Enterprise Software Architecture',
    category: 'AI & Automation',
    summary: 'A strategic exploration of how LLM agents and semantic routers are shifting backend designs from deterministic APIs to dynamic intent engines.',
    content: `The paradigm of software engineering is undergoing its most radical transformation since the advent of cloud computing. Historically, enterprise applications relied on rigid, deterministic logic flow charts. Database structures were locked, APIs returned static payloads, and user flows were hardcoded step-by-step.

With the arrival of production-grade Large Language Models (LLMs) and vector databases, we are moving towards Intent-Driven Architectures. In these systems, user interface actions are interpreted as natural language payloads, processed by orchestrating agents that select tools, fetch semantic contexts, and compose custom JSON payloads on the fly.
          
### The Shift to Semantic Routing
Instead of calling specific REST endpoints (e.g. GET /api/v1/users/profile), frontends now communicate with semantic gateways. These gateways evaluate the request intent and coordinate with dynamic microservices. This allows software to adapt immediately to changing user desires without deploying new code.
          
### High-Performance AI Operations
To maintain the sub-100ms response times expected of modern premium web apps, companies must adopt aggressive caching and caching-first vector lookups (using Redis in front of Pinecone or pgvector). 
          
At CoreBuild Solutions, we specialize in building these hybrid architectures, combining the reliability of PostgreSQL with the cognitive versatility of OpenAI and Claude integrations.`,
    image: 'https://images.unsplash.com/photo-1677442136019-21780efad99a?auto=format&fit=crop&w=800&q=80',
    date: 'July 01, 2026',
    author: 'Elena Vance, CTO',
    readTime: '6 min read',
    tags: ['AI', 'System Design', 'Next.js', 'Vector DB']
  },
  {
    id: 'blog-2',
    title: 'Minimalist Interaction Design for Premium Luxury Brands',
    category: 'UI/UX Design',
    summary: 'Analyze why brands like Apple, Stripe, and Linear rely on high-fidelity whitespace, typography, and subtle micro-motions to increase trust.',
    content: `When high-ticket consumers visit your website, they make an aesthetic judgment in less than 50 milliseconds. Generic layouts, flashy animations, and dense walls of text instantly signal a lack of refinement, degrading brand equity.
          
To cultivate an elite digital brand presence, designers must align with three principles of luxury design:
          
1. **Negative Space as a Luxury Asset**
Just as luxury boutiques leave vast floor spaces empty, premium digital design uses generous padding (typically 120px to 160px between major sections). This gives the viewer's eyes breathing room, emphasizing only the most critical headlines.
          
2. **Typographic Authority**
Luxury brands avoid standard sans-serif system fonts. By utilizing editorial display fonts (like Outfit, Playfair, or custom geometrics) paired with robust line-heights (1.5 to 1.6 for copy, 1.1 for hero headers), the site exudes structural confidence.
          
3. **Subtle Motion Choreography**
Cheap sites use jarring entrances and bounce animations. Premium design utilizes high-damping spring motions. A button should not pop; it should smoothly expand and glow slightly, responding to the mouse like Liquid Glass.
          
By implementing custom hover glows, magnetic buttons, and glassmorphic blur overlays, you establish a sense of tactility and high-end craft.`,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    date: 'June 28, 2026',
    author: 'Marcus Sterling, Lead Designer',
    readTime: '4 min read',
    tags: ['Design', 'UX Research', 'Animations']
  }
];

export const fallbackTestimonials: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'Apex Group London',
    rating: 5,
    text: 'CoreBuild Solutions completely transformed our digital presence. The 3D property walkthroughs and sleek search interface have directly contributed to our highest-revenue quarter in history.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 'test-2',
    name: 'David Chen',
    role: 'Head of Customer Relations',
    company: 'Luxe Group Global',
    rating: 5,
    text: 'Their mastery of mobile UX and payment routing saved us months of development. The app feels incredibly fluid, matching our luxury standards perfectly.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
  }
];

export const fallbackServices: Service[] = [
  {
    id: 'srv-1',
    name: 'Custom Web Applications',
    subtitle: 'High-performance, secure solutions built to scale.',
    description: 'We engineer state-of-the-art web architectures tailored for high-ticket businesses, using React, Vite, and Node.js.',
    icon: 'Globe',
    details: ['Server-Side Rendered React', 'Real-time WebSocket platforms', 'GraphQL & REST API designs', 'Secure JWT/OAuth auth architectures', 'High-performance database modeling'],
    workflow: [
      { step: 1, title: 'Discovery & Blueprinting', desc: 'Deep dive into user personas, system workflows, and technical feasibility studies.' },
      { step: 2, title: 'Interactive Prototyping', desc: 'Designing high-fidelity interactive screens showcasing user experience.' },
      { step: 3, title: 'Robust Engineering', desc: 'Writing clean, typed TypeScript code with automated testing suites.' },
      { step: 4, title: 'Deployment & Hypercare', desc: 'Deploying to high-availability edge nodes with continuous monitoring.' }
    ],
    pricing: [
      { plan: 'Core Web Launch', price: '₹49,999', features: ['Custom React Frontend', '5 Key Pages & Contact Forms', 'Lighthouse Optimization (95+)', 'SEO Meta & Sitemap Config', '3 Months Support'], description: 'Perfect for small businesses wishing to establish a high-performance web presence.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'Enterprise Portal', price: '₹1,49,999', features: ['Custom Full-Stack Architecture', 'Unlimited Pages & Admin Panel', 'Database & Auth Systems', 'WebSockets Real-time Data', '1 Year Priority Support'], description: 'Full-scale custom portal engineered to handle high user volume and transactions.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ]
  },
  {
    id: 'srv-2',
    name: 'Mobile App Development',
    subtitle: 'Fluid iOS & Android apps that match luxury brand standards.',
    description: 'We develop native-feeling mobile applications with high-fidelity animations, offline capabilities, and secure billing gateways.',
    icon: 'Smartphone',
    details: ['React Native & Flutter', 'Native Swift & Kotlin bridges', 'Biometric login & FaceID integrations', 'Apple & Google Pay processing', 'Offline-first database synchronization'],
    workflow: [
      { step: 1, title: 'Mobile UX Strategy', desc: 'Defining gesture paradigms, navigation structures, and system triggers.' },
      { step: 2, title: 'Visual & Apple UI Design', desc: 'Designing to official iOS Human Interface Guidelines with absolute detail.' },
      { step: 3, title: 'Core Native Coding', desc: 'Developing the application code and verifying performance on actual hardware.' },
      { step: 4, title: 'App Store Launch', desc: 'Managing App Store Connect and Google Play console compliance reviews.' }
    ],
    pricing: [
      { plan: 'Premium App Prototype', price: '₹89,999', features: ['Full UI/UX interactive wireframe', '1 Native App (iOS or Android)', 'Core API Integrations', 'App Store Setup Assistance', '2 Months Support'], description: 'Validate your concept with an interactive prototype and core functionalities.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'Omni-channel Suite', price: '₹2,49,999', features: ['Dual Apps (iOS & Android)', 'Full backend API orchestration', 'Offline database sync', 'Real-time notification engine', 'Dedicated project manager'], description: 'Production-ready iOS and Android apps connected to a custom cloud backend.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ]
  },
  {
    id: 'srv-3',
    name: 'AI & Machine Learning Systems',
    subtitle: 'Embedding cognitive power into your business process.',
    description: 'We deploy custom LLM integrations, conversational agents, semantic search tools, and predictive algorithms.',
    icon: 'Cpu',
    details: ['OpenAI, Claude, & Llama integrations', 'Vector databases (Pinecone, pgvector)', 'Custom RAG (Retrieval-Augmented Generation)', 'Natural language agent routing', 'Predictive modeling analytics dashboards'],
    workflow: [
      { step: 1, title: 'Data Audit', desc: 'Analyzing existing enterprise data stores, access limits, and security constraints.' },
      { step: 2, title: 'Model Selection & RAG Setup', desc: 'Choosing appropriate LLM layers and setting up vector indexing databases.' },
      { step: 3, title: 'Interface & Dashboarding', desc: 'Creating rich visual tools for team members or clients to interact with model outputs.' },
      { step: 4, title: 'Optimization & Guardrails', desc: 'Adding safety layers, instruction tuning, and cost-containment cache pipelines.' }
    ],
    pricing: [
      { plan: 'AI Assistant Integration', price: '₹99,999', features: ['Custom LLM chatbot widget', 'RAG integration with your files', 'Conversational memory', 'Admin usage log', '1 Month Fine-Tuning'], description: 'Intelligent chatbot trained on your documentation to automate customer support.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'Enterprise AI Agent Workspace', price: '₹1,99,999', features: ['Multi-agent workflow routing', 'Semantic vector DB installation', 'Custom analytics dashboard', 'API keys rotation & usage caps', 'Priority developer support'], description: 'Deploy multiple autonomous agents to automate complex multi-step tasks.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ]
  }
];

export const fallbackCareers: Career[] = [
  {
    id: 'car-1',
    title: 'Lead Full Stack Engineer',
    department: 'Engineering',
    location: 'Remote (GMT+/-4)',
    type: 'Remote',
    description: 'We are seeking an elite engineer with mastery over React, Node.js, and TypeScript to architect high-performance SaaS solutions.',
    requirements: ['5+ years developing production-grade web systems.', 'Expertise in database design (PostgreSQL/MongoDB) and caching.', 'Strong understanding of bundlers (Vite) and cloud deployments.', 'Passion for pixel-perfect animations and clean code patterns.']
  },
  {
    id: 'car-2',
    title: 'Senior UI/UX Designer',
    department: 'Design',
    location: 'London / Hybrid',
    type: 'Full-time',
    description: 'Join our award-winning design studio to craft modern, editorial layouts for luxury brands and advanced tech enterprises.',
    requirements: ['Solid portfolio demonstrating high-end typography, negative space, and custom motion.', 'Mastery of Figma, including advanced prototyping and design variables.', 'Experience collaborating closely with frontend engineers.']
  }
];

export const fallbackTeam: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Kshitij Tiwari',
    role: 'Founder – CoreBuild Solutions',
    image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kshitij',
    bio: 'Founder and Director of CoreBuild Solutions. Over 15 years directing digital strategy, building high-throughput cloud architectures, and designing luxury minimalist products.',
    experience: '15+ Years',
    skills: ['Strategy', 'System Architecture', 'SaaS'],
    order: 1,
    active: true,
    socials: { twitter: 'https://twitter.com', linkedin: 'https://linkedin.com', github: 'https://github.com' }
  },
  {
    id: 'team-2',
    name: 'Elena Vance',
    role: 'Chief Technology Officer',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    bio: 'Former staff developer at Stripe. Expert in distributed database architecture, real-time message brokers, and low-latency system integration.',
    experience: '10+ Years',
    skills: ['System Architecture', 'Go', 'Kubernetes'],
    order: 2,
    active: true,
    socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' }
  },
  {
    id: 'team-3',
    name: 'Marcus Sterling',
    role: 'Lead UI/UX Motion Designer',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
    bio: 'Apple Alumnus. Focuses on premium spacing, fluid micro-interactions, and visual layouts that instantly convey trust and quality.',
    experience: '8+ Years',
    skills: ['Figma', 'Framer Motion', 'Webflow'],
    order: 3,
    active: true,
    socials: { twitter: 'https://twitter.com', github: 'https://github.com' }
  }
];

export const fallbackSeoSettings: SeoSettings[] = [
  {
    page: 'home',
    title: 'CoreBuild Solutions | Premium Global Web & Software Agency',
    description: 'We design and engineer elite web applications, mobile apps, and custom AI systems that premium businesses trust. Beautiful design meets world-class engineering.',
    keywords: 'web design, web development, premium agency, custom software, AI automation, luxury brands design'
  },
  {
    page: 'about',
    title: 'Our Story | CoreBuild Solutions',
    description: 'Meet the award-winning team of product designers, staff developers, and brand strategists engineering the digital future for high-ticket brands.',
    keywords: 'about agency, team, founders, developers, creative agency, core values'
  },
  {
    page: 'services',
    title: 'Elite Digital Services | CoreBuild Solutions',
    description: 'Explore our tailored services including custom web apps, native-feeling mobile software, and vector-backed artificial intelligence systems.',
    keywords: 'web development cost, mobile app dev, AI systems, SaaS creation, custom CMS development'
  },
  {
    page: 'portfolio',
    title: 'Award-Winning Projects Showcase | CoreBuild Solutions',
    description: 'View the elite projects we have shipped for real estate platforms, global concierge apps, and Quantitative FinTech funds.',
    keywords: 'portfolio, design gallery, case studies, nextjs examples, react app showcase'
  },
  {
    page: 'contact',
    title: 'Secure Your Strategic Consultation | CoreBuild Solutions',
    description: 'Contact our agency leads today. Request a custom development blueprint, book a virtual meeting, or initiate your digital roadmap.',
    keywords: 'contact agency, book a call, development quote, hire web agency, London design firm'
  }
];

export const fallbackFaqs: FaqItem[] = [
  {
    id: 'faq-1',
    q: 'What is your typical project delivery timeline?',
    a: 'Timeline varies by complexity. A premium marketing site or simple prototype takes 3–5 weeks. Custom enterprise portals, database integrations, and complex AI agent architectures take 8–12 weeks. We map out detailed weekly sprint milestones during discovery.',
    order: 1
  },
  {
    id: 'faq-2',
    q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    a: 'Absolutely. We deal with proprietary algorithms, quantitative financial dashboards, and unreleased startup blueprints daily. All discussions, credentials, and data are treated with enterprise-grade confidentiality under binding NDAs.',
    order: 2
  },
  {
    id: 'faq-3',
    q: 'Can we manage the content ourselves once the project is shipped?',
    a: 'Yes. We deliver custom administrator dashboards (built specifically for your database schemas) where you can easily perform CRUD operations (add projects, update blogs, manage leads, configure SEO tags) without touching any code.',
    order: 3
  },
  {
    id: 'faq-4',
    q: 'Do you offer post-launch maintenance and support?',
    a: 'We provide 3 to 12 months of dedicated hypercare support post-launch depending on your selected tier. This includes server monitoring, core software updates, database vacuuming, and performance fine-tuning to keep Lighthouse scores at 95+.',
    order: 4
  }
];

export const fallbackHomeSections: HomeSection[] = [
  {
    id: 'hs-hero',
    key: 'hero',
    content: {
      badge: 'Award-Winning Digital Craftsmanship',
      title: 'Building the Products Premium Brands Want.',
      description: 'We craft high-performance web applications, native-feeling mobile software, and custom AI automation pipelines engineered for absolute speed and luxury aesthetic design.',
      ctaText1: 'Book a consultation',
      ctaText2: 'View Case Studies',
      stats: [
        { value: '99.9%', label: 'Uptime SLA' },
        { value: '50M+', label: 'Capital Raised' },
        { value: '98%', label: 'Lighthouse Avg' }
      ]
    }
  },
  {
    id: 'hs-partners',
    key: 'partners',
    content: {
      companies: ['Stripe', 'Linear', 'Vercel', 'Framer', 'Cuberto', 'Apple', 'Apex Group', 'LuxeDining']
    }
  },
  {
    id: 'hs-ai',
    key: 'aiSection',
    content: {
      badge: 'Cognitive Engineering',
      title: 'AI integrations that save real time.',
      description: 'We integrate state-of-the-art Large Language Models (LLMs), RAG lookup vector search, and dynamic agent architectures directly into custom dashboards. No standard bots; custom automation designed for your workflows.',
      features: [
        'RAG Vector (Pinecone/pgvector)',
        'Semantic Intent routing gates',
        'Llama & GPT-4o fine-tuning',
        'Sub-second caching endpoints'
      ]
    }
  },
  {
    id: 'hs-process',
    key: 'process',
    content: {
      steps: [
        { step: '01', title: 'Blueprint & Audit', desc: 'We audit your requirements, draw system wireframes, and verify performance roadblocks.' },
        { step: '02', title: 'Luxury UI Design', desc: 'Designing high-fidelity screens utilizing Outfit fonts, spacing ratios, and motion curves.' },
        { step: '03', title: 'TypeScript Build', desc: 'Developing with typed safety, component decoupling, and sub-second bundle compilation.' },
        { step: '04', title: 'Edge Deployment', desc: 'Deploying to global CDN servers, caching APIs, and optimizing Lighthouse logs to 95+.' }
      ]
    }
  },
  {
    id: 'hs-cta',
    key: 'ctaBanner',
    content: {
      badge: 'Bookings Active for Q3 2026',
      title: "Let's craft your next digital breakthrough.",
      description: 'Secure a strategic blueprint session to outline project specifications, timelines, budget allocations, and performance frameworks.',
      ctaText: 'Initiate Discussion'
    }
  },
  {
    id: 'hs-about',
    key: 'aboutSection',
    content: {
      milestones: [
        { year: 'August 2025', title: 'CoreBuild Solutions Founded', desc: 'Launched with a singular vision: to bridge the gap between high-end digital design and enterprise-level software engineering.' },
        { year: 'Late 2025', title: 'First Bespoke Solution Delivered', desc: 'Shipped our first custom business platform, demonstrating 100/100 Lighthouse performance scores and establishing our market reputation.' },
        { year: 'Early 2026', title: 'Expanded into Web & Native Apps', desc: 'Recruited top-tier engineers to deliver cross-platform React Native mobile applications and scalable database pipelines.' },
        { year: 'Spring 2026', title: 'Branding, SEO & Marketing Integration', desc: 'Rolled out a comprehensive marketing suite, delivering ROI-focused SEO campaigns, custom meta ads, and branding strategies.' },
        { year: 'Mid 2026', title: 'Delivered Multiple Enterprise Projects', desc: 'Partnered with international clients to build bespoke CRM panels, machine learning engines, and secure admin control boards.' },
        { year: 'Present', title: 'Full-Service Digital Agency', desc: 'Growing rapidly with a client-first focus, driving innovation with cutting-edge tech stacks and preparing for next-gen AI agency solutions.' }
      ],
      values: [
        { title: 'Client-First Focus', desc: 'We structure custom workflows and dedicated staging systems around your unique growth models. Your business is our priority.' },
        { title: 'Absolute Quality', desc: 'We write clean, strictly-typed TypeScript code, configure automatic lint controls, and deliver detailed documentation guides.' },
        { title: 'Innovative Technology', desc: 'We utilize state-of-the-art architectures like React, Vite, Node, and Pinecone vector spaces to give your product a technical advantage.' }
      ]
    }
  }
];
