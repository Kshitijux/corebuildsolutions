import React from 'react';

export const ANMLInsights: React.FC = () => {
  const articles = [
    {
      date: 'MAY 2025',
      title: 'Designing Human-Centered Interfaces for Generative AI Workflows',
      category: 'AI & UX Design',
      readTime: '5 min read'
    },
    {
      date: 'FEB 2025',
      title: 'Why B2B Platforms Need Consumer-Grade Micro-Interactions in 2026',
      category: 'Product Strategy',
      readTime: '7 min read'
    },
    {
      date: 'NOV 2024',
      title: 'The Role of Sub-Second Web Performance in Modern Brand Trust',
      category: 'Engineering & Performance',
      readTime: '4 min read'
    }
  ];

  return (
    <section id="insights" className="py-24 px-6 sm:px-12 bg-[#0E0E0E] max-w-[1440px] mx-auto border-t border-white/10">
      
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <div>
          <span className="text-xs uppercase tracking-widest text-[#959595] font-mono">THOUGHT LEADERSHIP</span>
          <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-white mt-2">
            Insights & Perspectives
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((art, idx) => (
          <a
            key={idx}
            href="#contact"
            className="group p-8 rounded-2xl bg-[#121212] border border-white/10 hover:border-white/30 flex flex-col justify-between h-[300px] transition-all duration-300"
          >
            <div className="flex items-center justify-between text-xs font-mono text-[#959595]">
              <span>{art.date}</span>
              <span>{art.readTime}</span>
            </div>

            <div>
              <span className="text-xs font-mono text-white/60 uppercase tracking-wider block mb-3">
                {art.category}
              </span>
              <h3 className="text-xl font-medium text-white tracking-tight group-hover:text-gray-300 transition-colors leading-snug">
                {art.title}
              </h3>
            </div>

            <div className="text-xs font-semibold text-white uppercase tracking-wider flex items-center gap-2 group-hover:translate-x-1 transition-transform">
              Read article &rarr;
            </div>
          </a>
        ))}
      </div>

    </section>
  );
};

export default ANMLInsights;
