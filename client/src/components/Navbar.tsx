import { useState, useEffect, useContext } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, ArrowUpRight, Shield } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import logoImg from '../assets/logo.png';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const themeContext = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  if (!themeContext) return null;
  const { theme, toggleTheme } = themeContext;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'Blog', path: '/blog' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-3 px-4 md:px-8 mt-4 max-w-7xl mx-auto rounded-full glass-panel shadow-lg' 
            : 'py-6 px-6 md:px-12 bg-transparent'
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logoImg} alt="CoreBuild Solutions Logo" className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto object-contain" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`text-xs font-semibold tracking-wider uppercase px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive 
                      ? 'bg-[#FEF2E8] text-[#000000] dark:bg-slate-800 dark:text-white' 
                      : 'text-[#000000] dark:text-slate-350 hover:bg-[#FEF2E8] hover:text-[#000000] dark:hover:bg-slate-900/50 dark:hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white hover:text-blue-500 hover:border-blue-500 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 dark:bg-white dark:text-zinc-900 rounded-full group overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <span className="relative z-10 flex items-center gap-1">
                Start Project <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-blue-600 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-[0.16,1,0.3,1]" />
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-650 dark:text-slate-300 cursor-pointer"
            >
              {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Slide-out Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden pt-28 px-6 bg-slate-50/95 dark:bg-slate-950/95 backdrop-blur-lg flex flex-col justify-between pb-12"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.label}
                    to={link.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`text-2xl font-semibold tracking-tight px-4 py-2.5 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#FEF2E8] text-[#000000] dark:bg-slate-800 dark:text-white' 
                        : 'text-[#000000] dark:text-slate-100 hover:bg-[#FEF2E8] hover:text-[#000000] dark:hover:bg-slate-900/50 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            <div className="flex flex-col gap-4">
              <div className="h-[1px] bg-slate-200 dark:bg-slate-800 w-full" />
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-4 bg-blue-600 text-white rounded-xl font-semibold text-center flex items-center justify-center gap-2 shadow-[0_4px_20px_rgba(37,99,235,0.3)]"
              >
                Get a Free Consultation <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
