import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  ExternalLink, 
  TrendingUp, 
  Code2, 
  Compass, 
  Flame 
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import SEO from '../components/SEO';
import { X, Check } from 'lucide-react';
import { Project } from '../types';

export default function Portfolio() {
  const { projects, seoSettings } = useDatabase();
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'saas'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // Custom Before/After Slider state
  const [sliderPosition, setSliderPosition] = useState(50);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSliderMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches[0]) {
      handleSliderMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (e.buttons === 1 || isDragging.current) {
      handleSliderMove(e.clientX);
    }
  };

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Cases' },
    { id: 'web', label: 'Web Applications' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'ai', label: 'AI Automation' },
    { id: 'saas', label: 'SaaS Platforms' }
  ];

  // Grab the first project that has before/after images for our slider
  const sliderProject = projects.find(p => p.beforeImage && p.afterImage) || projects[0];

  const portfolioSeo = seoSettings.find(s => s.page === 'portfolio') || {
    title: 'Award-Winning Projects Showcase | CoreBuild Solutions',
    description: 'View the elite projects we have shipped for real estate platforms, global concierge apps, and Quantitative FinTech funds.',
    keywords: 'portfolio, design gallery, case studies, nextjs examples, react app showcase'
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
        "name": "Portfolio",
        "item": "https://corebuildsolutions.in/portfolio"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "CoreBuild Solutions Portfolio Showcase",
    "description": "A showcase of engineering and design projects completed by CoreBuild Solutions.",
    "itemListElement": projects.map((proj, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "CreativeWork",
        "name": proj.title,
        "description": proj.description,
        "image": proj.image,
        "author": {
          "@type": "Organization",
          "name": "CoreBuild Solutions"
        }
      }
    }))
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      <SEO 
        title={portfolioSeo.title}
        description={portfolioSeo.description}
        keywords={portfolioSeo.keywords}
        schema={[breadcrumbSchema, itemListSchema]}
      />
      
      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px]" />
        <div className="liquid-blob bottom-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <div className="max-w-3xl text-left py-16 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Case Studies</span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Shipped Products. Outstanding Growth.
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            A selective library of our shipped codebases. Filter by category, inspect tech parameters, and view performance metrics.
          </p>
        </div>

        {/* ==========================================
            INTERACTIVE BEFORE/AFTER SLIDER
           ========================================== */}
        {sliderProject && sliderProject.beforeImage && sliderProject.afterImage && (
          <div className="mb-24 flex flex-col gap-8">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500">
              <Flame size={14} className="fill-blue-500/20" /> Interactive Case Showcase
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Slider Canvas */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                <div 
                  ref={containerRef}
                  onMouseMove={handleMouseMove}
                  onTouchMove={handleTouchMove}
                  onMouseDown={() => { isDragging.current = true; }}
                  onMouseUp={() => { isDragging.current = false; }}
                  onTouchEnd={() => { isDragging.current = false; }}
                  className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl select-none cursor-ew-resize"
                >
                  {/* Before (Bottom Image) */}
                  <img
                    src={sliderProject.beforeImage}
                    alt={`Legacy System Design comparison for - ${sliderProject.title}`}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                  />
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-slate-950/70 border border-white/10 rounded-lg text-[10px] text-white tracking-widest font-semibold uppercase">
                    LEGACY WEBSITE
                  </div>

                  {/* After (Top Image, Clipped) */}
                  <div 
                    className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none"
                    style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                  >
                    <img
                      src={sliderProject.afterImage}
                      alt={`Re-engineered System Design by CoreBuild Solutions - ${sliderProject.title}`}
                      loading="lazy"
                      className="absolute inset-0 w-full h-full object-cover"
                      style={{ width: containerRef.current?.getBoundingClientRect().width || '100%', height: '100%' }}
                    />
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-blue-600/90 rounded-lg text-[10px] text-white tracking-widest font-semibold uppercase">
                      COREBUILD REDESIGN
                    </div>
                  </div>

                  {/* Slider Divider Line */}
                  <div 
                    className="absolute top-0 bottom-0 w-[2px] bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)] pointer-events-none"
                    style={{ left: `${sliderPosition}%` }}
                  >
                    {/* Handle Button */}
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border border-blue-500 flex items-center justify-center shadow-lg text-blue-500 text-xs font-bold pointer-events-none">
                      ↔
                    </div>
                  </div>

                </div>
                <p className="text-center text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                  Drag the slider handle to inspect before/after design comparison.
                </p>
              </div>

              {/* Text Info (Right side) */}
              <div className="lg:col-span-5 flex flex-col gap-6 text-left">
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest">
                  Featured Case Study
                </span>
                <h3 className="font-heading text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                  {sliderProject.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {sliderProject.description}
                </p>

                {/* Project Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                  {sliderProject.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="font-heading text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-500">
                        {stat.value}
                      </h4>
                      <p className="text-[9px] uppercase tracking-wider text-slate-500 mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="flex gap-2 mt-2">
                  {sliderProject.tags.map(t => (
                    <span key={t} className="px-2.5 py-1 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-md text-[10px] text-slate-600 dark:text-slate-400">
                      {t}
                    </span>
                  ))}
                </div>

              </div>

            </div>
          </div>
        )}

        {/* ==========================================
            FILTER CAPABILITY TABS
           ========================================== */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-16 border-b border-slate-200 dark:border-slate-900 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === cat.id
                  ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-md'
                  : 'bg-white/50 dark:bg-slate-900/50 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* ==========================================
            PORTFOLIO GRID
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((proj, idx) => (
              <motion.div
                layout
                key={proj.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="glass-card rounded-3xl overflow-hidden text-left flex flex-col justify-between group border border-slate-200 dark:border-slate-900 hover:border-blue-500/20"
              >
                
                {/* Media banner */}
                <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
                  <img
                    src={proj.image}
                    alt={`CoreBuild Solutions Project Case Study - ${proj.title}`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-slate-950/70 border border-white/10 rounded-full text-[10px] text-white tracking-widest font-semibold uppercase">
                    {proj.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col gap-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-slate-500">
                      {proj.client}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mt-4">
                      {proj.longDescription || proj.description}
                    </p>
                  </div>

                  {/* Stats list */}
                  <div className="grid grid-cols-3 gap-2 border-t border-slate-200 dark:border-slate-800 pt-4 text-center">
                    {proj.stats.map((stat, sIdx) => (
                      <div key={sIdx}>
                        <h4 className="font-heading text-sm md:text-base font-extrabold text-blue-600 dark:text-blue-500">
                          {stat.value}
                        </h4>
                        <p className="text-[8px] uppercase tracking-wider text-slate-500 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Embedded Client Testimonial if exists */}
                  {proj.testimonial && (
                    <div className="p-4 rounded-2xl bg-slate-100/50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-900/50 flex flex-col gap-3">
                      <p className="text-[11px] italic leading-relaxed text-slate-700 dark:text-slate-300">
                        "{proj.testimonial.text}"
                      </p>
                      <div className="flex items-center gap-3">
                        {proj.testimonial.avatar && (
                          <img
                            src={proj.testimonial.avatar}
                            alt={`Client representative ${proj.testimonial.name}`}
                            loading="lazy"
                            className="w-6 h-6 rounded-full object-cover"
                          />
                        )}
                        <div>
                          <h5 className="text-[10px] font-bold text-slate-900 dark:text-white uppercase">
                            {proj.testimonial.name}
                          </h5>
                          <p className="text-[8px] text-slate-500 uppercase tracking-widest mt-0.5">
                            {proj.testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Tags & Action */}
                  <div className="flex items-center justify-between border-t border-slate-200 dark:border-slate-800 pt-4 text-xs mt-2">
                    <div className="flex gap-1.5 flex-wrap">
                      {proj.tags.slice(0, 3).map(t => (
                        <span key={t} className="px-2 py-0.5 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-md text-[9px] text-slate-500 uppercase font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="text-blue-600 dark:text-blue-500 font-semibold uppercase tracking-wider hover:underline cursor-pointer"
                      >
                        Case Study
                      </button>
                      {proj.url && (
                        <a 
                          href={proj.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 font-semibold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform"
                        >
                          Visit <ExternalLink size={10} />
                        </a>
                      )}
                    </div>
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Case Study Detail Modal Overlay */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full p-6 md:p-10 relative max-h-[90vh] overflow-y-auto shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {/* Breadcrumb info */}
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-4">
                <span>Case Studies</span>
                <span>/</span>
                <span>{selectedProject.category}</span>
              </div>

              {/* Title */}
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
                {selectedProject.title}
              </h2>
              <p className="text-xs text-slate-500 mb-6">
                Client Partner: {selectedProject.client}
              </p>

              {/* Featured Image */}
              <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-slate-900 mb-8">
                <img
                  src={selectedProject.image}
                  alt={`CoreBuild Solutions Case Study - ${selectedProject.title}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Case Study Grid Content */}
              <div className="flex flex-col gap-6 text-sm leading-relaxed text-slate-650 dark:text-slate-400">
                {/* Long description */}
                <p className="font-medium text-slate-950 dark:text-slate-205 text-base">
                  {selectedProject.longDescription}
                </p>

                <div className="h-[1px] bg-slate-250 dark:bg-slate-800 w-full" />

                {/* Business Problem */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Client Problem & Challenges
                  </h3>
                  <p>
                    {selectedProject.businessProblem || "The client was facing engagement challenges, system scalability constraints, and legacy speed bottlenecks that reduced online user conversions."}
                  </p>
                </div>

                {/* Technical Solution */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Our Engineered Solution
                  </h3>
                  <p>
                    {selectedProject.solution || "We designed a robust system architecture using a modern single-page-app framework, caching structures, database schema optimizations, and custom animations."}
                  </p>
                </div>

                {/* Project Features */}
                {selectedProject.features && selectedProject.features.length > 0 && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Key Features & Functionalities
                    </h3>
                    <ul className="list-disc pl-6 space-y-2 text-xs md:text-sm text-slate-655 dark:text-slate-400">
                      {selectedProject.features.map((feat, fIdx) => (
                        <li key={fIdx}>{feat}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Project Timeline */}
                {selectedProject.timeline && (
                  <div className="flex flex-col gap-2">
                    <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                      Development Timeline
                    </h3>
                    <p className="font-semibold text-blue-600 dark:text-blue-400">
                      {selectedProject.timeline}
                    </p>
                  </div>
                )}

                {/* Business Results */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Measurable Results
                  </h3>
                  <p>
                    {selectedProject.results || "The deployment achieved a major lift in active sessions, maximized search engine rank metrics, and generated a massive growth in lead pipelines."}
                  </p>
                </div>

                {/* Stats and details */}
                <div className="grid grid-cols-3 gap-4 border-t border-b border-slate-200 dark:border-slate-800 py-6 my-4 text-center bg-slate-50 dark:bg-slate-950/40 rounded-2xl">
                  {selectedProject.stats.map((stat, sIdx) => (
                    <div key={sIdx}>
                      <h4 className="font-heading text-xl md:text-2xl font-extrabold text-blue-600 dark:text-blue-500">
                        {stat.value}
                      </h4>
                      <p className="text-[9px] uppercase tracking-wider text-slate-550 mt-1 font-semibold">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Technologies tag group */}
                <div className="flex flex-col gap-3">
                  <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Infrastructure & Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(t => (
                      <span key={t} className="px-3 py-1 bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-900/20 rounded-md text-xs text-blue-600 dark:text-blue-400 font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Client testimonial */}
                {selectedProject.testimonial && (
                  <div className="p-6 rounded-2xl bg-[#FEF2E8] dark:bg-slate-950/60 border border-[#E9D5C7] dark:border-slate-900 flex flex-col gap-4 mt-4">
                    <p className="italic leading-relaxed text-slate-850 dark:text-slate-200 text-sm">
                      "{selectedProject.testimonial.text}"
                    </p>
                    <div className="flex items-center gap-3">
                      {selectedProject.testimonial.avatar && (
                        <img
                          src={selectedProject.testimonial.avatar}
                          alt={selectedProject.testimonial.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                      )}
                      <div>
                        <h5 className="text-xs font-bold text-slate-900 dark:text-white uppercase">
                          {selectedProject.testimonial.name}
                        </h5>
                        <p className="text-[9px] text-slate-500 uppercase tracking-widest mt-0.5">
                          {selectedProject.testimonial.role}, {selectedProject.client}
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Live Link action */}
                {selectedProject.url && (
                  <a
                    href={selectedProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-2xl font-semibold text-sm text-center flex items-center justify-center gap-2 shadow-lg shadow-blue-500/25 mt-6 cursor-pointer"
                  >
                    Visit Live Project Website <ExternalLink size={14} />
                  </a>
                )}

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
