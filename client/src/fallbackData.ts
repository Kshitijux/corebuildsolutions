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
    title: 'Apex Premium Real Estate Platform',
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
    url: 'https://apex-luxury-estates.com',
    businessProblem: 'Apex Group London suffered from low engagement and high bounce rates on their previous luxury real estate portal. Standard 2D photos failed to represent premium property specifications, resulting in a loss of organic lead conversions. Slow loading times of high-resolution images also degraded Core Web Vitals performance, negatively impacting search engine visibility.',
    solution: 'We engineered a custom React and Vite single-page application utilizing WebGL and Three.js for immersive 3D virtual walkthroughs. We integrated Mapbox API for customized geospatial queries and geographical maps. We built an automated AI valuation engine running on FastAPI. In addition, we optimized images to next-gen formats and implemented active lazy loading, reducing Largest Contentful Paint (LCP) from 3.5s to 0.8s.',
    results: 'The newly launched web application resulted in a +142% increase in sales lead conversions within Q1, increased the average session duration to 4.2 minutes, and elevated search engine rankings for key terms, triggering a +300% boost in organic Google search traffic.',
    features: [
      'Interactive 3D Property Walkthroughs powered by Three.js/WebGL framework.',
      'Geospatial Proximity Queries and custom routing layers built on Mapbox API.',
      'AI-Driven Automated Property Valuation regression endpoint running on FastAPI.',
      'Serverless lead capture forms integrated directly with database CRM adapters.',
      'Next-generation responsive Light Peach UI design supporting cross-device renders.'
    ],
    timeline: '8 Weeks'
  },
  {
    id: 'proj-2',
    title: 'LuxeDining Concierge Mobile App',
    client: 'Luxe Group Global',
    category: 'mobile',
    description: 'An elite table booking and culinary concierge iOS/Android app built with React Native and featuring personalized AI suggestions.',
    longDescription: 'LuxeDining is an invitation-only mobile application for high-net-worth individuals to book premium Michelin-star dining tables and private culinary events. We developed a robust microservices architecture backing a cross-platform React Native app. Key features include an offline-first calendar, real-time push notification orchestration via Firebase, secure Apple Pay and crypto payment gateways, and a tailored GPT-powered recommendations engine that suggests tasting menus based on previous preferences.',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c5?auto=format&fit=crop&w=1200&q=80',
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
    url: 'https://luxedining-app.com',
    businessProblem: 'Luxe Group Global needed to automate booking operations for elite restaurants without losing the premium human touch of their concierge service. Their existing systems were disjointed, causing booking double-allocations and excessive payment processing drop-offs due to a lacks of mobile-friendly payment interfaces.',
    solution: 'We engineered a cross-platform mobile application utilizing React Native and TypeScript, backed by a Node.js microservices architecture. We implemented secure Apple Pay, Google Pay, and Stripe gateways, along with a custom offline-first synchronized calendar. For personalization, we built a custom LLM recommendations engine to provide premium dining suggestions based on user profiles.',
    results: 'The application successfully achieved over 45,000 active global users within three months of deployment. Booking success rates rose to 99.9% while client user retention rate increased to 87%, dramatically optimizing customer lifetime value.',
    features: [
      'Unified cross-platform native codebase running React Native and TypeScript.',
      'Offline-First Local Data Storage using WatermelonDB for reservation synchronization.',
      'Secure Stripe Terminal and Apple/Google Pay system integrations.',
      'Automated Firebase Cloud Messaging for instant push notification triggers.',
      'Custom GPT-powered culinary tasting menu recommendations engine.'
    ],
    timeline: '12 Weeks'
  },
  {
    id: 'proj-3',
    title: 'Quantum Neural FinTech Dashboard',
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
    url: 'https://quantum-trading.net',
    businessProblem: 'Quantum Wealth Partners hedge fund managers were struggling to react quickly to volatile asset fluctuations due to high UI rendering lag (over 2.4s LCP) and visual clutter. Legacy charting tools caused browser memory crashes when plotting high-frequency data streams.',
    solution: 'We engineered a high-performance quantitative financial analysis dashboard using React and Vite. We optimized rendering performance using lightweight Canvas-based Chart.js structures and managed web socket data streams through isolated custom hooks to minimize parent re-renders. The UI was designed with an elite glassmorphic dark mode to maximize data readability under stress.',
    results: 'The dashboard handles high-throughput updates of over 10,000 data ticks per second with an average page rendering latency of under 12ms, enabling analysts to achieve an 84.2% forecasting accuracy and execute instantaneous quantitative trades.',
    features: [
      'Sub-second real-time telemetry updates using secure web socket client adapters.',
      'High-performance Canvas charting system using optimized Chart.js structures.',
      'Deep-learning forecasting API integration built with Python and PyTorch.',
      'Containerized deployment pipelines optimized using Docker and AWS ECS.',
      'Glassmorphic dark mode workspace minimizing visual cognitive fatigue under stress.'
    ],
    timeline: '10 Weeks'
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
    author: 'Kshitij, Founder & CEO',
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
          
### Negative Space as a Luxury Asset
Just as luxury boutiques leave vast floor spaces empty, premium digital design uses generous padding (typically 120px to 160px between major sections). This gives the viewer's eyes breathing room, emphasizing only the most critical headlines.
          
### Typographic Authority
Luxury brands avoid standard sans-serif system fonts. By utilizing editorial display fonts (like Outfit, Playfair, or custom geometrics) paired with robust line-heights (1.5 to 1.6 for copy, 1.1 for hero headers), the site exudes structural confidence.
          
### Subtle Motion Choreography
Cheap sites use jarring entrances and bounce animations. Premium design utilizes high-damping spring motions. A button should not pop; it should smoothly expand and glow slightly, responding to the mouse like Liquid Glass.
          
By implementing custom hover glows, magnetic buttons, and glassmorphic blur overlays, you establish a sense of tactility and high-end craft.`,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    date: 'June 28, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '4 min read',
    tags: ['Design', 'UX Research', 'Animations']
  },
  {
    id: 'blog-3',
    title: 'Website Development Cost in India: 2026 Detailed Breakdown',
    category: 'Web Development',
    summary: 'An honest and detailed review of web development pricing frameworks in India, detailing domain/hosting, frontend structures, and backend complexities.',
    content: `Calculating the precise cost of engineering a modern web application in India requires analyzing the technical requirements, design complexity, database infrastructure, and hosting architectures. In 2026, website development has evolved beyond simple page construction to deploying optimized cloud architectures.

### The Pricing Spectrum of Web Engineering
- **Basic Custom Landing Pages:** For simple marketing portals utilizing Vite, HTML, and CSS, prices range between ₹25,000 to ₹50,000. These are lightweight web portfolios optimized for maximum page speed.
- **Mid-Tier Dynamic Web Apps:** Applications with secure user authentication (JWT), dynamic databases (PostgreSQL/MongoDB), and integrated payment gateways range from ₹80,000 to ₹2,50,000.
- **Enterprise Platforms & Custom SaaS:** Complex software involving quant web sockets, microservices, vector search setups, and admin dashboards generally cost ₹3,00,000 and above.

### Infrastructure & Operational Running Costs
Building a secure digital presence requires recurring support fees:
1. **Domain Acquisition:** ₹800 - ₹5,000 annually.
2. **Cloud Hosting & Server Nodes:** ₹2,000 - ₹15,000 monthly (AWS, Vercel, Google Cloud, or Heroku instances).
3. **Database Caching & Telemetry Logs:** ₹1,500 - ₹6,000 monthly (Redis, Pinecone, Sentry, or Datadog).

### Technical Factors Influencing Costs
- **Database & Data Schema Design:** Developing decoupled APIs and custom relational schemas raises engineering time.
- **UX Motion Design:** Custom hover glows, magnetic buttons, and high-damping UI animations require detailed development, increasing costs but boosting customer trust.
- **Lighthouse and Speed Optimization:** Guaranteeing a 95+ performance score requires deep optimization, ensuring long-term organic traffic growth.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'July 05, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '8 min read',
    tags: ['Web Dev', 'Pricing', 'Business Guide', 'India Cost']
  },
  {
    id: 'blog-4',
    title: 'React vs Next.js: Which Frontend Framework Wins SEO in 2026?',
    category: 'Engineering',
    summary: 'A direct technical comparison explaining why Server-Side Rendered (SSR) Next.js apps yield a massive organic search ranking advantage over CSR React.',
    content: `Choosing the right framework for your web application decides your long-term organic rank visibility. For years, developers built Single Page Applications (SPAs) using pure React client-side rendering (CSR). In 2026, Next.js has emerged as the standard for enterprise-grade search performance.

### Client-Side Rendering (CSR) React Bottlenecks
A standard React app (built with Vite or Create React App) compiles your code into a single, massive JavaScript bundle. When search engine robots (like Googlebot) crawl your site:
1. They load a bare HTML shell containing only a script tag (e.g. <div id="root"></div>).
2. They must execute the JavaScript bundle to render the actual layout and text content.
3. Because JS execution requires high memory and CPU time, crawlers queue the rendering phase. This slows down the indexing of new pages and keywords.

### Server-Side Rendering (SSR) in Next.js
Next.js solves this bottleneck by compiling page contents on the edge server before returning the response.
- **Instant Crawlability:** When Googlebot requests a page, Next.js instantly delivers a pre-rendered HTML file containing the full text, header tags, and structural links. Search engines index your content in seconds.
- **Core Web Vitals Boost:** Pre-rendered HTML yields faster First Contentful Paint (FCP) and lower Largest Contentful Paint (LCP) times, raising your Google ranking score.
- **Automatic Code Splitting:** Next.js divides JS assets into small page-specific chunks, avoiding page load drag.

### When to Use Client-Side React?
Pure React remains ideal for gated administrator dashboards, quantitative internal tools, and software interfaces where content is private and search engine indexing is not required. For public landing pages, SaaS products, and e-commerce stores, Next.js is essential for SEO growth.`,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    date: 'July 02, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '6 min read',
    tags: ['React', 'Next.js', 'SEO', 'Frameworks']
  },
  {
    id: 'blog-5',
    title: 'AI for Small Businesses: Practical Automation and RAG Guide',
    category: 'AI & Automation',
    summary: 'Learn how B2B companies and small businesses can leverage Retrieval-Augmented Generation (RAG) and semantic routing to automate workflows.',
    content: `Integrating Artificial Intelligence is no longer exclusive to large technology conglomerates. Small businesses and emerging startups are actively utilizing Large Language Models (LLMs) and vector databases to automate customer operations and database queries.

### Beyond Chatbots: What is RAG?
Standard AI tools often hallucinate or output generic responses because they lack context. **Retrieval-Augmented Generation (RAG)** bridges this gap by connecting an LLM to your private company data:
1. Your company files, FAQs, and product catalogs are converted into mathematical vectors and stored in a vector database (like pgvector or Pinecone).
2. When a user queries the system, it searches your vector database for the exact matching paragraphs.
3. The system passes these paragraphs to the LLM as context, ensuring that the AI draft is accurate and grounded in your data.

### Practical Automation Case Studies
- **Customer Support Automation:** Automate 80% of support tickets by answering customer questions instantly using data from your company guides.
- **Database Query Automation:** Allow managers to query local inventory database schemas using simple English statements, which the AI translates into SQL code.
- **Document Analysis:** Automate review processes by running contracts and invoices through extraction models to flag discrepancies in seconds.

### Cost Containment Strategies
To prevent API costs from spiraling, small businesses should adopt:
- **Semantic Caching:** Cache repeat intents locally using Redis to bypass LLM calls.
- **Model Routing:** Route simple verification tasks to open-source models (like Llama 3) and save complex reasoning tasks for premium APIs (like Claude 3.5 Sonnet).`,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    date: 'June 29, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['AI', 'Automation', 'Small Business', 'RAG']
  },
  {
    id: 'blog-6',
    title: 'E-commerce Website Guide: Engineering for Sub-Second Checkout',
    category: 'E-commerce',
    summary: 'A step-by-step technical guide to building secure, fast, and high-converting online storefronts optimized for Core Web Vitals.',
    content: `In online retail, every 100ms of latency degrades conversion rates by 7%. Engineering an e-commerce platform that matches luxury brand standards requires balancing heavy product imagery with lightweight client delivery.

### 1. Optimize Image Delivery Pipelines
Product listings rely on high-fidelity imagery. To prevent images from blocking page renders:
- Convert files to next-generation formats like WebP or AVIF.
- Implement explicit width and height ratios on image tags to avoid layout shifts.
- Apply lazy loading (loading="lazy") so off-screen products are only fetched when scrolled into view.

### 2. Decouple Cart State Management
Template systems reload pages or trigger heavy API queries when a user edits their cart. We optimize this by using client-side state managers (like Redux or Zustand) to update cart states instantly. Server syncing runs asynchronously in the background.

### 3. Edge CDN Deployments & API Caching
Deploy your catalog database endpoints on global edge networks (like AWS CloudFront or Vercel Edge). Cache database lookups for product descriptions, pricing, and reviews. This ensures that users receive cached product pages in under 100ms.

### 4. Secure Payment Integration
Integrate secure, tokenized payment checkouts (Stripe, Apple Pay, Google Pay) directly into the UI. Avoid redirecting users to external payment pages, as this increases checkout abandonment. Keep the checkout process clean, single-page, and secure.`,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    date: 'June 24, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '7 min read',
    tags: ['E-commerce', 'Web Dev', 'Checkout Speed', 'Stripe']
  },
  {
    id: 'blog-7',
    title: 'Why Every Startup Needs a High-Performance Web Portal',
    category: 'Startup Growth',
    summary: 'Explore why a custom digital workspace is not just a digital business card, but a high-converting automated lead capture asset.',
    content: `Many early-stage startup founders postpone investing in a custom website, relying instead on generic landing templates or social media profiles. In a digital-first marketplace, your website is your most critical asset for establishing brand authority and securing capital.

### 1. Building Instant Aesthetic Authority
When high-ticket clients or venture capitalists visit your portal, they make an assessment of your credibility in less than 50 milliseconds. A generic, slow website suggests a lack of refinement. A custom-engineered portal using editorial typography and smooth micro-animations signals quality.

### 2. High-Performance Lead Capture
Rather than using basic contact forms that get lost in inbox spam, custom web applications integrate secure database capture pipelines:
- Dynamic input validation fields prevent spam entries.
- Automated API integrations route leads to your CRM (like Salesforce or HubSpot) instantly.
- IP geolocation tracking records context, preparing your sales team.

### 3. Scaling Custom Workflows
As a startup grows, operational needs shift from simple information pages to customer dashboards, analytics portals, and subscription gates. A custom web application built with React, Vite, and Node.js can scale dynamically to add these features without requiring a complete platform rebuild.`,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    date: 'June 18, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['Startups', 'Lead Gen', 'Growth', 'Custom Web']
  },
  {
    id: 'raipur-web-dev',
    title: 'Best Website Development Company in Raipur, Chhattisgarh – Grow Your Business Online',
    category: 'Web Development',
    summary: 'Looking for the best website development company in Raipur, Chhattisgarh? Learn why a professional website is critical for local business growth and lead generation.',
    content: `In today's competitive market, every business needs a strong online presence. Whether you own a retail shop, restaurant, coaching institute, hospital, real estate business, manufacturing company, or startup in Raipur, Chhattisgarh, a professional website helps you attract more customers and grow faster.

At CoreBuild Solutions, we create modern, SEO-friendly, and high-performance websites designed to generate leads and increase business growth.

### Why Businesses in Raipur Need a Professional Website
Most customers search online before contacting a business. If your business isn't visible on Google, you're losing potential customers every day. A professional website helps you build trust, get more inquiries, showcase your products, generate online leads, and increase sales. Your website works for your business 24/7, even when your office is closed.

### Website Development Services We Offer
CoreBuild Solutions provides complete digital solutions for businesses in Raipur and across Chhattisgarh:
- Business Website Development
- Custom Web Application Development
- E-commerce Website Development
- Mobile App Development
- AI-Powered Solutions
- UI/UX Design
- Website Maintenance
- SEO Optimization

### Industries We Serve
We build high-performance websites for a wide range of industries: Retail Businesses, Restaurants & Cafes, Hospitals & Clinics, Schools & Coaching Institutes, Real Estate Companies, Manufacturing Businesses, Construction Companies, Startups, Finance & Consultants, and other Service-Based Businesses.

### Why Choose CoreBuild Solutions?
Businesses trust us because we deliver modern & premium design, fast loading speeds, mobile responsive layouts, SEO-friendly development, secure & scalable solutions, and ongoing technical support. Every website is designed to help local businesses establish a strong online presence and reach more customers.

### Ready to Grow Your Business?
If you're looking for a trusted Website Development Company in Raipur, CoreBuild Solutions is here to help. We build websites that don't just look great—they help businesses generate leads, improve customer trust, and grow online. Let's build your next digital success together.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'July 10, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['raipur', 'chhattisgarh', 'web development', 'local seo'],
    published: true,
    slug: 'website-development-company-raipur-chhattisgarh',
    metaTitle: 'Best Website Development Company in Raipur | CoreBuild Solutions',
    metaDescription: 'Looking for the best website development company in Raipur, Chhattisgarh? CoreBuild Solutions builds modern websites, e-commerce stores, mobile apps, and custom software for businesses.',
    keywords: 'Website Development Company Raipur, Website Developer Raipur, Web Development Company Chhattisgarh, Website Design Company Raipur, Business Website Development Raipur, Website Development Services Raipur, Custom Website Development Chhattisgarh, SEO-Friendly Website Development, Mobile App Development Raipur, Software Development Company Raipur'
  },
  {
    id: 'grow-business-2026',
    title: 'How a Professional Website & Mobile App Can Grow Your Business in 2026',
    category: 'Business Growth',
    summary: 'In 2026, a strong digital presence is essential. Discover how custom web applications and mobile apps act as 24/7 sales engines to accelerate your brand value.',
    content: `In today's digital world, customers search online before making any purchase. Whether you run a startup, retail store, restaurant, clinic, coaching institute, or enterprise, having a professional website and mobile app is no longer optional—it's essential. A strong digital presence helps businesses attract more customers, improve credibility, and generate sales 24/7.

### Why Every Business Needs a Website
A website acts as your digital office. Unlike a physical store, it works all day, every day, allowing potential customers to learn about your services, contact your team, or place orders anytime. With a professionally designed website, businesses can build customer trust, showcase products, generate qualified leads, accept online inquiries, and improve Google visibility.

### How a Mobile App Helps Your Business Grow
Mobile applications create a direct connection between businesses and customers. They offer faster customer engagement, push notifications for offers, easy ordering and booking, better customer retention, improved user experience, and higher customer loyalty. Apps also make repeat purchases much easier compared to traditional websites.

### Reach Customers Across India
A website helps businesses attract customers from different cities without opening multiple physical branches. Whether your business is based in Raipur, Chhattisgarh, or anywhere in India, a professional website enables you to reach a much larger audience through Google Search and digital marketing.

### Features Every Business Website Should Have
To yield maximum return on investment, every modern website must implement:
- Responsive & Mobile Friendly Design
- Fast Loading Speed
- SEO Optimization
- Contact Forms & WhatsApp Integration
- Portfolio & Blog Sections
- SSL Security & Google Analytics Integration

### Why Choose CoreBuild Solutions?
At CoreBuild Solutions, we build high-performance digital solutions designed to help businesses grow. Our expertise includes custom website development, mobile app development, AI solutions, e-commerce development, UI/UX design, custom software development, and SEO-friendly websites. We focus on creating scalable, secure, and user-friendly solutions tailored to your business goals.`,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    date: 'July 10, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '4 min read',
    tags: ['website development', 'mobile apps', 'business growth', 'digital transformation'],
    published: true,
    slug: 'how-website-mobile-app-grow-business-2026',
    metaTitle: 'How a Web & Mobile App Can Grow Your Business in 2026 | CoreBuild',
    metaDescription: 'Explore how professional websites and mobile applications drive customer engagement, build brand trust, and accelerate business growth in 2026.',
    keywords: 'Website Development, Mobile App Development, Business Website, Custom Website Development, Website Development Company, Mobile App Development Company, Business Growth, Digital Transformation, Software Development Company, Web Development India'
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
    ],
    whatIsIt: 'Custom Web Application Development is the process of designing, engineering, and deploying bespoke web-based software tailored specifically to your unique business workflows, database schemas, and user experience requirements. Unlike off-the-shelf templates or generic WordPress setups, custom web applications are built from the ground up to ensure elite speed, security, and scalability. At CoreBuild Solutions, we construct next-generation web architectures utilizing the modern React, Vite, and Node.js stack. This ensures that your application compiles in milliseconds and loads in under a second. Our development paradigm focuses on modular codebase structure, strict typed safety with TypeScript, and component decoupling. We handle complex integrations including real-time quantitative web sockets, distributed relational databases, custom CMS interfaces, payment processing gateways, and secure JWT session controls. By bypassing heavy frameworks and page builders, we eliminate unnecessary JavaScript execution and render clean HTML structures that search engines can easily index. Every application is optimized for Core Web Vitals to guarantee the highest retention and organic rankings.',
    whoIsItFor: 'Our custom web application development services are engineered for high-ticket businesses, mid-market enterprises, SaaS startups, and digital brands that have outgrown standard website builders. If your business operations require custom roles and permissions, complex database queries, high-throughput user management, real-time data sync, or integrations with legacy ERP systems, template websites will fail to scale. We partner with product managers, startup founders, and corporate executives who refuse to compromise on speed, brand prestige, and technical infrastructure. It is ideal for companies wishing to establish an authoritative digital presence, launch custom customer portals, build secure e-commerce systems with complex cart states, or deploy quantitative dashboards handling high volumes of telemetry data. If you are looking to build a digital asset that acts as a core automated engine for your business growth, this service is designed specifically for you.',
    processDescription: 'We operate under a rigorous 4-phase Agile Software Development Life Cycle (SDLC) that eliminates roadblocks and ensures predictable delivery timelines. Phase 1 is Discovery & Blueprinting: we audit your existing technical setup, map database models, draft functional system blueprints, and verify performance obstacles. Phase 2 is Luxury UI/UX Design: we create high-fidelity interactive wireframes in Figma using Outfit fonts, generous white spacing, and damping spring motion designs. We design for accessibility and mobile responsiveness from day one. Phase 3 is Robust Engineering: our developers build the application using typed TypeScript code, modularizing components, and writing automated unit testing suites. We structure database schemas using Prisma and PostgreSQL to ensure data integrity. Phase 4 is Edge Deployment & Launch: we deploy the application to global Edge CDN networks (like Vercel or AWS CloudFront), implement aggressive caching headers, compress next-generation images (AVIF/WebP), and run Google Lighthouse audits to secure a 95+ performance rating. Post-launch, we provide active hypercare support to monitor telemetry logs.',
    technologiesDescription: 'We build our custom web applications on a proven, high-performance tech stack optimized for sub-second rendering. For the frontend, we use React and Vite, utilizing Tailwind CSS for styling and Framer Motion for premium micro-animations. For the backend, we run Node.js with Express or FastAPI in Python, managing data via Prisma ORM and PostgreSQL databases. We implement Redis caching layers in front of databases to maintain API response times under 50ms. All assets are compiled, minified, and deployed to Vercel or AWS edge endpoints. We write code strictly in TypeScript to eliminate runtime type errors and ensure that the software is modular, scalable, and easy to maintain by internal teams.',
    serviceFaqs: [
      { q: 'How long does it take to build a custom web application?', a: 'A standard custom web application project takes between 6 to 12 weeks to complete, depending on database complexity, third-party API integrations, and the overall scope. We establish clear milestone deliverables at the end of every two-week sprint.' },
      { q: 'Why is custom web development better than WordPress or Webflow?', a: 'Custom web development offers absolute control over performance, codebase architecture, and security. It avoids heavy plugin dependencies, security vulnerabilities, and bloated code, which slows down page loading. Google rewards lightweight, fast custom codebases with higher organic search rankings.' },
      { q: 'Do you provide a custom Content Management System (CMS)?', a: 'Yes. We deliver custom administration dashboards (CMS) built specifically for your database schemas, allowing you to easily perform CRUD operations (add projects, update blogs, manage leads, configure SEO tags) without touching any code.' },
      { q: 'How do you optimize the website for Core Web Vitals and Page Speed?', a: 'We optimize Page Speed by lazy-loading all off-screen assets, using next-generation image formats (WebP/AVIF), minifying CSS and JS files, using server-side rendering (SSR) where applicable, and caching database queries using Redis. Our target is always under 1.2s Largest Contentful Paint (LCP).' },
      { q: 'Can you integrate custom payment gateways and APIs?', a: 'Absolutely. We regularly integrate secure payment platforms (Stripe, Razorpay, Paypal, Apple/Google Pay), CRM portals (Salesforce, HubSpot), analytics tools, and custom quantitative REST/GraphQL APIs.' }
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
    ],
    whatIsIt: 'Mobile App Development is the design and engineering of custom smartphone applications for iOS and Android platforms, built to deliver native performance, tactile responsiveness, and offline operational support. At CoreBuild Solutions, we specialize in high-end cross-platform development using React Native and Flutter, combined with custom native bridges written in Swift and Kotlin. This hybrid approach allows us to deliver the performance, security, and hardware access of native apps while maintaining a unified, clean codebase. We implement advanced mobile capabilities including biometric login (FaceID/TouchID), local SQLite/WatermelonDB storage for offline caching, push notifications orchestration, background location services, and secure mobile payment gateways. We structure the app interfaces according to strict design guidelines, utilizing hardware acceleration to keep animations running at a fluid 120 FPS. Every mobile application we build is integrated with secure backend API frameworks, ensuring safe data transit and low battery consumption.',
    whoIsItFor: 'Our mobile app development services are tailored for businesses that need to establish a dedicated space on their customers devices. If your service requires offline access, push notification marketing, location tracking, camera access, or biometric security, a web app is not enough. We build apps for luxury concierge networks, high-ticket retail brands, on-demand services, IoT hardware companies, and SaaS platforms looking to expand their ecosystem. This service is ideal for organizations that want to increase customer retention, streamline booking workflows, or monetize services directly through App Store subscriptions and secure payment checkouts. We work with companies that want their mobile application to feel premium, responsive, and secure, matching the high standards of Apple App Store and Google Play Store users.',
    processDescription: 'Our mobile engineering process is structured into 4 phases to ensure a smooth launch. Phase 1 is Mobile UX Strategy: we define navigation structures, gesture paradigms, and system integrations based on user personas. Phase 2 is Apple & Google UI Design: we design layouts adhering strictly to iOS Human Interface Guidelines and Android Material Design variables. Phase 3 is Core Coding: we write typed TypeScript or Dart code, setting up local offline databases, writing custom native bridges for hardware integration, and connecting with backend REST/GraphQL APIs. Phase 4 is Testing & Store Submission: we run thorough beta testing via Apple TestFlight and Google Play Console, fix edge case errors, optimize package sizes, and manage the complete store compliance review process to ensure successful publication.',
    technologiesDescription: 'We leverage React Native, Flutter, TypeScript, Swift (iOS), Kotlin (Android), Redux, SQLite, Firebase, and Stripe. We ensure the codebase is structured for dynamic updates and low latency, connecting to scalable Node.js or Python backend servers hosted on secure cloud infrastructure.',
    serviceFaqs: [
      { q: 'Do you build native or hybrid cross-platform apps?', a: 'We build cross-platform apps using React Native and Flutter, supplemented with custom Swift and Kotlin native code where hardware integration is required. This gives you the speed of a single codebase with the performance of native code.' },
      { q: 'How long does the App Store review process take?', a: 'Typically, Apple App Store reviews take 24 to 48 hours, and Google Play Store reviews take 1 to 3 days. We handle the entire submission, review compliance, and setup process for you.' },
      { q: 'Can the app operate without internet connectivity?', a: 'Yes. We build offline-first database synchronization systems using SQLite or WatermelonDB. Data is saved locally on the device and automatically synced with your cloud database when connection is restored.' },
      { q: 'How do you handle mobile push notifications?', a: 'We integrate Google Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) to trigger real-time, customizable push notifications based on user activity.' },
      { q: 'Do you provide app updates and maintenance post-launch?', a: 'Yes. We offer monthly support plans to handle iOS/Android operating system upgrades, security patches, library updates, and content additions.' }
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
    ],
    whatIsIt: 'AI & Machine Learning Systems involve the design, training, and integration of custom artificial intelligence capabilities directly into your software platform. Instead of generic pre-built bots, we design cognitive engines tailored to your specific database structures, business logic, and customer interactions. At CoreBuild Solutions, we develop vector-backed Retrieval-Augmented Generation (RAG) search tools, fine-tune open-source Large Language Models (LLMs) like Llama, build semantic intent routing systems, and engineer quantitative predictive algorithms. These custom AI implementations act as autonomous operators that interpret natural language queries, navigate database schemas, extract contextual files, and compose customized outputs in sub-seconds. To keep API latency and operational costs low, we build caching layers (using Redis) in front of vector databases (like Pinecone or pgvector). All systems are built with strict safety filters and hallucination guardrails to ensure production-level reliability.',
    whoIsItFor: 'Our AI and Machine Learning services are designed for forward-thinking enterprises, B2B software companies, financial funds, and service organizations looking to automate complex workflows. If your team spends hours manually sorting support tickets, querying databases, writing reports, or analyzing trends, custom machine learning pipelines can automate these tasks. We work with companies that possess large repositories of proprietary documentation, chat histories, or telemetry data, and want to turn this data into an active, conversational knowledge asset. It is ideal for startups building AI-first features, finance companies automating risk assessment, and support teams aiming to resolve 80% of customer questions instantly with accurate, secure answers.',
    processDescription: 'Our AI engineering process follows a structured path. Phase 1 is Data & Security Audit: we evaluate your data repositories, define access controls, and confirm privacy constraints. Phase 2 is Model & Vector Setup: we select the optimal LLM, configure indexing pipelines, and set up vector search databases. Phase 3 is Interface Development: we build custom administrative dashboards or user chat interfaces to interact with model outputs. Phase 4 is Guardrails & Caching: we implement cost containment filters, prompt instruction fine-tuning, and safety constraints to prevent data leaks and hallucinations.',
    technologiesDescription: 'We utilize OpenAI GPT-4o, Claude 3.5 Sonnet, Llama 3, Pinecone, pgvector (PostgreSQL), LangChain, LlamaIndex, Python, FastAPI, Docker, and Redis. We optimize system prompts and embed caching to ensure sub-100ms API response times.',
    serviceFaqs: [
      { q: 'How do you keep OpenAI/Claude API costs from spiraling?', a: 'We implement aggressive semantic caching (using Redis in front of vector lookups) to resolve repeat intent requests locally, bypassing LLM API calls. We also use smaller, fine-tuned open-source models (like Llama 3) for deterministic micro-tasks.' },
      { q: 'Is our proprietary business data safe and private?', a: 'Yes. We build secure cloud architectures where your data is stored in private vector databases. We utilize private LLM endpoints (via Azure or AWS Bedrock) which guarantee that your data is never used to train public models.' },
      { q: 'What is RAG (Retrieval-Augmented Generation)?', a: 'RAG is a technique where we connect an LLM to a private vector database containing your company files. When a user asks a question, the system searches your files for the answer, extracts the exact paragraph, and passes it to the LLM to format a correct response. This eliminates hallucinations.' },
      { q: 'Can we fine-tune a model on our company voice?', a: 'Absolutely. We organize your historic data, clean and format training datasets, and run fine-tuning jobs on models to adapt their tone, vocabulary, and response structures to match your brand.' },
      { q: 'How do you measure and ensure AI accuracy?', a: 'We set up automated evaluation test sets that run sample queries against the system, check semantic similarity scores, verify source citations, and implement human-in-the-loop audit logs for continuous reinforcement learning.' }
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
    title: 'Website Development Company in Raipur, Chhattisgarh | CoreBuild Solutions',
    description: 'Looking for the best website development company in Raipur, Chhattisgarh? CoreBuild Solutions builds premium, SEO-friendly websites, custom web applications, e-commerce storefronts, and mobile apps for businesses across India.',
    keywords: 'website development company raipur, website design company raipur, web development company chhattisgarh, website developer raipur, software development company raipur, mobile app development raipur, web design raipur, custom website development chhattisgarh, digital marketing raipur, best software agency india'
  },
  {
    page: 'about',
    title: 'Best Website Developers in Raipur - About CoreBuild Solutions',
    description: 'About CoreBuild Solutions - The leading web development agency in Raipur, Chhattisgarh. Our team of certified software developers, UI/UX designers, and SEO specialists build high-performance systems for startups and enterprises in India.',
    keywords: 'web development agency raipur, website design team raipur, software developers chhattisgarh, best tech company raipur, corebuild solutions team, local website developers raipur, software agency chhattisgarh'
  },
  {
    page: 'services',
    title: 'Website Development Services in Raipur, Chhattisgarh | CoreBuild',
    description: 'Premium digital services by CoreBuild Solutions in Raipur. We specialize in custom web application development, Android/iOS mobile apps, secure e-commerce portals, UI/UX design, and SEO optimization in Chhattisgarh, India.',
    keywords: 'website development services raipur, e-commerce website development raipur, mobile app development chhattisgarh, software engineering raipur, custom web development india, local seo services raipur'
  },
  {
    page: 'portfolio',
    title: 'Our Web Design & Software Projects | CoreBuild Raipur',
    description: 'Explore our work portfolio. CoreBuild Solutions showcases custom website designs, mobile apps, SaaS applications, and e-commerce stores successfully delivered for businesses in Raipur, Chhattisgarh, and across India.',
    keywords: 'web design portfolio raipur, website design examples chhattisgarh, custom software showcase raipur, mobile apps portfolio india, e-commerce developer portfolio chhattisgarh'
  },
  {
    page: 'blog',
    title: 'Web Development & Local SEO Insights Blog | CoreBuild Solutions',
    description: 'Read local SEO growth hacks, website optimization tips, and custom software development guides from the best website developer company in Raipur, Chhattisgarh, India.',
    keywords: 'web design blog raipur, software development guides chhattisgarh, local seo tips india, e-commerce growth tips raipur, tech insights chhattisgarh'
  },
  {
    page: 'contact',
    title: 'Hire Best Website Development Company in Raipur | Contact Us',
    description: 'Get a free quote today! Contact CoreBuild Solutions, the top website design & web development company in Raipur, Chhattisgarh, India. Let\'s discuss your next digital project.',
    keywords: 'contact website developers raipur, hire web development company chhattisgarh, web design quote raipur, hire mobile app developer raipur, best tech support raipur'
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
