import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ANMLVideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl?: string;
}

export const ANMLVideoModal: React.FC<ANMLVideoModalProps> = ({
  isOpen,
  onClose,
  videoUrl = "https://www.datocms-assets.com/132779/1721669405-reel-cut-576.mp4"
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-8 right-8 z-10 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close modal"
          >
            <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1L21 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M21 1L1 21" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          {/* Video Container */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="w-full max-w-5xl aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black relative border border-white/10"
          >
            <video
              autoPlay
              controls
              playsInline
              className="w-full h-full object-cover"
              src={videoUrl}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ANMLVideoModal;
