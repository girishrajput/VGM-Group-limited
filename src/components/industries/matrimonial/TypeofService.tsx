import { ServiceCard } from "@/components/TypeofServiceCard";

const MATRIMONIAL_SERVICE_DATA = [
  {
    title: "Matrimonial Website Development",
    description:
      "We design professional matrimonial websites that help families and individuals find perfect matches. With user-friendly design, profile search filters, and secure data handling, we create platforms for caste, religion, or community-based matchmaking. Our websites enable brides and grooms to showcase profiles while consultants manage registrations efficiently.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1000&auto=format&fit=crop",
  },
  {
  title: "Matrimonial Mobile App Development",
  description:
    "Our matrimonial mobile apps make matchmaking simple and accessible anytime. Brides, grooms, and families can create profiles, search, and connect instantly. With advanced filters for caste, religion, location, and preferences, we ensure compatibility-focused results. Consultants can also manage leads, registrations, and client communication on-the-go with ease.",
  image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=1000&auto=format&fit=crop",
},
  {
    title: "Profile Management & Verification System",
    description:
      "We manage trusted matrimony portals where families and individuals can create profiles and upload documents for verification. Our system allows marriage consultants to verify profiles and ensure authenticity, helping build confidence and transparency in matchmaking. Verified profiles improve match success, while secure data management gives peace of mind to users.",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Matrimonial CRM Solutions",
    description:
      "Our CRM for matrimonial consultants and bureaus helps manage inquiries, profiles, communication, and follow-ups easily. With built-in reminders, matchmaking insights, and lead management, you can deliver personalized matchmaking services. This solution ensures no opportunity is missed, while improving client satisfaction and growing your business efficiently.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Digital Marketing for Matrimonial Services",
    description:
      "We help matrimonial consultants, marriage bureaus, and platforms attract more users through SEO, Google Ads, and social media. With focused campaigns for Indian marriage, caste-based, and religion-specific matchmaking, we ensure maximum visibility. Digital marketing builds trust, grows your reach, and connects you with genuine brides and grooms.",
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "WhatsApp & Communication Integration",
    description:
      "We integrate WhatsApp Business solutions for matrimonial consultants to connect faster with clients. Instant notifications, inquiries, and profile sharing make communication simple. Families and individuals receive updates in real-time, while consultants can manage responses effectively. This improves engagement and increases the chances of successful matchmaking.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Services */}
        <div className="divide-y divide-slate-200">
          {/* Changed SERVICE_DATA to MATRIMONIAL_SERVICE_DATA */}
          {MATRIMONIAL_SERVICE_DATA.map((service, index) => (
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