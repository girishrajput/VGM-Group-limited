import React from 'react';
import {
  Briefcase,
  Users,
  Rocket,
  Globe,
  HeartHandshake,
  Laptop
} from 'lucide-react';
import Image from "next/image";
import InnerHeader from '@/components/InnerHeader';

const Careers = () => {
  return (
    <>
      {/* Hero Section */}
      <InnerHeader
        title="Careers at VGM Group Limited"
        subtitle="Join us and build a future full of opportunities, growth, and innovation."
      />

      {/* Main Content */}
      <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Content */}
        <div className="lg:col-span-7 space-y-10">
          <div>
            <h2 className="text-2xl font-bold text-red-800 mb-4 border-l-4 border-red-600 pl-4">
              Why Work With Us?
            </h2>

            <p className="leading-relaxed mb-4">
              At VGM Group Limited, we believe our people are our greatest strength. 
              We offer a dynamic work environment where innovation, collaboration, 
              and growth are encouraged. Whether you're starting your career or 
              looking for new challenges, we provide opportunities to learn, grow, 
              and succeed.
            </p>

            <h2 className="text-3xl font-bold text-red-900 mt-8">
              What We Offer
            </h2>

            <div className="space-y-8 flex flex-wrap gap-4 mt-4 items-center">
              <ValueItem
                icon={<Rocket />}
                title="Career Growth"
                text="Opportunities for professional development, skill enhancement, and career advancement."
              />
              <ValueItem
                icon={<Users />}
                title="Collaborative Culture"
                text="Work with a diverse team that values innovation, teamwork, and mutual respect."
              />
              <ValueItem
                icon={<Globe />}
                title="Global Exposure"
                text="Work on international projects across industries like travel, HR, digital, and media."
              />
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="lg:col-span-5 flex justify-center items-start">
          <div className="shadow-2xl rounded-lg overflow-hidden border border-gray-100 hover:scale-105 transition-transform duration-300">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
              alt="Team working"
              width={400}
              height={300}
            />
          </div>
        </div>
      </section>

      {/* Departments / Opportunities */}
      <section className='w-full py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto grid md:grid-cols-2 gap-8 px-6'>
          
          <ValueItem
            icon={<Briefcase />}
            title="Business & BPO Roles"
            text="Work in operations, customer support, and business process outsourcing roles."
          />

          <ValueItem
            icon={<Laptop />}
            title="Digital & Tech Jobs"
            text="Join our tech team in web development, mobile apps, and digital marketing."
          />

          <ValueItem
            icon={<Users />}
            title="HR & Management"
            text="Help organizations grow through HR, recruitment, and workforce management."
          />

          <ValueItem
            icon={<Globe />}
            title="Travel & Tours Division"
            text="Be part of exciting travel operations including tours, safaris, and global experiences."
          />

          <ValueItem
            icon={<HeartHandshake />}
            title="Media & Communication"
            text="Work with our media division in online radio, TV, and branding solutions."
          />

          <div className='p-4'>
            <p className='w-full mb-2'>
              We are always looking for passionate and talented individuals 
              ready to make an impact.
            </p>
            <p className='w-full'>
              <strong>Send your resume to:</strong> careers@vgmgroup.com
            </p>
          </div>

        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600">
              <Users size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Culture</h3>
              <p className="text-gray-600">
                We foster a positive and inclusive workplace that encourages 
                creativity, ownership, and continuous improvement.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100 flex items-start gap-6 hover:shadow-md transition">
            <div className="bg-red-100 p-4 rounded-full text-red-600">
              <Rocket size={40} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Our Mission</h3>
              <p className="text-gray-600">
                To empower employees and create meaningful career paths while 
                delivering excellence to our clients worldwide.
              </p>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

// Reusable Component
const ValueItem = ({
  icon,
  title,
  text
}: {
  icon: any;
  title: string;
  text: string;
}) => (
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

export default Careers;