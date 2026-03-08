"use client"; // Required for useState in Next.js App Router

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Submenu items data
  const portals = [
    { name: 'Client Portal', href: '/portals/client' },
    { name: 'Partner Portal', href: '/portals/partner' },
  ];

  return (
    <header className="fixed w-full z-50 bg-white text-black shadow-md">
      <div className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        {/* Logo */}
        <Link href="/">
          <Image
            src="/images/vgm-logo.png"
            alt="IRCOIT Logo"
            width={150}
            height={50}
            priority
            className="object-contain cursor-pointer"
          />
        </Link>

        {/* Mobile Menu Button */}
        <button 
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
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 items-center">
            <Link href="/" className="hover:text-red-600 transition">Home</Link>
            <Link href="/About" className="hover:text-red-400 transition">About</Link>
            
            {/* Portals Submenu */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setActiveSubmenu('portals')}
              onMouseLeave={() => setActiveSubmenu(null)}
            >
              <button className="flex items-center gap-1 hover:text-red-600 transition">
                Our Portals
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              <div className="absolute top-full left-0 hidden group-hover:block bg-white shadow-lg rounded-md py-2 w-48 border border-gray-100">
                {portals.map((item) => (
                  <Link key={item.name} href={item.href} className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
<Link href="/" className="hover:text-red-400 transition">Products </Link>
            <Link href="/" className="hover:text-red-400 transition">Industries </Link>
            <Link href="/Service" className="hover:text-red-400 transition">Service</Link>
            <Link href="/Contact" className="hover:text-red-400 transition">Contact</Link>
          </nav>

          <Link href="/Contact" className="bg-red-600 px-6 py-2 text-white rounded-lg hover:bg-red-700 transition">
            Book a Free Consultation
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t border-gray-100 p-4 space-y-4`}>
        <nav className="flex flex-col gap-4">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/About" onClick={toggleMenu}>About</Link>
          
          {/* Mobile Accordion Submenu */}
          <div>
            <button 
              onClick={() => setActiveSubmenu(activeSubmenu === 'portals' ? null : 'portals')}
              className="flex justify-between w-full"
            >
              Our Portals <span>{activeSubmenu === 'portals' ? '-' : '+'}</span>
            </button>
            {activeSubmenu === 'portals' && (
              <div className="pl-4 mt-2 flex flex-col gap-2 text-gray-600 text-sm">
                {portals.map((item) => (
                  <Link key={item.name} href={item.href} onClick={toggleMenu}>{item.name}</Link>
                ))}
              </div>
            )}
          </div>

          <Link href="/Service" onClick={toggleMenu}>Service</Link>
          <Link href="/Contact" onClick={toggleMenu} className="bg-red-600 text-white p-3 text-center rounded-lg">
            Book a Free Consultation
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;