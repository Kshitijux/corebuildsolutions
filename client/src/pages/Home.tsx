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
  ChevronRight
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';

export default function Home() {
  const navigate = useNavigate();
  const { projects, services, testimonials, blogs, faqs, homeSections, seoSettings } = useDatabase();
  
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

  // Helper to get home section content by key
  const getSectionContent = (key: string, fallback: any) => {
    const section = homeSections.find(hs => hs.key === key);
    return section ? section.content : fallback;
  };

  const heroContent = getSectionContent('hero', {
    badge: 'Award-Winning Digital Craftsmanship',
    title: 'Building the Products Premium Brands Want.',
    description: 'We craft high-performance web applications, native-feeling mobile software, and custom AI automation pipelines engineered for absolute speed and luxury aesthetic design.',
    ctaText1: 'Book a consultation',
    ctaText2: 'View Case Studies',
    stats: [
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '50M%', label: 'Capital Raised' },
      { value: '98%', label: 'Lighthouse Avg' }
    ]
  });

  const partnersContent = getSectionContent('partners', {
    companies: ['Stripe', 'Linear', 'Vercel', 'Framer', 'Cuberto', 'Apple', 'Apex Group', 'LuxeDining']
  });

  const aiContent = getSectionContent('aiSection', {
    badge: 'Cognitive Engineering',
    title: 'AI integrations that save real time.',
    description: 'We integrate state-of-the-art Large Language Models (LLMs), RAG lookup vector search, and dynamic agent architectures directly into custom dashboards. No standard bots; custom automation designed for your workflows.',
    features: [
      'RAG Vector (Pinecone/pgvector)',
      'Semantic Intent routing gates',
      'Llama & GPT-4o fine-tuning',
      'Sub-second caching endpoints'
    ]
  });

  const processContent = getSectionContent('process', {
    steps: [
      { step: '01', title: 'Blueprint & Audit', desc: 'We audit your requirements, draw system wireframes, and verify performance roadblocks.' },
      { step: '02', title: 'Luxury UI Design', desc: 'Designing high-fidelity screens utilizing Outfit fonts, spacing ratios, and motion curves.' },
      { step: '03', title: 'TypeScript Build', desc: 'Developing with typed safety, component decoupling, and sub-second bundle compilation.' },
      { step: '04', title: 'Edge Deployment', desc: 'Deploying to global CDN servers, caching APIs, and optimizing Lighthouse logs to 95+.' }
    ]
  });

  const ctaContent = getSectionContent('ctaBanner', {
    badge: 'Bookings Active for Q3 2026',
    title: "Let's craft your next digital breakthrough.",
    description: 'Secure a strategic blueprint session to outline project specifications, timelines, budget allocations, and performance frameworks.',
    ctaText: 'Initiate Discussion'
  });

  const homeSeo = seoSettings.find(s => s.page === 'home') || {
    title: 'CoreBuild Solutions | Premium Global Web & Software Agency',
    description: 'We design and engineer elite web applications, mobile apps, and custom AI systems that premium businesses trust. Beautiful design meets world-class engineering.',
    keywords: 'web design, web development, premium agency, custom software, AI automation, luxury brands design'
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://corebuildsolutions.in/#organization",
    "name": "CoreBuild Solutions",
    "url": "https://corebuildsolutions.in",
    "logo": "https://corebuildsolutions.in/logo.png",
    "sameAs": [
      "https://twitter.com",
      "https://linkedin.com",
      "https://github.com",
      "https://www.instagram.com/corebuildsolutions.in/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-800-555-0199",
      "contactType": "customer service",
      "email": "partner@corebuildsolutions.in"
    }
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

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors">
      <SEO 
        title={homeSeo.title}
        description={homeSeo.description}
        keywords={homeSeo.keywords}
        schema={[orgSchema, webSiteSchema]}
      />
      
      {/* BACKGROUND DECORATIONS */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 animate-pulse-slow" />
        <div className="liquid-blob top-1/2 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 animate-float" />
        <div className="liquid-blob bottom-10 left-1/3 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/5 animate-pulse-slow" />
      </div>

      {/* ==========================================
          HERO SECTION
         ========================================== */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-8 z-10 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wide uppercase w-max"
            >
              <Sparkles size={12} /> {heroContent.badge}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
            >
              {heroContent.title.includes('Premium Brands') ? (
                <>
                  {heroContent.title.split('Premium Brands')[0]}
                  <span className="text-blue-600 dark:text-blue-500">Premium Brands</span>
                  {heroContent.title.split('Premium Brands')[1]}
                </>
              ) : (
                heroContent.title
              )}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base md:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl"
            >
              {heroContent.description}
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
                {heroContent.ctaText1}
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/portfolio"
                className="px-8 py-4 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm rounded-full font-semibold text-sm transition-colors flex items-center gap-2 group"
              >
                {heroContent.ctaText2}
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
              {heroContent.stats.map((stat: any, idx: number) => (
                <div key={idx}>
                  <h4 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">{stat.value}</h4>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Floating Mockup (Apple/Linear Style wireframe illustration) */}
          <div className="lg:col-span-5 relative flex items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-sm aspect-[4/5] rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white/40 dark:bg-slate-950/40 backdrop-blur-md p-6 shadow-2xl flex flex-col justify-between overflow-hidden group"
            >
              {/* Glass Reflection effect */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500" />
              
              {/* Inside card design */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                </div>
                <div className="px-3 py-1 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-full text-[9px] tracking-wide font-medium">
                  SYSTEM CORE: ONLINE
                </div>
              </div>

              {/* Wireframe lines */}
              <div className="flex flex-col gap-4 my-8">
                <div className="w-2/3 h-6 bg-blue-600/10 rounded-full animate-pulse" />
                <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800" />
                <div className="space-y-2">
                  <div className="w-full h-3 bg-slate-300/30 dark:bg-slate-800/30 rounded-full" />
                  <div className="w-5/6 h-3 bg-slate-300/30 dark:bg-slate-800/30 rounded-full" />
                  <div className="w-4/6 h-3 bg-slate-300/30 dark:bg-slate-800/30 rounded-full" />
                </div>
                <div className="w-full h-[1px] bg-slate-200 dark:bg-slate-800" />
                {/* SVG glowing chart mockup */}
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

      {/* ==========================================
          TRUSTED COMPANIES SLIDER (MARQUEE)
         ========================================== */}
      <section className="py-12 border-t border-b border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-950/20 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-slate-400 mb-8">
            Empowering Products for Modern Teams Worldwide
          </p>
        </div>
        <div className="relative flex overflow-x-hidden w-full">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 pr-16 text-slate-400 dark:text-slate-600 font-heading font-extrabold text-2xl tracking-widest uppercase">
            {partnersContent.companies.map((c: string, i: number) => (
              <span key={i} className="hover:text-blue-500 transition-colors duration-300">{c}</span>
            ))}
            {partnersContent.companies.map((c: string, i: number) => (
              <span key={`dup-${i}`} className="hover:text-blue-500 transition-colors duration-300">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          SERVICES SUMMARY GRID
         ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Capabilities</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            Engineered for Growth & Speed.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            We operate at the intersection of high-end product design, scalable database architectures, and cognitive machine learning pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((srv, idx) => {
            const icons = {
              'Globe': Globe,
              'Smartphone': Smartphone,
              'Cpu': Cpu
            };
            // Default to layers if mismatch
            const Icon = icons[srv.icon as keyof typeof icons] || Layers;

            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="glass-card rounded-3xl p-8 hover:border-blue-500/30 group text-left relative overflow-hidden"
              >
                <div className="w-12 h-12 rounded-2xl bg-blue-600/10 dark:bg-blue-600/10 text-blue-600 dark:text-blue-500 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                  {srv.name}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {srv.description}
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase text-blue-600 dark:text-blue-500 group/link"
                >
                  Explore Details
                  <ArrowRight size={14} className="group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ==========================================
          PORTFOLIO SHOWCASE
         ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-900">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-16">
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Case Studies</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
              Selected Showcase
            </h2>
          </div>
          <Link
            to="/portfolio"
            className="px-6 py-3 border border-slate-200 dark:border-slate-800 hover:border-slate-400 dark:hover:border-slate-700 bg-white/30 dark:bg-slate-900/30 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-2 group"
          >
            All Projects
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activeProjects.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              onClick={() => navigate('/portfolio')}
              className="glass-card rounded-3xl overflow-hidden group cursor-pointer border border-slate-200 dark:border-slate-900 hover:border-blue-500/20"
            >
              {/* Media Wrapper */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={proj.image}
                  alt={`CoreBuild Solutions Case Study - ${proj.title}`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/70 backdrop-blur-md rounded-full text-[10px] text-white tracking-widest uppercase font-semibold border border-white/10">
                  {proj.category}
                </div>
              </div>

              {/* Text Info */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-500 mb-6">
                    {proj.client}
                  </p>
                </div>
                
                <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-900 text-xs">
                  {/* Tag list */}
                  <div className="flex gap-2">
                    {proj.tags.slice(0, 3).map(t => (
                      <span key={t} className="px-2 py-1 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-md text-[10px] text-slate-600 dark:text-slate-400">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-blue-600 dark:text-blue-500 font-semibold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Case Details <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ==========================================
          AI INTEGRATION SOLUTIONS BANNER
         ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-900">
        <div className="relative rounded-3xl bg-slate-900 text-white p-8 md:p-12 overflow-hidden border border-slate-800 shadow-2xl">
          {/* Glowing Blur background */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/20 blur-[100px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            <div className="lg:col-span-8 flex flex-col gap-6 text-left">
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-600/20 border border-blue-500/35 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-400 w-max">
                <Cpu size={14} /> {aiContent.badge}
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
                {aiContent.title}
              </h2>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed max-w-xl">
                {aiContent.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
                {aiContent.features.map((feat: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <ShieldCheck size={14} />
                    </div>
                    <span className="text-xs text-slate-300">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/5 relative animate-spin-slow">
                <Cpu size={48} className="text-blue-500 animate-pulse" />
                <div className="absolute top-0 left-0 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          OUR PROCESS / WORKFLOW
         ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-900 text-center">
        <div className="max-w-3xl mx-auto mb-20 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Delivery Roadmap</span>
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
            How We Build.
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            A standardized four-step engineering workflow built on transparency, speed, and continuous inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[1px] bg-slate-200 dark:bg-slate-800 z-0" />

          {processContent.steps.map((item: any, index: number) => (
            <div key={index} className="relative z-10 flex flex-col gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 shadow-md flex items-center justify-center font-heading font-extrabold text-blue-500 text-lg">
                {item.step}
              </div>
              <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ==========================================
          CLIENT TESTIMONIALS CAROUSEL
         ========================================== */}
      <section className="py-24 bg-slate-100/50 dark:bg-slate-950/20 border-t border-b border-slate-200 dark:border-slate-900 px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative">
          
          {/* Carousel Navigation */}
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 hidden sm:flex items-center justify-between pointer-events-none">
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors pointer-events-auto cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 hover:text-blue-500 hover:border-blue-500 transition-colors pointer-events-auto cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="max-w-2xl mx-auto flex flex-col items-center gap-8">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Testimonials</span>
            
            <div className="relative min-h-[220px] w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {testimonials.length > 0 && (
                  <motion.div
                    key={currentTestimonial}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col items-center gap-6"
                  >
                    <p className="font-heading text-lg md:text-xl font-medium italic text-slate-800 dark:text-slate-200 leading-relaxed">
                      "{testimonials[currentTestimonial].text}"
                    </p>
                    
                    <div className="flex items-center gap-4 text-left">
                      <img
                        src={testimonials[currentTestimonial].image}
                        alt={`Client testimonial by ${testimonials[currentTestimonial].name}`}
                        loading="lazy"
                        className="w-12 h-12 rounded-full object-cover border border-slate-300 dark:border-slate-800"
                      />
                      <div>
                        <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                          {testimonials[currentTestimonial].name}
                        </h4>
                        <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">
                          {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Nav dots */}
            <div className="flex items-center gap-2 mt-4 sm:hidden">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentTestimonial(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentTestimonial === i ? 'bg-blue-500 w-4' : 'bg-slate-300 dark:bg-slate-800'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ==========================================
          FAQ ACCORDIONS
         ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="text-center mb-16 flex flex-col gap-4">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">FAQ</span>
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="border border-slate-200 dark:border-slate-900 rounded-2xl overflow-hidden bg-white dark:bg-slate-950/20 backdrop-blur-sm"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left font-heading font-semibold text-sm md:text-base text-black dark:text-white transition-colors hover:bg-slate-100/50 dark:hover:bg-slate-900/30"
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
                      <div className="px-6 pb-6 text-xs md:text-sm text-black dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-900 pt-4">
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
          CTA BANNER
         ========================================== */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-slate-200 dark:border-slate-900 text-center">
        <div className="relative rounded-3xl bg-gradient-to-tr from-blue-600 to-indigo-700 text-white p-12 overflow-hidden shadow-2xl flex flex-col items-center gap-8">
          {/* Glass Overlay Glow */}
          <div className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" />
          
          <div className="relative z-10 max-w-2xl flex flex-col items-center gap-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-semibold uppercase tracking-wider">
              <Clock size={12} /> {ctaContent.badge}
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
              {ctaContent.title}
            </h2>
            <p className="text-sm md:text-base text-blue-100 leading-relaxed max-w-lg mt-2">
              {ctaContent.description}
            </p>
            
            <Link
              to="/contact"
              className="mt-4 px-10 py-5 bg-white text-blue-600 hover:bg-slate-100 rounded-full font-bold text-sm shadow-xl shadow-blue-900/30 flex items-center gap-2 group transition-all duration-300"
            >
              {ctaContent.ctaText} <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
