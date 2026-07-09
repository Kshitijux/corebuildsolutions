import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Smartphone, Cpu, Check, ArrowLeft, ArrowUpRight, Plus, Minus, Layers } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';

export default function ServiceDetail() {
  const { id } = useParams();
  const { services } = useDatabase();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const slugToIdMap: Record<string, string> = {
    'custom-web-applications': 'srv-1',
    'mobile-app-development': 'srv-2',
    'ai-machine-learning': 'srv-3'
  };

  const serviceId = slugToIdMap[id || ''] || id || '';
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center text-slate-900 dark:text-slate-50 gap-6 pt-24 pb-20">
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
    'Cpu': Cpu
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
    "description": service.description,
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

  const serviceFaqsList = service.serviceFaqs || [];
  const faqSchema = serviceFaqsList.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceFaqsList.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  } : undefined;

  const schemas = faqSchema ? [serviceSchema, breadcrumbSchema, faqSchema] : [serviceSchema, breadcrumbSchema];

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      <SEO 
        title={`${service.name} Services | CoreBuild Solutions`}
        description={service.description}
        keywords={`${service.name}, custom services, pricing, business blueprints`}
        schema={schemas}
      />

      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none" />
        <div className="liquid-blob bottom-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-left">
        
        {/* Back navigation */}
        <Link 
          to="/services"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Services Catalog
        </Link>

        {/* ==========================================
            HERO HEADER
           ========================================== */}
        <div className="flex flex-col gap-6 border-b border-slate-200 dark:border-slate-900 pb-12">
          <div className="p-4 bg-blue-600/10 text-blue-600 rounded-2xl w-max">
            <Icon size={28} />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            {service.name}
          </h1>
          <p className="text-sm font-semibold text-blue-650 dark:text-blue-400 uppercase tracking-wider">
            {service.subtitle}
          </p>
          <p className="text-sm md:text-base text-slate-650 dark:text-slate-400 leading-relaxed max-w-2xl">
            {service.description}
          </p>
        </div>

        {/* ==========================================
            WHAT IS IT SECTION
           ========================================== */}
        <div className="py-12 border-b border-slate-200 dark:border-slate-900 flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            What is {service.name}?
          </h2>
          <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
            {service.whatIsIt || "We engineer elite software systems custom designed for your specific workflows."}
          </p>
        </div>

        {/* ==========================================
            WHO IS IT FOR SECTION
           ========================================== */}
        <div className="py-12 border-b border-slate-200 dark:border-slate-900 flex flex-col gap-4">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Who is this Service Designed for?
          </h2>
          <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
            {service.whoIsItFor || "Our services are tailored for medium to large enterprises looking to scale their digital infrastructure."}
          </p>
        </div>

        {/* ==========================================
            PROCESS SECTION
           ========================================== */}
        <div className="py-12 border-b border-slate-200 dark:border-slate-900 flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Engineered Workflow Process
          </h2>
          <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
            {service.processDescription}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4">
            {service.workflow.map(item => (
              <div key={item.step} className="flex flex-col gap-2 p-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
                <span className="font-heading font-extrabold text-blue-500 text-sm">
                  STEP 0{item.step}
                </span>
                <h3 className="font-heading font-bold text-xs text-slate-900 dark:text-white uppercase tracking-wider">
                  {item.title}
                </h3>
                <p className="text-[10px] text-slate-550 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            TECHNOLOGIES SECTION
           ========================================== */}
        <div className="py-12 border-b border-slate-200 dark:border-slate-900 flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Core Technologies & Infrastructure Stack
          </h2>
          <p className="text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed">
            {service.technologiesDescription}
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {service.details.map(tech => (
              <span key={tech} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-md text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ==========================================
            PRICING TIERS SECTION
           ========================================== */}
        <div className="py-12 border-b border-slate-200 dark:border-slate-900 flex flex-col gap-6">
          <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pricing Plans & Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            {service.pricing.map((tier, idx) => {
              const isPopular = tier.popular === true;
              return (
                <div 
                  key={idx} 
                  className={`p-8 rounded-3xl border flex flex-col justify-between ${
                    isPopular 
                      ? 'bg-slate-900 dark:bg-slate-900 border-blue-500 text-white shadow-xl' 
                      : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800'
                  }`}
                >
                  <div className="flex flex-col gap-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        {tier.plan}
                      </h3>
                      {isPopular && (
                        <span className="px-2.5 py-0.5 bg-blue-600 text-white text-[9px] uppercase tracking-widest font-semibold rounded-md">
                          BEST VALUE
                        </span>
                      )}
                    </div>

                    {tier.description && (
                      <p className="text-xs text-slate-550 dark:text-slate-450 leading-snug mt-1">
                        {tier.description}
                      </p>
                    )}

                    <div className="flex items-baseline gap-1 mt-2">
                      {tier.originalPrice && (
                        <span className={`text-xs line-through mr-1 ${isPopular ? 'text-slate-400' : 'text-slate-500'}`}>
                          {tier.originalPrice}
                        </span>
                      )}
                      <span className="font-heading text-3xl font-extrabold tracking-tight">
                        {tier.price}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest">
                        / starting
                      </span>
                    </div>
                    
                    <div className="h-[1px] bg-slate-200 dark:bg-slate-800/80 w-full my-2" />
                    
                    <ul className="space-y-3 text-xs">
                      {tier.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-center gap-2">
                          <Check size={14} className="text-blue-500 flex-shrink-0" />
                          <span className={isPopular ? 'text-slate-300' : 'text-slate-650 dark:text-slate-400'}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link
                    to="/contact"
                    className={`w-full py-4 rounded-xl font-bold text-xs text-center uppercase tracking-wider mt-8 transition-all ${
                      isPopular 
                        ? 'bg-blue-600 text-white hover:bg-blue-500' 
                        : 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white'
                    }`}
                  >
                    {tier.ctaText || 'Initiate Project'}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            FAQ ACCORDIONS
           ========================================== */}
        {serviceFaqsList.length > 0 && (
          <div className="py-12 border-b border-slate-200 dark:border-slate-900">
            <h2 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-4">
              {serviceFaqsList.map((faq, index) => {
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
                          <div className="px-6 pb-6 text-xs md:text-sm text-slate-650 dark:text-slate-400 leading-relaxed border-t border-slate-200 dark:border-slate-900 pt-4">
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
        )}

        {/* ==========================================
            CONSULTATION CTA BANNER
           ========================================== */}
        <div className="relative rounded-3xl bg-slate-900 text-white p-12 overflow-hidden shadow-2xl flex flex-col items-center gap-6 mt-16 text-center">
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
          
          <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight leading-none relative z-10">
            Let's build your next digital asset together.
          </h2>
          
          <p className="text-xs md:text-sm text-slate-400 max-w-lg relative z-10 leading-relaxed">
            Secure a free strategic blueprint session with our engineering leads to map your database schema, API routing, and project timeline.
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
