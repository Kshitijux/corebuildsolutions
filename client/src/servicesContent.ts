export interface DetailedServiceContent {
  id: string;
  slug: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  h1: string;
  subtitle: string;
  introTitle: string;
  introduction: string;
  whyChooseUsTitle: string;
  whyChooseUsDesc: string;
  whyChooseUsPoints: { title: string; desc: string }[];
  processTitle: string;
  processDesc: string;
  processSteps: { step: string; title: string; desc: string }[];
  techTitle: string;
  techDesc: string;
  techCategories: { name: string; items: string[] }[];
  industriesTitle: string;
  industriesDesc: string;
  industries: { name: string; desc: string }[];
  benefitsTitle: string;
  benefitsDesc: string;
  benefits: { title: string; desc: string }[];
  whyBusinessesChooseUsTitle: string;
  whyBusinessesChooseUsDesc: string;
  whyBusinessesChooseUsPoints: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

export const detailedServices: Record<string, DetailedServiceContent> = {
  'srv-1': {
    id: 'srv-1',
    slug: 'custom-web-applications',
    seoTitle: 'Web Development Company India | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is a leading Web Development Company in Raipur. We engineer premium, custom web applications across Chhattisgarh and India.',
    keywords: 'Web Development Company India, Web Development Company Raipur, Custom Software Development, React Development, MERN Stack Development, Enterprise Solutions, Chhattisgarh',
    h1: 'Web Development Company in India',
    subtitle: 'Custom Web Application Development Company India & Raipur',
    introTitle: 'Engineering High-Performance Web Applications That Scale',
    introduction: 'In a digital marketplace crowded with generic templates, CoreBuild Solutions stands out as a premier Web Development Company in Raipur, delivering bespoke web architectures to clients across Chhattisgarh and India. We understand that your web presence is not just a digital brochure; it is the core engine of your business growth. As a specialized Custom Software Development firm, we bypass the bloated libraries of traditional CMS builders. Instead, we engineer fast, secure, and responsive web applications utilizing React, Vite, and the MERN Stack. Our mission is to solve complex business problems, streamline user flows, and maximize conversion rates for enterprises demanding elite digital execution. Whether you are a startup in Bangalore looking for enterprise solutions or a manufacturing group in Raipur seeking digital modernization, our engineers provide the technical sophistication needed to succeed on the global stage.',
    whyChooseUsTitle: 'Why Choose CoreBuild Solutions for Web Engineering?',
    whyChooseUsDesc: 'Choosing the right Web Development Company India is a critical decision that dictates your long-term scalability and page-load speed. Here is how we differ from ordinary agencies:',
    whyChooseUsPoints: [
      { title: 'Sub-Second Performance Checks', desc: 'Every application we compile is optimized for Core Web Vitals, achieving a 95+ PageSpeed score to guarantee search rankings and high user retention.' },
      { title: 'Decoupled Server Architectures', desc: 'We build frontends using React and Vite, communicating with backend microservices via REST and GraphQL APIs. This decouples logic and ensures fast renders.' },
      { title: 'Strict Type Safety with TypeScript', desc: 'By writing clean, typed code, we eliminate runtime errors and deliver scalable, secure software models that match enterprise standards.' },
      { title: 'Premium Editorial UI Design', desc: 'Our layouts utilize elegant typography, generous whitespace, and responsive grids designed to match your brand prestige.' }
    ],
    processTitle: 'Our Software Development Lifecycle Blueprint',
    processDesc: 'As an experienced Software Development Company, we follow a rigorous, 6-stage engineering process that ensures transparent timelines and robust deliverables:',
    processSteps: [
      { step: '01', title: 'Discovery & Schema Mapping', desc: 'We audit your business processes, define user personas, and map relational database schemas to ensure maximum technical feasibility.' },
      { step: '02', title: 'Luxury UI/UX Prototyping', desc: 'We design high-fidelity interactive wireframes in Figma, mapping out gesture interactions, hover animations, and dark/light modes.' },
      { step: '03', title: 'Modular Engineering Sprint', desc: 'Our developers build the codebase in dual-week sprints, writing clean TypeScript code backed by automated unit tests.' },
      { step: '04', title: 'API Integration & Caching', desc: 'We connect database adaptors, integrate secure payment platforms (Stripe/Razorpay), and set up Redis caching layers.' },
      { step: '05', title: 'Vercel Edge Deployment', desc: 'We compile, minify, and deploy the application to global Edge CDN networks, implementing security headers and AVIF image compression.' },
      { step: '06', title: 'Hypercare Support & Logs', desc: 'We active continuous telemetry logs (Sentry/Datadog) and provide 3 months of immediate post-launch priority support.' }
    ],
    techTitle: 'Technologies We Use for Custom Development',
    techDesc: 'We construct applications on a modern MERN Stack and serverless tech stack, optimizing every query for speed, security, and search engine crawlability:',
    techCategories: [
      { name: 'Frontend Tech', items: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'] },
      { name: 'Backend & APIs', items: ['Node.js', 'Express', 'FastAPI', 'Python', 'GraphQL', 'REST APIs'] },
      { name: 'Database & Cache', items: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Redis Caching', 'Supabase Client'] },
      { name: 'Cloud & Edge hosting', items: ['Vercel Edge CDN', 'AWS CloudFront', 'Docker Containers', 'GitHub Actions CI/CD'] }
    ],
    industriesTitle: 'Industries We Serve Across India',
    industriesDesc: 'We engineer custom web applications that solve specific industry constraints, working with businesses in Raipur, Chhattisgarh, and globally:',
    industries: [
      { name: 'Real Estate & Properties', desc: 'WebGL 3D walkthroughs, geospatial map queries (Mapbox API), and automated AI-driven property valuation portals.' },
      { name: 'Quantitative FinTech', desc: 'High-frequency dashboard metrics, secure WebSocket real-time data syncs, and Canvas-based interactive financial charting.' },
      { name: 'Premium E-commerce', desc: 'Sub-second product catalog renders, decoupled cart state management (Zustand), and secure payment gateway integrations.' },
      { name: 'B2B Enterprise SaaS', desc: 'Multi-tenant role permissions, custom database CMS dashboards, and automated lead capture integration with CRM hubs.' }
    ],
    benefitsTitle: 'Measurable Business Benefits of Our Code',
    benefitsDesc: 'We do not just write code; we deliver high-performance assets that yield measurable growth for your digital business channels:',
    benefits: [
      { title: 'Lower Customer Acquisition Cost', desc: 'Fast pages lower your Google Ads bounce rates and raise your organic keyword quality scores, reducing overall ad spend.' },
      { title: 'Increased Search Rankings', desc: 'By delivering pre-rendered, lightweight HTML shells, Googlebot crawls and indexes your services in seconds, boosting rankings.' },
      { title: 'Higher User Retention Rate', desc: 'Studies show that websites loading in under 1 second see a 3x higher conversion rate than template pages loading in 3 seconds.' },
      { title: 'Future-Proof Codebase', desc: 'Our clean, modular React component architecture allows you to scale, add, and modify features without starting from scratch.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Businesses Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We align with the highest quality standards (EEAT) to deliver premium services that business owners trust:',
    whyBusinessesChooseUsPoints: [
      { title: 'ISO & Security Compliance', desc: 'Our engineering models follow secure data handling practices, protecting proprietary database scripts and private user tokens.' },
      { title: 'Experienced Technical Leads', desc: 'Every line of code is reviewed by senior engineers with 8+ years of experience in enterprise systems.' },
      { title: 'Client-Focused Consulting', desc: 'We take the time to learn your business processes, mapping solutions that directly reduce manual labor and optimize revenue.' },
      { title: 'Completely Transparent Contracts', desc: 'No hidden hosting fees, no proprietary CMS lock-ins. You own 100% of the custom codebase and database configurations.' }
    ],
    faqs: [
      { q: 'Why should I choose a Custom Web Development Company in Raipur?', a: 'Choosing a local developer in Raipur, Chhattisgarh, allows for direct, face-to-face consulting, clear alignment on project requirements, and reliable long-term support. CoreBuild Solutions combines local accessibility in Chhattisgarh with elite, international-standard web engineering practices, serving clients across India and globally.' },
      { q: 'What is MERN Stack Development and why do you use it?', a: 'MERN Stack stands for MongoDB, Express, React, and Node.js. It is a highly popular, modern javascript stack. We utilize it because it allows for fast, decoupled frontend rendering paired with a scalable backend database, eliminating slow page reloads and bloating.' },
      { q: 'How does custom web development improve search rankings (SEO)?', a: 'Custom web development allows us to output lightweight, semantic HTML structures, configure canonical tags, customize Open Graph social headers, and implement schema scripts. By avoiding heavy themes and templates, we ensure that search engine crawlers can index your keywords instantly.' },
      { q: 'Will the website be optimized for mobile screens?', a: 'Absolutely. Every layout is developed following mobile-first design practices, ensuring text, buttons, and graphics render beautifully on smartphones, tablets, and desktop computers.' },
      { q: 'Do we receive support after the website is launched?', a: 'Yes. We provide 3 months of priority support (Hypercare) to resolve technical queries, monitor telemetry logs, and make minor updates. We also offer monthly support plans for database maintenance and upgrades.' },
      { q: 'Can you integrate payment checkouts like Stripe or Razorpay?', a: 'Yes. We regularly set up secure payment configurations (Stripe, Razorpay, Paypal, Apple/Google Pay), managing webhooks to handle reservation synchronization and user account upgrades automatically.' },
      { q: 'Do you sign Non-Disclosure Agreements (NDAs)?', a: 'Yes. We prioritize security and privacy. We sign NDAs before project discovery, ensuring that your business models, database schemas, and proprietary code remain confidential.' }
    ]
  },
  'srv-2': {
    id: 'srv-2',
    slug: 'mobile-app-development',
    seoTitle: 'Mobile App Development Company India | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is a premier Mobile App Development Company in Raipur. We build high-performance iOS & Android apps across Chhattisgarh & India.',
    keywords: 'Mobile App Development Company India, Mobile App Development Company Raipur, Custom Software Development, React Native Development, Android Development, iOS Development, Chhattisgarh',
    h1: 'Mobile App Development Company in India',
    subtitle: 'Custom Mobile App Development Company India & Raipur',
    introTitle: 'Engineering Fluid Native-Feeling iOS and Android Applications',
    introduction: 'In a mobile-first world, a slow application is a direct loss of business. CoreBuild Solutions is a leading Mobile App Development Company in Raipur, crafting fluid cross-platform applications for clients across Chhattisgarh and India. We specialize in React Native and Flutter frameworks, combined with custom Swift and Kotlin bridges. This hybrid approach enables us to deliver native-level performance, hardware acceleration, and biometric access while maintaining a unified codebase. As a premier Software Development Company, we solve complex mobile constraints, including offline data synchronization, local SQLite caching, push notification servers, and secure mobile payment gateways. From high-end concierge apps to robust enterprise portals, our engineers deliver the responsiveness and security that today\'s mobile users demand.',
    whyChooseUsTitle: 'Why Partner with CoreBuild Solutions for Mobile Apps?',
    whyChooseUsDesc: 'Selecting a Mobile App Development Company India demands a team that understands hardware limitations and memory optimization. Here is why we stand out:',
    whyChooseUsPoints: [
      { title: 'Fluid 120 FPS Animations', desc: 'We utilize hardware-accelerated rendering pipelines to keep screen transitions and gesture animations running at a smooth 120 frames per second.' },
      { title: 'Offline-First Capabilities', desc: 'Our mobile apps are built with local SQLite/WatermelonDB storage, allowing users to perform operations offline and auto-sync when online.' },
      { title: 'Native Swift & Kotlin Bridges', desc: 'For deep hardware integration (camera, Bluetooth, biometrics), we write custom native modules, avoiding dependency bloat.' },
      { title: 'App Store Submission Care', desc: 'We handle the entire setup, compliance check, and listing process for both Apple App Store Connect and Google Play Console.' }
    ],
    processTitle: 'Our Mobile Development Lifecycle Roadmap',
    processDesc: 'We execute project roadmaps in 6 structured stages, ensuring clear milestone delivery and strict quality controls:',
    processSteps: [
      { step: '01', title: 'Mobile UX Architecture', desc: 'We define the application navigation structure, mapping gestures, button triggers, and background sync logic.' },
      { step: '02', title: 'Figma UI Layout Design', desc: 'We craft layouts following strict Apple Human Interface Guidelines and Google Material Design variables.' },
      { step: '03', title: 'Core Interface Coding', desc: 'Our developers build the codebase in sprints, modularizing components and integrating native libraries.' },
      { step: '04', title: 'Secure API Routing', desc: 'We connect backend API networks, implement JWT session tokens, and set up push notification triggers.' },
      { step: '05', title: 'Hardware & Sandbox Testing', desc: 'We compile and run test versions on actual iOS/Android hardware, verifying battery consumption and memory usage.' },
      { step: '06', title: 'Store Listing & Compliance', desc: 'We manage store submissions, review compliance protocols, and prepare marketing description assets.' }
    ],
    techTitle: 'Technologies We Use for Mobile Apps',
    techDesc: 'We construct lightweight packages using modern frameworks and secure local databases to keep the app file size minimal:',
    techCategories: [
      { name: 'Frameworks', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'] },
      { name: 'State & Caching', items: ['Redux Toolkit', 'Zustand', 'Zod Validation', 'TypeScript'] },
      { name: 'Local Database', items: ['SQLite', 'WatermelonDB', 'MMKV Storage'] },
      { name: 'Services & APIs', items: ['Firebase FCM', 'APNs Push', 'Stripe Pay', 'Razorpay SDK'] }
    ],
    industriesTitle: 'Mobile App Use Cases We Solve',
    industriesDesc: 'We customize applications for diverse business sectors in Raipur, Chhattisgarh, and across India:',
    industries: [
      { name: 'Luxury Concierge & Booking', desc: 'Real-time table booking, interactive seat maps, secure payment validation, and private event catalogs.' },
      { name: 'On-Demand Service Portals', desc: 'Background location tracking, push notification alerts, rating systems, and digital wallet integrations.' },
      { name: 'FinTech Mobile Banking', desc: 'Biometric lock integrations (FaceID), encrypted storage keyrings, transaction history logs, and instant transfers.' },
      { name: 'SaaS Mobile Companions', desc: 'Real-time telemetry chart updates, offline workspace creation, push alert warnings, and quick profile configurations.' }
    ],
    benefitsTitle: 'How Our Mobile Code Drives Business Growth',
    benefitsDesc: 'A custom mobile app developed by a professional Software Development Company delivers direct commercial advantages:',
    benefits: [
      { title: 'Maximized User Engagement', desc: 'Direct-to-screen push notifications bypass email inbox filters, driving a 4x higher open and conversion rate.' },
      { title: 'Higher Customer Lifetime Value', desc: 'Having a dedicated app icon on your client\'s phone builds brand familiarity, maximizing repeat order rates.' },
      { title: 'Offline Productivity Boost', desc: 'Users can access calendars, product listings, or workspace documents without internet access, increasing utility.' },
      { title: 'Bespoke Hardware Access', desc: 'Utilizing camera, Bluetooth, and biometric systems natively enables superior user security and operational features.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Brands Trust CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We apply strict engineering benchmarks (EEAT) to deliver reliable, enterprise-grade mobile software:',
    whyBusinessesChooseUsPoints: [
      { title: 'Strict Memory Leak Audits', desc: 'We run memory profilers on every build, preventing app crashes, sluggish transitions, and battery drain issues.' },
      { title: 'Encrypted Local Storage', desc: 'All user tokens, session keys, and database records stored on the device are encrypted using system keychain APIs.' },
      { title: 'Experienced Mobile Engineers', desc: 'Our mobile team consists of developers with 6+ years of specialized React Native and native iOS/Android experience.' },
      { title: 'Complete IP Rights Ownership', desc: 'Upon milestone delivery, you receive the full code repositories and administrative store credentials.' }
    ],
    faqs: [
      { q: 'Why hire a Mobile App Development Company in Raipur?', a: 'Hiring a local agency in Raipur, Chhattisgarh, simplifies communication, allows for interactive design sprints, and provides rapid local debugging. CoreBuild Solutions offers the convenience of local developers in Raipur alongside global mobile development standards, delivering apps for clients across India.' },
      { q: 'Should I build a hybrid app or native iOS/Android apps?', a: 'For 90% of business use cases, hybrid frameworks like React Native or Flutter are best. They compile into native machine code, providing native performance while saving 40% of development cost by using a single codebase.' },
      { q: 'How do you secure user data stored on mobile devices?', a: 'We store sensitive data (like login tokens) inside encrypted system lockers (iOS Keychain and Android Keystore) using secure libraries, ensuring that data cannot be accessed by external apps.' },
      { q: 'Do you assist with Apple and Google app store submissions?', a: 'Yes. We manage the entire store connect setup, configure test groups (TestFlight/Play Console), complete compliance questionnaires, and guide you through the review process to secure approval.' },
      { q: 'How do push notifications work in your mobile apps?', a: 'We set up Firebase Cloud Messaging (FCM) and Apple Push Notifications (APNs) connected to your server backend, allowing you to trigger real-time, customizable push alerts based on database events.' },
      { q: 'What is the standard development cost for a mobile app?', a: 'Mobile development costs depend on feature complexity, API integrations, and database schemas. We offer clear, tiered pricing starting from ₹89,999 for prototypes and ₹2,49,999 for complete omni-channel suites.' },
      { q: 'Can you update the app without resubmitting to the stores?', a: 'Yes, for JavaScript-based frameworks like React Native, we can implement dynamic OTA (Over-The-Air) update systems, allowing us to patch UI bugs and update copy instantly without waiting for App Store approval.' }
    ]
  },
  'srv-3': {
    id: 'srv-3',
    slug: 'ai-machine-learning',
    seoTitle: 'AI Development Company India | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is a leading AI Development Company in Raipur. We build custom LLM, RAG, and Machine Learning systems across Chhattisgarh & India.',
    keywords: 'AI Development Company India, AI Development Company Raipur, Custom Software Development, Software Development Company, MERN Stack, AI Automation, Vector Database, Chhattisgarh',
    h1: 'AI Development Company in India',
    subtitle: 'Custom AI & Machine Learning Systems Company India & Raipur',
    introTitle: 'Integrating Advanced Artificial Intelligence into Business Workflows',
    introduction: 'Artificial Intelligence is shifting from general chatbots to specialized, deterministic cognitive engines. CoreBuild Solutions is a leading AI Development Company in Raipur, engineering custom Machine Learning, Large Language Model (LLM), and Retrieval-Augmented Generation (RAG) vector systems for enterprises across Chhattisgarh and India. We believe that AI should not be a novelty; it should be a functional software layer that automates complex tasks, indexes company databases, and processes natural language requests in milliseconds. As a premier Custom Software Development firm, we design secure RAG pipelines, fine-tune open-source models, install intent-routing gateways, and build quantitative data analytics dashboards. Our systems run within secure cloud firewalls, ensuring that your proprietary enterprise data is kept confidential and protected from public training sets.',
    whyChooseUsTitle: 'Why Partner with CoreBuild Solutions for AI Engineering?',
    whyChooseUsDesc: 'Choosing an AI Development Company India requires a team that understands database querying latency, vector indexing, and cost management. Here is what we offer:',
    whyChooseUsPoints: [
      { title: 'Secure, Isolated RAG Pipelines', desc: 'We build vector database pipelines (using pgvector/Pinecone) that index your company data locally, delivering answers without hallucination.' },
      { title: 'Model Caching & Low Latency', desc: 'By setting up Redis semantic caching, we resolve repeat user intents instantly, reducing API delay and containment costs.' },
      { title: 'Open-Source LLM Fine-Tuning', desc: 'We customize open-source models (like Llama 3) to run on your private servers, eliminating reliance on external APIs.' },
      { title: 'Enterprise Guardrail Integration', desc: 'We build strict instruction-tuning and output filter guardrails to prevent data leakage and ensure system safety.' }
    ],
    processTitle: 'Our AI Development Lifecycle Blueprint',
    processDesc: 'We follow a rigorous engineering workflow to integrate custom machine learning pipelines safely into production:',
    processSteps: [
      { step: '01', title: 'Data Audit & Access Mapping', desc: 'We examine your database schemas, file formats, and security policies to design a safe retrieval blueprint.' },
      { step: '02', title: 'Vector Indexing Setup', desc: 'We set up data pipelines that automatically clean, chunk, embed, and store company files inside private vector databases.' },
      { step: '03', title: 'Semantic Router Design', desc: 'We construct intent classification models that evaluate user prompts and route queries to the correct tools.' },
      { step: '04', title: 'UI Dashboard Construction', desc: 'We build beautiful, glassmorphic React panels that allow your staff to interact with AI outputs, audit logs, and analytics.' },
      { step: '05', title: 'Caching & Guardrails Audit', desc: 'We set up cost containment rules, token limits, semantic Redis caching, and strict model guardrails.' },
      { step: '06', title: 'AWS Cloud Deployment', desc: 'We containerize the AI backend using Docker and deploy to secure AWS ECS or Google Cloud infrastructure.' }
    ],
    techTitle: 'Technologies We Use for AI Systems',
    techDesc: 'We leverage state-of-the-art open-source and API models, ensuring quick data embedding and low token processing costs:',
    techCategories: [
      { name: 'Models & APIs', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3 (Meta)', 'Mistral AI'] },
      { name: 'AI Frameworks', items: ['LangChain', 'LlamaIndex', 'Python', 'FastAPI'] },
      { name: 'Vector Database', items: ['pgvector (PostgreSQL)', 'Pinecone', 'ChromaDB'] },
      { name: 'Security & Hosting', items: ['Docker Containers', 'AWS Bedrock', 'Redis Caching', 'Sentry Logs'] }
    ],
    industriesTitle: 'AI Solutions We Deliver',
    industriesDesc: 'We deploy custom AI capabilities tailored to solve constraints for businesses in Raipur, Chhattisgarh, and India:',
    industries: [
      { name: 'Customer Support Automation', desc: 'AI assistant widgets that query your company docs to resolve 80% of customer questions instantly with cited sources.' },
      { name: 'Natural Language SQL Querying', desc: 'Bespoke semantic tools that allow managers to search inventory databases using conversational English, translating it to SQL.' },
      { name: 'Quantitative Market Prediction', desc: 'Predictive regression algorithms trained on historic market data to forecast sales patterns and automate stock replenishment.' },
      { name: 'Automated Document Audits', desc: 'System nodes that process uploaded contracts, check compliance rules, and flag potential risk clauses in seconds.' }
    ],
    benefitsTitle: 'How Custom AI Boosts Your Operations',
    benefitsDesc: 'Working with a leading Software Development Company to deploy AI delivers substantial operational value:',
    benefits: [
      { title: '80% Reduction in Ticket Load', desc: 'Automating standard customer support queries frees up your team to address high-value sales discussions.' },
      { title: 'Sub-Second Data Discovery', desc: 'Employees can find policy clauses or product specifications instantly using semantic search, eliminating manual file reading.' },
      { title: 'Minimized Operating Costs', desc: 'AI pipelines work 24/7, processing, sorting, and validating data entries at a fraction of manual data processing costs.' },
      { title: 'Data-Driven Decision Making', desc: 'AI predictive models analyze complex telemetry datasets to suggest optimal pricing plans and rebalancing schedules.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We apply elite engineering standards (EEAT) to deliver reliable, enterprise-grade cognitive systems:',
    whyBusinessesChooseUsPoints: [
      { title: 'Strict Data Privacy Guarantee', desc: 'All data is stored in isolated vector databases. Your company data is never passed to public API models for training.' },
      { title: 'Deterministic Output Control', desc: 'We use RAG structures and evaluation test sets to verify citation sources, keeping AI hallucinations under 1%.' },
      { title: 'FastAPI & Redis Architecture', desc: 'Our AI backend is built using Python FastAPI and Redis, keeping response times under 150ms.' },
      { title: 'Full System Control & IP Rights', desc: 'We deliver full codebase files, model configuration parameters, and container credentials to your team.' }
    ],
    faqs: [
      { q: 'Why hire an AI Development Company in Raipur?', a: 'Partnering with a local developer in Raipur, Chhattisgarh, allows you to conduct secure on-site data audits, align closely on compliance parameters, and receive prompt support. CoreBuild Solutions offers local accessibility in Raipur alongside elite, global machine learning engineering standards.' },
      { q: 'How does RAG prevent AI hallucinations?', a: 'Unlike standard chatbots, RAG (Retrieval-Augmented Generation) forces the AI model to query a private vector database containing only your verified company files. The model is instructed to write answers based *only* on the retrieved context, citing exact files and keeping hallucinations under 1%.' },
      { q: 'Is our proprietary business data kept private?', a: 'Yes. We utilize secure private APIs (like Azure OpenAI or AWS Bedrock) which guarantee that your query data is never saved, read, or utilized to train public LLM models.' },
      { q: 'Can we run LLMs on our own local servers?', a: 'Yes. We can deploy and optimize lightweight open-source models (such as Llama 3 or Mistral) on your private cloud servers or local GPU hardware, eliminating recurring API token costs.' },
      { q: 'How do you keep LLM API token costs from spiraling?', a: 'We set up semantic caching layers (using Redis) to resolve repeat query intents locally without invoking the LLM API. We also implement user usage limits, token caps, and run simpler tasks on cheaper models.' },
      { q: 'How long does it take to integrate a custom AI agent?', a: 'A standard AI agent integration takes between 6 to 10 weeks, depending on data formats, vector pipeline setup, and dashboard requirement parameters.' },
      { q: 'Can you train a model on our specific company voice?', a: 'Yes. We clean, format, and prepare dataset files representing your company\'s historic customer responses to run fine-tuning jobs on models, aligning their tone and vocabulary with your brand.' }
    ]
  }
};
