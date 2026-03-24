import React from 'react';
import { 
  Search, 
  Share2, 
  MousePointerClick, 
  Mail, 
  FileText, 
  MapPin, 
  BarChart3, 
  Wallet 
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
  { 
    title: "SEO Optimization", 
    description: "Improve website ranking on Google and other search engines.", 
    icon: Search 
  },
  { 
    title: "Social Media Marketing", 
    description: "Build brand awareness and engage with your audience.", 
    icon: Share2 
  },
  { 
    title: "PPC Advertising", 
    description: "Run cost-effective paid campaigns for instant leads and sales.", 
    icon: MousePointerClick 
  },
  { 
    title: "Email Marketing", 
    description: "Reach your customers directly with targeted emails.", 
    icon: Mail 
  },
  { 
    title: "Content Marketing", 
    description: "Create valuable content to attract and retain users.", 
    icon: FileText 
  },
  { 
    title: "GEO-Targeting", 
    description: "Reach customers in specific locations to boost local business.", 
    icon: MapPin 
  },
  { 
    title: "Analytics & Reporting", 
    description: "Track performance and improve campaigns continuously.", 
    icon: BarChart3 
  },
  { 
    title: "Affordable & Flexible Plans", 
    description: "Customized strategies that fit your business needs.", 
    icon: Wallet 
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Our <span className="text-red-500">Digital Marketing Solutions</span> Services?
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            We believe a good website is not just about looks, it’s about experience. 
            Here is what we provide:
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              Icon={service.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;