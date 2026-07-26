import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import ANMLNavbar from '../components/anml/ANMLNavbar';
import ANMLHero from '../components/anml/ANMLHero';
import ANMLStatementPills from '../components/anml/ANMLStatementPills';
import ANMLLogoStrip from '../components/anml/ANMLLogoStrip';
import ANMLWorkGrid from '../components/anml/ANMLWorkGrid';
import ANMLServices from '../components/anml/ANMLServices';
import ANMLStatsAwards from '../components/anml/ANMLStatsAwards';
import ANMLInsights from '../components/anml/ANMLInsights';
import ANMLFooter from '../components/anml/ANMLFooter';
import ANMLVideoModal from '../components/anml/ANMLVideoModal';

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  // Top Progress Bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="bg-[#0A0A0A] text-white min-h-screen font-sans selection:bg-white selection:text-black">
      
      {/* Top Scroll Progress Indicator */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-white z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation Header */}
      <ANMLNavbar />

      {/* Main Content */}
      <main>
        {/* Section 1: Hero Video Reel & Magnetic Cursor */}
        <ANMLHero onOpenReel={() => setVideoModalOpen(true)} />

        {/* Section 2: Statement Pills with Scroll Text Reveal */}
        <ANMLStatementPills />

        {/* Section 3: Client Logo Strip Marquee */}
        <ANMLLogoStrip />

        {/* Section 4: Filterable Featured Work Grid */}
        <ANMLWorkGrid />

        {/* Section 5: Capabilities & Services Breakdown */}
        <ANMLServices />

        {/* Section 6: Stats, Credentials & 6 Webby Awards */}
        <ANMLStatsAwards />

        {/* Section 7: Articles & Insights */}
        <ANMLInsights />
      </main>

      {/* Footer & Contact CTA */}
      <ANMLFooter />

      {/* Fullscreen Video Modal Overlay */}
      <ANMLVideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

    </div>
  );
}
