import React from 'react';

export const ANMLStatsAwards: React.FC = () => {
  const stats = [
    { value: '13+', label: 'Years of Experience (Est. 2012)' },
    { value: '6', label: 'Webby Awards & Honors' },
    { value: '100+', label: 'Digital Products & Platforms' },
    { value: '$10B+', label: 'Client Venture Value Created' }
  ];

  return (
    <section id="about" className="py-24 px-6 sm:px-12 bg-[#0A0A0A] max-w-[1440px] mx-auto border-t border-white/10">
      
      {/* Intro Lockup */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-20">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#959595] font-mono">BOUTIQUE AGENCY</span>
          <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-white mt-2">
            Design & Development — Est. 2012
          </h2>
        </div>
        <p className="text-sm text-[#959595] leading-relaxed max-w-md">
          Headquartered in the US with global reach, ANML combines deep product strategy with luxury UI execution to build software that defines categories.
        </p>
      </div>

      {/* Grid of Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 border-y border-white/10 py-16">
        {stats.map((s, idx) => (
          <div key={idx} className="flex flex-col gap-2">
            <span className="text-5xl sm:text-7xl font-normal tracking-tighter text-white font-serif">
              {s.value}
            </span>
            <span className="text-xs text-[#959595] font-mono leading-relaxed">
              {s.label}
            </span>
          </div>
        ))}
      </div>

    </section>
  );
};

export default ANMLStatsAwards;
