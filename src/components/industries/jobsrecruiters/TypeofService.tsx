import { ServiceCard } from "@/components/TypeofServiceCard";

const SERVICE_DATA = [
  {
    title: "Job Portal Development",
    description:
      "We provide professional job portal development services for recruiters, employers, and consultants. Our portals are responsive, SEO-friendly, and feature-rich, allowing easy job posting, candidate search, application tracking, and multi-city access. Enhance your recruitment business, attract top talent, and manage hiring efficiently with our modern, result-driven job portal solutions.",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Recruitment Mobile App Development",
    description:
      "Our recruitment mobile app development helps recruiters and job seekers connect instantly. Post jobs, search openings, track applications, and communicate on-the-go. With user-friendly design, push notifications, and multi-city coverage, our apps improve hiring speed, engagement, and placement success, making recruitment seamless for employers, consultants, and candidates across industries.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "Recruitment CRM & Management Platform",
    description:
      "Our recruitment CRM platform streamlines hiring by managing job listings, candidate profiles, applications, and follow-ups in one place. Recruiters, employers, and consultants can track interactions, schedule interviews, and improve workflow efficiency. With automation and centralized management, our CRM boosts candidate conversion rates, organization, and overall recruitment performance.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
  },
  {
    title: "WhatsApp Recruitment Services",
    description:
      "We provide WhatsApp services for recruiters, employers, and consultants to share job alerts, updates, and reminders directly with candidates. Automated messaging, personalized campaigns, and lead tracking enhance candidate engagement, improve response time, and simplify communication, helping your recruitment business stay connected with talent efficiently and grow faster.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?q=80&w=1000&auto=format&fit=crop",
  },
  {
  title: "Employer & Consultant Support Services",
  description:
    "Our employer and consultant support services help recruiters manage end-to-end hiring efficiently. We assist with candidate verification, interview scheduling, recruitment strategy, and documentation management. These solutions ensure quality placements, save time, and provide a seamless recruitment experience for employers, consultants, and candidates across cities and industries.",
  image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1000&auto=format&fit=crop",
},
  {
    title: "Multi-City & Multi-Industry Recruitment Solutions",
    description:
      "Reach qualified job seekers across multiple cities and industries with our recruitment solutions. We help employers, recruiters, and consultants attract diverse talent, post listings efficiently, and manage applications effectively. Expand your hiring network, find the right candidates faster, and strengthen your recruitment strategy with our scalable, industry-focused solutions.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop",
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