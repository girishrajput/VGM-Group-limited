import React from 'react';
import { 
  Palette, TabletSmartphone, Gauge, TrendingUp, 
  ShieldCheck, Headphones
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
  { 
    title: "User-Friendly Designs", 
    description: "Simple layouts that keep users engaged.", 
    icon: Palette 
  },
  { 
    title: "Cross-Platform Support", 
    description: "Apps for Android, iOS, or both.", 
    icon: TabletSmartphone 
  },
  { 
    title: "Smooth Performance", 
    description: "Optimized for speed and responsiveness.", 
    icon: Gauge 
  },
  { 
    title: "Scalable Solutions", 
    description: "Apps that grow with your business needs.", 
    icon: TrendingUp 
  },
  { 
    title: "Secure Development", 
    description: "Protection of user data and safe transactions.", 
    icon: ShieldCheck 
  },
  { 
    title: "Complete Support", 
    description: "From planning and design to publishing and updates.", 
    icon: Headphones 
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Our <span className="text-red-500">Mobile App Development</span> Services?
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