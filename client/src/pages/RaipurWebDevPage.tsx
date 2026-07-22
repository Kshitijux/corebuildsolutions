import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, Smartphone, Cpu, Check, ArrowLeft, ArrowUpRight, Plus, Minus, 
  Layers, Users, Zap, Award, ShoppingBag, TrendingUp, ShieldCheck, MapPin, 
  Phone, Mail, Star, CheckCircle, Code, Server, Database, Rocket
} from 'lucide-react';
import SEO from '../components/SEO';
import { fallbackServices } from '../fallbackData';
import { useDatabase } from '../context/DatabaseContext';

export default function RaipurWebDevPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { blogs } = useDatabase();

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured Data Schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://corebuildsolutions.in/services/web-development-in-raipur#service",
    "name": "Web Development Company in Raipur",
    "serviceType": "Web Development, Custom Web Applications, MERN Stack Development, Ecommerce Development, Responsive Website Design",
    "description": "Looking for the premier web development company in Raipur? CoreBuild Solutions builds custom React/MERN stack websites, eCommerce portals, and software with 95+ PageSpeed scores in Chhattisgarh.",
    "provider": {
      "@type": "Organization",
      "name": "CoreBuild Solutions",
      "url": "https://corebuildsolutions.in",
      "logo": "https://corebuildsolutions.in/logo.png"
    },
    "areaServed": {
      "@type": "City",
      "name": "Raipur",
      "containedInPlace": {
        "@type": "State",
        "name": "Chhattisgarh"
      }
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://corebuildsolutions.in/#localbusiness-raipur",
    "name": "CoreBuild Solutions - Web Development Company in Raipur",
    "image": "https://corebuildsolutions.in/logo.png",
    "url": "https://corebuildsolutions.in/services/web-development-in-raipur",
    "telephone": "+91-9244007322",
    "email": "contact@corebuildsolutions.in",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "VIP Road, Near Magneto Mall",
      "addressLocality": "Raipur",
      "addressRegion": "Chhattisgarh",
      "postalCode": "492001",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.2514,
      "longitude": 81.6296
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "09:00",
      "closes": "20:00"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://corebuildsolutions.in"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://corebuildsolutions.in/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Web Development Company in Raipur",
        "item": "https://corebuildsolutions.in/services/web-development-in-raipur"
      }
    ]
  };

  const faqsData = [
    {
      q: 'Why should I hire a local web development company in Raipur instead of a remote agency?',
      a: 'Hiring a local web development company in Raipur like CoreBuild Solutions offers distinct strategic advantages: direct face-to-face consultations at our Raipur office or your premises, real-time communication without time-zone delays, deep understanding of the local Chhattisgarh consumer demographic, and reliable post-launch maintenance. We combine local accessibility in Raipur with international enterprise software engineering standards, giving your business global quality at competitive regional investment rates.'
    },
    {
      q: 'How much does custom website development cost in Raipur, Chhattisgarh?',
      a: 'Website development costs in Raipur depend on project scope, custom functionality, database complexity, and integrations. A high-converting business website starts around ₹24,999 to ₹49,999, while custom MERN stack web applications, enterprise portals, or e-commerce platforms range from ₹79,999 to ₹1,50,000+. CoreBuild Solutions provides detailed, itemized technical proposals with zero hidden costs or surprise hosting charges.'
    },
    {
      q: 'What technologies do you use for web development?',
      a: 'We specialize in modern, high-performance web stacks: React.js, Vite, Next.js, Node.js, Express, TypeScript, Tailwind CSS, PostgreSQL, MongoDB, Redis, and Supabase. Unlike legacy agencies relying on heavy, slow drag-and-drop WordPress themes, our code is lightweight, decoupled, type-safe, and optimized for sub-second page rendering.'
    },
    {
      q: 'How long does it take to complete a web development project?',
      a: 'A custom corporate business website typically takes 2 to 4 weeks from discovery to edge deployment. Complex e-commerce stores, SaaS dashboards, or custom MERN stack web applications take 4 to 8 weeks. We execute in two-week agile sprints with bi-weekly client demo previews.'
    },
    {
      q: 'Will my website be mobile-responsive and SEO-friendly?',
      a: 'Yes, 100%. Every website we engineer follows mobile-first responsive web design principles, ensuring flawless rendering on all devices (smartphones, tablets, laptops, and 4K desktops). Furthermore, we build SEO friendly website development architectures with pre-rendered static HTML shells, Schema.org JSON-LD structured data, dynamic Open Graph meta tags, and 95+ Core Web Vitals scores.'
    },
    {
      q: 'Do you provide website maintenance services after launch?',
      a: 'Yes. Every project includes 3 months of complimentary Hypercare support. Following launch, we offer comprehensive website maintenance services including database backups, security patch updates, server uptime monitoring, content updates, and performance tuning.'
    },
    {
      q: 'Can you redesign our existing outdated website?',
      a: 'Absolutely. We specialize in website redesign projects, transforming slow, outdated WordPress or HTML sites into modern, high-converting React/MERN stack applications with fresh UI/UX design, sub-second speed, and upgraded search engine rankings.'
    },
    {
      q: 'How do we get started with CoreBuild Solutions in Raipur?',
      a: 'Getting started is simple. You can call us directly at +91-9244007322, email contact@corebuildsolutions.in, or submit a request on our contact page. We will schedule a strategic blueprint session to map out your project scope, wireframes, technical stack, and investment roadmap within 24 hours.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqsData.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const relatedBlogs = (blogs || []).slice(0, 3);

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors pt-24 pb-20">
      <SEO 
        title="Web Development Company in Raipur | CoreBuild Solutions"
        description="Looking for the top web development company in Raipur? CoreBuild Solutions delivers custom MERN stack websites, eCommerce portals, and software with 95+ PageSpeed scores in Chhattisgarh."
        keywords="web development company in raipur, website development company in raipur, website designing company in raipur, web design company in raipur, custom website development, ecommerce website development, react js development company, MERN stack development, software company in raipur, web application development, responsive website design, SEO friendly website development, website maintenance services"
        canonical="https://corebuildsolutions.in/services/web-development-in-raipur"
        schema={[serviceSchema, localBusinessSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Background Glow Overlay */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none" />
        <div className="liquid-blob bottom-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] pointer-events-none" />
      </div>

      <main className="max-w-5xl mx-auto px-6 relative z-10 text-left">
        <article className="prose dark:prose-invert max-w-none">
          
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-xs font-medium text-slate-500 list-none p-0 m-0">
              <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
              <li>/</li>
              <li><Link to="/services" className="hover:text-blue-500 transition-colors">Services</Link></li>
              <li>/</li>
              <li className="text-blue-600 dark:text-blue-400 font-semibold" aria-current="page">Web Development Company in Raipur</li>
            </ol>
          </nav>

          {/* ==========================================
              H1 HEADER SECTION
             ========================================== */}
          <header className="flex flex-col gap-6 border-b border-slate-200 dark:border-slate-900 pb-10 mb-10">
            <div className="p-4 bg-blue-600/10 text-blue-600 rounded-2xl w-max">
              <Globe size={32} />
            </div>
            <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
              Web Development Company in Raipur
            </h1>
            <p className="text-sm md:text-base font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
              Premier Website Development & Custom Software Engineering Firm in Raipur, Chhattisgarh
            </p>
          </header>

          {/* ==========================================
              SECTION 1: INTRODUCTION & OVERVIEW
             ========================================== */}
          <section className="py-6 flex flex-col gap-5 text-slate-700 dark:text-slate-300 leading-relaxed text-sm md:text-base">
            <p>
              In today's hyper-competitive digital economy, your online presence is no longer just a passive digital business card—it is the central transaction hub, brand authority engine, and lead generation asset of your business. As the premier <strong>web development company in raipur</strong>, <strong>CoreBuild Solutions</strong> engineers high-performance custom websites, web applications, and enterprise software systems tailored specifically for business growth in Raipur, Chhattisgarh, and across India.
            </p>
            <p>
              Many businesses in Raipur struggle with outdated, slow-loading websites built on bloated drag-and-drop templates that fail to convert visitors into paying clients. As a specialized <strong>website development company in raipur</strong>, we take a fundamentally different engineering approach. We bypass legacy template bottlenecks and construct custom, lightning-fast web applications utilizing React.js, Node.js, TypeScript, and modern <Link to="/services/custom-software-development-in-raipur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">MERN stack development</Link> architectures.
            </p>
            <p>
              Whether you are a manufacturing group in Urla Industrial Area, a real estate firm on VIP Road, a retail storefront in Pandri Market, or an emerging tech startup in Raipur, our team delivers custom digital solutions engineered for 95+ Core Web Vitals scores, sub-second latency, and maximum search engine visibility. Discover our complete offerings in our <Link to="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Services Catalog</Link> or explore our <Link to="/services/mobile-app-development-in-raipur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Mobile App Development in Raipur</Link> solutions.
            </p>
          </section>

          {/* CTA 1 */}
          <div className="my-10 p-8 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl border border-blue-800 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-bold text-white">Ready to Outrank Competitors in Raipur?</h3>
              <p className="text-xs text-blue-200">Get a free technical SEO audit and custom website development proposal within 24 hours.</p>
            </div>
            <Link to="/contact" className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg flex-shrink-0 flex items-center gap-2">
              Get Free Website Proposal <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* ==========================================
              SECTION 2: H2 - WHY CHOOSE COREBUILD SOLUTIONS
             ========================================== */}
          <section className="py-8 flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Choose CoreBuild Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Choosing the right <strong>web development company in raipur</strong> dictates your brand's digital trajectory, search engine rankings, and online revenue for years to come. CoreBuild Solutions combines technical mastery, aesthetic luxury, and local accessibility to deliver unmatched ROI:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                  <Zap size={20} />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">Sub-Second Page Load Speed</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  We optimize every asset, query, and bundle to achieve 95+ PageSpeed Insights scores. Our pages load in under 0.8 seconds on mobile networks in Raipur, directly boosting conversion rates.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                  <Code size={20} />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">Custom Decoupled Architecture</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  We write clean, strictly-typed TypeScript code using React.js and Vite. Decoupling the frontend from the database protects API keys and ensures smooth UI performance. Read our <Link to="/blog/react-vs-nextjs-frontend-framework-seo" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">React vs Next.js Framework Guide</Link>.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                  <Layers size={20} />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">SEO-First Engineering</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  We integrate pre-rendered static HTML, Schema.org JSON-LD scripts, canonical tags, and Open Graph cards into every page so Googlebot indexes your keywords instantly.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold">
                  <Award size={20} />
                </div>
                <h3 className="font-heading text-base font-bold text-slate-900 dark:text-white">Luxury Custom UI/UX Design</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our designs feature generous whitespace, premium typography (Outfit font), and smooth Framer Motion micro-interactions tailored to your brand prestige. Explore our <Link to="/services/ui-ux-design-in-raipur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">UI/UX Design in Raipur</Link> solutions.
                </p>
              </div>
            </div>
          </section>

          {/* CTA 2 */}
          <div className="my-8 p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Need a Web Engineering Strategy Session?</h4>
              <p className="text-xs text-slate-500 mt-1">Talk directly with our lead full-stack software architects in Raipur.</p>
            </div>
            <Link to="/contact" className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Schedule Free Consultation
            </Link>
          </div>

          {/* ==========================================
              SECTION 3: H2 - OUR WEB DEVELOPMENT SERVICES
             ========================================== */}
          <section className="py-8 flex flex-col gap-8">
            <div>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
                Our Web Development Services
              </h2>
              <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                As a full-stack <strong>web development company in raipur</strong>, we offer end-to-end web engineering, custom application design, and enterprise software solutions tailored to your business goals:
              </p>
            </div>

            {/* H3: Business Websites */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                Business Websites
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                We design and develop high-converting, <strong>responsive website design</strong> solutions for corporate enterprises, local businesses, and professional services across Raipur. Every corporate website includes custom interactive wireframes, lead capture triggers, automated contact routing, and complete mobile optimization. Whether you operate in legal, healthcare, real estate, or industrial manufacturing, our business websites establish immediate market authority.
              </p>
            </div>

            {/* H3: Ecommerce Development */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                Ecommerce Development
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Scale your online retail business with high-throughput <strong>ecommerce website development</strong> in Raipur. We build custom online storefronts with sub-second product catalog filtering, multi-currency support, automated inventory synchronization, and PCI-DSS compliant checkout integration (Razorpay, Stripe, PayU, PhonePe). Learn more about our <Link to="/services/ecommerce-development-in-raipur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">E-commerce Development in Raipur</Link> solutions.
              </p>
            </div>

            {/* H3: Custom Web Applications */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                Custom Web Applications
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                When off-the-shelf software falls short, our <strong>software company in raipur</strong> engineers <strong>custom website development</strong> portals, B2B SaaS dashboards, multi-tenant client portals, and administrative management platforms. We construct custom database endpoints using PostgreSQL, MongoDB, and Redis caching to process complex data workflows seamlessly.
              </p>
            </div>

            {/* H3: React Development */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                React Development
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                As a dedicated <strong>react js development company</strong>, we harness React 19, Virtual DOM rendering, and modular component architectures to build fluid, app-like user experiences. Our React web applications feature dynamic state management, smooth routing, and instant user interaction feedback.
              </p>
            </div>

            {/* H3: Node.js Development */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                Node.js Development
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Power your web frontend with asynchronous, non-blocking Node.js backends. We build scalable RESTful APIs, GraphQL endpoints, microservices, and real-time WebSocket servers that handle high concurrent user traffic without query latency.
              </p>
            </div>

            {/* H3: MERN Stack Development */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                MERN Stack Development
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Leverage the power of full-stack JavaScript. Our <strong>MERN stack development</strong> services unite MongoDB, Express.js, React.js, and Node.js to create robust, unified software systems. This eliminates stack friction and accelerates time-to-market for startups and enterprises in Chhattisgarh.
              </p>
            </div>

            {/* H3: WordPress Development */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                WordPress Development
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                For content-heavy blogs and news portals, we offer custom Headless WordPress development. We decouple WordPress CMS backends from fast React frontends, giving non-technical staff an intuitive editing experience while maintaining maximum speed and security.
              </p>
            </div>

            {/* H3: Website Redesign */}
            <div className="flex flex-col gap-3 p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white text-blue-600 dark:text-blue-400">
                Website Redesign
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Transform your outdated, slow website into a modern lead magnet. Our website redesign services upgrade visual UI/UX aesthetics, migrate legacy stacks to React/Vite, fix Core Web Vitals penalties, and elevate search engine rankings. Check our <Link to="/blog/website-development-cost-india-2026" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Website Development Cost Guide</Link> for pricing details.
              </p>
            </div>
          </section>

          {/* CTA 3 */}
          <div className="my-10 p-8 bg-blue-600 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="font-heading text-lg font-bold text-white">Have a Specific Service Requirement?</h3>
              <p className="text-xs text-blue-100">Review technical scope, pricing tiers, and delivery roadmaps with our engineers.</p>
            </div>
            <Link to="/contact" className="px-6 py-3.5 bg-white text-blue-600 hover:bg-slate-100 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex-shrink-0">
              Request Customized Quote
            </Link>
          </div>

          {/* ==========================================
              SECTION 4: H2 - OUR DEVELOPMENT PROCESS
             ========================================== */}
          <section className="py-8 flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Our Development Process
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              As a methodical <strong>web development company in raipur</strong>, we execute every project through a transparent 6-stage engineering process designed to guarantee on-time delivery and flawless code:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-600 text-2xl leading-none">01</span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Discovery & Schema Mapping</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    We audit your business processes, define target personas, map relational database schemas, and outline precise functional specifications.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-600 text-2xl leading-none">02</span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Figma UI/UX Prototyping</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our designers craft interactive wireframes in Figma, testing gesture curves, whitespace spacing, dark/light modes, and conversion triggers.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-600 text-2xl leading-none">03</span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Agile Engineering Sprints</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our full-stack developers write clean, type-safe TypeScript code in bi-weekly sprints, backed by automated unit tests and peer code reviews.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-600 text-2xl leading-none">04</span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">API Integration & Caching</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    We connect database adaptors, integrate payment gateways (Stripe/Razorpay), and configure Redis caching layers for sub-second query response times.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-600 text-2xl leading-none">05</span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Edge CDN Deployment</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    We compile, minify, and deploy static assets to Vercel/AWS Edge CDN networks, optimizing asset compression and WebP/AVIF image rendering.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-600 text-2xl leading-none">06</span>
                <div>
                  <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Hypercare Support & Maintenance</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    We provide 3 months of complimentary Hypercare support, continuous uptime monitoring, Sentry telemetry logging, and regular <Link to="/services/seo-services-in-raipur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">website maintenance services</Link>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 4 */}
          <div className="my-8 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-white">Want to See How We Execute Sprints?</h4>
              <p className="text-xs text-slate-400 mt-1">Review our engineering workflows and explore past client case studies.</p>
            </div>
            <Link to="/portfolio" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              View Portfolio Case Studies
            </Link>
          </div>

          {/* ==========================================
              SECTION 5: H2 - INDUSTRIES WE SERVE
             ========================================== */}
          <section className="py-8 flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Industries We Serve
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Serving businesses across Chhattisgarh as a leading <strong>web development company in raipur</strong>, we construct custom web platforms engineered for specific industry constraints:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">Urla & Siltara Industrial Manufacturing</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Custom inventory management portals, real-time raw material trackers, ERP dashboards, and supply chain applications for steel, cement, and industrial plants in Raipur.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">Real Estate & Property Developers</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  High-converting real estate portals with interactive 3D WebGL floor plans, Mapbox location queries, plot booking management, and AI lead routing.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">Retail & E-commerce Stores in Pandri</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fast online store portals for textile, jewelry, and electronics retailers in Pandri Market and Jaistambh Chowk looking to expand D2C sales across India.
                </p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-2">Healthcare, Clinics & Education</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  HIPAA-compliant hospital appointment booking applications, patient portals, coaching institute portals, and online learning management platforms in Shankar Nagar and VIP Road.
                </p>
              </div>
            </div>
          </section>

          {/* CTA 5 */}
          <div className="my-8 p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Looking for Custom Industry Solutions?</h4>
              <p className="text-xs text-slate-500 mt-1">Read our comprehensive guide on web development for Raipur businesses.</p>
            </div>
            <Link to="/blog/web-development-in-raipur" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Read Raipur Business Guide
            </Link>
          </div>

          {/* ==========================================
              SECTION 6: H2 - WHY BUSINESSES IN RAIPUR TRUST US
             ========================================== */}
          <section className="py-8 flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why Businesses in Raipur Trust Us
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Local enterprises choose our <strong>web development company in raipur</strong> because we combine transparent business practices, verifiable engineering standards, and robust EEAT credentials:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-4">
              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <ShieldCheck size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">100% Code Ownership</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    You own 100% of your source code, database scripts, and intellectual property. No vendor lock-in or proprietary CMS fees.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <Award size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">ISO & Security Standards</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our developers write secure TypeScript code following OWASP security guidelines, protecting user credentials and transaction logs.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <MapPin size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">Physical Office in Raipur</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Our team is based locally on VIP Road, Raipur. We meet face-to-face for sprint reviews, architectural mapping, and dedicated strategy sessions.
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <CheckCircle size={28} className="text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mb-1">99.9% Uptime Guarantee</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    Deploying to Vercel and AWS Edge CDN networks guarantees high availability, automated SSL encryption, and instant global failover support. Learn more in our <Link to="/blog/optimize-google-business-profile-local-seo-raipur" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">Raipur Local SEO Guide</Link>.
                  </p>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="my-6 p-8 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col gap-6">
              <h3 className="font-heading text-lg font-bold text-white border-b border-slate-800 pb-4">What Our Raipur Clients Say</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "CoreBuild Solutions completely redesigned our steel manufacturing portal. Their MERN stack expertise reduced our page load time from 4.5 seconds to 0.7 seconds. Inbound lead inquiries increased by 210% in the first quarter!"
                  </p>
                  <span className="text-xs font-bold text-white">— Rajesh Agarwal, Managing Director, Urla Industrial Group</span>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                  <p className="text-xs text-slate-300 italic leading-relaxed">
                    "As a retail brand in Pandri, we needed an e-commerce platform that could handle high festival sales volume without crashing. CoreBuild delivered a stunning React storefront with Razorpay checkout. Best web development company in Raipur!"
                  </p>
                  <span className="text-xs font-bold text-white">— Priya Sharma, Founder, Luxe Couture Raipur</span>
                </div>
              </div>
            </div>
          </section>

          {/* CTA 6 */}
          <div className="my-8 p-6 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-white">Join 50+ Successful Businesses in Raipur</h4>
              <p className="text-xs text-blue-200">Schedule a face-to-face consultation at our Raipur office or your premises.</p>
            </div>
            <Link to="/about" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Learn About Our Team
            </Link>
          </div>

          {/* ==========================================
              SECTION 7: H2 - TECHNOLOGIES WE USE
             ========================================== */}
          <section className="py-8 flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Technologies We Use
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We construct custom web applications using modern, battle-tested software engineering stacks:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 my-4">
              <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">Frontend Frameworks</h3>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> React 19 / Vite</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Next.js 15</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> TypeScript</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Tailwind CSS v4</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Framer Motion</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">Backend & APIs</h3>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Node.js Runtime</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Express.js API</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Python FastAPI</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> GraphQL Server</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> RESTful Services</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">Databases & Cache</h3>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> PostgreSQL</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> MongoDB Atlas</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Prisma ORM</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Redis In-Memory Cache</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Supabase Client</li>
                </ul>
              </div>

              <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
                <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">Cloud & AI Engine</h3>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Vercel Edge CDN</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> AWS CloudFront</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Docker Containers</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> OpenAI & Claude API</li>
                  <li className="flex items-center gap-2"><CheckCircle size={12} className="text-blue-500" /> Pinecone Vector DB</li>
                </ul>
              </div>
            </div>
          </section>

          {/* CTA 7 */}
          <div className="my-8 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-white">Interested in Artificial Intelligence Integrations?</h4>
              <p className="text-xs text-slate-400 mt-1">Explore our custom RAG chatbot and LLM solutions in Raipur.</p>
            </div>
            <Link to="/services/ai-development-in-raipur" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Explore AI Development
            </Link>
          </div>

          {/* ==========================================
              SECTION 8: H2 - FREQUENTLY ASKED QUESTIONS
             ========================================== */}
          <section className="py-12 border-t border-slate-200 dark:border-slate-900 mt-8">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h2>

            <div className="flex flex-col gap-4">
              {faqsData.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div
                    key={index}
                    className="border border-slate-200 dark:border-slate-900 rounded-2xl overflow-hidden bg-white dark:bg-slate-950/20 backdrop-blur-sm"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-semibold text-sm md:text-base text-slate-900 dark:text-white transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-900/30 cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <Minus size={16} className="text-blue-500" /> : <Plus size={16} />}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: 'auto' }}
                          exit={{ height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-900 pt-4">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

          {/* ==========================================
              SECTION 9: H2 - CONTACT COREBUILD SOLUTIONS
             ========================================== */}
          <section className="py-12 border-t border-slate-200 dark:border-slate-900 mt-8 flex flex-col gap-6">
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Contact CoreBuild Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Ready to partner with the leading <strong>web development company in raipur</strong>? Reach out to our technical consulting team today to discuss your website scope, wireframes, and pricing breakdown.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-4">
              <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
                <MapPin className="text-blue-600 mb-1" size={24} />
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Visit Our Raipur Office</h3>
                <p className="text-xs text-slate-500">VIP Road, Near Magneto Mall, Raipur, Chhattisgarh 492001</p>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
                <Phone className="text-blue-600 mb-1" size={24} />
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Direct Phone Call</h3>
                <a href="tel:+919244007322" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">+91-9244007322</a>
              </div>

              <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
                <Mail className="text-blue-600 mb-1" size={24} />
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Email Consultation</h3>
                <a href="mailto:contact@corebuildsolutions.in" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">contact@corebuildsolutions.in</a>
              </div>
            </div>

            {/* Final High-Conversion CTA Banner */}
            <div className="relative rounded-3xl bg-slate-900 text-white p-10 md:p-14 overflow-hidden shadow-2xl flex flex-col items-center gap-6 text-center border border-slate-800 mt-6">
              <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
              
              <h3 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight leading-tight relative z-10">
                Let's Build Your High-Converting Website
              </h3>
              
              <p className="text-xs md:text-sm text-slate-300 max-w-xl relative z-10 leading-relaxed">
                Contact CoreBuild Solutions today to secure your complimentary architectural blueprint and strategic roadmap.
              </p>
              
              <Link
                to="/contact"
                className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 relative z-10 flex items-center gap-2 group transition-all"
              >
                Schedule Free Consultation Session <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          </section>

          {/* Related Blogs Section */}
          {relatedBlogs.length > 0 && (
            <footer className="py-12 border-t border-slate-200 dark:border-slate-900 mt-12">
              <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-6">
                Related Web Engineering Insights
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {relatedBlogs.map((blog) => (
                  <Link 
                    key={blog.id} 
                    to={`/blog/${blog.slug || blog.id}`}
                    className="p-5 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col justify-between hover:border-blue-500/30 transition-all group"
                  >
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-2 py-0.5 rounded">
                        {blog.category}
                      </span>
                      <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white mt-2 group-hover:text-blue-500 transition-colors line-clamp-2">
                        {blog.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-slate-400 mt-4 flex items-center gap-1 font-semibold">
                      Read Article <ArrowUpRight size={10} />
                    </span>
                  </Link>
                ))}
              </div>
            </footer>
          )}

        </article>
      </main>
    </div>
  );
}
