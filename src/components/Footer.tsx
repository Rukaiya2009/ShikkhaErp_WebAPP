import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-xl font-heading font-semibold">
              Shikkha<span className="text-primary">ERP</span>
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Smart School Management System by IT Data Science.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white transition"><span className="sr-only">Facebook</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><span className="sr-only">Twitter</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><span className="sr-only">LinkedIn</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
              <a href="#" className="text-gray-400 hover:text-white transition"><span className="sr-only">YouTube</span><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg></a>
            </div>
          </div>
          <div><h4 className="font-semibold mb-3">Product</h4><ul className="space-y-2 text-sm text-gray-300"><li><Link href="/features" className="hover:text-white">Features</Link></li><li><Link href="/pricing" className="hover:text-white">Pricing</Link></li><li><Link href="/blog" className="hover:text-white">Blog</Link></li><li><Link href="/testimonials" className="hover:text-white">Testimonials</Link></li></ul></div>
          <div><h4 className="font-semibold mb-3">Company</h4><ul className="space-y-2 text-sm text-gray-300"><li><Link href="/about" className="hover:text-white">About Us</Link></li><li><Link href="/team" className="hover:text-white">Team</Link></li><li><Link href="/contact" className="hover:text-white">Contact</Link></li></ul></div>
          <div><h4 className="font-semibold mb-3">Legal</h4><ul className="space-y-2 text-sm text-gray-300"><li><Link href="/terms" className="hover:text-white">Terms & Conditions</Link></li><li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li><li><Link href="/faq" className="hover:text-white">FAQ</Link></li></ul></div>
          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start gap-2"><span className="text-gray-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg></span> 35/1, Siddheswari, Ramna, Dhaka</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg></span> +880 1714-090224</li>
              <li className="flex items-start gap-2"><span className="text-gray-400 hover:text-white transition"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg></span> info@shikkhaerp.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6">
          <div className="flex flex-wrap justify-between items-center gap-4 text-sm text-gray-300">
            <div className="flex items-center gap-2"><span className="text-green-400 text-lg font-bold">✓</span><span><strong>100% Secure</strong><br /><span className="text-xs text-gray-500">SSL Encrypted</span></span></div>
            <div className="flex items-center gap-2"><span className="text-green-400 text-lg font-bold">✓</span><span><strong>Easy Payment</strong><br /><span className="text-xs text-gray-500">bKash, Nagad, Rocket</span></span></div>
            <div className="flex items-center gap-2"><span className="text-green-400 text-lg font-bold">✓</span><span><strong>Mobile Ready</strong><br /><span className="text-xs text-gray-500">Access anywhere</span></span></div>
            <div className="flex items-center gap-2"><span className="text-green-400 text-lg font-bold">✓</span><span><strong>Cloud Based</strong><br /><span className="text-xs text-gray-500">24/7 Availability</span></span></div>
          </div>
          <div className="text-center text-xs text-gray-500 mt-6">© {new Date().getFullYear()} IT Data Science. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
