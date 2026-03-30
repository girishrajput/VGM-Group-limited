import InnerHeader from '@/components/InnerHeader'
import Image from 'next/image';
import { Mail, Link as LinkIcon, CheckCircle2 } from 'lucide-react';




function page() {



  return (
    <>
      <InnerHeader
        title="HR & Payroll Management Software"
        subtitle="Streamline your HR processes and payroll management with our comprehensive software solution."
      />


      <section className="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900 leading-tight">
              03. HR & Payroll Management Software
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Payroll Software is a critical and an important part of your
                business. It is widely used in business and companies to
                manage employee payroll and reduce HR work.
              </p>
              <p>
                Technological drift is also one of the challenges which all the
                companies are facing now. On payroll related fields, the
                traditional paper works are outdated. Technologies are getting
                updated and every business is running towards automations.
                There are multiple risks to be considered and eliminated for
                the payroll management system.
              </p>
            </div>
          </div>

          {/* Right Column: Visual Composition */}
          <div className="relative flex justify-center items-center h-[500px]">

            {/* Background Abstract Shape (Subtle Dots/Grid) */}
            <div className="absolute inset-0 bg-slate-50 rounded-3xl -z-10 opacity-50" />

            {/* Notification Card 1: Message Opened */}
            <div className="absolute top-10 left-0 md:left-10 z-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4 animate-bounce-slow">
              <div className="bg-cyan-50 p-2 rounded-lg">
                <Mail className="w-6 h-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Message opened</p>
                <p className="text-xs text-slate-400">18:09 PM</p>
              </div>
            </div>

            {/* Notification Card 2: Link Clicked */}
            <div className="absolute top-40 left-4 md:left-14 z-20 bg-white p-4 rounded-xl shadow-lg border border-slate-100 flex items-center gap-4">
              <div className="bg-emerald-50 p-2 rounded-lg">
                <LinkIcon className="w-6 h-6 text-emerald-500" />
              </div>
              <div>
                <p className="text-sm font-semibold text-slate-800">Link clicked</p>
                <p className="text-xs text-slate-400">18:12 PM</p>
              </div>
            </div>

            {/* Best Seller Badge */}
            <div className="absolute bottom-20 left-10 z-30 flex flex-col items-center">
              <CheckCircle2 className="text-slate-600 mb-2 w-6 h-6" />
              <div className="relative w-24 h-24">
                <img
                  src="https://images.unsplash.com/photo-1579389083395-4507e9f4c171?auto=format&fit=crop&q=80&w=200"
                  alt="Award Ribbon"
                  className="w-full h-full object-contain rounded-full border-4 border-yellow-400 p-1"
                />
                <div className="absolute inset-0 flex items-center justify-center text-center">
                  <span className="text-[10px] font-black leading-none text-yellow-700 uppercase">Best <br /> Seller</span>
                </div>
              </div>
            </div>

            {/* Main Dashboard Image Mockup */}
            <div className="relative w-[320px] md:w-[450px] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="HR Dashboard UI"
                className="object-cover w-full h-full"
              />
            </div>

            {/* Small Device Mockup (Floating) */}
            <div className="absolute -bottom-4 right-0 md:right-10 w-24 md:w-32 aspect-[9/19] rounded-xl overflow-hidden shadow-xl border-4 border-white z-20">
              <img
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=300"
                alt="Mobile App"
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        </div>
      </section>


    </>
  )
}

export default page;