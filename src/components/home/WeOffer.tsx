"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Palette,
  Code2,
  Smartphone,
  Video,
  Megaphone,
  MessageSquare,
  Handshake,
  WalletCards,
  ReceiptText
} from 'lucide-react'; 

export const DATA = {
  Services: [
    { title: "Business Process Outsourcing", desc: "Business Process Outsourcing (BPO) is like getting merged—two parties decide to start a shared future together. BPO is complex and worth having a close look at this opportunity.", color: "from-red-500 to-indigo-600", icon: Handshake },
    { title: "HR Solution", desc: "Automate all the functional tools related to human resources management. Quickbiz HR Solutions is enriched with a highly qualified and professional team. The team consists of experts with long-standing experience.", color: "from-red-500 to-indigo-600", icon: WalletCards },
    { title: "HR & Payroll Management Software", desc: "Payroll Software is a critical and important part of your business. It is widely used by businesses and companies to manage employee payroll and reduce HR work.", color: "from-red-500 to-indigo-600", icon: ReceiptText },

    // { title: "Web Designing", desc: "We create attractive, easy-to-use websites that engage visitors and make your brand memorable.", color: "from-red-500 to-indigo-600", icon: Palette },
    // { title: "Web Development", desc: "We build strong, fast, and reliable websites to meet your business goals and user needs.", color: "from-red-500 to-indigo-600", icon: Code2 },
    // { title: "Mobile App Development", desc: "We design intuitive and useful mobile apps that help increase engagement.", color: "from-red-500 to-indigo-600", icon: Smartphone },
    // { title: "Promotional Video Services", desc: "We design impactful promotional videos that explain your services clearly.", color: "from-red-500 to-indigo-600", icon: Video },
    // { title: "Digital Marketing", desc: "We use effective online marketing strategies to bring more visitors.", color: "from-red-500 to-indigo-600", icon: Megaphone },
    // { title: "WhatsApp Business Solutions", desc: "Streamlining customer communication with automated WhatsApp solutions.", color: "from-red-500 to-indigo-600", icon: MessageSquare }
  ],
  // Portals: [
  //   { title: "ExportersIndia", desc: "A trusted B2B marketplace connecting manufacturers and suppliers.", color: "from-red-500 to-indigo-600", icon: "E" },
  //   { title: "MatrimonialsIndia", desc: "Exclusive matchmaking platform for finding perfect life partners.", color: "from-rose-400 to-pink-600", icon: "M" },
  //   { title: "PlacementIndia", desc: "Smart job portal bridging recruiters and job seekers seamlessly.", color: "from-emerald-400 to-teal-600", icon: "P" },
  //   { title: "RealestateIndia", desc: "India's leading property portal for residential & commercial needs.", color: "from-orange-400 to-red-500", icon: "R" },
  //   { title: "IndianYellowPages", desc: "Comprehensive business directory with verified company listings.", color: "from-amber-400 to-yellow-600", icon: "Y" },
  //   { title: "TourTravelWorld", desc: "Global travel portal providing tourism info and travel leads.", color: "from-sky-400 to-red-500", icon: "T" },
  // ],
  // Products: [
  //   { title: "Custom CRM Solutions", desc: "Tailored management systems for your business.", color: "from-red-500 to-indigo-600", icon: "C" },
  //   { title: "E-commerce Platforms", desc: "Scalable online stores built for performance.", color: "from-red-500 to-indigo-600", icon: "S" }
  // ],
};

const slugify = (text: string) => text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

export default function ServicesList() {
  // We convert the object into an array of [categoryName, items]
  const categories = Object.entries(DATA) as [keyof typeof DATA, any[]][];

  return (
    <div className="min-h-screen bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 text-center">Our Services</h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-16 text-center">
          Empowering your digital presence with smart, scalable solutions.
        </p>

        {categories.map(([categoryName, items]) => (
          <section key={categoryName} className="mb-20">
            {/* Category Title */}
            {/* <div className="flex items-center gap-4 mb-8">
              <h3 className="text-2xl font-bold text-slate-700 text-center w-full">{categoryName}</h3>
            </div> */}

            {/* Grid for this specific category */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {items.map((item) => (
                <Link 
                  key={item.title} 
                  href={`/${categoryName.toLowerCase()}/${slugify(item.title)}`}
                  className="block group"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="relative h-full bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-red-100 transition-all duration-300 overflow-hidden"
                  >
                    <div className={`absolute -right-4 -top-4 w-24 h-24   ${item.color} opacity-10 rounded-full group-hover:scale-150 transition-transform duration-700`} />
                    
                    <div className={`w-14 h-14 rounded-2xl bg-red-600  ${item.color} flex items-center justify-center text-white text-2xl font-black mb-6 shadow-lg group-hover:rotate-6 transition-transform`}>
                      {typeof item.icon === 'string' ? item.icon : <item.icon size={24} />}
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-800 mb-3 group-hover:text-red-600 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed text-sm mb-6">{item.desc}</p>

                    <div className="flex items-center text-red-600 font-bold text-xs uppercase tracking-tighter opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0">
                      Explore Now <span className="ml-2">→</span>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}