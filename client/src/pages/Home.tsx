import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ExternalLink } from 'lucide-react';

export default function Home() {
  const [countdown, setCountdown] = useState(5);
  const targetUrl = 'https://therarecompany.in';

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          window.location.href = targetUrl;
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleRedirect = () => {
    window.location.href = targetUrl;
  };

  const titleWords = ["corebuildsolutions", "is", "therarecompany", "now"];

  return (
    <div className="relative w-full h-screen min-h-[600px] flex flex-col justify-between overflow-hidden bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Fullscreen Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10 opacity-75"
        src="https://www.pexels.com/download/video/18680290/"
      />

      {/* Dark Ambient Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80 -z-10 pointer-events-none" />

      {/* Header Bar */}
      <header className="w-full px-6 md:px-12 pt-8 z-10 flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 shadow-lg"
        >
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-wider text-white/90">
            Brand Migration Notice
          </span>
        </motion.div>

        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          onClick={handleRedirect}
          className="text-xs font-mono text-white/80 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm border border-white/10"
        >
          therarecompany.in <ExternalLink size={12} />
        </motion.button>
      </header>

      {/* Main Hero Content */}
      <main className="w-full max-w-5xl mx-auto px-6 z-10 my-auto text-center flex flex-col items-center gap-8">
        
        {/* H1 Heading with Entrance Animation */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.08] text-white max-w-4xl">
          {titleWords.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-3 sm:mr-4 py-1">
              <motion.span
                initial={{ y: '110%', opacity: 0, rotate: 6 }}
                animate={{ y: '0%', opacity: 1, rotate: 0 }}
                transition={{
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + idx * 0.12,
                }}
                className="inline-block"
              >
                {word === 'corebuildsolutions' ? (
                  <span className="text-white/60 font-light line-through decoration-white/30 decoration-2">
                    {word}
                  </span>
                ) : word === 'therarecompany' ? (
                  <span className="text-white font-semibold underline decoration-white/40 underline-offset-8">
                    {word}
                  </span>
                ) : (
                  word
                )}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subheading & Redirect Notice */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-base sm:text-xl text-gray-200 font-normal max-w-xl leading-relaxed"
        >
          CoreBuild Solutions has evolved into <strong className="text-white font-semibold">The Rare Company</strong>. Redirecting you in{' '}
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white/20 text-white font-mono font-bold text-sm ml-1 border border-white/30">
            {countdown}
          </span>
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        >
          <button
            onClick={handleRedirect}
            className="group relative inline-flex items-center gap-3.5 px-8 py-4 rounded-full bg-white text-black font-semibold text-base shadow-2xl hover:bg-gray-100 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Visit therarecompany.in</span>
            <div className="w-8 h-8 rounded-full bg-black text-white flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              <ArrowUpRight size={18} />
            </div>
          </button>
        </motion.div>

      </main>

      {/* Footer */}
      <footer className="w-full px-6 md:px-12 pb-8 z-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-white/60">
        <div>© 2026 The Rare Company. All rights reserved.</div>
        <a
          href="https://therarecompany.in"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors flex items-center gap-1"
        >
          therarecompany.in &rarr;
        </a>
      </footer>
    </div>
  );
}
