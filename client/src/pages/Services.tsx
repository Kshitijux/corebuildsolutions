import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Check, 
  Globe, 
  Smartphone, 
  Cpu, 
  ChevronRight, 
  Clock, 
  TrendingUp, 
  Award,
  ShoppingBag,
  Layers,
  Terminal
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';
import { Plus, Minus } from 'lucide-react';

export default function Services() {
  const { services, faqs, seoSettings } = useDatabase();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const servicesSeo = seoSettings.find(s => s.page === 'services') || {
    title: 'Elite Digital Services | CoreBuild Solutions',
    description: 'Explore our tailored services including custom web apps, native-feeling mobile software, and vector-backed artificial intelligence systems.',
    keywords: 'web development cost, mobile app dev, AI systems, SaaS creation, custom CMS development'
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "CoreBuild Solutions Digital Services",
    "description": "Premium digital engineering and design services including custom web development, React Native mobile apps, and enterprise AI integrations.",
    "itemListElement": services.map((srv, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Service",
        "name": srv.name,
        "description": srv.description,
        "provider": {
          "@type": "Organization",
          "name": "CoreBuild Solutions",
          "url": "https://corebuildsolutions.in"
        }
      }
    }))
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

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

  const idToSlugMap: Record<string, string> = {
    'srv-1': 'custom-web-applications',
    'srv-2': 'mobile-app-development',
    'srv-3': 'ai-machine-learning',
    'srv-4': 'e-commerce-development',
    'srv-5': 'ui-ux-design',
    'srv-6': 'branding-logo-design',
    'srv-7': 'seo-optimization',
    'srv-8': 'custom-enterprise-software'
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors pt-24 pb-20">
      <SEO 
        title={servicesSeo.title}
        description={servicesSeo.description}
        keywords={servicesSeo.keywords}
        schema={[servicesSchema, faqSchema]}
      />
      
      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-20 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[120px]" />
        <div className="liquid-blob bottom-10 left-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <div className="max-w-3xl text-left py-16 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Our Services</span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Tailored Engineering for High-Ticket Products.
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            We deliver state-of-the-art web architectures, native-feeling mobile applications, and custom machine learning engines engineered for absolute speed and luxury design.
          </p>
        </div>

        {/* ==========================================
            SERVICES GRID
           ========================================== */}
        {services.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 text-left">
            {services.map((srv) => {
              const Icon = serviceIcons[srv.icon as keyof typeof serviceIcons] || Globe;
              const slug = idToSlugMap[srv.id] || srv.id;
              
              return (
                <div
                  key={srv.id}
                  className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-900 flex flex-col justify-between group hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="flex flex-col gap-6">
                    {/* Icon */}
                    <div className="p-4 bg-blue-600/10 text-blue-600 rounded-2xl w-max group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>

                    {/* Title */}
                    <div>
                      <h2 className="font-heading font-extrabold text-xl md:text-2xl tracking-tight text-slate-900 dark:text-white mb-2 group-hover:text-blue-500 transition-colors">
                        {srv.name}
                      </h2>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {srv.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed line-clamp-3">
                      {srv.description}
                    </p>

                    {/* Detail Highlights */}
                    <div className="flex flex-col gap-2 mt-2">
                      <h3 className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        Technical Deliverables
                      </h3>
                      <ul className="space-y-2 text-xs text-slate-650 dark:text-slate-400">
                        {srv.details.slice(0, 4).map((detail, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <Link
                    to={`/services/${slug}`}
                    className="w-full py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white rounded-2xl font-semibold text-xs text-center uppercase tracking-wider mt-8 transition-all flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-md cursor-pointer"
                  >
                    Explore Service & Pricing <ArrowUpRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        )}

        {/* ==========================================
            BENEFITS / VALUE PROP SECTION
           ========================================== */}
        <div className="py-24 border-t border-slate-200 dark:border-slate-900 mt-20 text-center">
          <div className="max-w-3xl mx-auto mb-16 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Value Proposition</span>
            <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight">
              Why CoreBuild Solutions?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              { icon: Clock, title: 'Extreme Delivery Speed', desc: 'Our monorepo setups, TypeScript boilerplate layers, and bundlers minimize development cycle times by 40%.' },
              { icon: TrendingUp, title: 'SEO & Performance First', desc: 'We optimize largest contentful paints to under 1.2 seconds, boosting retention and increasing organic rank.' },
              { icon: Award, title: 'Elite Design Standard', desc: 'We design according to strict spatial grids, utilizing premium fonts and fluid micro-animations.' }
            ].map((benefit, bIdx) => {
              const BIcon = benefit.icon;
              return (
                <div key={bIdx} className="glass-card rounded-2xl p-6 border border-slate-200 dark:border-slate-900">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                    <BIcon size={16} />
                  </div>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            FAQ ACCORDIONS
           ========================================== */}
        <div className="py-20 border-t border-slate-200 dark:border-slate-900 mt-10">
          <div className="text-center mb-16 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">FAQ</span>
            <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Services & Technical FAQ
            </h2>
          </div>

          <div className="flex flex-col gap-4 max-w-4xl mx-auto text-left">
            {faqs.map((faq, index) => {
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
            CTA BANNER
           ========================================== */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-12 overflow-hidden shadow-2xl flex flex-col items-center gap-6 mt-10 text-center">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
          <h2 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight leading-none relative z-10">
            Let's outline your project roadmap.
          </h2>
          <p className="text-xs md:text-sm text-slate-400 max-w-lg relative z-10 leading-relaxed">
            Secure a technical blueprint session where our developers review your data schema, API routing, and target timeline.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-xs uppercase tracking-wider shadow-lg shadow-blue-500/20 relative z-10 flex items-center gap-2 group"
          >
            Schedule Consultation <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
}
