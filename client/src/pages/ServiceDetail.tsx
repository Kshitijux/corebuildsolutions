import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Cpu, Check, ArrowLeft, ArrowUpRight, Plus, Minus, Layers, Users, Zap, Award, ShoppingBag, TrendingUp, Terminal } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';
import { detailedServices } from '../servicesContent';
import { fallbackServices } from '../fallbackData';

export default function ServiceDetail() {
  const { id } = useParams();
  const { services, blogs } = useDatabase();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const slugToIdMap: Record<string, string> = {
    'custom-web-applications': 'srv-1',
    'mobile-app-development': 'srv-2',
    'ai-machine-learning': 'srv-3',
    'e-commerce-development': 'srv-4',
    'ui-ux-design': 'srv-5',
    'branding-logo-design': 'srv-6',
    'seo-optimization': 'srv-7',
    'custom-enterprise-software': 'srv-8'
  };

  const serviceId = slugToIdMap[id || ''] || id || '';
  const service = services.find(s => s.id === serviceId) || fallbackServices.find(s => s.id === serviceId);
  const detailedContent = detailedServices[serviceId];

  if (!service || !detailedContent) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-slate-900 gap-6 pt-24 pb-20">
        <h1 className="font-heading text-4xl font-extrabold">Service Architecture Not Found</h1>
        <p className="text-sm text-slate-500 max-w-sm text-center">
          The requested service engineering layer does not exist in our system catalog.
        </p>
        <Link 
          to="/services" 
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-xs uppercase tracking-wider shadow-md transition-colors"
        >
          Return to Services Catalog
        </Link>
      </div>
    );
  }

  const serviceIcons = {
    'Globe': Globe,
    'Smartphone': Smartphone,
    'Cpu': Cpu,
    'ShoppingBag': ShoppingBag,
    'Layers': Layers,
    'Award': Award,
    'LineChart': TrendingUp,
    'Terminal': Terminal
  };
  const Icon = serviceIcons[service.icon as keyof typeof serviceIcons] || Layers;

  // Toggle FAQ Accordion
  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Structured schemas
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://corebuildsolutions.in/services/${id}#service`,
    "name": service.name,
    "description": detailedContent.metaDescription,
    "provider": {
      "@type": "Organization",
      "name": "CoreBuild Solutions",
      "url": "https://corebuildsolutions.in",
      "logo": "https://corebuildsolutions.in/logo.png"
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
        "name": service.name,
        "item": `https://corebuildsolutions.in/services/${id}`
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": detailedContent.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  // Find related blogs for this service
  const serviceKeywords = (detailedContent.keywords || '').toLowerCase();
  const relatedBlogs = (blogs || []).filter(blog => {
    if (!blog) return false;
    const blogCategory = (blog.category || '').toLowerCase();
    const blogTitle = (blog.title || '').toLowerCase();
    const serviceName = (service?.name || '').toLowerCase();
    const serviceSlug = (service?.slug || '').replace('-', ' ').toLowerCase();
    
    // Match based on category, tags, or if the title/summary contains keywords from the service
    const matchesCategory = blogCategory === serviceName || 
                           (serviceSlug && blogCategory.includes(serviceSlug));
    const matchesTags = (blog.tags || []).some(tag => tag && serviceKeywords.includes(tag.toLowerCase()));
    const matchesTitle = blogTitle.split(' ').some(word => word && word.length > 3 && serviceKeywords.includes(word));
    return (matchesCategory || matchesTags || matchesTitle) && blog.published !== false;
  }).slice(0, 3); // show top 3 related blogs

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors pt-24 pb-20">
      <SEO 
        title={detailedContent.seoTitle}
        description={detailedContent.metaDescription}
        keywords={detailedContent.keywords}
        schema={[serviceSchema, breadcrumbSchema, faqSchema]}
      />

      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none" />
        <div className="liquid-blob bottom-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-left">
        
        {/* Back navigation */}
        <Link 
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors mb-10 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Services Catalog
        </Link>

        {/* ==========================================
            HERO HEADER
           ========================================== */}
        <div className="flex flex-col gap-6 border-b border-slate-200 dark:border-slate-900 pb-10 mb-10">
          <div className="p-4 bg-blue-600/10 text-blue-600 rounded-2xl w-max">
            <Icon size={28} />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {detailedContent.h1}
          </h1>
          <p className="text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
            {detailedContent.subtitle}
          </p>
        </div>

        {/* ==========================================
            1. INTRODUCTION SECTION
           ========================================== */}
        <div className="py-8 flex flex-col gap-4">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            {detailedContent.introTitle}
          </h2>
          <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {detailedContent.introduction}
          </p>
        </div>

        {/* CTA 1 (Inline After Intro) */}
        <div className="my-8 p-6 bg-slate-100/50 dark:bg-slate-900/30 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="font-heading font-bold text-xs uppercase text-slate-900 dark:text-white">
              Ready to automate your workflows?
            </h3>
            <p className="text-[10px] text-slate-500 mt-1">
              Discuss your database architecture and custom feature list with our engineering leads.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer flex items-center gap-1 flex-shrink-0"
          >
            Request Free Proposal <ArrowUpRight size={12} />
          </Link>
        </div>

        {/* ==========================================
            2. WHY CHOOSE COREBUILD SOLUTIONS
           ========================================== */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {detailedContent.whyChooseUsTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {detailedContent.whyChooseUsDesc}
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {detailedContent.whyChooseUsPoints.map((point, idx) => (
              <div key={idx} className="flex flex-col gap-2 p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <div className="w-6 h-6 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-bold text-[10px]">
                  ✓
                </div>
                <h3 className="font-heading text-xs font-bold text-slate-900 dark:text-white uppercase mt-1">
                  {point.title}
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            3. DEVELOPMENT PROCESS
           ========================================== */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {detailedContent.processTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {detailedContent.processDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detailedContent.processSteps.map((step, idx) => (
              <div key={idx} className="p-5 bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl flex gap-4">
                <span className="font-heading font-extrabold text-blue-500 text-xl leading-none">
                  {step.step}
                </span>
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="font-heading font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA 2 (After Process) */}
        <div className="my-8 p-8 bg-slate-900 text-white rounded-3xl relative overflow-hidden flex flex-col items-center gap-4 text-center">
          <h3 className="font-heading text-lg md:text-xl font-bold relative z-10">
            Let's structure your customized timeline.
          </h3>
          <p className="text-[10px] md:text-xs text-slate-400 max-w-md relative z-10 leading-relaxed">
            Every software product we build is designed for sub-second edge rendering and matches corporate security guidelines.
          </p>
          <Link
            to="/contact"
            className="px-6 py-3 bg-blue-650 hover:bg-blue-600 text-white rounded-full font-semibold text-[10px] uppercase tracking-wider relative z-10 transition-colors cursor-pointer"
          >
            Book Free Consultation Session
          </Link>
        </div>

        {/* ==========================================
            4. TECHNOLOGIES WE USE
           ========================================== */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {detailedContent.techTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {detailedContent.techDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {detailedContent.techCategories.map((cat, idx) => (
              <div key={idx} className="flex flex-col gap-3 p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <h3 className="font-heading text-xs font-extrabold uppercase text-blue-600 dark:text-blue-400 tracking-wider">
                  {cat.name}
                </h3>
                <div className="h-[1px] bg-slate-100 dark:bg-slate-800 w-full" />
                <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300 font-semibold">
                  {cat.items.map((item, iIdx) => (
                    <li key={iIdx} className="flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full bg-blue-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            5. INDUSTRIES WE SERVE
           ========================================== */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {detailedContent.industriesTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {detailedContent.industriesDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {detailedContent.industries.map((ind, idx) => (
              <div key={idx} className="p-5 bg-white dark:bg-slate-900/20 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <h3 className="font-heading font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            6. BENEFITS
           ========================================== */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {detailedContent.benefitsTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {detailedContent.benefitsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {detailedContent.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                  <Zap size={14} />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading font-bold text-xs text-slate-900 dark:text-white uppercase">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            7. WHY BUSINESSES CHOOSE US
           ========================================== */}
        <div className="py-8 flex flex-col gap-6">
          <div>
            <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
              {detailedContent.whyBusinessesChooseUsTitle}
            </h2>
            <p className="text-xs md:text-sm text-slate-500">
              {detailedContent.whyBusinessesChooseUsDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {detailedContent.whyBusinessesChooseUsPoints.map((point, idx) => (
              <div key={idx} className="flex gap-4 p-5 bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-900 rounded-2xl">
                <div className="w-8 h-8 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award size={16} />
                </div>
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="font-heading font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                    {point.title}
                  </h3>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            8. FAQ ACCORDIONS (6-8 Questions)
           ========================================== */}
        <div className="py-12 border-t border-slate-200 dark:border-slate-900 mt-8">
          <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-4">
            {detailedContent.faqs.map((faq, index) => {
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
        </div>

        {/* ==========================================
            8.2. APPLE-STYLE SERVICES CAROUSEL
           ========================================== */}
        <div className="py-12 border-t border-slate-200 dark:border-slate-900 mt-12 text-left">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Service Ecosystem</span>
              <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Explore Our Technical Capabilities
              </h2>
            </div>
            <p className="text-xs text-slate-505 dark:text-slate-400 max-w-sm">
              We engineer high-performance web, native-mobile, and AI systems tailored to accelerate corporate growth.
            </p>
          </div>
          
          <div className="flex gap-6 overflow-x-auto pb-6 scrollbar-hide snap-x -mx-6 px-6 md:mx-0 md:px-0">
            {services.map((srv) => {
              const IconComponent = serviceIcons[srv.icon as keyof typeof serviceIcons] || Globe;
              const srvSlug = Object.keys(slugToIdMap).find(key => slugToIdMap[key] === srv.id) || srv.id;
              const isActive = srv.id === service.id;

              return (
                <Link
                  key={srv.id}
                  to={`/services/${srvSlug}`}
                  className={`flex-shrink-0 w-80 snap-start p-6 rounded-3xl border transition-all duration-300 flex flex-col justify-between group cursor-pointer ${
                    isActive 
                      ? 'bg-blue-600 border-blue-500 text-white shadow-xl shadow-blue-500/10'
                      : 'bg-white dark:bg-slate-900/40 border-slate-200 dark:border-slate-900/60 hover:border-blue-500/30 hover:shadow-lg'
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'bg-blue-600/10 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                    }`}>
                      <IconComponent size={20} />
                    </div>
                    <div>
                      <h3 className={`font-heading text-sm font-bold uppercase tracking-wide group-hover:underline ${
                        isActive ? 'text-white' : 'text-slate-900 dark:text-white'
                      }`}>
                        {srv.name}
                      </h3>
                      <p className={`text-xs leading-relaxed mt-2 line-clamp-3 ${
                        isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                      }`}>
                        {srv.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider mt-6">
                    <span>{isActive ? 'Currently Viewing' : 'Explore Capability'}</span>
                    <ArrowUpRight size={12} className={`group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ${
                      isActive ? 'text-white' : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            8.5. RELATED TECHNICAL INSIGHTS
           ========================================== */}
        {relatedBlogs.length > 0 && (
          <div className="py-12 border-t border-slate-200 dark:border-slate-900 mt-12 text-left">
            <div className="flex flex-col gap-2 mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Resource Hub</span>
              <h2 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                Related Technical Insights & Guides
              </h2>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedBlogs.map((blog) => (
                <Link 
                  key={blog.id} 
                  to={`/blog/${blog.slug || blog.id}`}
                  className="p-6 bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-900 rounded-2xl flex flex-col justify-between hover:border-blue-500/35 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 group cursor-pointer"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-500 bg-blue-50 dark:bg-blue-900/10 px-2.5 py-1 rounded-md self-start">
                      {blog.category}
                    </span>
                    <h3 className="font-heading text-sm md:text-base font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-500 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    <p className="text-[11px] md:text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {blog.summary}
                    </p>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-slate-405 dark:text-slate-500 mt-5 border-t border-slate-100 dark:border-slate-800/80 pt-3">
                    <span>{blog.date}</span>
                    <span className="inline-flex items-center gap-0.5 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform">
                      Read Post <ArrowUpRight size={10} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* ==========================================
            9. CALL TO ACTION (Bottom Banner)
           ========================================== */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-12 overflow-hidden shadow-2xl flex flex-col items-center gap-6 mt-12 text-center border border-slate-800">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
          
          <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight leading-none relative z-10">
            Secure your complimentary strategic blueprint.
          </h2>
          
          <p className="text-xs md:text-sm text-slate-400 max-w-lg relative z-10 leading-relaxed">
            We partner with enterprises in Raipur, Chhattisgarh, and all across India to build premium digital assets. Contact us today.
          </p>
          
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 relative z-10 flex items-center gap-2 group cursor-pointer"
          >
            Book a Free Consultation <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
