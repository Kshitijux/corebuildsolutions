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

export default function Portfolio() {
  const { projects } = useDatabase();
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile' | 'ai' | 'saas'>('all');
  
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

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      
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
                    alt="Legacy System Design"
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
                      alt="Re-engineered System"
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
                    alt={proj.title}
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
                            alt={proj.testimonial.name}
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
                      {proj.tags.slice(0, 4).map(t => (
                        <span key={t} className="px-2 py-0.5 bg-slate-200/50 dark:bg-slate-900/50 border border-slate-300 dark:border-slate-800 rounded-md text-[9px] text-slate-500 uppercase font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                    {proj.url && (
                      <a 
                        href={proj.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-500 font-semibold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform"
                      >
                        Visit Link <ExternalLink size={12} />
                      </a>
                    )}
                  </div>

                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
