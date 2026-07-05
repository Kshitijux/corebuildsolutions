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
  
  // WhatsApp Chat Widget State
  const [showChatBubble, setShowChatBubble] = useState(false);
  const [chatMessage, setChatMessage] = useState('');
  const [chatSubmitted, setChatSubmitted] = useState(false);
  
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

  // WhatsApp widget submission handler
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage) return;

    addLead({
      name: 'WhatsApp Prospect',
      email: 'anonymous@whatsapp.chat',
      message: `Lead captured via floating chat bubble: "${chatMessage}"`,
      source: 'whatsapp'
    });

    setChatSubmitted(true);
    setChatMessage('');

    window.dispatchEvent(new CustomEvent('show-toast', {
      detail: { message: 'Message sent! Re-directing to secure chat...', type: 'success' }
    }));

    // Redirect to real WhatsApp API after 1.5 seconds
    setTimeout(() => {
      const cleanNumber = settings.whatsappNumber.replace(/[^0-9]/g, '');
      const encodedMsg = encodeURIComponent("Hi CoreBuild, I am interested in building a product.");
      window.open(`https://wa.me/${cleanNumber}?text=${encodedMsg}`, '_blank');
      setShowChatBubble(false);
      setChatSubmitted(false);
    }, 1500);
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
                      placeholder="Your Name"
                      value={exitFormName}
                      onChange={(e) => setExitFormName(e.target.value)}
                      className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                    />
                    <input
                      type="email"
                      required
                      placeholder="business@company.com"
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
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
        {/* Chat Bubble Popup */}
        <AnimatePresence>
          {showChatBubble && (
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 20 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="w-80 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-2xl overflow-hidden mb-4"
            >
              {/* Header */}
              <div className="bg-slate-900 dark:bg-slate-900 p-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Kshitij"
                      alt="Kshitij Tiwari"
                      className="w-10 h-10 rounded-full object-cover border border-white/20"
                    />
                    <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-green-500 border border-slate-900" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Kshitij Tiwari</h4>
                    <p className="text-[10px] text-slate-400">Founder – CoreBuild Solutions</p>
                  </div>
                </div>
                <button
                  onClick={() => setShowChatBubble(false)}
                  className="p-1 rounded-full hover:bg-white/10 text-slate-300 hover:text-white"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Chat Body */}
              <div className="p-4 bg-slate-50 dark:bg-slate-900/30 min-h-[140px] flex flex-col gap-3">
                <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 p-3 rounded-2xl rounded-tl-sm text-xs text-slate-800 dark:text-slate-300 max-w-[85%] self-start shadow-sm">
                  Hi there! 👋 I am Kshitij Tiwari, the Founder of CoreBuild Solutions.
                </div>
                <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-900 p-3 rounded-2xl rounded-tl-sm text-xs text-slate-800 dark:text-slate-300 max-w-[85%] self-start shadow-sm">
                  If you have any questions about our services, timelines, or pricing plans, send me a quick note.
                </div>
                {chatSubmitted && (
                  <div className="bg-green-500/10 text-green-500 p-2.5 rounded-xl text-center text-[10px] font-medium border border-green-500/20">
                    Connecting to secure channel...
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <form onSubmit={handleChatSubmit} className="p-3 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="Ask a technical question..."
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  className="flex-1 px-3 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                />
                <button
                  type="submit"
                  className="p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl flex items-center justify-center transition-colors"
                >
                  <Send size={14} />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating trigger button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowChatBubble(!showChatBubble)}
          className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-xl shadow-blue-500/25 cursor-pointer relative"
        >
          <MessageCircle size={24} />
          {/* Pulsing Dot */}
          <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border border-white dark:border-slate-950 rounded-full animate-ping" />
          <div className="absolute top-0 right-0 w-3 h-3 bg-green-500 border border-white dark:border-slate-950 rounded-full" />
        </motion.button>
      </div>
    </>
  );
}
