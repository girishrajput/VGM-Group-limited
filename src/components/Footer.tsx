"use client";

import ContactSection from '@/components/home/ContactSection'
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  // 1. Updated Sections with names and actual URLs
  const sections = [
    {
      title: "Our Portals",
      links: [
        { name: "Job & Recruiters", href: "/portals/jobandrecruiters" },
        { name: "GMC Properties", href: "/portals/gmc-properties" },
        { name: "Quick Biz", href: "/portals/quick-biz" },
        { name: "VGM Group travel and tours", href: "/portals/vgmgroup-travelandtours" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Web Designing", href: "/services/web-designing" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Mobile App Development", href: "/services/mobileapp-development" },
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "WhatsApp Business Solutions", href: "/services/whatsappbusiness-solutions" },
        { name: "Promotional Video Services", href: "/services/promotional-videoservices" }
      ]
    },
    {
      title: "Products",
      links: [
        { name: "Business Process Outsourcing (BPO)", href: "/products/business-processoutsourcing" },
        { name: "HR & Payroll Management Software", href: "/products/hrpayroll-management" },
        { name: "HR Solutions", href: "/products/hr-solutions" },
        { name: "Digital Services", href: "/products/digital-services" }
      ]
    }
  ];

  const industries = [
    { name: "Real Estate", href: "/industries/real-estate" },
    { name: "Jobs & Recruiters", href: "/industries/jobs-recruiters" },
    { name: "Matrimonial", href: "/industries/matrimonial" },
    { name: "B2B/B2C", href: "/industries/b2b-b2c" },
    { name: "E-Commerce", href: "/industries/e-commerce" },
    { name: "School & Education", href: "/industries/school-education" },
    { name: "Travel", href: "/industries/travel" },
  ];

  const bottomLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Career", href: "/career" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy", href: "/privacy" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Cookies Policy", href: "/cookies" },
  ];

  const socials = [
    { icon: Facebook, href: "https://facebook.com/...", label: "FB" },
    { icon: Twitter, href: "https://x.com/...", label: "TW" },
    { icon: Instagram, href: "https://instagram.com/...", label: "IG" },
    { icon: Linkedin, href: "https://linkedin.com/...", label: "LI" },
  ];

  return (
    <>
      <ContactSection />
      <footer className="bg-[#050505] text-white pt-16 pb-8 px-6 font-sans border-t border-zinc-900">
        <div className="max-w-7xl mx-auto">

          {/* Main Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-12">

            {/* Brand/About Column */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/">
                  <Image
                    src="/images/vgmlogo.png"
                    alt="VGM Logo"
                    width={160}
                    height={50}
                    className="object-contain filter brightness-0 invert"
                  />
                </Link>
              </div>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                As a diversified consulting firm focused on HR solutions and digital services, 
                VGM Group Limited welcomes partnerships across all sectors.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4">
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-zinc-500 hover:text-red-600 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon size={20} strokeWidth={1.5} />
                  </a>
                ))}
              </div>
            </div>

            {/* Dynamic Sections */}
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-100 mb-6">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link 
                        href={link.href} 
                        className="group text-zinc-400 hover:text-red-500 text-sm transition-colors duration-200 flex items-center"
                      >
                        <span className="w-0 group-hover:w-2 h-[1px] bg-red-500 mr-0 group-hover:mr-2 transition-all"></span>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Industries Column */}
            <div className="lg:col-span-1">
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-100 mb-6">
                Industries
              </h3>
              <ul className="flex flex-col gap-3">
                {industries.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href} 
                      className="text-zinc-400 hover:text-red-500 text-sm transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Quick Links Bar */}
          <div className="py-8 border-t border-zinc-900 flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
              {bottomLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs text-zinc-500 hover:text-zinc-200 transition"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Bottom Credits */}
          <div className="pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.2em] text-zinc-600">
            <p>© {new Date().getFullYear()} VGM Group Limited. All Rights Reserved.</p>
            <p>Designed with ❤️</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;