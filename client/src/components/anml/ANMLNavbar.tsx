import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ANMLNavbar: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="z-50 relative block">
            <svg width="102" height="22" viewBox="0 0 102 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M34.6406 11.1731V21.3796L29.1169 21.3796L29.1169 0.5L31.054 0.5L41.6172 10.7667V0.590331L47.0804 0.590331V21.3946H45.1735L34.6406 11.158" fill="#FFFFFF" />
              <path d="M1.90683 21.4097H0L0.0756664 15.8097C3.55638 12.6785 5.4632 10.7817 5.4632 10.7817L16.0264 0.515065L17.9635 0.515065L17.9635 21.3946H12.4398L12.4398 11.1882L1.90683 21.4248" fill="#FFFFFF" />
              <path d="M76.4092 0.665597L78.316 0.665597V21.5L72.8528 21.5V12.2419L68.4036 16.8785H67.8134L63.3944 12.2419V21.5H57.9312V0.665597L59.8985 0.665597L68.0706 9.68278L76.3941 0.665597" fill="#FFFFFF" />
              <path d="M94.4181 16.6075L102 16.6075V21.3946L89.0457 21.3946V0.605396L94.4181 0.605396V16.6075Z" fill="#FFFFFF" />
            </svg>
          </a>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-[15px] tracking-tight font-normal text-[#959595]">
            <a href="#work" className="hover:text-white transition-colors duration-300">work</a>
            <a href="#services" className="hover:text-white transition-colors duration-300">services</a>
            <a href="#about" className="hover:text-white transition-colors duration-300">about</a>
            <a href="#insights" className="hover:text-white transition-colors duration-300">Insights</a>
            <a href="#contact" className="hover:text-white transition-colors duration-300">contact</a>
          </nav>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden z-50 p-2 text-white cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            <div className="w-6 h-4 flex flex-col justify-between">
              <span className={`w-full h-[2px] bg-white transition-transform duration-300 ${mobileNavOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`w-full h-[2px] bg-white transition-opacity duration-300 ${mobileNavOpen ? 'opacity-0' : 'opacity-100'}`} />
              <span className={`w-full h-[2px] bg-white transition-transform duration-300 ${mobileNavOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>

        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[#0A0A0A] flex flex-col justify-between px-8 pt-32 pb-12 md:hidden"
          >
            <div className="flex flex-col gap-6 text-4xl font-medium tracking-tight text-white">
              <a href="#work" onClick={() => setMobileNavOpen(false)}>work</a>
              <a href="#services" onClick={() => setMobileNavOpen(false)}>services</a>
              <a href="#about" onClick={() => setMobileNavOpen(false)}>about</a>
              <a href="#insights" onClick={() => setMobileNavOpen(false)}>Insights</a>
              <a href="#contact" onClick={() => setMobileNavOpen(false)}>contact</a>
            </div>

            <div className="flex items-center gap-6 text-[#959595] text-sm pt-8 border-t border-white/10">
              <a href="https://dribbble.com/anml" target="_blank" rel="noreferrer" className="hover:text-white">Dribbble</a>
              <a href="https://instagram.com/anml" target="_blank" rel="noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://linkedin.com/company/anml" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ANMLNavbar;
