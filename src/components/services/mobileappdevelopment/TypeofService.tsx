import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Android App Development",
    description:
      "Android has the largest user base in the world, and our Android apps are designed to reach maximum customers. We create apps that work seamlessly across all devices and Android versions. From e-commerce stores to healthcare apps, our team ensures smooth navigation, strong performance, and data security.",
    image: "https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "iOS App Development",
    description:
      "We develop high-quality iOS apps designed specifically for iPhones and iPads. iOS users expect premium performance, and our apps deliver exactly that with clean designs and reliable features. Our focus is on security, smooth navigation, and user satisfaction.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Hybrid App Development",
    description:
      "Hybrid apps are the perfect choice for businesses that want to save time and costs while reaching both Android and iOS users. We develop hybrid apps using modern frameworks like React Native and Flutter, providing excellent performance and a seamless user experience.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Enterprise Mobile Apps",
    description:
      "Enterprise apps are designed to improve internal business operations. We build apps for managing employees, tracking projects, and streamlining processes, focusing on creating secure, scalable, and easy-to-use solutions for your organization.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
  },
  {
    title: "Custom Mobile App Development",
    description:
      "Every business has unique needs, and we develop custom mobile apps tailored to match those requirements. Whether it's an innovative startup idea or a specialized solution for an established company, we bring your concept to life with performance and scalability in mind.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Types of <span className="text-red-600">Mobile App Development Services</span> We Provide
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Explore a range of Mobile App Development solutions tailored to meet every business need.
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