import React from 'react';
import { MapPin, ShieldCheck, BarChart3, Phone, ArrowRight, CheckCircle2 } from 'lucide-react';
import InnerHeader from '@/components/InnerHeader'

function page() {
  return (
    <>
      <InnerHeader
        title="Business Process Outsourcing (BPO)"
        subtitle=""
      />




      <div className="min-h-screen bg-white text-slate-900 font-sans">
        {/* --- Navigation --- */}
        <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm ">
          <div className="text-2xl font-bold text-red-900">GMC<span className="text-red-600">PROPERTIES</span></div>
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#" className="hover:text-red-600 transition">Home</a>
            <a href="#" className="hover:text-red-600 transition">About</a>
            <a href="#" className="hover:text-red-600 transition">Services</a>
            <a href="#" className="hover:text-red-600 transition">Projects</a>
          </div>
          <button className="bg-red-900 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-800 transition">
            Contact Us
          </button>
        </nav>

        {/* --- Hero Section --- */}
        <header className="relative h-[80vh] flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=2000"
              alt="Real Estate Tanzania"
              className="w-full h-full object-cover brightness-50"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10 text-white">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight">
              Your Trusted Partner for <br /> <span className="text-red-500">Plots & Management</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl text-slate-200">
              Surveyed and unsurveyed plots, commercial and residential property management, and investment opportunities across Tanzania.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center gap-2 transition">
                Explore Plots <ArrowRight size={20} />
              </button>
              <button className="bg-white/10 backdrop-blur-md border-2 border-white/30 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition">
                View Projects
              </button>
            </div>
          </div>
        </header>

        {/* --- Quick Stats --- */}
        <section className="bg-red-900 py-12">
          <div className="container mx-auto px-6 flex flex-wrap justify-around text-white text-center gap-8">
            <div>
              <div className="text-4xl font-bold text-white-500">10+</div>
              <div className="text-slate-300">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white-500">500+</div>
              <div className="text-slate-300">Plots Sold</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white-500">100%</div>
              <div className="text-slate-300">Legal Verification</div>
            </div>
          </div>
        </section>

        {/* --- Services Section --- */}
        <section className="py-24 container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-red-600 font-bold tracking-widest uppercase mb-2">Our Expertise</h2>
            <p className="text-4xl font-bold text-red-900">Professional Real Estate Services</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Land Sales",
                desc: "Surveyed & unsurveyed plots with clear legal documentation in high-growth areas.",
                icon: <MapPin className="text-red-600" size={40} />,
                img: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Property Management",
                desc: "Full-service management for commercial and residential buildings. Stress-free returns.",
                icon: <BarChart3 className="text-red-600" size={40} />,
                img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
              },
              {
                title: "Survey & Support",
                desc: "We coordinate licensed surveyors and legal partners for accurate title transfers.",
                icon: <ShieldCheck className="text-red-600" size={40} />,
                img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800"
              }
            ].map((service, i) => (
              <div key={i} className="group bg-slate-50 rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img src={service.img} alt={service.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                </div>
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 text-red-900">{service.title}</h3>
                  <p className="text-slate-600 mb-6">{service.desc}</p>
                  <a href="#" className="text-red-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* --- Why Choose Us (Side-by-Side) --- */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
                alt="Consultation"
                className="rounded-3xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-red-900 mb-6">Why Work with <br />GMC Properties?</h2>
              <div className="space-y-4">
                {[
                  "Proven Local Expertise in Tanzanian Market",
                  "Legal & Survey Support for Clear Titles",
                  "Flexible Payment Plans & Installments",
                  "Transparent Processes & Reliable Communication"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-500" />
                    <span className="text-lg text-slate-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <button className="mt-10 bg-red-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-red-600 transition">
                About Our Process
              </button>
            </div>
          </div>
        </section>

        {/* --- CTA / Footer Simple --- */}
        <footer className="bg-red-900 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to start your investment journey?</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">
              Contact us today for site visits in Kibaha, Kigamboni, and Dodoma.
            </p>
            <div className="flex justify-center gap-6 mb-12">
              <div className="flex items-center gap-2">
                <Phone className="text-white-500" />
                <span>+255 786 277 777</span>
              </div>
            </div>
            <hr className="border-slate-700 mb-8" />
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400">
              <p>© 2026 GMC Properties Company Limited. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white">Home</a>
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms</a>
              </div>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

export default page;