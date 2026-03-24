import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Our SEO services help your website rank higher on search engines, attract organic traffic, and improve visibility. We perform keyword research, on-page optimization, technical SEO, and content strategy to increase your website's search engine ranking. With local SEO, link building, and competitor analysis, we help your business reach customers searching for your products or services.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Social Media Marketing",
    description:
      "We grow your presence on platforms like Facebook, Instagram, LinkedIn, and Twitter through targeted campaigns. Social media marketing increases brand awareness, customer engagement, and audience interaction. Our strategy includes content creation, posting schedules, paid promotions, and follower growth techniques to generate potential leads and long-term relationships.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "PPC campaigns deliver instant results by showing your ads to your target audience at the right time. We manage Google Ads, Bing Ads, and social media advertising to improve conversions and ROI. Our management includes ad creation, targeting, bidding strategy, and campaign optimization to ensure your ads reach the right users while controlling costs.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "GEO-Targeted Marketing",
    description:
      "GEO-targeting focuses your marketing efforts on specific locations to reach the right customers at the right time. We optimize campaigns for local SEO, location-based ads, and mobile users. By combining search engine strategies and paid campaigns, we help businesses attract regional customers effectively and improve brand recognition locally.",
    image: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Content Marketing",
    description:
      "We create high-quality content such as blogs, articles, infographics, and videos that educate and attract your target audience. Content marketing improves SEO, boosts search engine ranking, and drives organic traffic. By using storytelling and regular updates, we help build brand authority, customer trust, and long-term business growth.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Email Marketing",
    description:
      "Email marketing lets you communicate directly with your audience. We design campaigns for newsletters, promotional offers, and customer engagement. Using segmentation, automation, and targeted messages, we increase open rates and conversions. Our goal is to drive repeat sales, boost brand loyalty, and ensure each email adds value to your audience.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TypeofService() {
  return (
    <section className="bg-slate-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 uppercase tracking-tight">
            Types of <span className="text-red-600">Digital Marketing Solutions Services</span> We Provide
          </h2>

          <p className="text-slate-500 max-w-2xl mx-auto italic">
            Explore a range of Digital Marketing Solutions solutions tailored to meet every business need.
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