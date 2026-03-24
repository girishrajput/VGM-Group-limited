import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "B2B/B2C Website Development",
    description: "We design websites for B2B and B2C platforms like IndiaMART, TradeIndia, Alibaba, or Justdial. Businesses can list products, receive inquiries, and connect with buyers and suppliers directly. With user-friendly design and SEO optimization, these websites boost visibility, build credibility, and help businesses expand their market reach effectively.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Business Directory Development",
    description: "We create business directories where manufacturers, suppliers, and exporters can register and promote their products or services. Buyers can search by category, city, or industry, making connections faster and easier. A business directory helps companies gain exposure, generate inquiries, and grow sales in both B2B and B2C markets.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Lead Generation & Management System",
    description: "Lead generation is the backbone of B2B platforms. We provide tools to capture inquiries from buyers and assign them to suppliers instantly. Our lead management system ensures no inquiry is missed, helps track buyer interest, and improves conversion rates, leading to better business growth and client satisfaction.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Buyer Management System",
    description: "We develop buyer management platforms to help businesses track, verify, and maintain buyer records. Suppliers and exporters can easily respond to buyer needs, send quotations, and follow up. This system ensures genuine business opportunities, builds long-term relationships, and improves trust between buyers and sellers.",
    image: "https://images.unsplash.com/photo-1556745753-b2904692b3cd?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "B2B/B2C Mobile App Development",
    description: "Mobile apps for B2B and B2C platforms allow users to browse products, post requirements, and connect with businesses anytime. Manufacturers and exporters can showcase catalogs, while buyers can send direct inquiries. Apps make trade simple, fast, and convenient, increasing engagement and opportunities on-the-go.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop"
  },
  {
    title: "Digital Marketing for B2B/B2C Businesses",
    description: "We provide SEO, PPC, and social media marketing to promote manufacturers, suppliers, and exporters online. By targeting industry-specific keywords and buyer searches, we ensure higher visibility and more inquiries. Digital marketing helps businesses grow brand recognition, attract buyers globally, and increase lead conversion rates effectively.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop"
  }
];

export default function TypeofService() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Our Real Estate Solutions
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive digital tools tailored for the modern real estate industry,
            helping you manage listings and close deals faster.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-20">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              // This prop handles the zigzag layout (Text-Left/Image-Right vs Image-Left/Text-Right)
              isReversed={index % 2 === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}