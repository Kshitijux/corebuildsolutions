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
    seoTitle: 'Web Development Company in Raipur | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is a leading Web Development Company in Raipur. We build custom React/MERN stack web applications and portals in Chhattisgarh and India.',
    keywords: 'Web Development Company in Raipur, Software Development Company in Chhattisgarh, web developer Raipur, custom website Raipur, MERN stack Raipur, web design Raipur, IT company Chhattisgarh, Web Development Services in Raipur, Custom Web Apps in Raipur, Web App Developers in Raipur',
    h1: 'Web Development Company in Raipur',
    subtitle: 'Custom Web Application Development Company in Raipur & Chhattisgarh',
    introTitle: 'Engineering Premium High-Performance Web Applications That Drive Business Growth',
    introduction: 'In a digital marketplace crowded with generic, slow-loading templates, CoreBuild Solutions stands out as the premier Web Development Company in Raipur. We engineer custom web applications across Chhattisgarh and India. We understand that your web presence is not just a digital brochure; it is the core transaction engine of your business growth. As a specialized Custom Software Development firm, we bypass the bloated libraries of traditional drag-and-drop website builders. Instead, we engineer fast, secure, and responsive web applications utilizing React.js, Vite, and the complete MERN Stack. Our mission is to solve complex business operations, streamline user navigation, and maximize lead conversion rates for enterprises demanding elite digital execution. Whether you are a local manufacturing group in Urla seeking digital modernization, a retail store in Jaistambh Chowk looking to launch online sales, or a startup in Raipur seeking global scalability, our software engineers provide the technical sophistication needed to succeed. We integrate secure database endpoints, scale serverless APIs, and write clean, modular TypeScript code that ensures your digital infrastructure remains future-proof.',
    whyChooseUsTitle: 'Why Choose CoreBuild Solutions for Web Engineering?',
    whyChooseUsDesc: 'Choosing the right Web Development Company in Raipur is a critical decision that dictates your long-term scalability, search rankings, and page-load speed. Here is how our engineering team delivers premium results:',
    whyChooseUsPoints: [
      { title: 'Sub-Second Page Load Optimization', desc: 'Every application we compile is optimized for Google\'s Core Web Vitals, achieving a 95+ PageSpeed score. This ensures that users on mobile networks in Raipur load your site in under 0.8 seconds, directly improving retention.' },
      { title: 'Decoupled Server Architectures', desc: 'We build frontends using React and Vite, communicating with backend microservices via REST and GraphQL APIs. This decouples logic, protects database keys, and ensures seamless interface renders.' },
      { title: 'Strict Type Safety with TypeScript', desc: 'By writing strictly-typed TypeScript code, we eliminate runtime errors and compile bugs, delivering scalable and secure software models that match international enterprise standards.' },
      { title: 'Premium Responsive UI Design', desc: 'Our layouts utilize elegant typography, generous whitespace padding, and clean grids designed to match your brand prestige. We never use cheap pre-made templates.' }
    ],
    processTitle: 'Our Software Development Lifecycle Blueprint',
    processDesc: 'As an experienced Software Development Company in Chhattisgarh, we follow a rigorous, 6-stage engineering process that ensures transparent timelines and robust deliverables:',
    processSteps: [
      { step: '01', title: 'Discovery & Schema Mapping', desc: 'We audit your business processes, define user personas, map relational database schemas, and align specifications to ensure maximum technical feasibility.' },
      { step: '02', title: 'Luxury UI/UX Prototyping', desc: 'We design high-fidelity interactive wireframes in Figma, mapping out gesture interactions, hover animations, and dark/light modes for your approval.' },
      { step: '03', title: 'Modular Engineering Sprint', desc: 'Our developers build the codebase in dual-week sprints, writing clean TypeScript code backed by automated unit tests and strict code reviews.' },
      { step: '04', title: 'API Integration & Caching', desc: 'We connect database adaptors, integrate secure payment platforms (Stripe/Razorpay), and set up Redis caching layers to speed up query response times.' },
      { step: '05', title: 'Edge CDN Deployment', desc: 'We compile, minify, and deploy the application to global Edge CDN networks (Vercel/AWS), implementing security headers and WebP/AVIF image compression.' },
      { step: '06', title: 'Hypercare Support & Telemetry', desc: 'We activate continuous telemetry logs (Sentry/Datadog) and provide 3 months of immediate post-launch priority support to ensure absolute system stability.' }
    ],
    techTitle: 'Technologies We Use for Custom Development',
    techDesc: 'We construct applications on a modern MERN Stack and serverless tech stack, optimizing every query for speed, security, and search engine crawlability:',
    techCategories: [
      { name: 'Frontend Tech', items: ['React.js', 'Vite', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Redux Toolkit'] },
      { name: 'Backend & APIs', items: ['Node.js', 'Express', 'FastAPI', 'Python', 'GraphQL', 'REST APIs'] },
      { name: 'Database & Cache', items: ['PostgreSQL', 'Prisma ORM', 'MongoDB', 'Redis Caching', 'Supabase Client'] },
      { name: 'Cloud & Edge hosting', items: ['Vercel Edge CDN', 'AWS CloudFront', 'Docker Containers', 'GitHub Actions CI/CD'] }
    ],
    industriesTitle: 'Industries We Serve Across Chhattisgarh',
    industriesDesc: 'We engineer custom web applications that solve specific industry constraints, working with businesses in Raipur, Chhattisgarh, and globally:',
    industries: [
      { name: 'Manufacturing & Urla Industries', desc: 'Custom inventory systems, production trackers, and local supply chain dashboards for manufacturing groups in Raipur.' },
      { name: 'Real Estate & Properties', desc: 'WebGL 3D walkthroughs, geospatial map queries (Mapbox API), and automated AI-driven property valuation portals.' },
      { name: 'Quantitative FinTech & Banking', desc: 'High-frequency dashboard metrics, secure WebSocket real-time data syncs, and Canvas-based interactive financial charting.' },
      { name: 'B2B Enterprise SaaS', desc: 'Multi-tenant role permissions, custom database CMS dashboards, and automated lead capture integration with CRM hubs.' }
    ],
    benefitsTitle: 'Measurable Business Benefits of Our Code',
    benefitsDesc: 'We do not just write code; we deliver high-performance digital assets that yield measurable growth for your business channels:',
    benefits: [
      { title: 'Lower Customer Acquisition Cost', desc: 'Fast pages lower your Google Ads bounce rates and raise your organic keyword quality scores, reducing overall ad spend.' },
      { title: 'Increased Search Rankings', desc: 'By delivering pre-rendered, lightweight HTML shells, Googlebot crawls and indexes your services in seconds, boosting rankings.' },
      { title: 'Higher User Conversion Rate', desc: 'Websites loading in under 1 second see a 3x higher conversion rate than template pages loading in 3 seconds. Speed is revenue.' },
      { title: 'Future-Proof Codebase', desc: 'Our clean, modular React component architecture allows you to scale, add, and modify features without starting from scratch.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Businesses Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We align with the highest quality standards (EEAT) to deliver premium services that business owners trust:',
    whyBusinessesChooseUsPoints: [
      { title: 'ISO & Security Compliance', desc: 'Our engineering models follow secure data handling practices, protecting proprietary database scripts and private user tokens.' },
      { title: 'Experienced Technical Leads', desc: 'Every line of code is reviewed by senior engineers with years of experience in enterprise systems and database architectures.' },
      { title: 'Client-Focused Consulting', desc: 'We take the time to learn your business processes, mapping solutions that directly reduce manual labor and optimize revenue.' },
      { title: 'Completely Transparent Contracts', desc: 'No hidden hosting fees, no proprietary CMS lock-ins. You own 100% of the custom codebase and database configurations.' }
    ],
    faqs: [
      { q: 'Why should I choose a Custom Web Development Company in Raipur?', a: 'Choosing a local developer in Raipur, Chhattisgarh, allows for direct, face-to-face consulting, clear alignment on project requirements, and reliable long-term support. CoreBuild Solutions combines local accessibility in Chhattisgarh with elite, international-standard web engineering practices, serving clients across India and globally. We can sit down with your team to review database structures and design systems, ensuring a perfect fit.' },
      { q: 'What is MERN Stack Development and why do you use it?', a: 'MERN Stack stands for MongoDB, Express, React, and Node.js. It is a highly popular, modern javascript stack. We utilize it because it allows for fast, decoupled frontend rendering paired with a scalable backend database, eliminating slow page reloads and bloating. It is the gold standard for high-performance dashboards and SaaS products.' },
      { q: 'How does custom web development improve search rankings (SEO)?', a: 'Custom web development allows us to output lightweight, semantic HTML structures, configure canonical tags, customize Open Graph social headers, and implement schema scripts. By avoiding heavy themes and templates, we ensure that search engine crawlers can index your keywords instantly, helping you rank for terms like "website development in Raipur" and "Software Development Company in Chhattisgarh".' },
      { q: 'Will the website be optimized for mobile screens?', a: 'Absolutely. Every layout is developed following mobile-first design practices, ensuring text, buttons, and graphics render beautifully on smartphones, tablets, and desktop computers. This is critical for Google rankings, as mobile-friendly pages are prioritized.' },
      { q: 'Do we receive support after the website is launched?', a: 'Yes. We provide 3 months of priority support (Hypercare) to resolve technical queries, monitor telemetry logs, and make minor updates. We also offer monthly support plans for database maintenance, security upgrades, and routine backups.' },
      { q: 'Can you integrate payment checkouts like Stripe or Razorpay?', a: 'Yes. We regularly set up secure payment configurations (Stripe, Razorpay, PayU, Apple/Google Pay), managing webhooks to handle reservation synchronization and user account upgrades automatically. We ensure PCI-DSS compliance for all transactions.' },
      { q: 'Do you sign Non-Disclosure Agreements (NDAs)?', a: 'Yes. We prioritize security and privacy. We sign NDAs before project discovery, ensuring that your business models, database schemas, and proprietary code remain confidential. Your IP is fully protected with us.' }
    ]
  },
  'srv-2': {
    id: 'srv-2',
    slug: 'mobile-app-development',
    seoTitle: 'Mobile App Development Company in Raipur | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is a premier Mobile App Development Company in Raipur. We build high-performance, native iOS & Android apps across Chhattisgarh & India.',
    keywords: 'Mobile App Development Company in Raipur, Software Development Company in Chhattisgarh, Android app developer Raipur, iOS app developer Raipur, React Native Chhattisgarh, hybrid mobile apps Raipur, Mobile App Development in Raipur, App Developers in Raipur, iOS Android Apps Raipur',
    h1: 'Mobile App Development Company in Raipur',
    subtitle: 'Custom Mobile App Development Company in Raipur & Chhattisgarh',
    introTitle: 'Engineering Fluid Native-Feeling iOS and Android Applications',
    introduction: 'In a mobile-first world, a slow application is a direct loss of business. CoreBuild Solutions is the leading Mobile App Development Company in Raipur, crafting fluid cross-platform applications for clients across Chhattisgarh and India. We specialize in React Native and Flutter frameworks, combined with custom Swift and Kotlin bridges. This hybrid approach enables us to deliver native-level performance, hardware acceleration, and biometric access while maintaining a unified codebase. As a premier Software Development Company in Chhattisgarh, we solve complex mobile constraints, including offline data synchronization, local SQLite caching, push notification servers, and secure mobile payment gateways. From high-end concierge apps to robust enterprise portals, our engineers deliver the responsiveness and security that today\'s mobile users demand. We ensure your application is built to handle low-bandwidth areas in Chhattisgarh, keeping user data synchronized via background service nodes.',
    whyChooseUsTitle: 'Why Partner with CoreBuild Solutions for Mobile Apps?',
    whyChooseUsDesc: 'Selecting a Mobile App Development Company in Raipur demands a team that understands hardware limitations, battery optimization, and memory profiles. Here is why we stand out:',
    whyChooseUsPoints: [
      { title: 'Fluid 120 FPS Animations', desc: 'We utilize hardware-accelerated rendering pipelines to keep screen transitions, gestures, and animations running at a smooth 120 frames per second on both iOS and Android.' },
      { title: 'Offline-First Capabilities', desc: 'Our mobile apps are built with local SQLite/WatermelonDB storage, allowing users to perform operations offline and auto-sync when online without data loss.' },
      { title: 'Native Swift & Kotlin Bridges', desc: 'For deep hardware integration (camera, Bluetooth, biometrics), we write custom native modules, avoiding third-party dependency bloat.' },
      { title: 'App Store Submission Care', desc: 'We handle the entire setup, compliance check, and listing process for both Apple App Store Connect and Google Play Console, ensuring quick approvals.' }
    ],
    processTitle: 'Our Mobile Development Lifecycle Blueprint',
    processDesc: 'We follow a structured, 6-phase agile delivery timeline to deploy your native-feeling mobile applications:',
    processSteps: [
      { step: '01', title: 'Requirements & Wireframing', desc: 'Outlining user journeys, layout hierarchies, navigation trees, and offline data synchronization needs.' },
      { step: '02', title: 'High-Fidelity UI Design', desc: 'Designing interactive mockups in Figma, focusing on thumb-friendly layouts and smooth gesture transitions.' },
      { step: '03', title: 'Native Framework Setup', desc: 'Initializing React Native or Flutter structures with strict TypeScript controls and state management.' },
      { step: '04', title: 'Hardware & API Integration', desc: 'Connecting device sensors, camera features, biometric locks (FaceID), and REST/GraphQL backend APIs.' },
      { step: '05', title: 'Beta Testing & QA Sprints', desc: 'Running test builds on TestFlight and Google Play Beta, checking performance logs, memory leaks, and crash metrics.' },
      { step: '06', title: 'Store Publishing & Launch', desc: 'Publishing the apps, setting up metadata, configuring push notifications, and monitoring performance logs.' }
    ],
    techTitle: 'Mobile Technologies We Master',
    techDesc: 'We construct mobile applications using high-performance frameworks and libraries:',
    techCategories: [
      { name: 'Frameworks', items: ['React Native', 'Flutter', 'Swift (iOS)', 'Kotlin (Android)'] },
      { name: 'State & Caching', items: ['Redux Toolkit', 'Zustand', 'Zod Validation', 'TypeScript'] },
      { name: 'Local Database', items: ['SQLite', 'WatermelonDB', 'MMKV Storage'] },
      { name: 'Services & APIs', items: ['Firebase FCM', 'APNs Push', 'Stripe Pay', 'Razorpay SDK'] }
    ],
    industriesTitle: 'Mobile Applications We Build',
    industriesDesc: 'We construct customized mobile solutions for different niches across Chhattisgarh and India:',
    industries: [
      { name: 'Luxury Booking & Concierge', desc: 'Real-time booking apps with seat selections, push notification alerts, and secure in-app payments.' },
      { name: 'Local Delivery & Geolocation', desc: 'Background location tracking, map integrations, routing calculations, and delivery validation systems.' },
      { name: 'FinTech & Cryptography', desc: 'Secure wallets with biometric encryption, transaction histories, and instant payment validation.' },
      { name: 'Enterprise SaaS Companions', desc: 'Mobile portals for CRM, sales, and employee shift tracking in remote locations.' }
    ],
    benefitsTitle: 'How Our Mobile Apps Help Your Business',
    benefitsDesc: 'We design applications that boost user retention and build long-term brand value:',
    benefits: [
      { title: 'Direct Customer Connection', desc: 'Push notifications let you communicate offers, updates, and reminders directly to your users\' lock screens.' },
      { title: 'Superior User Experience', desc: 'A mobile app provides faster loading and smoother transitions than mobile browser tabs, maximizing conversions.' },
      { title: 'Better Customer Loyalty', desc: 'Loyalty programs, custom profiles, and in-app support build customer trust and encourage repeat bookings.' },
      { title: 'Valuable Analytics Logs', desc: 'Track screen times, user clicks, and dropoff spots to understand how users interact with your brand.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We build high-performance mobile apps following strict quality guidelines:',
    whyBusinessesChooseUsPoints: [
      { title: 'Clean Architecture Coding', desc: 'Our mobile apps are built with modular codebases, making updates, scale-ups, and edits easy.' },
      { title: 'Store Listing Compliance', desc: 'We align with the latest Apple Human Interface and Google Material Design guidelines for quick store approval.' },
      { title: 'Continuous Telemetry Logs', desc: 'We integrate crash reporting tools to monitor performance and resolve bugs immediately.' },
      { title: '100% Platform Ownership', desc: 'No vendor lock-ins. You own the complete repository and code assets forever.' }
    ],
    faqs: [
      { q: 'Why hire a Mobile App Developer in Raipur?', a: 'Working with a local Raipur mobile developer allows you to review interactive Figma wireframes, coordinate user testing, and align backend APIs in person. CoreBuild Solutions combines local consulting in Chhattisgarh with international coding standards.' },
      { q: 'What is the difference between React Native and Native Apps?', a: 'React Native compiles JavaScript code into native platform widgets, allowing us to build both iOS and Android apps from a single codebase. This reduces development time and costs by 40% while delivering native-level rendering speed.' },
      { q: 'Will the app work when the user is offline?', a: 'Yes. We implement offline-first architectures using local SQLite databases. The app saves user actions locally and automatically synchronizes them with the cloud database once a network connection is detected.' },
      { q: 'How long does it take to publish an app on the App Store?', a: 'Typically, app reviews take 2 to 5 days for the Apple App Store and 3 to 7 days for the Google Play Store. We handle all compliance logs and metadata submissions to ensure a smooth launch.' },
      { q: 'Do you provide backend APIs for the mobile apps?', a: 'Yes. We build secure REST or GraphQL backend APIs using Node.js or Python, integrated with PostgreSQL or MongoDB databases to power your app\'s data requirements.' },
      { q: 'Can you integrate push notifications?', a: 'Yes. We configure push notifications using Firebase Cloud Messaging (FCM) and Apple Push Notification service (APNs), allowing you to trigger alerts based on user actions.' },
      { q: 'How do you secure payment checkouts in mobile apps?', a: 'We integrate secure, SDK-based checkouts (Razorpay, Stripe, Google Pay, Apple Pay) that process credit cards and UPI directly, ensuring that sensitive data never hits our servers.' }
    ]
  },
  'srv-3': {
    id: 'srv-3',
    slug: 'ai-machine-learning',
    seoTitle: 'AI Development Company in Raipur | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is the leading AI Development Company in Raipur. We build custom RAG pipelines, LLM integrations, and machine learning systems in Chhattisgarh.',
    keywords: 'AI Development Company in Raipur, Software Development Company in Chhattisgarh, machine learning Raipur, RAG chatbot Chhattisgarh, LLM integration Raipur, custom AI solutions India, AI Automation in Raipur, Machine Learning Raipur, ChatGPT integration Raipur',
    h1: 'AI Development Company in Raipur',
    subtitle: 'Custom LLM, RAG & Cognitive Machine Learning Systems in Chhattisgarh',
    introTitle: 'Engineering State-of-the-Art Cognitive AI Systems That Automate Operations',
    introduction: 'Artificial Intelligence is shifting from generic chat templates to highly custom, data-grounded operations. CoreBuild Solutions is the first dedicated AI Development Company in Raipur, delivering Retrieval-Augmented Generation (RAG), semantic routing, and predictive machine learning models to enterprises across Chhattisgarh and India. We believe that generic chatbots fail to deliver brand value; instead, we build systems that query your private database schemas, extract insights from uploaded PDF blueprints, and automate repetitive customer support queries with cited sources. As a premier Software Development Company in Chhattisgarh, we bridge the gap between complex neural architectures and business applications, helping companies build custom administrative panels that query data using natural conversational English. We deploy secure LLM models locally or via AWS Bedrock to ensure that your sensitive company data remains fully private.',
    whyChooseUsTitle: 'Why Choose CoreBuild Solutions for AI Engineering?',
    whyChooseUsDesc: 'Integrating AI requires a team that understands vector search parameters, token costs, and security compliance. Here is why enterprise teams partner with us:',
    whyChooseUsPoints: [
      { title: 'Custom RAG Pipelines', desc: 'We build Retrieval-Augmented Generation (RAG) structures using pgvector and Pinecone, grounding LLM drafts in your private company guides to eliminate hallucinations.' },
      { title: 'Token & Cost Optimization', desc: 'We implement semantic caching (Redis) and routing gates, running simple queries on open-source Llama models and reserving Claude for complex reasoning.' },
      { title: 'Absolute Data Privacy', desc: 'We isolate data pipelines. Your company PDFs, database logs, and customer inputs are never used to train public LLM models.' },
      { title: 'Semantic Intent Gateways', desc: 'We build natural language routers that evaluate user intents and coordinate with dynamic microservices to trigger actions without coding.' }
    ],
    processTitle: 'Our AI Development Lifecycle Blueprint',
    processDesc: 'We follow a rigorous, 6-phase engineering lifecycle to design and deploy cognitive AI systems:',
    processSteps: [
      { step: '01', title: 'Data Audit & Schema Mapping', desc: 'Auditing your private company logs, FAQ files, and data structures to map out vector database schemas.' },
      { step: '02', title: 'RAG Pipeline Design', desc: 'Configuring document chunking, indexing parameters, embedding models, and vector database adapters.' },
      { step: '03', title: 'Cognitive Model Tuning', desc: 'Selecting base models (GPT-4o, Claude 3.5, Llama 3), writing prompt templates, and tuning system variables.' },
      { step: '04', title: 'Dashboard Interface Sprint', desc: 'Building custom React control panels where administrators can query the AI, review logs, and manage document indexes.' },
      { step: '05', title: 'API Security & Audits', desc: 'Running token limit checks, setting rate limit controls, and implementing role-based access policies.' },
      { step: '06', title: 'Cloud Deploy & Monitoring', desc: 'Deploying backend services via Docker on AWS ECS, setting up caching filters, and monitoring query accuracy.' }
    ],
    techTitle: 'Cognitive AI Tech Stack We Deploy',
    techDesc: 'We construct AI systems using modern machine learning libraries and vector environments:',
    techCategories: [
      { name: 'Models & APIs', items: ['OpenAI GPT-4o', 'Claude 3.5 Sonnet', 'Llama 3 (Meta)', 'Mistral AI'] },
      { name: 'AI Frameworks', items: ['LangChain', 'LlamaIndex', 'Python', 'FastAPI'] },
      { name: 'Vector Database', items: ['pgvector (PostgreSQL)', 'Pinecone', 'ChromaDB'] },
      { name: 'Security & Hosting', items: ['Docker Containers', 'AWS Bedrock', 'Redis Caching', 'Sentry Logs'] }
    ],
    industriesTitle: 'Bespoke AI Solutions We Deliver',
    industriesDesc: 'We build AI systems that solve specific operational challenges for companies in Chhattisgarh:',
    industries: [
      { name: 'Support Automation Widgets', desc: 'AI customer widgets that search company guides to resolve 80% of support tickets instantly with cited sources.' },
      { name: 'Natural Language SQL Querying', desc: 'Query databases using plain English; the AI translates it to SQL, runs the query, and presents charts.' },
      { name: 'Manufacturing Forecasts', desc: 'Trained regression models that evaluate historical sales and inventory datasets to automate stock reorders.' },
      { name: 'Automated Document Audits', desc: 'Custom systems that parse contracts or financial statements, flag compliance risks, and check rules in seconds.' }
    ],
    benefitsTitle: 'Measurable Business Growth with Custom AI',
    benefitsDesc: 'We build AI systems designed to reduce manual labor and optimize customer experiences:',
    benefits: [
      { title: 'Reduced Operational Overheads', desc: 'Automating inventory tasks and support queries reduces manual labor, saving your team hundreds of hours weekly.' },
      { title: 'Sub-Second Customer Answers', desc: 'AI widgets resolve customer questions in seconds, increasing customer satisfaction and conversion rates.' },
      { title: 'Data-Driven Business Intel', desc: 'Automated document analysis and forecasting models provide managers with accurate projections to guide decisions.' },
      { title: 'Unified Data Repositories', desc: 'Vector databases ground your unstructured data (PDFs, docs, emails) into a searchable, usable corporate brain.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We deliver AI solutions under strict quality controls and data guidelines:',
    whyBusinessesChooseUsPoints: [
      { title: 'Strict Safety Frameworks', desc: 'We implement prompt guardrails and filters to prevent jailbreaks, injection attacks, and inappropriate responses.' },
      { title: 'Model-Agnostic Setup', desc: 'We build interfaces that connect with any model API, allowing you to swap LLMs without re-coding.' },
      { title: 'Active Telemetry Monitoring', desc: 'We track token usage, query latency, and accuracy metrics to keep running costs low.' },
      { title: 'Full IP Ownership', desc: 'You own 100% of the custom codebase, prompt templates, and vector databases.' }
    ],
    faqs: [
      { q: 'Why hire an AI Development Company in Raipur?', a: 'Partnering with a local Raipur AI agency allows you to coordinate system design reviews, review data privacy constraints, and verify model outputs in person. CoreBuild Solutions is the pioneer of custom AI integrations in Chhattisgarh.' },
      { q: 'What is RAG (Retrieval-Augmented Generation)?', a: 'RAG is a system architecture that connects an LLM to a private database or document folder. When a user asks a question, the system searches the vector database for matching details, passes them to the LLM as context, and prompts the LLM to write an answer based ONLY on the retrieved details.' },
      { q: 'Will our company data remain private?', a: 'Absolutely. We use enterprise-grade APIs (like OpenAI Enterprise or AWS Bedrock) that guarantee your data, files, and queries are never saved, shared, or used for model training. Your data is isolated.' },
      { q: 'Can the AI translate plain English into SQL queries?', a: 'Yes. We build semantic translation tools that parse natural language (e.g., "Show me the top-selling items in Urla last month"), translate it to a secure SQL query, execute it against your database, and display the results in interactive charts.' },
      { q: 'How do you control LLM running costs?', a: 'We set up semantic caching using Redis to cache repeat intents locally. We also build router gateways that send simple commands to cheaper open-source models, saving expensive Claude calls for complex tasks.' },
      { q: 'What is a vector database?', a: 'A vector database (like Pinecone or pgvector) stores unstructured data (like paragraphs or PDFs) as mathematical vectors. This allows the system to run high-speed searches based on meaning rather than just keyword matches.' },
      { q: 'How long does it take to deploy a custom RAG chatbot?', a: 'A custom RAG pipeline integrated with your company files and a React UI dashboard takes between 6 to 10 weeks to build, test, and deploy, depending on dataset sizes.' }
    ]
  },
  'srv-4': {
    id: 'srv-4',
    slug: 'e-commerce-development',
    seoTitle: 'E-commerce Website Development in Raipur | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is the best E-commerce Website Development Company in Raipur. We build high-converting, sub-second checkout online stores in Chhattisgarh.',
    keywords: 'E-commerce Website Development in Raipur, Web Development Company in Raipur, e-commerce developer Raipur, online shop builder Chhattisgarh, Shopify headless Raipur, WooCommerce Raipur, Shopify Developers in Raipur, Online Store Design Raipur',
    h1: 'E-commerce Website Development in Raipur',
    subtitle: 'High-Converting Online Storefronts Engineered for Speed & Scale in Chhattisgarh',
    introTitle: 'Engineering High-Throughput E-commerce Architecture That Drives Sales',
    introduction: 'In online retail, every 100ms of page load latency degrades sales conversion rates by 7%. CoreBuild Solutions is the leading E-commerce Website Development Company in Raipur, crafting custom online storefronts for brands in Chhattisgarh and across India. We bypass slow templates and heavy page-builder scripts. Instead, we build high-performance e-commerce platforms utilizing headless architectures—combining custom React.js frontends with headless engines like Shopify Storefront API or WooCommerce. This decoupled structure ensures that product listings, detail pages, and filters load instantly, providing a seamless checkout experience. As a premier Web Development Company in Raipur, we optimize image pipelines, manage cart states locally using Zustand, integrate secure local payment gateways (Razorpay, Paytm), and set up global edge caching. Whether you run a luxury lifestyle brand or a bulk industrial supply company in Raipur, we build online shops designed to maximize customer dwell times and minimize checkout abandonment.',
    whyChooseUsTitle: 'Why Choose CoreBuild for E-commerce Development?',
    whyChooseUsDesc: 'Ordinary shop builders cause heavy page load lag that increases cart abandonment. Here is how we build different storefronts:',
    whyChooseUsPoints: [
      { title: 'Sub-Second Product Listing Renders', desc: 'We pre-render all catalogs on global Edge CDNs to ensure listings load instantly when users browse, even on slow mobile networks in Chhattisgarh.' },
      { title: 'Decoupled Store Carts', desc: 'We build client-side cart managers using Zustand to allow instant add-to-cart operations without database reload delays, providing a fluid shopping flow.' },
      { title: 'Integrated Payment Gateways', desc: 'Secure integrations with Stripe, Razorpay, Paytm, and Google/Apple Pay directly into the checkout layout, minimizing step counts.' },
      { title: 'Headless Engine Flex', desc: 'By separating frontend design from the backend database, we allow you to customize UI layouts without breaking the inventory sync systems.' }
    ],
    processTitle: 'Our E-commerce Development Lifecycle Blueprint',
    processDesc: 'We follow a structured, 4-phase agile delivery timeline to deploy your custom online storefront:',
    processSteps: [
      { step: '01', title: 'Data Schema Mapping', desc: 'Designing database models for products, variations, categories, inventory levels, and customer order logs.' },
      { step: '02', title: 'Luxury Visual Checkout UX', desc: 'Crafting responsive product display grids, single-page checkouts, filter panels, and clear checkout states.' },
      { step: '03', title: 'Headless CMS Integration', desc: 'Configuring Shopify Headless or WooCommerce backends with a custom React frontend wrapper and API routes.' },
      { step: '04', title: 'Gateway Audits & Launch', desc: 'Testing payment webhooks, running transactional security reviews, deploying CDN edge caches, and launching the store.' }
    ],
    techTitle: 'Technologies We Use for E-commerce Platforms',
    techDesc: 'We build storefronts using high-performance headless architectures and libraries:',
    techCategories: [
      { name: 'Frontend', items: ['React.js', 'Vite', 'Tailwind CSS', 'Zustand State'] },
      { name: 'Headless Engines', items: ['Shopify Storefront API', 'WooCommerce Headless', 'Strapi CMS'] },
      { name: 'Payments', items: ['Stripe API', 'Razorpay SDK', 'Apple Pay, Google Pay'] },
      { name: 'Hosting', items: ['Vercel Edge CDN', 'AWS CloudFront', 'Docker Nodes'] }
    ],
    industriesTitle: 'Storefront Types We Deliver',
    industriesDesc: 'We build high-converting storefronts for retail brands, wholesale vendors, and SaaS teams in Raipur, Chhattisgarh:',
    industries: [
      { name: 'B2C Luxury Retail', desc: 'Stunning displays, smooth damping scroll motions, custom hover glows, and single-click checkout states.' },
      { name: 'B2B Wholesale Platforms', desc: 'Custom wholesale role permissions, bulk order forms, automated invoice delivery, and credit limit validations.' },
      { name: 'Digital Subscriptions', desc: 'Automated subscription billing cycles, client account dashboards, content paywalls, and customer billing histories.' },
      { name: 'Multi-Vendor Marketplaces', desc: 'Bespoke seller onboarding panels, product approval dashboards, split-payment gateways, and delivery tracking integrations.' }
    ],
    benefitsTitle: 'Measurable Storefront ROI',
    benefitsDesc: 'We build storefronts that directly improve sales conversions and lower customer acquisition costs:',
    benefits: [
      { title: 'Reduced Cart Abandonment', desc: 'By making checkout single-page, responsive, and secure, customer dropoff is minimized, raising sales.' },
      { title: 'Lighthouse Page Speed Boost', desc: 'Fast product listing renders mean higher organic rankings and cheaper Google Ads traffic costs (better Quality Score).' },
      { title: 'Decoupled Server Scaling', desc: 'Decoupled storefront architecture scales independently, preventing server crashes during high-traffic festival sales.' },
      { title: 'Unified Inventory Feeds', desc: 'Sync inventory across Shopify, Amazon, and offline store ERP databases, preventing overselling errors.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We deliver custom storefronts with full ownership and high technical execution standards:',
    whyBusinessesChooseUsPoints: [
      { title: '100% Platform Ownership', desc: 'You own the complete custom React storefront code, database schema, and design files forever.' },
      { title: 'Advanced Analytics Logs', desc: 'Integrated tracking scripts (Google Analytics, Meta Pixel, Hotjar) to analyze checkout funnels and conversion dropoffs.' },
      { title: 'SEO-Friendly Catalog Structure', desc: 'Lightweight HTML, schema tags, breadcrumbs, and alt descriptions to rank product pages organically.' },
      { title: 'Continuous Security Monitoring', desc: 'We implement SSL certificates, secure CORS headers, and PCI-DSS compliant checkout integrations.' }
    ],
    faqs: [
      { q: 'Why hire an E-commerce Developer in Raipur?', a: 'Partnering with a Raipur website developer allows for face-to-face strategizing, local support, and payment gateway alignment. We help you choose the best configurations for Raipur and Chhattisgarh payment preferences, including local UPI channels.' },
      { q: 'What is a Headless E-commerce Store?', a: 'A headless store separates the frontend design from the backend commerce engine. This allows the catalog listings to load instantly on the client side, while the checkout and inventory management run securely on the server.' },
      { q: 'Can you integrate local payment gateways like Razorpay or Paytm?', a: 'Yes. We regularly integrate Razorpay, Paytm, PayU, and CCAvenue gateways. We configure webhooks to ensure orders are updated in the database even if the user closes the browser before redirecting.' },
      { q: 'How do you handle product inventory synchronization?', a: 'For headless stores, we link the React frontend to Shopify or WooCommerce APIs. This ensures that inventory levels update automatically across your backend panels, avoiding overselling.' },
      { q: 'Do you design custom checkout pages?', a: 'Yes. We design custom, single-page checkouts that eliminate unnecessary fields, simplify address inputs, and make payment method selection visual, reducing abandonment rates.' },
      { q: 'Can you optimize images for large catalogs?', a: 'Yes. We implement automated image processing pipelines. Product photos are automatically resized, optimized to WebP or AVIF formats, and served via CDN nodes.' },
      { q: 'Will the website support multi-currency and multi-language?', a: 'Yes. We build storefronts with localized currency translation and multi-language routing to support both local Indian markets and global international buyers.' }
    ]
  },
  'srv-5': {
    id: 'srv-5',
    slug: 'ui-ux-design',
    seoTitle: 'UI/UX Design Company in Raipur | CoreBuild Solutions',
    metaDescription: 'CoreBuild Solutions is the premier UI/UX Design Company in Raipur, Chhattisgarh. We design high-fidelity app interfaces, interactive wireframes, and responsive website layouts.',
    keywords: 'UI/UX Design Company in Raipur, Web Development Company in Raipur, UI UX designer Raipur, web designer Raipur Chhattisgarh, Figma prototype Raipur, mobile app interface design, UI UX Design in Raipur, Figma UI Designer in Raipur',
    h1: 'UI/UX Design Company in Raipur',
    subtitle: 'Stunning Digital Interfaces Engineered for Visual Excellence & Conversion in Chhattisgarh',
    introTitle: 'Designing Luxury Digital Interfaces That Build Brand Equity & Lower User Friction',
    introduction: 'When high-ticket consumers visit your digital portal, they make an aesthetic judgment in less than 50 milliseconds. CoreBuild Solutions is the premier UI/UX Design Company in Raipur, crafting high-fidelity interface systems for startups and enterprises demanding visual authority across Chhattisgarh and India. We avoid generic, bloated templates that dilute brand value. Instead, we design bespoke digital interfaces in Figma, balancing generous negative space, editorial typography, and high-damping micro-animations. As a specialized Web Development Company in Raipur, we understand that design is not just how a system looks, but how it works. We align interface hierarchies with user psychology, creating smooth onboarding flows, clean data dashboards, and clear call-to-action paths that lower customer acquisition costs. From wireframes to fully documented design systems, our team ensures your software exudes premium craft.',
    whyChooseUsTitle: 'Why Choose Our UI/UX Design Studio?',
    whyChooseUsDesc: 'We design interfaces that balance artistic beauty with technical feasibility and conversion performance:',
    whyChooseUsPoints: [
      { title: 'Whitespace as a Luxury Asset', desc: 'Just as luxury boutiques leave vast floor spaces empty, we use generous section padding (typically 120px to 160px) to give content breathing room and emphasize headers.' },
      { title: 'Typographic Authority Scale', desc: 'We pair high-end editorial display fonts with robust line-heights and geometric sans-serif body copies, creating a structural confidence that builds brand trust.' },
      { title: 'Choreographed Spring Motion', desc: 'We design micro-motions using high-damping spring physics. Buttons do not pop; they expand smoothly and glow slightly, responding to inputs like liquid glass.' },
      { title: 'Strict Component Systems', desc: 'We build fully documented design systems in Figma using auto-layout, nested components, and variables, ensuring a seamless handoff to developers.' }
    ],
    processTitle: 'Our UI/UX Design Lifecycle Blueprint',
    processDesc: 'We translate product requirements into premium visual guides across 4 structured phases:',
    processSteps: [
      { step: '01', title: 'Moodboard & Strategy', desc: 'Auditing your brand guidelines, detailing color schemes, selecting typography scales, and compiling visual inspiration boards.' },
      { step: '02', title: 'Interactive Wireframing', desc: 'Creating structural layout wireframes in Figma to test user navigation maps, content grids, and overall information hierarchy.' },
      { step: '03', title: 'High-Fidelity UI Design', desc: 'Applying color theories, luxury UI elements, typography weights, and custom graphics to create pixel-perfect screen designs.' },
      { step: '04', title: 'Figma Library Developer Handoff', desc: 'Delivering nested component libraries, CSS variables, spacing specs, and gesture motion prototypes to the development team.' }
    ],
    techTitle: 'Design Frameworks We Use',
    techDesc: 'We construct interactive prototypes and responsive component libraries using industry-standard design tools:',
    techCategories: [
      { name: 'Design Tools', items: ['Figma', 'Adobe Creative Cloud', 'Illustrator', 'Photoshop'] },
      { name: 'Prototyping', items: ['Figma Interactive Prototypes', 'Framer', 'Lottie Animations'] },
      { name: 'Component Systems', items: ['Figma Design Tokens', 'Material Design Components', 'Apple Human Interface'] }
    ],
    industriesTitle: 'Interfaces We Design',
    industriesDesc: 'We create custom digital designs for web portals, mobile screens, and admin dashboards in Raipur, Chhattisgarh:',
    industries: [
      { name: 'Mobile Application Screens', desc: 'Fluid gestures, thumb-friendly buttons, and custom dark/light UI modes for iOS and Android platforms.' },
      { name: 'SaaS & Enterprise Dashboards', desc: 'Data-rich layouts, complex filter panels, interactive charts, and clean administrative workflows.' },
      { name: 'Consumer & Booking Portals', desc: 'Sleek onboarding paths, visual calendar grids, clear step indicators, and responsive landing setups.' },
      { name: 'Luxury Brand Portfolios', desc: 'Stunning typography, large high-fidelity imagery grids, custom hover reveals, and fluid spring scroll animations.' }
    ],
    benefitsTitle: 'UX Design Business Benefits',
    benefitsDesc: 'Investing in high-end UX design directly influences customer conversions and boosts overall brand value:',
    benefits: [
      { title: 'Increased User Dwell Time', desc: 'Aesthetically pleasing screens invite interaction, keeping users on your application longer and lowering bounce rates.' },
      { title: 'Lower Conversion Friction', desc: 'Intuitive navigation maps guide users to CTA goals, maximizing inquiries, product checkouts, and bookings.' },
      { title: 'Reduced Engineering Costs', desc: 'Validating wireframes and user flows in Figma beforehand saves weeks of development time and avoids code rebuilds.' },
      { title: 'Cohesive Multi-Platform UX', desc: 'A unified design system guarantees that your app matches your website, creating a consistent brand identity.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We deliver pixel-perfect digital designs that set your company apart from competitors:',
    whyBusinessesChooseUsPoints: [
      { title: 'Figma Library Delivery', desc: 'You receive complete Figma layout files with nested components, variables, auto-layout settings, and clean layer organization.' },
      { title: 'Design System Documentation', desc: 'Fully documented color tokens, typography scales, spacing sheets, and state representations.' },
      { title: 'Feasibility-Checked Designs', desc: 'Our design leads collaborate with our engineers, ensuring that every layout designed is fully codeable and fast.' },
      { title: 'Absolute Copyright Ownership', desc: 'You own 100% of the custom design system, asset libraries, and graphics suites we create.' }
    ],
    faqs: [
      { q: 'Why hire a UI/UX Design Company in Raipur?', a: 'Working with a local Raipur UI/UX designer allows you to review layout wireframes, test prototypes on physical devices, and coordinate design reviews in person. CoreBuild Solutions blends local consulting in Chhattisgarh with premium visual designs.' },
      { q: 'What is a Figma prototype?', a: 'A Figma prototype is an interactive mock representation of the application. It allows you to click buttons, scroll pages, and test user journeys on your phone or desktop computer before coding starts.' },
      { q: 'What is a design system?', a: 'A design system is a collection of reusable UI components (buttons, inputs, cards) governed by clear rules (colors, fonts, spacings). It ensures design consistency across your site and apps.' },
      { q: 'How long does the UI/UX design phase take?', a: 'A typical design phase takes 3 to 6 weeks, depending on complexity. It includes moodboards, wireframes, high-fidelity UI screens, and interactive prototypes.' },
      { q: 'Do you design both light and dark modes?', a: 'Yes. We design interfaces for both light and dark color profiles, configuring variables to ensure typography and indicators are readable in all settings.' },
      { q: 'Will the design be responsive across all devices?', a: 'Absolutely. We design layout grids that adapt to smartphones, tablets, laptops, and wide-screen desktops, ensuring visual consistency.' },
      { q: 'Can you work with our existing brand guidelines?', a: 'Yes. We can adopt your existing logos, colors, and fonts, expanding them into a comprehensive design system for your digital products.' }
    ]
  },
  'srv-6': {
    id: 'srv-6',
    slug: 'branding-logo-design',
    seoTitle: 'Branding & Logo Design Company in Raipur | CoreBuild Solutions',
    metaDescription: 'Looking for a branding and logo design company in Raipur, Chhattisgarh? CoreBuild Solutions crafts custom logos, premium corporate identities, and brand guides.',
    keywords: 'Branding & Logo Design Company in Raipur, Software Development Company in Chhattisgarh, logo designer Raipur, brand strategist Raipur, graphic design Chhattisgarh, business branding Raipur, Logo Design in Raipur, Brand Identity Raipur, Creative Agency in Raipur',
    h1: 'Branding & Logo Design Company in Raipur',
    subtitle: 'Custom Corporate Identity Suites & Premium Brand Strategies in Chhattisgarh',
    introTitle: 'Crafting Authoritative Corporate Brand Identities That Establish Trust',
    introduction: 'A corporate identity is the signature of your business. CoreBuild Solutions is the leading Branding & Logo Design Company in Raipur, establishing premium brand frameworks designed to communicate authority, reliability, and modern aesthetic value. As a trusted Software Development Company in Chhattisgarh, we understand that local businesses need to stand out. We design custom vector logos, coordinate cohesive color systems, select premium typography hierarchies, and write detailed brand voice guides. Whether you are an industrial group in Bhilai, a retail business in Raipur, or a professional firm in Chhattisgarh, we shape how your business is perceived, creating a strong first impression that builds trust with clients and partners alike.',
    whyChooseUsTitle: 'Why Choose Our Brand Planners in Raipur?',
    whyChooseUsDesc: 'A logo is not just a graphic; it is your business\'s signature. Here is how we design signature identities:',
    whyChooseUsPoints: [
      { title: 'Geometric Logo Construction', desc: 'Custom logos built using geometric grids and math to ensure perfect readability from favicons to billboard sizes.' },
      { title: 'Cohesive Color Systems', desc: 'Curating color palettes based on industry psychology, ensuring consistent rendering across digital and print media.' },
      { title: 'Complete Brand Voice Systems', desc: 'Guidelines detailing typography systems, photography grids, email layouts, and communication styles.' },
      { title: 'Print-Ready Vector Exports', desc: 'We export all assets in scalable vector paths (SVG, EPS, PDF), ready for premium print production.' }
    ],
    processTitle: 'Our Branding Journey Lifecycle Blueprint',
    processDesc: 'We develop your corporate identity system across 4 structured phases:',
    processSteps: [
      { step: '01', title: 'Brand Discovery Audit', desc: 'Reviewing market positioning, research values, competitor branding, and target audiences.' },
      { step: '02', title: 'Geometric Concepts', desc: 'Drafting vector ideas, evaluating geometry, and reviewing emblem weights for versatility.' },
      { step: '03', title: 'Corporate System Prep', desc: 'Expanding the chosen emblem into complete brand identity assets (business cards, letterheads, social mockups).' },
      { step: '04', title: 'Brand Book Delivery', desc: 'Compiling all vector logos, custom guides, and source files into your Brand Guideline PDF.' }
    ],
    techTitle: 'Vector Design Tools We Deploy',
    techDesc: 'We construct high-fidelity vector illustrations using standard creative suites:',
    techCategories: [
      { name: 'Creative Software', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Figma', 'InDesign'] },
      { name: 'Asset Formats', items: ['Scalable Vector Graphics (SVG)', 'Encapsulated PostScript (EPS)', 'Adobe PDF Source', 'High-Res PNG'] }
    ],
    industriesTitle: 'Branding Deliverables We Craft',
    industriesDesc: 'We design complete brand systems for retail companies, manufacturing groups, and startup brands in Raipur Chhattisgarh:',
    industries: [
      { name: 'Logo & Emblem Suites', desc: 'Primary logomarks, secondary seals, custom wordmarks, and tiny browser favicons.' },
      { name: 'Corporate Stationery', desc: 'Professional letterheads, email banners, envelopes, and premium business card layouts.' },
      { name: 'Digital Brand Assets', desc: 'Social media profile templates, pitch deck presentation layouts, and branding guides.' },
      { name: 'Packaging & Print Design', desc: 'Custom product packaging layouts, retail box designs, brochures, and corporate banners.' }
    ],
    benefitsTitle: 'Branding Business Benefits',
    benefitsDesc: 'A cohesive brand directly drives buyer trust and consumer pricing authority:',
    benefits: [
      { title: 'Establishes Premium Authority', desc: 'Clean, professional branding creates immediate buyer trust and credibility with clients.' },
      { title: 'Cohesive Multi-Channel Presence', desc: 'Ensuring your identity is consistent across your site, print items, and social media channels.' },
      { title: 'Protects Brand Equity', desc: 'Vector guidelines prevent pixelated logos and inconsistent layouts across different teams.' },
      { title: 'Increases Customer Recall', desc: 'A memorable, professionally designed logo increases brand recognition and makes you stand out.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We deliver branding suites with full copyright ownership and high production values:',
    whyBusinessesChooseUsPoints: [
      { title: 'Full Ownership & Rights', desc: 'You own 100% of the vector layouts, emblem copyright, and guide assets forever.' },
      { title: 'High-Res Deliverables', desc: 'Every design is exported in scalable vector paths ready for print production.' },
      { title: 'Dedicated Brand Consultant', desc: 'Direct consulting to ensure your brand values are translated into visual graphics.' },
      { title: 'Fast Iterative Feedback', desc: 'We present multiple visual directions, adjusting designs based on your feedback.' }
    ],
    faqs: [
      { q: 'Why hire a Logo Designer in Raipur?', a: 'Working with a local Raipur logo developer allows you to inspect print proofs, review color swatches, and collaborate in person. CoreBuild Solutions blends local consulting in Chhattisgarh with premium visual designs.' },
      { q: 'What is a Brand Guideline Book?', a: 'A brand guideline is a document detailing your logo variations, color hex codes, font weights, and spacing rules for consistent design.' },
      { q: 'Do you provide the raw vector source files?', a: 'Yes. We deliver all raw vector source files in AI, EPS, and SVG formats, ensuring you can scale your logo without losing quality.' },
      { q: 'How many design concepts do you present?', a: 'Typically, we present 3 to 5 distinct design directions for the logo. Once you select a concept, we refine it to perfection.' },
      { q: 'Can you design business cards and stationery?', a: 'Yes. We design professional business cards, letterheads, envelopes, email banners, and invoice templates matching your brand.' },
      { q: 'How long does the branding project take?', a: 'A standard corporate identity project takes 2 to 4 weeks, depending on revisions and the scope of assets.' },
      { q: 'Can you update an existing logo?', a: 'Yes. We perform logo cleanups and modernizations, keeping your brand heritage while updating design aesthetics.' }
    ]
  },
  'srv-7': {
    id: 'srv-7',
    slug: 'seo-optimization',
    seoTitle: 'Best SEO Agency in Raipur | CoreBuild Solutions',
    metaDescription: 'Grow your business online with the best SEO Agency in Raipur, Chhattisgarh. We optimize websites for maximum Google rankings and organic traffic.',
    keywords: 'SEO Agency in Raipur, Web Development Company in Raipur, SEO Services Raipur Chhattisgarh, Search Engine Optimization Raipur, local SEO Chhattisgarh, search ranking Raipur, Local SEO in Raipur, SEO Services in Raipur, Best SEO Company in Raipur',
    h1: 'SEO Agency in Raipur',
    subtitle: 'Data-Driven SEO Services in Raipur & Chhattisgarh for Maximum Google Rankings',
    introTitle: 'Generating Organic Inbound Leads with Search Engine Optimization',
    introduction: 'Google is the new yellow pages. If your business isn\'t visible on the first page of Google, you are losing potential customers every day. CoreBuild Solutions is the best SEO Agency in Raipur, Chhattisgarh, engineering data-driven search engine optimization plans designed to rank your company at the top of search results. As a leading Web Development Company in Raipur, we understand the technical side of SEO. We bypass the cheap link-buying schemes that get sites penalized. Instead, we audit search intent, optimize server response times, configure schema markups, and write high-quality, comprehensive content that ranks. Whether you are a retail business in Raipur seeking local calls, a clinic in Devendra Nagar looking to build credibility, or a manufacturing company in Chhattisgarh targeting B2B leads, our SEO campaigns deliver stable organic traffic and consistent inquiries.',
    whyChooseUsTitle: 'Why Choose Our SEO Specialists in Raipur?',
    whyChooseUsDesc: 'We avoid fake traffic shortcuts. We focus on search intent, crawl compliance, and conversion metrics:',
    whyChooseUsPoints: [
      { title: 'Technical Crawl Audits', desc: 'We audit page load speed, mobile responsiveness, sitemaps, indexation logs, and canonical redirects to ensure Google crawls your site.' },
      { title: 'Keyword Intent Strategy', desc: 'We target commercial and local search keywords, connecting you with buyers who are actively searching for your services.' },
      { title: 'JSON-LD Schema Markup', desc: 'We inject structured data (Service, FAQ, LocalBusiness schemas) into the HTML, capturing rich search snippets.' },
      { title: 'Raipur Local SEO Boost', desc: 'We optimize your Google Business Profile, compile local citations, and build localized content to dominate Chhattisgarh searches.' }
    ],
    processTitle: 'Our SEO Campaign Lifecycle Blueprint',
    processDesc: 'We grow your organic visibility across 4 structured phases:',
    processSteps: [
      { step: '01', title: 'SEO Site Audit', desc: 'Auditing keyword ranking, site errors, page load speeds, and competitor backlink profiles.' },
      { step: '02', title: 'Keyword Research', desc: 'Identifying search terms that combine high volume with commercial intent and low difficulty.' },
      { step: '03', title: 'On-Page Optimization', desc: 'Updating title tags, meta descriptions, headings, image alt texts, and internal links.' },
      { step: '04', title: 'Crawl Monitoring', desc: 'Tracking Google Search Console indexation logs, search traffic impressions, and keyword placement updates.' }
    ],
    techTitle: 'SEO & Analytics Platforms We Deploy',
    techDesc: 'We analyze queries, track keyword positions, and monitor sitemaps using professional tools:',
    techCategories: [
      { name: 'Audit & Analysis', items: ['Google Search Console', 'Ahrefs', 'SEMrush', 'Screaming Frog'] },
      { name: 'Performance Logs', items: ['Google PageSpeed Insights', 'GTmetrix', 'Google Lighthouse'] },
      { name: 'Tracking Scripts', items: ['Google Analytics 4', 'Microsoft Clarity', 'JSON-LD Schema Creator'] }
    ],
    industriesTitle: 'SEO Campaigns We Run',
    industriesDesc: 'We optimize websites for local, national, and e-commerce companies in Raipur Chhattisgarh:',
    industries: [
      { name: 'Local SEO Raipur', desc: 'Google Business Profile optimization, local citation building, and Raipur- Chhattisgarh localized page copy.' },
      { name: 'E-commerce SEO', desc: 'Optimizing product schema tags, catalog navigation speed, and category rank keywords.' },
      { name: 'Enterprise B2B SEO', desc: 'Writing comprehensive articles that establish brand authority and capture corporate leads.' },
      { name: 'Mobile App Store ASO', desc: 'Optimizing titles, descriptions, and keywords for both Apple App Store and Google Play Stores.' }
    ],
    benefitsTitle: 'Measurable SEO Business Benefits',
    benefitsDesc: 'Organic rank growth delivers stable lead capture and minimizes paid ads spend:',
    benefits: [
      { title: 'Consistent Inbound Leads', desc: 'Ranking on page 1 generates a daily stream of organic customer inquiries without ongoing ad spend.' },
      { title: 'Compounded Long-Term Growth', desc: 'Unlike paid ads that stop when budget runs dry, search optimization delivers traffic indefinitely.' },
      { title: 'Lower Conversion Costs', desc: 'Organic visitors trust search results more than sponsored ads, resulting in higher conversions.' },
      { title: 'Brand Value & Credibility', desc: 'Appearing at the top of Google establishes you as an industry leader, building customer trust.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We deliver transparent SEO audit reports with clear growth tracking:',
    whyBusinessesChooseUsPoints: [
      { title: 'No Spam Black-Hat Tactics', desc: 'We adhere strictly to Google crawler guidelines, safeguarding your domain from search penalty risks.' },
      { title: 'Clear Reporting Dashboards', desc: 'Regular reports tracking keyword placement, search impressions, and click growth.' },
      { title: 'Direct Access to Analysts', desc: 'Direct consulting to review campaign progress, competitor changes, and keyword targets.' },
      { title: 'Comprehensive SEO Copy', desc: 'We write high-quality, long-form articles that naturally target keywords without keyword stuffing.' }
    ],
    faqs: [
      { q: 'Why hire an SEO Agency in Raipur?', a: 'Working with a local Raipur SEO team allows you to sync campaign goals, audit local search patterns, and coordinate support in Chhattisgarh.' },
      { q: 'How long does it take to see SEO results?', a: 'A typical search engine campaign takes between 3 to 6 months to demonstrate stable page 1 ranking growth, depending on competition.' },
      { q: 'What is the difference between On-Page and Off-Page SEO?', a: 'On-Page SEO involves optimizing content and HTML tags on your site. Off-Page SEO involves building authority through backlinks and citations.' },
      { q: 'Will you optimize our Google Business Profile?', a: 'Yes. We manage your Google Business Profile, optimizing descriptions, categories, posts, and images to show up in local maps.' },
      { q: 'What is a backlink?', a: 'A backlink is a link from another website to yours. Google views backlinks as votes of confidence, increasing your site\'s authority.' },
      { q: 'Do you guarantee number 1 rankings on Google?', a: 'No ethical agency can guarantee specific rankings, as Google\'s algorithms change constantly. We focus on search compliance to drive traffic.' },
      { q: 'Will you write the SEO content for our blog?', a: 'Yes. We write high-quality, keyword-rich articles designed to answer search queries and establish topical authority.' }
    ]
  },
  'srv-8': {
    id: 'srv-8',
    slug: 'custom-enterprise-software',
    seoTitle: 'Custom Software Development Company in Raipur | CoreBuild Solutions',
    metaDescription: 'Looking for a custom software development company in Raipur, Chhattisgarh? CoreBuild Solutions builds scalable enterprise portals, SaaS platforms, and APIs in India.',
    keywords: 'Custom Software Development Company in Raipur, Software Development Company in Chhattisgarh, ERP software Raipur, custom CRM Chhattisgarh, IT consultant Raipur, SaaS development India, Custom Software Development in Raipur, ERP Developers in Raipur, Software Developers in Raipur',
    h1: 'Custom Software Development Company in Raipur',
    subtitle: 'Scalable Enterprise Portals, SaaS Platforms, & Backend APIs in Chhattisgarh',
    introTitle: 'Engineering Decoupled Custom Enterprise Software Systems That Scale',
    introduction: 'Off-the-shelf software solutions often fail to adapt to your unique operational workflows. CoreBuild Solutions is the leading Custom Software Development Company in Raipur, engineering secure, scalable custom software systems for enterprises, manufacturing units, and startups across Chhattisgarh and India. We understand that local businesses in Raipur need tools for inventory tracking, production pipelines, client communications, and staff management. As a premier Software Development Company in Chhattisgarh, we build custom ERP systems, multi-tenant SaaS dashboards, and secure backend APIs from scratch. We write clean, strictly-typed TypeScript code using Go, Python, and Node.js, backed by PostgreSQL and MongoDB databases. Our mission is to automate manual workflows, protect proprietary business data, and eliminate recurring license fees, giving your company a solid technical advantage.',
    whyChooseUsTitle: 'Why Choose Our Software Engineers in Raipur?',
    whyChooseUsDesc: 'We follow robust coding guidelines, strict security checks, and clear agile milestones to deliver clean, scalable backend systems:',
    whyChooseUsPoints: [
      { title: 'Secure Relational Database Design', desc: 'We structure custom relational databases using PostgreSQL and Prisma, configuring constraints to guarantee data integrity.' },
      { title: 'Decoupled Microservice APIs', desc: 'We engineer modular backend APIs using Go or Python that scale independently and connect with any frontend interface wrapper.' },
      { title: 'Custom Role & Access Policies', desc: 'We set up robust authentication (JWT/OAuth) and configure role-based access control (RBAC) to secure user workspaces.' },
      { title: 'Zero Vendor Lock-In Contracts', desc: 'You own 100% of the custom codebase, database schemas, and deploy pipelines. No recurring subscription overheads.' }
    ],
    processTitle: 'Our Software Development Lifecycle Blueprint',
    processDesc: 'We deliver scalable enterprise software systems across 6 sprint milestones:',
    processSteps: [
      { step: '01', title: 'System Blueprinting', desc: 'Auditing workflow constraints, outlining schema connections, and drafting backend API routes.' },
      { step: '02', title: 'Database Schema Setup', desc: 'Configuring migrations, writing mock seed data, and validating relational models.' },
      { step: '03', title: 'Modular API Sprint', desc: 'Writing backend endpoints, structuring user roles, and configuring auth controllers.' },
      { step: '04', title: 'Admin Panel Interface', desc: 'Designing responsive React portals to manage tables, run queries, and audit logs.' },
      { step: '05', title: 'API Security Audits', desc: 'Running penetration checks, validating tokens, and verifying database access constraints.' },
      { step: '06', title: 'Docker Edge Deploy', desc: 'Containerizing services using Docker and deploying to high-availability AWS/Google Cloud servers.' }
    ],
    techTitle: 'Technologies We Use for Enterprise Systems',
    techDesc: 'We write clean, modular software systems utilizing standard enterprise stacks:',
    techCategories: [
      { name: 'Languages & Engines', items: ['Node.js (TypeScript)', 'Go', 'Python (FastAPI)', 'Docker'] },
      { name: 'Databases & Schema', items: ['PostgreSQL', 'MongoDB', 'Redis Cache', 'Prisma ORM'] },
      { name: 'Hosting & Pipeline', items: ['AWS ECS / EC2', 'Google Cloud Run', 'GitHub Actions CI/CD'] }
    ],
    industriesTitle: 'Custom Software We Deliver',
    industriesDesc: 'We construct custom software solutions for industries in Raipur Chhattisgarh and across India:',
    industries: [
      { name: 'Custom ERP & Inventory Tools', desc: 'Automating inventory tracking, client invoice delivery, and staff shifts.' },
      { name: 'B2B SaaS Products', desc: 'Multi-tenant database structures, subscription gates, and user management panels.' },
      { name: 'Quantitative Dashboards', desc: 'Quantitative real-time charts, WebSocket analytics sync, and report builders.' },
      { name: 'Custom CRM Software', desc: 'Sales pipeline tracking, lead logging, automated follow-up emails, and client database logs.' }
    ],
    benefitsTitle: 'Custom Software Business Benefits',
    benefitsDesc: 'Bespoke software eliminates manual spreadsheet tasks and adapts to your operations:',
    benefits: [
      { title: 'Zero License Fee Overheads', desc: 'Unlike SaaS subscriptions that charge per user monthly, you own your custom codebase forever.' },
      { title: 'Automated Manual Workflows', desc: 'Syncing databases and APIs automates paperwork, saving hundreds of hours of manual labor.' },
      { title: 'Absolute Data Ownership', desc: 'Your database runs on your private cloud accounts, securing sensitive user metrics.' },
      { title: 'Scales with Your Business', desc: 'Custom software adapts as you grow. Add features, user roles, or integrations without starting from scratch.' }
    ],
    whyBusinessesChooseUsTitle: 'Why Choose CoreBuild Solutions?',
    whyBusinessesChooseUsDesc: 'We deliver software systems under clear milestones and professional standards:',
    whyBusinessesChooseUsPoints: [
      { title: 'Strict Type Safety Guard', desc: 'We write our codebase in TypeScript, eliminating runtime variable bugs.' },
      { title: '1 Year Priority Support', desc: 'Providing active server support, software updates, and scaling audits.' },
      { title: 'Milestone-Based Billing', desc: 'Billing is tied to clear project milestones (e.g. database schema complete, API MVP).' },
      { title: 'Experienced Tech Leads', desc: 'Direct access to senior developers who translate requirements into database designs.' }
    ],
    faqs: [
      { q: 'Why hire a Custom Software Developer in Raipur?', a: 'Working with a local developer in Raipur, Chhattisgarh, allows you to coordinate system design reviews, discuss database security, and secure support in Chhattisgarh. CoreBuild Solutions connects local availability with global coding standards.' },
      { q: 'Can you migrate data from old systems?', a: 'Yes. We write database migration scripts to securely transfer data from old databases or Excel sheets to modern schemas, preserving integrity.' },
      { q: 'Will the software run on mobile screens?', a: 'Yes. We design backend admin portals with responsive React layouts, ensuring managers can view dashboards on mobile.' },
      { q: 'Do you offer monthly maintenance plans?', a: 'Yes. We offer support plans covering database optimization, server patching, software updates, and continuous backups.' },
      { q: 'How long does custom ERP software take to build?', a: 'A standard custom ERP or CRM dashboard with custom database tables and user roles takes 8 to 12 weeks to design, code, and deploy.' },
      { q: 'Can you integrate third-party APIs?', a: 'Yes. We integrate SMS gateways, email services (SendGrid), WhatsApp Business APIs, and shipping providers directly into your system.' },
      { q: 'What is a multi-tenant SaaS dashboard?', a: 'A multi-tenant SaaS dashboard allows multiple companies (tenants) to run their workspaces on a single database structure, isolating user data.' }
    ]
  }
};
