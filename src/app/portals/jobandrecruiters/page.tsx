"use client"; // <--- This must be the very first line

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, Users, FileText, ChevronRight, Menu, X } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader';

function JobPortalsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <InnerHeader 
        title="Job & Recruiters" 
        subtitle="" 
      />

      {/* --- HERO SECTION --- */}
      <section className="relative h-[90vh] flex items-center bg-black pt-20">
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

          {/* Search Box */}
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

      {/* --- STATS BAR --- */}
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

      {/* --- JOB GRID --- */}
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
      </section>
    </>
  );
}

export default JobPortalsPage;