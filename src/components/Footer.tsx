'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = [
    { Icon: FaFacebookF, color: '#1877f2', url: 'https://facebook.com/shikkhaerp', name: 'Facebook' },
    { Icon: FaTwitter, color: '#1da1f2', url: 'https://twitter.com/shikkhaerp', name: 'Twitter' },
    { Icon: FaLinkedinIn, color: '#0077b5', url: 'https://linkedin.com/company/shikkhaerp', name: 'LinkedIn' },
    { Icon: FaYoutube, color: '#ff0000', url: 'https://youtube.com/@shikkhaerp', name: 'YouTube' },
    { Icon: FaInstagram, color: '#e4405f', url: 'https://instagram.com/shikkhaerp', name: 'Instagram' },
  ];

  const paymentMethods = [
    { name: 'bKash', bgColor: '#e2136e', textColor: 'white' },
    { name: 'Nagad', bgColor: '#f58020', textColor: 'white' },
    { name: 'Rocket', bgColor: '#00a651', textColor: 'white' },
    { name: 'VISA', bgColor: '#1a1f71', textColor: 'white' },
    { name: 'Mastercard', bgColor: '#eb001b', textColor: 'white' },
  ];

  return (
    <footer className="bg-primary text-blue-200 py-16">
      <div className="container-custom">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">SE</span>
              </div>
              <div>
                <div className="text-xl font-bold text-white">Shikkha<span className="text-blue-300">ERP</span></div>
                <div className="text-xs text-blue-300">Smart School Management</div>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">
              Smart solutions for modern education management. Empowering schools with innovative ERP and LMS technology since 2024.
            </p>
            
            {/* Social Media Icons */}
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

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/features" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Support</h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="/help" className="hover:text-white transition-colors">Help Center</Link></li>
              <li><Link href="/faq" className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
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

        {/* Trust Badges Row */}
        <div className="flex flex-wrap justify-between items-center gap-6 py-6 border-y border-primary-light/20 mb-8">
          <div className="flex flex-wrap gap-8">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">🔒</span>
              <span>100% Secure SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">💳</span>
              <span>Easy Payment</span>
              <span className="text-xs text-blue-300">bKash, Nagad, Rocket</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">📱</span>
              <span>Mobile Ready</span>
              <span className="text-xs text-blue-300">Access anywhere</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-xl">☁️</span>
              <span>Cloud Based</span>
              <span className="text-xs text-blue-300">24/7 Availability</span>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center mb-8">
          <p className="text-sm text-blue-300 mb-4">Easy Payment</p>
          <div className="flex justify-center flex-wrap gap-3">
            {paymentMethods.map((method, index) => (
              <span
                key={index}
                style={{ backgroundColor: method.bgColor, color: method.textColor }}
                className="px-6 py-2 rounded-full text-sm font-semibold tracking-wide"
              >
                {method.name}
              </span>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 border-t border-primary-light/20">
          <p className="text-sm text-blue-300">
            © {currentYear} ShikkhaERP. All rights reserved. | Developed by ShikkhaERP Team
          </p>
        </div>
      </div>
    </footer>
  );
}