import InnerHeader from '@/components/InnerHeader'
import React from 'react';
import Head from 'next/head';
import { Camera, Mountain, Car, Palmtree, ShieldCheck, Leaf, Phone, Mail, MapPin, Menu } from 'lucide-react';

function page() {
  return (
    <>
      <InnerHeader
        title="VGM Group travel and tours"
        subtitle=""
      />

      <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
        <Head>
          <title>VGM Group Travel & Tours — Discover Tanzania with Local Experts</title>
          <meta name="description" content="Tanzania travel specialists offering safaris, Kilimanjaro climbs, island escapes and reliable car rentals." />
        </Head>

        {/* --- Navigation --- */}
        <nav className=" bg-white/90 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="text-2xl font-bold tracking-tighter text-emerald-800">
              VGM <span className="text-red-600">GROUP</span>
            </div>
            <div className="hidden md:flex space-x-8 font-medium text-slate-600">
              <a href="#safaris" className="hover:text-emerald-700 transition">Safaris</a>
              <a href="#kilimanjaro" className="hover:text-emerald-700 transition">Kilimanjaro</a>
              <a href="#islands" className="hover:text-emerald-700 transition">Island Holidays</a>
              <a href="#rentals" className="hover:text-emerald-700 transition">Car Rentals</a>
            </div>
            <button className="bg-emerald-700 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-emerald-800 transition">
              Plan My Trip
            </button>
          </div>
        </nav>

        {/* --- Hero Section --- */}
        <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?auto=format&fit=crop&q=80&w=1920"
            alt="Tanzania Wildlife"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
              Explore Tanzania
            </h1>
            <p className="text-xl md:text-2xl text-slate-100 mb-10 font-light">
              Safaris, Kilimanjaro climbs, island getaways and reliable car rentals with a trusted local operator.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-bold transition">Plan My Trip</button>
              <button className="bg-white hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-lg font-bold transition">Browse Safaris</button>
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg font-bold transition">Book a Car</button>
            </div>
          </div>
        </section>

        {/* --- Introduction & Why Us --- */}
        <section className="py-20 max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6">Expertly Guided Journeys</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                VGM Group is a Tanzanian-owned travel company delivering expertly guided safaris, mountain adventures, island holidays and dependable car rental services. With local guides and a modern fleet, we design safe, sustainable and unforgettable journeys.
              </p>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "Tanzania specialists — Local knowledge across all circuits." },
                  { icon: ShieldCheck, text: "Safety-first operations — Certified guides and medical kits." },
                  { icon: Leaf, text: "Responsible travel — Community support and ethical policies." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start space-x-3">
                    <item.icon className="text-emerald-600 mt-1 shrink-0" size={20} />
                    <span className="text-slate-700 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&q=80&w=400"
                className="rounded-2xl shadow-lg h-64 w-full object-cover"
                alt="Safari"
              />

              <img
                src="https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&q=80&w=400"
                className="rounded-2xl shadow-lg h-64 w-full object-cover mt-8"
                alt="Mountain"
              />
            </div>
          </div>
        </section>

        {/* --- Featured Services --- */}
        <section className="bg-slate-900 py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Featured Services</h2>
              <div className="h-1 w-20 bg-red-500 mx-auto"></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Safaris",
                  img: "https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=800&q=80",
                  icon: Camera,
                  link: "View Safaris"
                },
                {
                  title: "Kilimanjaro",
                  img: "https://images.unsplash.com/photo-1605640840605-14ac1855827b?auto=format&fit=crop&w=800&q=80",
                  icon: Mountain,
                  link: "View Kilimanjaro"
                },
                {
                  title: "Island Escapes",
                  img: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
                  icon: Palmtree,
                  link: "View Island"
                },
                {
                  title: "Car Rentals",
                  img: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=800&q=80",
                  icon: Car,
                  link: "View Cars"
                }
              ].map((service, i) => (
                <div key={i} className="group bg-slate-800 rounded-xl overflow-hidden hover:translate-y-[-10px] transition duration-300">
                  <img src={service.img + "?auto=format&fit=crop&q=80&w=400"} alt={service.title} className="h-48 w-full object-cover opacity-80 group-hover:opacity-100 transition" />
                  <div className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <service.icon className="text-red-500" size={20} />
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                    <button className="text-emerald-400 font-semibold hover:text-emerald-300 transition">
                      {service.link} →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Contact / Consultation Section --- */}
        <section className="py-24 bg-white px-6">
          <div className="max-w-5xl mx-auto bg-emerald-50 rounded-3xl p-8 md:p-16 border border-emerald-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-emerald-900 mb-4">Plan your trip today</h2>
              <p className="text-emerald-800/80 mb-8">Book a free 30-minute consultation with a Tanzania travel expert to discuss your dream itinerary.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-emerald-900 font-semibold">
                  <Mail size={20} /> <span>reservations@vgmgroup.co.tz</span>
                </div>
                <div className="flex items-center space-x-3 text-emerald-900 font-semibold">
                  <Phone size={20} /> <span>+255 7XX XXX XXX</span>
                </div>
              </div>
            </div>
            <button className="bg-emerald-700 text-white px-10 py-5 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-200 hover:bg-emerald-800 transition transform hover:scale-105">
              Book Free Consultation
            </button>
          </div>
        </section>

        {/* --- Footer --- */}
        <footer className="bg-slate-900 text-slate-400 py-12 px-6">
          <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-white mb-6">VGM GROUP</div>
              <p className="max-w-sm">Tanzanian-owned travel experts specializing in creating sustainable and high-impact travel experiences.</p>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-red-500 transition">Safaris</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Kilimanjaro</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Car Rentals</a></li>
                <li><a href="#" className="hover:text-red-500 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Support</h4>
              <ul className="space-y-2">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Safety Protocols</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
            <p>© 2026 VGM Group Travel & Tours Company Limited — All rights reserved.</p>
            <div className="flex space-x-6">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>YouTube</span>
            </div>
          </div>
        </footer>
      </div>

    </>
  )
}

export default page;