import ContactSection from '@/components/ContactSection'
import Link from 'next/link';

const Footer = () => {


  const sections = [
    {
      title: "Our Portals",
      links: ["Exporters India", "Placement India", "RealEstate India", "TourTravel World", "Matrimonials India", "IndianYellow Pages"]
    },
    {
      title: "Services",
      links: ["Web Designing", "Web Development", "Mobile App Development", "Digital Marketing", "WhatsApp Business Solutions", "Promotional Video Services"]
    },
    {
      title: "Products",
      links: ["School ERP Solutions", "CRM Solutions", "E-Commerce Solutions"]
    }
  ];

  const industries = [
    { left: ["Real Estate", "Jobs & Recruiters", "Matrimonial", "B2B/B2C"], right: ["E-Commerce", "School & Education", "Travel", "Health Care"] }
  ];

  const bottomLinks = ["Home", "About Us", "Blog", "Career", "Contact Us", "Press Release", "Terms & Conditions", "Privacy Policy", "Online Payment"];


  return (
  <>
    <ContactSection />
    <footer className="bg-black text-white py-10 px-6 font-sans">
      <div className="max-w-6xl mx-auto">
        
        {/* Main Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-gray-800">
          
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="flex items-center text-lg font-bold mb-4">
                <span className="w-1 h-5 bg-red-500 mr-2"></span> {section.title}
              </h3>
              <ul className="space-y-3 text-sm text-gray-300">
                {section.links.map((link) => (
                  <li key={link}><Link href="#" className="hover:text-red-400 transition">{link}</Link></li>
                ))}
              </ul>
            </div>
          ))}

          {/* Industries Column (Special layout) */}
          <div>
            <h3 className="flex items-center text-lg font-bold mb-4">
              <span className="w-1 h-5 bg-red-500 mr-2"></span> Industries
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-300">
              <ul className="space-y-3">
                {industries[0].left.map((item) => (
                  <li key={item}><Link href="#" className="hover:text-red-400 transition">{item}</Link></li>
                ))}
              </ul>
              <ul className="space-y-3">
                {industries[0].right.map((item) => (
                  <li key={item}><Link href="#" className="hover:text-red-400 transition">{item}</Link></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Company Links Bar */}
        <div className="flex flex-wrap items-center gap-4 py-6 border-b border-gray-800">
          <span className="text-sm font-semibold">Company Links</span>
          {bottomLinks.map((link) => (
            <Link 
              key={link} 
              href="#" 
              className="bg-zinc-900 border border-zinc-800 px-3 py-1 rounded text-xs text-gray-300 hover:bg-zinc-800 transition"
            >
              {link}
            </Link>
          ))}
        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>© 2026 VGM Group limited.   All Rights Reserved.</p>
          <div className="flex items-center space-x-4">
             {/* Facebook Icon Placeholder */}
            <Link href="#" className="bg-red-600 p-1.5 rounded-full text-white hover:bg-red-700">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </>
    
  );
};
export default Footer;