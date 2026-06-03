/* src/components/Header.tsx */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { navLinks } from '@/data/navigation';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-primary/95 backdrop-blur-md shadow-lg' 
        : 'bg-primary shadow-md'
    }`}>
      <nav className="container-custom flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="w-8 h-8 lg:w-10 lg:h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg lg:text-xl">
            S
          </div>
          <span className="text-lg lg:text-xl font-heading font-bold text-white">
            Shikkha<span className="text-accent-light">ERP</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center bg-primary-light/30 rounded-full px-1 py-1 gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-white shadow-sm text-primary'
                      : 'text-gray-300 hover:text-white hover:bg-primary-light/50'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-cta text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-cta-hover transition shadow-md"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white hover:bg-primary-light/30 rounded-lg transition"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-primary border-t border-primary-light/30 px-4 pb-4 space-y-1 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 px-3 rounded-lg text-gray-300 hover:text-white hover:bg-primary-light/30 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 text-center bg-cta text-white py-2 rounded-lg font-medium hover:bg-cta-hover transition"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}