import InnerHeader from '@/components/InnerHeader'


import Image from 'next/image';

const services = [
  {
    title: "Web Designing",
    description: "Crafting visually stunning and user-centric UI/UX designs that captivate your audience.",
    image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Web Development",
    description: "Building fast, scalable, and secure web applications using the latest modern frameworks.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Mobile App Development",
    description: "Creating seamless native and cross-platform mobile experiences for iOS and Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Digital Marketing",
    description: "Boosting your online presence through data-driven SEO and social media strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "WhatsApp Business Solutions",
    description: "Automate your communication and engage customers directly on the world's most popular app.",
    image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Promotional Video Services",
    description: "High-quality video production and editing to tell your unique brand story visually.",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ServicesLanding() {
  return (

      <>
      <InnerHeader 
                title="Digital Services" 
                subtitle="" 
            />

    <section className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Our Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end digital solutions to help your business scale and succeed in the modern market.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-red-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed flex-grow">
                  {service.description}
                </p>
                
                <div className="mt-6 pt-6 border-t border-gray-50">
                  <button className="inline-flex items-center text-red-600 font-semibold hover:gap-3 transition-all">
                    Get Started 
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}