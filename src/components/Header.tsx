"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "@/data/navigation";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm"
          : "bg-white"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-bold text-lg">
            S
          </div>
          <span className="text-xl font-heading font-semibold text-secondary hidden sm:block">
            Shikkha<span className="text-primary">ERP</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center bg-gray-100 rounded-full px-1 py-1 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white shadow-sm text-secondary"
                    : "text-gray-600 hover:text-secondary hover:bg-gray-200/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        <div className="hidden md:block">
          <Link
            href="/contact"
            className="bg-cta text-white px-5 py-1.5 rounded-full text-sm font-medium hover:bg-orange-600 transition shadow-sm"
          >
            Get Started
          </Link>
        </div>
        <button
          className="md:hidden p-2 text-secondary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </nav>
      {mobileOpen && (
        <div className="md:hidden bg-white border-t px-4 pb-4 space-y-1 pt-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-2 px-3 rounded-lg text-secondary hover:bg-gray-50 transition"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-3 text-center bg-cta text-white py-2 rounded-lg font-medium"
            onClick={() => setMobileOpen(false)}
          >
            Get Started
          </Link>
        </div>
      )}
    </header>
  );
}
