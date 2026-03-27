import InnerHeader from "@/components/InnerHeader";
import Link from "next/link";
import React from "react";

// ✅ Define Props Type
type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

// ✅ Use Type in Component
const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2 text-red-700">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

// ✅ Page Component
export default function Page() {
  const coreSolutions = [
    {
      title: "Employee Information Management",
      description: "Systematic organization, storage, and utilization of data related to employees within an organization.",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Recruitment Management",
      description: "Strategic and systematic process of finding, attracting, and hiring the most suitable candidates for job vacancies.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Payroll Processing",
      description: "Administration of financial records including calculating gross/net pay, taxes, and ensures timely payment distribution.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Performance Management",
      description: "Aligning employee work with organization goals through strategies and systems to maximize effectiveness.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Attendance & Time Tracking",
      description: "Systematic recording of work hours, absences, breaks, and leaves for precise workforce management.",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Training & Development",
      description: "Enhancing specific skills and preparing employees for future responsibilities and career advancement.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Benefits Administration",
      description: "Managing health insurance, retirement plans, paid time off, and disability insurance programs.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Compliance & Reporting",
      description: "Ensuring legal boundary adherence and providing detailed documentation of workforce aspects.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Employee Self Service",
      description: "Platform allowing employees to manage their own employment aspects without direct HR intervention.",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=600&q=80"
    }
  ];

  return (
    <>
      <InnerHeader 
        title="HR & Payroll Management Software" 
        subtitle="Comprehensive Solutions for Modern Organizations" 
      />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80" 
              className="w-full h-full object-cover brightness-50" 
              alt="Office"
            />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-6xl font-extrabold mb-4 tracking-tight">SMARTBIZ</h1>
            <p className="text-2xl font-light mb-6">Human Resource Management Software</p>
            <p className="max-w-2xl mx-auto text-lg opacity-90">
              Systematic organization, storage, and utilization of employee data to meet your company's future needs.
            </p>
            <Link 
              href="https://smartbizhrms.co.tz/login" 
              className="inline-block mt-8 py-3 px-8 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-all shadow-lg" 
              target="_blank"
            >
              Login to SMARTBIZ HRMS
            </Link>
          </div>
        </section>

        {/* Modules Section */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Solutions</h2>
            <div className="w-24 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {coreSolutions.map((solution, index) => (
              <FeatureCard 
                key={index}
                title={solution.title} 
                description={solution.description}
                image={solution.image}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
}