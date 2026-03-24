import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "WhatsApp Business App Setup",
    description:
      "We help small businesses get started with the official WhatsApp Business App. This includes creating a professional business profile, automated greetings, quick replies, labels for contacts, and catalog setup to showcase products and services. This solution improves professional communication and helps you stay connected with your customers efficiently.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "WhatsApp Business API Integration",
    description:
      "For medium and large enterprises, we integrate WhatsApp API into your systems. This allows automated messaging, chatbots, and bulk messaging while ensuring compliance with WhatsApp policies. Businesses can handle large volumes of messages, manage leads, and automate notifications such as order confirmations, reminders, or updates.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Chatbot Development for WhatsApp",
    description:
      "We develop AI-powered chatbots that provide instant responses to customer queries. Chatbots save time, reduce manual effort, and improve customer satisfaction. They can answer FAQs, provide product details, schedule appointments, and guide users through your services, making your business communication faster and more reliable.",
    image: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Bulk Messaging & Notifications",
    description:
      "Send promotional messages, alerts, or updates to multiple customers at once. Bulk messaging helps businesses run marketing campaigns, announce offers, or send reminders efficiently. Our solution ensures messages are delivered safely, reach the right audience, and comply with WhatsApp guidelines.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "CRM & Platform Integration",
    description:
      "We integrate WhatsApp with your CRM or e-commerce platform. This allows automated lead management, customer support tracking, and campaign monitoring. Businesses can efficiently manage customer interactions, follow up with leads, and maintain records while improving overall communication workflows.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Types of <span className="text-red-600">WhatsApp Business Solution Services</span> We Provide
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Explore a range of WhatsApp Business Solution solutions tailored to meet every business need.
          </p>
        </div>

        {/* Services */}
        <div className="divide-y divide-slate-200">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              isReversed={index % 2 === 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
}