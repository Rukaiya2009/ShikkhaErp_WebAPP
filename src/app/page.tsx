/* src/app/page.tsx */
import Link from 'next/link';
import CTASection from '@/components/CTASection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight mb-6">
            Complete School Management. <br />
            <span className="text-accent">One Powerful Platform.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            The all-in-one School ERP trusted by Bangladesh schools to streamline operations, engage parents, and deliver results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-hover transition shadow-md"
            >
              Request a Free Demo
            </Link>
            <button className="border-2 border-accent text-accent px-8 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition">
              ▶ Watch a Video
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
            Everything Your School Needs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Student Management", desc: "Complete student lifecycle management" },
              { title: "Attendance Tracking", desc: "Real-time attendance with notifications" },
              { title: "Fee Management", desc: "Automated fee collection and invoicing" },
              { title: "Exam & Results", desc: "Online exams and instant results" },
              { title: "Payroll System", desc: "Automated staff salary processing" },
              { title: "Parent Portal", desc: "Parent access to student progress" },
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <h3 className="text-xl font-heading font-semibold text-primary mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary text-center mb-12">
            Simple, Transparent Pricing
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Basic", price: "৳9", students: "Up to 300" },
              { name: "Standard", price: "৳7", students: "Up to 800", popular: true },
              { name: "Premium", price: "৳5", students: "Unlimited" },
            ].map((plan, idx) => (
              <div key={idx} className={`relative bg-white p-8 rounded-xl shadow-sm border ${plan.popular ? 'border-accent ring-2 ring-accent/20' : 'border-gray-200'}`}>
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
                <Link
                  href="/contact"
                  className={`block text-center py-2 rounded-lg font-medium transition ${
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

      {/* CTA Section */}
      <CTASection />
    </>
  );
}