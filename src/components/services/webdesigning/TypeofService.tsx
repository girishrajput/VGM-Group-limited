import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Ecommerce Website Design",
    description:
      "We build modern eCommerce websites that simplify online selling. With intuitive layouts, well-organized product showcases, and secure checkout systems, customers can shop with ease and trust. Our designs are fully responsive, fast, and optimized to drive conversions. Whether you run a small shop or a large catalog, we ensure smooth browsing and appealing product presentation. Using advanced eCommerce development, shopping cart solutions, and secure payment integration, we help businesses boost sales, strengthen credibility, and expand their digital footprint effectively.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Personalized Web Design",
    description:
      "Our personalized web design services create unique websites tailored to match your brand identity and business goals. Instead of relying on templates, we design every element from scratch, including layout, colors, and features. This approach ensures a distinctive online presence and better performance. With strong focus on UI/UX, branding, and custom functionality, we help you attract the right audience, stand out from competitors, and establish long-term trust in the digital space.",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Mobile-Optimized Web Design",
    description:
      "As most users browse on mobile devices, we design websites with a mobile-first approach. Our mobile-optimized websites load quickly, are easy to navigate, and adapt perfectly to all screen sizes. This improves user engagement and lowers bounce rates. With expertise in responsive design and mobile usability, we help businesses reach a wider audience and convert mobile visitors into loyal customers.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Business Website Design",
    description:
      "We design professional business websites that present your company in a strong and credible way. From showcasing your services to highlighting achievements and values, our designs focus on clarity and trust. Clean layouts, smooth navigation, and engaging visuals help attract potential clients. With expertise in corporate branding and business-focused design, we ensure your website leaves a lasting impression and builds credibility in the market.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Responsive Website Solutions",
    description:
      "Our responsive website solutions ensure your site works seamlessly across desktops, tablets, and smartphones. Visitors experience consistent performance and design regardless of device or browser. A responsive approach improves SEO, reduces maintenance, and enhances user satisfaction. With strong expertise in adaptive layouts and cross-browser compatibility, we help businesses reach more users and generate higher engagement and leads.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Interactive Website Development",
    description:
      "We create dynamic and interactive websites that are flexible and easy to update. From blogs and forms to product sections, these websites allow quick content changes without technical skills. They keep users engaged with fresh content and interactive elements. With our expertise in CMS platforms and dynamic web solutions, we help businesses maintain an active online presence and deliver engaging user experiences.",
    image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Basic Website Design",
    description:
      "Our basic website design services are perfect for startups and small businesses looking for a simple online presence. These websites are lightweight, fast-loading, and cost-effective, making them ideal for static content. Despite being simple, we ensure professional design and SEO-friendly structure so your business appears credible and polished online.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Website Revamp Services",
    description:
      "We help upgrade outdated websites into modern, high-performing platforms. From redesigning layouts to improving speed and responsiveness, we give your website a fresh and updated look. A revamped website increases engagement, enhances credibility, and improves search visibility. Our redesign solutions ensure your business stays competitive and aligned with current trends.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Design to Code Conversion",
    description:
      "Our PSD to HTML services convert your design files into clean, responsive, and functional websites. We ensure pixel-perfect accuracy while maintaining fast performance and SEO-friendly structure. The final output works smoothly across all browsers and devices. With expertise in HTML5 and responsive coding, we transform your designs into reliable and high-quality websites ready for real-world use.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Our Range of <span className="text-red-600">Website Design Services</span>
          </h2>

          <p className="mt-5 text-lg text-slate-600 max-w-3xl mx-auto">
            Discover various web design options created to suit different business requirements.
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