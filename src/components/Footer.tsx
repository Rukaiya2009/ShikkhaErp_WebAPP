/* src/components/Footer.tsx */
'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: FaFacebookF, color: '#1877f2', url: '#' },
    { Icon: FaTwitter, color: '#1da1f2', url: '#' },
    { Icon: FaLinkedinIn, color: '#0077b5', url: '#' },
    { Icon: FaYoutube, color: '#ff0000', url: '#' },
    { Icon: FaInstagram, color: '#e4405f', url: '#' },
  ];

  return (
    <footer className="bg-primary border-t border-white/10 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-bold text-lg">
                S
              </div>
              <span className="text-xl font-heading font-bold text-white">
                Shikkha<span className="text-accent-light">ERP</span>
              </span>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Smart school management for Bangladesh. Trusted by 500+ schools.
            </p>
            <div className="flex gap-3 mt-4">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  style={{ backgroundColor: social.color }}
                  className="w-8 h-8 rounded-full flex items-center justify-center transition hover:scale-110"
                >
                  <social.Icon className="text-white text-sm" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-accent-light transition">About Us</Link></li>
              <li><Link href="/features" className="hover:text-accent-light transition">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-accent-light transition">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-accent-light transition">Contact</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/faq" className="hover:text-accent-light transition">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-accent-light transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-accent-light transition">Terms</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2 items-center">📍 Dhaka, Bangladesh</li>
              <li className="flex gap-2 items-center">📞 +880 1319-719968</li>
              <li className="flex gap-2 items-center">📧 info@shikkhaerp.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-400">
          <p>© {currentYear} ShikkhaERP. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}