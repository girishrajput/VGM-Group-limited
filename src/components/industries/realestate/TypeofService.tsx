import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Real Estate Website Development",
    description:
      "We provide professional real estate website development services to help property dealers, agents, and builders showcase their listings online. Our responsive and SEO-friendly websites include property search, lead generation, and easy management tools. Boost your real estate business with modern, user-friendly, and result-oriented website solutions.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real Estate Mobile App Development",
    description:
      "We design and develop feature-rich real estate mobile apps that help property agents, builders, and dealers connect with buyers and sellers instantly. Our apps include property listings, search filters, lead generation, and WhatsApp integration. Grow your real estate business with user-friendly, secure, and result-driven mobile app solutions.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real Estate Property Management Services",
    description:
      "We offer complete real estate property management services to help agents, builders, and property owners manage their listings effectively. Along with property marketing and lead generation, we also manage real estate B2B portals to connect buyers, sellers, and dealers. Simplify operations and grow your business with our expert solutions.",
    linkText: "Search Agents by City",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real Estate Property Portal (Buy, Sell & Rent Across India)",
    description:
      "We manage a nationwide real estate portal similar to Realestateindia.com, where buyers, sellers, and property agents can list and search properties across all major Indian cities. Our platform covers residential and commercial properties for sale and rent, with city-wise property listings, verified agents, and easy contact options. Find the right property or the right buyer faster with our trusted, user-friendly real estate portal.",
    linkText: "Search Properties by City",
    image: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real Estate WhatsApp Services",
    description:
      "We offer professional WhatsApp services for real estate businesses to connect instantly with clients. Share property listings, updates, and promotions directly with buyers, sellers, and leads. Our solutions include automated messaging, personalized campaigns, and lead management to boost engagement, improve response time, and grow your real estate business effectively.",
    linkText: "Start WhatsApp Marketing",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Real Estate CRM Solutions",
    description:
      "Our real estate CRM is designed to make your business easier and more organized. With this platform, you can manage your property listings, keep track of buyers and sellers, handle incoming leads, and schedule follow-ups efficiently. It helps you stay on top of client interactions, streamline your workflow, and grow your real estate business effectively.",
    linkText: "Real Estate CRM Solutions",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  }
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