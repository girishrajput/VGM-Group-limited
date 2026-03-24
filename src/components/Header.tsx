"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const menuData = {
    portals: [
      { name: "Job & Recruiters", href: "/portals/jobandrecruiters" },
      { name: "GMC Properties", href: "/portals/gmc-properties" },
      { name: "Quick Biz", href: "/portals/quick-biz" },
      { name: "VGM Group travel and tours", href: "/portals/vgm-group-travel-and-tours" },
    ],
    products: [
      { name: "Business Process Outsourcing (BPO)", href: "/products/business-process-outsourcing" },
      { name: "HR & Payroll Management Software", href: "/products/hr-payroll-management" },
      { name: "HR Solutions", href: "/products/hr-solutions" },
      { name: "Travel & Tours Services", href: "/products/travel-tours-services" },
      { name: "GMC Properties", href: "/products/gmc-properties" },
      { name: "Digital Services", href: "/products/digital-services" },
    ],
    industries: [
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Jobs & Recruiters", href: "/industries/jobs-recruiters" },
      { name: "Matrimonial", href: "/industries/matrimonial" },
      { name: "B2B/B2C", href: "/industries/b2b-b2c" },
      { name: "E-Commerce", href: "/industries/e-commerce" },
      { name: "School & Education", href: "/industries/school-education" },
      { name: "Travel", href: "/industries/travel" },
    ],
    services: [
      { name: "Web Designing", href: "/services/web-designing" },
      { name: "Web Development", href: "/services/web-development" },
      { name: "Mobile App Development", href: "/services/mobile-app-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "WhatsApp Business Solutions", href: "/services/whatsapp-business-solutions" },
      { name: "Promotional Video Services", href: "/services/promotional-video-services" },
    ],
  };

  const navItems = [
    { label: "Our Portals", key: "portals" },
    { label: "Products", key: "products" },
    { label: "Industries", key: "industries" },
    { label: "Services", key: "services" },
  ];

  return (
    <header className="fixed w-full z-50 bg-white text-black shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/vgm-logo.png"
            alt="VGM Logo"
            width={100}
            height={50}
            style={{ width: "160px", height: "auto" }}
          />
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-5 items-center">
            <Link href="/" className="hover:text-red-600 transition">Home</Link>
            <Link href="/about" className="hover:text-red-600 transition">About</Link>

            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative group py-2"
                onMouseEnter={() => setActiveSubmenu(item.key)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button type="button" className="flex items-center gap-1 hover:text-red-600 transition">
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      activeSubmenu === item.key ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md py-2 w-60 border border-gray-100">
                  {menuData[item.key as keyof typeof menuData].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/contact" className="hover:text-red-600 transition">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="bg-red-600 px-5 py-2 text-white rounded-lg hover:bg-red-700 transition whitespace-nowrap"
          >
            Job Seekers and Recruiters
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? "block" : "hidden"} md:hidden bg-white border-t p-4 h-screen overflow-y-auto`}>
        <nav className="flex flex-col gap-4 pb-20">
          <Link href="/" onClick={toggleMenu} className="text-lg font-medium">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="text-lg font-medium">About</Link>

          {navItems.map((item) => (
            <div key={item.key} className="border-b pb-2">
              <button
                type="button"
                onClick={() =>
                  setActiveSubmenu(activeSubmenu === item.key ? null : item.key)
                }
                className="flex justify-between w-full text-lg font-medium"
              >
                {item.label}
                <span className="text-red-600">
                  {activeSubmenu === item.key ? "−" : "+"}
                </span>
              </button>

              {activeSubmenu === item.key && (
                <div className="pl-4 mt-2 flex flex-col gap-3 text-gray-600">
                  {menuData[item.key as keyof typeof menuData].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={toggleMenu}
                      className="hover:text-red-600"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/contact" onClick={toggleMenu} className="text-lg font-medium">
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-red-600 text-white p-4 text-center rounded-lg font-bold mt-4"
          >
            Job Seekers and Recruiters
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;