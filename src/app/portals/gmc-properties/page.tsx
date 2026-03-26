import Head from 'next/head';
import Image from 'next/image';
import InnerHeader from '@/components/InnerHeader';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const services = [
  {
    name: 'Land Sales',
    description: 'Surveyed and unsurveyed plots with clear legal documentation and guidance through the acquisition process.',
    icon: '🗺️',
  },
  {
    name: 'Property Management',
    description: 'Comprehensive management for commercial and residential properties, including tenant screening and maintenance.',
    icon: '🏢',
  },
  {
    name: 'Project Marketing',
    description: 'Professional marketing and sales services, connecting developers with qualified buyers and investors.',
    icon: '📣',
  },
  {
    name: 'Land Survey Support',
    description: 'Coordination with licensed surveyors for accurate boundary marking, approvals, and secure title transfers.',
    icon: '📐',
  },
  {
    name: 'Financial Guidance',
    description: 'Assistance in finding suitable financing options and flexible payment plans for property acquisition.',
    icon: '💰',
  },
];

const projects = [
  { name: 'Kibaha, Pwani', type: 'Residential Plots', image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600&auto=format&fit=crop' },
  { name: 'Kigamboni', type: 'Coastal & Developing Parcels', image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600&auto=format&fit=crop' },
  { name: 'Dodoma', type: 'Strategic Capital Plots', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop' },
];

const faqs = [
  { q: "Are your plots legally verified?", a: "Yes. We sell both surveyed plots with clear titles and unsurveyed plots. For surveyed plots we provide survey reports and documentation. For unsurveyed plots, we guide clients through the surveying and approval process." },
  { q: "Do you offer installment payment plans?", a: "Yes. We provide flexible payment plans depending on the project and plot. Terms and down payment requirements vary by location and plot size." },
  { q: "Can I visit a site before purchase?", a: "Absolutely. We encourage site visits. Our team will arrange guided visits, show property boundaries, and answer questions on-site." },
  { q: "Do you manage commercial and residential properties?", a: "Yes. We offer full property management services including tenant sourcing, rent collection, and maintenance." },
];

function Page() {
  return (
    <>
      <Head>
        <title>GMC Properties | Trusted Tanzanian Real Estate</title>
        <meta name="description" content="GMC Properties specializes in land sales and property management across Tanzania." />
      </Head>

      <InnerHeader title="GMC Properties" subtitle="Quality Land and Property Management" />

      <div id="home" className="min-h-screen bg-gray-50 text-gray-900 scroll-smooth">
        {/* Navigation */}
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div className="text-3xl font-bold text-red-700">
              GMC <span className="font-light text-gray-800">Properties</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="text-gray-600 hover:text-red-700 transition font-medium">
                  {item.name}
                </a>
              ))}
            </div>
            <a href="#contact" className="bg-red-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-red-700 transition text-sm">
              Request Consultation
            </a>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative bg-gray-900 text-white py-32 md:py-48">
          <Image
            src="https://images.unsplash.com/photo-1599809275671-b5942cabc7a2?q=80&w=1920&auto=format&fit=crop"
            alt="Modern building exterior"
            fill
            priority
            className="absolute inset-0 opacity-40 object-cover"
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">GMC Properties Company Limited</h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light">
              Your trusted partner for plots, property sales, and professional property management across Tanzania.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-gray-900 px-8 py-3 rounded-md font-semibold hover:bg-gray-100 transition">Explore Plots</button>
              <button className="bg-red-600 px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">View Projects</button>
              <a href="#contact" className="bg-transparent border-2 border-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-gray-900 transition inline-block">Contact Us</a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-extrabold text-gray-950 mb-6 leading-tight">About GMC Properties</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  GMC Properties is a Tanzania-based real estate company specializing in land sales and comprehensive property management services. We help clients purchase both surveyed and unsurveyed plots and provide professional management for commercial buildings.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-medium text-red-800">
                  Our mission is to make land ownership and property investment accessible, secure, and profitable.
                </p>
              </div>
              <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                 <Image src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=800&auto=format&fit=crop" alt="Real Estate Success" fill className="object-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-24 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-950">Our Services</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Expertise across the real estate spectrum, tailored to your needs.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-10">
              {services.map((service) => (
                <div key={service.name} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="text-5xl mb-6" aria-hidden="true">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-950 mb-4">{service.name}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extrabold text-gray-950">Featured Projects & Locations</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">Explore opportunities in key growth corridors across Tanzania.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {projects.map((project) => (
                <div key={project.name} className="bg-gray-50 rounded-xl overflow-hidden shadow-md group">
                  <div className="relative h-64">
                    <Image src={project.image} alt={project.name} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-950">{project.name}</h3>
                    <p className="text-red-700 font-medium mt-1">{project.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center flex flex-col sm:flex-row gap-4 justify-center">
                 <button className="bg-red-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-red-700 transition">View All Plots</button>
                 <button className="bg-white text-gray-900 border border-gray-300 px-8 py-3 rounded-md font-semibold hover:bg-gray-50 transition">Schedule a Site Visit</button>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-red-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-5 gap-12 items-center">
                <div className='md:col-span-2'>
                    <h2 className="text-4xl font-extrabold text-gray-950 leading-tight">Why Partner with GMC Properties?</h2>
                    <p className="mt-5 text-lg text-gray-700 leading-relaxed">We combine deep local knowledge with professional, transparent service.</p>
                </div>
                <div className='md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10'>
                    {[ {title: 'Local Expertise', text: 'In-depth market knowledge.'}, {title: 'Legal Support', text: 'Coordination for clear titles.'}, {title: 'Flexible Payments', text: 'Tailored installment options.'}, {title: 'Full Management', text: 'End-to-end service for landlords.'} ].map(item => (
                        <div key={item.title} className='flex gap-4'>
                            <div className='text-3xl text-red-600 mt-1'>✔️</div>
                            <div>
                                <h4 className='font-bold text-lg text-gray-950'>{item.title}</h4>
                                <p className='text-gray-700 text-sm'>{item.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-extrabold text-gray-950 text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                  <h3 className="text-xl font-bold text-gray-950 mb-3">{faq.q}</h3>
                  <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-gray-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-extrabold mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-300 mb-10 leading-relaxed">Ready to find your perfect plot or maximize your property returns? Contact us today.</p>
              <div className="space-y-6 text-gray-300">
                <p>📞 +255 XXX XXX XXX</p>
                <p>✉️ info@gmcproperties.co.tz</p>
                <p>📍 Kibaha Town, Pwani, Tanzania</p>
              </div>
            </div>
            {/* <form className="bg-white p-10 rounded-2xl shadow-2xl text-gray-900 space-y-6">
              <input required type="text" placeholder="Your Name" className="w-full px-5 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-200 outline-none" />
              <input required type="email" placeholder="Email Address" className="w-full px-5 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-200 outline-none" />
              <textarea required placeholder="Your Message..." rows="4" className="w-full px-5 py-3.5 border border-gray-300 rounded-md focus:ring-2 focus:ring-red-200 outline-none"></textarea>
              <button type="submit" className="w-full bg-red-600 text-white py-4 rounded-md font-semibold hover:bg-red-700 transition">Send Inquiry</button>
            </form> */}
          </div>
        </section>

        <footer className="bg-gray-100 border-t border-gray-200 text-gray-600 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              {navigation.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-red-700 transition">
                  {item.name}
                </a>
              ))}
            </div>
            <p>&copy; {new Date().getFullYear()} GMC Properties Company Limited. All rights reserved.</p>
            <p className="text-sm mt-1">Licensed by relevant Tanzanian authorities.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Page;