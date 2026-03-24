import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "E-Commerce Website Development",
    description:
      "We create user-friendly e-commerce websites with product catalogs, shopping carts, and secure payment gateways. Businesses can display products, manage orders, and offer smooth checkout experiences. Our SEO-friendly websites improve visibility, build trust, and help online stores connect with more customers while increasing sales.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "E-Commerce Mobile App Development",
    description:
      "Mobile apps bring shopping to customers' fingertips. We design e-commerce apps with product browsing, wish lists, notifications, and easy checkout. Retailers and wholesalers can reach buyers directly, improve engagement, and provide personalized shopping experiences. Apps also support secure payments and smooth order tracking for customer convenience.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Product & Inventory Management System",
    description:
      "We develop inventory systems that allow businesses to manage stock, update catalogs, and track product availability in real-time. Automated inventory reduces errors, prevents overselling, and ensures smooth operations. This system helps retailers and wholesalers maintain accurate stock levels while meeting customer demand without delays.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Secure Payment Integration",
    description:
      "We provide integration with multiple payment gateways including UPI, credit/debit cards, wallets, and net banking. Secure transactions build customer trust, reduce payment failures, and simplify order processing. Businesses can offer multiple payment options, making checkout easy and safe, which improves conversion rates and customer satisfaction.",
    image: "https://images.unsplash.com/photo-1556742044-3c52d6e88c62?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "E-Commerce CRM Solutions",
    description:
      "Our e-commerce CRM helps businesses manage customer inquiries, order history, and follow-ups. With detailed insights, you can track buyer preferences, send personalized offers, and improve relationships. CRM ensures higher customer retention, smooth communication, and repeat purchases, strengthening loyalty and driving long-term business growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing for E-commerce",
    description:
      "We provide SEO, social media, and paid ad campaigns to promote online stores. From Google Shopping Ads to influencer promotions, we ensure higher visibility, more traffic, and better conversions. Digital marketing helps e-commerce businesses reach the right audience and increase sales effectively in competitive markets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
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