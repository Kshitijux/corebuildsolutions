import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Cpu, 
  Globe, 
  Smartphone, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ArrowRight,
  Plus,
  Minus,
  ChevronLeft,
  ChevronRight,
  Zap,
  Code,
  Award,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Star,
  ShoppingBag,
  Server,
  Database,
  Terminal,
  Lock,
  UserCheck,
  TrendingUp,
  FileCode
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';

export default function Home() {
  const navigate = useNavigate();
  const { projects, services, testimonials, blogs, homeSections, seoSettings } = useDatabase();
  
  // Testimonial Carousel State
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const activeProjects = projects.filter(p => p.featured);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Autoplay testimonials
  useEffect(() => {
    if (testimonials.length > 0) {
      const timer = setInterval(nextTestimonial, 8000);
      return () => clearInterval(timer);
    }
  }, [testimonials.length]);

  // Structured Data Schemas
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://corebuildsolutions.in/#organization",
    "name": "CoreBuild Solutions",
    "url": "https://corebuildsolutions.in",
    "logo": "https://corebuildsolutions.in/logo.png",
    "sameAs": [
      "https://github.com/Kshitijux/corebuildsolutions",
      "https://www.instagram.com/corebuildsolutions.in/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9244007322",
      "contactType": "customer service",
      "email": "contact@corebuildsolutions.in"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://corebuildsolutions.in/#localbusiness",
    "name": "CoreBuild Solutions - Web Development Company in Raipur",
    "image": "https://corebuildsolutions.in/logo.png",
    "url": "https://corebuildsolutions.in",
    "telephone": "+91-9244007322",
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

  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://corebuildsolutions.in/#professional-service",
    "name": "CoreBuild Solutions - Web Engineering & Software Development Agency",
    "url": "https://corebuildsolutions.in",
    "telephone": "+91-9244007322",
    "priceRange": "₹₹",
    "areaServed": [
      { "@type": "City", "name": "Raipur" },
      { "@type": "State", "name": "Chhattisgarh" },
      { "@type": "City", "name": "Bhilai" },
      { "@type": "City", "name": "Durg" },
      { "@type": "City", "name": "Bilaspur" },
      { "@type": "City", "name": "Korba" },
      { "@type": "City", "name": "Raigarh" }
    ]
  };

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://corebuildsolutions.in/#founder",
    "name": "Kshitij",
    "jobTitle": "Founder & Lead Technical Architect",
    "worksFor": {
      "@id": "https://corebuildsolutions.in/#organization"
    },
    "sameAs": [
      "https://github.com/Kshitijux"
    ]
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
      }
    ]
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://corebuildsolutions.in/#website",
    "name": "CoreBuild Solutions",
    "url": "https://corebuildsolutions.in",
    "publisher": {
      "@id": "https://corebuildsolutions.in/#organization"
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://corebuildsolutions.in/#main-service",
    "name": "Website Development & Software Engineering Services",
    "provider": {
      "@id": "https://corebuildsolutions.in/#organization"
    },
    "areaServed": "Chhattisgarh, India"
  };

  const homepageFaqs = [
    {
      q: 'Why is CoreBuild Solutions recognized as the top web development company in Raipur?',
      a: 'CoreBuild Solutions is recognized as the leading web development company in Raipur because we bypass slow, generic WordPress builders and engineer custom, sub-second web applications using React 19, TypeScript, and the MERN stack. We optimize every client build for 95+ Core Web Vitals, enterprise security, and maximum search engine conversion.'
    },
    {
      q: 'Do you offer website development services outside of Raipur across Chhattisgarh?',
      a: 'Yes! While our headquarters is located in Raipur, Chhattisgarh, we provide custom web development, mobile app engineering, and IT software consulting across Bhilai, Durg, Bilaspur, Korba, Raigarh, and all major commercial hubs in Chhattisgarh and India.'
    },
    {
      q: 'How much does custom website development cost in Raipur?',
      a: 'Website development costs in Raipur depend on project complexity, custom functionality, database architecture, and API integrations. High-converting corporate websites start around ₹24,999 to ₹49,999, while custom MERN stack web portals, SaaS platforms, or e-commerce applications range from ₹79,999 to ₹1,50,000+.'
    },
    {
      q: 'What is the difference between a custom web application and a template website?',
      a: 'Template websites rely on heavy pre-made themes with bloated scripts that cause slow 3-5 second page load times and security vulnerabilities. A custom web application built by CoreBuild Solutions uses decoupled frontend code (React/Vite) communicating with fast backend APIs (Node/Express/PostgreSQL), resulting in sub-second page loads, tight security, and total customizability.'
    },
    {
      q: 'How long does it take to design and launch a custom business website?',
      a: 'A standard custom business website takes 2 to 4 weeks from discovery to edge deployment. Complex e-commerce platforms, SaaS portals, or custom database software typically require 4 to 8 weeks in dual-week agile sprints.'
    },
    {
      q: 'Will our new website be 100% mobile-responsive and SEO-friendly?',
      a: 'Yes, absolutely. Every website we build is engineered with mobile-first responsive web design and pre-rendered static HTML shells, Schema.org JSON-LD scripts, canonical tags, and Open Graph metadata so Googlebot can crawl and index your pages instantly.'
    },
    {
      q: 'What stack do your developers use for full-stack MERN development?',
      a: 'Our MERN stack development team utilizes MongoDB Atlas, Express.js API servers, React 19 / Vite frontends, and Node.js backend runtimes, combined with TypeScript, Tailwind CSS, PostgreSQL, Redis caching, and Supabase adaptors.'
    },
    {
      q: 'Can you migrate our existing slow website to a fast React/Vite stack?',
      a: 'Yes. We specialize in website redesign and migration projects, converting slow WordPress, Wix, or legacy HTML sites into ultra-fast React/Vite applications while preserving existing URL structures and boosting search rankings.'
    },
    {
      q: 'Do you provide e-commerce development with payment gateway integration in India?',
      a: 'Yes. We build custom e-commerce stores with sub-second product filtering, cart state persistence, and PCI-DSS compliant checkout integrations for Razorpay, Stripe, PayU, PhonePe, and Cashfree.'
    },
    {
      q: 'What website maintenance services do you offer after launch?',
      a: 'We offer 3 months of complimentary Hypercare support after every launch. Our monthly website maintenance services cover continuous database backups, security patch updates, uptime monitoring, Sentry telemetry logging, and content updates.'
    },
    {
      q: 'Do you build custom Headless CMS solutions for non-technical teams?',
      a: 'Yes. We build Headless WordPress and custom CMS admin dashboards using Supabase or Prisma ORM, allowing your content team to edit text and upload media easily without touching front-end code.'
    },
    {
      q: 'How does page load speed affect Google Ads quality score and organic SEO?',
      a: 'Google rewards websites that load in under 1 second with higher Quality Scores on Google Ads (reducing cost-per-click ad spend) and higher organic rankings on Google Search. Fast pages increase user retention and conversion rates significantly.'
    },
    {
      q: 'Can CoreBuild Solutions integrate artificial intelligence (AI) into our website?',
      a: 'Yes! We engineer custom AI solutions, including OpenAI/Claude API integrations, Pinecone vector database lookup (RAG), dynamic customer service chatbots, and automated lead scoring pipelines.'
    },
    {
      q: 'Who owns the source code and database assets after completion?',
      a: 'You do. CoreBuild Solutions grants you 100% full ownership of all custom source code repositories, design files, database schemas, and server configurations with zero vendor lock-in.'
    },
    {
      q: 'Do you sign Non-Disclosure Agreements (NDAs) before discovery meetings?',
      a: 'Yes. We protect your intellectual property and confidential business ideas by signing standard NDAs prior to initial discovery and technical scoping.'
    },
    {
      q: 'What security measures do you implement to protect web applications?',
      a: 'We implement OWASP top-10 security guidelines, SSL/TLS encryption, CORS policies, rate limiting, SQL injection protection, XSS sanitization, and automated environment variable secret management.'
    },
    {
      q: 'How does your 6-stage software development lifecycle blueprint work?',
      a: 'Our blueprint includes 1) Discovery & Schema Mapping, 2) Figma UI/UX Prototyping, 3) Agile Code Sprints, 4) API Integration & Caching, 5) Edge CDN Deployment, and 6) Hypercare Support & Maintenance.'
    },
    {
      q: 'Why should local businesses in Bhilai, Durg, Bilaspur, and Korba choose CoreBuild?',
      a: 'Businesses across Chhattisgarh choose CoreBuild Solutions because we offer face-to-face consulting in Raipur, rapid local response times, and enterprise-grade software standards that outperform regional template providers.'
    },
    {
      q: 'How do I request a quote or book a strategy session with your team?',
      a: 'You can call us directly at +91-9244007322, email contact@corebuildsolutions.in, or submit a request on our contact page to receive a detailed proposal within 24 hours.'
    },
    {
      q: 'What makes CoreBuild Solutions different from traditional IT agencies in Raipur?',
      a: 'Unlike traditional IT firms that sell generic templates, we are product engineers. We write clean, strictly-typed TypeScript code, craft bespoke glassmorphic UI designs, and engineer custom database models focused entirely on client revenue growth.'
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": homepageFaqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors">
      <SEO 
        title="Web Development Company in Raipur | CoreBuild Solutions"
        description="CoreBuild Solutions is the premier Web Development Company in Raipur, Chhattisgarh. We engineer custom React/MERN stack websites, eCommerce portals, and software with 95+ PageSpeed scores."
        keywords="web development company in raipur, website development company in raipur, website designing company in raipur, web design company in raipur, custom website development, business website development, react js development company, mern stack development, node js development, frontend development, backend development, web application development, responsive website, seo friendly website, corporate website, startup website, website redesign, website maintenance, Raipur, Chhattisgarh, Bhilai, Durg, Bilaspur"
        canonical="https://corebuildsolutions.in/"
        schema={[orgSchema, localBusinessSchema, professionalServiceSchema, personSchema, breadcrumbSchema, webSiteSchema, serviceSchema, faqSchema]}
      />
      
      {/* BACKGROUND DECORATIONS */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 animate-pulse-slow pointer-events-none" />
        <div className="liquid-blob top-1/2 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 animate-float pointer-events-none" />
        <div className="liquid-blob bottom-10 left-1/3 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 animate-pulse-slow pointer-events-none" />
      </div>

      <main>
        {/* ==========================================
            1. HERO SECTION
           ========================================== */}
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
            
            {/* Left Text Content */}
            <header className="lg:col-span-7 flex flex-col gap-8 z-10 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase w-max"
              >
                <Sparkles size={14} /> Premier Web Development Company in Raipur
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="font-heading text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-slate-900 dark:text-white"
              >
                Web Development Company in{' '}
                <span className="text-blue-600 dark:text-blue-500 inline-flex">
                  {'Raipur'.split('').map((char, cIdx) => (
                    <motion.span
                      key={cIdx}
                      initial={{ y: 40, rotate: -15, opacity: 0, filter: 'blur(4px)' }}
                      animate={{ y: 0, rotate: 0, opacity: 1, filter: 'blur(0px)' }}
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 13,
                        delay: 0.45 + cIdx * 0.07
                      }}
                      className="inline-block origin-bottom-left"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
              >
                CoreBuild Solutions is the leading <strong>website development company in raipur</strong>, engineering high-performance custom websites, React/MERN stack applications, eCommerce portals, and software solutions across Chhattisgarh (Raipur, Bhilai, Durg, Bilaspur, Korba, Raigarh).
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4 mt-2"
              >
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-sm shadow-xl shadow-blue-500/25 flex items-center gap-2 group transition-all duration-300"
                >
                  Book Free Consultation
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/portfolio"
                  className="px-8 py-4 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-full font-semibold text-sm transition-colors flex items-center gap-2 group"
                >
                  View Case Studies
                  <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </motion.div>

              {/* Stats badges */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-slate-900 max-w-lg mt-4"
              >
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">99.9%</h4>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Uptime SLA</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">50+</h4>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Projects Delivered</p>
                </div>
                <div>
                  <h4 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">98+</h4>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">Lighthouse Score</p>
                </div>
              </motion.div>

            </header>

            {/* Right Floating Mockup (Apple/Linear Style wireframe illustration) */}
            <div className="lg:col-span-5 relative flex items-center justify-center z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md p-6 shadow-2xl flex flex-col justify-between overflow-hidden group"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="px-3 py-1 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-full text-[9px] tracking-wide font-medium">
                    SYSTEM CORE: RAIPUR
                  </div>
                </div>

                <div className="flex flex-col gap-4 my-8">
                  <div className="w-2/3 h-6 bg-blue-600/10 rounded-full animate-pulse" />
                  <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800" />
                  <div className="space-y-2">
                    <div className="w-full h-3 bg-slate-300/30 dark:bg-slate-800/30 rounded-full" />
                    <div className="w-5/6 h-3 bg-slate-300/30 dark:bg-slate-800/30 rounded-full" />
                    <div className="w-4/6 h-3 bg-slate-300/30 dark:bg-slate-800/30 rounded-full" />
                  </div>
                  <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800" />
                  <div className="w-full h-24 flex items-end gap-1.5 pt-2">
                    <div className="w-full bg-blue-600/25 h-[20%] rounded-sm" />
                    <div className="w-full bg-blue-600/40 h-[45%] rounded-sm" />
                    <div className="w-full bg-blue-600/60 h-[30%] rounded-sm" />
                    <div className="w-full bg-blue-600 h-[75%] rounded-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] animate-bounce" />
                    <div className="w-full bg-blue-600/30 h-[50%] rounded-sm" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>0.8S LOADING</span>
                  <span className="text-blue-500">100% SECURE</span>
                </div>
              </motion.div>
            </div>

          </div>
        </section>

        {/* TRUSTED COMPANIES SLIDER */}
        <section className="py-12 border-t border-b border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-950/20 overflow-hidden">
          <div className="w-full max-w-7xl mx-auto px-6">
            <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
              Trusted by Leading Brands Across Raipur & Chhattisgarh
            </p>
          </div>
          <div className="relative flex overflow-x-hidden w-full">
            <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16 text-slate-400 dark:text-slate-600 font-heading font-extrabold text-2xl tracking-widest uppercase">
              {['Urla Steel Group', 'Luxe Raipur', 'Chattisgarh FinTech', 'Magneto Retail', 'Bhilai Tech', 'Raigarh Logistics', 'Durg Healthcare'].map((c, i) => (
                <span key={i} className="hover:text-blue-500 transition-colors duration-300">{c}</span>
              ))}
              {['Urla Steel Group', 'Luxe Raipur', 'Chattisgarh FinTech', 'Magneto Retail', 'Bhilai Tech', 'Raigarh Logistics', 'Durg Healthcare'].map((c, i) => (
                <span key={`dup-${i}`} className="hover:text-blue-500 transition-colors duration-300">{c}</span>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
            2. WHY COREBUILD SOLUTIONS
           ========================================== */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Competitive Engineering Advantage</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Why CoreBuild Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Choosing the top <strong>web development company in raipur</strong> dictates your long-term organic rankings, conversion rates, and digital brand prestige. CoreBuild Solutions merges technical precision, custom React/Vite development, and local accessibility:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <Zap className="text-blue-600" size={24} />
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Sub-Second Load Speed</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pages optimized to load under 0.8s on 4G networks in Raipur and Chhattisgarh, directly reducing Google Ads bounce rates and raising organic quality scores.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <Code className="text-blue-600" size={24} />
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">Custom Decoupled Code</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Clean, type-safe TypeScript code decoupled from backend databases, preventing script bloat and eliminating theme security vulnerabilities.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <TrendingUp className="text-blue-600" size={24} />
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">SEO-First Engineering</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Pre-rendered static HTML shells with Schema.org JSON-LD scripts embedded directly in the initial HTTP payload for rapid Googlebot indexing.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <Award className="text-blue-600" size={24} />
              <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white">100% Code Ownership</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                You own full proprietary rights to your custom codebase, design assets, and database schemas with zero recurring agency lock-in fees.
              </p>
            </div>
          </div>

          {/* CTA 1 */}
          <div className="mt-10 p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Want to Audit Your Current Website Speed?</h4>
              <p className="text-xs text-slate-500 mt-1">Get a free Lighthouse Core Web Vitals audit from our lead engineers in Raipur.</p>
            </div>
            <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Request Free Audit
            </Link>
          </div>
        </section>

        {/* ==========================================
            3. WEBSITE DEVELOPMENT SERVICES
           ========================================== */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Core Services Spectrum</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Website Development Services
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              As a full-stack <strong>web design company in raipur</strong>, we offer custom digital engineering across 10 specialized service verticals:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((srv) => (
              <div key={srv.id} className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col justify-between hover:border-blue-500/30 transition-all">
                <div className="flex flex-col gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center">
                    <Globe size={20} />
                  </div>
                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">{srv.name}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{srv.description}</p>
                </div>
                <Link to="/services" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mt-6 hover:underline">
                  Learn More <ArrowUpRight size={12} />
                </Link>
              </div>
            ))}
          </div>

          {/* CTA 2 */}
          <div className="mt-10 p-8 bg-blue-600 text-white rounded-3xl shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex flex-col gap-1">
              <h3 className="font-heading text-lg font-bold text-white">Need a Tailored Service Package?</h3>
              <p className="text-xs text-blue-100">Review our custom roadmap options designed for Raipur & Chhattisgarh businesses.</p>
            </div>
            <Link to="/services" className="px-6 py-3.5 bg-white text-blue-600 hover:bg-slate-100 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-md flex-shrink-0">
              Explore All Services
            </Link>
          </div>
        </section>

        {/* ==========================================
            4. CUSTOM WEB APPLICATIONS
           ========================================== */}
        <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-6">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
              <Server size={16} /> Scalable Software Portals
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Custom Web Applications
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              When standard website templates fail to meet complex operational demands, our <strong>web application development</strong> team engineers custom SaaS dashboards, multi-tenant B2B portals, and internal enterprise software. We design relational database schemas using PostgreSQL, MongoDB, and Redis caching to handle high concurrent user queries seamlessly.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
              <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white mb-1">Multi-Tenant Portals</h4>
                <p className="text-[11px] text-slate-500">Secure role-based permissions and custom dashboard metrics.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white mb-1">Decoupled API Gateways</h4>
                <p className="text-[11px] text-slate-500">REST & GraphQL endpoints for microservices communication.</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-950/40 rounded-xl border border-slate-200 dark:border-slate-800">
                <h4 className="font-heading text-xs font-bold text-slate-900 dark:text-white mb-1">Real-Time Data Sync</h4>
                <p className="text-[11px] text-slate-500">WebSocket connections for live financial and inventory updates.</p>
              </div>
            </div>
            <Link to="/services/custom-software-development-in-raipur" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider self-start hover:underline">
              Explore Custom Web Applications <ArrowUpRight size={12} />
            </Link>
          </div>
        </section>

        {/* ==========================================
            5. BUSINESS WEBSITES
           ========================================== */}
        <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-6">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
              <Globe size={16} /> Brand Authority & Lead Generation
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Business Websites
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Our <strong>business website development</strong> solutions are crafted for corporate enterprises, local manufacturers, real estate developers, and professional firms across Raipur, Bhilai, Durg, and Bilaspur. Every business website is engineered with custom Figma wireframes, responsive mobile layouts, automated lead capture forms, and pre-rendered SEO tags.
            </p>
            <Link to="/services/web-development-in-raipur" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider self-start hover:underline">
              View Business Website Solutions <ArrowUpRight size={12} />
            </Link>
          </div>
        </section>

        {/* ==========================================
            6. ECOMMERCE DEVELOPMENT
           ========================================== */}
        <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="p-8 md:p-12 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-6">
            <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">
              <ShoppingBag size={16} /> Sub-Second Retail Portals
            </div>
            <h2 className="font-heading text-2xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Ecommerce Development
            </h2>
            <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Accelerate online retail revenue with our high-throughput <strong>ecommerce website development</strong> in Raipur. We build custom online storefronts with sub-second product filtering, multi-currency support, automated inventory management, and PCI-DSS compliant checkout integration (Razorpay, Stripe, PayU, PhonePe).
            </p>
            <Link to="/services/ecommerce-development-in-raipur" className="inline-flex items-center gap-1 text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider self-start hover:underline">
              Explore E-commerce Development <ArrowUpRight size={12} />
            </Link>
          </div>
        </section>

        {/* ==========================================
            7, 8, 9. MERN, REACT & NODE DEVELOPMENT
           ========================================== */}
        <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 7. MERN Stack */}
            <div className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-4">
              <Code className="text-blue-600" size={24} />
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">MERN Stack Development</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Full-stack JavaScript development utilizing MongoDB, Express.js, React 19, and Node.js to deliver fast, unified web software.
              </p>
              <Link to="/blog/react-vs-nextjs-frontend-framework-seo" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline mt-2">Read Tech Guide →</Link>
            </div>

            {/* 8. React Development */}
            <div className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-4">
              <Cpu className="text-blue-600" size={24} />
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">React Development</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                As a specialized <strong>react js development company</strong>, we harness Virtual DOM speed and component reusability for app-like UX.
              </p>
              <Link to="/services" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline mt-2">Explore React Solutions →</Link>
            </div>

            {/* 9. Node Development */}
            <div className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-4">
              <Terminal className="text-blue-600" size={24} />
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Node.js Development</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Asynchronous, non-blocking <strong>node js development</strong> powering scalable microservices, REST APIs, and GraphQL endpoints.
              </p>
              <Link to="/services" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline mt-2">Explore Backend Architecture →</Link>
            </div>
          </div>
        </section>

        {/* ==========================================
            10, 11, 12. UI/UX, REDESIGN & MAINTENANCE
           ========================================== */}
        <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 10. UI/UX Design */}
            <div className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-4">
              <Layers className="text-blue-600" size={24} />
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">UI/UX Design</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Luxury interactive Figma wireframes, gesture mechanics, whitespace ratios, and conversion-focused visual hierarchy.
              </p>
              <Link to="/services/ui-ux-design-in-raipur" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline mt-2">Explore UI/UX Design →</Link>
            </div>

            {/* 11. Website Redesign */}
            <div className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-4">
              <Zap className="text-blue-600" size={24} />
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Website Redesign</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Migrate slow legacy WordPress or HTML sites to modern React/Vite stacks, eliminating page load penalties and upgrading search rankings.
              </p>
              <Link to="/blog/website-development-cost-india-2026" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline mt-2">Redesign Cost Guide →</Link>
            </div>

            {/* 12. Website Maintenance */}
            <div className="p-8 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-3xl flex flex-col gap-4">
              <ShieldCheck className="text-blue-600" size={24} />
              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">Website Maintenance</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                24/7 uptime telemetry monitoring, Sentry error logging, continuous database backups, and monthly security patch updates.
              </p>
              <Link to="/services/seo-services-in-raipur" className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider hover:underline mt-2">Explore Support Plans →</Link>
            </div>
          </div>

          {/* CTA 3 */}
          <div className="mt-10 p-6 bg-slate-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-white">Need Post-Launch Hypercare Maintenance?</h4>
              <p className="text-xs text-slate-400 mt-1">Every CoreBuild project includes 3 months of priority post-launch support.</p>
            </div>
            <Link to="/contact" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Talk to Our Support Team
            </Link>
          </div>
        </section>

        {/* ==========================================
            13. AI SOLUTIONS
           ========================================== */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-left">
          <div className="p-8 md:p-12 bg-gradient-to-r from-blue-900 to-slate-900 text-white rounded-3xl border border-blue-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-widest">
                <Sparkles size={16} /> Cognitive Engineering
              </div>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-white">
                AI Solutions & Automations
              </h2>
              <p className="text-xs md:text-sm text-blue-200 leading-relaxed">
                We integrate state-of-the-art Large Language Models (LLMs), RAG vector search (Pinecone/pgvector), and automated customer support agents directly into custom web dashboards across Raipur and Chhattisgarh.
              </p>
              <div className="grid grid-cols-2 gap-3 text-xs text-blue-100 font-semibold my-2">
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-400" /> RAG Vector Retrieval</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-400" /> OpenAI / Claude API</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-400" /> Intent Routing Gates</div>
                <div className="flex items-center gap-1.5"><CheckCircle size={14} className="text-blue-400" /> Sub-Second Caching</div>
              </div>
            </div>
            <Link to="/services/ai-development-in-raipur" className="px-8 py-4 bg-white text-slate-900 hover:bg-blue-500 hover:text-white rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-xl flex-shrink-0">
              Explore AI Engineering
            </Link>
          </div>
        </section>

        {/* ==========================================
            14. INDUSTRIES WE SERVE (LOCAL SEO)
           ========================================== */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Chhattisgarh Coverage</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Industries We Serve Across Raipur & Chhattisgarh
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We construct custom web applications for leading enterprise sectors in <strong>Raipur, Bhilai, Durg, Bilaspur, Korba, and Raigarh</strong>:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Urla Manufacturing</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                ERP inventory trackers and supply chain management for steel and industrial plants in Raipur.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">VIP Road Real Estate</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                WebGL 3D property walkthroughs and automated plot booking portals for developers in Raipur.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Pandri Retail & D2C</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Fast e-commerce storefronts for textile and jewelry merchants expanding across India.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">Bhilai & Bilaspur Tech</h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Custom SaaS products, healthcare portals, and educational portals in Bhilai, Durg, Bilaspur, and Raigarh.
              </p>
            </div>
          </div>

          {/* CTA 4 */}
          <div className="mt-10 p-6 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Operating in Bhilai, Durg, or Bilaspur?</h4>
              <p className="text-xs text-slate-500 mt-1">Read our technical guide on web development across Chhattisgarh.</p>
            </div>
            <Link to="/blog/web-development-in-raipur" className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex-shrink-0">
              Read Chhattisgarh Guide
            </Link>
          </div>
        </section>

        {/* ==========================================
            15. DEVELOPMENT PROCESS
           ========================================== */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Rigorous Blueprint Execution</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Our 6-Stage Development Process
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We execute every project through a transparent 6-stage engineering process guaranteeing on-time delivery:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
              <span className="font-heading font-extrabold text-blue-600 text-2xl">01</span>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Discovery & Schema</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Auditing requirements and mapping database schemas.</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
              <span className="font-heading font-extrabold text-blue-600 text-2xl">02</span>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Figma UX Wireframing</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Designing luxury screens and interactive micro-animations.</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
              <span className="font-heading font-extrabold text-blue-600 text-2xl">03</span>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Agile React Sprint</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Writing clean TypeScript code with dual-week client demos.</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
              <span className="font-heading font-extrabold text-blue-600 text-2xl">04</span>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">API & Redis Caching</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Connecting secure payment checkout and caching layers.</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
              <span className="font-heading font-extrabold text-blue-600 text-2xl">05</span>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Edge CDN Deployment</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">Deploying to Vercel/AWS Edge CDN networks with WebP image compression.</p>
              </div>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
              <span className="font-heading font-extrabold text-blue-600 text-2xl">06</span>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white mb-1">Hypercare Support</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">3 months of post-launch priority telemetry monitoring.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ==========================================
            16. TECHNOLOGIES WE USE
           ========================================== */}
        <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Modern Software Stack</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Technologies We Use
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We construct custom web applications using modern, enterprise software stacks:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400">Frontend</h3>
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> React 19 / Vite</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Next.js 15</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> TypeScript</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Tailwind CSS v4</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400">Backend & APIs</h3>
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Node.js / Express</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Python FastAPI</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> GraphQL Server</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> REST Microservices</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400">Database & Cache</h3>
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> PostgreSQL / Prisma</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> MongoDB Atlas</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Redis In-Memory</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Supabase Client</li>
              </ul>
            </div>

            <div className="p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-3">
              <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400">Cloud & Edge</h3>
              <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
              <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold list-none p-0 m-0">
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Vercel Edge CDN</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> AWS CloudFront</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Docker Containers</li>
                <li className="flex items-center gap-1.5"><CheckCircle size={12} className="text-blue-500" /> Pinecone Vector DB</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ==========================================
            17 & 18. PORTFOLIO & CASE STUDIES
           ========================================== */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="max-w-xl flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Featured Case Studies</span>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                Portfolio Showcase
              </h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-full font-bold text-xs uppercase tracking-wider hover:border-blue-500 transition-colors">
              View All Work <ArrowUpRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {activeProjects.slice(0, 2).map((p) => (
              <div key={p.id} className="glass-card rounded-3xl overflow-hidden group flex flex-col justify-between border border-slate-200 dark:border-slate-900">
                <div className="relative aspect-[16/9] overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="p-8 flex flex-col gap-4">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-500">{p.category}</span>
                  <h3 className="font-heading text-2xl font-bold text-slate-900 dark:text-white">{p.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
            19. CLIENT TESTIMONIALS
           ========================================== */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Verified Client Feedback</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              What Business Owners Say
            </h2>
          </div>

          <div className="p-8 md:p-12 bg-slate-900 text-white rounded-3xl border border-slate-800 flex flex-col gap-6">
            <div className="flex items-center gap-1 text-amber-400">
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
              <Star size={18} fill="currentColor" />
            </div>
            <p className="text-sm md:text-base text-slate-200 italic leading-relaxed">
              "CoreBuild Solutions engineered our manufacturing ERP dashboard in Raipur. Their MERN stack expertise reduced our page load time to 0.7 seconds and increased inbound inquiries by 210%. Best web development company in Raipur!"
            </p>
            <div className="flex items-center justify-between border-t border-slate-800 pt-4 text-xs font-bold text-white">
              <span>— Rajesh Agarwal, Managing Director, Urla Industrial Group</span>
              <span className="text-blue-400">Verified Client</span>
            </div>
          </div>
        </section>

        {/* ==========================================
            20. FREQUENTLY ASKED QUESTIONS (20 FAQS)
           ========================================== */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Clear Technical Answers</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Everything you need to know about website development, pricing, timelines, technology stacks, and maintenance in Raipur & Chhattisgarh:
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {homepageFaqs.map((faq, index) => {
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
                    {isOpen ? <Minus size={16} className="text-blue-500 flex-shrink-0" /> : <Plus size={16} className="flex-shrink-0" />}
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
            21. CONTACT COREBUILD SOLUTIONS
           ========================================== */}
        <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-left border-t border-slate-200 dark:border-slate-900">
          <div className="max-w-3xl mb-12 flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Initiate Collaboration</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Contact CoreBuild Solutions
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              Ready to outrank market competitors and build a high-converting website in Raipur? Reach out to our technical team today:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <MapPin className="text-blue-600" size={24} />
              <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Raipur Headquarters</h3>
              <p className="text-xs text-slate-500">VIP Road, Near Magneto Mall, Raipur, Chhattisgarh 492001</p>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <Phone className="text-blue-600" size={24} />
              <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Direct Phone Call</h3>
              <a href="tel:+919244007322" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">+91-9244007322</a>
            </div>

            <div className="p-6 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col gap-2">
              <Mail className="text-blue-600" size={24} />
              <h3 className="font-heading font-bold text-sm text-slate-900 dark:text-white">Email Consultation</h3>
              <a href="mailto:contact@corebuildsolutions.in" className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline">contact@corebuildsolutions.in</a>
            </div>
          </div>

          {/* Final High-Conversion CTA Banner */}
          <div className="relative rounded-3xl bg-slate-900 text-white p-12 md:p-16 overflow-hidden shadow-2xl flex flex-col items-center gap-6 text-center border border-slate-800">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-blue-600/20 blur-[120px] pointer-events-none" />
            
            <h3 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight leading-tight relative z-10">
              Let's Build Your Digital Asset
            </h3>
            
            <p className="text-xs md:text-sm text-slate-300 max-w-xl relative z-10 leading-relaxed">
              Schedule a strategic blueprint session with CoreBuild Solutions today to discuss your website specifications, timelines, and budget breakdown.
            </p>
            
            <Link
              to="/contact"
              className="px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-sm uppercase tracking-wider shadow-xl shadow-blue-600/30 relative z-10 flex items-center gap-2 group transition-all"
            >
              Book Free Strategy Session <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </section>
      </main>

    </div>
  );
}
