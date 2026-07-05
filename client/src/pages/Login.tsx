import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Mail, Lock, AlertTriangle, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import logoImg from '../assets/logo.png';

export default function Login() {
  const navigate = useNavigate();
  const { login, user } = useAuth();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // If already authenticated, redirect immediately
  useEffect(() => {
    if (user) {
      navigate('/admin');
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setErrorMsg(null);
    setIsSubmitting(true);

    try {
      const success = await login(email, password);
      if (success) {
        window.dispatchEvent(new CustomEvent('show-toast', {
          detail: { message: 'Authentication successful! Welcome to Dashboard.', type: 'success' }
        }));
        navigate('/admin');
      }
    } catch (err: any) {
      setErrorMsg(err.message || 'Authentication failed. Please check credentials.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600/5 blur-[100px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md relative z-10 glass-card rounded-3xl p-8 md:p-10 shadow-xl flex flex-col gap-6 text-left"
      >
        {/* Logo and Header */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <img src={logoImg} alt="CoreBuild Solutions Logo" className="h-20 w-auto object-contain" />
            <div className="flex items-center gap-1 text-[9px] font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-2 py-1 rounded-md border border-blue-100">
              <ShieldCheck size={10} className="fill-blue-500/10" /> Secure Gate
            </div>
          </div>
          <div className="h-[1px] bg-slate-200 w-full" />
          <div>
            <h1 className="font-heading text-xl font-bold tracking-tight text-slate-900 mt-1">
              Sign in to Dashboard
            </h1>
            <p className="text-xs text-slate-500 mt-1">
              Access the administrative CMS dashboard panel.
            </p>
          </div>
        </div>

        {/* Warning Toast */}
        {errorMsg && (
          <div className="flex items-start gap-3 p-3.5 bg-red-500/10 border border-red-500/20 text-red-600 rounded-xl text-xs font-medium">
            <AlertTriangle size={16} className="flex-shrink-0 mt-0.5" />
            <span>{errorMsg}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1">
              <Mail size={10} /> Email Address
            </label>
            <input
              type="email"
              required
              placeholder="admin@corebuild.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-400 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-1">
              <Lock size={10} /> Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-blue-500 text-slate-900 placeholder-slate-400 transition-colors"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-4 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold uppercase tracking-wider shadow-md shadow-blue-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? 'Authenticating...' : 'Sign In'}
            {!isSubmitting && <ArrowRight size={14} />}
          </button>
        </form>

        <div className="text-center text-[10px] text-slate-400 font-medium pt-2 border-t border-slate-200">
          Default credentials: <span className="text-slate-600 font-semibold select-all">admin@corebuild.com</span> / <span className="text-slate-600 font-semibold select-all">admin12345</span>
        </div>

      </motion.div>

    </div>
  );
}
