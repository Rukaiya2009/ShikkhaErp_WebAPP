/* src/app/about/page.tsx */
import Link from 'next/link';
import { 
  HeartIcon, 
  LightBulbIcon, 
  UsersIcon, 
  ShieldCheckIcon,
  CogIcon,
  ChartBarIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: "About Us – ShikkhaERP",
  description: "ShikkhaERP: Smart school management for Bangladesh. Trusted by 500+ schools.",
};

export default function AboutPage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary-light text-white overflow-hidden py-24 lg:py-32">
        {/* Animated background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -translate-y-24 translate-x-24 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl translate-y-24 -translate-x-24 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl" />

        <div className="relative container-custom text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-4 py-1.5 rounded-full mb-4 border border-white/20">
            🇧🇩 Made in Bangladesh
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold leading-tight mb-6 text-white">
            Thinks, Scales, and <br />
            <span className="text-accent-light">Protects</span>
          </h1>
          
          <p className="text-lg md:text-xl text-accent-light/90 max-w-3xl mx-auto leading-relaxed">
            We build school management systems for Bangladesh — smart, secure, and built for growth.
            Trusted by <strong className="text-white">500+ schools</strong> nationwide.
          </p>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/10 pt-8">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">500+</div>
              <div className="text-sm text-accent-light">Schools Trust Us</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">250K+</div>
              <div className="text-sm text-accent-light">Students Managed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">98%</div>
              <div className="text-sm text-accent-light">Satisfaction Rate</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-white">24/7</div>
              <div className="text-sm text-accent-light">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== OUR STORY ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Building the Future of Education Technology
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              ShikkhaERP is a school management system built <strong>in Bangladesh — for Bangladesh</strong>. 
              We combine smart automation, secure infrastructure, and scalable design to help 
              schools manage everything from admissions to payroll without the headaches.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Whether you run a small school in a district or a large institution in Dhaka, 
              our platform adapts to your workflow — not the other way around.
            </p>
          </div>
        </div>
      </section>

      {/* ===== THREE PILLARS ===== */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Our Pillars
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              What Drives Us
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                <LightBulbIcon className="w-8 h-8 text-accent group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">Think</h3>
              <p className="text-gray-600">
                We build smart systems that automate manual work so teachers can focus on students — not spreadsheets.
              </p>
              <div className="mt-4 text-sm text-accent font-medium">→ Automated dashboards</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                <ChartBarIcon className="w-8 h-8 text-accent group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">Scale</h3>
              <p className="text-gray-600">
                From 100 students to 5,000 — our platform grows with you without breaking or slowing down.
              </p>
              <div className="mt-4 text-sm text-accent font-medium">→ Unlimited scalability</div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition group">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                <ShieldCheckIcon className="w-8 h-8 text-accent group-hover:text-white transition" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-primary mb-3">Protect</h3>
              <p className="text-gray-600">
                Security isn't an afterthought — it's built in. We protect student data with enterprise-grade encryption.
              </p>
              <div className="mt-4 text-sm text-accent font-medium">→ Built-in security</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Our Services
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-light rounded-xl p-8 text-center hover:shadow-md transition border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <CogIcon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-lg">Implementation</h3>
              <p className="text-sm text-gray-600 mt-1">Data migration & setup</p>
            </div>
            
            <div className="bg-light rounded-xl p-8 text-center hover:shadow-md transition border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <UsersIcon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-lg">Staff Training</h3>
              <p className="text-sm text-gray-600 mt-1">Live workshops & tutorials</p>
            </div>
            
            <div className="bg-light rounded-xl p-8 text-center hover:shadow-md transition border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <GlobeAltIcon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-lg">Custom Development</h3>
              <p className="text-sm text-gray-600 mt-1">Tailored modules & APIs</p>
            </div>
            
            <div className="bg-light rounded-xl p-8 text-center hover:shadow-md transition border border-gray-100">
              <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <HeartIcon className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-semibold text-primary text-lg">Ongoing Support</h3>
              <p className="text-sm text-gray-600 mt-1">24/7 help & maintenance</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TEAM PREVIEW ===== */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Leadership
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Meet Our Team
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              The dedicated people behind ShikkhaERP.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Farhana Hoque", role: "CEO & Founder", img: "https://i.pravatar.cc/300?img=1" },
              { name: "Rukaiya Binte Shafique", role: "Lead Strategist", img: "https://i.pravatar.cc/300?img=5" },
              { name: "Md. Kamal Hossain", role: "Lead Developer", img: "https://i.pravatar.cc/300?img=3" },
              { name: "Sarah Ahmed", role: "Product Manager", img: "https://i.pravatar.cc/300?img=9" },
            ].map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center hover:shadow-lg transition">
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-accent/20">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="font-semibold text-primary">{member.name}</h4>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/team" className="text-accent font-medium hover:underline">
              View Full Team →
            </Link>
          </div>
        </div>
      </section>

      {/* ===== VALUES ===== */}
      <section className="py-20 bg-primary text-white">
        <div className="container-custom text-center">
          <span className="inline-block bg-white/10 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
            Our Values
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8">
            What We Stand For
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition border border-white/10">
              <HeartIcon className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-white">Passion</h3>
              <p className="text-sm text-accent-light">We care about education.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition border border-white/10">
              <LightBulbIcon className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-white">Innovation</h3>
              <p className="text-sm text-accent-light">We build for tomorrow.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition border border-white/10">
              <UsersIcon className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-white">Customer First</h3>
              <p className="text-sm text-accent-light">Your success is ours.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition border border-white/10">
              <ShieldCheckIcon className="w-8 h-8 text-accent-light mx-auto mb-3" />
              <h3 className="font-semibold text-white">Trust</h3>
              <p className="text-sm text-accent-light">Protection built in, not bolted on.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MISSION & VISION ===== */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-light rounded-2xl p-8 border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <GlobeAltIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower every school in Bangladesh with intelligent, secure, and 
                scalable technology that simplifies operations and improves outcomes.
              </p>
            </div>
            
            <div className="bg-light rounded-2xl p-8 border border-gray-100 hover:shadow-md transition">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <AcademicCapIcon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-2">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To become Bangladesh's most trusted school management platform — 
                where every school, from district to city, runs on ShikkhaERP.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="bg-gradient-to-r from-primary via-primary-light to-accent/30 py-20">
        <div className="container-custom text-center">
          <h3 className="text-3xl font-heading font-bold text-white mb-4">
            Ready to transform your school?
          </h3>
          <p className="text-accent-light text-lg mb-8 max-w-2xl mx-auto">
            Join 500+ schools across Bangladesh already running on ShikkhaERP.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Get Started Today
            </Link>
            <Link
              href="/features"
              className="inline-block border border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}