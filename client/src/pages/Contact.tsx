import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Calendar, 
  Clock, 
  CheckCircle, 
  Globe 
} from 'lucide-react';
import { useDatabase } from '../context/DatabaseContext';
import confetti from 'canvas-confetti';

export default function Contact() {
  const { settings, addLead } = useDatabase();
  
  // Standard contact form state
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formCompany, setFormCompany] = useState('');
  const [formSubject, setFormSubject] = useState('');
  const [formService, setFormService] = useState('Custom Web Applications');
  const [formMessage, setFormMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scheduler Booking State
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [bookName, setBookName] = useState('');
  const [bookEmail, setBookEmail] = useState('');
  const [bookSubmitted, setBookSubmitted] = useState(false);

  const dates = [
    { day: 'Mon', date: 'Jul 06', label: '2026-07-06' },
    { day: 'Tue', date: 'Jul 07', label: '2026-07-07' },
    { day: 'Wed', date: 'Jul 08', label: '2026-07-08' },
    { day: 'Thu', date: 'Jul 09', label: '2026-07-09' }
  ];

  const times = ['10:00 AM', '11:30 AM', '02:00 PM', '03:30 PM'];

  // Office Location coordinates mockup
  const offices = [
    { city: 'New York', address: '100 Hudson St', x: '25%', y: '40%' },
    { city: 'London', address: '45 Broad Street', x: '48%', y: '30%' },
    { city: 'Dubai', address: 'DIFC Square', x: '68%', y: '50%' }
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formName || !formEmail) return;

    try {
      await addLead({
        name: formName,
        email: formEmail,
        phone: formPhone,
        company: formCompany,
        subject: formSubject,
        service: formService,
        message: formMessage,
        source: 'contact_form'
      });

      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      setFormSubmitted(true);
      setFormName('');
      setFormEmail('');
      setFormPhone('');
      setFormCompany('');
      setFormSubject('');
      setFormMessage('');

      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Message sent! Our engineering lead will follow up shortly.', type: 'success' }
      }));

      setTimeout(() => setFormSubmitted(false), 5000);
    } catch (err: any) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: err.message || 'Failed to submit contact enquiry.', type: 'error' }
      }));
    }
  };

  const handleBookSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !bookName || !bookEmail) return;

    try {
      await addLead({
        name: bookName,
        email: bookEmail,
        message: `MEETING BOOKED: Strategic session scheduled for ${selectedDate} at ${selectedTime}.`,
        service: 'Consultation Scheduler',
        source: 'contact_meeting'
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 }
      });

      setBookSubmitted(true);
      setBookName('');
      setBookEmail('');

      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: `Meeting booked for ${selectedDate} at ${selectedTime}! Check inbox.`, type: 'success' }
      }));

      setTimeout(() => {
        setBookSubmitted(false);
        setSelectedDate(null);
        setSelectedTime(null);
      }, 5000);
    } catch (err: any) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: err.message || 'Failed to schedule meeting.', type: 'error' }
      }));
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors pt-24 pb-20">
      
      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px]" />
        <div className="liquid-blob bottom-20 right-10 w-80 h-80 bg-indigo-500/10 dark:bg-indigo-600/10 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* ==========================================
            HERO SECTION
           ========================================== */}
        <div className="max-w-3xl text-left py-16 flex flex-col gap-6">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Contact Us</span>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold tracking-tight leading-none">
            Let's build something exceptional.
          </h1>
          <p className="text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
            Have an idea for a platform or custom algorithm? Reach out via our secure form or select an open slot to book a live briefing.
          </p>
        </div>

        {/* ==========================================
            CONTACT FORM & GENERAL INFO
           ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          
          {/* General Details & SVG Map (Left side) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            
            {/* Info cards */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Email</h4>
                  <a href={`mailto:${settings.contactEmail}`} className="text-sm font-semibold hover:text-blue-500 transition-colors mt-0.5 block">
                    {settings.contactEmail}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Phone</h4>
                  <a href={`tel:${settings.contactPhone}`} className="text-sm font-semibold hover:text-blue-500 transition-colors mt-0.5 block">
                    {settings.contactPhone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">HQ Address</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">
                    {settings.address}
                  </p>
                </div>
              </div>
            </div>

            {/* Mock Global Map SVG */}
            <div className="flex flex-col gap-3">
              <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                <Globe size={12} /> Global Hub Locations
              </span>
              <div className="relative aspect-[2/1] w-full rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-100/50 dark:bg-slate-900/35 overflow-hidden">
                
                {/* SVG Outline for World Map Mock */}
                <svg viewBox="0 0 100 50" className="absolute inset-0 w-full h-full opacity-10 dark:opacity-20 fill-slate-500">
                  <path d="M10,15 Q25,5 40,15 T70,10 T90,20 T95,45 T75,40 T50,45 T20,35 Z" />
                </svg>

                {/* Glowing office nodes */}
                {offices.map((office, idx) => (
                  <div 
                    key={idx}
                    className="absolute group/node -translate-x-1/2 -translate-y-1/2"
                    style={{ left: office.x, top: office.y }}
                  >
                    {/* Ring ping */}
                    <div className="w-3.5 h-3.5 bg-blue-500 rounded-full animate-ping absolute -inset-0.5 opacity-75" />
                    {/* Circle Node */}
                    <div className="w-2.5 h-2.5 bg-blue-600 border border-white dark:border-slate-900 rounded-full relative z-10" />
                    
                    {/* Label tooltip */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-slate-950 text-white rounded-md px-2 py-1 text-[8px] tracking-wide font-semibold opacity-0 group-hover/node:opacity-100 transition-opacity duration-200 whitespace-nowrap shadow-md z-20">
                      {office.city} - {office.address}
                    </div>
                  </div>
                ))}

              </div>
            </div>

          </div>

          {/* Contact Form Panel (Right side) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-800 text-left">
              {!formSubmitted ? (
                <form onSubmit={handleContactSubmit} className="flex flex-col gap-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Your Name</label>
                      <input
                        type="text"
                        required
                        placeholder="Aarav Mehta"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Business Email</label>
                      <input
                        type="email"
                        required
                        placeholder="aarav.mehta@gmail.com"
                        value={formEmail}
                        onChange={(e) => setFormEmail(e.target.value)}
                        className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Contact Phone</label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 99999 99999"
                        value={formPhone}
                        onChange={(e) => setFormPhone(e.target.value)}
                        className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Company (Optional)</label>
                      <input
                        type="text"
                        placeholder="Reliance Industries"
                        value={formCompany}
                        onChange={(e) => setFormCompany(e.target.value)}
                        className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Subject</label>
                      <input
                        type="text"
                        required
                        placeholder="Website redesign inquiry"
                        value={formSubject}
                        onChange={(e) => setFormSubject(e.target.value)}
                        className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Topic Interest</label>
                      <select
                        value={formService}
                        onChange={(e) => setFormService(e.target.value)}
                        className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                      >
                        <option>Custom Web Applications</option>
                        <option>Mobile App Development</option>
                        <option>AI & Machine Learning Systems</option>
                        <option>UI/UX Design or Brand Audits</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Detailed Request</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Outline core dashboard pages, target data stores, and required timeline details..."
                      value={formMessage}
                      onChange={(e) => setFormMessage(e.target.value)}
                      className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-2 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Initiate Project Request <Send size={14} />
                  </button>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                    <CheckCircle size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                    Briefing Received!
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                    Thank you. We have saved your project briefing to our system and will initiate our technical feedback shortly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* ==========================================
            CALENDLY INTEGRATION SCHEDULER
           ========================================== */}
        <div className="py-16 border-t border-slate-200 dark:border-slate-900 text-left">
          <div className="max-w-2xl mb-12 flex flex-col gap-4">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-500">Virtual Booking</span>
            <h2 className="font-heading text-2xl md:text-3xl font-extrabold tracking-tight">
              Schedule Briefing Session
            </h2>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Pick a calendar date and time slot below to lock in a secure 20-minute consultation call with our CTO.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Scheduler selectors (Left) */}
            <div className="lg:col-span-6 flex flex-col gap-6">
              
              {/* Date Selectors */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  <Calendar size={12} /> Select Date
                </span>
                <div className="grid grid-cols-4 gap-3">
                  {dates.map((d) => (
                    <button
                      key={d.label}
                      type="button"
                      onClick={() => {
                        setSelectedDate(d.label);
                        setBookSubmitted(false);
                      }}
                      className={`p-3.5 rounded-xl border flex flex-col items-center justify-center transition-all cursor-pointer ${
                        selectedDate === d.label
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                          : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-800'
                      }`}
                    >
                      <span className="text-[10px] uppercase font-bold tracking-widest">{d.day}</span>
                      <span className="font-heading text-sm font-extrabold mt-1">{d.date.split(' ')[1]}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Selectors */}
              <div className="flex flex-col gap-3">
                <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1">
                  <Clock size={12} /> Select Hourly Slot
                </span>
                <div className="grid grid-cols-2 gap-3">
                  {times.map((t) => (
                    <button
                      key={t}
                      type="button"
                      disabled={!selectedDate}
                      onClick={() => {
                        setSelectedTime(t);
                        setBookSubmitted(false);
                      }}
                      className={`p-3.5 rounded-xl border font-semibold text-xs tracking-wide uppercase transition-all cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed ${
                        selectedTime === t
                          ? 'bg-blue-600 text-white border-blue-500 shadow-md'
                          : 'bg-white/50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-900 text-slate-600 dark:text-slate-400 hover:border-slate-300 dark:hover:border-slate-800'
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Booking confirmation form (Right) */}
            <div className="lg:col-span-6">
              <AnimatePresence mode="wait">
                {selectedDate && selectedTime ? (
                  <motion.div
                    key={`${selectedDate}-${selectedTime}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    className="glass-card rounded-3xl p-8 border border-slate-200 dark:border-slate-800"
                  >
                    {!bookSubmitted ? (
                      <form onSubmit={handleBookSubmit} className="flex flex-col gap-4">
                        <span className="text-[10px] font-semibold text-blue-500 uppercase tracking-widest text-left">
                          Slot Confirmed
                        </span>
                        <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white text-left">
                          Lock in Call details
                        </h3>
                        
                        <div className="p-3 bg-slate-100 dark:bg-slate-900 rounded-xl flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-900">
                          <CheckCircle size={16} className="text-green-500 flex-shrink-0" />
                          <span>Briefing booked for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong></span>
                        </div>

                        <div className="flex flex-col gap-1 text-left mt-2">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Your Name</label>
                          <input
                            type="text"
                            required
                            placeholder="Aarav Mehta"
                            value={bookName}
                            onChange={(e) => setBookName(e.target.value)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                          />
                        </div>

                        <div className="flex flex-col gap-1 text-left">
                          <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Business Email</label>
                          <input
                            type="email"
                            required
                            placeholder="aarav.mehta@gmail.com"
                            value={bookEmail}
                            onChange={(e) => setBookEmail(e.target.value)}
                            className="px-4 py-3 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900 dark:text-white"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-2 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-lg shadow-blue-500/20 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                        >
                          Confirm Call Booking <Calendar size={14} />
                        </button>
                      </form>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-2">
                          <Calendar size={28} />
                        </div>
                        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                          Briefing Confirmed!
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 max-w-xs">
                          Your strategic calendar invite has been booked. Check your inbox for Google Meet link details.
                        </p>
                      </div>
                    )}
                  </motion.div>
                ) : (
                  <div className="p-8 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-3xl h-full flex flex-col items-center justify-center gap-2 bg-slate-100/20 dark:bg-slate-950/20 text-slate-400 min-h-[250px]">
                    <Calendar size={36} className="text-slate-400 mb-2" />
                    <p className="text-sm font-semibold uppercase tracking-wider">Select Open Call Slot</p>
                    <p className="text-[10px] max-w-xs leading-relaxed">
                      Pick a target date and hourly slot on the left to activate the secure Google Meet booker.
                    </p>
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
