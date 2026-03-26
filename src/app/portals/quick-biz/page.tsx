"use client";

import React from 'react';
import InnerHeader from '@/components/InnerHeader';
import { Phone, CheckCircle, Users, Rocket, ArrowRight } from 'lucide-react';

// Main Page Component (Capitalized)
const QuickBizPage = () => {
  return (
    <>
      <InnerHeader 
        title="Quick Biz" 
        subtitle="" 
      />

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Top Bar */}
        <div className="bg-red-900 text-white py-2 px-6 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone size={14} />
            <span>+255-753-500-100</span>
          </div>
          <div className="hidden md:flex gap-4">
            <a href="#" className="hover:text-red-200">Facebook</a>
            <a href="#" className="hover:text-red-200">LinkedIn</a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
            <div className="text-2xl font-bold text-red-900 tracking-tight">
              QUICKBIZ<span className="text-red-500">CONSULTANTS</span>
            </div>
            <div className="hidden lg:flex gap-8 font-medium text-slate-600">
              {['HOME', 'PROCESS', 'OUR SERVICE', 'WHY QUICKBIZ', 'ONLINE JOBS', 'BLOGS'].map((item) => (
                <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="hover:text-red-600 transition-colors">
                  {item}
                </a>
              ))}
            </div>
            <button className="bg-red-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-red-700 transition-all">
              CONTACT
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
              alt="Business Team" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-red-900/80"></div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
              MAKE BUSINESS <br /><span className="text-red-400">EASY WITH US</span>
            </h1>
            <p className="text-xl max-w-2xl mb-8 text-slate-200">
              Quickbiz is a consultancy service for employers looking for a qualified team or individual. Get experienced teams for your startup or established business.
            </p>
            <div className="flex gap-4">
              <button className="bg-white text-red-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all">
                Read More
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all">
                Get a Free Quote
              </button>
            </div>
          </div>
        </section>

        {/* Feature Grid */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Hire Experts", desc: "We are business development professionals providing the best consultation services.", icon: <Users className="text-red-600" /> },
              { title: "Ease Your Business", desc: "Recruitment, HR documentation, background checks, and career coaching.", icon: <CheckCircle className="text-red-600" /> },
              { title: "Highly Skilled Team", desc: "Get experts for a fraction of the cost of full-time direct employees.", icon: <Rocket className="text-red-600" /> }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-xl border-t-4 border-red-600 hover:-translate-y-2 transition-transform">
                <div className="mb-4 bg-red-50 w-12 h-12 flex items-center justify-center rounded-lg">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 mb-4">{feature.desc}</p>
                <button className="text-red-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-red-900 mb-4 uppercase">Our Services</h2>
            <div className="w-20 h-1 bg-red-500 mx-auto mb-12"></div>
            
            <div className="grid lg:grid-cols-3 gap-12">
              <ServiceCard 
                img="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
                title="Business Process Outsourcing"
                desc="Decide to start a shared future together. BPO is a complex & worth having a close look at this opportunity."
              />
              <ServiceCard 
                img="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=800"
                title="HR Solutions"
                desc="Automate all functional tools. Enriched with highly qualified team members with long-standing experience."
              />
              <ServiceCard 
                img="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                title="HR & Payroll Software"
                desc="Critical for business management to reduce HR manual work and streamline payroll processes."
              />
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section className="bg-slate-900 py-20 px-6 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-center text-3xl font-bold mb-16 uppercase tracking-wide">Your Roadmap to Success</h2>
            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { num: "1", title: "PERFECT HIRE", desc: "Rigorous vetting and final video calls." },
                { num: "2", title: "TRAINING", desc: "We expertly facilitate and record training." },
                { num: "3", title: "TRACK PERFORMANCE", desc: "Unique daily time-tracking software." },
                { num: "4", title: "BUSINESS GROW", desc: "Round-the-clock efficient workflow." }
              ].map((step, idx) => (
                <div key={idx} className="relative group">
                  <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4">0{step.num}</div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center font-bold mb-6 group-hover:scale-110 transition-transform">
                      {step.num}
                    </div>
                    <h4 className="text-lg font-bold mb-2 uppercase tracking-wider">{step.title}</h4>
                    <p className="text-slate-400 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-slate-800 pb-12 mb-8">
            <div>
              <h3 className="text-white font-bold text-xl mb-6 uppercase">Quickbiz</h3>
              <p className="text-sm leading-relaxed">
                Helping businesses and startups achieve success through innovative talent acquisition and staffing since 2017.
              </p>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Links</h3>
              <ul className="space-y-3 text-sm">
                <li><a href="#" className="hover:text-red-400 transition-colors">Career</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Process</a></li>
                <li><a href="#" className="hover:text-red-400 transition-colors">Services</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-bold text-sm mb-6 uppercase tracking-widest">Contact</h3>
              <p className="text-sm mb-4">info@quickbiz.co.tz</p>
              <p className="text-sm">+255-753-500-100</p>
            </div>
            <div>
              <button className="bg-red-600 text-white w-full py-3 rounded hover:bg-red-700 transition-all font-bold">
                Request Free Consultation
              </button>
            </div>
          </div>
          <div className="text-center text-xs text-slate-500">
            Copyrights © 2017-2023 Quickbiz Consultants | All Rights Reserved
          </div>
        </footer>
      </div>
    </>
  );
};

// Service Card Sub-component
const ServiceCard = ({ img, title, desc }: { img: string, title: string, desc: string }) => (
  <div className="group overflow-hidden rounded-xl bg-slate-50 border border-slate-200">
    <div className="h-48 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <div className="p-6 text-left">
      <h3 className="text-xl font-bold text-red-900 mb-3">{title}</h3>
      <p className="text-slate-600 text-sm mb-4 leading-relaxed">{desc}</p>
      <button className="text-red-600 font-bold text-sm uppercase tracking-wider">Read More</button>
    </div>
  </div>
);

export default QuickBizPage;