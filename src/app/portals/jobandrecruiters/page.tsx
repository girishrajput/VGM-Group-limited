"use client"; // <--- This must be the very first line

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Users, FileText, ChevronRight, Menu, X } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';

import { Timer, Mail, ArrowRight, Github, Twitter, Linkedin } from 'lucide-react';

function JobPortalsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <InnerHeader 
        title="Job & Recruiters" 
        subtitle="" 
      />

      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white py-20">
      
      {/* Optional: Subtle Background Texture (Unsplash) - Very Faint */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=1920"
          alt="Geometric White Background"
          className="w-full h-full object-cover opacity-10" // Low opacity to keep it subtle
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-3xl px-6 text-center">
        
        {/* Brand/Logo Placeholder */}
        <div className="inline-flex items-center justify-center p-3 mb-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm">
          <Timer className="w-8 h-8 text-red-600 mr-2" />
          <span className="text-xl font-bold text-slate-950 tracking-tight">VANTAGE.</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-slate-950 mb-6 tracking-tight">
          We're building <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-cyan-500">
            something massive.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Our HR & Payroll revolution is almost ready. We’re putting the finishing touches on a platform that will redefine how you manage your workforce.
        </p>

        {/* Countdown Placeholders */}
        <div className="grid grid-cols-4 gap-4 md:gap-8 mb-12 max-w-md mx-auto bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
          {[
            { label: 'Days', value: '12' },
            { label: 'Hours', value: '09' },
            { label: 'Min', value: '45' },
            { label: 'Sec', value: '30' }
          ].map((item) => (
            <div key={item.label} className="flex flex-col text-center">
              <span className="text-3xl md:text-4xl font-bold text-slate-900 font-mono tracking-tighter">{item.value}</span>
              <span className="text-xs uppercase tracking-widest text-slate-500 mt-1 font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Email Capture */}
        <div className="max-w-md mx-auto">
          <form className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Mail className="h-5 w-5 text-slate-400 group-focus-within:text-red-600 transition-colors" />
            </div>
            <input
              type="email"
              placeholder="Enter your email for early access"
              className="block w-full pl-12 pr-32 py-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-400 focus:bg-white transition-all shadow-inner"
            />
            <button
              type="submit"
              className="absolute right-2 top-2 bottom-2 px-6 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all flex items-center shadow-md hover:shadow-lg"
            >
              Join <ArrowRight className="ml-2 w-4 h-4" />
            </button>
          </form>
          <p className="mt-4 text-sm text-slate-500">
            * Get notified the moment we launch. No spam, ever.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-16 flex items-center justify-center space-x-6 text-slate-400 border-t border-slate-100 pt-8">
          <a href="#" className="hover:text-red-600 transition-colors"><Twitter className="w-5 h-5" /></a>
          <a href="#" className="hover:text-slate-900 transition-colors"><Github className="w-5 h-5" /></a>
          <a href="#" className="hover:text-red-700 transition-colors"><Linkedin className="w-5 h-5" /></a>
        </div>
      </div>

      {/* Subtle Light Gradient orbs (Background) */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-red-50 rounded-full blur-[100px] opacity-60" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-cyan-50 rounded-full blur-[100px] opacity-60" />
    </div>

      {/* <section className="relative h-[90vh] flex items-center bg-black pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
            alt="Corporate Office" 
            className="w-full h-full object-cover opacity-40 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl border-l-8 border-red-600 pl-8 md:pl-12">
            <h1 className="text-white text-5xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
              Empowering <br />
              <span className="text-red-600">Tanzania's</span> <br />
              Workforce
            </h1>
            <p className="text-gray-400 text-lg md:text-xl font-light max-w-xl mb-10 tracking-wide">
              The premium recruitment platform connecting top-tier talent with the continent's most innovative employers.
            </p>
          </div>

          <div className="mt-8 bg-white p-2 md:p-3 shadow-2xl flex flex-col md:flex-row gap-2 max-w-4xl">
            <div className="flex-1 flex items-center px-4 border-b md:border-b-0 md:border-r border-gray-100">
              <Search className="text-red-600 mr-3" size={20} />
              <input type="text" placeholder="Job Title, Skills or Company" className="w-full py-4 outline-none text-sm font-medium" />
            </div>
            <div className="flex-1 flex items-center px-4">
              <MapPin className="text-red-600 mr-3" size={20} />
              <select className="w-full py-4 bg-transparent outline-none text-sm font-medium text-gray-500 appearance-none">
                <option>Dar Es Salaam, TZ</option>
                <option>Arusha, TZ</option>
                <option>Mwanza, TZ</option>
              </select>
            </div>
            <button className="bg-red-600 text-white px-12 py-5 font-black uppercase text-xs tracking-[0.2em] hover:bg-black transition-all">
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      <div className="bg-[#0f0f0f] border-b border-white/5 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { label: 'Verified Employers', val: '957', icon: <Briefcase className="text-red-600" /> },
            { label: 'Active Job Seekers', val: '30,464', icon: <Users className="text-red-600" /> },
            { label: 'Live Opportunities', val: '13,897', icon: <FileText className="text-red-600" /> }
          ].map((stat, i) => (
            <div key={i} className="flex items-center justify-center gap-6 group">
              <div className="p-4 bg-white/5 group-hover:bg-red-600 transition-colors duration-500">
                {stat.icon}
              </div>
              <div>
                <div className="text-white text-3xl font-black">{stat.val}</div>
                <div className="text-gray-500 uppercase text-[10px] font-bold tracking-widest">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-4xl font-black uppercase tracking-tighter">Latest <span className="text-red-600">Vacancies</span></h2>
              <div className="w-20 h-1.5 bg-red-600 mt-4"></div>
            </div>
            <button className="group flex items-center gap-2 text-[11px] font-black uppercase tracking-widest text-gray-500 hover:text-red-600 transition">
              Explore All Jobs <ChevronRight size={16} className="group-hover:translate-x-1 transition" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white p-8 border border-gray-100 hover:border-red-600 shadow-sm hover:shadow-2xl transition-all duration-500 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4">
                  <span className="text-[9px] font-black uppercase tracking-widest bg-red-50 text-red-600 px-3 py-1">Featured</span>
                </div>
                <div className="mb-8">
                  <div className="w-12 h-12 bg-gray-900 text-white flex items-center justify-center font-black text-xs mb-6 group-hover:bg-red-600 transition">EK</div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-red-600 transition uppercase tracking-tight">Human Resource Officer</h3>
                  <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Exact Manpower Consulting</p>
                </div>
                <div className="space-y-3 mb-8 border-t border-gray-50 pt-6">
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <MapPin size={14} className="mr-2 text-red-600" /> Dar Es Salaam, Tanzania
                  </div>
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <Briefcase size={14} className="mr-2 text-red-600" /> Manufacturing Industry
                  </div>
                </div>
                <button className="w-full border-2 border-black py-4 text-[10px] font-black uppercase tracking-widest hover:bg-red-600 hover:border-red-600 hover:text-white transition">
                  Apply for Position
                </button>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </>
  );
}

export default JobPortalsPage;