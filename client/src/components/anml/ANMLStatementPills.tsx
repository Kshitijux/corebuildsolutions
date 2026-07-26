import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ANMLStatementPills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.3"]
  });

  // Animated color progression for the text
  const textColor = useTransform(scrollYProgress, [0, 1], ["#343434", "#FFFFFF"]);

  return (
    <section ref={containerRef} className="py-24 sm:py-36 px-6 sm:px-12 bg-[#0A0A0A] max-w-[1440px] mx-auto">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          style={{ color: textColor }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.2] text-left"
        >
          We create result driven{' '}
          
          {/* Apps Pill */}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-2 rounded-full overflow-hidden border border-white/20 h-[0.9em] w-[2.2em] relative top-[-0.05em] group cursor-pointer">
            <a href="#work" className="w-full h-full block">
              <img
                src="https://www.datocms-assets.com/132779/1763587302-anml-social-card-image.png"
                alt="Apps UI preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          </span>
          apps, websites{' '}

          {/* Websites Pill */}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-2 rounded-full overflow-hidden border border-white/20 h-[0.9em] w-[2.2em] relative top-[-0.05em] group cursor-pointer">
            <a href="#work" className="w-full h-full block">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80"
                alt="Websites UI preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          </span>
          and brands{' '}

          {/* Brands Pill */}
          <span className="inline-flex items-center align-middle mx-1 sm:mx-2 rounded-full overflow-hidden border border-white/20 h-[0.9em] w-[2.2em] relative top-[-0.05em] group cursor-pointer">
            <a href="#work" className="w-full h-full block">
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
                alt="Brands UI preview"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          </span>
          for globally recognized companies to early stage startups.
        </motion.h2>
      </div>
    </section>
  );
};

export default ANMLStatementPills;
