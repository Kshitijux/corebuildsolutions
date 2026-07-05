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
  Award 
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

export default function Services() {
  const { services } = useDatabase();
  const [activeTab, setActiveTab] = useState('');

  // Keep active tab in sync when services load
  useEffect(() => {
    if (services.length > 0 && !activeTab) {
      setActiveTab(services[0].id);
    }
  }, [services, activeTab]);

  const activeService = services.find(s => s.id === activeTab) || services[0];

  const serviceIcons = {
    'Globe': Globe,
    'Smartphone': Smartphone,
    'Cpu': Cpu
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      
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
            TABS INTERFACE
           ========================================== */}
        {services.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-8 items-start">
            
            {/* Tab Selectors (Left side) */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {services.map((srv) => {
                const Icon = serviceIcons[srv.icon as keyof typeof serviceIcons] || Globe;
                const isActive = srv.id === activeTab;
                return (
                  <button
                    key={srv.id}
                    onClick={() => setActiveTab(srv.id)}
                    className={`flex items-center justify-between p-5 rounded-2xl border text-left transition-all duration-300 group cursor-pointer ${
                      isActive 
                        ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-lg text-blue-600 dark:text-blue-500' 
                        : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-900 text-slate-500 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-800'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl transition-colors ${
                        isActive ? 'bg-blue-600/10 text-blue-600' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'
                      }`}>
                        <Icon size={18} />
                      </div>
                      <span className="font-heading font-bold text-sm tracking-wide uppercase text-slate-900 dark:text-white">
                        {srv.name}
                      </span>
                    </div>
                    <ChevronRight size={16} className={`transition-transform duration-300 ${
                      isActive ? 'translate-x-1 text-blue-500' : 'text-slate-400 group-hover:translate-x-0.5'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* Tab Contents (Right side) */}
            <div className="lg:col-span-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.4 }}
                  className="glass-card rounded-3xl p-8 md:p-12 text-left flex flex-col gap-8"
                >
                  
                  {/* Service Overview */}
                  <div className="flex flex-col gap-4">
                    <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                      {activeService.name}
                    </h2>
                    <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      {activeService.subtitle}
                    </p>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {activeService.longDescription || activeService.description}
                    </p>
                  </div>

                  {/* Bullet Spec Checklist */}
                  <div className="flex flex-col gap-4">
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Key Technical Specifications
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs md:text-sm text-slate-600 dark:text-slate-400">
                      {activeService.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-5 h-5 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                            <Check size={12} />
                          </div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-[1px] bg-slate-200 dark:bg-slate-900 w-full" />

                  {/* Interactive Service Roadmap */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Our Interactive Workflow
                    </h3>
                    <div className="flex flex-col md:flex-row gap-6">
                      {activeService.workflow.map((item) => (
                        <div key={item.step} className="flex-1 flex flex-col gap-2">
                          <span className="font-heading font-extrabold text-blue-500 text-sm">
                            STEP 0{item.step}
                          </span>
                          <h4 className="font-heading font-bold text-xs text-slate-900 dark:text-white uppercase">
                            {item.title}
                          </h4>
                          <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Horizontal Divider */}
                  <div className="h-[1px] bg-slate-200 dark:bg-slate-900 w-full" />

                  {/* Service Tier pricing cards */}
                  <div className="flex flex-col gap-6">
                    <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Pricing Plans
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {activeService.pricing
                        .filter(tier => tier.active !== false)
                        .sort((a, b) => (a.order || 0) - (b.order || 0))
                        .map((tier, idx) => {
                          const isPopular = tier.popular === true;
                          return (
                            <div 
                              key={idx} 
                              className={`p-6 rounded-2xl border flex flex-col justify-between ${
                                isPopular 
                                  ? 'bg-slate-900 dark:bg-slate-900 border-blue-500 text-white shadow-lg' 
                                  : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-800'
                              }`}
                            >
                              <div className="flex flex-col gap-4">
                                <div className="flex justify-between items-start">
                                  <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-slate-500 dark:text-slate-400">
                                    {tier.plan}
                                  </h4>
                                  {isPopular && (
                                    <span className="px-2 py-0.5 bg-blue-600 text-white text-[9px] uppercase tracking-widest font-semibold rounded-md">
                                      BEST VALUE
                                    </span>
                                  )}
                                </div>

                                {tier.description && (
                                  <p className="text-[10px] text-slate-500 dark:text-slate-400 leading-snug mt-1">
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
                                
                                <ul className="space-y-2 text-[11px] text-slate-600 dark:text-slate-400">
                                  {tier.features.map((feature, fIdx) => (
                                    <li key={fIdx} className="flex items-center gap-2">
                                      <Check size={12} className="text-blue-500 flex-shrink-0" />
                                      <span className={isPopular ? 'text-slate-350' : 'text-slate-600 dark:text-slate-400'}>
                                        {feature}
                                      </span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <Link
                                to="/contact"
                                className={`w-full py-2.5 rounded-xl font-semibold text-xs text-center uppercase tracking-wider mt-6 transition-all ${
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

                </motion.div>
              </AnimatePresence>
            </div>

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
