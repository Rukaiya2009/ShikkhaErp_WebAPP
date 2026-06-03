/* src/app/page.tsx */
import Link from 'next/link';
import { 
  ArrowRightIcon, 
  CheckCircleIcon,
  AcademicCapIcon,
  UsersIcon,
  CreditCardIcon,
  BookOpenIcon,
  GlobeAltIcon,
  ChartBarIcon
} from '@heroicons/react/24/outline';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-custom text-center">
          <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4">
            🇧🇩 Made for Bangladesh
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            Complete School Management. <br />
            <span className="text-accent">One Powerful Platform.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            The all-in-one School ERP trusted by <strong className="text-primary">500+ schools</strong> across Bangladesh to streamline operations, engage parents, and deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-hover transition shadow-md"
            >
              Request a Free Demo
            </Link>
            <Link
              href="/features"
              className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition"
            >
              Explore Features
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="bg-primary py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
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

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Everything Your School Needs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              From admissions to report cards, ShikkhaERP covers every aspect of school administration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: AcademicCapIcon,
                title: "Student Management", 
                desc: "Complete student lifecycle from admission to alumni tracking." 
              },
              { 
                icon: UsersIcon,
                title: "Attendance Tracking", 
                desc: "Real-time attendance with automated parent notifications." 
              },
              { 
                icon: CreditCardIcon,
                title: "Fee Management", 
                desc: "Automated fee collection with online payment gateway integration." 
              },
              { 
                icon: BookOpenIcon,
                title: "Exam & Results", 
                desc: "Online exams, auto-grading, and instant result generation." 
              },
              { 
                icon: ChartBarIcon,
                title: "Payroll System", 
                desc: "Automated staff salary processing with tax calculations." 
              },
              { 
                icon: GlobeAltIcon,
                title: "Parent Portal", 
                desc: "Real-time access for parents to track student progress." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition group">
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent transition">
                  <feature.icon className="w-7 h-7 text-accent group-hover:text-white transition" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link href="/features" className="text-accent font-medium hover:underline">
              View All Features →
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-light">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Get Started in 4 Simple Steps
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Request Demo", desc: "Fill out the form and we'll show you ShikkhaERP in action." },
              { step: "02", title: "Onboarding", desc: "We help you set up your school data effortlessly." },
              { step: "03", title: "Configure", desc: "Customize features to match your school's workflow." },
              { step: "04", title: "Go Live", desc: "Start managing your school with confidence." },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 bg-accent text-white rounded-2xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-heading font-semibold text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-14">
            <span className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Pricing
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">
              Simple, Transparent Pricing
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              No hidden fees. Scale as you grow.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                name: "Basic", 
                price: "৳9", 
                students: "Up to 300", 
                features: ["SMS Notifications", "Parent Portal", "Attendance", "Reports"] 
              },
              { 
                name: "Standard", 
                price: "৳7", 
                students: "Up to 800", 
                features: ["Everything in Basic", "Online Payment", "Payroll", "Exams & Results"],
                popular: true 
              },
              { 
                name: "Premium", 
                price: "৳5", 
                students: "Unlimited", 
                features: ["Everything in Standard", "Custom Branding", "API Access", "Multi-school Support"] 
              },
            ].map((plan, idx) => (
              <div key={idx} className={`relative bg-white p-8 rounded-2xl shadow-sm border ${
                plan.popular ? 'border-accent ring-2 ring-accent/20 shadow-lg' : 'border-gray-200'
              }`}>
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-heading font-bold text-primary mb-2">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{plan.students} students</p>
                <div className="text-3xl font-bold text-primary mb-4">
                  {plan.price}<span className="text-sm text-gray-500">/student/month</span>
                </div>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircleIcon className="w-4 h-4 text-accent" />
                      {feat}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`block text-center py-2.5 rounded-lg font-medium transition ${
                    plan.popular
                      ? 'bg-accent text-white hover:bg-accent-light'
                      : 'border border-accent text-accent hover:bg-accent hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <CTASection />
    </>
  );
}