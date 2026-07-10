import { Project, Blog, Testimonial, Service, Career, TeamMember, SeoSettings, SystemSettings, FaqItem, HomeSection } from './types';

export const fallbackSettings: SystemSettings = {
  agencyName: 'CoreBuild Solutions',
  contactEmail: 'corebuildsolutionsin@gmail.com',
  contactPhone: '+91 9244007322',
  whatsappNumber: '+919244007322',
  address: 'Raipur, Sector 14 B, Chhattisgarh, India - 492001',
  socialLinks: {
    twitter: 'https://twitter.com',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
    instagram: 'https://www.instagram.com/corebuildsolutions.in/'
  }
};

export const fallbackProjects: Project[] = [];

export const fallbackBlogs: Blog[] = [
  {
    id: 'blog-1',
    title: 'The Future of AI in Enterprise Software Architecture',
    category: 'AI & Automation',
    summary: 'A strategic exploration of how LLM agents and semantic routers are shifting backend designs from deterministic APIs to dynamic intent engines.',
    content: `The paradigm of software engineering is undergoing its most radical transformation since the advent of cloud computing. Historically, enterprise applications relied on rigid, deterministic logic flow charts. Database structures were locked, APIs returned static payloads, and user flows were hardcoded step-by-step.

With the arrival of production-grade Large Language Models (LLMs) and vector databases, we are moving towards Intent-Driven Architectures. In these systems, user interface actions are interpreted as natural language payloads, processed by orchestrating agents that select tools, fetch semantic contexts, and compose custom JSON payloads on the fly. To understand this in depth, see our [AI & Machine Learning](/services/ai-machine-learning) service layer.
          
### The Shift to Semantic Routing
Instead of calling specific REST endpoints (e.g. GET /api/v1/users/profile), frontends now communicate with semantic gateways. These gateways evaluate the request intent and coordinate with dynamic microservices. This allows software to adapt immediately to changing user desires without deploying new code.
          
### High-Performance AI Operations
To maintain the sub-100ms response times expected of modern premium web apps, companies must adopt aggressive caching and caching-first vector lookups (using Redis in front of Pinecone or pgvector). 
          
At CoreBuild Solutions, we specialize in building these hybrid architectures, combining the reliability of PostgreSQL with the cognitive versatility of OpenAI and Claude integrations. See how we build these on our [Custom Web Applications](/services/custom-web-applications) page.

### Frequently Asked Questions
1. **What is an intent-driven architecture?**
It is a software system where inputs are interpreted as natural language goals rather than hardcoded actions, using AI agents to select tools and compose responses dynamically.
2. **How does semantic routing differ from standard routing?**
Standard routing matches paths directly (e.g., /users). Semantic routing evaluates the meaning of the request to route it to the best service.
3. **What is the latency impact of LLM calls?**
LLM calls can add 1-2 seconds of latency. We optimize this using semantic caching, model routing, and asynchronous background tasks.`,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    date: 'July 01, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '6 min read',
    tags: ['AI', 'System Design', 'Next.js', 'Vector DB'],
    slug: 'future-ai-enterprise-software-architecture',
    metaTitle: 'Future of Enterprise AI & Software Architecture | CoreBuild',
    metaDescription: 'An engineering exploration of how LLM agents and semantic routers are shifting backend designs to dynamic intent engines.',
    keywords: 'enterprise AI architecture, semantic routers, LLM agents, custom software development Raipur, AI in software'
  },
  {
    id: 'blog-2',
    title: 'Minimalist Interaction Design for Premium Luxury Brands',
    category: 'UI/UX Design',
    summary: 'Analyze why brands like Apple, Stripe, and Linear rely on high-fidelity whitespace, typography, and subtle micro-motions to increase trust.',
    content: `When high-ticket consumers visit your website, they make an aesthetic judgment in less than 50 milliseconds. Generic layouts, flashy animations, and dense walls of text instantly signal a lack of refinement, degrading brand equity.
          
To cultivate an elite digital brand presence, designers must align with three principles of luxury design, which we cover in detail on our [UI/UX Design](/services/ui-ux-design) page:
          
### Negative Space as a Luxury Asset
Just as luxury boutiques leave vast floor spaces empty, premium digital design uses generous padding (typically 120px to 160px between major sections). This gives the viewer's eyes breathing room, emphasizing only the most critical headlines.
          
### Typographic Authority
Luxury brands avoid standard sans-serif system fonts. By utilizing editorial display fonts (like Outfit, Playfair, or custom geometrics) paired with robust line-heights (1.5 to 1.6 for copy, 1.1 for hero headers), the site exudes structural confidence.
          
### Subtle Motion Choreography
Cheap sites use jarring entrances and bounce animations. Premium design utilizes high-damping spring motions. A button should not pop; it should smoothly expand and glow slightly, responding to the mouse like Liquid Glass.
          
By implementing custom hover glows, magnetic buttons, and glassmorphic blur overlays, you establish a sense of tactility and high-end craft.

### Frequently Asked Questions
1. **Why is whitespace important in premium design?**
Whitespace acts as a visual anchor, giving elements breathing room and signalling high value, authority, and confidence.
2. **What are high-damping spring motions?**
These are UI transitions modeled on real-world spring physics that smooth out transitions and make animations feel tactile and organic.
3. **Should luxury brands use custom web fonts?**
Yes, custom or premium typography scales convey unique identity and authority, setting a brand apart from competitors.`,
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
    date: 'June 28, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '4 min read',
    tags: ['Design', 'UX Research', 'Animations'],
    slug: 'minimalist-interaction-design-premium-brands',
    metaTitle: 'Minimalist UI/UX & Luxury Interaction Design | CoreBuild',
    metaDescription: 'Learn how luxury brands use typography, negative space, and high-damping micro-motions to establish brand authority and trust.',
    keywords: 'luxury UI/UX design, minimalist web design, Figma design Raipur, high-damping micro-motions, web designer Raipur'
  },
  {
    id: 'blog-3',
    title: 'Website Development Cost in India: 2026 Detailed Breakdown',
    category: 'Web Development',
    summary: 'An honest and detailed review of web development pricing frameworks in India, detailing domain/hosting, frontend structures, and backend complexities.',
    content: `Calculating the precise cost of engineering a modern web application in India requires analyzing the technical requirements, design complexity, database infrastructure, and hosting architectures. In 2026, website development has evolved beyond simple page construction to deploying optimized cloud architectures. Learn about our process on the [Custom Web Applications](/services/custom-web-applications) page.
 
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
- **Lighthouse and Speed Optimization:** Guaranteeing a 95+ performance score requires deep optimization, ensuring long-term organic traffic growth.

### Frequently Asked Questions
1. **Why is custom development more expensive than template sites?**
Custom sites are built from scratch without code bloat, providing 3x faster load times, custom database integrations, and unique brand assets.
2. **What are the hidden costs of running a web application?**
Hidden costs include cloud hosting (AWS/Vercel), database licensing, domain renewals, security updates, and maintenance support.
3. **How does page speed impact business revenue?**
Every 1-second delay in page load time reduces conversions by up to 7%. Fast websites lower ad CPC and boost organic rankings.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'July 05, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '8 min read',
    tags: ['Web Dev', 'Pricing', 'Business Guide', 'India Cost'],
    slug: 'website-development-cost-india-2026',
    metaTitle: 'Website Development Cost in India (2026 Guide) | CoreBuild',
    metaDescription: 'An honest breakdown of custom web development and database engineering pricing schemas for startups and enterprises in India.',
    keywords: 'website development cost India, custom website price Raipur, web developer cost, software development pricing'
  },
  {
    id: 'blog-4',
    title: 'React vs Next.js: Which Frontend Framework Wins SEO in 2026?',
    category: 'Engineering',
    summary: 'A direct technical comparison explaining why Server-Side Rendered (SSR) Next.js apps yield a massive organic search ranking advantage over CSR React.',
    content: `Choosing the right framework for your web application decides your long-term organic rank visibility. For years, developers built Single Page Applications (SPAs) using pure React client-side rendering (CSR). In 2026, Next.js has emerged as the standard for enterprise-grade search performance. To implement these frameworks on your next project, explore our [Custom Web Applications](/services/custom-web-applications) solutions.
 
### Client-Side Rendering (CSR) React Bottlenecks
A standard React app (built with Vite or Create React App) compiles your code into a single, massive JavaScript bundle. When search engine robots (like Googlebot) crawl your site:
1. They load a bare HTML shell containing only a script tag (e.g. <div id="root"></div>).
2. They must execute the JavaScript bundle to render the actual layout and text content.
3. Because JS execution requires high memory and CPU time, crawlers queue the rendering phase. This slows down the indexing of new pages and keywords.
 
### Server-Side Rendering (SSR) in Next.js
Next.js solves this bottleneck by compiling page contents on the edge server before returning the response.
- **Instant Crawlability:** When Googlebot requests a page, Next.js instantly delivers a pre-rendered HTML file containing the full text, header tags, and structural links. Search engines index your content in seconds.
- **Core Web Vitals Boost:** Pre-rendered HTML yields faster First Contentful Paint (FCP) and lower Largest Contentful Paint (LCP) times, raising your Google ranking score.
- **Automatic Code Splitting:** Next.js divides JS assets into small page-specific chunks, avoiding page load drag. Learn more about these setups on our [Search Engine Optimization](/services/seo-optimization) page.

### Frequently Asked Questions
1. **What is Server-Side Rendering?**
It is the process of generating the full HTML for a page on the server before sending it to the client, making it instantly crawlable.
2. **Can a standard React app rank on Google?**
Yes, but it is slower and less reliable. Googlebot crawls SSR pages much faster, indexing keywords instantly.
3. **Is Next.js good for internal dashboards?**
For gated admin panels, standard client-side React is often preferred as search crawlability is not needed.`,
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&w=800&q=80',
    date: 'July 02, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '6 min read',
    tags: ['React', 'Next.js', 'SEO', 'Frameworks'],
    slug: 'react-vs-nextjs-frontend-framework-seo',
    metaTitle: 'React vs Next.js: Ultimate Frontend SEO Guide | CoreBuild',
    metaDescription: 'Compare Client-Side Rendering in React with Server-Side Rendering in Next.js to optimize crawl speed and Core Web Vitals.',
    keywords: 'React vs Nextjs SEO, server side rendering React, Nextjs web developer Raipur, search indexation speed'
  },
  {
    id: 'blog-5',
    title: 'AI for Small Businesses: Practical Automation and RAG Guide',
    category: 'AI & Automation',
    summary: 'Learn how B2B companies and small businesses can leverage Retrieval-Augmented Generation (RAG) and semantic routing to automate workflows.',
    content: `Integrating Artificial Intelligence is no longer exclusive to large technology conglomerates. Small businesses and emerging startups are actively utilizing Large Language Models (LLMs) and vector databases to automate customer operations and database queries. Check our services on [AI & Machine Learning](/services/ai-machine-learning).
 
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
- **Model Routing:** Route simple verification tasks to open-source models (like Llama 3) and save complex reasoning tasks for premium APIs (like Claude 3.5 Sonnet).

### Frequently Asked Questions
1. **How much does it cost to implement RAG for a small business?**
Building a custom RAG chatbot runs on API consumption. Using semantic caching, running costs can be kept under ₹1,500 monthly.
2. **Do we need a dedicated data scientist?**
No. We build fully managed pipelines with clean admin panels where you can upload documents without coding.
3. **What databases are used for RAG?**
We use Pinecone, ChromaDB, or pgvector inside PostgreSQL to manage vector data.`,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    date: 'June 29, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['AI', 'Automation', 'Small Business', 'RAG'],
    slug: 'ai-small-business-automation-rag-guide',
    metaTitle: 'Small Business AI Automation & RAG Systems Guide | CoreBuild',
    metaDescription: 'Deploy custom Retrieval-Augmented Generation (RAG) pipelines and semantic caching tools to automate standard workflows.',
    keywords: 'RAG AI small business, AI automation Raipur, custom AI developer India, semantic caching Redis'
  },
  {
    id: 'blog-6',
    title: 'E-commerce Website Guide: Engineering for Sub-Second Checkout',
    category: 'E-commerce',
    summary: 'A step-by-step technical guide to building secure, fast, and high-converting online storefronts optimized for Core Web Vitals.',
    content: `In online retail, every 100ms of latency degrades conversion rates by 7%. Engineering an e-commerce platform that matches luxury brand standards requires balancing heavy product imagery with lightweight client delivery. Learn how on our [E-commerce Website Development](/services/e-commerce-development) page.
 
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
Integrate secure, tokenized payment checkouts (Stripe, Apple Pay, Google Pay) directly into the UI. Avoid redirecting users to external payment pages, as this increases checkout abandonment. Keep the checkout process clean, single-page, and secure.

### Frequently Asked Questions
1. **Why are headless e-commerce stores faster?**
Headless setups isolate frontend rendering from backend databases. Pages load instantly without querying database servers on every click.
2. **How does AVIF compare to WebP?**
AVIF files are up to 30% smaller than WebP at identical visual quality, reducing page load sizes.
3. **What is cart abandonment?**
It represents users who add products to their cart but leave without completing the purchase. A slow checkout is the main cause.`,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    date: 'June 24, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '7 min read',
    tags: ['E-commerce', 'Web Dev', 'Checkout Speed', 'Stripe'],
    slug: 'ecommerce-website-guide-sub-second-checkout',
    metaTitle: 'E-commerce Checkout Optimization & Speed Guide | CoreBuild',
    metaDescription: 'A technical overview of building decoupled checkout systems, edge databases caching, and AVIF image optimization.',
    keywords: 'e-commerce checkout speed, Shopify developer Raipur, headless e-commerce India, product catalog CDN'
  },
  {
    id: 'blog-7',
    title: 'Why Every Startup Needs a High-Performance Web Portal',
    category: 'Startup Growth',
    summary: 'Explore why a custom digital workspace is not just a digital business card, but a high-converting automated lead capture asset.',
    content: `Many early-stage startup founders postpone investing in a custom website, relying instead on generic landing templates or social media profiles. In a digital-first marketplace, your website is your most critical asset for establishing brand authority and securing capital. Check how we build startup sites on [Custom Web Applications](/services/custom-web-applications).
 
### 1. Building Instant Aesthetic Authority
When high-ticket clients or venture capitalists visit your portal, they make an assessment of your credibility in less than 50 milliseconds. A generic, slow website suggests a lack of refinement. A custom-engineered portal using editorial typography and smooth micro-animations signals quality.
 
### 2. High-Performance Lead Capture
Rather than using basic contact forms that get lost in inbox spam, custom web applications integrate secure database capture pipelines:
- Dynamic input validation fields prevent spam entries.
- Automated API integrations route leads to your CRM (like Salesforce or HubSpot) instantly.
- IP geolocation tracking records context, preparing your sales team.
 
### 3. Scaling Custom Workflows
As a startup grows, operational needs shift from simple information pages to customer dashboards, analytics portals, and subscription gates. A custom web application built with React, Vite, and Node.js can scale dynamically to add these features without requiring a complete platform rebuild.

### Frequently Asked Questions
1. **Is a landing page enough for a seed-stage startup?**
Yes, a high-converting landing page optimized for speed and lead capture is excellent for seed validation.
2. **What stack is best for scaling startups?**
We recommend React, Vite, TypeScript, and Node.js. It compiles into clean assets, scales easily, and has massive developer support.
3. **How does layout design impact funding pitches?**
Venture capitalists judge a startup\'s execution capabilities by the quality and attention to detail shown on their public website.`,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    date: 'June 18, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['Startups', 'Lead Gen', 'Growth', 'Custom Web'],
    slug: 'why-every-startup-needs-high-performance-web-portal',
    metaTitle: 'Why Startups Need Custom High-Performance Web Portals | CoreBuild',
    metaDescription: 'A high-converting web portal is a startup\'s most critical digital asset. Automate lead capture and scale workflows securely.',
    keywords: 'custom web portal startup, lead capture website Raipur, software engineering Raipur, custom React app'
  },
  {
    id: 'raipur-web-dev',
    title: 'Best Website Development Company in Raipur, Chhattisgarh – Grow Your Business Online',
    category: 'Web Development',
    summary: 'Looking for the best website development company in Raipur, Chhattisgarh? Learn why a professional website is critical for local business growth and lead generation.',
    content: `In today's competitive market, every business needs a strong online presence. Whether you own a retail shop, restaurant, coaching institute, hospital, real estate business, manufacturing company, or startup in Raipur, Chhattisgarh, a professional website helps you attract more customers and grow faster.
 
At CoreBuild Solutions, we create modern, SEO-friendly, and high-performance websites designed to generate leads and increase business growth. Explore our offerings at [Custom Web Applications](/services/custom-web-applications) or [Custom Software Development](/services/custom-enterprise-software).
 
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

### Frequently Asked Questions
1. **Why should I hire a local Web Development Company in Raipur?**
A local developer allows you to discuss database schema, landing page structures, and business goals in person, ensuring reliable support.
2. **How much does a website cost in Raipur?**
A custom Vite landing page starts from ₹25,000. Dynamic portals with database integration range between ₹80,000 to ₹2,50,000.
3. **Will my website rank for localized Raipur searches?**
Yes. We optimize sitemaps, title metas, alt tags, and sitemaps to ensure your site ranks for "website developer in Raipur".`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'July 10, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['raipur', 'chhattisgarh', 'web development', 'local seo'],
    published: true,
    slug: 'website-development-company-raipur-chhattisgarh',
    metaTitle: 'Best Website Development Company in Raipur | CoreBuild Solutions',
    metaDescription: 'Looking for the best website development company in Raipur, Chhattisgarh? CoreBuild Solutions builds modern websites, e-commerce stores, mobile apps, and custom software for businesses.',
    keywords: 'website development in raipur, Website Development Company Raipur, Website Developer Raipur, Web Development Company Chhattisgarh, Website Design Company Raipur, Business Website Development Raipur, Website Development Services Raipur, Custom Website Development Chhattisgarh, SEO-Friendly Website Development, Mobile App Development Raipur, Software Development Company Raipur'
  },
  {
    id: 'grow-business-2026',
    title: 'How a Professional Website & Mobile App Can Grow Your Business in 2026',
    category: 'Business Growth',
    summary: 'In 2026, a strong digital presence is essential. Discover how custom web applications and mobile apps act as 24/7 sales engines to accelerate your brand value.',
    content: `In today's digital world, customers search online before making any purchase. Whether you run a startup, retail store, restaurant, clinic, coaching institute, or enterprise, having a professional website and mobile app is no longer optional—it's essential. A strong digital presence helps businesses attract more customers, improve credibility, and generate sales 24/7. Explore our [Custom Web Applications](/services/custom-web-applications) and [Mobile App Development](/services/mobile-app-development) services.
 
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

### Frequently Asked Questions
1. **Does my business need both a website and a mobile app?**
Start with a website to capture search traffic. Add a mobile app once you establish a customer base to drive loyalty and repeat purchases.
2. **What features are essential for customer conversion?**
A clean CTA (Call-to-Action) button, click-to-chat WhatsApp link, quick contact forms, and client testimonials are essential.
3. **How does mobile friendliness impact Google rankings?**
Google utilizes mobile-first indexing, meaning mobile responsiveness is a primary ranking factor for search results.`,
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
  },
  {
    id: 'blog-8',
    title: 'Choosing the Right Database for Custom Software in 2026',
    category: 'Engineering',
    summary: 'A developer guide comparing PostgreSQL, MongoDB, and Redis to optimize data queries, schema structures, and API response speeds.',
    content: `Building high-performance software requires selecting a database engine tailored to your relational logic, data volumes, and query frequencies. Choosing the wrong database leads to query latency and schema bottlenecks as your code scales. Review our architectures at [Custom Software Development](/services/custom-enterprise-software).

### PostgreSQL: The Relational Gold Standard
For enterprise applications involving transactions, user roles, and complex table relationships, PostgreSQL is the premier choice. It offers strict schema controls, ACID compliance, and excellent support for JSON payloads. Utilizing pgvector, PostgreSQL also handles high-dimensional vector lookups.

### MongoDB: Flexible Document Schemas
For quantitative analytics panels, product catalogs, or logging systems where data schemas change constantly, MongoDB is the standard. It stores data in JSON-like documents, making database inserts fast and scaling simple.

### Redis: Sub-Millisecond Caching Layers
No database structure is complete without caching. We deploy Redis in front of PostgreSQL or MongoDB to cache query lookups. This bypasses backend processing, reducing database load and delivering API responses in under 12ms.

### Frequently Asked Questions
1. **When should I use PostgreSQL over MongoDB?**
Use PostgreSQL when your data has complex relationships (like users, orders, items) that require secure transactions and strict schema checks.
2. **What is Redis caching?**
Redis stores frequently requested database payloads in memory, allowing servers to return data in milliseconds without querying main databases.
3. **Is MongoDB good for e-commerce catalog search?**
Yes, MongoDB is excellent for catalog search as product variations and tags can be stored inside a single document structure.`,
    image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80',
    date: 'July 09, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '6 min read',
    tags: ['Database', 'Postgres', 'MongoDB', 'System Design'],
    published: true,
    slug: 'choosing-right-database-custom-software-2026',
    metaTitle: 'Choosing the Right Database in 2026: Postgres vs MongoDB | CoreBuild',
    metaDescription: 'A developer guide explaining when to select PostgreSQL, MongoDB, or Redis to optimize query speeds and API response times.',
    keywords: 'PostgreSQL vs MongoDB, database selection, custom software Raipur, Redis caching, IT consulting Chhattisgarh'
  },
  {
    id: 'blog-9',
    title: 'Top 7 UI/UX Secrets of High-Converting SaaS Dashboards',
    category: 'UI/UX Design',
    summary: 'Discover visual strategies like spacing ratios, nested navigation tabs, and spring animation curves that reduce user dropoffs.',
    content: `Designing a data-rich Software-as-a-Service (SaaS) dashboard requires balancing information density with visual breathing room. A cluttered interface causes cognitive fatigue, driving up onboarding dropoffs. Learn how we solve this at [UI/UX Design](/services/ui-ux-design).

### 1. Consistent Spacing Scales
We implement strict design token grids (e.g., 4px, 8px, 16px, 24px) for margins, padding, and gaps. This mathematical spacing scale ensures alignment across all panels, projecting visual stability.

### 2. Typographic Contrast Hierarchy
We pair a bold editorial display font (like Outfit) for statistics and section headers with a clean, neutral sans-serif (like Inter) for copier data, optimizing readability.

### 3. Progressive Disclosure
Instead of display all filters and data points at once, we utilize progressive disclosure. Secondary options are tucked inside dropdown drawers, showing users only the most critical information first.

### 4. Choreographed Spring Transitions
Jarring transitions degrade user trust. We design custom spring animations that feel tactile, responding instantly to cursor inputs and gestures.

### Frequently Asked Questions
1. **What is progressive disclosure in UX?**
It is a design technique where secondary information or filters are hidden until the user explicitly requests them, reducing visual clutter.
2. **How does typographic hierarchy impact data readability?**
Using distinct font weights and sizes guides the user\'s eyes to the most critical statistics first, reducing cognitive load.
3. **Should SaaS dashboards support dark modes?**
Yes, dark modes reduce eye strain for users who monitor dashboards for long hours, improving usability.`,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    date: 'July 08, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['UI/UX', 'Design Systems', 'SaaS', 'Figma'],
    published: true,
    slug: 'ui-ux-secrets-high-converting-saas-dashboards',
    metaTitle: '7 SaaS UI/UX Design Secrets for Higher Conversions | CoreBuild',
    metaDescription: 'Master progressive disclosure, typography scales, and spring animation curves to design data-rich dashboards that convert.',
    keywords: 'SaaS dashboard design, Figma UI/UX, progressive disclosure, web designer Raipur, interactive design tokens'
  },
  {
    id: 'blog-10',
    title: 'How to Optimize Your Google Business Profile for Local SEO',
    category: 'SEO',
    summary: 'A step-by-step optimization blueprint for Google Business Profile to dominate local searches in Raipur, Chhattisgarh.',
    content: `For service-based businesses, local search is the primary source of inbound customer calls. If a user searches for "Web Developer in Raipur" and your profile doesn't show in the Google Maps Local Pack, you are losing leads to competitors. Review our localized optimization services on [SEO Services](/services/seo-optimization).

### 1. Claim & Complete Your Profile
Ensure your Business Name, Address, and Phone Number (NAP) match your website exactly. Add your office hours, catalog list, and service categories.

### 2. Target Local Keywords
Naturally write local search terms (like "website development in Raipur", "software developers in Chhattisgarh") in your business description and services list.

### 3. Build Citations & Reviews
Google ranks profiles based on local authority. Register your business on local directories (like Justdial, Sulekha) and actively request client reviews.

### Frequently Asked Questions
1. **What is the Google Maps Local Pack?**
It is the box displaying the top 3 local business maps at the top of Google searches, capturing 60% of clicks.
2. **How do client reviews impact local SEO?**
Consistent, keyword-rich reviews confirm your business\'s legitimacy and location, boosting search ranks.
3. **Does NAP consistency impact rankings?**
Yes. Conflicting address or phone formats across directories confuse Googlebot, lowering trust scores.`,
    image: 'https://images.unsplash.com/photo-1579869847457-3f3a7e121679?auto=format&fit=crop&w=800&q=80',
    date: 'July 07, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['Local SEO', 'Raipur', 'Google Maps', 'Business Growth'],
    published: true,
    slug: 'optimize-google-business-profile-local-seo-raipur',
    metaTitle: 'Google Business Profile Local SEO Raipur Optimization | CoreBuild',
    metaDescription: 'A complete step-by-step guide to claim, complete, and optimize your Google Maps profile to rank in Raipur, Chhattisgarh.',
    keywords: 'Google Business Profile Raipur, local SEO Raipur, website developer Raipur, SEO services Chhattisgarh, business listings'
  },
  {
    id: 'blog-11',
    title: 'Mobile App Development Cost in Raipur: Startup Guide',
    category: 'Mobile Apps',
    summary: 'Understand the pricing frameworks, developer tiers, and API costs to build cross-platform applications in Chhattisgarh.',
    content: `Developing a custom mobile application is a major milestone for growing startups. When evaluating options in Raipur, understanding the factors that dictate coding costs helps you align budgets. We map out mobile sprints on our [Mobile App Development](/services/mobile-app-development) page.

### The App Architecture Factor
- **Basic Informational Apps:** Standard catalogs with database listings and push notifications range from ₹40,000 to ₹90,000.
- **Dynamic Portals (React Native):** Cross-platform apps with API syncing, payment checkouts, and user profiles range from ₹1,20,000 to ₹3,00,000.
- **Enterprise Software Platforms:** Highly secure platforms with background services, biometric lock rings, and microservices range from ₹4,00,000 and above.

### Core Cost Factors
1. **Platform Selection:** Cross-platform React Native codebases reduce coding hours by 40% compared to native Swift/Kotlin.
2. **Third-Party APIs:** Messaging limits (SMS), Google Maps queries, and database endpoints add recurring costs.
3. **Security Compliance:** Encryption layers and server validations require experienced software developers.

### Frequently Asked Questions
1. **Should I build a native or cross-platform app?**
For startups, cross-platform frameworks (React Native, Flutter) are best. They run on both iOS and Android from one codebase, lowering costs.
2. **What are the recurring costs of running a mobile app?**
Recurring costs include server hosting, database nodes, SMS gateways, and app store developer fees (Apple/Google).
3. **How do we publish the app on app stores?**
We compile release bundles, write metadata, and manage the compliance review process for Apple App Store and Google Play Stores.`,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    date: 'July 06, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '6 min read',
    tags: ['App Dev', 'Pricing', 'Startups', 'Raipur Cost'],
    published: true,
    slug: 'mobile-app-development-cost-raipur-startup-guide',
    metaTitle: 'Mobile App Development Cost Raipur (2026 Guide) | CoreBuild',
    metaDescription: 'An honest guide detailing app development costs, framework choices, and third-party API costs for startups in Raipur, Chhattisgarh.',
    keywords: 'app development cost Raipur, mobile app price Chhattisgarh, React Native Raipur, Android developer Raipur'
  },
  {
    id: 'blog-12',
    title: 'How RAG is Replacing Simple Chatbots in B2B Operations',
    category: 'AI & Automation',
    summary: 'Analyze why retrieval-grounded AI architectures are replacing standard support widgets to automate enterprise query workflows.',
    content: `Standard support widgets often fail because they rely on hardcoded script templates. When a user asks a custom question, the bot gets stuck. Retrieval-Augmented Generation (RAG) changes this by connecting AI models directly to your files. Learn more on our [AI & Machine Learning](/services/ai-machine-learning) page.

### Grounding AI in Private Data
RAG matches user queries against your uploaded PDF manuals or FAQs using vector search. It extracts the exact matching sections and passes them to the model as context. The model drafts an answer based ONLY on that context, eliminating hallucinations.

### Automating B2B Workflows
We integrate RAG pipelines into custom ERP workspaces. Managers can query database reports in plain English, audit contract clauses, or search shipping schedules in seconds, saving hours of manual lookup time.

### Frequently Asked Questions
1. **Can RAG bots query database tables?**
Yes. RAG systems can search SQL databases, translate plain English to secure queries, and print structured data tables.
2. **What models are best for B2B RAG?**
Claude 3.5 Sonnet is the leader for complex document analysis. Open-source Llama 3 models are excellent for fast, low-cost lookups.
3. **How do you keep company documents secure?**
We isolate document storage and use enterprise APIs that guarantee your files are never used to train public AI models.`,
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    date: 'July 04, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['AI', 'RAG', 'B2B', 'Automation'],
    published: true,
    slug: 'rag-replacing-simple-chatbots-b2b-operations',
    metaTitle: 'How RAG AI is Replacing Chatbots in B2B Operations | CoreBuild',
    metaDescription: 'Discover how Retrieval-Augmented Generation connects LLMs to your private data to automate B2B customer support and database queries.',
    keywords: 'RAG chatbot B2B, AI support automation, custom AI systems Raipur, vector database RAG, pgvector'
  },
  {
    id: 'blog-13',
    title: 'Why Headless Commerce is the Future of Enterprise Retail',
    category: 'E-commerce',
    summary: 'Explore how separating the React frontend from the database Shopify backend delivers sub-second page loads and custom layouts.',
    content: `Traditional e-commerce templates link layout design to database operations. This coupling creates code bloat, slowing down product listings and increasing checkout dropoffs. Headless commerce solves this by separating the frontend design from the backend engine. Review our solutions on [E-commerce Website Development](/services/e-commerce-development).

### Seamless Frontend Deliveries
In a headless store, we build the frontend using React and Vite, hosting it on global CDNs. The storefront queries product catalogs via APIs, rendering listings instantly without page reloads.

### Backend Inventory Sync
Store managers can keep using Shopify or WooCommerce admin panels to manage orders, inventory, and listings. The custom React frontend queries these databases dynamically, ensuring sync without slowing the user UI.

### Frequently Asked Questions
1. **What is headless commerce?**
It is an e-commerce architecture where the user-facing design (frontend) is decoupled from the transactional database engine (backend).
2. **How does headless commerce improve SEO?**
Lightweight HTML, dynamic canonical tags, and faster LCP load speeds raise organic search scores on Google.
3. **Can we use Shopify with a custom React frontend?**
Yes. We connect custom React frontends to Shopify using the Shopify Storefront API to manage checkout, cart, and catalogs.`,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    date: 'July 03, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '6 min read',
    tags: ['E-commerce', 'Headless', 'Vite', 'Shopify API'],
    published: true,
    slug: 'why-headless-commerce-future-enterprise-retail',
    metaTitle: 'Headless Commerce: Future of Enterprise E-commerce | CoreBuild',
    metaDescription: 'Learn how separating the React frontend from Shopify backends delivers sub-second page loads and custom visual checkouts.',
    keywords: 'headless commerce Raipur, Shopify API developer, custom react storefront, WooCommerce headless, e-commerce speed'
  },
  {
    id: 'blog-14',
    title: 'Custom ERP Software for Manufacturing Units in Chhattisgarh',
    category: 'Software Development',
    summary: 'A strategic guide to automate inventory pipelines, production shifts, and invoicing for industrial units in Urla & Bhilai.',
    content: `Manufacturing units in industrial zones (like Urla, Siltara, and Bhilai) require robust database architectures to track raw materials, schedule shifts, and manage invoices. Off-the-shelf software often fails to adapt to these workflows. Explore our custom portals at [Custom Software Development](/services/custom-enterprise-software).

### 1. Real-Time Raw Material Tracking
Bespoke database schemas track raw inventory levels, automatically generating replenishment alerts when stocks drop. This avoids production delays.

### 2. Automated Invoicing & Dispatch
By integrating inventory databases with local GST tax calculations, the system generates dispatch documents and GST-compliant invoices instantly, eliminating manual entry.

### 3. Secure Role Access Policies
We configure access controls so that operators can enter production logs, managers can run inventory balance sheets, and auditors can view financial statements.

### Frequently Asked Questions
1. **Can custom ERP software integrate with weight bridges?**
Yes. We write custom API routes to capture data from local hardware adapters, saving weight records directly to the database.
2. **What are the hosting options for manufacturing software?**
We recommend AWS or Google Cloud, but we can set up secure local server instances inside your factory if internet access is limited.
3. **How long does it take to deploy a custom ERP?**
A tailored ERP dashboard with raw material tracking and dispatch workflows takes 8 to 12 weeks to code and deploy.`,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    date: 'July 01, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '7 min read',
    tags: ['ERP', 'Manufacturing', 'Chhattisgarh', 'Automation'],
    published: true,
    slug: 'custom-erp-software-manufacturing-chhattisgarh-urla',
    metaTitle: 'Custom ERP Software for Chhattisgarh Industrial Units | CoreBuild',
    metaDescription: 'A guide to automate raw material inventory, dispatch invoices, and staff shifts for factories in Urla, Siltara, and Bhilai.',
    keywords: 'custom ERP Raipur, industrial software Chhattisgarh, factory management Urla, software developers Raipur, database systems'
  },
  {
    id: 'blog-15',
    title: 'How Page Speed Destroys Your Google Ads Quality Score',
    category: 'SEO',
    summary: 'Analyze the direct link between Lighthouse page speed scores, conversion rates, and paid ad cost-per-click (CPC) rates.',
    content: `Many businesses spend thousands on Google Ads but fail to check page load speed. When a user clicks a sponsored link, a 3-second delay causes them to bounce. This sends negative signals to Google, raising your Cost-Per-Click (CPC) rates. Review our audit checklist at [SEO Services](/services/seo-optimization).

### The Quality Score Formula
Google evaluates sponsored campaigns using a Quality Score (1 to 10). Landing Page Experience is a primary factor. A slow page lowers this score, meaning you must pay up to 400% more per click than competitors with fast pages.

### Vite & React to the Rescue
By building lightweight, pre-rendered landing pages utilizing React and Vite, we reduce LCP to under 1 second. This improves user dwell times, raises Quality Scores, and reduces paid CPC rates by up to 50%.

### Frequently Asked Questions
1. **What is Google Ads Quality Score?**
It is a rating of the relevance and quality of your keywords and landing pages, determining your ad placement and cost per click.
2. **How does page speed impact CPC?**
Fast, highly relevant pages raise your Quality Score, allowing you to secure top ad spots at lower CPC rates.
3. **What is a bounce rate in paid ads?**
It represents users who click your ad but close the browser before the page loads or before taking any action.`,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    date: 'June 30, 2026',
    author: 'Kshitij, Founder & CEO',
    readTime: '5 min read',
    tags: ['Google Ads', 'Page Speed', 'CPC Optimization', 'Vite'],
    published: true,
    slug: 'page-speed-destroys-google-ads-quality-score-cpc',
    metaTitle: 'How Page Speed Impacts Google Ads Quality Score & CPC | CoreBuild',
    metaDescription: 'Learn how a slow landing page lowers your Google Ads Quality Score, raising your cost-per-click rates and paid bounce rates.',
    keywords: 'Google Ads CPC Raipur, page speed PPC, landing page optimization, website developer Raipur, Lighthouse score'
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
  },
  {
    id: 'srv-4',
    name: 'E-commerce Development',
    subtitle: 'High-converting online storefronts engineered for speed & scale.',
    description: 'We build fast, secure headless e-commerce systems backed by Shopify or WooCommerce platforms.',
    icon: 'ShoppingBag',
    details: ['Headless React Storefronts', 'Decoupled cart integrations', 'Secure payment checkouts', 'Dynamic product variations schemas', 'Multi-channel inventory sync'],
    workflow: [
      { step: 1, title: 'Data Inventory Mapping', desc: 'Defining catalog schemas and syncing variables.' },
      { step: 2, title: 'Luxury UI/UX Layout', desc: 'Designing lightning-fast single-page checkout funnels.' },
      { step: 3, title: 'Headless Engineering', desc: 'Coding custom frontend interfaces with Shopify Storefront API.' },
      { step: 4, title: 'Security Audits & Launch', desc: 'Verifying checkout security, webhooks, and CDNs.' }
    ],
    pricing: [
      { plan: 'Core Storefront Launch', price: '₹79,999', features: ['Custom React Front', 'Headless CMS Setup', '100 Catalog Items Support', 'Secure Payment integrations', '3 Months support'], description: 'Perfect for local brands entering digital commerce.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'Omni-channel Enterprise', price: '₹2,19,999', features: ['Custom multi-vendor store', 'ERP Inventory sync pipeline', 'Advanced analytics dashboards', '1 Year Priority Support'], description: 'High-throughput storefront engineered for high volume sales.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ],
    whatIsIt: 'Custom Headless E-commerce Development separates the frontend layout design from the backend shopping cart systems to deliver sub-second page loads and zero layout shifts.',
    whoIsItFor: 'Designed for retail companies, wholesale vendors, and startup brands that want to bypass standard slow e-commerce sites to increase checkout conversions.',
    processDescription: 'We operate across 4 agile phases: inventory strategy audit, visual design and interactive prototyping, headless React engine coding, and transactional webhook audits.',
    technologiesDescription: 'We build on Shopify Storefront API, WooCommerce, React, Vite, Zustand, Tailwind CSS, Stripe, and Vercel.',
    serviceFaqs: [
      { q: 'What is a headless store?', a: 'Headless separates your store frontend visual from the commerce backend, boosting page speed by 4x.' }
    ]
  },
  {
    id: 'srv-5',
    name: 'UI/UX Interface Design',
    subtitle: 'Stunning luxury digital interfaces engineered for visual excellence.',
    description: 'We design premium interface systems balancing negative space, typography, and motion in Figma.',
    icon: 'Layers',
    details: ['High-fidelity visual mockups', 'Interactive wireframe prototypes', 'Custom design systems libraries', 'Responsive dark/light UI systems', 'Motion choreography guides'],
    workflow: [
      { step: 1, title: 'Moodboard Strategy', desc: 'Auditing branding guidelines and visual benchmarks.' },
      { step: 2, title: 'Interaction Prototyping', desc: 'Creating structural interactive layouts to test navigation.' },
      { step: 3, title: 'High-Fidelity UI Design', desc: 'Designing beautiful UI screens utilizing Outfit typography.' },
      { step: 4, title: 'Developer Handoff', desc: 'Delivering design libraries and spacing variables to engineers.' }
    ],
    pricing: [
      { plan: 'Essential Wireframe Suite', price: '₹24,999', features: ['Figma wireframes (up to 8 pages)', 'Responsive mobile layouts', 'Design Token library', '2 Revision rounds'], description: 'Validate navigation schemas before engineering code.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'Luxury Design System', price: '₹74,999', features: ['Interactive prototypes (Unlimited)', 'Custom motion guides', 'Comprehensive brand guide', 'Complete Figma system handoff'], description: 'Elite visual styles designed to elevate your company brand equity.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ],
    whatIsIt: 'UI/UX Design is the art and engineering of digital interface mockups designed to make user navigation intuitive.',
    whoIsItFor: 'Ideal for product managers, founders, and enterprises wanting custom app and dashboard visuals before code development.',
    processDescription: 'We run strategy blueprinting, wireframe prototyping, visual skin design, and developer asset handoff.',
    technologiesDescription: 'We use Figma, Adobe Creative Cloud, Framer, and Lottie animations.',
    serviceFaqs: [
      { q: 'Do we own the design files?', a: 'Yes. You receive full ownership of the Figma source libraries and brand guide variables.' }
    ]
  },
  {
    id: 'srv-6',
    name: 'Branding & Logo Design',
    subtitle: 'Custom corporate identity & premium brand strategies.',
    description: 'We craft geometric vector logos, cohesive corporate colors, and comprehensive brand books.',
    icon: 'Award',
    details: ['Geometric logomark suites', 'Cohesive color psychology systems', 'Corporate stationery guides', 'Social media assets mockups', 'Scalable vector source logs'],
    workflow: [
      { step: 1, title: 'Brand discovery audit', desc: 'Reviewing competitor identity designs and visual goals.' },
      { step: 2, title: 'Geometric Concepts', desc: 'Drafting vector ideas based on clean grids.' },
      { step: 3, title: 'Stationery Expansion', desc: 'Extending the chosen mark to business cards and invoice templates.' },
      { step: 4, title: 'Brand Guide Delivery', desc: 'Packaging vector files and typography guidelines.' }
    ],
    pricing: [
      { plan: 'Core Identity Emblem', price: '₹14,999', features: ['Custom geometric logo mark', 'Primary color guide', 'Business card vector design', 'High-res source files'], description: 'Clean visual signature for emerging startups.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'Executive Branding Book', price: '₹39,999', features: ['Full corporate identity guide', 'Letterhead, envelope, invoice vector designs', 'Brand typography book', 'Social media kit templates'], description: 'Complete brand guide engineered to communicate corporate authority.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ],
    whatIsIt: 'Corporate Branding and Logo Design is the process of building a cohesive graphic representation of your company.',
    whoIsItFor: 'Perfect for retail groups, manufacturers, and startup brands wishing to establish instant aesthetic trust.',
    processDescription: 'We coordinate positioning research, concept sketching, brand collateral extension, and guideline publishing.',
    technologiesDescription: 'We leverage Adobe Illustrator, Photoshop, InDesign, and vector SVG files.',
    serviceFaqs: [
      { q: 'Will the logo work on big print banners?', a: 'Yes, every layout is exported in infinite resolution vector paths ready for massive print runs.' }
    ]
  },
  {
    id: 'srv-7',
    name: 'SEO Optimization',
    subtitle: 'Data-driven SEO campaigns engineered for page 1 rankings.',
    description: 'We execute technical crawler audits, search intent indexing, and keyword copywriting.',
    icon: 'LineChart',
    details: ['Technical crawl indexing audit', 'Commercial keyword research', 'Rich schema tags injections', 'On-page title/heading updates', 'Search Console logs monitor'],
    workflow: [
      { step: 1, title: 'SEO Site Audit', desc: 'Evaluating indexing errors, loading times, and backlinks.' },
      { step: 2, title: 'Keyword Intent Map', desc: 'Targeting keywords that convert searchers to paying leads.' },
      { step: 3, title: 'On-Page Optimization', desc: 'Updating metadata tags, headings, and alt descriptions.' },
      { step: 4, title: 'Crawl Analytics Monitor', desc: 'Tracking Google search impression changes and keyword ranks.' }
    ],
    pricing: [
      { plan: 'Local Raipur Domination', price: '₹19,999', features: ['Raipur local SEO setup', 'Google Business Profile audit', 'On-page updates (10 key pages)', 'Monthly progress reports'], description: 'Rank for high-volume searches in Raipur and Chhattisgarh.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'National Rank Accelerator', price: '₹49,999', features: ['National keyword campaigns', 'Comprehensive indexation audits', 'Structured FAQ schema scripting', 'Backlinks acquisition strategies'], description: 'Dominate high-traffic keywords across India to scale leads.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ],
    whatIsIt: 'Search Engine Optimization is the technical process of formatting site code and copy to rank on page 1 of search engine results.',
    whoIsItFor: 'Designed for local businesses in Raipur and software companies in India looking to generate inbound sales inquiries.',
    processDescription: 'We conduct crawling audits, target intent research, on-page optimization, and analytics reporting.',
    technologiesDescription: 'We run campaigns using Google Search Console, Ahrefs, SEMrush, Screaming Frog, and Lighthouse.',
    serviceFaqs: [
      { q: 'Do you guarantee rank position 1?', a: 'No SEO company can guarantee rank positions, but we use safe white-hat methods that consistently achieve page 1 search results.' }
    ]
  },
  {
    id: 'srv-8',
    name: 'Custom Software Development',
    subtitle: 'Scalable enterprise portals, SaaS platforms, & backend APIs.',
    description: 'We develop secure backend architectures, database schemas, and custom API systems.',
    icon: 'Terminal',
    details: ['Relational database setup (PostgreSQL)', 'Decoupled API microservices', 'Custom role-based permissions', 'Multi-tenant SaaS architectures', 'Docker containerized servers'],
    workflow: [
      { step: 1, title: 'System Blueprinting', desc: 'Outlining database relations and API endpoint routes.' },
      { step: 2, title: 'Database Setup', desc: 'Creating Prisma migrations and seeding testing records.' },
      { step: 3, title: 'API Coding Sprint', desc: 'Writing modular backend routes and auth controllers.' },
      { step: 4, title: 'Docker Edge Deploy', desc: 'Containerizing endpoints and hosting on AWS servers.' }
    ],
    pricing: [
      { plan: 'Enterprise API Layer', price: '₹1,49,999', features: ['Custom Node/Go API backend', 'PostgreSQL database setup', 'Prisma ORM migration scripts', 'OAuth/JWT Session security', '6 Months Support'], description: 'Decoupled secure system to run your software integrations.', popular: false, ctaText: 'Initiate Project', active: true, order: 1 },
      { plan: 'SaaS Platform Engine', price: '₹3,49,999', features: ['Multi-tenant database schema', 'Custom billing/subscriptions pipeline', 'Staff admin panel dashboard', 'Docker deployment & AWS ECS', '1 Year Priority Support'], description: 'Production-ready software engine designed to scale your business growth.', popular: true, ctaText: 'Get Started', active: true, order: 2 }
    ],
    whatIsIt: 'Custom Software Development is the engineering of custom backend logic, database tables, and API services.',
    whoIsItFor: 'Ideal for companies needing database performance, custom user permissions, and custom ERP workflows.',
    processDescription: 'We structure DB mapping blueprints, Prisma setups, API coding, security reviews, and edge deployments.',
    technologiesDescription: 'We write in Node.js (TypeScript), Go, Python, PostgreSQL, Prisma, Redis, Docker, and AWS.',
    serviceFaqs: [
      { q: 'Who owns the custom software code?', a: 'You own 100% of the custom backend code files and database configuration scripts.' }
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
    bio: 'Founder and Director of CoreBuild Solutions. Over 5 years directing digital strategy, building high-throughput cloud architectures, and designing luxury minimalist products.',
    experience: '5+ Years',
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
    keywords: 'website in raipur, app in raipur, website development in raipur, website development company raipur, website design company raipur, web development company chhattisgarh, website developer raipur, software development company raipur, mobile app development raipur, web design raipur, custom website development chhattisgarh, digital marketing raipur, best software agency india'
  },
  {
    page: 'about',
    title: 'Best Website Developers in Raipur - About CoreBuild Solutions',
    description: 'About CoreBuild Solutions - The leading web development agency in Raipur, Chhattisgarh. Our team of certified software developers, UI/UX designers, and SEO specialists build high-performance systems for startups and enterprises in India.',
    keywords: 'website in raipur, app in raipur, website development in raipur, web development agency raipur, website design team raipur, software developers chhattisgarh, best tech company raipur, corebuild solutions team, local website developers raipur, software agency chhattisgarh'
  },
  {
    page: 'services',
    title: 'Website Development Services in Raipur, Chhattisgarh | CoreBuild',
    description: 'Premium digital services by CoreBuild Solutions in Raipur. We specialize in custom web application development, Android/iOS mobile apps, secure e-commerce portals, UI/UX design, and SEO optimization in Chhattisgarh, India.',
    keywords: 'website in raipur, app in raipur, website development in raipur, website development services raipur, e-commerce website development raipur, mobile app development chhattisgarh, software engineering raipur, custom web development india, local seo services raipur'
  },
  {
    page: 'portfolio',
    title: 'Our Web Design & Software Projects | CoreBuild Raipur',
    description: 'Explore our work portfolio. CoreBuild Solutions showcases custom website designs, mobile apps, SaaS applications, and e-commerce stores successfully delivered for businesses in Raipur, Chhattisgarh, and across India.',
    keywords: 'website in raipur, app in raipur, website development in raipur, web design portfolio raipur, website design examples chhattisgarh, custom software showcase raipur, mobile apps portfolio india, e-commerce developer portfolio chhattisgarh'
  },
  {
    page: 'blog',
    title: 'Web Development & Local SEO Insights Blog | CoreBuild Solutions',
    description: 'Read local SEO growth hacks, website optimization tips, and custom software development guides from the best website developer company in Raipur, Chhattisgarh, India.',
    keywords: 'website in raipur, app in raipur, website development in raipur, web design blog raipur, software development guides chhattisgarh, local seo tips india, e-commerce growth tips raipur, tech insights chhattisgarh'
  },
  {
    page: 'contact',
    title: 'Hire Best Website Development Company in Raipur | Contact Us',
    description: 'Get a free quote today! Contact CoreBuild Solutions, the top website design & web development company in Raipur, Chhattisgarh, India. Let\'s discuss your next digital project.',
    keywords: 'website in raipur, app in raipur, website development in raipur, contact website developers raipur, hire web development company chhattisgarh, web design quote raipur, hire mobile app developer raipur, best tech support raipur'
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
