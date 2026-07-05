import bcrypt from 'bcryptjs';
import { prisma } from '../config/db.js';

export const seedDatabase = async () => {
  try {
    // 1. Seed Admin User
    const userCount = await prisma.user.count();
    if (userCount === 0) {
      console.log('Seeding default Super Admin user...');
      const hashedPassword = await bcrypt.hash('admin12345', 10);
      await prisma.user.create({
        data: {
          name: 'Kshitij Tiwari',
          email: 'admin@corebuild.com',
          password: hashedPassword,
          role: 'super_admin'
        }
      });
      console.log('Default Super Admin user seeded successfully.');
    }

    // 2. Seed Settings
    const settingsCount = await prisma.systemSettings.count();
    if (settingsCount === 0) {
      console.log('Seeding default global settings...');
      await prisma.systemSettings.create({
        data: {
          key: 'global',
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
        }
      });
      console.log('Default settings seeded.');
    }

    // 3. Seed SEO Page configs
    const seoCount = await prisma.seoSettings.count();
    if (seoCount === 0) {
      console.log('Seeding default SEO page configurations...');
      await prisma.seoSettings.createMany({
        data: [
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
        ]
      });
      console.log('Default SEO settings seeded.');
    }

    // 4. Seed Services
    const serviceCount = await prisma.service.count();
    if (serviceCount === 0) {
      console.log('Seeding default Services capability modules...');
      await prisma.service.createMany({
        data: [
          {
            name: 'Web Development',
            subtitle: 'High-Performance Web Platforms',
            description: 'We engineer highly interactive, sub-second loading web applications with React, Next.js, and TypeScript, optimized to convert visitors into high-ticket clients.',
            icon: 'Globe',
            details: [
              'Custom Next.js & Vite SPAs',
              'Sub-second Lighthouse scores',
              'TailwindCSS skin systems',
              'State-of-the-art animations'
            ],
            workflow: [
              { step: 1, title: 'Requirements Audit', desc: 'Detailing system routes, component states, and database models.' },
              { step: 2, title: 'Visual Designing', desc: 'Crafting premium UI wireframes and vector mockups.' },
              { step: 3, title: 'Engineering Build', desc: 'Developing strictly-typed React and Next structures.' }
            ],
            pricing: [
              {
                plan: 'Enterprise Web Suite',
                price: '₹1,49,999',
                originalPrice: '₹1,99,999',
                popular: true,
                ctaText: 'Initiate Development Project',
                description: 'Full-service web development for premium brands looking for top-tier visual performance.',
                features: ['Custom Next.js frontend', 'Express REST backend API integrations', 'CMS dashboard setup', 'Secure session cookies auth', '2-year post-launch maintenance'],
                active: true,
                order: 1
              }
            ]
          },
          {
            name: 'Mobile App Development',
            subtitle: 'Bespoke iOS & Android Native Solutions',
            description: 'We build native-feeling, high-performance mobile applications using React Native and Flutter, connected to robust server infrastructure.',
            icon: 'Smartphone',
            details: [
              'React Native & Flutter native compilers',
              'Push notification servers',
              'Camera, GPS, and biometrics integration',
              'App Store & Play Store publication support'
            ],
            workflow: [
              { step: 1, title: 'Device Prototyping', desc: 'Testing viewport boundaries and layout performance.' },
              { step: 2, title: 'Native Integration', desc: 'Writing bridges for camera, bio-id, and offline cache.' },
              { step: 3, title: 'Store Deployment', desc: 'Configuring App Store and Google Play publishing profiles.' }
            ],
            pricing: [
              {
                plan: 'Bespoke Mobile App Suite',
                price: '₹2,49,999',
                originalPrice: '₹3,49,999',
                popular: false,
                ctaText: 'Initiate Mobile App Project',
                description: 'Cross-platform mobile apps for iOS and Android built on industry-standard React Native architecture.',
                features: ['React Native framework', 'Supabase backend & Storage', 'Full push notifications', 'Biometrics & GPS integrations', 'App Store publication'],
                active: true,
                order: 2
              }
            ]
          },
          {
            name: 'AI Automation & Custom Software',
            subtitle: 'Intelligent Enterprise Pipelines',
            description: 'We integrate Large Language Models (LLMs), RAG-based search indices, and autonomous agent tasks into custom dashboard control boards.',
            icon: 'Cpu',
            details: [
              'Custom LLM intent routing gateways',
              'Vector database lookups (Pinecone / pgvector)',
              'Semantic caches and intent processing',
              'Automated invoice & lead CRM engines'
            ],
            workflow: [
              { step: 1, title: 'Workflow Audit', desc: 'Identifying bottlenecks in team workflows and message routes.' },
              { step: 2, title: 'Vector Space Setup', desc: 'Structuring Pinecone / Supabase database indices.' },
              { step: 3, title: 'Integration Sync', desc: 'Connecting agents directly to Slack, email, or CRMs.' }
            ],
            pricing: [
              {
                plan: 'Cognitive Automation System',
                price: '₹4,99,999',
                originalPrice: '₹6,49,999',
                popular: true,
                ctaText: 'Initiate AI Integration',
                description: 'State-of-the-art AI systems utilizing pgvector search, intent routing, and customized LLMs.',
                features: ['Pinecone/pgvector search', 'Intelligent routing intent gates', 'Fine-tuned LLM controllers', 'Secure enterprise admin dashboard', 'Dedicated SLA support'],
                active: true,
                order: 3
              }
            ]
          }
        ]
      });
      console.log('Default Services seeded.');
    }

    // 5. Seed Projects
    const projectCount = await prisma.project.count();
    if (projectCount === 0) {
      console.log('Seeding default showcase Projects...');
      await prisma.project.createMany({
        data: [
          {
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
            testimonialText: 'CoreBuild delivered a website that represents a massive technical leap forward for our marketing campaigns. Truly exceptional craftsmanship.',
            testimonialName: 'Alexander Sinclair',
            testimonialRole: 'VP of Marketing, Apex London',
            featured: true
          },
          {
            title: 'LuxeDining Global Guide',
            client: 'LuxeDining Concierge',
            category: 'mobile',
            description: 'Bespoke iOS and Android mobile app serving exclusive booking slots, geolocation reservations, and priority VIP gates.',
            longDescription: 'LuxeDining Concierge wanted to expand their Michelin-starred booking network with a premium native mobile application. We built a React Native system featuring biometric verification, sub-second push queues for flash availability notifications, and pgvector-backed semantic search to recommend restaurants based on natural input prompts. Shipped with offline sync and optimized assets, ensuring luxury performance even on weak connections.',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
            gallery: [
              'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80'
            ],
            tags: ['React Native', 'Expo', 'Node.js', 'PostgreSQL', 'Supabase', 'Expo Push'],
            stats: [
              { label: 'VIP Bookings', value: '18K+' },
              { label: 'App Load Speed', value: '0.4s' },
              { label: 'Retention Rate', value: '88%' }
            ],
            testimonialText: 'Our VIP membership engagement surged immediately after release. The custom reservation workflow is extremely fast and robust.',
            testimonialName: 'Eleanor Vance',
            testimonialRole: 'Founder, LuxeDining Concierge',
            featured: true
          }
        ]
      });
      console.log('Default Projects seeded.');
    }

    // 6. Seed Blogs
    const blogCount = await prisma.blog.count();
    if (blogCount === 0) {
      console.log('Seeding default Blog records...');
      await prisma.blog.createMany({
        data: [
          {
            title: 'Designing For Luxury Brands: The 2026 Grid Spacing Protocol',
            category: 'UI/UX Design',
            summary: 'Explore the specific layout grids, text contrast checks, and motion curves luxury brands require to build immediate visual trust.',
            content: 'Luxury digital design differs fundamentally from standard SaaS dashboard interfaces. While standard SaaS interfaces focus on packing dense information grids, luxury design relies heavily on whitespace, editorial typography, and micro-animations. In 2026, we utilize strict Outfit grid margins, a primary Peach color system (#FFFDFB background, #E88B5A accents), and fluid cubic-bezier curves for transitions. In this guide, we break down standard ratios, typography pairings, and loading screen designs that prevent high-bounce rates...',
            image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
            date: 'July 2, 2026',
            author: 'Kshitij Tiwari',
            readTime: '6 min read',
            tags: ['Design System', 'Typography', 'Aesthetics']
          }
        ]
      });
      console.log('Default Blogs seeded.');
    }

    // 7. Seed Testimonials
    const testCount = await prisma.testimonial.count();
    if (testCount === 0) {
      console.log('Seeding default Testimonials...');
      await prisma.testimonial.createMany({
        data: [
          {
            name: 'Alexander Sinclair',
            role: 'VP of Marketing',
            company: 'Apex London',
            rating: 5,
            text: 'CoreBuild delivered a website that represents a massive technical leap forward for our marketing campaigns. Truly exceptional craftsmanship.',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alexander'
          },
          {
            name: 'Eleanor Vance',
            role: 'Founder',
            company: 'LuxeDining Concierge',
            rating: 5,
            text: 'Our VIP membership engagement surged immediately after release. The custom reservation workflow is extremely fast and robust.',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Eleanor'
          }
        ]
      });
      console.log('Default Testimonials seeded.');
    }

    // 8. Seed Team Members
    const teamCount = await prisma.teamMember.count();
    if (teamCount === 0) {
      console.log('Seeding default Team Members profile records...');
      await prisma.teamMember.createMany({
        data: [
          {
            name: 'Kshitij Tiwari',
            role: 'Founder – CoreBuild Solutions',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kshitij',
            bio: 'Elite Software Engineer & Systems Architect. Shipped production infrastructure for global FinTech operations and Quantitative trading pipelines. Focuses on typed safety, low-latency API response compilation, and intelligent database indexes.',
            experience: '10+ Years',
            skills: ['React', 'Next.js', 'PostgreSQL', 'Supabase', 'TypeScript', 'Node.js'],
            order: 1,
            active: true,
            socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' }
          },
          {
            name: 'Rohit Sharma',
            role: 'Lead Full-Stack Developer',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rohit',
            bio: 'Expert in Node.js server architectures, PostgreSQL indexing, and cloud container deployments. Shipped scalable microservices for multiple luxury e-commerce platforms.',
            experience: '6+ Years',
            skills: ['Node.js', 'Express', 'Prisma', 'Supabase', 'Redis', 'Docker'],
            order: 2,
            active: true,
            socials: { linkedin: 'https://linkedin.com', github: 'https://github.com' }
          },
          {
            name: 'Ananya Verma',
            role: 'Head of Brand Design & UI',
            image: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ananya',
            bio: 'Focuses on premium spacing, fluid micro-interactions, and visual layouts that instantly convey trust and quality.',
            experience: '8+ Years',
            skills: ['Figma', 'Framer Motion', 'Webflow', 'TailwindCSS'],
            order: 3,
            active: true,
            socials: { linkedin: 'https://linkedin.com' }
          }
        ]
      });
      console.log('Default Team profiles seeded.');
    }

    // 9. Seed FAQs
    const faqCount = await prisma.faqItem.count();
    if (faqCount === 0) {
      console.log('Seeding default FAQs...');
      await prisma.faqItem.createMany({
        data: [
          {
            q: 'What is your typical project delivery timeline?',
            a: 'Timeline varies by complexity. A premium marketing site or simple prototype takes 3–5 weeks. Custom enterprise portals, database integrations, and complex AI agent architectures take 8–12 weeks. We map out detailed weekly sprint milestones during discovery.',
            order: 1
          },
          {
            q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
            a: 'Absolutely. We deal with proprietary algorithms, quantitative financial dashboards, and unreleased startup blueprints daily. All discussions, credentials, and data are treated with enterprise-grade confidentiality under binding NDAs.',
            order: 2
          },
          {
            q: 'Can we manage the content ourselves once the project is shipped?',
            a: 'Yes. We deliver custom administrator dashboards (built specifically for your database schemas) where you can easily perform CRUD operations (add projects, update blogs, manage leads, configure SEO tags) without touching any code.',
            order: 3
          },
          {
            q: 'Do you offer post-launch maintenance and support?',
            a: 'We provide 3 to 12 months of dedicated hypercare support post-launch depending on your selected tier. This includes server monitoring, core software updates, database vacuuming, and performance fine-tuning to keep Lighthouse scores at 95+.',
            order: 4
          }
        ]
      });
      console.log('Default FAQs seeded.');
    }

    // 10. Seed Home Sections
    const sectionCount = await prisma.homeSection.count();
    if (sectionCount === 0) {
      console.log('Seeding default Home layout content sections...');
      await prisma.homeSection.createMany({
        data: [
          {
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
            key: 'partners',
            content: {
              companies: ['Stripe', 'Linear', 'Vercel', 'Framer', 'Cuberto', 'Apple', 'Apex Group', 'LuxeDining']
            }
          },
          {
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
            key: 'ctaBanner',
            content: {
              badge: 'Bookings Active for Q3 2026',
              title: "Let's craft your next digital breakthrough.",
              description: 'Secure a strategic blueprint session to outline project specifications, timelines, budget allocations, and performance frameworks.',
              ctaText: 'Initiate Discussion'
            }
          },
          {
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
        ]
      });
      console.log('Default Home sections seeded.');
    }

  } catch (error) {
    console.error(`Database seeding failed: ${error.message}`);
  }
};
