/* src/components/Footer.tsx */
'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: FaFacebookF, color: '#1877f2', url: 'https://facebook.com/shikkhaerp' },
    { Icon: FaTwitter, color: '#1da1f2', url: 'https://twitter.com/shikkhaerp' },
    { Icon: FaLinkedinIn, color: '#0077b5', url: 'https://linkedin.com/company/shikkhaerp' },
    { Icon: FaYoutube, color: '#ff0000', url: 'https://youtube.com/@shikkhaerp' },
    { Icon: FaInstagram, color: '#e4405f', url: 'https://instagram.com/shikkhaerp' },
  ];

  const paymentMethods = [
    { name: 'bKash', bgColor: '#e2136e' },
    { name: 'Nagad', bgColor: '#f58020' },
    { name: 'Rocket', bgColor: '#00a651' },
    { name: 'VISA', bgColor: '#1a1f71' },
    { name: 'Mastercard', bgColor: '#eb001b' },
  ];

  return (
    <footer className="bg-primary text-gray-300 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-white">SE</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Shikkha<span className="text-accent-light">ERP</span></div>
                <div className="text-xs text-accent-light">Smart School Management</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Smart solutions for modern education management. Empowering schools with innovative ERP and LMS technology since 2024.
            </p>
            <div className="flex gap-3">
              {socialIcons.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ backgroundColor: social.color }}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-transform hover:scale-110 hover:shadow-lg"
                >
                  <social.Icon className="text-white text-lg" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-accent-light transition-colors">About Us</Link></li>
              <li><Link href="/features" className="hover:text-accent-light transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-accent-light transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-accent-light transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/help" className="hover:text-accent-light transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-accent-light transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-accent-light transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-accent-light transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">📍 <span>35/1 Siddheswari Circular Road, Dhaka, Bangladesh</span></li>
              <li className="flex gap-3">📞 <span>+880 1319-719968</span></li>
              <li className="flex gap-3">📧 <span>info@shikkhaerp.com</span></li>
              <li className="flex gap-3">📅 <span>Mon-Fri: 9AM - 6PM</span></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between items-center gap-6 py-6 border-y border-gray-700/50 mb-8">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">🔒</span>
              <span>100% Secure SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">💳</span>
              <span>Easy Payment</span>
              <span className="text-xs text-accent-light">bKash, Nagad, Rocket</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">📱</span>
              <span>Mobile Ready</span>
              <span className="text-xs text-accent-light">Access anywhere</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">☁️</span>
              <span>Cloud Based</span>
              <span className="text-xs text-accent-light">24/7 Availability</span>
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-accent-light mb-4">Easy Payment</p>
          <div className="flex justify-center flex-wrap gap-3">
            {paymentMethods.map((method, index) => (
              <span
                key={index}
                style={{ backgroundColor: method.bgColor }}
                className="px-6 py-2 rounded-full text-sm font-semibold text-white tracking-wide"
              >
                {method.name}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center pt-6 border-t border-gray-700/50">
          <p className="text-sm text-gray-400">
            © {currentYear} ShikkhaERP. All rights reserved. | Developed by ShikkhaERP Team
          </p>
        </div>
      </div>
    </footer>
  );
}