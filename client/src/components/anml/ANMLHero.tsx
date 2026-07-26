import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface ANMLHeroProps {
  onOpenReel: () => void;
}

export const ANMLHero: React.FC<ANMLHeroProps> = ({ onOpenReel }) => {
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onOpenReel}
      className="relative w-full h-screen min-h-[700px] flex flex-col justify-end px-6 sm:px-12 pb-16 sm:pb-24 cursor-none overflow-hidden bg-black select-none"
    >
      {/* Background Video Reel */}
      <div className="absolute inset-0 w-full h-full z-0 opacity-60">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://image.mux.com/j89aRcFvodH3kccjOKLVvSWRVn7tsJ5x/thumbnail.jpg"
          className="w-full h-full object-cover"
          src="https://www.datocms-assets.com/132779/1721669405-reel-cut-576.mp4"
        />
      </div>

      {/* Floating Custom Magnetic Cursor */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-30"
        animate={{
          x: mousePos.x - 60,
          y: mousePos.y - 60,
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 400, damping: 28, mass: 0.1 }}
      >
        <div className="w-[120px] h-[120px] rounded-full bg-white text-black font-semibold text-sm flex items-center justify-center shadow-2xl tracking-tight">
          Play reel
        </div>
      </motion.div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto w-full">
        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-normal tracking-tighter leading-[0.88] text-white"
        >
          <span>Interface</span>
          <br />
          <span className="italic font-serif font-light text-gray-200">Artisans</span>
        </motion.h1>

        {/* Mobile touch device fallback text */}
        <div className="mt-8 md:hidden">
          <button
            onClick={onOpenReel}
            className="px-6 py-3 rounded-full bg-white text-black text-xs font-semibold uppercase tracking-wider"
          >
            PLAY REEL
          </button>
        </div>
      </div>
    </section>
  );
};

export default ANMLHero;
