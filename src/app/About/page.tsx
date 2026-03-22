import React from 'react';
import { Eye, Target, Lightbulb, Handshake, ReceiptText, WalletCards } from 'lucide-react';
import Image from "next/image";
import InnerHeader from '@/components/InnerHeader'

const AboutPage = () => {
  return (
    <>
      {/* Hero Section */}

      <InnerHeader
        title="About VGM Group Limited. – Innovative Solution for your Business Competitiveness"
        subtitle="Trusted offshore development partner delivering AI, web, and mobile solutions globally."
      />

      {/* Main Content Grid */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Text Content */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-red-800 mb-4 border-l-4 border-red-600 pl-4">CEO Welcome Note — VGM GROUP LIMITED </h2>
            <p className="leading-relaxed mb-4">
              Welcome to VGM GROUP LIMITED. We are committed to delivering reliable, professionally managed services that help our clients succeed. Through a single platform, we combine travel and tours experiences with business support including BPO, HR, payroll, digital solutions, and media services—helping brands and organizations connect, grow, and perform effectively.

            </p>
            <div>
              <h2 className="text-3xl font-bold text-red-900 mt-8">Our Core Services
              </h2>
              <p>We provide support that improves efficiency and strengthens workforce management, including:</p>
              <div className="space-y-8 flex flex-wrap gap-4 mt-2 items-center">
                <ValueItem icon={<Handshake />} title="Business Process Outsourcing (BPO)" text="We manage selected business tasks and operational processes so your team can focus on core activities, improving productivity and service delivery." />
                <ValueItem icon={<WalletCards />} title="HR & Payroll Management Software" text="We assist organisations in implementing and using HR and payroll systems to manage employee records, attendance/leave, payroll preparation, and reporting with accuracy and speed" />
                <ValueItem icon={<ReceiptText />} title="HR Solutions" text="We support organisations with structured HR coordination, including HR administration, policy guidance, employee documentation, recruitment support workflows, and professional HR management." />




                
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Certification Image */}
        <div className="lg:col-span-5 flex justify-center items-start">
          <div className="shadow-2xl rounded-lg overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300">
            <Image src="/about/ceo.jpg" alt="ISO 9001:2015 Certified" width={400} height={300} />
          </div>
        </div>

      </section>

      <section className='w-full'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8'>
          <ValueItem icon={<Handshake />} title="Travel & Tours Services" text="Safaris, Kilimanjaro climbing, island holidays, and car rentals & transfers." />
          <ValueItem icon={<WalletCards />} title="Digital Services" text="Web designing, web development, mobile app development, digital marketing, WhatsApp business solutions, and promotional video services." />
          <ValueItem icon={<ReceiptText />} title="Hotbiz Media" text="Online radio and online TV to keep brands and communities informed and visible." />
          <ValueItem icon={<Handshake />} title="GMC Properties" text="Our real estate arm under VGM GROUP LIMITED, helping clients buy, sell, rent, and manage property opportunities with trustworthy guidance, professionalism, and customer satisfaction." />
          <ValueItem icon={<WalletCards />} title="Global College of Business and Management" text="We provide global-quality, affordable education that builds students’ practical skills, knowledge, and values for success. Our career-focused programmes prepare competent professionals, entrepreneurs, and responsible leaders in fields such as Business, ICT, Education, Journalism, Procurement, Community Development, Human Resources, and Accountancy." />
          <div className='p-4'>
                  <p className='w-full'>Our goal across all services is the same: reduce stress, improve performance, and support long-term success.</p>
                  <p className='w-full'> <strong>Warm regards,</strong></p>
                  <p className='w-full'> <strong>Jeremiah G.</strong></p>
                  <p className='w-full'> <strong>Chief Executive Officer (CEO), VGM GROUP LIMITED</strong></p>
                </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600">
              <Eye size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Vision</h3>
              <p className="text-gray-600">To cultivate par-excellence services with a customer-centric approach, earning the trust of clients worldwide.</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600">
              <Target size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Mission</h3>
              <p className="text-gray-600">To achieve harmonious alignment between our capabilities and client requirements through transparency.</p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

// Helper component for core values
const ValueItem = ({ icon, title, text }: { icon: any, title: string, text: string }) => (
  <div className="flex gap-4 group items-start">
    <div className="bg-gray-100 text-red-600 p-3 rounded-lg group-hover:bg-red-600 group-hover:text-white transition">
      {icon}
    </div>
    <div>
      <h4 className="font-bold text-lg mb-1">{title}</h4>
      <p className="text-gray-600 leading-snug">{text}</p>
    </div>
  </div>

);

export default AboutPage;