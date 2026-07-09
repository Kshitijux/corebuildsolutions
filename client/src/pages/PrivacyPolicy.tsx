import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Eye, Lock, FileText } from 'lucide-react';
import SEO from '../components/SEO';

export default function PrivacyPolicy() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors pt-24 pb-20">
      <SEO 
        title="Privacy Policy | CoreBuild Solutions"
        description="Read the privacy policy and data security guidelines of CoreBuild Solutions. We are committed to safeguarding your proprietary source code and data assets."
        keywords="privacy policy, data security, cookie consent, GDPR compliance, corebuild solutions privacy"
      />

      {/* Background blobs */}
      <div className="liquid-bg">
        <div className="liquid-blob top-10 left-10 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/10 blur-[100px] pointer-events-none" />
      </div>

      <div className="max-w-3xl mx-auto px-6 relative z-10 text-left">
        
        {/* Back navigation */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-blue-500 transition-colors mb-12 cursor-pointer"
        >
          <ArrowLeft size={14} /> Back to Home
        </Link>

        {/* Header */}
        <div className="flex flex-col gap-4 border-b border-slate-200 dark:border-slate-900 pb-8 mb-12">
          <div className="p-3 bg-blue-600/10 text-blue-600 rounded-xl w-max">
            <Shield size={24} />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: July 10, 2026
          </p>
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-8 text-slate-650 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
          
          <p className="font-medium text-slate-900 dark:text-slate-350 text-base">
            At CoreBuild Solutions ("we", "our", or "us"), we prioritize the security and privacy of our clients, website users, and project partners. This Privacy Policy details how we collect, process, utilize, and safeguard your data when you interact with our platform and digital services.
          </p>

          {/* Section 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Eye size={16} className="text-blue-500" /> 1. Information We Collect
            </h2>
            <p>
              We collect information that you directly provide to us when you fill out contact forms, subscribe to our Insights newsletter, or book a consultation:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Identifiers:</strong> Name, professional email address, telephone contact number, and organization details.</li>
              <li><strong>Project Specifications:</strong> Technical descriptions, budget estimates, tech stacks, and feature lists.</li>
              <li><strong>Usage Telemetry:</strong> IP address, device specifications, browser type, cookies, and page interaction telemetry recorded via lightweight scripts.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Lock size={16} className="text-blue-500" /> 2. How We Utilize Your Data
            </h2>
            <p>
              Your data is processed strictly in accordance with modern security standards and is used to:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Process and respond to project requests, contact inquiries, and consultation sessions.</li>
              <li>Deliver tailored newsletters containing quantitative case studies and architectural designs.</li>
              <li>Optimize our website performance, layout caching, and Core Web Vitals score.</li>
              <li>Comply with necessary corporate legal audits, contracts, and security certifications.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Shield size={16} className="text-blue-500" /> 3. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard encryption, authorization rules, and secure hosting setups (using HTTPS and Vercel edge protections) to shield your database tokens, code repositories, and personal logs. 
            </p>
            <p>
              We enforce strict access controls: only engineers directly assigned to your projects have access to private database models or code frameworks. We never sell or distribute client contacts to external advertising networks.
            </p>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <FileText size={16} className="text-blue-500" /> 4. Cookies & Analytics
            </h2>
            <p>
              We utilize lightweight browser cookies to save theme preferences (light peach / dark mode) and aggregate site traffic statistics. You can configure your browser to reject all cookies, though this may disable automatic theme saving.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              5. Contact Our Privacy Officer
            </h2>
            <p>
              For questions regarding database audits, data erasure requests, or this policy, please reach out to our team at:
            </p>
            <p className="font-semibold text-blue-600 dark:text-blue-400">
              partner@corebuildsolutions.in
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
