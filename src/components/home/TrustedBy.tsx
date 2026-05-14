import Image from 'next/image';

const logos = [
  { name: 'CRDB Bank', src: '/logos/logo1.png' },
  { name: 'DSSL', src: '/logos/logo2.jpg' },
  { name: 'Jeva Media', src: '/logos/logo3.jpg' },
  { name: 'SwahiliSoft', src: '/logos/logo4.jpg' },
  { name: 'Little', src: '/logos/logo5.jpg' },
  { name: 'Proactive', src: '/logos/logo6.jpg' },
  { name: 'GMC Properties', src: '/logos/logo7.jpg' },
    { name: 'Hot Biz Media', src: '/logos/logo8.jpg' },
    { name: 'VGM Group travel and tours', src: '/logos/logo9.jpg' },
    { name: 'Global College of Business & Management', src: '/logos/logo10.jpg' },
];

export default function LogoSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Used by <span className="bg-orange-100 px-1">10M+ users</span> around the world
          </h2>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 border-t border-l border-gray-100">
          {logos.map((logo, index) => (
            <div 
              key={index} 
              className="flex items-center justify-center p-8 border-r border-b border-gray-100 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-12 w-auto object-contain"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}