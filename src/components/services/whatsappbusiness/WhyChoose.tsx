import React from 'react';
import { 
  MessageSquareText,
  Bot,
  Send,
  ShieldCheck,
  Headset,
  Blocks,
  TrendingUp
} from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICES_DATA = [
  {
    title: "Instant Customer Communication",
    description: "Reach customers directly on WhatsApp.",
    icon: MessageSquareText
  },
  {
    title: "Automated Messaging",
    description: "Set up chatbots for instant replies and FAQs.",
    icon: Bot
  },
  {
    title: "Bulk Messaging",
    description: "Send promotions, alerts, or updates to multiple customers.",
    icon: Send
  },
  {
    title: "Secure Platform",
    description: "End-to-end encryption keeps your messages safe.",
    icon: ShieldCheck
  },
  {
    title: "Customer Support",
    description: "Provide real-time support and quick query resolution.",
    icon: Headset
  },
  {
    title: "Integration Friendly",
    description: "Connect WhatsApp with CRM, e-commerce, or other platforms.",
    icon: Blocks
  },
  {
    title: "Scalable Solutions",
    description: "From small businesses to enterprises, suitable for all.",
    icon: TrendingUp
  },
];

const WhyChoose = () => {
  return (
    <section className="py-20 px-6 bg-slate-50/50">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Why Choose Our <span className="text-red-500">WhatsApp Business Solution</span> Services?
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