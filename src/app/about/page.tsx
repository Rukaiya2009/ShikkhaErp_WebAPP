import Link from "next/link";
import {
  HeartIcon,
  LightBulbIcon,
  UsersIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  BuildingOfficeIcon,
  GlobeAltIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

export const metadata = {
  title: "About Us – IT Data Science Ltd",
  description: "Learn about IT Data Science Ltd, the company behind ShikkhaERP. Our mission, vision, values, and journey in transforming education in Bangladesh.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-blue-800 text-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">Our Story</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Transforming Education <br /><span className="text-accent">Through Technology</span></h1>
          <p className="mt-6 text-lg text-blue-100 max-w-3xl mx-auto">We're on a mission to empower every school in Bangladesh with smart, affordable, and innovative technology solutions.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">Start Your Journey</Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">Request a Demo</Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3"><BuildingOfficeIcon className="w-6 h-6 text-primary" /></div><h3 className="text-3xl font-heading font-bold text-secondary">500+</h3><p className="text-gray-500 text-sm">Schools Trust Us</p></div>
            <div className="text-center"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3"><UsersIcon className="w-6 h-6 text-primary" /></div><h3 className="text-3xl font-heading font-bold text-secondary">100K+</h3><p className="text-gray-500 text-sm">Students Managed</p></div>
            <div className="text-center"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3"><AcademicCapIcon className="w-6 h-6 text-primary" /></div><h3 className="text-3xl font-heading font-bold text-secondary">50+</h3><p className="text-gray-500 text-sm">Teachers Using</p></div>
            <div className="text-center"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3"><ClockIcon className="w-6 h-6 text-primary" /></div><h3 className="text-3xl font-heading font-bold text-secondary">4+</h3><p className="text-gray-500 text-sm">Years of Excellence</p></div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4"><HeartIcon className="w-6 h-6 text-primary" /></div><h3 className="text-xl font-heading font-semibold text-secondary mb-3">Our Mission</h3><p className="text-gray-600 leading-relaxed">To empower educational institutions with intelligent, scalable, and technology-driven solutions that simplify operations, enhance learning experiences, and drive sustainable digital transformation across Bangladesh.</p></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8"><div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4"><GlobeAltIcon className="w-6 h-6 text-accent" /></div><h3 className="text-xl font-heading font-semibold text-secondary mb-3">Our Vision</h3><p className="text-gray-600 leading-relaxed">To become the leading provider of smart education technology in Bangladesh, transforming traditional schools into fully digital, efficient, and future-ready institutions.</p></div>
          </div>
        </div>
      </section>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1"><span className="text-sm font-semibold text-primary uppercase tracking-wide">Who We Are</span><h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-6">Building the Future of <br /><span className="text-primary">Education Technology</span></h2><p className="text-gray-600 leading-relaxed mb-4"><strong>IT Data Science Ltd</strong> is a forward-thinking technology company dedicated to delivering smart, scalable, and innovative digital solutions for educational institutions across Bangladesh.</p><p className="text-gray-600 leading-relaxed mb-6">Founded in 2020, we've grown from a small startup to a trusted partner for over 500 schools, helping them transition from traditional manual processes to fully automated digital systems.</p><div className="grid grid-cols-1 sm:grid-cols-2 gap-4"><div className="flex items-center gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-600">100% Bangladeshi Solution</span></div><div className="flex items-center gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-600">Affordable Pricing</span></div><div className="flex items-center gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-600">24/7 Local Support</span></div><div className="flex items-center gap-2"><span className="text-green-500">✓</span><span className="text-sm text-gray-600">Free Training Included</span></div></div></div>
            <div className="flex-1"><div className="bg-blue-50 rounded-2xl p-8 border border-blue-100"><div className="text-primary text-5xl mb-4 font-serif">"</div><p className="text-gray-700 leading-relaxed text-lg italic">We believe technology should simplify, not complicate. Our platform is built by educators, for educators, understanding the real challenges schools face daily.</p><div className="mt-4 flex items-center gap-3"><div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">FH</div><div><p className="font-semibold text-secondary">Farhana Hoque</p><p className="text-sm text-gray-500">CEO & Founder</p></div></div></div></div>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"><span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Principles</span><h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2 mb-4">Core Values That Drive Us</h2><p className="text-gray-500 max-w-2xl mx-auto mb-12">These principles guide everything we do.</p><div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><HeartIcon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-secondary">Passion for Education</h3><p className="text-sm text-gray-500 mt-2">We genuinely care about improving education quality.</p></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><LightBulbIcon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-secondary">Innovation First</h3><p className="text-sm text-gray-500 mt-2">Constantly evolving with the latest technology.</p></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><UsersIcon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-secondary">Customer Centric</h3><p className="text-sm text-gray-500 mt-2">Your success is our success.</p></div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-md transition"><div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4"><ShieldCheckIcon className="w-6 h-6 text-primary" /></div><h3 className="font-semibold text-secondary">Trust & Transparency</h3><p className="text-sm text-gray-500 mt-2">Honest communication and reliable solutions.</p></div>
          </div></div>
      </section>
      <section className="bg-white py-16"><div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"><div className="text-center mb-12"><span className="text-sm font-semibold text-primary uppercase tracking-wide">Our Journey</span><h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mt-2">Company Milestones</h2><p className="text-gray-500 mt-2">A timeline of our growth and achievements since day one.</p></div><div className="space-y-6">
            <div className="flex gap-4"><div className="shrink-0"><div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold">1</div></div><div className="bg-gray-50 rounded-xl p-5 flex-1"><span className="text-sm font-semibold text-green-600">2020</span><h3 className="text-lg font-heading font-semibold text-secondary">Company Founded</h3><p className="text-sm text-gray-500">Started with a vision to transform education.</p></div></div>
            <div className="flex gap-4"><div className="shrink-0"><div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold">2</div></div><div className="bg-gray-50 rounded-xl p-5 flex-1"><span className="text-sm font-semibold text-green-600">2021</span><h3 className="text-lg font-heading font-semibold text-secondary">First 100 Schools</h3><p className="text-sm text-gray-500">Reached 100 schools within first year.</p></div></div>
            <div className="flex gap-4"><div className="shrink-0"><div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold">3</div></div><div className="bg-gray-50 rounded-xl p-5 flex-1"><span className="text-sm font-semibold text-green-600">2022</span><h3 className="text-lg font-heading font-semibold text-secondary">Award Winning</h3><p className="text-sm text-gray-500">Best EduTech Startup Award.</p></div></div>
            <div className="flex gap-4"><div className="shrink-0"><div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold">4</div></div><div className="bg-gray-50 rounded-xl p-5 flex-1"><span className="text-sm font-semibold text-green-600">2023</span><h3 className="text-lg font-heading font-semibold text-secondary">1M Students</h3><p className="text-sm text-gray-500">Surpassed 1 million students managed.</p></div></div>
            <div className="flex gap-4"><div className="shrink-0"><div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-700 rounded-full flex items-center justify-center text-white font-bold">5</div></div><div className="bg-gray-50 rounded-xl p-5 flex-1"><span className="text-sm font-semibold text-green-600">2024</span><h3 className="text-lg font-heading font-semibold text-secondary">National Recognition</h3><p className="text-sm text-gray-500">Recognized by Ministry of Education.</p></div></div>
          </div></div></section>
    </>
  );
}