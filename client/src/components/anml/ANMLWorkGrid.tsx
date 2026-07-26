import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Project {
  id: string;
  title: string;
  category: 'app' | 'web' | 'brand';
  categoryLabel: string;
  description: string;
  client: string;
  videoUrl: string;
  poster: string;
  stats: string;
}

export const ANMLWorkGrid: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'app' | 'web' | 'brand'>('all');

  const projects: Project[] = [
    {
      id: '1',
      title: 'Aviation Maintenance & Field Ops Platform',
      category: 'app',
      categoryLabel: 'B2B App & UX',
      description: 'Streamlining complex turbine diagnostics for field technicians with real-time telemetry and augmented UI overlays.',
      client: 'Global Jet Propulsion',
      videoUrl: 'https://www.datocms-assets.com/132779/1721669405-reel-cut-576.mp4',
      poster: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=800&q=80',
      stats: '6 Webby Winner • +42% Efficiency'
    },
    {
      id: '2',
      title: 'Luxury Culinary & Sommelier Digital Experience',
      category: 'web',
      categoryLabel: 'Interactive Web',
      description: 'Sub-second web performance with rich 3D bottle interactive visualizer and curated vintage ordering engine.',
      client: 'Estate Reserve',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_122702_390f5305-8719-41d5-ae80-d23ab3796c28.mp4',
      poster: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
      stats: 'Site of the Month • 98/100 Core Web Vitals'
    },
    {
      id: '3',
      title: 'AI Enterprise Financial Analytics Portal',
      category: 'brand',
      categoryLabel: 'Brand & SaaS',
      description: 'Designing intuitive data visualizers and real-time risk dashboards for Fortune 500 capital managers.',
      client: 'Apex Fintech',
      videoUrl: 'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260516_123323_f909c2b8-ff6c-4edf-882b-8ebcdbe389b5.mp4',
      poster: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
      stats: 'Global Design Award • $2.4B Transactions'
    },
    {
      id: '4',
      title: 'Healthcare AI Medical Diagnostics Suite',
      category: 'app',
      categoryLabel: 'Healthcare AI',
      description: 'Human-centered clinical UI for radiologists detecting early oncology patterns via deep neural network assistance.',
      client: 'BioMed AI',
      videoUrl: 'https://www.datocms-assets.com/132779/1721669405-reel-cut-576.mp4',
      poster: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
      stats: 'FDA Compliant • 99.4% Diagnostic Accuracy'
    }
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <section id="work" className="py-24 px-6 sm:px-12 bg-[#0A0A0A] max-w-[1440px] mx-auto">
      
      {/* Header & Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/10 pb-8">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#959595] font-mono">SELECTED WORK — 2025/2026</span>
          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-white mt-2">
            Featured Projects
          </h2>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {(['all', 'app', 'web', 'brand'] as const).map(tab => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                filter === tab
                  ? 'bg-white text-black shadow-lg'
                  : 'bg-white/5 text-[#959595] hover:text-white hover:bg-white/10 border border-white/10'
              }`}
            >
              {tab === 'all' ? 'All Work' : tab === 'app' ? 'Apps' : tab === 'web' ? 'Websites' : 'Brands'}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map(project => (
            <motion.div
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              key={project.id}
              className="group cursor-pointer flex flex-col gap-5"
            >
              {/* Media Card Container */}
              <div className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-[#141414] border border-white/10">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster={project.poster}
                  src={project.videoUrl}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] font-medium text-white tracking-wide">
                  {project.categoryLabel}
                </div>

                <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-[11px] font-mono text-white/90">
                  {project.stats}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col gap-2 pt-2">
                <div className="text-xs font-mono text-[#959595]">{project.client}</div>
                <h3 className="text-2xl font-medium tracking-tight text-white group-hover:text-gray-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-[#959595] leading-relaxed max-w-xl">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

    </section>
  );
};

export default ANMLWorkGrid;
