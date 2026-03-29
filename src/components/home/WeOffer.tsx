"use client";

import Link from 'next/link';
import {
  Handshake,
  WalletCards,
  ReceiptText
} from 'lucide-react'; 

export const DATA = {
  Services: [
    { 
      title: "Business Process Outsourcing", 
      desc: "Business Process Outsourcing (BPO) is like getting merged—two parties decide to start a shared future together. BPO is complex and worth having a close look at this opportunity.", 
      color: "from-red-500 to-indigo-600", 
      icon: Handshake 
    },
    { 
      title: "HR Solution", 
      desc: "Automate all the functional tools related to human resources management. Quickbiz HR Solutions is enriched with a highly qualified and professional team.", 
      color: "from-red-500 to-indigo-600", 
      icon: WalletCards 
    },
    { 
      title: "HR & Payroll Management Software", 
      desc: "Payroll Software is a critical and important part of your business. It is widely used by businesses and companies to manage employee payroll and reduce HR work.", 
      color: "from-red-500 to-indigo-600", 
      icon: ReceiptText 
    },
  ],
};

export default function ServicesList() {
  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Empowering your digital presence with smart, scalable solutions.
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DATA.Services.map((item) => (
            <Link 
              key={item.title} 
              href={`/services/${item.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group block h-full"
            >
              <div className="relative h-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm transition-all duration-300 hover:shadow-2xl hover:shadow-red-100 hover:-translate-y-2 overflow-hidden">
                {/* Decorative Background Circle */}
                <div className={`absolute -right-4 -top-4 w-24 h-24 bg-gradient-to-br ${item.color} opacity-10 rounded-full transition-transform duration-700 group-hover:scale-150`} />
                
                {/* Icon Container */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white mb-6 shadow-lg transition-transform duration-300 group-hover:rotate-6`}>
                  <item.icon size={24} />
                </div>

                <h3 className="text-xl font-extrabold text-slate-800 mb-3 transition-colors group-hover:text-red-600">
                  {item.title}
                </h3>

                <p className="text-slate-500 leading-relaxed text-sm mb-6">
                  {item.desc}
                </p>

                {/* Animated "Explore Now" Link */}
                <div className="flex items-center text-red-600 font-bold text-xs uppercase tracking-tighter transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0">
                  Explore Now <span className="ml-2">→</span>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
}