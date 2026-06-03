import Link from 'next/link';
import { 
  ClockIcon, 
  DocumentTextIcon, 
  UserGroupIcon, 
  BanknotesIcon, 
  ChartBarIcon, 
  ShieldCheckIcon,
  BookOpenIcon,
  CheckCircleIcon,
  CreditCardIcon,
  PencilSquareIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/outline';

// Simple FAQ component (to avoid missing import)
function SimpleFAQ({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-3 p-5">
      <h4 className="font-semibold text-primary">{question}</h4>
      <p className="text-gray-600 text-sm mt-2">{answer}</p>
    </div>
  );
}

export default function HomePage() {
  const painPoints = [
    { icon: ClockIcon, title: 'Time-consuming administrative tasks', desc: 'Hours lost every week on manual processes.' },
    { icon: DocumentTextIcon, title: 'Attendance tracking difficulties', desc: 'Errors and late reports affect decision making.' },
    { icon: BanknotesIcon, title: 'Fee collection inefficiencies', desc: 'Tracking payments on paper or spreadsheets.' },
    { icon: UserGroupIcon, title: 'Disconnected communication channels', desc: 'Parents out of the loop until problems escalate.' },
    { icon: DocumentTextIcon, title: 'Delayed report generation', desc: 'Report cards generated manually before exams.' },
    { icon: ChartBarIcon, title: 'Limited visibility into performance', desc: 'No analytics to monitor school-wide data.' },
  ];

  const benefits = [
    { icon: BookOpenIcon, title: 'Centralized Student Records', desc: 'Complete profiles from admission to graduation.' },
    { icon: CheckCircleIcon, title: 'Automated Attendance', desc: 'Digital tracking with real-time reports.' },
    { icon: CreditCardIcon, title: 'Digital Fee Processing', desc: 'Billing, collections, and online payments in one flow.' },
    { icon: PencilSquareIcon, title: 'Examination & Results', desc: 'Create exams, enter marks, auto-generate report cards.' },
    { icon: ChatBubbleLeftRightIcon, title: 'Parent Engagement', desc: 'Guardians get real-time updates on fees, attendance, results.' },
    { icon: ChartBarIcon, title: 'Analytics Dashboard', desc: 'Monitor academic and operational health at a glance.' },
    { icon: ShieldCheckIcon, title: 'Role-Based Security', desc: 'Secure access for admin, teachers, staff, and parents.' },
  ];

  const featureModules = [
    'Student Enrollment', 'Academic Records', 'Timetable Scheduling',
    'Attendance Tracking', 'Faculty Directory', 'Staff Administration',
    'Payroll Processing', 'Fee Collection', 'Online Payments (bKash/Nagad)',
    'Examination System', 'Result Publishing', 'Parent Portal',
    'SMS Alerts', 'Analytics Dashboard'
  ];

  const faqs = [
    { question: 'Is ShikkhaERP cloud-based? Do we need to install anything?', answer: 'No installation required. ShikkhaERP runs entirely in the browser — accessible securely from any device with an internet connection.' },
    { question: 'How long does it take to set up for our school?', answer: 'Most schools are fully operational within a few days. Our team handles setup, data import, and staff training.' },
    { question: 'Can parents see their child\'s attendance, results, and fees?', answer: 'Yes. Parents get a dedicated portal with real-time access to their child\'s records and instant SMS alerts for key events.' },
    { question: 'Does ShikkhaERP support online fee payments?', answer: 'Yes. The platform integrates with popular payment gateways for digital fee collection, with automatic receipts and due tracking.' },
    { question: 'Is our data secure?', answer: 'Yes. ShikkhaERP uses role-based access control and encrypted connections so only authorized staff can access sensitive records.' },
    { question: 'Is there a free trial or demo?', answer: 'Yes. We offer a free live demo tailored to your institution — no commitment required to see the full platform.' },
    { question: 'What kind of support do you offer?', answer: 'We provide email and phone support during business hours. Standard and Premium plans include priority support.' },
    { question: 'Can I cancel anytime?', answer: 'Yes. Monthly plans have no lock-in. Cancel anytime with no hidden fees.' }
  ];

  return (
    <>
      {/* SECTION 1: HERO */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary leading-tight">
                Run your entire school from one platform
              </h1>
              <p className="mt-6 text-lg text-gray-600 max-w-2xl">
                ShikkhaERP is a cloud-based school management system built for Bangladeshi institutions — covering admissions, attendance, fees, exams, payroll, parent communication, and reporting, all in one place.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/contact" className="bg-cta text-white px-8 py-3 rounded-lg font-semibold hover:bg-cta-hover transition shadow-md">
                  Request free demo
                </Link>
                <Link href="/features" className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
                  Explore features ↗
                </Link>
              </div>
              <p className="mt-4 text-sm text-gray-500">Free 14-day trial • No credit card required • Bengali support</p>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-full max-w-md h-80 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                Live dashboard mockup
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: SOCIAL PROOF BAR */}
      <section className="bg-light py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">100+</div>
              <div className="text-gray-600 text-sm">Schools</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50K+</div>
              <div className="text-gray-600 text-sm">Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">5K+</div>
              <div className="text-gray-600 text-sm">Teachers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">1M+</div>
              <div className="text-gray-600 text-sm">Records processed</div>
            </div>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">Trusted by forward-thinking institutions across Bangladesh.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <span className="flex items-center gap-2 text-sm text-gray-500"><span className="text-xl">🔒</span> 100% Secure SSL Encrypted</span>
            <span className="flex items-center gap-2 text-sm text-gray-500"><span className="text-xl">💳</span> bKash, Nagad, Rocket Integration</span>
            <span className="flex items-center gap-2 text-sm text-gray-500"><span className="text-xl">📱</span> Mobile Ready</span>
            <span className="flex items-center gap-2 text-sm text-gray-500"><span className="text-xl">☁️</span> Cloud Based 24/7</span>
          </div>
        </div>
      </section>

      {/* SECTION 3: PAIN POINTS */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Still managing your school manually?</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Traditional methods create inefficiencies that impact your institution's growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {painPoints.map((point, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl border border-gray-200 hover:shadow-md transition">
                <point.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary">{point.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY SHIKKHAERP (BENEFITS) */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Everything your institution needs — connected, automated, and always accessible</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">A complete ecosystem for modern educational management.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
                <benefit.icon className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-semibold text-primary">{benefit.title}</h3>
                <p className="text-gray-600 text-sm mt-1">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: FEATURE MODULES */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Powerful features designed for modern schools</h2>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">Everything you need to run your institution efficiently.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {featureModules.map((feature, index) => (
              <span key={index} className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent hover:text-white transition cursor-default">
                {feature}
              </span>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/features" className="text-accent font-medium hover:underline">View all features →</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: HOW IT WORKS */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Get started in three simple steps</h2>
            <p className="text-gray-600 mt-2">From demo to full deployment in days, not months.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-semibold text-primary">Book a free demo</h3>
              <p className="text-gray-600 text-sm mt-2">See the platform live with your institution's use case in 30 minutes.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-semibold text-primary">Configure your school</h3>
              <p className="text-gray-600 text-sm mt-2">Our team helps you set up modules, import data, and train staff.</p>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-200">
              <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-semibold text-primary">Go live in days</h3>
              <p className="text-gray-600 text-sm mt-2">Start managing operations digitally — fully supported from day one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: FAQ */}
      <section className="py-16 bg-light">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Frequently asked questions</h2>
            <p className="text-gray-600 mt-2">Everything you need to know about ShikkhaERP.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-2">
            {faqs.map((faq, index) => (
              <SimpleFAQ key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: FINAL CTA */}
      <section className="bg-primary py-16">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Ready to move your school into the digital era?</h2>
          <p className="text-accent-light mb-8 max-w-2xl mx-auto">
            Join 100+ institutions across Bangladesh that have replaced manual operations with ShikkhaERP. No long contracts. No setup fees. Just a smarter way to run your school.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
              Request free demo
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition">
              Contact sales ↗
            </Link>
          </div>
          <p className="mt-6 text-sm text-accent-light">Free 14-day trial • No credit card required • Free data migration</p>
        </div>
      </section>
    </>
  );
}