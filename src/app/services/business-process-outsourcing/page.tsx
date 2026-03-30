import InnerHeader from '@/components/InnerHeader'
import Image from 'next/image';
import { CheckCircle2, TrendingUp } from 'lucide-react';




function page() {

  const industries = [
    "Agro Business", "Automobile", "Banking & Insurance", "KPO",
    "Consumer & Services", "Education", "E-Commerce", "Financial Services",
    "Information Technology", "Infrastructure", "Life Sciences & Healthcare",
    "Lead generation", "Retailing", "Telecommunication"
  ];

  const steps = [
    "Assess the opportunity and impacts of BPO for your organization and identify the right partner,",
    "Define the scope and build a business case,",
    "Design the future operating model, prepare and plan the project,",
    "Manage the level of services and the relationship on an on-going basis."
  ];

  return (
    <>
      <InnerHeader
        title="Business Process Outsourcing"
        subtitle="Unlocking Efficiency and Focus: The Power of Business Process Outsourcing (BPO)"
      />


      <section className="max-w-7xl mx-auto px-6 py-16 bg-white font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Content Column */}
          <div className="space-y-6">
            <header>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-6">
                01. Business Process Outsourcing
              </h2>
              <p className="text-lg text-slate-500 leading-relaxed">
                Business Process Outsourcing (BPO) is like getting merge—two parties
                decide to start a shared future together. BPO is a complex & worth
                having a close look at this opportunity.
              </p>
            </header>

            <div className="text-slate-500 leading-relaxed">
              <p className="mb-4">
                <span className="font-semibold text-slate-800 italic">Quickbiz organization</span> is the right BPO;
                we are experts in the following fields:
              </p>
              <p className="text-sm font-medium tracking-wide">
                {industries.join(', ')}.
              </p>
              <p className="mt-4">
                You should first assess internally if BPO is really the right solution for your organization.
              </p>
            </div>

            {/* Feature List */}
            <ul className="space-y-4 pt-4">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-slate-600">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Visual Column */}
          <div className="relative group">
            {/* Main Image Container */}
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Office Environment"
                fill
                className="object-cover"
              />
            </div>

            {/* Revenue Floating Card */}
            <div className="absolute -top-8 -left-8 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20 w-64 transform transition-transform group-hover:-translate-y-2">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-slate-700">Revenue</span>
                <div className="flex items-center text-emerald-500 font-bold text-sm">
                  <span>(+50%)</span>
                  <TrendingUp className="w-4 h-4 ml-1" />
                </div>
              </div>
              {/* Simple CSS Waveform Mockup */}
              <div className="h-16 w-full flex items-end gap-1 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-t from-indigo-500/20 to-transparent relative">
                  <svg viewBox="0 0 100 40" className="absolute bottom-0 w-full h-full">
                    <path
                      d="M0 30 Q 25 10 50 30 T 100 20"
                      fill="none"
                      stroke="#6366f1"
                      strokeWidth="3"
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Decorative Background Blob */}
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-slate-100 rounded-3xl" />
          </div>

        </div>
      </section>


    </>
  )
}

export default page;