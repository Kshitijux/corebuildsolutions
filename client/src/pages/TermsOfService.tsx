import { Link } from 'react-router-dom';
import { ArrowLeft, Scale, ShieldAlert, Award, CodeXml } from 'lucide-react';
import SEO from '../components/SEO';

export default function TermsOfService() {
  return (
    <div className="relative w-full overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 transition-colors pt-24 pb-20">
      <SEO 
        title="Terms of Service | CoreBuild Solutions"
        description="Review the terms of service governing core software projects, codebase ownership, and software consultancy models at CoreBuild Solutions."
        keywords="terms of service, software contract, legal terms, intellectual property, corebuild solutions terms"
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
            <Scale size={24} />
          </div>
          <h1 className="font-heading text-3xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Terms of Service
          </h1>
          <p className="text-xs text-slate-500">
            Last Updated: July 10, 2026
          </p>
        </div>

        {/* Content sections */}
        <div className="flex flex-col gap-8 text-slate-650 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
          
          <p className="font-medium text-slate-900 dark:text-slate-350 text-base">
            Welcome to CoreBuild Solutions. By visiting our website, subscribing to our digital insights, or partnering with our agency on software projects, you agree to comply with the following Terms of Service.
          </p>

          {/* Section 1 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <CodeXml size={16} className="text-blue-500" /> 1. Intellectual Property & Code Ownership
            </h2>
            <p>
              Unless explicitly defined otherwise in a signed Software Development Agreement (SDA):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Pre-Existing Frameworks:</strong> All proprietary design tokens, database adapters, dynamic schema routers, and SEO configurations created by CoreBuild Solutions remain our exclusive intellectual property.</li>
              <li><strong>Client Deliverables:</strong> Upon receipt of complete milestone payments, ownership of the custom code, custom assets, graphics, and unique database structures developed specifically for your application is fully transferred to you.</li>
            </ul>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <Award size={16} className="text-blue-500" /> 2. Consultancy & Estimates
            </h2>
            <p>
              All pricing tiers, proposal estimations, and delivery timelines published on this website are illustrative indicators based on historical projects:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Actual project cost estimates require a detailed system blueprint sprint and a signed contract.</li>
              <li>Timelines are subject to changes based on third-party API availability, database complexity shifts, and feedback response rates.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert size={16} className="text-blue-500" /> 3. Liability Restrictions
            </h2>
            <p>
              We deliver custom web apps, native-feeling mobile applications, and custom machine learning engines built to the highest specifications. However, we are not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Server disruptions or cloud database downtime caused by third-party hosting providers (Vercel, AWS, Supabase, Heroku).</li>
              <li>API limits, rate throttling, or outages triggered by external platforms (OpenAI, Mapbox, Stripe, Razorpay).</li>
              <li>Losses in traffic or ranking scores caused by shifts in search engine search algorithms.</li>
            </ul>
          </div>

          {/* Section 4 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              4. Service Misuse
            </h2>
            <p>
              Users are prohibited from utilizing our website or custom contact fields to transmit spam, execute malicious script injections, attempt server denial-of-service, or harvest data scraping. We reserve the right to restrict platform access and block offending IP addresses.
            </p>
          </div>

          {/* Section 5 */}
          <div className="flex flex-col gap-3">
            <h2 className="font-heading text-lg font-bold text-slate-900 dark:text-white uppercase tracking-wider flex items-center gap-2">
              5. Governing Law
            </h2>
            <p>
              These terms are governed by and construed in accordance with corporate commercial regulations. Any disputes arising from site interactions will be subject to local legal jurisdiction.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}
