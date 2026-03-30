"use client";

import Image from "next/image";
import InnerHeader from "@/components/InnerHeader";

// ✅ Define Props Type
type FeatureCardProps = {
  title: string;
  description: string;
  image: string;
};

// ✅ Apply Type to Props
const FeatureCard = ({ title, description, image }: FeatureCardProps) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
    <Image
      src={image}
      alt={title}
      width={600}
      height={300}
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-red-700">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <InnerHeader title="HR Solutions" subtitle="" />

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        {/* <section className="relative h-[80vh] flex items-center justify-center text-white">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
              alt="Office"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>

          <div className="relative z-10 text-center px-4">
            <h1 className="text-5xl font-extrabold mb-4">SB SMARTBIZ</h1>
            <p className="text-2xl font-light">
              Human Resource Management Software
            </p>
          </div>
        </section> */}

        {/* Modules Section */}
        <section className="py-20 max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Core Solutions
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            <FeatureCard
              title="Recruitment Management"
              description="Strategic process of finding, attracting, and hiring the most suitable candidates."
              image="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
            />

            <FeatureCard
              title="Project Management"
              description="Planning, organizing, and overseeing HR-related projects."
              image="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=600&q=80"
            />

            <FeatureCard
              title="Payroll Processing"
              description="Calculating wages, withholding taxes, and ensuring payments."
              image="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=600&q=80"
            />

            <FeatureCard
              title="HR Solution"
              description="-On-site work at customer location
-Remote work delivery from global locations
-The Hybrid cloud model increases the flexibility of computing and is the most beneficial cloud-based service delivery model."
              image="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
            />

          </div>
        </section>
      </div>
    </>
  );
}