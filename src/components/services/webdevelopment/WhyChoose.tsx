import React from 'react';
import { 
  Code,          // Replacing MonitorCode
  ShieldCheck, 
  Gauge, 
  Rocket, 
  Settings,      // Replacing Settings2
  Smartphone,    // Replacing SmartphoneNfc
  Headset 
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
  {
    title: "Custom Development",
    description: "We build custom websites tailored to your business needs.",
    icon: Code,
  },
  {
    title: "Secure Websites",
    description: "We use safe coding practices to keep your website protected.",
    icon: ShieldCheck,
  },
  {
    title: "Fast Loading Speed",
    description: "Websites that open quickly and run smoothly.",
    icon: Gauge,
  },
  {
    title: "Scalable Solutions",
    description: "As your business grows, your website can easily expand.",
    icon: Rocket,
  },
  {
    title: "Easy to Manage",
    description: "Websites developed with simple admin panels for quick updates.",
    icon: Settings,
  },
  {
    title: "Cross-Browser Support",
    description: "Ensures smooth and consistent website performance across all major browsers.",
    icon: Smartphone,
  },
  {
    title: "Long-Term Support",
    description: "Ongoing maintenance and updates when you need them.",
    icon: Headset,
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Our <span className="text-red-500">Web Development</span> Services?
          </h2>
          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            We believe a good website is not just about looks, it’s about experience. 
            Here is what we provide:
          </p>
        </div>

        {/* This layout uses flex to center the 3 cards on the bottom row, matching your image */}
        <div className="flex flex-wrap justify-center gap-8">
          {SERVICES_DATA.map((service, index) => (
            <div key={index} className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)] max-w-[320px]">
              <ServiceCard
                title={service.title}
                description={service.description}
                Icon={service.icon}
                index={index}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;