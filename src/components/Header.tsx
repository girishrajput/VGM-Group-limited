"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  // Close mobile menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubmenu(null);
  };

  const menuData = {
    portals: [
      { name: "Job & Recruiters", href: "/portals/jobandrecruiters" },
      { name: "GMC Properties", href: "/portals/gmc-properties" },
      { name: "Quick Biz", href: "/portals/quick-biz" },
      { name: "VGM Group travel and tours", href: "/portals/vgmgroup-travelandtours" },
      { name: "Global College of Business & Management", href: "/portals/global-college" },
    ],
    products: [
      { name: "Business Process Outsourcing (BPO)", href: "/products/business-processoutsourcing" },
      { name: "HR & Payroll Management Software", href: "/products/hrpayroll-management" },
      { name: "HR Solutions", href: "/products/hr-solutions" },
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
      { name: "Mobile App Development", href: "/services/mobileapp-development" },
      { name: "Digital Marketing", href: "/services/digital-marketing" },
      { name: "WhatsApp Business Solutions", href: "/services/whatsappbusiness-solutions" },
      { name: "Promotional Video Services", href: "/services/promotional-videoservices" },
    ],
  };

  const navItems = [
    { label: "Our Portals", key: "portals" },
    { label: "Products", key: "products" },
    { label: "Industries", key: "industries" },
    { label: "Services", key: "services" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[100] bg-white text-black shadow-md p-4">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto h-[70px]">
        
        {/* Logo */}
        <Link href="/" className="z-[110]">
          <Image
            src="/images/vgmlogo.png"
            alt="VGM Logo"
            width={160}
            height={50}
            priority
            style={{ width: "160px", height: "auto" }}
          />
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button
          type="button"
          className="md:hidden p-2 z-[110] outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
            <Link href="/" className="hover:text-red-600 transition font-medium">Home</Link>
            <Link href="/about" className="hover:text-red-600 transition font-medium">About</Link>

            {navItems.map((item) => (
              <div
                key={item.key}
                className="relative group py-2"
                onMouseEnter={() => setActiveSubmenu(item.key)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <button type="button" className="flex items-center gap-1 hover:text-red-600 transition font-medium">
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${activeSubmenu === item.key ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-xl rounded-md py-2 w-64 border border-gray-100">
                  {menuData[item.key as keyof typeof menuData].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      className="block px-4 py-2 hover:bg-red-50 hover:text-red-600 transition text-sm"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/contact" className="hover:text-red-600 transition font-medium">Contact</Link>
          </nav>

          <Link
            href="/contact"
            className="bg-red-600 px-5 py-2 text-white rounded-lg hover:bg-red-700 transition whitespace-nowrap font-semibold"
          >
            Job Seekers and Recruiters
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 top-[70px] bg-white transition-transform duration-300 ease-in-out z-[100] md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full overflow-y-auto p-6 pb-32 gap-4">
          <Link href="/" onClick={toggleMenu} className="text-xl font-bold border-b pb-3">Home</Link>
          <Link href="/about" onClick={toggleMenu} className="text-xl font-bold border-b pb-3">About</Link>

          {navItems.map((item) => (
            <div key={item.key} className="border-b pb-3">
              <button
                type="button"
                onClick={() => setActiveSubmenu(activeSubmenu === item.key ? null : item.key)}
                className="flex justify-between items-center w-full text-xl font-bold"
              >
                {item.label}
                <span className="text-red-600 text-2xl">
                  {activeSubmenu === item.key ? "−" : "+"}
                </span>
              </button>

              {activeSubmenu === item.key && (
                <div className="pl-4 mt-4 flex flex-col gap-4 border-l-2 border-red-500 bg-gray-50 p-3 rounded-r-lg">
                  {menuData[item.key as keyof typeof menuData].map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.href}
                      onClick={toggleMenu}
                      className="text-base text-gray-800 active:text-red-600"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <Link href="/contact" onClick={toggleMenu} className="text-xl font-bold border-b pb-3">
            Contact
          </Link>

          <Link
            href="/contact"
            onClick={toggleMenu}
            className="bg-red-600 text-white p-4 text-center rounded-lg font-bold mt-4 shadow-md"
          >
            Job Seekers and Recruiters
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;