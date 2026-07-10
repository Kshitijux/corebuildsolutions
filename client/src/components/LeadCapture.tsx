import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import confetti from 'canvas-confetti';

// Toast Interface
interface Toast {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

export default function LeadCapture() {
  const { settings, addLead } = useDatabase();
  
  // Exit Intent State
  const [showExitPopup, setShowExitPopup] = useState(false);
  const [exitFormName, setExitFormName] = useState('');
  const [exitFormEmail, setExitFormEmail] = useState('');
  const [exitFormSubmitted, setExitFormSubmitted] = useState(false);
  
  // WhatsApp Chat Redirect Target
  const whatsappNum = settings?.whatsappNumber ? settings.whatsappNumber.replace(/[^0-9]/g, '') : '919244007322';
  const encodedText = encodeURIComponent("Hello CoreBuild Solutions! I'm interested in discussing a website, mobile app, or AI project. Can we schedule a brief consultation?");
  const whatsappUrl = `https://wa.me/${whatsappNum}?text=${encodedText}`;
  
  // Custom Toast State
  const [toasts, setToasts] = useState<Toast[]>([]);

  // 1. Exit Intent Listener
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger if cursor goes above the viewport top
      if (e.clientY < 5) {
        const hasSeenExit = sessionStorage.getItem('seen_exit_intent');
        if (!hasSeenExit) {
          setShowExitPopup(true);
          sessionStorage.setItem('seen_exit_intent', 'true');
        }
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  // 2. Custom Toast Listeners
  useEffect(() => {
    const handleShowToast = (e: Event) => {
      const customEvent = e as CustomEvent<{ message: string; type?: 'success' | 'info' | 'warning' }>;
      const newToast: Toast = {
        id: Math.random().toString(36).substring(2, 9),
        message: customEvent.detail.message,
        type: customEvent.detail.type || 'success'
      };
      
      setToasts(prev => [...prev, newToast]);
      
      // Auto-remove toast after 4 seconds
      setTimeout(() => {
        setToasts(prev => prev.filter(t => t.id !== newToast.id));
      }, 4000);
    };

    window.addEventListener('show-toast', handleShowToast);
    return () => window.removeEventListener('show-toast', handleShowToast);
  }, []);

  // Exit Intent Submission handler
  const handleExitFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!exitFormName || !exitFormEmail) return;

    addLead({
      name: exitFormName,
      email: exitFormEmail,
      message: 'Lead captured via Exit Intent: Free Strategic consultation request.',
      source: 'exit_intent'
    });

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    setExitFormSubmitted(true);
    setExitFormName('');
    setExitFormEmail('');

    // Dispatches success toast
    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: 'Blueprint request received! We will follow up shortly.', type: 'success' }
    }));

    setTimeout(() => {
      setShowExitPopup(false);
      setExitFormSubmitted(false);
    }, 4000);
  };

  return (
    <>
      {/* ==========================================
          TOAST NOTIFICATION AREA
         ========================================== */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 pointer-events-none max-w-sm w-full">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              initial={{ opacity: 0, x: -100, scale: 0.9 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -100, scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 350, damping: 25 }}
              className="pointer-events-auto flex items-center gap-3 px-4 py-3 bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-blue-900/40 rounded-2xl shadow-xl shadow-blue-500/5 backdrop-blur-md"
            >
              <div className="w-8 h-8 rounded-full bg-blue-600/10 flex items-center justify-center text-blue-500">
                <Zap size={14} className="fill-blue-500/20" />
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-slate-200">
                {toast.message}
              </p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* ==========================================
          EXIT INTENT POPUP
         ========================================== */}
      <AnimatePresence>
        {showExitPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-slate-950/70 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: 'spring', duration: 0.6 }}
              className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 p-8 shadow-2xl"
            >
              {/* Decorative Glow Blob */}
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
              
              {/* Close Button */}
              <button
                onClick={() => setShowExitPopup(false)}
                className="absolute top-6 right-6 p-2 rounded-full border border-slate-200 dark:border-slate-900 text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X size={16} />
              </button>

              {!exitFormSubmitted ? (
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-500">
                    <Clock size={14} /> Limited Offer
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                      Get a Free Product Blueprint & Technical Architecture Review
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
                      Before you leave, secure a custom 1-on-1 strategic consultation ($1,500 value) where our engineering leads review your system requirements and timeline.
                    </p>
                  </div>

                  <form onSubmit={handleExitFormSubmit} className="flex flex-col gap-3">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={exitFormName}
                      onChange={(e) => setExitFormName(e.target.value)}
                      className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="rahul.sharma@gmail.com"
                      value={exitFormEmail}
                      onChange={(e) => setExitFormEmail(e.target.value)}
                      className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                    />
                    <button
                      type="submit"
                      className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2"
                    >
                      Secure Free Session <Zap size={16} />
                    </button>
                  </form>

                  <div className="flex items-center gap-1.5 justify-center text-xs text-slate-500">
                    <ShieldCheck size={14} className="text-green-500" /> Fully confidential. NDA guaranteed.
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Blueprint Claimed!
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm">
                    Our technical team is reviewing calendar openings. We will contact you at your email shortly.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ==========================================
          FLOATING WHATSAPP CHAT WIDGET
         ========================================== */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.a
          whileHover={{ scale: 1.08, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA56] text-white flex items-center justify-center shadow-xl shadow-green-500/20 cursor-pointer relative transition-colors duration-300"
          aria-label="Chat on WhatsApp"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="26" width="26" xmlns="http://www.w3.org/2000/svg">
            <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
          </svg>
          {/* Pulsing Dot */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 border border-white dark:border-slate-950 rounded-full animate-ping" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-blue-500 border border-white dark:border-slate-950 rounded-full" />
        </motion.a>
      </div>
    </>
  );
}
