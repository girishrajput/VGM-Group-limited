import React from 'react';
import InnerHeader from '@/components/InnerHeader';
import { 
  BookOpen, 
  Users, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  GraduationCap 
} from 'lucide-react';

function Page() {
  return (
    <>
      <InnerHeader 
        title="Global College of Business & Management" 
        subtitle="Start Your Legacy" 
      />

      <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-red-100">
        {/* --- Navigation --- */}
        <nav className=" bg-white/95 backdrop-blur-md border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tighter text-slate-900 leading-none">GLOBAL COLLEGE</span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-[0.2em] mt-1">Business & Management</span>
            </div>
            <div className="hidden md:flex space-x-8 font-semibold text-sm text-slate-600 uppercase tracking-wide">
              <a href="#about" className="hover:text-red-600 transition-colors">About</a>
              <a href="#courses" className="hover:text-red-600 transition-colors">Courses</a>
              <a href="#admissions" className="hover:text-red-600 transition-colors">Admissions</a>
              <a href="#contact" className="hover:text-red-600 transition-colors">Contact</a>
            </div>
            <button className="bg-red-600 text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-red-700 transition shadow-lg shadow-red-200 active:scale-95">
              APPLY NOW
            </button>
          </div>
        </nav>

        {/* --- Hero Section (About) --- */}
        <section id="about" className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="z-10 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-white border border-slate-200 text-red-700 text-xs font-bold mb-6 shadow-sm">
                <GraduationCap size={14} /> ESTABLISHED 2021
              </div>
              <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-8">
                Start Your Legacy <br />
                <span className="text-red-600 italic">Today.</span>
              </h1>
              <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Global College of Business & Management offers practical, affordable education in the heart of Morogoro. We prepare you for leadership and innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="flex items-center justify-center gap-2 bg-slate-900 text-white px-10 py-5 rounded-xl font-bold hover:bg-slate-800 transition-all hover:shadow-xl active:scale-95">
                  View All Courses <ArrowRight size={20} />
                </button>
                <button className="flex items-center justify-center gap-2 border-2 border-slate-200 bg-white px-10 py-5 rounded-xl font-bold hover:bg-slate-50 transition-all active:scale-95 text-slate-700">
                  Explore Campus
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute -top-12 -right-12 w-72 h-72 bg-red-400/20 rounded-full blur-[80px]"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-slate-200 aspect-[4/5] transform lg:rotate-2 hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80" 
                  alt="Global College Campus Morogoro" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* --- Programs Section --- */}
        <section id="courses" className="py-28 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Academic Pathways</h2>
                <p className="text-lg text-slate-500">From Basic Technician Certificates to Ordinary Diplomas, we provide the skills required for the modern global marketplace.</p>
              </div>
              <button className="text-red-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                DOWNLOAD PROSPECTUS <ArrowRight size={18} />
              </button>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Featured Image Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg group">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt="Students Collaborating at GCBM"
                />
                <div className="absolute inset-0 bg-slate-900/60 flex flex-col justify-end p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Student Life</h3>
                  <p className="text-slate-200 text-sm">Join a vibrant community of thinkers, creators, and entrepreneurs.</p>
                </div>
              </div>

              {/* Diploma List */}
              <div className="p-10 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                     <div className="w-2 h-8 bg-red-600 rounded-full"></div> Ordinary Diplomas
                  </h3>
                  <ul className="space-y-4">
                    {['Business Admin', 'Computing & IT', 'Early Childhood Education', 'Journalism'].map((item) => (
                      <li key={item} className="flex items-center gap-3 font-medium text-slate-700 border-b border-slate-200 pb-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-red-600 text-left">See all 8 programs</button>
              </div>

              {/* Certificate List */}
              <div className="p-10 rounded-2xl border border-slate-100 bg-slate-50 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                     <div className="w-2 h-8 bg-slate-900 rounded-full"></div> Basic Certificates
                  </h3>
                  <ul className="space-y-4">
                    {['Law', 'Secretarial Course', 'Community Dev', 'Procurement'].map((item) => (
                      <li key={item} className="flex items-center gap-3 font-medium text-slate-700 border-b border-slate-200 pb-2">
                        <div className="w-1.5 h-1.5 bg-slate-400 rounded-full"></div> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="mt-8 text-sm font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 text-left">See all 10 programs</button>
              </div>
            </div>
          </div>
        </section>

        {/* --- Facilities Section (Admissions) --- */}
        <section id="admissions" className="bg-slate-900 py-24 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5">
                <h2 className="text-4xl font-bold mb-6">Equipped for Excellence</h2>
                <p className="text-slate-400 text-lg mb-8">
                  From our high-tech computer labs to our comprehensive library, we ensure every student has access to the resources they need to thrive.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-red-500 mb-1">98%</h4>
                    <p className="text-xs text-slate-300 uppercase font-bold tracking-tighter">Satisfaction</p>
                  </div>
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10">
                    <h4 className="font-bold text-red-500 mb-1">Career</h4>
                    <p className="text-xs text-slate-300 uppercase font-bold tracking-tighter">Placement Support</p>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-7 flex gap-4 lg:-mr-32">
                <img 
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop" 
                  className="w-1/2 rounded-2xl h-96 object-cover shadow-2xl" 
                  alt="Business Students Learning"
                />
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop" 
                  className="w-1/2 rounded-2xl h-96 object-cover shadow-2xl transform translate-y-8" 
                  alt="IT Lab Facilities"
                />
              </div>
            </div>
          </div>
        </section>

        {/* --- Footer / Final CTA --- */}
        <footer id="contact" className="pt-24 pb-12 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-red-600 rounded-[32px] p-12 lg:p-20 text-center mb-20 relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-black text-white mb-8">Ready to start your journey?</h2>
                <button className="bg-white text-red-600 px-12 py-5 rounded-full font-black hover:bg-slate-900 hover:text-white transition-all transform hover:-translate-y-1 shadow-2xl">
                  APPLY FOR ADMISSION
                </button>
              </div>
              <div className="absolute top-0 right-0 p-10 opacity-10">
                <GraduationCap size={300} className="text-white" />
              </div>
            </div>

            <div className="grid md:grid-cols-4 gap-12 mb-16 px-4">
              <div className="col-span-2 md:col-span-1">
                <div className="font-black text-xl mb-6 tracking-tighter">GLOBAL COLLEGE</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">
                  A private institution dedicated to high-quality technical and professional education in Morogoro, Tanzania.
                </p>
                <div className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"><Users size={14} /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"><BookOpen size={14} /></div>
                  <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-400 hover:bg-red-600 hover:text-white transition-colors cursor-pointer"><MapPin size={14} /></div>
                </div>
              </div>
              
              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Programs</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-600">
                  <li className="hover:text-red-600 cursor-pointer">Business Admin</li>
                  <li className="hover:text-red-600 cursor-pointer">ICT & Computing</li>
                  <li className="hover:text-red-600 cursor-pointer">Human Resources</li>
                  <li className="hover:text-red-600 cursor-pointer">Accounting</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Quick Links</h4>
                <ul className="space-y-4 text-sm font-semibold text-slate-600">
                  <li className="hover:text-red-600 cursor-pointer">Admissions</li>
                  <li className="hover:text-red-600 cursor-pointer">Academic Calendar</li>
                  <li className="hover:text-red-600 cursor-pointer">Student Portal</li>
                  <li className="hover:text-red-600 cursor-pointer">Campus Map</li>
                </ul>
              </div>

              <div>
                <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-slate-400">Location</h4>
                <p className="text-sm text-slate-600 leading-relaxed mb-4 font-semibold">
                  Lukobe Tushikamane Street,<br />
                  Morogoro Municipality,<br />
                  Near SGR Line.
                </p>
                <div className="flex items-center gap-2 text-red-600 font-bold text-sm">
                  <Phone size={14} /> +255 786 277 777
                </div>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-xs font-bold uppercase tracking-widest">
              <div>© 2026 GLOBAL COLLEGE OF BUSINESS & MANAGEMENT</div>
              <div className="flex gap-8">
                <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
                <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;