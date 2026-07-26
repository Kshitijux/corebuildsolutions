import React from 'react';

export const ANMLFooter: React.FC = () => {
  return (
    <footer id="contact" className="bg-[#050505] text-white border-t border-white/10 pt-24 pb-16 px-6 sm:px-12">
      <div className="max-w-[1440px] mx-auto">
        
        {/* Main CTA */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 pb-20 border-b border-white/10">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#959595] font-mono">INITIATE A PROJECT</span>
            <h2 className="text-5xl sm:text-7xl md:text-8xl font-normal tracking-tighter text-white mt-4 max-w-3xl leading-[0.95]">
              Have a project in mind?
            </h2>
          </div>

          <a
            href="mailto:hello@anml.com"
            className="px-10 py-5 rounded-full bg-white text-black font-semibold text-lg hover:bg-gray-200 transition-colors tracking-tight cursor-pointer inline-flex items-center gap-3 shrink-0"
          >
            Start a conversation &rarr;
          </a>
        </div>

        {/* Lockup & Copyright Bar */}
        <div className="pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm text-[#959595]">
          <div>
            Design & Development — Est. 2012
          </div>

          <div>
            © ANML 2025 – All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <span>Follow us on</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/anml/"
              className="text-white hover:text-gray-400 transition-colors"
            >
              Instagram
            </a>
            <span>/</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/company/anml"
              className="text-white hover:text-gray-400 transition-colors"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://dribbble.com/anml"
              className="text-white hover:text-gray-400 transition-colors"
            >
              Dribbble
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ANMLFooter;
