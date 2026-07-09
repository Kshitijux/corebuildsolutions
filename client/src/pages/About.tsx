import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Target, 
  Eye, 
  Heart, 
  MapPin, 
  Clock, 
  Mail, 
  UserCheck, 
  Briefcase,
  FileText
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';

export default function About() {
  const { team, careers, addLead, homeSections } = useDatabase();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  
  // Application Form State
  const [appFormName, setAppFormName] = useState('');
  const [appFormEmail, setAppFormEmail] = useState('');
  const [appFormResume, setAppFormResume] = useState('');
  const [appFormMessage, setAppFormMessage] = useState('');
  const [appSubmitted, setAppSubmitted] = useState(false);

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appFormName || !appFormEmail || !selectedRole) return;

    addLead({
      name: appFormName,
      email: appFormEmail,
      message: `CAREER APPLICATION: Applied for ${selectedRole}.\nPortfolio/Resume Link: ${appFormResume}\nCover Note: ${appFormMessage}`,
      service: 'Careers Recruitment',
      source: 'careers'
    });

    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: `Application for ${selectedRole} submitted successfully!`, type: 'success' }
    }));

    setAppSubmitted(true);
    setAppFormName('');
    setAppFormEmail('');
    setAppFormResume('');
    setAppFormMessage('');

    setTimeout(() => {
      setAppSubmitted(false);
      setSelectedRole(null);
    }, 4000);
  };

  // Helper to get home section content by key
  const getSectionContent = (key: string, fallback: any) => {
    const section = homeSections.find(hs => hs.key === key);
    return section ? section.content : fallback;
  };

  const aboutSectionContent = getSectionContent('aboutSection', {
    milestones: [
      { year: 'August 2025', title: 'CoreBuild Solutions Founded', desc: 'Launched with a singular vision: to bridge the gap between high-end digital design and enterprise-level software engineering.' },
      { year: 'Late 2025', title: 'First Bespoke Solution Delivered', desc: 'Shipped our first custom business platform, demonstrating 100/100 Lighthouse performance scores and establishing our market reputation.' },
      { year: 'Early 2026', title: 'Expanded into Web & Native Apps', desc: 'Recruited top-tier engineers to deliver cross-platform React Native mobile applications and scalable database pipelines.' },
      { year: 'Spring 2026', title: 'Branding, SEO & Marketing Integration', desc: 'Rolled out a comprehensive marketing suite, delivering ROI-focused SEO campaigns, custom meta ads, and branding strategies.' },
      { year: 'Mid 2026', title: 'Delivered Multiple Enterprise Projects', desc: 'Partnered with international clients to build bespoke CRM panels, machine learning engines, and secure admin control boards.' },
      { year: 'Present', title: 'Full-Service Digital Agency', desc: 'Growing rapidly with a client-first focus, driving innovation with cutting-edge tech stacks and preparing for next-gen AI agency solutions.' }
    ],
    values: [
      { title: 'Client-First Focus', desc: 'We structure custom workflows and dedicated staging systems around your unique growth models. Your business is our priority.' },
      { title: 'Absolute Quality', desc: 'We write clean, strictly-typed TypeScript code, configure automatic lint controls, and deliver detailed documentation guides.' },
      { title: 'Innovative Technology', desc: 'We utilize state-of-the-art architectures like React, Vite, Node, and Pinecone vector spaces to give your product a technical advantage.' }
    ]
  });

  const milestones = aboutSectionContent.milestones;

  const values = [
    { icon: Target, title: aboutSectionContent.values[0]?.title || 'Client-First Focus', desc: aboutSectionContent.values[0]?.desc || 'We structure custom workflows...' },
    { icon: Eye, title: aboutSectionContent.values[1]?.title || 'Absolute Quality', desc: aboutSectionContent.values[1]?.desc || 'We write clean...' },
    { icon: Heart, title: aboutSectionContent.values[2]?.title || 'Innovative Technology', desc: aboutSectionContent.values[2]?.desc || 'We utilize state-of-the-art...' }
  ];

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors pt-24 pb-20">
      
      {/* Background decoration */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 right-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px]" />
        <div className="liquid-blob bottom-10 left-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            HERO STORYTELLING SECTION
           ========================================== */}
        <div className="max-w-3xl text-left py-16 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">About Our Agency</span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-none text-slate-900 dark:text-white">
            We are architects of the digital interface.
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl">
            CoreBuild Solutions was founded in **August 2025** with a clear vision: to merge elite engineering with premium UI/UX design. Our mission is to build highly robust custom software, state-of-the-art web architectures, and intelligent AI automations. Through a dedicated client-first approach, we focus on delivering absolute quality, constant technical innovation, and future-proof modern solutions.
          </p>
        </div>

        {/* ==========================================
            MISSION, VISION, VALUES
           ========================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {values.map((v, idx) => {
            const VIcon = v.icon;
            return (
              <div key={idx} className="glass-card rounded-2xl p-8 text-left border border-slate-200 dark:border-slate-900">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center mb-6">
                  <VIcon size={16} />
                </div>
                <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white mb-2">
                  {v.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            );
          })}
        </div>

        {/* ==========================================
            MILESTONE TIMELINE
           ========================================== */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-900 mb-24 text-left">
          <div className="max-w-2xl mb-12 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Timeline</span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight">
              Our Journey
            </h2>
          </div>

          <div className="relative border-l border-slate-200 dark:border-slate-800 pl-6 md:pl-10 ml-4 space-y-12">
            {milestones.map((m, idx) => (
              <div key={idx} className="relative">
                {/* Pulse node */}
                <div className="absolute top-1 -left-[31px] md:-left-[47px] w-4 h-4 rounded-full bg-blue-500 border-4 border-slate-50 dark:border-slate-950 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                
                <div className="flex flex-col gap-2">
                  <span className="font-heading font-extrabold text-blue-500 text-sm">
                    {m.year}
                  </span>
                  <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white uppercase">
                    {m.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            FOUNDERS & TEAM GRID
           ========================================== */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-900 mb-24 text-left">
          <div className="max-w-2xl mb-16 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Team</span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight">
              Meet the Craftspeople
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.filter(m => m.active !== false).map((member) => (
              <div 
                key={member.id}
                className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-900 group"
              >
                <div className="aspect-[4/5] bg-slate-900 relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-700 ease-[0.16,1,0.3,1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60" />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                      {member.name}
                    </h3>
                    {member.experience && (
                      <span className="text-[9px] font-bold text-blue-600 bg-blue-50 dark:bg-blue-900/10 px-2 py-0.5 rounded border border-blue-100 dark:border-blue-900/20">
                        {member.experience}
                      </span>
                    )}
                  </div>
                  <p className="text-[10px] text-blue-500 uppercase tracking-widest font-semibold mt-0.5">
                    {member.role}
                  </p>
                  <p className="text-xs text-slate-655 dark:text-slate-400 leading-relaxed mt-4">
                    {member.bio}
                  </p>
                  {member.skills && member.skills.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {member.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-[8px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-800">
                          {skill}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ==========================================
            CAREERS / HIRING SECTION
           ========================================== */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-900 text-left">
          <div className="max-w-2xl mb-12 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Careers</span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight">
              We are hiring.
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              We are constantly seeking elite designers and full stack engineering minds to join our distributed global team.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Open positions (Left list) */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              {careers.length > 0 ? (
                careers.map((car) => (
                  <div
                    key={car.id}
                    className={`p-6 rounded-2xl border text-left cursor-pointer transition-all duration-300 ${
                      selectedRole === car.title
                        ? 'bg-white dark:bg-slate-900 border-blue-500 shadow-lg'
                        : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-900 hover:border-slate-300 dark:hover:border-slate-800'
                    }`}
                    onClick={() => {
                      setSelectedRole(car.title);
                      setAppSubmitted(false);
                    }}
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div>
                        <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white uppercase">
                          {car.title}
                        </h4>
                        <div className="flex items-center gap-3 text-[10px] text-slate-500 uppercase font-semibold mt-2">
                          <span className="flex items-center gap-1"><MapPin size={10} /> {car.location}</span>
                          <span className="flex items-center gap-1"><Clock size={10} /> {car.type}</span>
                        </div>
                      </div>
                      <span className="text-blue-500 font-semibold text-xs uppercase tracking-wider flex items-center gap-0.5">
                        Apply <ArrowUpRight size={12} />
                      </span>
                    </div>
                    
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 leading-relaxed">
                      {car.description}
                    </p>

                    <div className="mt-4 flex flex-col gap-1 text-[11px] text-slate-600 dark:text-slate-400">
                      <span className="font-semibold text-[10px] text-slate-500 uppercase tracking-widest mb-1">Requirements:</span>
                      {car.requirements.map((req, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-1.5">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <span>{req}</span>
                        </div>
                      ))}
                    </div>

                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-xs text-slate-500 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl">
                  No active openings currently. Subscribe to our newsletter to hear of future roles.
                </div>
              )}
            </div>

            {/* Application Form Box (Right panel) */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {selectedRole ? (
                  <motion.div
                    key={selectedRole}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800 text-left"
                  >
                    {!appSubmitted ? (
                      <form onSubmit={handleApplySubmit} className="flex flex-col gap-4">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-semibold text-blue-500 uppercase tracking-widest">
                            Job Application
                          </span>
                          <button
                            type="button"
                            onClick={() => setSelectedRole(null)}
                            className="p-1 rounded-full border border-slate-200 dark:border-slate-900 text-slate-400 hover:text-slate-900 dark:hover:text-white"
                          >
                            Cancel
                          </button>
                        </div>
                        
                        <h3 className="font-heading text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                          Apply for {selectedRole}
                        </h3>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Full Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Alex Sterling"
                            value={appFormName}
                            onChange={(e) => setAppFormName(e.target.value)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="candidate@work.com"
                            value={appFormEmail}
                            onChange={(e) => setAppFormEmail(e.target.value)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1"><FileText size={10} /> Resume / Portfolio Link</label>
                          <input
                            type="url"
                            required
                            placeholder="https://my-portfolio.com/cv.pdf"
                            value={appFormResume}
                            onChange={(e) => setAppFormResume(e.target.value)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1.5">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Cover Note / Remarks</label>
                          <textarea
                            rows={3}
                            placeholder="Briefly state your core technologies and achievements..."
                            value={appFormMessage}
                            onChange={(e) => setAppFormMessage(e.target.value)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white resize-none"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                        >
                          Submit Application <UserCheck size={16} />
                        </button>

                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                          <Briefcase size={28} />
                        </div>
                        <h3 className="font-heading text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                          Application Submitted!
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                          Thank you for applying. Our talent leads will inspect your portfolio and contact you shortly.
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <div className="p-8 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl h-full flex flex-col items-center justify-center gap-2 bg-slate-100/20 dark:bg-slate-950/20 text-slate-400 min-h-[300px]">
                    <Briefcase size={36} className="text-slate-400 mb-2" />
                    <p className="text-sm font-semibold uppercase tracking-wider">Apply for active roles</p>
                    <p className="text-[10px] max-w-xs leading-relaxed">
                      Select an open position on the left to activate the secure application form.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
