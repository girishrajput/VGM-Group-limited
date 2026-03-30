import InnerHeader from '@/components/InnerHeader'
import React from 'react';
import Image from 'next/image';
import { Phone, Search, MessageCircle } from 'lucide-react';




function page() {

  

  return (
    <>
      <InnerHeader
        title="HR Solution"
        subtitle="Empowering Your Workforce: The Ultimate HR Solution for Seamless People Management"
      />


      <div className="min-h-screen bg-white font-sans text-slate-800 py-16">
      {/* --- Navigation Bar --- */}
      

      {/* --- Main Content Section --- */}
      <main className="max-w-7xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image with Rounded Corners */}
        <div className="relative h-[500px] w-full">
          <Image
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            alt="HR Team Meeting"
            fill
            className="object-cover rounded-[40px] shadow-2xl"
          />
        </div>

        {/* Right Side: Content */}
        <div className="space-y-6">
          <header>
            <h2 className="text-4xl font-bold text-slate-800 mb-2">02. HR Solution</h2>
            <div className="h-1 w-20 bg-red-600"></div>
          </header>

          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>
              Automate all the <span className="font-bold text-slate-900">functional tools related to human resources management</span>. 
              Quickbiz HR Solutions is enriched with highly qualified and professional team members. 
              The team members consist of experts with long standing experience in various fields like 
              Recruitment, HR Documentation, Education Background check, Employment background check, 
              Trainings, Career Coaching and counselling. We are offering high quality professional 
              services to our prestigious clients.
            </p>
            
            <p className="font-medium text-slate-800">
              Quickbiz HR solutions is Tanzania's known Incorporation in the field of Business process outsourcing (BPO).
            </p>

            <ul className="space-y-3 pt-2">
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1.5">•</span>
                <span>On-site work at customer location</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1.5">•</span>
                <span>Remote work delivery from global locations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-600 mt-1.5">•</span>
                <span>The Hybrid cloud model increases the flexibility of computing and is the most beneficial cloud-based service delivery model.</span>
              </li>
            </ul>
          </div>
        </div>
      </main>

      {/* --- Floating Contact Button --- */}
      <div className="fixed bottom-6 right-6 flex items-center">
        <div className="bg-white px-4 py-2 rounded-l-lg border border-slate-200 shadow-lg text-sm font-medium hidden md:block">
          Contact us
        </div>
        <button className="bg-red-500 p-3 rounded-full text-white shadow-xl hover:bg-red-600 transition transform hover:scale-110">
          <MessageCircle className="w-6 h-6" />
        </button>
      </div>
    </div>


    </>
  )
}

export default page;