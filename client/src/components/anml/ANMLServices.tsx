import React from 'react';
import { motion } from 'framer-motion';

export const ANMLServices: React.FC = () => {
  const capabilities = [
    {
      num: '01',
      title: 'UI/UX Design Systems',
      desc: 'Bespoke design systems, component libraries, and interactive design specifications built for enterprise engineering teams.'
    },
    {
      num: '02',
      title: 'B2B & Healthcare Applications',
      desc: 'Simplifying high-complexity clinical, financial, and industrial workflows into intuitive, zero-friction software interfaces.'
    },
    {
      num: '03',
      title: 'AI & Data Visualizations',
      desc: 'Custom UI patterns for artificial intelligence models, real-time telemetry dashboards, and predictive analytics platforms.'
    },
    {
      num: '04',
      title: 'Full-Stack Web Engineering',
      desc: 'Sub-second React, Vite, and Next.js digital platforms deployed globally across edge networks with 98+ PageSpeed optimization.'
    }
  ];

  return (
    <section id="services" className="py-24 px-6 sm:px-12 bg-[#0E0E0E] max-w-[1440px] mx-auto border-t border-white/10">
      <div className="flex flex-col lg:flex-row justify-between gap-16">
        
        {/* Left Header Column */}
        <div className="lg:w-1/3 flex flex-col justify-between">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#959595] font-mono">OUR CAPABILITIES</span>
            <h2 className="text-4xl sm:text-6xl font-normal tracking-tight text-white mt-4 leading-tight">
              Bridging UX & Brand Strategy
            </h2>
          </div>

          <p className="text-sm text-[#959595] leading-relaxed mt-6 max-w-sm">
            We partner with ambitious product leaders to transform complex technical capabilities into clear, elegant user experiences.
          </p>
        </div>

        {/* Right List Column */}
        <div className="lg:w-2/3 flex flex-col divide-y divide-white/10">
          {capabilities.map(cap => (
            <motion.div
              key={cap.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="py-8 sm:py-10 flex flex-col sm:flex-row justify-between items-start gap-6 group hover:pl-2 transition-all duration-300"
            >
              <span className="text-sm font-mono text-[#959595] pt-1">{cap.num}</span>
              <div className="sm:w-3/4">
                <h3 className="text-2xl font-medium text-white tracking-tight group-hover:text-gray-300 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-sm text-[#959595] leading-relaxed mt-2">
                  {cap.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ANMLServices;
