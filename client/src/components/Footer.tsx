import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Clock, Globe, ArrowRight, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
import { useDatabase } from '../context/DatabaseContext';
import confetti from 'canvas-confetti';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const { settings, addLead } = useDatabase();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Please enter a valid email address.', type: 'error' }
      }));
      return;
    }

    setIsSubmitting(true);

    try {
      await addLead({
        name: 'Newsletter Subscriber',
        email: email,
        message: 'Subscribed to newsletter list.',
        source: 'newsletter'
      });

      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.85 }
      });

      setSubscribed(true);
      setEmail('');
      
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: 'Successfully subscribed to our newsletter!', type: 'success' }
      }));
      
      setTimeout(() => setSubscribed(false), 6000);
    } catch (error: any) {
      window.dispatchEvent(new CustomEvent('show-toast', {
        detail: { message: error.message || 'Subscription failed. You may already be subscribed.', type: 'error' }
      }));
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentYear = new Date().getFullYear();

  // Dynamic social link mappings
  const socialIconsMap = [
    { key: 'linkedin', icon: FaLinkedin, url: settings.socialLinks?.linkedin },
    { key: 'twitter', icon: FaTwitter, url: settings.socialLinks?.twitter },
    { key: 'instagram', icon: FaInstagram, url: settings.socialLinks?.instagram },
    { key: 'github', icon: FaGithub, url: settings.socialLinks?.github }
  ];

  const activeSocials = socialIconsMap.filter(item => item.url && item.url.trim() !== '');

  return (
    <footer className="relative bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 pt-20 pb-10 transition-colors z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Top Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16 items-start">
          
          {/* Column 1: Company Profile (span 3) */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2 group w-max">
              <img src={logoImg} alt="CoreBuild Solutions Logo" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain" />
            </Link>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">
              We design and engineer elite web applications, mobile apps, and custom machine learning engines. Beautiful design meets world-class technology.
            </p>
            
            {/* Social Media Links */}
            {activeSocials.length > 0 && (
              <div className="flex flex-wrap items-center gap-3 mt-2">
                {activeSocials.map(social => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.key}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 border border-slate-200 hover:border-blue-600 text-slate-650 hover:text-blue-600 rounded-full transition-colors cursor-pointer"
                      title={`Follow us on ${social.key}`}
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            )}
          </div>

          {/* Column 2: Services List (span 3) */}
          <div className="lg:col-span-3">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Services & Pricing
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-650 dark:text-slate-400">
              <li>
                <Link to="/services/custom-web-applications" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>Web Development</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹49,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/mobile-app-development" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>Mobile App Development</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹89,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/e-commerce-development" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>E-commerce Development</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹79,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ui-ux-design" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>UI/UX Interface Design</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹24,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/branding-logo-design" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>Branding & Logo Design</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹14,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/seo-optimization" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>SEO Optimization</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹19,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/ai-machine-learning" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>AI & Machine Learning</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹99,999+</span>
                </Link>
              </li>
              <li>
                <Link to="/services/custom-enterprise-software" className="hover:text-blue-600 transition-colors flex items-center justify-between gap-2">
                  <span>Custom Enterprise Software</span>
                  <span className="text-[10px] font-mono text-blue-600 dark:text-blue-400 font-bold shrink-0">₹1,49,999+</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Company & Resources (span 2) */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-6">
              Company
            </h3>
            <ul className="space-y-3.5 text-xs text-slate-650 dark:text-slate-400">
              <li><Link to="/about" className="hover:text-blue-600 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-600 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="hover:text-blue-600 transition-colors">Blog</Link></li>
              <li><Link to="/about#careers" className="hover:text-blue-600 transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="hover:text-blue-600 transition-colors">Contact</Link></li>
              <li><Link to="/about#faq" className="hover:text-blue-600 transition-colors">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-blue-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-blue-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Newsletter (span 4) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div>
              <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-slate-900 dark:text-white mb-6">
                Insights Newsletter
              </h3>
              <p className="text-xs text-slate-650 dark:text-slate-400 leading-relaxed mb-4">
                Subscribe to get detailed system blueprints, tech stacks reviews, and agency case studies.
              </p>
              
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  disabled={isSubmitting}
                  placeholder="rahul@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 bg-white border border-slate-200 rounded-xl text-xs focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-slate-900"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="absolute right-1 top-1 bottom-1 px-3 bg-blue-600 text-white hover:bg-blue-500 rounded-lg transition-colors flex items-center justify-center cursor-pointer text-white-force"
                >
                  {isSubmitting ? <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> : <ArrowRight size={14} />}
                </button>
              </form>
              
              {subscribed && (
                <div className="flex items-center gap-1.5 mt-2.5 text-[10px] text-green-600 font-semibold">
                  <CheckCircle2 size={12} />
                  <span>Subscription confirmed! Thank you.</span>
                </div>
              )}
            </div>

            {/* Real Project Settings Contact Info */}
            <div className="h-[1px] bg-slate-200 w-full" />
            <div className="flex flex-col gap-3 text-xs text-slate-650 dark:text-slate-400">
              <a href={`tel:${settings.contactPhone}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Phone size={12} className="text-blue-600" />
                <span>{settings.contactPhone}</span>
              </a>
              <a href={`mailto:${settings.contactEmail}`} className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                <Mail size={12} className="text-blue-600" />
                <span className="truncate">{settings.contactEmail}</span>
              </a>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(settings.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-blue-600 transition-colors"
              >
                <MapPin size={12} className="text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="leading-snug">{settings.address}</span>
              </a>
              <div className="flex items-center gap-2">
                <Clock size={12} className="text-blue-600" />
                <span>Mon - Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Quick Actions Panel */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 py-6 border-t border-b border-slate-200">
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 p-3 border border-slate-200 hover:border-blue-600 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-900 transition-all text-center"
          >
            Get a Quote
          </Link>
          <Link
            to="/contact"
            className="flex items-center justify-center gap-2 p-3 border border-slate-200 hover:border-blue-600 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-900 transition-all text-center"
          >
            Free Consultation
          </Link>
          <a
            href={`tel:${settings.contactPhone}`}
            className="flex items-center justify-center gap-2 p-3 border border-slate-200 hover:border-blue-600 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-900 transition-all text-center"
          >
            Call Now
          </a>
          <a
            href={`https://wa.me/${settings.whatsappNumber.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 p-3 border border-slate-200 hover:border-blue-600 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-900 transition-all text-center"
          >
            <FaWhatsapp className="text-green-500" /> WhatsApp Chat
          </a>
        </div>

        {/* Bottom copyright details */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>&copy; {currentYear} {settings.agencyName}. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-blue-600">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-blue-600">Terms & Conditions</Link>
            <a href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Sitemap</a>
            <Link to="/admin" className="text-slate-400 hover:text-slate-900 flex items-center gap-1">
              <ShieldCheck size={12} /> CMS
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
